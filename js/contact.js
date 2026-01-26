/**
 * Contact Form Handler
 * 
 * Handles form submission and email sending directly from the website
 * 
 * Сейчас используется FormSubmit (работает сразу, без настройки)
 * Когда настроите EmailJS, можно переключиться на него
 */

// EmailJS Configuration (для будущего использования)
// ⚠️ Заполните эти данные, когда закончите настройку EmailJS:
const EMAILJS_CONFIG = {
  PUBLIC_KEY: '--GAepCjQRxU4c_Rm',      // Из Account → General
  SERVICE_ID: 'service_wo08mht',      // Из Email Services
  TEMPLATE_ID: 'template_nh8nk3l',     // Из Email Templates (ваш шаблон "Contact Us")
  TO_EMAIL: 'zarbalievarif10@gmail.com'
};

// FormSubmit Configuration (работает сейчас)
const FORM_CONFIG = {
  TO_EMAIL: 'zarbalievarif10@gmail.com',
  FORM_ENDPOINT: 'https://formsubmit.co/ajax/zarbalievarif10@gmail.com'
};

// Переключение между сервисами
const USE_EMAILJS = true; // EmailJS настроен и включен

// Initialize form when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  const submitBtn = form?.querySelector('.form__submit');
  const submitText = submitBtn?.querySelector('.submit__text');
  const submitLoading = submitBtn?.querySelector('.submit__loading');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate
    if (!email || !message) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }
    
    // Show loading state
    setLoadingState(true);
    hideMessage();
    
    try {
      if (USE_EMAILJS && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        // Send via EmailJS (когда настроите)
        if (typeof emailjs === 'undefined') {
          throw new Error('EmailJS library not loaded');
        }
        
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        
        const templateParams = {
          name: email.split('@')[0], // Используем часть email до @ как имя
          email: email,
          message: message,
          from_email: email,
          to_email: EMAILJS_CONFIG.TO_EMAIL
        };
        
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams
        );
        
        showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        
      } else {
        // Send via FormSubmit (работает сейчас)
        const response = await fetch(FORM_CONFIG.FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: email,
            email: email,
            message: message,
            _subject: `Contact from Portfolio - ${email}`,
            _captcha: false
          })
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
          showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
          form.reset();
        } else {
          throw new Error(data.message || 'Failed to send message');
        }
      }
      
    } catch (error) {
      console.error('Form Error:', error);
      showMessage('Failed to send message. Please try again later.', 'error');
    } finally {
      setLoadingState(false);
    }
  });
  
  function setLoadingState(loading) {
    if (!submitBtn || !submitText || !submitLoading) return;
    
    if (loading) {
      submitBtn.disabled = true;
      submitText.style.display = 'none';
      submitLoading.style.display = 'inline';
    } else {
      submitBtn.disabled = false;
      submitText.style.display = 'inline';
      submitLoading.style.display = 'none';
    }
  }
  
  function showMessage(text, type) {
    if (!formMessage) return;
    
    formMessage.textContent = text;
    formMessage.className = `form__message form__message--${type}`;
    formMessage.style.display = 'block';
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        hideMessage();
      }, 5000);
    }
  }
  
  function hideMessage() {
    if (formMessage) {
      formMessage.style.display = 'none';
    }
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

