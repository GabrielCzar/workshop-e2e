const { Before, After, setDefaultTimeout } = require('cucumber');

setDefaultTimeout(60 * 1000);

Before(async function () {
    await this.open();
});

After(async function () {
    await this.close();
});
