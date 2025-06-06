// Chatbot Configuration - Artık backend API'leri kullanıyor
const CONFIG = {
    // Production backend URL'ini buraya yazın (Railway deploy sonrası)
    API_BASE: window.location.hostname === 'localhost' 
        ? 'http://localhost:3000' 
        : 'https://oktayevingithubio-production.up.railway.app', // Railway URL'inizi buraya yazın
    ENDPOINTS: {
        AUTH: '/api/auth',
        CHAT: '/api/chat',
        MCP_EVENTS: '/api/mcp-events'
    }
};

class ChatbotApp {
    constructor() {
        this.currentUser = null;
        this.messages = [];
        this.mcpEventSource = null;
        
        this.initializeElements();
        this.attachEventListeners();
        this.checkAuthStatus();
    }

    initializeElements() {
        // DOM Elements
        this.loginModal = document.getElementById('loginModal');
        this.loginForm = document.getElementById('loginForm');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
        this.loginError = document.getElementById('loginError');
        
        this.chatbotContainer = document.getElementById('chatbotContainer');
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.clearChatBtn = document.getElementById('clearChat');
        this.logoutBtn = document.getElementById('logoutBtn');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.charCount = document.getElementById('charCount');
        this.loadingOverlay = document.getElementById('loadingOverlay');
        this.botStatus = document.getElementById('botStatus');
    }

    attachEventListeners() {
        // Login Form
        this.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        
        // Chat Input
        this.messageInput.addEventListener('input', () => this.updateCharCount());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        this.sendButton.addEventListener('click', () => this.sendMessage());
        
        // Header Buttons
        this.clearChatBtn.addEventListener('click', () => this.clearChat());
        this.logoutBtn.addEventListener('click', () => this.logout());
        
        // Close modal on outside click
        this.loginModal.addEventListener('click', (e) => {
            if (e.target === this.loginModal) {
                this.showLoginError('Lütfen giriş bilgilerinizi girin.');
            }
        });
    }

    checkAuthStatus() {
        const savedUser = localStorage.getItem('chatbot_user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.showChatInterface();
        } else {
            this.showLoginModal();
        }
    }

