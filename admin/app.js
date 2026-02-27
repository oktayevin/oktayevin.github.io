const API_BASE = 'http://localhost:3030/api/admin';
const DRAFT_KEY = 'blog-admin-draft-v1';

const form = document.getElementById('postForm');
const editor = document.getElementById('editor');
const jsonOutput = document.getElementById('jsonOutput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const sectionCount = document.getElementById('sectionCount');
const connectionStatus = document.getElementById('connectionStatus');
const draftStatus = document.getElementById('draftStatus');

const fields = {
  title: document.getElementById('title'),
  excerpt: document.getElementById('excerpt'),
  category: document.getElementById('category'),
  section: document.getElementById('section'),
  date: document.getElementById('date'),
  readTime: document.getElementById('readTime'),
  author: document.getElementById('author'),
  heroStyle: document.getElementById('heroStyle')
};

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const extractContentSections = () => {
  const blocks = Array.from(editor.childNodes);
  const sections = [];
  let current = { heading: 'Giriş', paragraphs: [] };

  blocks.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.trim();
      if (text) current.paragraphs.push(text);
      return;
    }

    const tag = node.tagName?.toLowerCase();
    const text = node.textContent.trim();
    if (!text) return;

    if (tag === 'h1' || tag === 'h2' || tag === 'h3') {
      if (current.paragraphs.length || current.heading !== 'Giriş') {
        sections.push(current);
      }
      current = { heading: text, paragraphs: [] };
      return;
    }

    if (tag === 'ul' || tag === 'ol') {
      Array.from(node.querySelectorAll('li')).forEach((li) => {
        const liText = li.textContent.trim();
        if (liText) current.paragraphs.push(`• ${liText}`);
      });
      return;
    }

    if (tag === 'hr') {
      if (current.paragraphs.length || current.heading !== 'Giriş') {
        sections.push(current);
      }
      current = { heading: 'Yeni Bölüm', paragraphs: [] };
      return;
    }

    current.paragraphs.push(text);
  });

  if (current.paragraphs.length || current.heading !== 'Giriş') {
    sections.push(current);
  }

  return sections.filter((item) => item.paragraphs.length > 0);
};

const collectPayload = () => ({
  id: slugify(fields.title.value),
  title: fields.title.value.trim(),
  excerpt: fields.excerpt.value.trim(),
  category: fields.category.value.trim(),
  section: fields.section.value,
  date: fields.date.value,
  readTime: fields.readTime.value.trim(),
  author: fields.author.value.trim(),
  heroStyle: fields.heroStyle.value.trim() || undefined,
  content: extractContentSections()
});

const updateStats = () => {
  const text = editor.innerText.trim();
  const words = text ? text.split(/\s+/).length : 0;
  wordCount.textContent = words;
  charCount.textContent = text.length;
  sectionCount.textContent = extractContentSections().length;
  jsonOutput.textContent = JSON.stringify(collectPayload(), null, 2);
};

const saveDraft = () => {
  const draft = {
    fields: Object.fromEntries(Object.entries(fields).map(([key, input]) => [key, input.value])),
    html: editor.innerHTML,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  draftStatus.textContent = `Kaydedildi: ${new Date(draft.updatedAt).toLocaleString('tr-TR')}`;
};

const loadDraft = () => {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) return;
  try {
    const draft = JSON.parse(raw);
    Object.entries(fields).forEach(([key, input]) => {
      input.value = draft.fields?.[key] || '';
    });
    editor.innerHTML = draft.html || '';
    draftStatus.textContent = `Yüklendi: ${new Date(draft.updatedAt).toLocaleString('tr-TR')}`;
  } catch (err) {
    draftStatus.textContent = 'Taslak okunamadı';
  }
};

const pingApi = async () => {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error('Bağlantı hatası');
    connectionStatus.textContent = 'API bağlı (localhost:3030)';
  } catch {
    connectionStatus.textContent = 'API kapalı. node admin/server.js ile başlatın.';
  }
};

Array.from(document.querySelectorAll('[data-cmd]')).forEach((button) => {
  button.addEventListener('click', () => {
    const cmd = button.dataset.cmd;
    const value = button.dataset.value;
    document.execCommand(cmd, false, value || null);
    updateStats();
    editor.focus();
  });
});

document.getElementById('addDividerBtn').addEventListener('click', () => {
  document.execCommand('insertHorizontalRule');
  updateStats();
});

document.getElementById('clearEditorBtn').addEventListener('click', () => {
  editor.innerHTML = '';
  updateStats();
});

document.getElementById('saveDraftBtn').addEventListener('click', saveDraft);
document.getElementById('clearDraftBtn').addEventListener('click', () => {
  localStorage.removeItem(DRAFT_KEY);
  draftStatus.textContent = 'Taslak temizlendi';
});

form.addEventListener('input', updateStats);
editor.addEventListener('input', updateStats);

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const payload = collectPayload();

  if (!payload.content.length) {
    alert('Lütfen editöre en az bir içerik bölümü ekleyin.');
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Kayıt başarısız');

    alert(`Yayınlandı! Toplam post sayısı: ${data.totalPosts}`);
    saveDraft();
  } catch (error) {
    alert(`Hata: ${error.message}`);
  }
});

fields.date.value = new Date().toISOString().slice(0, 10);
loadDraft();
pingApi();
updateStats();
