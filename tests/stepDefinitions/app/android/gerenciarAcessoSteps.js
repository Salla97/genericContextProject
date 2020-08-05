const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
const assert = require('chai').assert;
const LoginPage = require('../../../pages/app/loginPage');
const ListagemAtivosPage = require('../../../pages/app/listagemAtivosPage');

const loginPage = new LoginPage();
const listagemAtivosPage = new ListagemAtivosPage();

Given(/^eu digito corretamente as minhas informações de login "([^"]*)" "([^"]*)"$/, (suaEmpresa, senha) => {
    loginPage.clearCamposLogin();
    loginPage.islogoImgVisible();
    loginPage.informarDadosLogin(suaEmpresa, senha);
});

When(/^eu clico no botão entrar do app Trackbox$/, () => {
    loginPage.entrarClick();
});

Then(/^eu visualizo a lista de ativos$/, () => {
    listagemAtivosPage.isTitleVisible();
    assert.equal(listagemAtivosPage.nameTitleValue(), "Trackbox");
    listagemAtivosPage.pesquisarAtivos("Fernand");
    expect(listagemAtivosPage.resultadoPesquisaItemPrim()).to.not.contain("null");
    expect(listagemAtivosPage.resultadoPesquisaItemQuar()).to.contain("Fernandão");
});
