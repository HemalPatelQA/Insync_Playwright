// playwright.config.js
const { defineConfig } = require('@playwright/test');
const env = require('./env.config');

module.exports = defineConfig({
//retries : 1, // retry once for failure test cases
workers: 1,
reporter: [
  ['list'],
  ['allure-playwright', { outputFolder: 'allure-results' }]
],
    testDir: './tests',
    timeout: 120000,
    projects: [
        {
            name: 'Login',
            testMatch: 'Login.spec.js'
        },
        {
            name: 'Dashboard',
            testMatch: 'Dashboard.spec.js'
        }
    ],
 
    use: {
        baseURL: env.BASE_URL, 
        browserName: 'chromium',  // Chrome/Chromium
        headless: false,           // to show UI
        //viewport: { width: 1280, height: 720 },
        //retries : 1, // retry once for failure test cases
        viewport: null,  //for full browser window
        launchOptions: {
        args: ['--start-maximized']
        },
        slowMo: 50,                 // to slow steps
        screenshot : 'on',
        //screenshot : 'only-on-failure',
        video : 'on',
        //video : 'only-on-failure'
        trace : "on",
   
    },
});