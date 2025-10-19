import { test, expect } from '@playwright/test';

test('Handle Auto Complete', async ({ page }) => {

    const inputMultiple = page.locator('#autoCompleteMultipleInput');
    const magentaOption = page.locator('text=Magenta');
    
    await test.step('Open browser and go to page', async () => {
        await page.goto('https://demoqa.com/auto-complete', { waitUntil: 'domcontentloaded' });
    });

    await test.step('Wait until input is visible and type "a"', async () => {
        
        await inputMultiple.waitFor({ state: 'visible' });
        await inputMultiple.fill('a');
    });
    
    await test.step('Wait for the suggestion "Magenta" to appear and Click on "Magenta"', async () => {
        
        await magentaOption.waitFor({ state: 'visible' });
        await magentaOption.click();
    });

    await test.step('Verify input contains "Magenta"', async () => {
        await expect(page.locator('#autoCompleteMultiple')).toContainText('Magenta');
    });

});
