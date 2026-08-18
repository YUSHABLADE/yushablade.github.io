const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('[data-page]');
const groupToggles = document.querySelectorAll('[data-toggle]');

// Hamburger menü aç/kapa
function toggleMenu(forceClose = false) {
  if (forceClose) {
    hamburger.classList.remove('active');
    sideNav.classList.remove('open');
    overlay.classList.remove('open');
    return;
  }
  hamburger.classList.toggle('active');
  sideNav.classList.toggle('open');
  overlay.classList.toggle('open');
}

hamburger.addEventListener('click', () => toggleMenu());
overlay.addEventListener('click', () => toggleMenu(true));

// Alt menüler (Minecraft / Discord)
groupToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const group = document.getElementById(toggle.dataset.toggle);
    group.classList.toggle('open');
  });
});

// Sayfa geçişi
function showPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Aktif menü öğesini güncelle
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === pageId) item.classList.add('active');
  });

  // İlgili grubu açık tut
  if (pageId === 'texture-pack') {
    document.getElementById('minecraftGroup').classList.add('open');
  }
  if (pageId === 'discord-server' || pageId === 'yushabot') {
    document.getElementById('discordGroup').classList.add('open');
  }

  toggleMenu(true);
}

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const page = item.dataset.page;
    if (page) showPage(page);
  });
});

// Anasayfadaki özellik kartları
document.querySelectorAll('.feature-card[data-page]').forEach(card => {
  card.addEventListener('click', () => showPage(card.dataset.page));
});
