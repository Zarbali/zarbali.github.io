/**
 * Data Module
 * 
 * Why separate data file:
 * - Separation of concerns (data vs logic)
 * - Easy to update content without changing code
 * - Can load from API in the future
 * - Clean project structure
 */

const skillsData = [
  {
    name: 'Python',
    level: 'Advanced',
    icon: '🐍'
  },
  {
    name: 'Java',
    level: 'Intermediate',
    icon: '☕'
  },
  {
    name: 'C#',
    level: 'Intermediate',
    icon: '🔷'
  },
  {
    name: 'TensorFlow',
    level: 'Intermediate',
    icon: '🧠'
  },
  {
    name: 'PyTorch',
    level: 'Intermediate',
    icon: '🔥'
  },
  {
    name: 'NumPy',
    level: 'Advanced',
    icon: '🔢'
  },
  {
    name: 'Pandas',
    level: 'Advanced',
    icon: '🐼'
  },
  {
    name: 'Scikit-learn',
    level: 'Intermediate',
    icon: '📊'
  },
  {
    name: 'Machine Learning',
    level: 'Intermediate',
    icon: '🤖'
  },
  {
    name: 'Deep Learning',
    level: 'Intermediate',
    icon: '🧬'
  },
  {
    name: 'Git',
    level: 'Intermediate',
    icon: '📦'
  },
  {
    name: 'Data Analysis',
    level: 'Intermediate',
    icon: '📈'
  }
];

const projectsData = [
  {
    title: 'Project Coming Soon',
    description: 'University AI project completed with excellent grade. Details will be added soon.',
    tags: ['AI', 'Python', 'Machine Learning'],
    links: {
      demo: '#',
      code: '#'
    },
    image: '🚀'
  },
  {
    title: 'Project Coming Soon',
    description: 'Independent university assignment demonstrating AI implementation skills.',
    tags: ['Deep Learning', 'Neural Networks'],
    links: {
      demo: '#',
      code: '#'
    },
    image: '🧠'
  },
  {
    title: 'Project Coming Soon',
    description: 'AI project showcasing practical application of machine learning concepts.',
    tags: ['Data Science', 'AI Libraries'],
    links: {
      demo: '#',
      code: '#'
    },
    image: '💡'
  }
];

// Export data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { skillsData, projectsData };
}

