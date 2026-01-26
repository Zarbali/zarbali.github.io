/**
 * Render Module
 * 
 * Почему отдельный модуль для рендеринга:
 * - Разделение логики отображения и бизнес-логики
 * - Легко изменить способ отображения данных
 * - Можно добавить шаблонизатор в будущем
 * - Чистый и понятный код
 */

class Renderer {
  constructor() {
    this.skillsGrid = document.getElementById('skillsGrid');
    this.projectsGrid = document.getElementById('projectsGrid');
  }
  
  renderSkills(skills) {
    if (!this.skillsGrid || !skills) return;
    
    this.skillsGrid.innerHTML = skills.map(skill => `
      <div class="skill-card">
        <div class="skill-card__icon">${skill.icon}</div>
        <div class="skill-card__name">${this.escapeHtml(skill.name)}</div>
        <div class="skill-card__level">${this.escapeHtml(skill.level)}</div>
      </div>
    `).join('');
  }
  
  renderProjects(projects) {
    if (!this.projectsGrid || !projects) return;
    
    this.projectsGrid.innerHTML = projects.map(project => `
      <div class="project-card">
        <div class="project-card__image">${project.image}</div>
        <div class="project-card__content">
          <h3 class="project-card__title">${this.escapeHtml(project.title)}</h3>
          <p class="project-card__description">${this.escapeHtml(project.description)}</p>
          <div class="project-card__tags">
            ${project.tags.map(tag => `
              <span class="project-card__tag">${this.escapeHtml(tag)}</span>
            `).join('')}
          </div>
          <div class="project-card__links">
            ${project.links.demo !== '#' ? `
              <a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="project-card__link">
                Демо →
              </a>
            ` : ''}
            ${project.links.code !== '#' ? `
              <a href="${project.links.code}" target="_blank" rel="noopener noreferrer" class="project-card__link">
                Код →
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // Защита от XSS атак
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

// Экспорт для использования в других модулях
if (typeof window !== 'undefined') {
  window.Renderer = Renderer;
}

