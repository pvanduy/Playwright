import { test } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import { readCsv } from '../utils/csv.reader';
import { OrderPage } from '../pages/order.page';

const __dirname = path.dirname(__filename);
const CSV_FILE = path.join(__dirname, '../test-data/orders.csv');

test.describe('Order Multiple Robots', () => {
  test('Orders Robot from CSV', async ({ page }) => {
    test.setTimeout(40000);
    const orderPage = new OrderPage(page);
    const data = readCsv(CSV_FILE) as Array<{head: string; body: string; legs: string; address: string }>;

    await test.step(`Open Browser`, async () => {
        await orderPage.open();
    });
    
    for (const row of data) {
        await test.step(`Order Robot Address: ${row.address}`, async () => {
            const { head, body, legs, address } = row;
            await orderPage.orderRobot(head, body, legs, address);
        });
    }
  });
});
