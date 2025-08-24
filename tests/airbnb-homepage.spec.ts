import { test, expect } from '@playwright/test';

test('Airbnb ana sayfası açılıyor mu', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await expect(page).toHaveTitle(/Airbnb/);
});