import {test,expect} from '@playwright/test'
test('testalert', async ({ page }) => {
  await page.goto('/practice');
  await page.getByRole('link', { name: 'Start practising' }).click();

  // Alert
  page.once('dialog', async dialog => {
        console.log('Alert Message:', dialog.message());
    await dialog.accept();
  });

  await page.getByTestId('alert-btn').click();
  await expect(page.getByTestId('alert-result'))
    .toHaveText('Alert was shown and dismissed');
    

  // Confirm Accept
  page.once('dialog', async dialog => {
    console.log('Alert Message:', dialog.message());
    await dialog.accept();
  });

  await page.getByTestId('confirm-btn').click();

  await expect(page.getByTestId('alert-result'))
    .toHaveText('Confirm result: OK');

  // Confirm Dismiss
  page.once('dialog', async dialog => {
    console.log('Alert Message:', dialog.message());
    await dialog.dismiss();
  });

  await page.getByTestId('confirm-btn').click();

  await expect(page.getByTestId('alert-result'))
    .toHaveText('Confirm result: Cancel');

  // Prompt
  page.once('dialog', async dialog => {
        console.log('Alert Message:', dialog.message());
    await dialog.accept('test');
  });

  await page.getByTestId('prompt-btn').click();

  await expect(page.getByText('Prompt value: test'))
    .toBeVisible();
});