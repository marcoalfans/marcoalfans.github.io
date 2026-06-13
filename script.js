// Hero scan-reveal: circular mask over Photo B that auto-scans, and follows the cursor on hover
(function () {
  const root = document.getElementById('scanReveal');
  if (!root) return;
  const imgB = document.getElementById('srB');
  const ret  = document.getElementById('srReticle');
  const R = 56, HALF = 66;                 // mask radius + half the reticle box (132/2)
  let t = 0, hovering = false, tx = 0, ty = 0, mx = 0, my = 0, started = false;

  root.addEventListener('pointerenter', () => hovering = true);
  root.addEventListener('pointerleave', () => hovering = false);
  root.addEventListener('pointermove', e => {
    const r = root.getBoundingClientRect();
    tx = e.clientX - r.left; ty = e.clientY - r.top;
  });

  function frame() {
    const w = root.clientWidth, h = root.clientHeight, cx = w / 2, cy = h / 2;
    if (!started) { mx = cx; my = cy; started = true; }
    if (!hovering) {                          // auto-scan (Lissajous roam)
      t += 1 / 60;
      tx = cx + Math.sin(t * 0.7)  * (w * 0.30);
      ty = cy + Math.sin(t * 1.13) * (h * 0.30);
    }
    // keep the reticle inside the circular frame AND inside Photo B's (zoomed-out) content
    const B_SCALE = 0.78;
    const half = Math.min(w, h) / 2;
    const maxR = Math.min(half - R - 6, B_SCALE * half - R);
    const dx = tx - cx, dy = ty - cy, d = Math.hypot(dx, dy);
    if (d > maxR) { tx = cx + dx / d * maxR; ty = cy + dy / d * maxR; }
    // ease toward target (smooths motion + the auto<->cursor handoff)
    mx += (tx - mx) * 0.12; my += (ty - my) * 0.12;

    const clip = `circle(${R}px at ${mx}px ${my}px)`;
    imgB.style.clipPath = clip; imgB.style.webkitClipPath = clip;
    ret.style.transform = `translate(${mx - HALF}px, ${my - HALF}px)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

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
hamburger.setAttribute('aria-expanded', 'false');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  })
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

  let started = false;

  function init() {
    if (started || grid.children.length === 0) return;
    started = true;

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

    // Pause the loop while the section is scrolled out of view (saves CPU/battery)
    let offscreen = false;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        offscreen = !entries[0].isIntersecting;
      }, { threshold: 0 }).observe(wrap);
    }

    // rAF continuous scroll — 0.7 px/frame ≈ 42 px/s, smooth and readable
    const SPEED = 0.7;
    let loopPoint = 0;
    let rafId = null;

    function autoScroll() {
      if (!paused && !offscreen && loopPoint > 0) {
        wrap.scrollLeft += SPEED;
        if (wrap.scrollLeft >= loopPoint) wrap.scrollLeft -= loopPoint;
      }
      rafId = requestAnimationFrame(autoScroll);
    }

    // Fully stop the loop when the tab is hidden; resume on return
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      } else if (!rafId) {
        rafId = requestAnimationFrame(autoScroll);
      }
    });

    // Measure loop point after layout settles (2 frames)
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const anchor = grid.children[paddedCount];
      loopPoint = anchor ? anchor.offsetLeft : 0;
      rafId = requestAnimationFrame(autoScroll);
    }));
  }

  // Cert cards render asynchronously from the Gist. Init immediately if they're
  // already there (cache hit); otherwise wait for them to appear (cache miss).
  if (grid.children.length > 0) {
    init();
  } else {
    const mo = new MutationObserver(() => {
      if (grid.children.length > 0) { mo.disconnect(); init(); }
    });
    mo.observe(grid, { childList: true });
  }
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
