import { test, expect } from '@playwright/test';

test('Handle Web Table', async ({ page }) => {
    const tableData: string[][] = [];

    await test.step('Open demo page', async () => {
        await page.goto('https://demoqa.com/webtables', { waitUntil: 'domcontentloaded' });
    });

    await test.step('Get all rows in the web table', async () => {
        const rows = await page.locator('.rt-tr-group').all();
          for (const row of rows) {
            const rowText = await row.innerText();
            const columns = rowText.split('\n').map(col => col.trim());
            tableData.push(columns);
        }
    });

    console.table(tableData);

});
