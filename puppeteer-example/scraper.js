const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        
        await page.setDefaultNavigationTimeout(60 * 1000);

        await page.goto('https://github.com/googlechrome/puppeteer', { waitUntil: 'load' });

        const faq = await page.evaluate(() => {
            const allnodes = document.querySelectorAll('h4');
            return [...allnodes]
                .filter(node => node.className === "")
                .map(el => { return {question: el.textContent, answer: el.nextElementSibling.textContent} })
        });

        console.log(faq);

        await browser.close();

    } catch (e) {
        console.error('DEU RUIM', e);
    }
})();