/**
 * Data Module
 * 
 * Почему отдельный файл для данных:
 * - Разделение данных и логики (separation of concerns)
 * - Легко обновлять контент без изменения кода
 * - Можно в будущем загружать данные из API
 * - Чистая структура проекта
 */

const skillsData = [
  {
    name: 'HTML5',
    level: 'Продвинутый',
    icon: '🌐'
  },
  {
    name: 'CSS3',
    level: 'Продвинутый',
    icon: '🎨'
  },
  {
    name: 'JavaScript',
    level: 'Средний',
    icon: '⚡'
  },
  {
    name: 'Git',
    level: 'Средний',
    icon: '📦'
  },
  {
    name: 'Responsive Design',
    level: 'Продвинутый',
    icon: '📱'
  },
  {
    name: 'Web Performance',
    level: 'Средний',
    icon: '🚀'
  }
];

const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'Персональный сайт-портфолио с современным дизайном и адаптивной версткой. Демонстрирует навыки frontend разработки.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      demo: '#',
      code: 'https://github.com/yourusername/yourusername.github.io'
    },
    image: '💼'
  },
  {
    title: 'Task Manager',
    description: 'Веб-приложение для управления задачами с локальным хранением данных. Реализованы CRUD операции и фильтрация.',
    tags: ['JavaScript', 'LocalStorage', 'CSS'],
    links: {
      demo: '#',
      code: '#'
    },
    image: '✅'
  },
  {
    title: 'Weather App',
    description: 'Приложение для просмотра погоды с использованием открытого API. Показывает текущую погоду и прогноз.',
    tags: ['JavaScript', 'API', 'Async'],
    links: {
      demo: '#',
      code: '#'
    },
    image: '🌤️'
  }
];

// Экспорт данных для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { skillsData, projectsData };
}

