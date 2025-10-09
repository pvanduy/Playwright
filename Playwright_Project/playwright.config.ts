import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // 📁 Thư mục chứa test file
  fullyParallel: true, // 🚀 Chạy song song tất cả test
  retries: 0, // 🔁 Thử lại nếu fail (tùy chọn)
  workers: process.env.CI ? 2 : undefined, // ⚙️ Giới hạn worker khi chạy CI

  use: {
    baseURL: 'https://demoqa.com', // 🌐 URL mặc định cho test
    trace: 'on-first-retry', // 📊 Lưu trace khi test fail
    screenshot: 'only-on-failure', // 📸 Chụp ảnh khi fail
    video: 'retain-on-failure', // 🎥 Giữ video khi fail
    headless: true, // 👀 Chạy headless mặc định
  },

  reporter: [
    ['list'], // Hiện ra terminal
    ['html', { open: 'never' }], // Tạo HTML report
  ],

  projects: [
    // ----- 💻 DESKTOP BROWSERS -----
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },

    // // ----- 📱 MOBILE DEVICES -----
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    // ----- 🧭 BRANDED BROWSERS -----
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],
});
