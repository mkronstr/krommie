import { test, expect } from '@playwright/test';

const contactData = {
  firstName: 'Martin',
  lastName: 'Kronstrom',
  email: 'martinkronstrom44@gmail.com',
  message: 'Interested in motorsport, give me a ring.',
};

test('contact form can be filled and captured', async ({ page }) => {
  await page.goto('/contact-6');

  await page.getByRole('textbox', { name: 'First Name' }).fill(contactData.firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(contactData.lastName);
  await page.getByRole('textbox', { name: 'Email *' }).fill(contactData.email);
  await page.getByRole('textbox', { name: 'Message' }).fill(contactData.message);

  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue(contactData.firstName);
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(contactData.lastName);
  await expect(page.getByRole('textbox', { name: 'Email *' })).toHaveValue(contactData.email);
  await expect(page.getByRole('textbox', { name: 'Message' })).toHaveValue(contactData.message);

  await page.screenshot({
    path: 'test-artifacts/kronstrom-contact-filled.png',
    fullPage: true,
  });
});
