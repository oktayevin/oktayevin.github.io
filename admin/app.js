const API_BASE = `${window.location.origin}/api/admin`;
const DRAFT_KEY = 'medium-admin-draft-v2';

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

const editor = document.getElementById('editor');
const postsList = document.getElementById('postsList');
const jsonOutput = document.getElementById('jsonOutput');
const preview = document.getElementById('preview');
const connectionStatus = document.getElementById('connectionStatus');
let editingPostId = null;
let previewOpen = true;

const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

const editorBlocksToSections = () => {
  const sections = [];
  let current = { heading: 'Giriş', paragraphs: [] };

  Array.from(editor.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = node.textContent.trim();
      if (t) current.paragraphs.push(t);
      return;
    }

    const tag = (node.tagName || '').toLowerCase();
    const html = node.outerHTML || '';
    const text = node.textContent.trim();

    if (tag === 'h1' || tag === 'h2' || tag === 'h3') {
      if (current.paragraphs.length || current.heading !== 'Giriş') sections.push(current);
      current = { heading: text || 'Bölüm', paragraphs: [] };
      return;
    }

    if (tag === 'img') {
      current.paragraphs.push(html);
      return;
    }

    if (['p', 'blockquote', 'ul', 'ol', 'figure', 'div'].includes(tag)) {
      if (text || tag === 'figure') current.paragraphs.push(node.innerHTML ? `<${tag}>${node.innerHTML}</${tag}>` : html);
      return;
    }

    if (text) current.paragraphs.push(text);
  });

  if (current.paragraphs.length || current.heading !== 'Giriş') sections.push(current);
  return sections.filter((s) => s.paragraphs.length);
};

const getPayload = () => ({
  id: editingPostId || slugify(fields.title.value),
  title: fields.title.value.trim(),
  excerpt: fields.excerpt.value.trim(),
  category: fields.category.value.trim(),
  section: fields.section.value,
  date: fields.date.value,
  readTime: fields.readTime.value.trim(),
  author: fields.author.value.trim(),
  heroStyle: fields.heroStyle.value.trim() || undefined,
  content: editorBlocksToSections()
});

const renderPreview = () => {
  const post = getPayload();
  const body = (post.content || []).map((s) => `
    <section>
      <h4>${s.heading}</h4>
      ${s.paragraphs.map((p) => `<div class="pv-p">${p}</div>`).join('')}
    </section>
  `).join('');

  preview.innerHTML = `
    <h2>${post.title || 'Başlık'}</h2>
    <p class="muted">${post.excerpt || 'Alt başlık'}</p>
    ${body}
  `;

  jsonOutput.textContent = JSON.stringify(post, null, 2);
};

const setForm = (post = null) => {
  editingPostId = post?.id || null;
  Object.entries(fields).forEach(([k, el]) => { el.value = post?.[k] || ''; });
  fields.date.value ||= new Date().toISOString().slice(0, 10);

  if (post?.content?.length) {
    editor.innerHTML = post.content.map((section) => {
      const chunks = [`<h2>${section.heading || 'Bölüm'}</h2>`];
      (section.paragraphs || []).forEach((p) => {
        const clean = String(p || '').trim();
        if (!clean) return;
        if (clean.startsWith('<')) chunks.push(clean);
        else chunks.push(`<p>${clean}</p>`);
      });
      return chunks.join('');
    }).join('');
  } else {
    editor.innerHTML = '';
  }

  renderPreview();
};

const saveDraft = () => {
  localStorage.setItem(DRAFT_KEY, JSON.stringify({ fields: Object.fromEntries(Object.entries(fields).map(([k, el]) => [k, el.value])), html: editor.innerHTML, editingPostId }));
};

const loadDraft = () => {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) return;
  try {
    const draft = JSON.parse(raw);
    Object.entries(fields).forEach(([k, el]) => { el.value = draft.fields?.[k] || ''; });
    editor.innerHTML = draft.html || '';
    editingPostId = draft.editingPostId || null;
  } catch {}
};

const fetchPosts = async () => {
  const res = await fetch(`${API_BASE}/posts`);
  if (!res.ok) throw new Error('Post listesi alınamadı');
  const data = await res.json();
  return data.posts || [];
};

const renderPostsList = async () => {
  try {
    const posts = await fetchPosts();
    postsList.innerHTML = posts.map((post) => `
      <button class="post-item ${editingPostId === post.id ? 'active' : ''}" data-id="${post.id}">
        <h4>${post.title}</h4>
        <p>${post.date} · ${post.author || ''}</p>
      </button>
    `).join('');

    Array.from(postsList.querySelectorAll('.post-item')).forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        const detail = await fetch(`${API_BASE}/posts/${encodeURIComponent(id)}`).then((r) => r.json());
        setForm(detail.post);
        renderPostsList();
      });
    });
  } catch (err) {
    postsList.innerHTML = `<p class="muted">${err.message}</p>`;
  }
};

const savePost = async () => {
  const payload = getPayload();
  if (!payload.title || !payload.content.length) {
    alert('Başlık ve içerik zorunlu.');
    return;
  }

  const method = editingPostId ? 'PUT' : 'POST';
  const url = editingPostId ? `${API_BASE}/posts/${encodeURIComponent(editingPostId)}` : `${API_BASE}/posts`;

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Kaydedilemedi');
  return data;
};

Array.from(document.querySelectorAll('[data-cmd]')).forEach((button) => {
  button.addEventListener('click', () => {
    document.execCommand(button.dataset.cmd, false, button.dataset.value || null);
    renderPreview();
    editor.focus();
  });
});

document.getElementById('insertImageUrlBtn').addEventListener('click', () => {
  const url = prompt('Görsel URL girin');
  if (!url) return;
  document.execCommand('insertHTML', false, `<img src="${url}" alt="inline-image" />`);
  renderPreview();
});

document.getElementById('imageUpload').addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    document.execCommand('insertHTML', false, `<img src="${reader.result}" alt="${file.name}" />`);
    renderPreview();
  };
  reader.readAsDataURL(file);
  event.target.value = '';
});

document.getElementById('previewToggleBtn').addEventListener('click', () => {
  previewOpen = !previewOpen;
  document.querySelector('.right-panel').style.display = previewOpen ? '' : 'none';
});

document.getElementById('newPostBtn').addEventListener('click', () => {
  setForm();
  renderPostsList();
});

document.getElementById('saveDraftBtn').addEventListener('click', () => {
  saveDraft();
  alert('Taslak kaydedildi');
});

document.getElementById('refreshPostsBtn').addEventListener('click', renderPostsList);

document.getElementById('publishBtn').addEventListener('click', async () => {
  try {
    const data = await savePost();
    alert(editingPostId ? 'Post güncellendi' : `Post eklendi. Toplam: ${data.totalPosts}`);
    if (!editingPostId) editingPostId = data.post.id;
    saveDraft();
    renderPostsList();
  } catch (err) {
    alert(err.message);
  }
});

Object.values(fields).forEach((el) => el.addEventListener('input', renderPreview));
editor.addEventListener('input', renderPreview);

(async () => {
  try {
    const health = await fetch(`${API_BASE}/health`).then((r) => r.json());
    connectionStatus.textContent = `API bağlı · ${health.file}`;
  } catch {
    connectionStatus.textContent = 'API bağlantısı yok. node admin/server.js çalıştırın.';
  }
  loadDraft();
  if (!fields.date.value) fields.date.value = new Date().toISOString().slice(0, 10);
  renderPreview();
  renderPostsList();
})();
