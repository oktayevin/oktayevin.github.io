# # Oktay Evin - Personal Website & MCP Chatbot

Bu repository Oktay Evin'in kişisel web sitesini ve MCP destekli güvenli chatbot'unu içerir.

## Özellikler

- 🌐 Kişisel portföy web sitesi
- 🤖 MCP destekli AI chatbot
- 🔐 Güvenli kimlik doğrulama
- 🎨 Modern ve responsive tasarım
- 🚀 Gemini AI entegrasyonu

## Kurulum

### 1. Repository'yi klonlayın
```bash
git clone https://github.com/oktayevin/oktayevin.github.io.git
cd oktayevin.github.io
```

### 2. Node.js bağımlılıklarını yükleyin
```bash
npm install
```

### 3. Environment variables'ı ayarlayın
`.env` dosyasını oluşturun ve gerekli bilgileri doldurun:
```env
GEMINI_API_KEY=your_gemini_api_key_here
MCP_SSE_URL=your_mcp_sse_url_here
CHATBOT_USERNAME=your_username
CHATBOT_PASSWORD=your_secure_password
PORT=3000
```

### 4. Serveri başlatın
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 5. Chatbot'a erişin
Tarayıcınızda `http://localhost:3000/chatbot.html` adresine gidin.

## Güvenlik

- ✅ API anahtarları server-side'da saklanır
- ✅ Kullanıcı kimlik doğrulaması backend'de yapılır
- ✅ Environment variables ile hassas bilgiler korunur
- ✅ CORS koruması aktif
- ✅ Token tabanlı oturum yönetimi

## Deployment

### GitHub Pages (Statik site için)
GitHub Pages otomatik olarak `index.html` dosyasını serve eder.

### Node.js Server (Chatbot için)
Heroku, Railway, Vercel gibi platformlarda deploy edebilirsiniz:

```bash
# Environment variables'ı platform üzerinde ayarlamayı unutmayın
GEMINI_API_KEY=xxx
MCP_SSE_URL=xxx
CHATBOT_USERNAME=xxx
CHATBOT_PASSWORD=xxx
```

## Teknolojiler

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini API
- **MCP**: Server-Sent Events (SSE)
- **Güvenlik**: Environment Variables, Token Authentication