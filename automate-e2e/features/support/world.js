const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');

class CustomWorld {

    constructor({ attach, parameters }) {
        this.attach = attach;
        this.parameters = parameters;
    }

    async open() {
        this.driver = await puppeteer.launch({
            headless: true,
            slowMo: 0
        })

        this.page = await this.driver.newPage();

        // optional
        await this.page.setDefaultNavigationTimeout(60 * 1000);
        await this.page.setViewport({ width: 1320, height: 1024 });
    }

    async close() {
        await this.driver.close();
    }
}

setWorldConstructor(CustomWorld);