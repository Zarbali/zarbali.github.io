/**
 * Main Application File
 * 
 * Почему это главный файл:
 * - Точка входа приложения
 * - Координирует работу всех модулей
 * - Инициализация при загрузке страницы
 * - Легко понять структуру приложения
 */

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  // Создаем экземпляр рендерера
  const renderer = new Renderer();
  
  // Рендерим навыки
  if (typeof skillsData !== 'undefined') {
    renderer.renderSkills(skillsData);
  }
  
  // Рендерим проекты
  if (typeof projectsData !== 'undefined') {
    renderer.renderProjects(projectsData);
  }
  
  // Обновляем год в футере
  renderer.updateCurrentYear();
  
  // Добавляем анимации при скролле (опционально)
  setupScrollAnimations();
});

/**
 * Анимации при прокрутке
 * Почему это полезно:
 * - Улучшает пользовательский опыт
 * - Делает сайт более интерактивным
 * - Показывает понимание современных веб-технологий
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
  
  // Наблюдаем за секциями
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
  
  // Первая секция (hero) сразу видима
  if (sections[0]) {
    sections[0].style.opacity = '1';
    sections[0].style.transform = 'translateY(0)';
  }
}

