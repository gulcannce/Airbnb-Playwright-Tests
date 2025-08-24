import { test, expect } from '@playwright/test';

test('Airbnb ana sayfası açılıyor mu', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await expect(page).toHaveTitle(/Airbnb/);
});


test('Airbnb sitesinde İstanbul için arama yap', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');

  // Arama kutusuna "İstanbul" yaz
  await page.getByPlaceholder('Search destinations').fill('İstanbul');

  // Otomatik tamamlama listesinden ilk sonucu seç
  await page.getByRole('option', { name: /İstanbul/i }).first().click();

  // Arama butonuna tıkla
  await page.getByRole('button', { name: /Search|Ara|Show places/i }).click();

  // Sonuç sayfasında "İstanbul" geçtiğini doğrula
  await expect(page).toHaveURL(/Istanbul|İstanbul/i);
});

test('Airbnb İstanbul, 15-16 Eylül, 1 kişi arama testi', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');

  // Arama kutusuna "İstanbul" yaz
  await page.getByPlaceholder('Search destinations').fill('İstanbul');
  await page.getByRole('option', { name: /İstanbul/i }).first().click();

  // Tarih seçiciye tıkla
  await page.getByLabel(/Check in|Giriş/i).click();

  // 15 Eylül ve 16 Eylül tarihlerini seç
  await page.getByRole('gridcell', { name: /15 Sep/ }).click();
  await page.getByRole('gridcell', { name: /16 Sep/ }).click();

  // Kişi sayısı seçiciye tıkla
  await page.getByRole('button', { name: /Who|Konuklar/i }).click();

  // (Varsayılan 1 kişi ise bu adım gerekmez, artırmak için aşağıdaki satırı kullanabilirsiniz)
  // await page.getByRole('button', { name: /Increase adults|Yetişkin sayısını artır/i }).click();

  // Arama butonuna tıkla
  await page.getByRole('button', { name: /Search|Ara|Show places/i }).click();

  // Sonuç sayfasında "İstanbul" ve tarihlerin geçtiğini doğrula
  await expect(page).toHaveURL(/Istanbul|İstanbul/i);
  await expect(page).toHaveURL(/2025-09-15/);
  await expect(page).toHaveURL(/2025-09-16/);
});

test('Airbnb sitesinde İstanbul için arama yap, 15-16 Eylül, 1 kişi', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');

  // Arama kutusuna "İstanbul" yaz
  await page.getByPlaceholder('Search destinations').fill('İstanbul');
  await page.getByRole('option', { name: /İstanbul/i }).first().click();

  // Tarih seçiciye tıkla ve 15-16 Eylül'ü seç
  await page.getByLabel(/Check in|Giriş/i).click();
  await page.getByRole('gridcell', { name: /15 Sep/ }).click();
  await page.getByRole('gridcell', { name: /16 Sep/ }).click();

  // Kişi sayısı seçiciye tıkla (gerekirse)
  await page.getByRole('button', { name: /Who|Konuklar/i }).click();

  // (Varsayılan 1 kişi ise bu adım gerekmez)
  // await page.getByRole('button', { name: /Increase adults|Yetişkin sayısını artır/i }).click();

  // Arama butonuna tıkla
  await page.getByRole('button', { name: /Search|Ara|Show places/i }).click();

  // Sonuç sayfasında "İstanbul" ve tarihlerin geçtiğini doğrula
  await expect(page).toHaveURL(/Istanbul|İstanbul/i);
  await expect(page).toHaveURL(/2025-09-15/);
  await expect(page).toHaveURL(/2025-09-16/);
});
