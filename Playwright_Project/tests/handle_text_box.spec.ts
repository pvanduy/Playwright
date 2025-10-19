import { test, expect } from '@playwright/test';

test('Handle Text Box', async ({ page }) => {

    const userNameField = page.locator('#userName');
    const textValue = 'hello world';

    await test.step('Open demo page', async () => {
        await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });
    });

    await test.step('Input text into the username field', async () => {
        await userNameField.fill(textValue);
    });

    await test.step('Verify the text field value', async () => {
        await expect(userNameField).toHaveValue(textValue);
    });

});
