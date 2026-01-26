# EmailJS Setup Instructions

## Как настроить отправку писем через форму на сайте

### Шаг 1: Регистрация на EmailJS

1. Перейдите на https://www.emailjs.com/
2. Нажмите "Sign Up" и создайте бесплатный аккаунт
3. Подтвердите email (если требуется)

### Шаг 2: Подключение Email сервиса

1. В панели управления EmailJS перейдите в **Email Services**
2. Нажмите **Add New Service**
3. Выберите ваш email провайдер (Gmail, Outlook, и т.д.)
4. Следуйте инструкциям для подключения:
   - Для Gmail: войдите в свой аккаунт и разрешите доступ
   - Запишите **Service ID** (например: `service_xxxxx`)

### Шаг 3: Создание Email шаблона

1. Перейдите в **Email Templates**
2. Нажмите **Create New Template**
3. Настройте шаблон:
   - **To Email**: `zarbalievarif10@gmail.com` (ваш email)
   - **From Name**: `{{from_name}}` (опционально)
   - **Subject**: `Contact from Portfolio: {{from_email}}`
   - **Content** (тело письма):
     ```
     From: {{from_email}}
     
     Message:
     {{message}}
     ```
4. Сохраните шаблон и запишите **Template ID** (например: `template_xxxxx`)

### Шаг 4: Получение Public Key

1. Перейдите в **Account** → **General**
2. Найдите **Public Key** (например: `xxxxxxxxxxxxx`)
3. Скопируйте его

### Шаг 5: Настройка в коде

1. Откройте файл `js/contact.js`
2. Найдите секцию `EMAILJS_CONFIG` (около строки 18)
3. Замените значения:

```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'ваш_public_key',      // Из Account → General
  SERVICE_ID: 'ваш_service_id',      // Из Email Services
  TEMPLATE_ID: 'ваш_template_id',    // Из Email Templates
  TO_EMAIL: 'zarbalievarif10@gmail.com'
};
```

### Шаг 6: Тестирование

1. Сохраните файл `js/contact.js`
2. Откройте сайт в браузере
3. Перейдите в секцию Contact
4. Заполните форму и отправьте тестовое сообщение
5. Проверьте ваш email `zarbalievarif10@gmail.com`

### Важные переменные в шаблоне

В шаблоне EmailJS используйте эти переменные:
- `{{from_email}}` - email отправителя
- `{{message}}` - текст сообщения
- `{{to_email}}` - ваш email (опционально)

### Альтернатива (если EmailJS не работает)

Если EmailJS не настроен, форма автоматически откроет почтовый клиент с предзаполненным письмом. Это работает как запасной вариант.

### Лимиты бесплатного плана EmailJS

- 200 писем в месяц
- Достаточно для личного портфолио

### Безопасность

⚠️ **Важно**: Public Key виден в коде, но это нормально для EmailJS. 
Они используют его для аутентификации, а не для защиты данных.

---

**Готово!** Теперь форма на вашем сайте будет отправлять письма на `zarbalievarif10@gmail.com`

