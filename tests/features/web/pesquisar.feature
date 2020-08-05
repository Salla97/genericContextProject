  
Feature: Pesquisar no Google

Scenario: Pesquisar no Google
    Given eu estou na tela de pesquisa do Google
    When eu digito os dados da pesquisa "Cucumber"
    Then eu visualizo o resultado da pesquisa "Cucumber: BDD Testing & Collaboration Tools for Teams"   