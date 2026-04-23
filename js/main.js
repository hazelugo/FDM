/* =========================================
   NAVIGATION
   ========================================= */
const nav    = document.getElementById('site-nav');
const toggle = document.getElementById('nav-toggle');
const links  = document.getElementById('nav-links');

// Scroll state
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

// Mobile menu
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('mobile-open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('mobile-open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* =========================================
   SCROLL ANIMATIONS
   ========================================= */
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

/* =========================================
   HERO ENTRANCE ANIMATION
   ========================================= */
if (document.querySelector('.hero')) {
  const heroContent = document.querySelector('.hero-content');
  const heroCard    = document.querySelector('.hero-card');

  // Stage elements
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
    document.querySelector('.hero-inner').style.opacity = '1';

    Object.entries(delays).forEach(([sel, delay]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      setTimeout(() => {
        el.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    });

    if (heroCard) {
      setTimeout(() => {
        heroCard.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)`;
        heroCard.style.opacity = '1';
        heroCard.style.transform = 'translateX(0)';
      }, 450);
    }
  });
}

/* =========================================
   CONTACT FORM
   ========================================= */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}
