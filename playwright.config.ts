import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
require('dotenv').config()
//dotenv.config();

export default defineConfig({
  testDir: './src/tests',
  timeout: 60_000,
  expect: { timeout: 5000 },
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'test-results/html-report', open: 'never' }],
    ['allure-playwright']
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: 'test-results/storageState.json'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } }
  ],
  globalSetup: require.resolve('./src/fixtures/global-setup'),
  globalTeardown: require.resolve('./src/fixtures/global-teardown')
});