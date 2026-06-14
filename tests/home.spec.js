const { test } = require('@applitools/eyes-playwright/fixture');

test('homepage title', async ({ page, eyes }) => {
  await page.goto('http://localhost:3000');

  await eyes.check('homepage', {
    fully: true,
    matchLevel: 'Dynamic',
  });
});
