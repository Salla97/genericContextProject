const { Given, When, Then } = require('cucumber');

const expect = require('chai').expect;
const assert = require('chai').assert;
const LoginPage = require('../../../pages/app/loginPage');
const ListagemAtivosPage = require('../../../pages/app/listagemAtivosPage');

const loginPage = new LoginPage();
const listagemAtivosPage = new ListagemAtivosPage();

Given(/^eu digito corretamente as minhas informações de login "([^"]*)" "([^"]*)"$/, (suaEmpresa, senha) => {
    loginPage.islogoImgVisibleiOS();
    loginPage.informarDadosLoginiOS(suaEmpresa, senha);
    expect(loginPage.islogoImgVisibleiOS()).to.equal(true);
});

When(/^eu clico no botão entrar do app Trackbox$/, () => {
    loginPage.entrarClickiOS();
});

Then(/^eu visualizo a lista de ativos$/, () => {
    // Not implementing
});
