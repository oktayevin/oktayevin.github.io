const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = process.env.ADMIN_PORT || 3030;
const BLOG_FILE = process.env.BLOG_POST_FILE || path.resolve(__dirname, '..', 'blog-posts.json');

app.use(cors());
app.use(express.json({ limit: '8mb' }));
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
        .map((s) => ({
          heading: String(s.heading || '').trim() || 'Bölüm',
          paragraphs: Array.isArray(s.paragraphs) ? s.paragraphs.map((p) => String(p).trim()).filter(Boolean) : []
        }))
        .filter((s) => s.paragraphs.length)
    : []
});

const validatePost = (post) => {
  const required = ['id', 'title', 'excerpt', 'category', 'section', 'date', 'readTime', 'author'];
  const missing = required.filter((f) => !post[f]);
  if (missing.length) return `Eksik alanlar: ${missing.join(', ')}`;
  if (!post.content.length) return 'İçerik en az bir bölüm içermelidir';
  return null;
};

const readData = async () => JSON.parse(await fs.readFile(BLOG_FILE, 'utf8'));
const writeData = async (data) => fs.writeFile(BLOG_FILE, `${JSON.stringify(data, null, 2)}\n`, 'utf8');

app.get('/api/admin/health', (_, res) => res.json({ ok: true, file: BLOG_FILE }));

app.get('/api/admin/posts', async (_, res) => {
  try {
    const data = await readData();
    res.json({ totalPosts: data.posts?.length || 0, posts: data.posts || [] });
  } catch (error) {
    res.status(500).json({ message: `Dosya okunamadı: ${error.message}` });
  }
});

app.get('/api/admin/posts/:id', async (req, res) => {
  try {
    const data = await readData();
    const post = (data.posts || []).find((p) => p.id === req.params.id);
    if (!post) return res.status(404).json({ message: 'Post bulunamadı' });
    return res.json({ post });
  } catch (error) {
    return res.status(500).json({ message: `Okuma hatası: ${error.message}` });
  }
});

app.post('/api/admin/posts', async (req, res) => {
  try {
    const post = normalizePost(req.body || {});
    const error = validatePost(post);
    if (error) return res.status(400).json({ message: error });

    const data = await readData();
    data.posts = data.posts || [];

    if (data.posts.some((item) => item.id === post.id)) {
      return res.status(409).json({ message: 'Bu ID zaten mevcut. Düzenleme modunu kullanın.' });
    }

    data.posts.unshift(post);
    await writeData(data);
    return res.status(201).json({ message: 'Post eklendi', totalPosts: data.posts.length, post });
  } catch (error) {
    return res.status(500).json({ message: `Yazma hatası: ${error.message}` });
  }
});

app.put('/api/admin/posts/:id', async (req, res) => {
  try {
    const data = await readData();
    const idx = (data.posts || []).findIndex((p) => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ message: 'Güncellenecek post bulunamadı' });

    const next = normalizePost({ ...req.body, id: req.params.id });
    const error = validatePost(next);
    if (error) return res.status(400).json({ message: error });

    data.posts[idx] = next;
    await writeData(data);
    return res.json({ message: 'Post güncellendi', post: next, totalPosts: data.posts.length });
  } catch (error) {
    return res.status(500).json({ message: `Güncelleme hatası: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Admin panel: http://localhost:${PORT}`);
  console.log(`JSON file: ${BLOG_FILE}`);
});
