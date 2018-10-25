const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false, slowMo: 30 });
        const page = await browser.newPage();

        await page.setViewport({ width: 1340, height: 1024 });

        await page.setDefaultNavigationTimeout(60 * 1000);

        await page.goto('https://github.com/', { waitUntil: 'load' });
        
        await page.type('.header-search-input', 'puppeteer', { delay: 3 });

        await page.waitFor(3 * 1000);

        await page.keyboard.press('Enter');

        await page.waitForNavigation();

        await page.focus('.repo-list-item a');

        await page.click('.repo-list-item a');

        await page.waitFor(3 * 1000);

        await browser.close();

    } catch (e) {
        console.error('DEU RUIM', e);
    }
})();