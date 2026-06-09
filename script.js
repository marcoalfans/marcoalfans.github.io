// Theme toggle
const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const html = document.documentElement;

const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);
icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// Typewriter — whoami → per-line output → pause → reset → loop
const tw = document.getElementById('typewriter');
const WORD = 'whoami';
let ci = 0;

function getLines() {
  return Array.from(document.querySelectorAll('.out-line'));
}

function showLines(lines, idx) {
  if (idx < lines.length) {
    lines[idx].classList.add('visible');
    setTimeout(() => showLines(lines, idx + 1), 380);
  } else {
    // semua line muncul, pause lalu hide
    setTimeout(hideLines, 3200);
  }
}

function hideLines() {
  getLines().forEach(l => l.classList.remove('visible'));
  setTimeout(deleteWord, 300);
}

function showOutput() {
  showLines(getLines(), 0);
}

function deleteWord() {
  if (ci > 0) {
    ci--;
    tw.textContent = WORD.substring(0, ci);
    setTimeout(deleteWord, 65);
  } else {
    setTimeout(typeWord, 500);
  }
}

function typeWord() {
  if (ci < WORD.length) {
    ci++;
    tw.textContent = WORD.substring(0, ci);
    setTimeout(typeWord, 110);
  } else {
    setTimeout(showOutput, 400);
  }
}

typeWord();
// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
  navLinks.forEach(a => {
    const href = a.getAttribute('href').replace('#', '');
    a.classList.toggle('active', href === current);
  });
}, { passive: true });

// Cert scroll: arrows + auto-scroll
(function() {
  const wrap = document.querySelector('.certs-scroll');
  const prev = document.getElementById('certPrev');
  const next = document.getElementById('certNext');
  if (!wrap) return;

  let paused = false;
  let touchTimer;

  function cardW() {
    const c = wrap.querySelector('.cert-card');
    return c ? c.offsetWidth + 20 : 300;
  }
  function maxScroll() { return wrap.scrollWidth - wrap.clientWidth; }

  function updateArrows() {
    const max = maxScroll();
    if (prev) prev.classList.toggle('hidden', wrap.scrollLeft <= 2);
    if (next) next.classList.toggle('hidden', max <= 0 || wrap.scrollLeft >= max - 2);
  }

  // Run after fonts/images settle
  window.addEventListener('load', updateArrows);
  setTimeout(updateArrows, 300);
  wrap.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);

  if (prev) prev.addEventListener('click', () => {
    paused = true;
    wrap.scrollBy({ left: -cardW(), behavior: 'smooth' });
    setTimeout(() => { paused = false; updateArrows(); }, 700);
  });
  if (next) next.addEventListener('click', () => {
    paused = true;
    if (wrap.scrollLeft >= maxScroll() - 2) {
      wrap.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      wrap.scrollBy({ left: cardW(), behavior: 'smooth' });
    }
    setTimeout(() => { paused = false; updateArrows(); }, 700);
  });

  wrap.addEventListener('mouseenter', () => { paused = true; });
  wrap.addEventListener('mouseleave', () => { paused = false; });
  wrap.addEventListener('touchstart', () => {
    paused = true;
    clearTimeout(touchTimer);
    touchTimer = setTimeout(() => paused = false, 3000);
  }, { passive: true });

  function step() {
    if (!paused) {
      if (wrap.scrollLeft >= maxScroll() - 2) {
        wrap.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        wrap.scrollBy({ left: cardW(), behavior: 'smooth' });
      }
    }
    setTimeout(step, 3500);
  }
  setTimeout(step, 3500);
})();

// Cert scroll: drag + auto-scroll + gradient fade
(function() {
  const wrap = document.querySelector('.certs-scroll');
  if (!wrap) return;

  // Drag to scroll
  let isDown = false, startX, scrollStart;
  wrap.addEventListener('mousedown', e => {
    isDown = true; startX = e.pageX; scrollStart = wrap.scrollLeft;
    wrap.style.userSelect = 'none';
  });
  document.addEventListener('mouseup', () => { isDown = false; wrap.style.userSelect = ''; });
  document.addEventListener('mousemove', e => {
    if (!isDown) return;
    wrap.scrollLeft = scrollStart - (e.pageX - startX);
  });

  // Auto-scroll
  let paused = false;
  wrap.addEventListener('mouseenter', () => paused = true);
  wrap.addEventListener('mouseleave', () => paused = false);
  wrap.addEventListener('touchstart', () => {
    paused = true;
    setTimeout(() => paused = false, 4000);
  }, { passive: true });

  function step() {
    if (!paused) {
      const max = wrap.scrollWidth - wrap.clientWidth;
      const card = wrap.querySelector('.cert-card');
      const step = card ? card.offsetWidth + 20 : 300;
      if (wrap.scrollLeft >= max - 2) {
        wrap.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        wrap.scrollBy({ left: step, behavior: 'smooth' });
      }
    }
    setTimeout(step, 3500);
  }
  setTimeout(step, 3500);
})();

// Navbar brand typewriter: Marco Alfan ↔ Kac0
(function() {
  const el = document.getElementById('navBrand');
  if (!el) return;
  const words = ['Marco Alfan', 'Kac0'];
  let wi = 0, ci = 0, deleting = false;

  function tick() {
    const word = words[wi];
    el.textContent = word.substring(0, ci);

    if (!deleting) {
      ci++;
      if (ci > word.length) {
        deleting = true;
        setTimeout(tick, wi === 0 ? 2800 : 2000);
        return;
      }
      setTimeout(tick, 100);
    } else {
      ci--;
      if (ci < 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, 60);
    }
  }
  tick();
})();


// nemu GIF popup
(function() {
  const card  = document.getElementById('nemuCard');
  const modal = document.getElementById('nemuModal');
  const close = document.getElementById('nemuModalClose');
  if (!card || !modal) return;

  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    modal.classList.add('open');
  });
  close.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });
})();
