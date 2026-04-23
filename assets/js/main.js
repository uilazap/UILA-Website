/* UILA — main.js
   - Scroll progress hairline
   - Live hero clock (timezone follows language)
   - Sticky header, mobile nav, reveal-on-scroll
   - Hero video a11y + offscreen pause
*/

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header
  const header = document.getElementById('site-header');
  const progressEl = document.getElementById('scrollProgress');

  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (progressEl) {
      const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
      const p = Math.max(0, Math.min(1, y / max));
      progressEl.style.setProperty('--progress', String(p));
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (navToggle && primaryNav) {
    const closeNav = () => {
      navToggle.classList.remove('is-open');
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    };
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    primaryNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // Live hero clock — timezone follows the selected language:
  //   en → Kona, Hawaiʻi (UTC−10, no DST)
  //   es → San Salvador, El Salvador (UTC−6, no DST)
  const clockEl = document.getElementById('heroClock');
  if (clockEl) {
    const TZ = {
      en: { offset: -10, label: 'UTC\u221210' },
      es: { offset: -6,  label: 'UTC\u22126'  },
    };
    const currentLang = () => document.documentElement.getAttribute('lang') || 'en';

    const tick = () => {
      const lang = currentLang();
      const z = TZ[lang] || TZ.en;
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
      const local = new Date(utcMs + z.offset * 3600000);
      const hh = String(local.getHours()).padStart(2, '0');
      const mm = String(local.getMinutes()).padStart(2, '0');
      const ss = String(local.getSeconds()).padStart(2, '0');
      clockEl.textContent = `${hh}:${mm}:${ss} ${z.label}`;
    };
    tick();
    setInterval(tick, 1000);
    document.addEventListener('uila:langchange', tick);
  }

  // Hero video: reduced-motion + offscreen pause
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo && prefersReducedMotion) {
    try { heroVideo.pause(); heroVideo.removeAttribute('autoplay'); } catch (_) {}
  }
  if (heroVideo && 'IntersectionObserver' in window) {
    const vio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { if (!prefersReducedMotion) heroVideo.play().catch(() => {}); }
        else { heroVideo.pause(); }
      });
    }, { threshold: 0.1 });
    vio.observe(heroVideo);
  }
})();
