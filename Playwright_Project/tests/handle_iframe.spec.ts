import { test, expect } from '@playwright/test';

test('Handle Iframe', async ({ page }) => {

    await test.step('Open demo page', async () => {
        await page.goto('https://demoqa.com/frames', { waitUntil: 'domcontentloaded' });
    });  

    await test.step('Wait for frame1 and switch to it', async () => {
        const frame1 = await page.frameLocator('#frame1');
        const heading1 = frame1.locator('#sampleHeading');

        await expect(heading1).toBeVisible();
        await expect(heading1).toHaveText('This is a sample page');
    }); 

    await test.step('Modify frame2 style via JavaScript', async () => {
        await page.evaluate(() => {
        const frame2 = document.getElementById('frame2') as HTMLIFrameElement;
            if (frame2) {
            frame2.style.height = '200px';
            frame2.style.width = '200px';
            }
        });
    });
  
    await test.step('Scroll frame2 into view and handle it', async () => {
        const frame2Element = page.locator('#frame2');
        await frame2Element.scrollIntoViewIfNeeded();

        const frame2 = await page.frameLocator('#frame2');
        const heading2 = frame2.locator('#sampleHeading');

        await expect(heading2).toBeVisible();
        await expect(heading2).toHaveText('This is a sample page');
    });

});


test('Handle Nested Iframe', async ({ page }) => {

    await test.step('Open browser and go to nested frame page', async () => {
        await page.goto('https://demoqa.com/nestedframes', { waitUntil: 'domcontentloaded' });
    }); 

    await test.step('Wait and verify text inside nested iframe', async () => {
        const parentFrame = await page.frameLocator('#frame1');
        const childFrameLocator = parentFrame.frameLocator('iframe[srcdoc="<p>Child Iframe</p>"]');
        const childText = childFrameLocator.locator('p');
        await expect(childText).toHaveText('Child Iframe');

    }); 

});
