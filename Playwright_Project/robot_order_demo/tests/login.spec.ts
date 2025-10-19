import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

const VALID_USER = 'maria';
const VALID_PASS = 'thoushallnotpass';
const INVALID_PASS = 'wrongpass';

test.describe('Testing the login functionality', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close(); 
  });

  test('Positive Login @smoke @login', async () => {
    await loginPage.inputUsername(VALID_USER);
    await loginPage.inputPassword(VALID_PASS);
    await loginPage.clickLoginButton();
    await loginPage.verifyLoginSuccess();
    await loginPage.clickLogoutButton();
  });

  test('Negative Login @regression @login', async () => {
    await loginPage.inputUsername(VALID_USER);
    await loginPage.inputPassword(INVALID_PASS);
    await loginPage.clickLoginButton();
    await loginPage.verifyLoginFailed();
  });
});
