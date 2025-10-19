import { test, expect } from '@playwright/test';

test('Handle Radio Button', async ({ page }) => {
    const yesLabel = page.locator('//label[@for="yesRadio"]');
    
    await test.step('Open demo page', async () => {
        await page.goto('https://demoqa.com/radio-button', { waitUntil: 'domcontentloaded' });
    }); 

    await test.step('Click on Yes radio button', async () => {
        await yesLabel.click();
    });

    await test.step('Verify that the input #yesRadio is checked', async () => {
        await expect(yesLabel).toBeChecked();
    });
  
});
