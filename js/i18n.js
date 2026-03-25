(function() {
  var STORAGE_KEY = 'portfolio_lang';
  var defaultLang = 'en';

  var translations = {
    en: {
      'site.title': 'Arif | AI Student & Developer Portfolio',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'lang.toggle': 'PL',
      'hero.subtitle': 'AI Student & Developer',
      'hero.description': 'University student specializing in Artificial Intelligence. Building AI projects, exploring machine learning libraries, and developing practical solutions through programming.',
      'hero.viewProjects': 'View Projects',
      'hero.getInTouch': 'Get in Touch',
      'about.p1': "I'm a university student pursuing Artificial Intelligence, passionate about machine learning, neural networks, and building intelligent systems. Through my coursework, I've completed multiple AI projects independently, consistently achieving excellent grades.",
      'about.p2': 'I work with various AI libraries and frameworks, write clean and efficient code, and enjoy solving complex problems through programming. My projects demonstrate practical applications of AI concepts learned in university, showcasing both theoretical understanding and hands-on implementation skills.',
      'about.p3': "Beyond AI, I also have experience in frontend and backend development. I've worked with modern web technologies, building user interfaces and server-side applications. This full-stack experience complements my AI expertise, allowing me to create complete solutions that integrate machine learning models with web applications.",
      'about.p4': "I'm always eager to learn new technologies, improve my skills, and take on challenging assignments that push the boundaries of what I can create with AI and web development.",
      'section.about': 'About Me',
      'section.skills': 'Skills',
      'section.projects': 'Projects',
      'section.contact': 'Contact',
      'contact.text': 'Open to new projects, collaborations, and opportunities. Feel free to reach out!',
      'contact.emailLabel': 'Your Email',
      'contact.emailPlaceholder': 'your.email@example.com',
      'contact.messageLabel': 'Message',
      'contact.messagePlaceholder': 'Write your message here...',
      'contact.send': 'Send Message',
      'contact.sending': 'Sending...',
      'contact.directEmail': 'Direct Email',
      'contact.error.fillAll': 'Please fill in all fields.',
      'contact.error.invalidEmail': 'Please enter a valid email address.',
      'contact.success.sent': "Message sent successfully! I'll get back to you soon.",
      'contact.error.failed': 'Failed to send message. Please try again later.',
      'footer.text': 'Built with attention to detail.',
      'level.advanced': 'Advanced',
      'level.intermediate': 'Intermediate',
      'level.beginner': 'Beginner',
      'project.card.view': 'View Project',
      'project.card.github': 'GitHub',
      'project.back': 'Back to Projects',
      'project.notFound': 'Project not found.',
      'project.viewGithub': 'View on GitHub',
      'project.howToRun': 'How to run',
      'project.exampleOutput': 'Example output',
      'demo.chat.title': 'Try the chatbot',
      'demo.chat.desc': 'Ask about the project creator or say your name. This is a simplified demo of the chatbot behaviour.',
      'demo.chat.placeholder': 'Type your message...',
      'demo.chat.send': 'Send',
      'demo.movies.title': 'Try the recommendation engine',
      'demo.movies.desc': 'Select a User ID to see sample movie recommendations (simulated output). The real app uses SVD collaborative filtering on MovieLens data.',
      'demo.movies.userId': 'User ID',
      'demo.movies.button': 'Get recommendations',
      'demo.classifier.title': 'Try the classifier (simulated)',
      'demo.classifier.desc': 'Select a sample to see how the classifier output would look. The real app runs locally with python predict.py.',
      'demo.classifier.sample': 'Sample image',
      'demo.classifier.button': 'Classify',
      'project.healthylifestylega.title': 'Healthy Lifestyle GA',
      'project.healthylifestylega.description': 'AI-based recommendation system using a Genetic Algorithm to generate personalized diet and workout plans based on user profile, goals, and preferences.',
      'project.aichat.title': 'AI Chat',
      'project.aichat.description': 'Conversational chatbot with a knowledge base, learning from users, and DialoGPT for open-ended dialogue. Uses SentenceTransformer for semantic question matching.',
      'project.film.title': 'Movie Recommender System',
      'project.film.description': 'Web app with collaborative filtering (SVD) for personalized movie recommendations. Flask backend, Surprise library, SQLite for history, dynamic data upload and model retraining.',
      'project.imageclassifier.title': 'Image Classifier',
      'project.imageclassifier.description': 'Binary CNN for Dogs vs Cats using transfer learning (VGG16). TensorFlow/Keras, data augmentation, ~94–95% accuracy. CLI for single and batch predictions.'
    },
    pl: {
      'site.title': 'Arif | Portfolio studenta AI i developera',
      'nav.about': 'O mnie',
      'nav.skills': 'Umiejętności',
      'nav.projects': 'Projekty',
      'nav.contact': 'Kontakt',
      'lang.toggle': 'EN',
      'hero.subtitle': 'Student AI i Developer',
      'hero.description': 'Jestem studentem specjalizującym się w sztucznej inteligencji. Tworzę projekty AI, pracuję z bibliotekami uczenia maszynowego i buduję praktyczne rozwiązania programistyczne.',
      'hero.viewProjects': 'Zobacz projekty',
      'hero.getInTouch': 'Skontaktuj się',
      'about.p1': 'Jestem studentem kierunku Sztuczna Inteligencja i pasjonuje mnie uczenie maszynowe, sieci neuronowe oraz budowanie inteligentnych systemów. W ramach studiów samodzielnie zrealizowałem wiele projektów AI, osiągając bardzo dobre wyniki.',
      'about.p2': 'Pracuję z różnymi bibliotekami i frameworkami AI, piszę czysty i wydajny kod oraz lubię rozwiązywać złożone problemy programistyczne. Moje projekty pokazują praktyczne zastosowanie koncepcji AI, łącząc wiedzę teoretyczną z praktyczną implementacją.',
      'about.p3': 'Poza AI mam także doświadczenie w frontendzie i backendzie. Pracowałem z nowoczesnymi technologiami webowymi, tworząc interfejsy użytkownika i aplikacje serwerowe. To podejście full-stack uzupełnia moje kompetencje AI i pozwala budować kompletne rozwiązania łączące modele ML z aplikacjami webowymi.',
      'about.p4': 'Stale uczę się nowych technologii, rozwijam umiejętności i podejmuję ambitne zadania, które poszerzają granice tego, co mogę stworzyć z wykorzystaniem AI i web developmentu.',
      'section.about': 'O mnie',
      'section.skills': 'Umiejętności',
      'section.projects': 'Projekty',
      'section.contact': 'Kontakt',
      'contact.text': 'Jestem otwarty na nowe projekty, współprace i możliwości. Napisz do mnie!',
      'contact.emailLabel': 'Twój email',
      'contact.emailPlaceholder': 'twoj.email@przyklad.com',
      'contact.messageLabel': 'Wiadomość',
      'contact.messagePlaceholder': 'Napisz swoją wiadomość...',
      'contact.send': 'Wyślij wiadomość',
      'contact.sending': 'Wysyłanie...',
      'contact.directEmail': 'Email bezpośredni',
      'contact.error.fillAll': 'Proszę uzupełnić wszystkie pola.',
      'contact.error.invalidEmail': 'Proszę podać poprawny adres email.',
      'contact.success.sent': 'Wiadomość została wysłana! Odpowiem najszybciej jak to możliwe.',
      'contact.error.failed': 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.',
      'footer.text': 'Stworzone z dbałością o szczegóły.',
      'level.advanced': 'Zaawansowany',
      'level.intermediate': 'Średniozaawansowany',
      'level.beginner': 'Początkujący',
      'project.card.view': 'Zobacz projekt',
      'project.card.github': 'GitHub',
      'project.back': 'Powrót do projektów',
      'project.notFound': 'Projekt nie został znaleziony.',
      'project.viewGithub': 'Zobacz na GitHub',
      'project.howToRun': 'Jak uruchomić',
      'project.exampleOutput': 'Przykładowy wynik',
      'demo.chat.title': 'Wypróbuj chatbota',
      'demo.chat.desc': 'Zapytaj o autora projektu lub podaj swoje imię. To uproszczona demonstracja działania chatbota.',
      'demo.chat.placeholder': 'Wpisz wiadomość...',
      'demo.chat.send': 'Wyślij',
      'demo.movies.title': 'Wypróbuj silnik rekomendacji',
      'demo.movies.desc': 'Wybierz User ID, aby zobaczyć przykładowe rekomendacje filmów (symulacja). Prawdziwa aplikacja używa SVD na danych MovieLens.',
      'demo.movies.userId': 'User ID',
      'demo.movies.button': 'Pobierz rekomendacje',
      'demo.classifier.title': 'Wypróbuj klasyfikator (symulacja)',
      'demo.classifier.desc': 'Wybierz próbkę, aby zobaczyć, jak wygląda wynik klasyfikatora. Prawdziwa aplikacja działa lokalnie przez python predict.py.',
      'demo.classifier.sample': 'Przykładowy obraz',
      'demo.classifier.button': 'Klasyfikuj',
      'project.healthylifestylega.title': 'Healthy Lifestyle GA',
      'project.healthylifestylega.description': 'System rekomendacji oparty na AI i algorytmie genetycznym, który tworzy spersonalizowane plany diety i treningu na podstawie profilu użytkownika, celu i preferencji.',
      'project.aichat.title': 'AI Chat',
      'project.aichat.description': 'Konwersacyjny chatbot z bazą wiedzy, uczeniem od użytkownika i DialoGPT do swobodnych rozmów. Wykorzystuje SentenceTransformer do dopasowania pytań semantycznie.',
      'project.film.title': 'System Rekomendacji Filmów',
      'project.film.description': 'Aplikacja webowa z filtrowaniem kolaboracyjnym (SVD) do personalizowanych rekomendacji filmów. Backend Flask, biblioteka Surprise, historia w SQLite, upload danych i dynamiczne trenowanie modelu.',
      'project.imageclassifier.title': 'Klasyfikator Obrazów',
      'project.imageclassifier.description': 'Binarny CNN Dogs vs Cats z transfer learningiem (VGG16). TensorFlow/Keras, augmentacja danych, około 94-95% skuteczności oraz CLI do predykcji pojedynczych i wielu obrazów.'
    }
  };

  var projectLocalization = {
    pl: {
      healthylifestylega: {
        subtitle: 'System rekomendacji oparty na AI, który generuje spersonalizowane plany diety i treningu z wykorzystaniem algorytmu genetycznego.',
        howToRun: 'python main.py',
        sections: [
          { title: 'Przegląd', content: 'Projekt implementuje system rekomendacji oparty na AI, który generuje spersonalizowane plany diety i treningu na podstawie profilu użytkownika, celów i preferencji. Rdzeniem rozwiązania jest algorytm genetyczny (GA), który ewoluuje populację kombinacji planów i wybiera najlepsze dopasowanie.', bullets: ['Spersonalizowane rekomendacje: dieta i trening dopasowane do celu i preferencji.', 'Algorytm genetyczny: selekcja, krzyżowanie i mutacja w kolejnych generacjach.', 'Funkcja fitness ocenia jakość planu i wybiera najlepsze rozwiązania.', 'Podejście jest interpretowalne i łatwe do wyjaśnienia.'] },
          { title: 'Dlaczego Python', content: 'Python został wybrany jako standardowy język w AI/ML: ma czytelną składnię, umożliwia szybkie prototypowanie i oferuje bogaty ekosystem bibliotek. W projekcie wykorzystano m.in. pandas do pracy na danych.' },
          { title: 'Jak działa algorytm', content: 'System tworzy losową populację par (dieta, trening), następnie ocenia je funkcją fitness pod kątem dopasowania do celu i preferencji. Najlepsze osobniki są wybierane, łączone i mutowane. Po kilku generacjach zwracany jest plan o najwyższej ocenie.' },
          { title: 'Możliwe rozszerzenia', content: 'Projekt można rozbudować o pętle informacji zwrotnej od użytkownika, modele predykcyjne, filtrowanie kolaboracyjne lub interfejs chatbota.' }
        ]
      },
      aichat: {
        subtitle: 'Chatbot konwersacyjny z wbudowaną bazą wiedzy, uczeniem w trakcie sesji i DialoGPT do naturalnych odpowiedzi. Wykorzystuje SentenceTransformer do semantycznego dopasowania pytań.',
        demoInstructions: { title: 'Jak korzystać z demo' },
        sections: [
          { title: 'Przegląd', content: 'Projekt implementuje chatbota, który łączy kuratorowaną bazę wiedzy z modelem generatywnym do naturalnych rozmów. Bot odpowiada na pytania faktograficzne, uczy się nowych faktów od użytkownika i personalizuje odpowiedzi, zapamiętując imię.', bullets: ['Baza wiedzy z gotowymi odpowiedziami.', 'Dopasowanie semantyczne pytań przy pomocy SentenceTransformer.', 'Uczenie w trakcie sesji: bot zapamiętuje nowe informacje.', 'Personalizacja: bot pamięta imię użytkownika.'] },
          { title: 'Architektura i przepływ', content: 'Wiadomości są najpierw porównywane z bazą wiedzy. Jeśli jest dopasowanie, bot zwraca gotową odpowiedź. Gdy brakuje wiedzy faktograficznej, pyta użytkownika o odpowiedź i zapamiętuje ją na sesję. W rozmowach otwartych korzysta z modelu konwersacyjnego.' },
          { title: 'Wyzwania i rozwiązania', content: 'Najważniejsze problemy to losowe odpowiedzi na pytania faktograficzne oraz różne sposoby formułowania tych samych pytań. Rozwiązano je przez priorytet bazy wiedzy i dopasowanie semantyczne zamiast prostego dopasowania słów.' },
          { title: 'Czego się nauczyłem', content: 'Projekt rozwinął umiejętności budowy bazy wiedzy, wykorzystania modeli NLP do podobieństwa semantycznego oraz łączenia podejścia regułowego z generatywnym AI.' }
        ]
      },
      film: {
        title: 'System Rekomendacji Filmów',
        subtitle: 'Aplikacja webowa wykorzystująca filtrowanie kolaboracyjne (SVD) do generowania spersonalizowanych rekomendacji filmów.',
        sections: [
          { title: 'Przegląd', content: 'Projekt implementuje system rekomendacji filmów oparty na filtrowaniu kolaboracyjnym. Użytkownik podaje User ID i otrzymuje spersonalizowane propozycje. System umożliwia też wgrywanie nowych danych oraz dynamiczne ponowne trenowanie modelu.', bullets: ['Rekomendacje personalizowane dla User ID.', 'Dynamiczny upload danych CSV i retrening modelu.', 'Historia rekomendacji przechowywana w SQLite.', 'Przejrzysty interfejs i walidacja danych wejściowych.'] },
          { title: 'Wykorzystane technologie', content: 'Flask odpowiada za routing i obsługę formularzy. Biblioteka Surprise udostępnia model SVD do filtrowania kolaboracyjnego. Pandas służy do przygotowania danych, SQLite do historii rekomendacji, a Joblib do zapisu i odczytu wytrenowanego modelu.' },
          { title: 'Wyzwania i rozwiązania', content: 'Problemy obejmowały kompatybilność NumPy z Surprise, duplikaty rekomendacji, obsługę dużego zbioru danych oraz dynamiczny retrening. Zastosowano filtrowanie duplikatów, optymalizację przetwarzania i solidną walidację User ID.' },
          { title: 'Wnioski i dalszy rozwój', content: 'Jakość i różnorodność danych ma kluczowy wpływ na trafność rekomendacji. W przyszłości planowane są: model hybrydowy, migracja na PostgreSQL, autoryzacja użytkowników i eksperymenty z modelami deep learning.' }
        ]
      },
      imageclassifier: {
        title: 'Klasyfikator Obrazów: Psy vs Koty',
        subtitle: 'Klasyfikacja binarna obrazów przy użyciu CNN i transfer learningu (VGG16).',
        sections: [
          { title: 'Przegląd', content: 'Projekt implementuje binarny klasyfikator obrazów psów i kotów przy użyciu sieci CNN. Wykorzystano transfer learning na bazie VGG16 (ImageNet), co pozwoliło osiągnąć wysoką skuteczność przy relatywnie niewielkim zbiorze danych.', bullets: ['Transfer learning: VGG16 z wagami ImageNet.', 'Architektura: VGG16 -> Flatten -> Dense(256) -> Dropout(50%) -> Dense(1, sigmoid).', 'Augmentacja danych: rotacje, przesunięcia, shear, zoom, flip.', 'Narzędzia CLI do predykcji pojedynczych i wielu obrazów.'] },
          { title: 'Model i trening', content: 'Trening wykorzystuje Binary Crossentropy, optymalizator Adam, batch size 32 i 10 epok. Dane zostały podzielone 80/20 (trening/walidacja) przez ImageDataGenerator. Model osiąga około 94-95% accuracy na walidacji.' },
          { title: 'Struktura projektu', content: 'classifier.py trenuje model i zapisuje image_classifier_model.h5, accuracy_plot.png oraz loss_plot.png. predict.py klasyfikuje pojedynczy obraz, a predict_batch.py cały folder obrazów.' },
          { title: 'Podsumowanie i dalszy rozwój', content: 'Aplikacja osiągnęła wysoką skuteczność klasyfikacji. Kolejne kroki to testy bardziej zaawansowanych architektur (ResNet, EfficientNet), strojenie hiperparametrów i rozszerzenie zbioru danych.' }
        ]
      }
    }
  };

  function getCurrentLanguage() {
    var saved = localStorage.getItem(STORAGE_KEY);
    return (saved === 'pl' || saved === 'en') ? saved : defaultLang;
  }

  function t(key) {
    var lang = getCurrentLanguage();
    return (translations[lang] && translations[lang][key]) || translations.en[key] || key;
  }

  function applyTranslations(root) {
    var lang = getCurrentLanguage();
    document.documentElement.lang = lang;
    if (!root) root = document;

    var i18nNodes = root.querySelectorAll('[data-i18n]');
    i18nNodes.forEach(function(node) {
      var key = node.getAttribute('data-i18n');
      node.textContent = t(key);
    });

    var placeholders = root.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function(node) {
      var key = node.getAttribute('data-i18n-placeholder');
      node.setAttribute('placeholder', t(key));
    });

    var titleNode = root.querySelector('[data-i18n-title]');
    if (titleNode) {
      document.title = t(titleNode.getAttribute('data-i18n-title'));
    }

    root.querySelectorAll('[data-lang-switch]').forEach(function(btn) {
      btn.textContent = t('lang.toggle');
    });
  }

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function localizeProject(project, slug) {
    var lang = getCurrentLanguage();
    if (lang === 'en') return project;
    if (!projectLocalization[lang] || !projectLocalization[lang][slug]) return project;

    var localized = deepClone(project);
    var patch = projectLocalization[lang][slug];

    Object.keys(patch).forEach(function(key) {
      if (key === 'sections' && localized.sections && Array.isArray(patch.sections)) {
        patch.sections.forEach(function(sectionPatch, i) {
          if (!localized.sections[i]) return;
          Object.keys(sectionPatch).forEach(function(sectionKey) {
            localized.sections[i][sectionKey] = sectionPatch[sectionKey];
          });
        });
      } else if (key === 'demoInstructions' && localized.demoInstructions) {
        Object.keys(patch.demoInstructions).forEach(function(diKey) {
          localized.demoInstructions[diKey] = patch.demoInstructions[diKey];
        });
      } else {
        localized[key] = patch[key];
      }
    });

    return localized;
  }

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'pl') return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(document);
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
  }

  function toggleLanguage() {
    var next = getCurrentLanguage() === 'en' ? 'pl' : 'en';
    setLanguage(next);
  }

  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-lang-switch]');
    if (!btn) return;
    e.preventDefault();
    toggleLanguage();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      applyTranslations(document);
    });
  } else {
    applyTranslations(document);
  }

  window.I18N = {
    t: t,
    setLanguage: setLanguage,
    getLanguage: getCurrentLanguage,
    applyTranslations: applyTranslations,
    localizeProject: localizeProject
  };
})();
