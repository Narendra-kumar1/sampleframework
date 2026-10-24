
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('1. Before All: Runs once before all tests');
});

test.beforeEach(async ({ page }) => {
  console.log('2. Before Each: Runs before every test');
  await page.goto('https://www.saucedemo.com/');
});

test.afterEach(async ({ page }) => {
  console.log('3. After Each: Runs after every test');
});

test.afterAll(async () => {
  console.log('4. After All: Runs once after all tests');
});

test('Verify login page title',{tag:["@Smoke","@regression"]}, async ({ page }) => {
    console.log("test1")
  await expect(page).toHaveTitle('Swag Labs');
});

test('Verify login button visibility @regression', async ({ page }) => {
    console.log("test2")
  await expect(page.locator('#login-button')).toBeVisible();
});
