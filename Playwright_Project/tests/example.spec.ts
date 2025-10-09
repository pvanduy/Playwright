import { test, expect } from '@playwright/test';

test('Open Google', async ({ page }) => {

    await test.step('Open browser and go to URL', async () => {
        await page.goto('https://www.google.com');
    });

    await test.step('Verify the page contains "Google"', async () => {
    await expect(page).toHaveTitle(/Google/);

    });

});
