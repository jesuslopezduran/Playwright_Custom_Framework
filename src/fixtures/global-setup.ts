import { chromium, FullConfig } from '@playwright/test';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(`${process.env.BASE_URL}`);
  await page.fill('//input[@placeholder="Username"]', process.env.E2E_USER || '');
  await page.fill('//input[@placeholder="Password"]', process.env.E2E_PASS || '');
  await page.click('//input[@id="login-button"]');
  await page.waitForURL('**/inventory.html');

  const storage = 'test-results/storageState.json';
  fs.mkdirSync('test-results', { recursive: true });
  await context.storageState({ path: storage });

  await browser.close();
}

export default globalSetup;