/* =========================================
   PROGRESSIVE ENHANCEMENT — adds .js to <html>
   so CSS can hide animated elements only when
   JS is available to reveal them.
   ========================================= */
document.documentElement.classList.add('js');

/* =========================================
   NAVIGATION
   ========================================= */
const nav    = document.getElementById('site-nav');
const toggle = document.getElementById('nav-toggle');
const links  = document.getElementById('nav-links');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });
}

if (toggle && links) {
  const getFocusable = (el) => [
    ...el.querySelectorAll('a[href], button:not([disabled])')
  ];

  const openMenu = () => {
    links.classList.add('mobile-open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const first = getFocusable(links)[0];
    if (first) first.focus();
  };

  const closeMenu = (returnFocus = true) => {
    links.classList.remove('mobile-open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    links.classList.contains('mobile-open') ? closeMenu() : openMenu();
  });

  // Focus trap
  links.addEventListener('keydown', (e) => {
    if (!links.classList.contains('mobile-open')) return;
    if (e.key !== 'Tab') return;
    const focusable = getFocusable(links);
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      toggle.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      toggle.focus();
    }
  });

  // Escape closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('mobile-open')) closeMenu();
  });

  // Close on nav link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu(false));
  });
}

// Mark active page link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
    a.setAttribute('aria-current', 'page');
  }
});

/* =========================================
   SCROLL ANIMATIONS
   ========================================= */
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-up, .animate-fade').forEach(el => {
    observer.observe(el);
  });
} else {
  document.querySelectorAll('.animate-up, .animate-fade').forEach(el => {
    el.classList.add('in-view');
  });
}

/* =========================================
   HERO ENTRANCE ANIMATION
   ========================================= */
if (document.querySelector('.hero')) {
  const heroContent = document.querySelector('.hero-content');
  const heroCard    = document.querySelector('.hero-card');

  if (heroContent) {
    heroContent.querySelectorAll('.hero-tag, .hero-heading, .hero-sub, .hero-actions')
      .forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
      });
  }
  if (heroCard) {
    heroCard.style.opacity = '0';
    heroCard.style.transform = 'translateX(20px)';
  }

  const delays = {
    '.hero-tag':     100,
    '.hero-heading': 250,
    '.hero-sub':     400,
    '.hero-actions': 540,
  };

  requestAnimationFrame(() => {
    const heroInner = document.querySelector('.hero-inner');
    if (heroInner) heroInner.style.opacity = '1';

    Object.entries(delays).forEach(([sel, delay]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    });

    if (heroCard) {
      setTimeout(() => {
        heroCard.style.transition = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)';
        heroCard.style.opacity = '1';
        heroCard.style.transform = 'translateX(0)';
      }, 450);
    }
  });
}

/* =========================================
   CONTACT FORM — validation + submission
   ========================================= */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const showError = (field, msg) => {
    const errEl = document.getElementById(`${field.id}-error`);
    if (errEl) { errEl.textContent = msg; errEl.hidden = false; }
    field.setAttribute('aria-invalid', 'true');
  };

  const clearError = (field) => {
    const errEl = document.getElementById(`${field.id}-error`);
    if (errEl) { errEl.textContent = ''; errEl.hidden = true; }
    field.setAttribute('aria-invalid', 'false');
  };

  // Clear error as user types
  contactForm.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => {
      if (field.value.trim()) clearError(field);
    });
  });

  const validate = () => {
    let firstError = null;

    contactForm.querySelectorAll('[required]').forEach(field => {
      const val = field.value.trim();
      if (!val) {
        const msg = field.dataset.errorRequired || 'This field is required.';
        showError(field, msg);
        if (!firstError) firstError = field;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        const msg = field.dataset.errorEmail || 'Please enter a valid email address.';
        showError(field, msg);
        if (!firstError) firstError = field;
      } else {
        clearError(field);
      }
    });

    return firstError;
  };

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstError = validate();
    if (firstError) { firstError.focus(); return; }

    const btn       = contactForm.querySelector('[type="submit"]');
    const submitErr = document.getElementById('contact-submit-error');
    const successEl = document.getElementById('contact-success');
    const original  = btn.textContent.trim();

    btn.textContent = btn.dataset.sending || 'Sending…';
    btn.disabled = true;
    if (submitErr) submitErr.hidden = true;

    try {
      const res = await fetch('https://formspree.io/f/xpqkelaj', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        if (successEl) {
          contactForm.hidden = true;
          successEl.hidden = false;
          successEl.focus();
        }
      } else {
        const data = await res.json().catch(() => ({}));
        if (submitErr) {
          submitErr.textContent = data.error || btn.dataset.errorGeneric || 'Something went wrong. Please try again.';
          submitErr.hidden = false;
        }
        btn.textContent = original;
        btn.disabled = false;
      }
    } catch {
      if (submitErr) {
        submitErr.textContent = btn.dataset.errorNetwork || 'Unable to send. Please check your connection and try again.';
        submitErr.hidden = false;
      }
      btn.textContent = original;
      btn.disabled = false;
    }
  });
}

