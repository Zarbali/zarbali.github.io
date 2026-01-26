/**
 * Main Application File
 * 
 * Why this is the main file:
 * - Application entry point
 * - Coordinates all modules
 * - Initializes on page load
 * - Easy to understand application structure
 */

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Create renderer instance
  const renderer = new Renderer();
  
  // Render skills
  if (typeof skillsData !== 'undefined') {
    renderer.renderSkills(skillsData);
  }
  
  // Render projects
  if (typeof projectsData !== 'undefined') {
    renderer.renderProjects(projectsData);
  }
  
  // Update year in footer
  renderer.updateCurrentYear();
  
  // Add scroll animations (optional)
  setupScrollAnimations();
});

/**
 * Scroll Animations
 * Why this is useful:
 * - Improves user experience
 * - Makes the site more interactive
 * - Shows understanding of modern web technologies
 */
function setupScrollAnimations() {
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
  
  // Observe sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
  
  // First section (hero) is immediately visible
  if (sections[0]) {
    sections[0].style.opacity = '1';
    sections[0].style.transform = 'translateY(0)';
  }
}

