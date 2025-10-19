import { test, expect } from '@playwright/test';

test('Handle Button', async ({ page }) => {
  // Open browser and navigate to the page
  await page.goto('https://demoqa.com/buttons', { waitUntil: 'domcontentloaded' });

  // Wait for the "Double Click Me" button
  const doubleClickBtn = page.locator('//button[text()="Double Click Me"]');

  // Double-click the button
  await doubleClickBtn.dblclick();

  // Right-click the button
  const rightClickBtn = page.locator('//button[text()="Right Click Me"]');
  await rightClickBtn.click({ button: 'right' });

  // Single-click the "Click Me" button
  const clickMeBtn = page.locator('//button[text()="Click Me"]');
  await clickMeBtn.click();

});
