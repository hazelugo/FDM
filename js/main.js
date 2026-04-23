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

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstError = validate();
    if (firstError) { firstError.focus(); return; }

    const btn = contactForm.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = btn.dataset.sending || 'Message Sent!';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      contactForm.reset();
      contactForm.querySelectorAll('[aria-invalid]').forEach(el => {
        el.removeAttribute('aria-invalid');
      });
      contactForm.querySelectorAll('.form-error').forEach(el => {
        el.hidden = true;
      });
    }, 3000);
  });
}
