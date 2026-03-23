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
    slug: 'healthylifestylega',
    title: 'Healthy Lifestyle GA',
    description: 'AI-based recommendation system using a Genetic Algorithm to generate personalized diet and workout plans based on user profile, goals, and preferences.',
    tags: ['Python', 'Genetic Algorithm', 'AI', 'pandas'],
    links: {
      page: 'project.html?project=healthylifestylega',
      code: 'https://github.com/Zarbali/HealthyLifestyleGA'
    },
    image: '🥗'
  },
  {
    slug: 'aichat',
    title: 'AI Chat',
    description: 'Conversational chatbot with a knowledge base, learning from users, and DialoGPT for open-ended dialogue. Uses SentenceTransformer for semantic question matching.',
    tags: ['Python', 'NLP', 'DialoGPT', 'SentenceTransformer'],
    links: {
      page: 'project.html?project=aichat',
      code: 'https://github.com/Zarbali/AI_Chat'
    },
    image: '💬'
  },
  {
    slug: 'film',
    title: 'Movie Recommender System',
    description: 'Web app with collaborative filtering (SVD) for personalized movie recommendations. Flask backend, Surprise library, SQLite for history, dynamic data upload and model retraining.',
    tags: ['Python', 'Flask', 'Surprise', 'Collaborative Filtering', 'SQLite'],
    links: {
      page: 'project.html?project=film',
      code: 'https://github.com/Zarbali/film'
    },
    image: '🎬'
  },
  {
    slug: 'imageclassifier',
    title: 'Image Classifier',
    description: 'Binary CNN for Dogs vs Cats using transfer learning (VGG16). TensorFlow/Keras, data augmentation, ~94–95% accuracy. CLI for single and batch predictions.',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Transfer Learning', 'VGG16'],
    links: {
      page: 'project.html?project=imageclassifier',
      code: 'https://github.com/Zarbali/ImageClassifier'
    },
    image: '🖼️'
  }
];

// Export data for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { skillsData, projectsData };
}

