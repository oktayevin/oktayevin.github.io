# Admin Panel

Bu klasör, mevcut site dosyalarına dokunmadan bağımsız çalışan bir blog admin paneli içerir.

## Çalıştırma

```bash
node admin/server.js
```

Ardından tarayıcıdan açın:

- `http://localhost:3030`

## Özellikler

- WordPress benzeri içerik üretim arayüzü
- Rich text editör (kalın, italik, liste, başlık, ayraç)
- JSON önizleme
- Taslak kaydetme (localStorage)
- `blog-posts.json` dosyasına otomatik post ekleme
- Mobil uyumlu (responsive) tasarım

## Not

Varsayılan olarak `../blog-posts.json` dosyasını günceller. Gerekirse dosya yolu ve port değiştirilebilir:

```bash
ADMIN_PORT=4040 BLOG_POST_FILE=/path/to/blog-posts.json node admin/server.js
```
