import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Flow', () => {
  test('User can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.E2E_USER!, process.env.E2E_PASS!);
    await loginPage.assertLoginSuccess();
  });
});