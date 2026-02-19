import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login inválido com POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('fulano@qa.com', 'teste');

  // await expect(await loginPage.getErrorMessage()).toBeVisible();
});
