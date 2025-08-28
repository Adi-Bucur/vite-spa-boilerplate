import './style.css'

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
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

  // Advanced parallax effects
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    const sections = document.querySelectorAll('section:not(.hero)');
    
    if (hero) {
      const rate = scrolled * -0.3;
      const contentRate = scrolled * -0.1;
      const visualRate = scrolled * -0.7;
      
      hero.style.transform = `translate3d(0, ${rate}px, 0)`;
      if (heroContent) {
        heroContent.style.transform = `translate3d(0, ${contentRate}px, 0)`;
      }
      if (heroVisual) {
        heroVisual.style.transform = `translate3d(0, ${visualRate}px, 0) rotateX(${scrolled * 0.05}deg)`;
      }
    }
    
    // Parallax for other sections
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const speed = 0.5 + (index * 0.1);
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = -(scrolled - section.offsetTop) * speed;
        section.style.transform = `translate3d(0, ${yPos * 0.1}px, 0)`;
      }
    });
    
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
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

  // Enhanced loading state with matrix effect
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    document.body.style.filter = 'blur(5px)';
    
    // Create loading matrix overlay
    const loadingMatrix = document.createElement('div');
    loadingMatrix.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0f0f23;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-code);
      color: var(--color-neural);
      font-size: 1.2rem;
      letter-spacing: 0.1em;
    `;
    loadingMatrix.innerHTML = 'INITIALIZING NEURAL LINK...<br><span style="opacity:0.6">[████████████] 100%</span>';
    document.body.appendChild(loadingMatrix);
    
    setTimeout(() => {
      loadingMatrix.style.transition = 'opacity 0.5s ease';
      loadingMatrix.style.opacity = '0';
      document.body.style.opacity = '1';
      document.body.style.filter = 'none';
      
      setTimeout(() => {
        document.body.removeChild(loadingMatrix);
      }, 500);
    }, 1500);
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

  // FAQ Accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current FAQ item
      if (!isActive) {
        faqItem.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Waitlist form functionality
  const waitlistForm = document.getElementById('waitlistForm');
  const successMessage = document.getElementById('successMessage');
  const emailInput = document.getElementById('email');
  const waitlistBtn = document.querySelector('.waitlist-btn');
  const btnText = document.querySelector('.btn-text');
  const btnLoading = document.querySelector('.btn-loading');

  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        // Add shake animation for invalid email
        emailInput.style.animation = 'shake 0.5s ease-in-out';
        emailInput.focus();
        setTimeout(() => {
          emailInput.style.animation = '';
        }, 500);
        return;
      }
      
      // Show loading state
      btnText.style.display = 'none';
      btnLoading.style.display = 'block';
      waitlistBtn.disabled = true;
      waitlistBtn.style.opacity = '0.7';
      
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
        
        // Log mock data for development
        console.log('Waitlist signup (mock):', userData);
        console.log('Total waitlist members:', waitlistData.length);
        
        // Add success animation to the section
        const waitlistSection = document.querySelector('.waitlist');
        waitlistSection.style.background = 'linear-gradient(135deg, var(--color-success) 0%, #20B2AA 100%)';
        setTimeout(() => {
          waitlistSection.style.background = 'linear-gradient(135deg, var(--color-neural) 0%, var(--color-neural-secondary) 100%)';
        }, 3000);
        
      }, 1500); // Simulate network delay
    });
  }

  // Add shake animation for form validation
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(shakeStyle);

  console.log('%c🧠 NeuroLink Pro - Brain Wave AI Reader initialized', 'color: #667eea; font-size: 14px; font-weight: bold;');
  console.log('%c🚀 Experience the future of brain-computer interaction', 'color: #764ba2; font-size: 12px;');
  console.log('%c💻 Enhanced with advanced animations and parallax effects', 'color: #ff6b6b; font-size: 10px;');
  console.log('%c📝 FAQ and Waitlist features activated', 'color: #30D158; font-size: 10px;');
  
  // Add particle fade animation to CSS dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFade {
      0% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
      100% {
        opacity: 0;
        transform: scale(0) translateY(-20px);
      }
    }
  `;
  document.head.appendChild(style);
});