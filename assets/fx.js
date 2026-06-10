/* ============================================================
   FX LAYER — shared interactive effects for the whole portfolio
   Self-injecting: pages only need fx.css + this script (defer).
   ============================================================ */
(() => {
  'use strict';
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;
  const D = document, B = D.body;

  /* ── Inject ambient layers ── */
  const el = (cls, parent = B) => {
    const n = D.createElement('div');
    n.className = cls;
    parent.appendChild(n);
    return n;
  };

  if (!reduceMotion) {
    const aurora = el('fx-aurora');
    aurora.innerHTML = '<span></span><span></span><span></span>';
    el('fx-grain');
    el('fx-spotlight');
  }
  const progress = el('fx-progress');

  /* ── Scroll progress (JS fallback when scroll-timeline unsupported) ── */
  if (!CSS.supports('animation-timeline: scroll()')) {
    const update = () => {
      const h = D.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    };
    addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Mouse spotlight position ── */
  if (!reduceMotion && finePointer) {
    addEventListener('pointermove', e => {
      B.style.setProperty('--fx-mx', e.clientX + 'px');
      B.style.setProperty('--fx-my', e.clientY + 'px');
    }, { passive: true });
  }

  /* ── Custom cursor: instant dot + lerped ring ── */
  if (!reduceMotion && finePointer) {
    B.classList.add('fx-cursor-on');
    const dot = el('fx-cursor-dot');
    const ring = el('fx-cursor-ring');
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;

    addEventListener('pointermove', e => {
      mx = e.clientX; my = e.clientY;
      B.classList.add('fx-cursor-active');
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
      const t = e.target.closest('a, button, .chip, .tag, input, textarea, [data-magnetic]');
      ring.classList.toggle('fx-hover', !!t);
    }, { passive: true });
    D.addEventListener('mouseleave', () => B.classList.remove('fx-cursor-active'));

    (function loop() {
      rx += (mx - rx) * .18;
      ry += (my - ry) * .18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
  }

  /* ── Magnetic buttons ── */
  if (!reduceMotion && finePointer) {
    D.querySelectorAll('.btn-primary, .btn-ghost, .card-link, .lang-pill, .filter-btn, [data-magnetic]')
      .forEach(btn => {
        const strength = 8;
        btn.addEventListener('pointermove', e => {
          const r = btn.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
          const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
          btn.style.transform =
            'translate(' + (x * strength) + 'px,' + (y * strength) + 'px) scale(1.04)';
        });
        btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
      });
  }

  /* ── 3D tilt on cards ── */
  if (!reduceMotion && finePointer) {
    D.querySelectorAll('.project-card, [data-tilt]').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        card.style.transform =
          'perspective(800px) rotateX(' + (-py * 7).toFixed(2) + 'deg)' +
          ' rotateY(' + (px * 7).toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ── Nav auto-hide on scroll down, reveal on scroll up ── */
  const nav = D.querySelector('nav');
  if (nav) {
    let lastY = scrollY;
    addEventListener('scroll', () => {
      const y = scrollY;
      nav.classList.toggle('fx-nav-hidden', y > 140 && y > lastY);
      lastY = y;
    }, { passive: true });
  }

  /* ── Text scramble / decode on headings ── */
  if (!reduceMotion) {
    const GLYPHS = '!<>-_\\/[]{}—=+*^?#@$01';
    const scramble = node => {
      const original = node.textContent;
      if (!original || original.length > 60) return;
      let frame = 0;
      const total = Math.max(14, original.length * 2);
      const tick = () => {
        frame++;
        const ratio = frame / total;
        node.textContent = original.split('').map((ch, i) => {
          if (ch === ' ' || i / original.length < ratio) return ch;
          return GLYPHS[Math.random() * GLYPHS.length | 0];
        }).join('');
        if (ratio < 1) requestAnimationFrame(tick);
        else node.textContent = original;
      };
      tick();
    };
    const seen = new WeakSet();
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting && !seen.has(en.target)) {
          seen.add(en.target);
          scramble(en.target);
          io.unobserve(en.target);
        }
      });
    }, { threshold: .4 });
    D.querySelectorAll('.section-title, .page-header h1').forEach(h => io.observe(h));
  }

  /* ── Konami code → matrix rain easter egg ── */
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let kIdx = 0;
  addEventListener('keydown', e => {
    kIdx = (e.key === KONAMI[kIdx]) ? kIdx + 1 : (e.key === KONAMI[0] ? 1 : 0);
    if (kIdx === KONAMI.length) { kIdx = 0; matrixRain(); }
  });

  function matrixRain() {
    if (D.querySelector('.fx-matrix')) return;
    const wrap = el('fx-matrix');
    const c = D.createElement('canvas');
    wrap.appendChild(c);
    const msg = D.createElement('div');
    msg.className = 'fx-matrix-msg';
    msg.textContent = '> ACCESS GRANTED_';
    wrap.appendChild(msg);

    const ctx = c.getContext('2d');
    c.width = innerWidth; c.height = innerHeight;
    const cols = Math.floor(c.width / 16);
    const drops = Array(cols).fill(0);
    const chars = '01アイウエオカキクケコサシスセソ<>/{}#$';
    let alive = true;
    (function draw() {
      if (!alive) return;
      ctx.fillStyle = 'rgba(5,10,20,.15)';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '14px monospace';
      drops.forEach((y, i) => {
        ctx.fillText(chars[Math.random() * chars.length | 0], i * 16, y * 16);
        drops[i] = (y * 16 > c.height && Math.random() > .975) ? 0 : y + 1;
      });
      requestAnimationFrame(draw);
    })();
    setTimeout(() => {
      wrap.classList.add('out');
      setTimeout(() => { alive = false; wrap.remove(); }, 600);
    }, 4500);
  }

  /* ── Console signature ── */
  try {
    console.log(
      '%c<GD/> %cYou found the console. That counts as curiosity — I like it.\n' +
      '%c→ gdespar1@hotmail.com · tip: try the Konami code (↑↑↓↓←→←→BA)',
      'color:#38bdf8;font-weight:bold;font-size:16px',
      'color:#f8fafc;font-size:12px',
      'color:#94a3b8;font-size:11px'
    );
  } catch (_) {}
})();
