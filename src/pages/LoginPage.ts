import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(email: string, password: string) {
    await this.page.fill('//input[@placeholder="Username"]', email);
    await this.page.fill('//input[@placeholder="Password"]', password);
    await this.page.click('//input[@id="login-button"]');
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.locator('text=Products')).toBeVisible();
  }
}