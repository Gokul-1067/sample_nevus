/**
 * NEVUS INFOCOM (NI) — CORE INTERACTION & MOTION SCRIPT
 * System Integration & Technology Solutions
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initScrollAnimations();
  initCounterAnimations();
  initProductFiltering();
  initFaqAccordion();
  initDemoFormValidation();
  initTechCardTilt();
});

/* --------------------------------------------------------------------------
 * 1. STICKY HEADER & SCROLL BEHAVIOR
 * -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
 * 2. ACCESSIBLE MOBILE NAVIGATION DRAWER
 * -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileCloseBtn');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  // Close when clicking outside of the drawer content
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      closeDrawer();
    }
  });

  // Close when clicking any nav link inside drawer
  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
 * 3. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
 * -------------------------------------------------------------------------- */
function initScrollAnimations() {
  // If user prefers reduced motion, reveal everything immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
 * 4. NUMERICAL METRIC COUNTER ANIMATIONS
 * -------------------------------------------------------------------------- */
function initCounterAnimations() {
  const counterElements = document.querySelectorAll('[data-counter]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseInt(el.getAttribute('data-counter'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1200; // ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out quad
          const easeProgress = 1 - (1 - progress) * (1 - progress);
          const currentCount = Math.floor(easeProgress * targetValue);
          
          el.textContent = currentCount + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = targetValue + suffix;
          }
        };

        requestAnimationFrame(updateCount);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
 * 5. PRODUCT & TECHNOLOGY CATEGORY FILTERING
 * -------------------------------------------------------------------------- */
function initProductFiltering() {
  const productFilterBtns = document.querySelectorAll('.product-filter-btn');
  const productCards = document.querySelectorAll('.product-tech-card');

  if (!productFilterBtns.length || !productCards.length) return;

  productFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      productFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
 * 6. FAQ ACCORDION
 * -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.faq-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * 7. FRONTEND ENQUIRY FORM VALIDATION & DEMO SUBMISSION HANDLER
 * -------------------------------------------------------------------------- */
function initDemoFormValidation() {
  const forms = document.querySelectorAll('.demo-enquiry-form');
  const demoModal = document.getElementById('demoFeedbackModal');
  const closeModalBtn = document.getElementById('closeDemoModalBtn');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach(input => {
        const errorEl = input.parentElement.querySelector('.form-error-msg');
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          if (errorEl) {
            errorEl.textContent = 'This field is required for enquiry consultation.';
            errorEl.classList.add('visible');
          }
        } else {
          // Email validation if applicable
          if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
            isValid = false;
            input.classList.add('error');
            if (errorEl) {
              errorEl.textContent = 'Please enter a valid email address.';
              errorEl.classList.add('visible');
            }
          } else {
            input.classList.remove('error');
            if (errorEl) errorEl.classList.remove('visible');
          }
        }
      });

      if (isValid) {
        // Collect demo details to show in modal
        const nameVal = form.querySelector('[name="client_name"]')?.value || 'Representative';
        const orgVal = form.querySelector('[name="organisation_name"]')?.value || 'Your Organisation';
        const serviceVal = form.querySelector('[name="service_interest"]')?.value || 'System Integration';

        const modalSummary = document.getElementById('demoModalSummary');
        if (modalSummary) {
          modalSummary.innerHTML = `<strong>Enquiry Parameters Validated:</strong><br/>
            Contact: ${escapeHtml(nameVal)} (${escapeHtml(orgVal)})<br/>
            Scope: ${escapeHtml(serviceVal)}`;
        }

        if (demoModal) {
          demoModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }

        // Reset form inputs
        form.reset();
      }
    });

    // Clear errors on input
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('error');
        const errorEl = field.parentElement.querySelector('.form-error-msg');
        if (errorEl) errorEl.classList.remove('visible');
      });
    });
  });

  if (closeModalBtn && demoModal) {
    closeModalBtn.addEventListener('click', () => {
      demoModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        demoModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

/* --------------------------------------------------------------------------
 * 8. SUBTLE 3D TILT ON INTERACTIVE CARDS
 * -------------------------------------------------------------------------- */
function initTechCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const tiltCards = document.querySelectorAll('.tech-card, .feature-image-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

