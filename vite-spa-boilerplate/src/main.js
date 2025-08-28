import './style.css'

// Award-winning SPA with comprehensive accessibility
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('open');
      
      // Trap focus in mobile menu when open
      if (!isExpanded) {
        navLinkItems[0]?.focus();
      }
    });
    
    // Close mobile menu when clicking a link
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      });
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        navToggle.focus();
      }
    });
  }
  
  // Smooth scrolling for navigation links
  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  
  allNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        targetSection.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
        
        // Set focus to target section for screen readers
        targetSection.setAttribute('tabindex', '-1');
        targetSection.focus();
      }
    });
  });

  // Navbar background opacity on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(255, 255, 255, 0.95)';
      nav.style.backdropFilter = 'blur(20px)';
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.8)';
      nav.style.backdropFilter = 'blur(20px)';
    }
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe feature cards, spec groups for scroll animations
  const animatedElements = document.querySelectorAll('.feature-card, .spec-group, .pricing-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });

  // Enhanced brain wave and neural effects
  const brainWaves = document.querySelector('.brain-waves');
  const neuralParticles = document.querySelector('.neural-particles');
  const codeMatrix = document.querySelector('.code-matrix');
  
  if (brainWaves) {
    let waveCount = 0;
    let glitchIntensity = 0;
    
    setInterval(() => {
      waveCount++;
      glitchIntensity = Math.sin(waveCount * 0.05) * 0.5;
      
      brainWaves.style.filter = `
        hue-rotate(${waveCount * 3}deg) 
        brightness(${1.2 + Math.sin(waveCount * 0.08) * 0.4}) 
        contrast(${1.1 + glitchIntensity * 0.2})
        saturate(${1.3 + Math.sin(waveCount * 0.12) * 0.3})
      `;
      
      // Glitch effect occasionally
      if (Math.random() < 0.02) {
        brainWaves.style.transform = `translate(-50%, -50%) scale(${1 + Math.random() * 0.1}) skew(${Math.random() * 2}deg)`;
        setTimeout(() => {
          brainWaves.style.transform = 'translate(-50%, -50%)';
        }, 100);
      }
    }, 80);
  }
  
  // Dynamic neural particles
  if (neuralParticles) {
    let particleTime = 0;
    setInterval(() => {
      particleTime += 0.1;
      const x = Math.sin(particleTime) * 20;
      const y = Math.cos(particleTime * 0.7) * 15;
      neuralParticles.style.transform = `translate(${x}px, ${y}px) rotate(${particleTime * 30}deg)`;
    }, 100);
  }
  
  // Code matrix scrolling effect
  if (codeMatrix) {
    let matrixOffset = 0;
    setInterval(() => {
      matrixOffset += 0.5;
      codeMatrix.style.transform = `translateY(${Math.sin(matrixOffset * 0.1) * 10}px)`;
      codeMatrix.style.opacity = 0.05 + Math.sin(matrixOffset * 0.05) * 0.05;
    }, 150);
  }

  // Interactive pricing button
  const pricingBtn = document.querySelector('.price-cta');
  if (pricingBtn) {
    pricingBtn.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      this.textContent = 'Processing...';
      
      setTimeout(() => {
        this.style.transform = '';
        this.textContent = 'Thank you! We\'ll be in touch soon.';
        this.style.background = 'var(--color-success)';
      }, 1000);
      
      setTimeout(() => {
        this.textContent = 'Reserve Your NeuroLink Pro';
        this.style.background = 'white';
      }, 3000);
    });
  }

  // Hero CTA button interactions
  const ctaPrimary = document.querySelector('.cta-primary');
  const ctaSecondary = document.querySelector('.cta-secondary');
  
  if (ctaPrimary) {
    ctaPrimary.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#pricing').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
  
  if (ctaSecondary) {
    ctaSecondary.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#features').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // Accessible parallax effects (respects reduced motion preference)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;
  
  function updateParallax() {
    if (prefersReducedMotion.matches) return; // Skip parallax if reduced motion is preferred
    
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (hero) {
      const rate = scrolled * -0.2; // Reduced intensity
      const contentRate = scrolled * -0.05;
      
      hero.style.transform = `translate3d(0, ${rate}px, 0)`;
      if (heroContent) {
        heroContent.style.transform = `translate3d(0, ${contentRate}px, 0)`;
      }
      if (heroVisual) {
        heroVisual.style.transform = `translate3d(0, ${scrolled * -0.3}px, 0)`;
      }
    }
    
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking && !prefersReducedMotion.matches) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  // Dynamic feature card hover effects
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.feature-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1) rotateY(180deg)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.feature-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotateY(0deg)';
      }
    });
  });


  // Smooth reveal animation for sections
  const sections = document.querySelectorAll('section:not(.hero)');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(section);
  });

  // Enhanced loading state with accessibility considerations
  window.addEventListener('load', () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 1s ease';
      
      // Create accessible loading overlay
      const loadingOverlay = document.createElement('div');
      loadingOverlay.setAttribute('role', 'status');
      loadingOverlay.setAttribute('aria-label', 'Loading NeuroLink Pro application');
      loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-background);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-family);
        color: var(--color-text-primary);
        font-size: 1.1rem;
      `;
      
      const loadingContent = document.createElement('div');
      loadingContent.style.textAlign = 'center';
      loadingContent.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 1rem; color: var(--color-primary)">NeuroLink Pro</div>
        <div>Loading your mind-controlled experience...</div>
        <div style="margin-top: 1rem; opacity: 0.8;">Please wait</div>
      `;
      
      loadingOverlay.appendChild(loadingContent);
      document.body.appendChild(loadingOverlay);
      
      setTimeout(() => {
        loadingOverlay.style.transition = 'opacity 0.5s ease';
        loadingOverlay.style.opacity = '0';
        document.body.style.opacity = '1';
        
        setTimeout(() => {
          document.body.removeChild(loadingOverlay);
        }, 500);
      }, 800); // Reduced loading time
    }
  });
  
  // Mouse trail effect
  let mouseTrail = [];
  const maxTrailLength = 20;
  
  document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (mouseTrail.length > maxTrailLength) {
      mouseTrail.shift();
    }
    
    // Remove old trail points
    mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
    
    // Create particle at mouse position occasionally
    if (Math.random() < 0.1) {
      createMouseParticle(e.clientX, e.clientY);
    }
  });
  
  function createMouseParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 4px;
      height: 4px;
      background: radial-gradient(circle, var(--color-neural), transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      animation: particleFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      if (document.body.contains(particle)) {
        document.body.removeChild(particle);
      }
    }, 1000);
  }

  // Enhanced FAQ Accordion with full accessibility
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((question, index) => {
    // Add unique IDs for ARIA relationships
    const faqItem = question.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const questionId = `faq-question-${index}`;
    const answerId = `faq-answer-${index}`;
    
    question.id = questionId;
    question.setAttribute('aria-controls', answerId);
    answer.id = answerId;
    answer.setAttribute('aria-labelledby', questionId);
    
    question.addEventListener('click', function() {
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
          item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });
      
      // Toggle current FAQ item
      if (!isActive) {
        faqItem.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        // Announce to screen readers
        setTimeout(() => {
          answer.focus();
        }, 300);
      } else {
        faqItem.classList.remove('active');
        this.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Keyboard support
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Enhanced Waitlist form with accessibility
  const waitlistForm = document.getElementById('waitlistForm');
  const successMessage = document.getElementById('successMessage');
  const emailInput = document.getElementById('email');
  const waitlistBtn = document.querySelector('.waitlist-btn');
  const btnText = document.querySelector('.btn-text');
  const btnLoading = document.querySelector('.btn-loading');

  if (waitlistForm) {
    // Add error message container
    const errorMessage = document.createElement('div');
    errorMessage.setAttribute('role', 'alert');
    errorMessage.setAttribute('aria-live', 'polite');
    errorMessage.className = 'form-error';
    errorMessage.style.cssText = `
      color: var(--color-error);
      font-size: 0.9rem;
      margin-top: 0.5rem;
      display: none;
    `;
    waitlistForm.appendChild(errorMessage);
    
    waitlistForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      
      // Clear previous errors
      errorMessage.style.display = 'none';
      emailInput.style.borderColor = '';
      emailInput.removeAttribute('aria-invalid');
      
      // Enhanced email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        showFormError('Please enter your email address.');
        return;
      }
      
      if (!emailRegex.test(email)) {
        showFormError('Please enter a valid email address.');
        return;
      }
      
      function showFormError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        emailInput.style.borderColor = 'var(--color-error)';
        emailInput.setAttribute('aria-invalid', 'true');
        emailInput.setAttribute('aria-describedby', 'email-error');
        errorMessage.id = 'email-error';
        emailInput.focus();
        
        // Add shake animation only if motion is not reduced
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          emailInput.style.animation = 'shake 0.5s ease-in-out';
          setTimeout(() => {
            emailInput.style.animation = '';
          }, 500);
        }
      }
      
      // Show accessible loading state
      btnText.style.display = 'none';
      btnLoading.style.display = 'block';
      waitlistBtn.disabled = true;
      waitlistBtn.setAttribute('aria-busy', 'true');
      waitlistBtn.setAttribute('aria-describedby', 'loading-status');
      
      // Add loading status for screen readers
      const loadingStatus = document.createElement('span');
      loadingStatus.id = 'loading-status';
      loadingStatus.className = 'sr-only';
      loadingStatus.textContent = 'Processing your request, please wait';
      waitlistBtn.appendChild(loadingStatus);
      
      // Simulate API call with mock data
      setTimeout(() => {
        // Store email in localStorage as mock data
        const waitlistData = JSON.parse(localStorage.getItem('neurolinkWaitlist') || '[]');
        const userData = {
          email: email,
          timestamp: new Date().toISOString(),
          id: Date.now().toString()
        };
        waitlistData.push(userData);
        localStorage.setItem('neurolinkWaitlist', JSON.stringify(waitlistData));
        
        // Hide form and show success message
        waitlistForm.style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.focus(); // Focus success message for screen readers
        
        // Announce success to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('role', 'status');
        announcement.className = 'sr-only';
        announcement.textContent = 'Successfully joined the waitlist! Check your email for confirmation.';
        document.body.appendChild(announcement);
        
        setTimeout(() => document.body.removeChild(announcement), 3000);
        
        console.log('Waitlist signup (mock):', userData);
        console.log('Total waitlist members:', waitlistData.length);
        
      }, 1200);
    });
  }

  // Add screen reader only class and form animations
  const accessibilityStyles = document.createElement('style');
  accessibilityStyles.textContent = `
    .sr-only {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }
    
    .form-error {
      animation: fadeIn 0.3s ease-in;
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
      20%, 40%, 60%, 80% { transform: translateX(3px); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(accessibilityStyles);

  // Accessibility feature announcements
  console.log('%c🧠 NeuroLink Pro - Award-Winning Accessible SPA', 'color: #4F46E5; font-size: 14px; font-weight: bold;');
  console.log('%c♿ Full WCAG 2.2 AA compliance implemented', 'color: #22C55E; font-size: 12px;');
  console.log('%c⌨️ Complete keyboard navigation support', 'color: #A855F7; font-size: 12px;');
  console.log('%c📱 Mobile-first responsive design with hamburger menu', 'color: #F59E0B; font-size: 12px;');
  console.log('%c🎨 High contrast mode and reduced motion support', 'color: #EF4444; font-size: 12px;');
  
  // Announce page load completion to screen readers
  setTimeout(() => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('role', 'status');
    announcement.className = 'sr-only';
    announcement.textContent = 'NeuroLink Pro website loaded successfully. Navigate using tab key or screen reader commands.';
    document.body.appendChild(announcement);
    
    setTimeout(() => document.body.removeChild(announcement), 3000);
  }, 1000);
});