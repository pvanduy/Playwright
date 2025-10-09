import { test, expect } from '@playwright/test';

test('Handle Alerts', async ({ page }) => {

    await test.step('Open demo page', async () => {
        await page.goto('https://demoqa.com/alerts', { waitUntil: 'domcontentloaded' });
    });

    await test.step('Click alert button and accept alert', async () => {
        page.once('dialog', async (dialog) => await dialog.accept());
        await page.click('#alertButton');
    });


    await test.step('Click timer alert and accept', async () => {
        const [dialog] = await Promise.all([
            page.waitForEvent('dialog'),  // stable, chờ alert xuất hiện
            page.click('#timerAlertButton'), // click button
        ]);
        await dialog.accept();
    });

    await test.step('Handle prompt alert with input', async () => {
        page.once('dialog', async (dialog) => await dialog.accept('helloworld'));
        await page.click('#promtButton');
    });

});
