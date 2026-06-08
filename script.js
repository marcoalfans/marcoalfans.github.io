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

// Typewriter
const phrases = ['whoami', 'Red Team Operator', 'Threat Intel Analyst', 'Security Researcher', 'Web Developer'];
let pi = 0, ci = 0, del = false;
const tw = document.getElementById('typewriter');

function type() {
  const cur = phrases[pi];
  tw.textContent = cur.substring(0, ci);
  if (del) {
    ci--;
    if (ci < 0) { del = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
    setTimeout(type, 55);
  } else {
    ci++;
    if (ci > cur.length) { del = true; setTimeout(type, 2200); return; }
    setTimeout(type, ci === 1 && cur === 'whoami' ? 80 : 95);
  }
}
type();

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
