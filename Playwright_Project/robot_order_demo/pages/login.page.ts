import { Page, expect, test } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput;
  readonly passwordInput;
  readonly loginButton;
  readonly logoutButton;
  readonly successMessage;
  readonly errorMessage;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('//button[text()="Log in"]');
    this.logoutButton = page.locator('#logout');
    this.successMessage = page.locator('#welcome');
    this.errorMessage = page.locator('//div[text()="Invalid username or password."]');
  }

  async openLoginPage() {
    await test.step('Open login page', async () => {
      await this.page.goto('https://robotsparebinindustries.com/');
    });
  }

  async inputUsername(username: string) {
    await test.step(`Input username: ${username}`, async () => {
      await this.usernameInput.fill(username);
    });
  }

  async inputPassword(password: string) {
    await test.step('Input password', async () => {
      await this.passwordInput.fill(password);
    });
  }

  async clickLoginButton() {
    await test.step('Click login button', async () => {
      await this.loginButton.click();
    });
  }

  async verifyLoginSuccess() {
    await test.step('Verify login success', async () => {
      await expect(this.logoutButton).toBeVisible();
    });
  }

  async verifyLoginFailed() {
    await test.step('Verify login failed', async () => {
      await expect(this.errorMessage).toBeVisible();
    });
  }

  async clickLogoutButton() {
    await test.step('Click logout button', async () => {
      await this.logoutButton.click();
    });
  }
}
