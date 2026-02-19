import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  workers: 2,

  reporter: [['html', { outputFolder: 'playwright-report' }]],

  use: {
    baseURL: 'https://front.serverest.dev',
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } }
  ]
});