    async handleLogin(e) {
        e.preventDefault();
        
        const username = this.usernameInput.value.trim();
        const password = this.passwordInput.value.trim();
        
        if (!username || !password) {
            this.showLoginError('Lütfen tüm alanları doldurun.');
            return;
        }
        
        this.showLoadingOverlay();
        
        try {
            const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.AUTH}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.currentUser = { 
                    username, 
                    token: data.token,
                    loginTime: new Date().toISOString() 
                };
                localStorage.setItem('chatbot_user', JSON.stringify(this.currentUser));
                this.hideLoginError();
                this.hideLoadingOverlay();
                this.showChatInterface();
            } else {
                this.hideLoadingOverlay();
                this.showLoginError(data.message || 'Hatalı kullanıcı adı veya şifre.');
                this.passwordInput.value = '';
            }
        } catch (error) {
            this.hideLoadingOverlay();
            this.showLoginError('Bağlantı hatası. Lütfen tekrar deneyin.');
            console.error('Login error:', error);
        }
    }

    showLoginError(message) {
        this.loginError.textContent = message;
        this.loginError.style.display = 'block';
        setTimeout(() => this.hideLoginError(), 5000);
    }

    hideLoginError() {
        this.loginError.style.display = 'none';
    }

    showLoginModal() {
        this.loginModal.style.display = 'flex';
        this.chatbotContainer.style.display = 'none';
        this.usernameInput.focus();
    }

    showChatInterface() {
        this.loginModal.style.display = 'none';
        this.chatbotContainer.style.display = 'flex';
        this.messageInput.focus();
        this.initializeMCPConnection();
        this.loadChatHistory();
    }

    async initializeMCPConnection() {
        try {
            this.updateBotStatus('MCP Bağlanıyor...', false);
            
            const mcpUrl = `${CONFIG.API_BASE}${CONFIG.ENDPOINTS.MCP_EVENTS}`;
            this.mcpEventSource = new EventSource(mcpUrl);
            
            // 10 saniye timeout ekle
            const timeoutId = setTimeout(() => {
                if (this.mcpEventSource.readyState !== EventSource.OPEN) {
                    this.updateBotStatus('MCP İsteğe Bağlı', true);
                    console.log('MCP connection timeout - continuing without MCP');
                }
            }, 10000);
            
            this.mcpEventSource.onopen = () => {
                clearTimeout(timeoutId);
                this.updateBotStatus('MCP Bağlı', true);
                console.log('MCP connection established');
            };
            
            this.mcpEventSource.onmessage = (event) => {
                console.log('MCP message received:', event.data);
                try {
                    const data = JSON.parse(event.data);
                    if (data.status === 'MCP not configured') {
                        clearTimeout(timeoutId);
                        this.updateBotStatus('MCP Kapalı', true);
                        console.log('MCP not configured - chatbot will work without MCP');
                    } else if (data.status === 'connected') {
                        clearTimeout(timeoutId);
                        this.updateBotStatus('MCP Bağlı', true);
                    } else if (data.error) {
                        this.updateBotStatus('MCP Hatası (İsteğe Bağlı)', true);
                        console.warn('MCP error (optional):', data.error);
                    }
                    // MCP mesajlarını burada işleyebilirsiniz
                } catch (e) {
                    console.log('MCP raw message:', event.data);
                }
            };
            
            this.mcpEventSource.onerror = (error) => {
                clearTimeout(timeoutId);
                console.warn('MCP connection error (non-critical):', error);
                this.updateBotStatus('MCP İsteğe Bağlı', true);
                // MCP hatası chatbot'u engellemez
            };
            
        } catch (error) {
            console.warn('Failed to initialize MCP connection (non-critical):', error);
            this.updateBotStatus('MCP İsteğe Bağlı', true);
            // MCP hatası chatbot'u engellemez
        }
    }

    updateBotStatus(status, isOnline) {
        this.botStatus.textContent = status;
        this.botStatus.style.color = isOnline ? '#2ecc71' : '#e74c3c';
    }

    updateCharCount() {
        const count = this.messageInput.value.length;
        this.charCount.textContent = `${count}/1000`;
        
        if (count > 900) {
            this.charCount.style.color = '#e74c3c';
        } else if (count > 700) {
            this.charCount.style.color = '#f39c12';
        } else {
            this.charCount.style.color = '#999';
        }
    }

    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Disable input while processing
        this.setInputState(false);
        
        // Add user message to chat
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.updateCharCount();
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Send to Gemini API
            const response = await this.sendToGemini(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'bot');
        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage('Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.', 'bot');
            console.error('Error sending message:', error);
        }
        
        // Re-enable input
        this.setInputState(true);
        this.messageInput.focus();
    }

    async sendToGemini(message) {
        try {
            const response = await fetch(`${CONFIG.API_BASE}${CONFIG.ENDPOINTS.CHAT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: this.buildContextualPrompt(message),
                    token: this.currentUser?.token
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
            
        } catch (error) {
            console.error('Chat API error:', error);
            throw error;
        }
    }

    buildContextualPrompt(userMessage) {
        let prompt = `Sen yardımcı bir AI asistanısın. Kullanıcıya Türkçe olarak net, yararlı ve dostane yanıtlar ver.

Kullanıcı mesajı: ${userMessage}

Lütfen:
1. Kısa ve öz ol
2. Türkçe yanıtla
3. Mümkünse örnekler ver
4. Eğer emin değilsen, bunu belirt`;

        // Add recent conversation context
        if (this.messages.length > 0) {
            const recentMessages = this.messages.slice(-4); // Last 4 messages
            let context = '\n\nSon konuşma:\n';
            recentMessages.forEach(msg => {
                context += `${msg.sender === 'user' ? 'Kullanıcı' : 'Asistan'}: ${msg.text}\n`;
            });
            prompt += context;
        }

        return prompt;
    }

    addMessage(text, sender) {
        const message = {
            id: Date.now(),
            text: text,
            sender: sender,
            timestamp: new Date().toISOString()
        };
        
        this.messages.push(message);
        this.renderMessage(message);
        this.saveChatHistory();
        this.scrollToBottom();
    }

    renderMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas ${message.sender === 'user' ? 'fa-user' : 'fa-robot'}"></i>
            </div>
            <div class="message-content">
                <p>${this.formatMessage(message.text)}</p>
                <span class="message-time">${this.formatTime(message.timestamp)}</span>
            </div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
    }

    formatMessage(text) {
        // Basic text formatting
        return text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>');
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        
        if (diffMins < 1) return 'Şimdi';
        if (diffMins < 60) return `${diffMins} dk önce`;
        if (diffMins < 1440) return `${Math.floor(diffMins / 60)} sa önce`;
        
        return date.toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    showTypingIndicator() {
        this.typingIndicator.style.display = 'flex';
    }

    hideTypingIndicator() {
        this.typingIndicator.style.display = 'none';
    }

    setInputState(enabled) {
        this.messageInput.disabled = !enabled;
        this.sendButton.disabled = !enabled;
        
        if (enabled) {
            this.sendButton.style.opacity = '1';
        } else {
            this.sendButton.style.opacity = '0.5';
        }
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }

    showLoadingOverlay() {
        this.loadingOverlay.style.display = 'flex';
    }

    hideLoadingOverlay() {
        this.loadingOverlay.style.display = 'none';
    }

    clearChat() {
        if (confirm('Tüm sohbet geçmişini silmek istediğinizden emin misiniz?')) {
            this.messages = [];
            this.chatMessages.innerHTML = `
                <div class="message bot-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <p>Sohbet temizlendi. Yeni bir konuşma başlayalım!</p>
                        <span class="message-time">Şimdi</span>
                    </div>
                </div>
            `;
            this.saveChatHistory();
        }
    }

    logout() {
        if (confirm('Çıkış yapmak istediğinizden emin misiniz?')) {
            // Close MCP connection
            if (this.mcpEventSource) {
                this.mcpEventSource.close();
                this.mcpEventSource = null;
            }
            
            // Clear user data
            localStorage.removeItem('chatbot_user');
            this.currentUser = null;
            this.messages = [];
            
            // Reset form
            this.usernameInput.value = '';
            this.passwordInput.value = '';
            this.hideLoginError();
            
            // Show login modal
            this.showLoginModal();
        }
    }

    saveChatHistory() {
        if (this.currentUser) {
            const chatData = {
                messages: this.messages,
                lastSaved: new Date().toISOString()
            };
            localStorage.setItem(`chatbot_history_${this.currentUser.username}`, JSON.stringify(chatData));
        }
    }

    loadChatHistory() {
        if (this.currentUser) {
            const chatData = localStorage.getItem(`chatbot_history_${this.currentUser.username}`);
            if (chatData) {
                try {
                    const parsed = JSON.parse(chatData);
                    this.messages = parsed.messages || [];
                    
                    // Clear existing messages and render saved ones
                    this.chatMessages.innerHTML = '';
                    this.messages.forEach(message => this.renderMessage(message));
                    this.scrollToBottom();
                } catch (error) {
                    console.error('Error loading chat history:', error);
                }
            }
        }
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ChatbotApp();
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    // Close MCP connection if exists
    if (window.chatbot && window.chatbot.mcpEventSource) {
        window.chatbot.mcpEventSource.close();
    }
}); 