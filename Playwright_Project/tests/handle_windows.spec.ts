import { test, expect } from '@playwright/test';

test('Handle Windows', async ({ page, context }) => {
  // Open browser and go to the page
  await page.goto('https://demoqa.com/links', { waitUntil: 'domcontentloaded' });

  // Wait for the link to be visible
  const simpleLink = page.locator('#simpleLink');

  // Listen for the new tab (window)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    simpleLink.click(), // Click opens a new tab
  ]);

  // Wait for the new page to load
  await newPage.waitForLoadState('load');

  // Verify the URL
  await expect(newPage).toHaveURL('https://demoqa.com/');

  // Close the new tab
  await newPage.close();
});
