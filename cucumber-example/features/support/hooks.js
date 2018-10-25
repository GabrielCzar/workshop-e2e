const { Before, After } = require('cucumber');

Before(function () {
    console.log('Executando before');
});

After(function () {
    console.log('Executando after');
});