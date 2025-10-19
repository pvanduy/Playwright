import { test, expect } from '@playwright/test';

test('Handle Check Box', async ({ page }) => {

    const checkbox = page.locator('label:has-text("Home")');


    await test.step('Go to the checkbox page', async () => {
        await page.goto('https://demoqa.com/checkbox', { waitUntil: 'domcontentloaded' });
    });

    await test.step('Wait and click for the checkbox', async () => {
        await checkbox.waitFor({ state: 'visible', timeout: 10000 });
        await checkbox.check();
    });

  
    await test.step('Verify the checkbox is selected', async () => {
        expect(await checkbox.isChecked()).toBeTruthy();
    });

});
