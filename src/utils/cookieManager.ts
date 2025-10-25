import fs from 'fs';
import { BrowserContext } from '@playwright/test';

export async function importCookies(context: BrowserContext, path: string) {
  if (!fs.existsSync(path)) return;
  const cookies = JSON.parse(fs.readFileSync(path, 'utf-8'));
  await context.addCookies(cookies);
}