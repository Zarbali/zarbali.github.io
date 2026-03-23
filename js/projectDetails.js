/**
 * Project detail content for project.html
 * Keyed by project slug from projectsData
 */

const projectDetails = {
  healthylifestylega: {
    title: 'Healthy Lifestyle GA',
    subtitle: 'AI-powered recommendation system that generates personalized diet and workout plans using a Genetic Algorithm.',
    githubUrl: 'https://github.com/Zarbali/HealthyLifestyleGA',
    techStack: ['Python', 'pandas', 'Genetic Algorithm', 'CSV data'],
    howToRun: 'python main.py',
    exampleOutput: `User Goal: weight_loss
User Preference: vegetarian
Recommended Diet: Balanced Vegetarian (2200 kcal)
Recommended Workout: Strength Basic (300 kcal)
Net Calories: 1900`,
    hasDemo: true,
    demoConfig: {
      goals: [
        { value: 'weight_loss', label: 'Weight loss' },
        { value: 'muscle_gain', label: 'Muscle gain' },
        { value: 'maintenance', label: 'Maintenance' }
      ],
      preferences: [
        { value: 'vegan', label: 'Vegan' },
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'omnivore', label: 'Omnivore' }
      ],
      results: {
        weight_loss_vegan: { diet: 'Low-Cal Vegan (1800 kcal)', workout: 'Cardio Moderate (350 kcal)', net: '1450' },
        weight_loss_vegetarian: { diet: 'Balanced Vegetarian (2200 kcal)', workout: 'Strength Basic (300 kcal)', net: '1900' },
        weight_loss_omnivore: { diet: 'Lean Protein (2000 kcal)', workout: 'HIIT (400 kcal)', net: '1600' },
        muscle_gain_vegan: { diet: 'High-Protein Vegan (2600 kcal)', workout: 'Strength Intense (200 kcal)', net: '2400' },
        muscle_gain_vegetarian: { diet: 'Vegetarian Bulk (2800 kcal)', workout: 'Strength Intense (200 kcal)', net: '2600' },
        muscle_gain_omnivore: { diet: 'High-Protein Omnivore (3000 kcal)', workout: 'Strength Intense (200 kcal)', net: '2800' },
        maintenance_vegan: { diet: 'Balanced Vegan (2200 kcal)', workout: 'Mixed Moderate (250 kcal)', net: '1950' },
        maintenance_vegetarian: { diet: 'Balanced Vegetarian (2400 kcal)', workout: 'Mixed Moderate (250 kcal)', net: '2150' },
        maintenance_omnivore: { diet: 'Balanced Omnivore (2500 kcal)', workout: 'Mixed Moderate (250 kcal)', net: '2250' }
      }
    },
    sections: [
      {
        title: 'Overview',
        content: `This project implements an AI-based recommendation system that generates personalized diet and workout plans for users based on their physical profile, goals, and preferences. The core technique is a Genetic Algorithm (GA), which evolves an initial population of random plan combinations over several generations to find the best match.`,
        bullets: [
          'Personalized recommendations: diet + workout tailored to goal (weight loss, muscle gain, maintenance) and preference (vegan, vegetarian, omnivore).',
          'Genetic Algorithm: selection, crossover, and mutation over ~10 generations.',
          'Fitness function scores each plan (0–4); higher score = better fit.',
          'Explainable: each step is interpretable (unlike black-box neural networks).'
        ]
      },
      {
        title: 'Why Python',
        content: `Python was chosen for its role as the de facto language in AI/ML: clean syntax, rapid prototyping, and a rich ecosystem. Libraries used include pandas for structured data (users, diets, workouts), and the standard library for the genetic algorithm logic. The language allowed fast iteration and clear, modular code—important for an academic AI assignment.`,
        bullets: null
      },
      {
        title: 'How the algorithm works',
        content: `The system builds an initial population of random (diet, workout) pairs. A fitness function evaluates how well each pair fits the user (dietary match, calorie balance, protein/intensity for the goal). The best individuals are selected, recombined (crossover), and occasionally mutated. After several generations, the highest-scoring plan is returned as the recommendation.`,
        bullets: null
      },
      {
        title: 'Possible extensions',
        content: `The current implementation can be extended with user feedback loops, neural networks for outcome prediction, collaborative filtering, or a chatbot interface for natural interaction.`,
        bullets: null
      }
    ]
  },

  aichat: {
    title: 'AI Chat',
    subtitle: 'Conversational chatbot with a built-in knowledge base, session learning, and DialoGPT for natural open-ended dialogue. Uses SentenceTransformer for semantic question matching.',
    githubUrl: 'https://github.com/Zarbali/AI_Chat',
    techStack: ['Python', 'DialoGPT', 'SentenceTransformer', 'NLP'],
    howToRun: 'Run the chatbot module (e.g. python -m chatbot or as per README in the repository).',
    exampleOutput: `User: Who created this project?
Bot: This project was created by Arif Zarbaliyev.

User: Tell me about Arif.
Bot: Arif Zarbaliyev is the creator of this project. He is a university student specializing in Artificial Intelligence, with experience in frontend and backend development.`,
    hasDemo: true,
    demoType: 'chat',
    demoConfig: {
      greeting: "Hi! I'm your AI chatbot. I know about this project and its creator Arif. You can ask me anything, tell me your name, or teach me new facts — I'll remember them for this session. Type 'bye' to exit.",
      userName: null,
      answers: [
        { keywords: ['who are the creators', 'who created', 'who made', 'creator', 'author', 'creators of this project', 'who made this'], response: 'The creator is Arif Zarbaliyev.' },
        { keywords: ['what does arif like', 'arif like to do', 'what arif like', 'arif hobby'], response: 'Arif loves to eat and write code.' },
        { keywords: ['where is arif from', 'arif from', 'arif country', 'azerbaijan'], response: 'Arif is from Azerbaijan.' },
        { keywords: ['where do the creators study', 'where study', 'university', 'creators study', 'where does arif study', 'vizja', 'aeh'], response: 'They study at Vizja.' },
        { keywords: ['tell me about arif', 'arif zarbaliyev', 'about arif', 'who is arif', 'arif'], response: 'Arif Zarbaliyev is from Azerbaijan and studies at AEH.' },
        { keywords: ['what is this project', 'about this project', 'what is this chat', 'this project'], response: 'This is the AI Chat project — a chatbot with a knowledge base and learning, created by Arif Zarbaliyev. It can answer questions, remember your name, and learn new facts when you teach it.' },
        { keywords: ['how does this work', 'how does the chatbot work', 'how does it work'], response: 'The chatbot first checks its knowledge base (and what you taught it), then answers. If it doesn\'t know a fact, it asks you to teach it. For general chat it replies conversationally.' },
        { keywords: ['hello', 'hi', 'hey'], response: null },
        { keywords: ['name is', 'my name is', "i'm ", "i am "], response: null },
        { keywords: ['what is my name', "what's my name", 'do you know my name'], response: null },
        { keywords: ['thanks', 'thank you', 'thx', 'thank you so much'], response: "You're welcome!" },
        { keywords: ['bye', 'goodbye', 'see you', 'good night', 'exit', 'quit'], response: 'Goodbye!' },
        { keywords: ['good morning', 'good evening', 'yo', 'sup', "what's up"], response: null },
        { keywords: ['how are you', 'how do you do', 'how\'s it going', 'how are you doing'], response: "I'm doing well, thanks! What can I do for you?" },
        { keywords: ['what\'s your name', 'who are you', 'what are you'], response: "I'm the AI Chat demo — you can call me Chat. What's your name?" },
        { keywords: ['what can you do', 'help', 'capabilities', 'what do you know how to do'], response: 'I can chat, answer from my knowledge base (about Arif and the project), remember your name, and learn new facts when I don\'t know something. Ask me anything or teach me!' },
        { keywords: ['ok', 'okay', 'yes', 'yeah', 'yep', 'no', 'cool', 'nice', 'alright', 'got it'], response: null }
      ],
      factBase: {
        creator: 'Arif Zarbaliyev',
        creatorFrom: 'Azerbaijan',
        creatorStudies: 'Vizja',
        creatorLikes: 'eat and write code',
        projectName: 'AI Chat',
        projectDescription: 'a chatbot with a knowledge base and learning'
      },
      conversationalReplies: [
        "That's interesting! Tell me more if you'd like.",
        "I like that. What else would you like to talk about?",
        "I'm still learning — you can teach me by saying \"Remember: X is Y\" or just answer when I ask!",
        "Cool! Ask me about the project or Arif, or teach me something new.",
        "Nice chatting with you. Ask me something and I'll answer or ask you to teach me.",
        "I'm here to chat and learn. Try: \"Who created this?\" or \"Tell me about Arif\" or teach me a fact!",
        "Got it! You can ask me about the creator, the project, or tell me your name.",
        "Sure! If you have a question I don't know, I'll ask you to teach me."
      ]
    },
    demoInstructions: {
      title: 'How to use this demo',
      intro: 'You can chat naturally, ask about the creator, and teach the bot anything — without limits. Everything you teach is remembered for this session (until you refresh). If you ask something I don\'t know, I\'ll ask you to tell me and then remember it.',
      bullets: [
        'Say your name: e.g. "My name is Alex" — I\'ll remember and use it in conversation.',
        'I can build answers from my fact base: even if you phrase a question differently (e.g. "Where does Arif study?", "What does the creator like?"), I\'ll construct a reply from what I know — creator, where they\'re from, where they study, what they like, and the project.',
        'Teach a fact: "Remember: X is Y" or "Q: question A: answer". Then ask the question and I\'ll answer. If I don\'t know, I\'ll ask you to teach me and remember your reply.',
        'Ask "what do you know" or "what did I teach you" — I\'ll list what you taught me and remind you I also know about the creator and the project.'
      ]
    },
    sections: [
      {
        title: 'Overview',
        content: 'This project implements a conversational chatbot that combines a curated knowledge base with a generative model (DialoGPT) for natural dialogue. The bot answers factual questions from the knowledge base, learns new facts from the user during the session, and uses DialoGPT for open-ended conversation. It also personalizes replies by remembering the user\'s name.',
        bullets: [
          'Knowledge base: predefined answers about the project and its creator (who created it, where the creator studies, etc.).',
          'Semantic matching: SentenceTransformer is used to match user questions to knowledge-base entries even when phrased differently (e.g. "Who is Arif?" vs "Tell me about Arif.").',
          'Session learning: when the bot does not know an answer, it asks the user to provide it and stores it for the rest of the session.',
          'Personalization: the bot remembers the user\'s name (e.g. "My name is Alex") and uses it in later replies.',
          'Open-ended dialogue: DialoGPT is used for general conversation when the question is not factual or not in the knowledge base.'
        ]
      },
      {
        title: 'Architecture and flow',
        content: 'The chatbot first checks incoming messages against the knowledge base using semantic similarity (SentenceTransformer). If a match is found, it returns the corresponding answer. If the user provides personal information (e.g. name), the bot stores it. For unknown factual questions, the bot can ask the user to teach it and then add the answer to the session knowledge base. For general chit-chat, the bot uses DialoGPT to generate a natural response.',
        bullets: null
      },
      {
        title: 'Challenges and solutions',
        content: 'Factual questions sometimes triggered random DialoGPT answers; the solution was to always query the knowledge base first and use DialoGPT only for non-factual or open-ended input. Similar questions phrased differently were handled by using SentenceTransformer to compare sentence embeddings instead of exact keyword match. Learning new facts without overwriting existing knowledge was implemented by appending user-provided answers to a session store and querying it together with the static knowledge base.',
        bullets: null
      },
      {
        title: 'What I learned',
        content: 'Building this project involved designing and maintaining a knowledge base for a chatbot, using NLP models (SentenceTransformer) for semantic similarity, integrating a conversational model (DialoGPT), and designing a flow that combines rule-based answers with generative AI while allowing the bot to learn from user interaction.',
        bullets: null
      }
    ]
  },

  film: {
    title: 'Movie Recommender System',
    subtitle: 'Web application using collaborative filtering (SVD) to generate personalized movie recommendations. Users enter a User ID to get tailored suggestions; the system supports dynamic data upload and model retraining.',
    githubUrl: 'https://github.com/Zarbali/film',
    techStack: ['Python', 'Flask', 'Surprise', 'Pandas', 'SQLite', 'Joblib'],
    howToRun: 'Install dependencies (Flask, Surprise, Pandas, etc.), then run: python app.py. Optionally run train_model.py first to generate the SVD model.',
    exampleOutput: `User ID: 1
Recommended movies:
1. The Shawshank Redemption (1994)
2. The Godfather (1972)
3. Pulp Fiction (1994)
4. Schindler's List (1993)
5. Forrest Gump (1994)`,
    hasDemo: true,
    demoType: 'movies',
    demoConfig: {
      userIds: [
        { value: '1', label: 'User 1' },
        { value: '2', label: 'User 2' },
        { value: '3', label: 'User 3' },
        { value: '5', label: 'User 5' },
        { value: '10', label: 'User 10' }
      ],
      movieResults: {
        '1': ['The Shawshank Redemption (1994)', 'The Godfather (1972)', 'Pulp Fiction (1994)', 'Schindler\'s List (1993)', 'Forrest Gump (1994)'],
        '2': ['Star Wars (1977)', 'The Empire Strikes Back (1980)', 'Return of the Jedi (1983)', 'Raiders of the Lost Ark (1981)', 'Back to the Future (1985)'],
        '3': ['The Matrix (1999)', 'Fight Club (1999)', 'The Silence of the Lambs (1991)', 'Saving Private Ryan (1998)', 'The Green Mile (1999)'],
        '5': ['Toy Story (1995)', 'The Lion King (1994)', 'Jurassic Park (1993)', 'Aladdin (1992)', 'Beauty and the Beast (1991)'],
        '10': ['Inception (2010)', 'The Dark Knight (2008)', 'Interstellar (2014)', 'Gladiator (2000)', 'The Departed (2006)']
      }
    },
    sections: [
      {
        title: 'Overview',
        content: 'This project implements a Movie Recommender System using collaborative filtering techniques. Users can enter a User ID to receive personalized movie recommendations based on past preferences. The system also allows uploading new datasets to dynamically retrain the recommendation model, keeping it up to date. The web app was built with Flask and designed for clarity, robust input handling, and a clean UI.',
        bullets: [
          'Personalized recommendations: User ID input returns movies tailored to that user\'s rating history via SVD-based collaborative filtering.',
          'Dynamic data upload: CSV upload updates the dataset and automatically retrains the SVD model.',
          'Recommendation history: SQLite stores mapping of User IDs to recommended movies for review.',
          'Responsive design: Clear explanations of features, form validation, and Bootstrap-like styling for a smooth UX.'
        ]
      },
      {
        title: 'Technologies used',
        content: 'Flask handles routing, form processing, and HTML rendering. The Surprise library provides SVD (Singular Value Decomposition) for collaborative filtering; Pandas is used for data preprocessing and merging datasets. SQLite stores recommendation history; Joblib persists the trained model for fast reloads without retraining.',
        bullets: null
      },
      {
        title: 'Challenges and solutions',
        content: 'NumPy compatibility: Surprise requires NumPy 1.x, which conflicted with NumPy 2.x — resolved by downgrading and aligning dependencies. Duplicate recommendations were filtered to ensure unique movie titles. Large MovieLens dataset handling relied on optimized Pandas and Surprise preprocessing. Dynamic model updates required careful integration of Surprise Reader/Dataset for reloading and retraining. Invalid User IDs caused unexpected behavior — robust validation and Flask flash messages were added.',
        bullets: null
      },
      {
        title: 'Insights and future work',
        content: 'Data quality and diversity of ratings directly impact recommendation accuracy. User-centric design with clear explanations (e.g. what User ID means) improved usability. Future plans include a hybrid system (collaborative + content-based) to address cold-start, migration to PostgreSQL for scalability, user authentication, and exploration of deep learning–based recommenders (TensorFlow/PyTorch).',
        bullets: null
      }
    ]
  },

  imageclassifier: {
    title: 'Image Classifier: Dogs vs Cats',
    subtitle: 'Binary image classification using a CNN with transfer learning (VGG16). The model achieves high accuracy on distinguishing dogs from cats, with data augmentation and fine-tuned top layers.',
    githubUrl: 'https://github.com/Zarbali/ImageClassifier',
    techStack: ['Python', 'TensorFlow', 'Keras', 'VGG16', 'CNN', 'ImageNet'],
    howToRun: 'Activate venv, then: python classifier.py (train). For predictions: python predict.py path/to/image.jpg or python predict_batch.py path/to/folder/',
    exampleOutput: `$ python predict.py test_dog.jpg

  PREDICTION RESULT
Predicted Class: DOGS
Confidence:      96.32%
Raw Prediction:  0.9632
✓ Very confident prediction!`,
    hasDemo: true,
    demoType: 'classifier',
    demoConfig: {
      samples: [
        { value: 'dog', label: 'Sample: Dog image', result: { class: 'DOGS', confidence: '96.32' } },
        { value: 'cat', label: 'Sample: Cat image', result: { class: 'CATS', confidence: '94.18' } },
        { value: 'dog2', label: 'Sample: Another dog', result: { class: 'DOGS', confidence: '89.45' } },
        { value: 'cat2', label: 'Sample: Another cat', result: { class: 'CATS', confidence: '91.22' } }
      ]
    },
    sections: [
      {
        title: 'Overview',
        content: 'This project implements a binary image classifier for dogs and cats using convolutional neural networks (CNNs). The model leverages transfer learning from VGG16 (pre-trained on ImageNet) to achieve high accuracy with relatively little training data. Data augmentation and fine-tuning of the top layers were used to improve generalization and reduce overfitting.',
        bullets: [
          'Transfer learning: VGG16 base (ImageNet weights) with fine-tuned top layers for binary classification.',
          'Architecture: VGG16 → Flatten → Dense (256, ReLU) → Dropout (50%) → Dense (1, sigmoid).',
          'Data augmentation: random rotations, shifts, shearing, zoom, horizontal flips; pixel normalization 0–1.',
          'CLI tools: predict.py for single images, predict_batch.py for folders.'
        ]
      },
      {
        title: 'Model and training',
        content: 'Training used Binary Crossentropy loss, Adam optimizer, batch size 32, and 10 epochs. The dataset (dogs/cats, ~1008 images) was split 80% training / 20% validation via Keras ImageDataGenerator. The model achieves approximately 94–95% validation accuracy.',
        bullets: null
      },
      {
        title: 'Project structure',
        content: 'classifier.py trains the model and produces image_classifier_model.h5, accuracy_plot.png, and loss_plot.png. predict.py classifies a single image; predict_batch.py processes entire folders. The data directory contains train/dogs and train/cats subfolders.',
        bullets: null
      },
      {
        title: 'Conclusion and future work',
        content: 'The application achieves strong accuracy in classifying dogs and cats. Transfer learning with VGG16 allowed efficient training and effective feature extraction. Future improvements could include more advanced architectures (e.g. ResNet, EfficientNet), hyperparameter tuning, and larger or more diverse datasets for better robustness and generalization.',
        bullets: null
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.projectDetails = projectDetails;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectDetails };
}
