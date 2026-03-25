/**
 * Render Module
 * 
 * Why separate rendering module:
 * - Separates display logic from business logic
 * - Easy to change how data is displayed
 * - Can add templating in the future
 * - Clean and understandable code
 */

class Renderer {
  constructor() {
    this.skillsGrid = document.getElementById('skillsGrid');
    this.projectsGrid = document.getElementById('projectsGrid');
  }
  
  renderSkills(skills) {
    if (!this.skillsGrid || !skills) return;
    
    const tr = (key, fallback) => (window.I18N && window.I18N.t) ? window.I18N.t(key) : fallback;
    const levelMap = {
      Advanced: tr('level.advanced', 'Advanced'),
      Intermediate: tr('level.intermediate', 'Intermediate'),
      Beginner: tr('level.beginner', 'Beginner')
    };

    this.skillsGrid.innerHTML = skills.map(skill => `
      <div class="skill-card">
        <div class="skill-card__icon">${skill.icon}</div>
        <div class="skill-card__name">${this.escapeHtml(skill.name)}</div>
        <div class="skill-card__level">${this.escapeHtml(levelMap[skill.level] || skill.level)}</div>
      </div>
    `).join('');
  }
  
  renderProjects(projects) {
    if (!this.projectsGrid || !projects) return;
    const tr = (key, fallback) => (window.I18N && window.I18N.t) ? window.I18N.t(key) : fallback;
    
    this.projectsGrid.innerHTML = projects.map(project => {
      const pageUrl = project.links.page || project.links.demo || '#';
      const codeUrl = project.links.code || '#';
      const title = tr(`project.${project.slug}.title`, project.title);
      const description = tr(`project.${project.slug}.description`, project.description);
      return `
      <div class="project-card">
        <div class="project-card__image">${project.image}</div>
        <div class="project-card__content">
          <h3 class="project-card__title">${this.escapeHtml(title)}</h3>
          <p class="project-card__description">${this.escapeHtml(description)}</p>
          <div class="project-card__tags">
            ${project.tags.map(tag => `
              <span class="project-card__tag">${this.escapeHtml(tag)}</span>
            `).join('')}
          </div>
          <div class="project-card__links">
            ${pageUrl !== '#' ? `
              <a href="${this.escapeHtml(pageUrl)}" class="project-card__link">
                ${this.escapeHtml(tr('project.card.view', 'View Project'))} →
              </a>
            ` : ''}
            ${codeUrl !== '#' ? `
              <a href="${this.escapeHtml(codeUrl)}" target="_blank" rel="noopener noreferrer" class="project-card__link">
                ${this.escapeHtml(tr('project.card.github', 'GitHub'))} →
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    }).join('');
  }
  
  // XSS protection
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
  window.Renderer = Renderer;
}

