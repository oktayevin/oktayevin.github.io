const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// SSL sertifikası sorunları için Node.js ayarları
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Self-signed certificates için
process.env.UV_THREADPOOL_SIZE = '128'; // EventSource performance için

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://oktayevin.github.io',
        'https://oktayevin.com', // Custom domain
        'http://oktayevin.com', // HTTP version (just in case)
        'https://oktayevingithubio-production.up.railway.app' // Railway URL'inizi buraya da ekleyin
    ],
    credentials: true
}));
app.use(express.json());
app.use(express.static('.'));

// Kullanıcı doğrulama endpoint'i
app.post('/api/auth', (req, res) => {
    const { username, password } = req.body;
    
    // Environment variables'dan kullanıcı bilgilerini al
    const validUsername = process.env.CHATBOT_USERNAME || 'admin';
    const validPassword = process.env.CHATBOT_PASSWORD || 'password123';
    
    if (username === validUsername && password === validPassword) {
        // Basit bir token oluştur (üretimde JWT kullanın)
        const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, message: 'Hatalı kullanıcı adı veya şifre' });
    }
});

// Gemini API proxy endpoint'i
app.post('/api/chat', async (req, res) => {
    try {
        const { message, token } = req.body;
        
        // Token doğrulama (basit)
        if (!token) {
            return res.status(401).json({ error: 'Token gerekli' });
        }
        
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'API key yapılandırılmamış' });
        }
        
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        
        const requestBody = {
            contents: [{
                parts: [{
                    text: `Sen yardımcı bir AI asistanısın. Kullanıcıya Türkçe olarak net, yararlı ve dostane yanıtlar ver.

Kullanıcı mesajı: ${message}

Lütfen:
1. Kısa ve öz ol
2. Türkçe yanıtla
3. Mümkünse örnekler ver
4. Eğer emin değilsen, bunu belirt`
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            res.json({ response: data.candidates[0].content.parts[0].text });
        } else {
            throw new Error('Invalid response format from Gemini API');
        }
    } catch (error) {
        console.error('Gemini API error:', error);
        res.status(500).json({ error: 'Bir hata oluştu' });
    }
});

// MCP SSE proxy endpoint'i
app.get('/api/mcp-events', (req, res) => {
    const mcpUrl = process.env.MCP_SSE_URL;
    
    if (!mcpUrl || mcpUrl === 'YOUR_MCP_SSE_URL_HERE') {
        // MCP yapılandırılmamışsa dummy SSE response gönder
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Cache-Control'
        });
        
        res.write(`data: ${JSON.stringify({ status: 'MCP not configured' })}\n\n`);
        
        // Keep-alive için periyodik ping gönder
        const pingInterval = setInterval(() => {
            res.write(`data: ${JSON.stringify({ ping: Date.now() })}\n\n`);
        }, 30000);
        
        req.on('close', () => {
            clearInterval(pingInterval);
        });
        return;
    }
    
    // SSE headers
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Cache-Control'
    });
    
    // MCP SSE connection'ı proxy'le
    try {
        const EventSource = require('eventsource');
        
        // SSL sertifikası sorunları için eventsource options
        const eventSourceOptions = {
            https: {
                rejectUnauthorized: false, // Self-signed certificates için
                secureProtocol: 'TLSv1_2_method', // TLS version
                servername: '', // SNI deaktif
            },
            headers: {
                'Cache-Control': 'no-cache',
                'Accept': 'text/event-stream',
                'User-Agent': 'Node.js EventSource Client'
            },
            proxy: undefined, // Proxy deaktif
            withCredentials: false,
            heartbeatTimeout: 20000,
            retry: {
                retries: 3,
                factor: 2,
                minTimeout: 1000,
                maxTimeout: 5000
            }
        };
        
        console.log('Attempting MCP connection to:', mcpUrl.replace(/\/\/.*@/, '//***:***@')); // URL'i güvenli log
        const eventSource = new EventSource(mcpUrl, eventSourceOptions);
        
        eventSource.onopen = () => {
            console.log('MCP SSE connection established successfully');
            res.write(`data: ${JSON.stringify({ status: 'connected', timestamp: Date.now() })}\n\n`);
        };
        
        eventSource.onmessage = (event) => {
            console.log('MCP message received:', event.data?.substring(0, 100) + '...'); // İlk 100 karakter log
            res.write(`data: ${event.data}\n\n`);
        };
        
        eventSource.onerror = (error) => {
            console.error('MCP SSE error details:', {
                type: error.type,
                message: error.message,
                status: error.status,
                readyState: eventSource.readyState
            });
            
            // Hata detayları ile birlikte client'a bildir
            res.write(`data: ${JSON.stringify({ 
                error: 'MCP connection error', 
                details: error.message,
                type: error.type,
                timestamp: Date.now()
            })}\n\n`);
        };
        
        // Connection timeout
        const connectionTimeout = setTimeout(() => {
            if (eventSource.readyState !== EventSource.OPEN) {
                console.log('MCP connection timeout, closing...');
                eventSource.close();
                res.write(`data: ${JSON.stringify({ error: 'Connection timeout' })}\n\n`);
            }
        }, 15000);
        
        // Client disconnect'te temizlik
        req.on('close', () => {
            clearTimeout(connectionTimeout);
            eventSource.close();
            console.log('MCP EventSource closed due to client disconnect');
        });
        
    } catch (error) {
        console.error('Failed to create MCP EventSource:', {
            message: error.message,
            stack: error.stack?.substring(0, 300)
        });
        res.write(`data: ${JSON.stringify({ 
            error: 'Failed to connect to MCP', 
            details: error.message,
            timestamp: Date.now()
        })}\n\n`);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Chatbot available at http://localhost:${PORT}/chatbot.html');
}); 