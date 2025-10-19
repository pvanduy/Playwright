import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Handle Upload and Download', async ({ page }) => {
  // Set download path
  const downloadPath = path.resolve(__dirname, 'downloads');
  fs.mkdirSync(downloadPath, { recursive: true });


  // Go to the page
  await page.goto('https://demoqa.com/upload-download', { waitUntil: 'domcontentloaded' });

  // Upload file
  const filePath = path.resolve(__dirname, 'uploads\\example.xlsx'); // same as ${EXECDIR}${/}example.xlsx
  await page.setInputFiles('#uploadFile', filePath);

  // Handle file download
  const [download] = await Promise.all([
    page.waitForEvent('download'), // wait for the download to start
    page.click('#downloadButton'), // trigger download
  ]);

  // Save the downloaded file to our custom path
  const downloadFilePath = path.join(downloadPath, await download.suggestedFilename());
  await download.saveAs(downloadFilePath);

  // Verify file exists
  expect(fs.existsSync(downloadFilePath)).toBeTruthy();

});
