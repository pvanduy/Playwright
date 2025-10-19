import { test, expect } from '@playwright/test';

test('Handle Modal Dialog', async ({ page }) => {
  // Go to page (headless is default; can be set in config)
  await page.goto('https://demoqa.com/modal-dialogs', { waitUntil: 'domcontentloaded' });

  // Wait for and click "Show Small Modal" button
  const showSmallModal = page.locator('button:has-text("Small modal")');
  await showSmallModal.click();

  // Wait until the modal title is visible
  const modalTitle = page.getByText('Small Modal', { exact: true })

  // Assert that the modal title text is "Small Modal"
  await expect(modalTitle).toHaveText('Small Modal');

  // Close the modal
  const closeButton = page.locator("//button[text()='Close']");
  await closeButton.click();

  // Wait until the modal is not visible anymore
  await modalTitle.waitFor({ state: 'hidden' });
});