/* =========================================
   DOCTRINE CAROUSEL
   ========================================= */
const docTrack = document.getElementById('doctrine-track');
if (docTrack) {
  const prevBtn = document.getElementById('doctrine-prev');
  const nextBtn = document.getElementById('doctrine-next');

  const cards   = docTrack.querySelectorAll('.doctrine-card');
  const total   = cards.length;

  const cardWidth = () => {
    const c = cards[0];
    if (!c) return 0;
    return c.offsetWidth + (parseFloat(getComputedStyle(docTrack).columnGap) || 0);
  };

  const updateState = () => {
    const sl = docTrack.scrollLeft;
    const cw = cardWidth();
if (prevBtn) prevBtn.disabled = sl < 4;
    if (nextBtn) nextBtn.disabled = sl >= docTrack.scrollWidth - docTrack.clientWidth - 4;
  };

  if (prevBtn) prevBtn.addEventListener('click', () => docTrack.scrollBy({ left: -cardWidth(), behavior: 'smooth' }));
  if (nextBtn) nextBtn.addEventListener('click', () => docTrack.scrollBy({ left:  cardWidth(), behavior: 'smooth' }));
  docTrack.addEventListener('scroll', updateState, { passive: true });
  docTrack.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); docTrack.scrollBy({ left:  cardWidth(), behavior: 'smooth' }); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); docTrack.scrollBy({ left: -cardWidth(), behavior: 'smooth' }); }
  });

  // Drag-to-scroll — capture only starts after real movement so taps still fire
  let isDragging = false, startX = 0, startScroll = 0, dragDelta = 0, tapTarget = null;
  docTrack.addEventListener('pointerdown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startScroll = docTrack.scrollLeft;
    dragDelta = 0;
    tapTarget = e.target.closest('.doctrine-card');
  });
  docTrack.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    dragDelta = Math.abs(e.clientX - startX);
    if (dragDelta > 4 && !docTrack.hasPointerCapture(e.pointerId)) {
      docTrack.setPointerCapture(e.pointerId);
    }
    docTrack.scrollLeft = startScroll - (e.clientX - startX);
  });
  docTrack.addEventListener('pointerup', (e) => {
    if (isDragging && dragDelta <= 6 && tapTarget) {
      const i = Array.from(cards).indexOf(tapTarget);
      if (i !== -1) openLb(i);
    }
    isDragging = false;
  });
  docTrack.addEventListener('pointercancel', () => { isDragging = false; });

  // Lightbox
  const lb = document.createElement('div');
  lb.id = 'doc-lb';
  lb.innerHTML = `
    <div class="doc-lb-backdrop"></div>
    <button class="doc-lb-prev" aria-label="Previous card">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M13 4L7 10l6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="doc-lb-close" aria-label="Close">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
    <img class="doc-lb-img" src="" alt="" />
    <button class="doc-lb-next" aria-label="Next card">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;
  document.body.appendChild(lb);

  const lbImg   = lb.querySelector('.doc-lb-img');
  const lbClose = lb.querySelector('.doc-lb-close');
  const lbPrev  = lb.querySelector('.doc-lb-prev');
  const lbNext  = lb.querySelector('.doc-lb-next');
  let lbIndex = 0;

  const updateLbNav = () => {
    lbPrev.disabled = lbIndex === 0;
    lbNext.disabled = lbIndex === total - 1;
  };

  const openLb = (index) => {
    lbIndex = index;
    const img = cards[index] && cards[index].querySelector('img');
    if (!img) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateLbNav();
    lbClose.focus();
  };

  const closeLb = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (dragDelta > 6) return;
      openLb(i);
    });
  });

  lb.querySelector('.doc-lb-backdrop').addEventListener('click', closeLb);
  lbClose.addEventListener('click', closeLb);
  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); openLb(Math.max(lbIndex - 1, 0)); });
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); openLb(Math.min(lbIndex + 1, total - 1)); });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     { e.preventDefault(); closeLb(); }
    if (e.key === 'ArrowRight') openLb(Math.min(lbIndex + 1, total - 1));
    if (e.key === 'ArrowLeft')  openLb(Math.max(lbIndex - 1, 0));
  });

  updateState();
}
