/**
* File: homePage.js
* Autor: Gabriel Salla
* Data: 04/08/2020
*/

class HomePage {
    // define os elementos
    get inputSearch() { return $('input[name="q"]'); }

    //Metodos dos elementos de ação
    pesquisar(search) {
        this.inputSearch.waitForDisplayed();
        this.inputSearch.setValue(search);
        browser.keys('Enter');
    }

    open() {
        browser.url('/');
    }
}

module.exports = HomePage;