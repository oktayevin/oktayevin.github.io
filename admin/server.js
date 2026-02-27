const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = process.env.ADMIN_PORT || 3030;
const BLOG_FILE = process.env.BLOG_POST_FILE || path.resolve(__dirname, '..', 'blog-posts.json');

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(__dirname));

const normalizePost = (post) => ({
  id: String(post.id || '').trim(),
  title: String(post.title || '').trim(),
  excerpt: String(post.excerpt || '').trim(),
  category: String(post.category || '').trim(),
  section: String(post.section || '').trim(),
  date: String(post.date || '').trim(),
  readTime: String(post.readTime || '').trim(),
  author: String(post.author || '').trim(),
  heroStyle: post.heroStyle ? String(post.heroStyle).trim() : undefined,
  content: Array.isArray(post.content)
    ? post.content
        .map((item) => ({
          heading: String(item.heading || '').trim() || 'Bölüm',
          paragraphs: Array.isArray(item.paragraphs)
            ? item.paragraphs.map((p) => String(p).trim()).filter(Boolean)
            : []
        }))
        .filter((item) => item.paragraphs.length)
    : []
});

const validatePost = (post) => {
  const required = ['id', 'title', 'excerpt', 'category', 'section', 'date', 'readTime', 'author'];
  const missing = required.filter((field) => !post[field]);
  if (missing.length) {
    return `Eksik alanlar: ${missing.join(', ')}`;
  }
  if (!post.content.length) {
    return 'İçerik en az bir bölüm içermelidir';
  }
  return null;
};

const readBlogData = async () => {
  const raw = await fs.readFile(BLOG_FILE, 'utf8');
  return JSON.parse(raw);
};

app.get('/api/admin/health', (_, res) => {
  res.json({ ok: true, file: BLOG_FILE });
});

app.get('/api/admin/posts', async (_, res) => {
  try {
    const data = await readBlogData();
    res.json({ totalPosts: data.posts?.length || 0, posts: data.posts || [] });
  } catch (error) {
    res.status(500).json({ message: `Dosya okunamadı: ${error.message}` });
  }
});

app.post('/api/admin/posts', async (req, res) => {
  try {
    const post = normalizePost(req.body || {});
    const validationError = validatePost(post);

    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const data = await readBlogData();
    data.posts = data.posts || [];

    if (data.posts.some((item) => item.id === post.id)) {
      return res.status(409).json({ message: 'Bu ID zaten mevcut. Başlığı değiştirin.' });
    }

    data.posts.unshift(post);
    await fs.writeFile(BLOG_FILE, `${JSON.stringify(data, null, 2)}\n`, 'utf8');

    return res.status(201).json({ message: 'Post eklendi', totalPosts: data.posts.length, post });
  } catch (error) {
    return res.status(500).json({ message: `Yazma hatası: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Admin panel: http://localhost:${PORT}`);
  console.log(`JSON file: ${BLOG_FILE}`);
});
