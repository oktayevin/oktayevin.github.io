const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://oktayevin.github.io',
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
        
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        
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
    
    if (!mcpUrl) {
        return res.status(500).json({ error: 'MCP URL yapılandırılmamış' });
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
    const EventSource = require('eventsource');
    const eventSource = new EventSource(mcpUrl);
    
    eventSource.onmessage = (event) => {
        res.write(`data: ${event.data}\n\n`);
    };
    
    eventSource.onerror = (error) => {
        console.error('MCP SSE error:', error);
        res.write(`data: ${JSON.stringify({ error: 'MCP connection error' })}\n\n`);
    };
    
    // Client disconnect'te temizlik
    req.on('close', () => {
        eventSource.close();
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Chatbot available at http://localhost:${PORT}/chatbot.html');
}); 