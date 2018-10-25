const { Given, When, Then } = require('cucumber');
const { assert } = require('chai');

Given('I am in the page from {string}', async function(url) {
    await this.page.goto(url, { waitUntil: 'load' });
});

When('I search by {string}', async function(value) {
    await this.page.type('#twotabsearchtextbox', value);
});

When('I press {string} button', async function (button) {
    await this.page.keyboard.press(button);
    await this.page.waitForNavigation();
});

When('Access the first link from results list', async function () {
    await this.page.click('.s-result-list span a');
    await this.page.waitForNavigation();
});

Then('I should be on the macbook page with this name {string}', async function(laptop) {
    const productTitle = await this.page.evaluate(() => {
        return document.querySelector('#productTitle').textContent.trim();
    });

    assert.deepStrictEqual(productTitle, laptop);
    
    await this.page.screenshot({ path: `assets/screenshot-laptop-${Date.now()}.png` });
});