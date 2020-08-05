/**
 * File: pesquisarSteps.js
 * Author: Gabriel Salla
 * Date: 04/08/2020
 */
const { Given, When, Then } = require('cucumber');


const HomePage = require('../../pages/web/homePage');
const ResultPage = require('../../pages/web/resultPage');
const ContextTest = require('../../stepDefinitions/contextTest');


const homePage = new HomePage();
const resultPage = new ResultPage();
const contextTest = new ContextTest();
const csv = "sectionContatoPage.csv";

Given(/^eu estou na tela de pesquisa do Google$/, () => {
    // Inicia o teste de Performance, informar o segundo parâmetro como performance, caso não seja um teste visual
    contextTest.setParametros('enable', '', '', '');
    homePage.open();
    contextTest.setParametros('enable', '', '', '');
});

When(/^eu digito os dados da pesquisa "([^"]*)"$/, (search) => {
    homePage.pesquisar(search);
});

Then(/^eu visualizo o resultado da pesquisa "([^"]*)"$/, (message) => {
    let result = resultPage.resultado();
    console.log(result);
    contextTest.setParametros('report','','', csv);
});