const { Given, When, Then } = require('cucumber')
const chai = require('chai')

Given('que estou na pagina de login', function () {
    // ir para login
    chai.assert.equal(1 + 1, 3);
});

When('eu digitar o email {string} com a senha {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});