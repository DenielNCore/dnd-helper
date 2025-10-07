# DnD Helper - Playwright Tests

Цей проект містить автоматизовані тести для DnD Helper Vue.js додатку, написані з використанням Playwright та JavaScript.

## Структура проекту

```
tests/
├── fixtures/
│   └── test-data.js              # Тестові дані та селектори
├── pages/
│   └── MainPage.js               # Page Object для головної сторінки
├── utils/
│   └── test-helpers.js           # Допоміжні функції для тестів
├── main-page.spec.js             # Тести головної сторінки
├── spells.spec.js                # Тести заклинань
├── skills.spec.js                # Тести навичок
└── integration.spec.js           # Інтеграційні тести
```

## Передумови

- Node.js 16+ 
- npm або yarn
- Vue.js додаток запущений локально

## Встановлення

1. **Встановіть залежності:**
   ```bash
   npm install
   # або
   yarn install
   ```

2. **Встановіть браузери Playwright:**
   ```bash
   npm run test:install
   # або
   yarn test:install
   ```

3. **Запустіть Vue.js додаток:**
   ```bash
   npm run dev
   # або
   yarn dev
   ```

## Запуск тестів

### Всі тести
```bash
npm test
# або
yarn test
```

### Конкретний тест файл
```bash
npx playwright test main-page.spec.js
npx playwright test spells.spec.js
npx playwright test skills.spec.js
npx playwright test integration.spec.js
```

### Різні режими запуску

**UI режим (з візуальним інтерфейсом):**
```bash
npm run test:ui
# або
yarn test:ui
```

**Debug режим:**
```bash
npm run test:debug
# або
yarn test:debug
```

**Headed режим (з візуалізацією браузера):**
```bash
npm run test:headed
# або
yarn test:headed
```

**Конкретний браузер:**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Паралельний запуск
```bash
npx playwright test --workers=4
```

## Конфігурація

### Основні налаштування (playwright.config.js)
```javascript
module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

### Змінні середовища
```bash
# Зміна URL
BASE_URL=https://your-app.com npx playwright test

# Зміна браузера
npx playwright test --project=firefox

# Headless режим
npx playwright test --headed=false
```

## Звіти

### HTML звіти
```bash
# Генерація звіту
npx playwright show-report

# Відкриття звіту
npm run test:report
```

### Screenshots
Скріншоти зберігаються в `test-results/` при падінні тестів.

### Відео
Відео записуються в `test-results/` (якщо увімкнено).

### JSON звіти
```bash
# Генерація JSON звіту
npx playwright test --reporter=json
```

## Структура тестів

### UI Тести
- **main-page.spec.js**: Тестування головної сторінки та навігації
- **spells.spec.js**: Тестування функціональності заклинань
- **skills.spec.js**: Тестування функціональності навичок

### Інтеграційні тести
- **integration.spec.js**: Тестування повного користувацького сценарію

## Page Object Pattern

Використовується Page Object Pattern для кращої підтримки тестів:

```javascript
export class MainPage {
  constructor(page) {
    this.page = page;
  }

  async openBurgerMenu() {
    await clickElement(this.page, selectors.burgerButton);
  }
}
```

## Додавання нових тестів

1. Створіть новий `.spec.js` файл в папці `tests/`
2. Додайте Page Object класи в папку `tests/pages/`
3. Використовуйте Jest/Playwright анотації для документації
4. Додайте тестові дані в `tests/fixtures/test-data.js`

## Troubleshooting

### Проблеми з браузерами
```bash
# Перевстановлення браузерів
npx playwright install --force
```

### Проблеми з таймаутами
Збільшіть значення `timeout` в `playwright.config.js`

### Проблеми з селекторами
Використовуйте Playwright Inspector для відлагодження:
```bash
npx playwright test --debug
```

## CI/CD

### GitHub Actions
```yaml
- name: Run Playwright tests
  run: npm test
```

### Jenkins
```groovy
stage('Test') {
    steps {
        sh 'npm test'
    }
    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'test-results',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}
```
