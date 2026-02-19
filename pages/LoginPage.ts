import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.getByRole('button', { name: 'Entrar' }).click();
  }

  async getErrorMessage() {
    return this.page.getByText('Email deve ser um email válido');
  }
}
