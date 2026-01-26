/**
 * Navigation Module
 * 
 * Why separate module:
 * - Encapsulates navigation logic
 * - Easy to test and maintain
 * - Reusable in other projects
 */

class Navigation {
  constructor() {
    this.nav = document.getElementById('navigation');
    this.navMenu = document.getElementById('navMenu');
    this.navToggle = document.getElementById('navToggle');
    this.navLinks = document.querySelectorAll('.nav__link');
    
    this.init();
  }
  
  init() {
    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMenu());
    }
    
    // Close menu on link click
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
    
    // Smooth scrolling
    this.setupSmoothScroll();
    
    // Active link on scroll
    this.setupActiveLink();
    
    // Navigation behavior on scroll
    this.setupScrollBehavior();
  }
  
  toggleMenu() {
    this.navMenu?.classList.toggle('active');
    this.navToggle?.classList.toggle('active');
  }
  
  closeMenu() {
    this.navMenu?.classList.remove('active');
    this.navToggle?.classList.remove('active');
  }
  
  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Check if it's an anchor link
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const navHeight = this.nav?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
  
  setupActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.setActiveLink(id);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
  }
  
  setActiveLink(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }
  
  setupScrollBehavior() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (this.nav) {
        if (currentScroll > 100) {
          this.nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
          this.nav.style.boxShadow = 'none';
        }
      }
      
      lastScroll = currentScroll;
    });
  }
}

// Initialize on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
  });
} else {
  new Navigation();
}

