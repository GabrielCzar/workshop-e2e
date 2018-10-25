const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        
        await page.setDefaultNavigationTimeout(60 * 1000);

        await page.goto('https://sistemas.quixada.ufc.br/sippa/', { waitUntil: 'load' });

        await page.screenshot({ path: 'screenshot.pnga' });

        await browser.close();

    } catch (e) {
        console.error('DEU RUIM', e);
    }
})();