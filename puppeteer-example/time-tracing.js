const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        
        await page.setDefaultNavigationTimeout(60 * 1000);

        await page.tracing.start({ path: 'trace.json' });

        await page.goto('https://github.com/googlechrome/puppeteer', { waitUntil: 'load' });

        await page.tracing.stop();
        
        await browser.close();

    } catch (e) {
        console.error('DEU RUIM', e);
    }
})();