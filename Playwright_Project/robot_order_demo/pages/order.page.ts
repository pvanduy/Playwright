import { Page, expect, test } from '@playwright/test';

export class OrderPage {
    readonly page: Page;
    readonly popup_ok_button;
    readonly form_head;
    readonly form_legs;
    readonly form_address;
    readonly preview_button;
    readonly preview_image;
    readonly image_head;
    readonly image_body;
    readonly image_legs;
    readonly order_button;
    readonly alert_order_failed;
    readonly order_other;



    constructor(page: Page) {
        this.page = page;
        this.popup_ok_button = page.locator('//button[text()="OK"]');
        this.form_head = page.locator('#head');
        this.form_legs = page.locator('//input[@placeholder="Enter the part number for the legs"]');
        this.form_address = page.locator('//input[@placeholder="Shipping address"]');
        this.preview_button = page.locator('//button[@id="preview"]');
        this.preview_image = page.locator('//div[@id="robot-preview-image"]');
        this.image_head = page.locator('//img[@alt="Head"]');
        this.image_body = page.locator('//img[@alt="Body"]');
        this.image_legs = page.locator('//img[@alt="Legs"]');
        this.order_button = page.locator('//button[@id="order"]');
        this.alert_order_failed = page.locator('//div[@class="alert alert-danger"]');
        this.order_other = page.locator('//button[@id="order-another"]');

    }

  async selectBody(body: string) {
    this.page.locator(`#id-body-${body}`);
    await this.page.locator(`#id-body-${body}`).click();
  }

  async open() {
    await this.page.goto('https://robotsparebinindustries.com/#/robot-order', { waitUntil: 'domcontentloaded' });
  }

  async orderRobot(head: string, body: string, legs: string, address: string) {

    await test.step(`Handle popup`, async () => {
        await this.popup_ok_button.waitFor();
        await this.popup_ok_button.click();
    });


    await test.step(`Fill form`, async () => {
      await this.form_head.selectOption({ index: Number(head) });
      await this.selectBody(body);
      await this.form_legs.fill(legs)
      await this.form_address.fill(address)
    });


    await test.step(`Preview and validate images visible`, async () => {
      await this.preview_button.click();
      await this.preview_image.waitFor({ state: 'visible' });
      await expect(this.image_head).toBeVisible();
      await expect(this.image_body).toBeVisible();
      await expect(this.image_legs).toBeVisible();
    });


    await test.step(`Screenshot preview`, async () => {
      await this.preview_image.screenshot({
        path: `screenshots/robot-preview-${address}.png`,
      });
    });


    await test.step(`Retry order if error`, async () => {
      while (true) {
        await this.order_button.click();
        try {
          await this.alert_order_failed.waitFor({ timeout: 3000 });
        } catch {
          break;
        }
      }
    });


    await test.step(`Wait for success`, async () => {
      await this.order_other.click();
    });
    

  }
}
