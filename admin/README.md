# Medium-Style Admin Panel

Bu klasör mevcut site dosyalarına dokunmadan, ayrı çalışan bir admin panel sağlar.

## Çalıştırma

```bash
node admin/server.js
```

Açılış URL'i:

- `http://localhost:3030`

## Özellikler

- Medium benzeri 3 kolonlu yönetim ekranı
- Sol panelde mevcut post listesi
- Post seçip önizleme + düzenleme
- Yeni post oluşturma ve yayınlama
- Rich-text editör (bold, italic, heading, blockquote, list)
- Inline görsel ekleme
  - URL ile ekleme
  - Yerel dosya yükleyip base64 inline gömme
- Canlı önizleme + JSON önizleme
- `blog-posts.json` otomatik güncelleme
- Responsive tasarım

## API

- `GET /api/admin/health`
- `GET /api/admin/posts`
- `GET /api/admin/posts/:id`
- `POST /api/admin/posts`
- `PUT /api/admin/posts/:id`

## Konfigürasyon

```bash
ADMIN_PORT=4040 BLOG_POST_FILE=/path/to/blog-posts.json node admin/server.js
```
