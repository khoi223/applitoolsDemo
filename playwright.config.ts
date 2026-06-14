const { defineConfig } = require('@playwright/test');
const { EyesFixture } = require('@applitools/eyes-playwright/fixture');

module.exports = defineConfig({
  timeout: 300000,
  reporter: [
    ['html'],
    ['@applitools/eyes-playwright/reporter'],
  ],
  use: {
    baseURL: 'http://localhost:3000',
    eyesConfig: {
      apiKey: process.env.APPLITOOLS_API_KEY,
      serverUrl: process.env.APPLITOOLS_SERVER_URL,
    },
  }
});
