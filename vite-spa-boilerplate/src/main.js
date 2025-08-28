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

  // Enhanced brain wave animation
  const brainWaves = document.querySelector('.brain-waves');
  if (brainWaves) {
    let waveCount = 0;
    setInterval(() => {
      waveCount++;
      brainWaves.style.filter = `hue-rotate(${waveCount * 2}deg) brightness(${1 + Math.sin(waveCount * 0.1) * 0.2})`;
    }, 100);
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

  // Parallax effect for hero background
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
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

  // Neural network animation enhancement
  const neuralNetwork = document.querySelector('.neural-network');
  if (neuralNetwork) {
    let pulseIntensity = 0;
    setInterval(() => {
      pulseIntensity += 0.1;
      const brightness = 1 + Math.sin(pulseIntensity) * 0.3;
      neuralNetwork.style.filter = `brightness(${brightness}) hue-rotate(${pulseIntensity * 10}deg)`;
    }, 150);
  }

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

  // Add loading state simulation
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  });

  console.log('🧠 NeuroLink Pro - Brain Wave AI Reader initialized');
  console.log('🚀 Experience the future of brain-computer interaction');
});