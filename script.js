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


// Cert scroll: continuous loop auto-scroll + drag
(function() {
  const wrap = document.querySelector('.certs-scroll');
  const grid = document.querySelector('.certs-grid');
  if (!wrap || !grid) return;

  // Disable snap — we control scroll manually
  wrap.style.scrollSnapType = 'none';

  // Pad to even card count so clones start at a clean column boundary (2-row grid)
  if (grid.children.length % 2 !== 0) {
    const sp = document.createElement('div');
    sp.className = 'cert-card';
    sp.setAttribute('aria-hidden', 'true');
    sp.style.cssText = 'visibility:hidden;pointer-events:none';
    grid.appendChild(sp);
  }
  const paddedCount = grid.children.length;

  // Clone all cards — second set for seamless infinite loop
  Array.from(grid.children).forEach(c => grid.appendChild(c.cloneNode(true)));

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

  // Pause on hover / touch
  let paused = false;
  wrap.addEventListener('mouseenter', () => { paused = true; });
  wrap.addEventListener('mouseleave', () => { paused = false; });
  wrap.addEventListener('touchstart', () => {
    paused = true;
    setTimeout(() => { paused = false; }, 4000);
  }, { passive: true });

  // rAF continuous scroll — 0.7 px/frame ≈ 42 px/s, smooth and readable
  const SPEED = 0.7;
  let loopPoint = 0;

  function autoScroll() {
    if (!paused) {
      wrap.scrollLeft += SPEED;
      if (loopPoint > 0 && wrap.scrollLeft >= loopPoint) {
        wrap.scrollLeft -= loopPoint;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  // Measure loop point after layout settles (2 frames)
  requestAnimationFrame(() => requestAnimationFrame(() => {
    loopPoint = grid.children[paddedCount].offsetLeft;
    autoScroll();
  }));
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
document.addEventListener('DOMContentLoaded', function() {
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
});
