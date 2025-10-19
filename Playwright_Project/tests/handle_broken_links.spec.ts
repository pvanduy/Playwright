import { test, expect, request } from '@playwright/test';

test('Handle Broken Links', async ({ page }) => {

    await test.step('Open browser and go to URL', async () => {
        await page.goto('https://demoqa.com/broken', { waitUntil: 'domcontentloaded' });
    });

    await test.step('Wait until "Click Here for Broken Link"', async () => {
        const brokenLink = page.locator('a:has-text("Click Here for Broken Link")');
        await brokenLink.waitFor({ state: 'visible' });
        await brokenLink.scrollIntoViewIfNeeded();
        await brokenLink.click();

    });
  
    await test.step('Assert that the response code equals 500', async () => {
        await page.waitForURL('**/status_codes/500');
        const apiContext = await request.newContext({
            baseURL: 'https://the-internet.herokuapp.com',
        });
        const response = await apiContext.get('/status_codes/500');
        expect(response.status()).toBe(500);
        await apiContext.dispose();

    });

});

