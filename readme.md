# 🎭 Learn Playwright (JavaScript / TypeScript)

This repository documents my journey of learning Playwright — a modern end-to-end testing framework by Microsoft that enables fast, reliable browser automation for Chromium, Firefox, and WebKit.

---

## 📚 Table of Contents
- [Introduction](#-introduction)
- [Key Features](#-key-features)
- [Installation](#%EF%B8%8F-installation)
- [Getting Started](#-getting-started)
- [Example Test Case](#-example-test-case)
- [Libraries and Resources](#-libraries-and-resources)
- [Playwright Browser Launch Arguments](#%EF%B8%8F-playwright-browser-launch-arguments)
  
---

## 🌟 Introduction

Playwright is a powerful end-to-end testing framework by Microsoft that enables fast, reliable, and cross-browser automation.
This repository is created to learn and practice Playwright using JavaScript/TypeScript for real-world test automation.

---

## 🔑 Key Features
| Feature                        | Description                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| 🌍 **Cross-browser testing**   | Run tests in Chromium, Firefox, and WebKit with a single API                    |
| 💻 **Multi-language support**  | Supports JavaScript, TypeScript, Python, .NET, and Java                         |
| 🧭 **Powerful locators**       | Provides robust element selection via CSS, XPath, text, and role-based locators |
| 🧪 **Playwright Test Runner**  | Built-in test framework with parallel execution and automatic retries           |
| 🧩 **Page Object Model (POM)** | Supports clean test architecture using reusable components                      |
| 📸 **Visual debugging tools**  | Includes Playwright Inspector, Trace Viewer, and video recording                |
| 🔁 **API testing**             | Enables API calls and assertions within the same test                           |
| ⚙️ **CI/CD Integration**       | Works seamlessly with GitHub Actions, Jenkins, and other CI tools               |
| 🚀 **Headless mode**           | Run tests faster without opening the browser UI                                 |
| 🔒 **Auto-waiting mechanism**  | Smart waits for elements to be ready before performing actions                  |

| Concept            | Description                                  |
| ------------------ | -------------------------------------------- |
| **Locator**        | A powerful selector engine to find elements  |
| **Fixture**        | Provides setup and teardown for tests        |
| **Trace Viewer**   | Allows you to replay and debug test runs     |
| **Test Generator** | Records user actions into Playwright scripts |

---

## 🛠️ Installation
   ```bash
   # 1️⃣ Ensure Node.js(version 16+) and npm or yarn are installed:
   node -v
   npm -v

   # 2️⃣ Create a new project folder
   mkdir learn-playwright
   cd learn-playwright

   # 3️⃣ Initialize Node.js project
   npm init -y

   # 4️⃣ Install Playwright
   npm install -D @playwright/test

   # 5️⃣ Install browsers (Playwright can automatically download Chromium, Firefox, and WebKit)
   npx playwright install

   # 6️⃣ Verify installation

   # ✅ Check Playwright version:
    npx playwright --version
    Version 1.48.2

   # ✅ Run the default example test:
   npx playwright test

   # ✅ If everything is set up correctly, you’ll see:
   Running 1 test using 1 worker
   ✔  example.spec.ts:3:1 › basic test (2s)
   ```


## 🚀 Getting Started
1️⃣ Project Structure
   ```plaintext
   learn-playwright/
  │
  ├── tests/
  │   └── example.spec.ts
  │
  ├── playwright.config.ts
  ├── package.json
  └── README.md
   ```

2️⃣ Write your first test case:

   ```typescript
import { test, expect } from '@playwright/test';

test('Open Google', async ({ page }) => {
  // Open browser and go to URL
  await page.goto('https://www.google.com');

  // Verify the page contains "Google"
  await expect(page).toHaveTitle(/Google/);

  // Browser will automatically close after the test
});

   ```
3️⃣ Run the test:
   ```bash
   npx playwright test

   # ✅ Running 1 test using 1 worker
   ✔  tests/example.spec.ts:3:1 › has title (2s)
   ```

4️⃣ View the report:
   ```bash
   # After running, you can open the test report showing test results, duration, and logs.
   npx playwright show-report
   ```

5️⃣ (Optional) Debug the test:
   ```bash
   # If you want to see the browser while running:
   npx playwright test --headed

   # Or open Playwright Inspector for debugging:
   npx playwright test --debug
   ```

## 🧪 Example Test Case
Here's an example of a simple login test:
```typescript
import { test, expect } from '@playwright/test';

// Define test data (equivalent to Robot Framework variables)
const URL = 'https://example.com';
const USERNAME = 'user';
const PASSWORD = 'pass123';

test('Login Test', async ({ page }) => {
  // Open browser and go to URL
  await page.goto(URL);

  // Input username and password
  await page.fill('#username', USERNAME);
  await page.fill('#password', PASSWORD);

  // Click the login button
  await page.click('#login');

  // Verify the page contains "Welcome"
  await expect(page.locator('body')).toContainText('Welcome');

  // Browser will close automatically after test
});

```

## 📦 Libraries and Resources

- [Playwright Official Docs](https://playwright.dev/)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright/)
- [Playwright YouTube Channel](https://www.youtube.com/@Playwrightdev/)

## ⚙️ Playwright Browser Launch Arguments
| Launch Argument                     | Description                               | Example Usage                           |
| ----------------------------------- | ----------------------------------------- | --------------------------------------- |
| `headless: true`                    | Runs browser in headless (invisible) mode | `{ headless: true }`                    |
| `args: ['--disable-gpu']`           | Disables GPU hardware acceleration        | `{ args: ['--disable-gpu'] }`           |
| `args: ['--window-size=1920,1080']` | Sets browser window size                  | `{ args: ['--window-size=1920,1080'] }` |
| `args: ['--no-sandbox']`            | Disables sandbox (needed in CI/Docker)    | `{ args: ['--no-sandbox'] }`            |
| `args: ['--disable-dev-shm-usage']` | Avoids shared memory issues in containers | `{ args: ['--disable-dev-shm-usage'] }` |
| `args: ['--incognito']`             | Opens browser in incognito mode           | `{ args: ['--incognito'] }`             |
| `args: ['--start-maximized']`       | Starts browser maximized                  | `{ args: ['--start-maximized'] }`       |
| `args: ['--disable-extensions']`    | Disables extensions                       | `{ args: ['--disable-extensions'] }`    |
| `ignoreHTTPSErrors: true`           | Ignores SSL certificate errors            | `{ ignoreHTTPSErrors: true }`           |

### 💻 Example Configuration (playwright.config.ts)
```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    launchOptions: {
      args: [
        '--no-sandbox',
        '--disable-gpu',
        '--window-size=1920,1080',
        '--disable-dev-shm-usage',
      ],
    },
  },
});

```
