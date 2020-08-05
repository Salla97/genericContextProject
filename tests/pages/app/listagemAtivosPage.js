const chai = require('chai').should();

class ListagemAtivosPage  {
    /**
    * define elements
    */
    get tituloLbl() {
        const selector = 'new UiSelector().text("Trackbox")';
        const tituloLbl = $(`android=${selector}`);
        return tituloLbl;
    }

    get nomeEmpresaLbl() {
        const selector = 'new UiSelector().className("android.widget.TextView").index(2)';
        const nomeEmpresaLbl = $(`android=${selector}`);
        return nomeEmpresaLbl;
    }

    get pesquisarTxt() {
        const selector = 'new UiSelector().text("Pesquisar...")';
        const pesquisarTxt = $(`android=${selector}`);
        return pesquisarTxt;
    }

    get itemPrimeiroLbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]'); }

    get itemQuartoLbl() {
        const selector = 'new UiSelector().text("Fernandão")';
        const itemQuartoLbl = $(`android=${selector}`);
        return itemQuartoLbl;
    }
    /**
     * define or overwrite page methods
     */
    isTitleVisible() {
        this.tituloLbl.waitForDisplayed();
        let result = this.tituloLbl.isDisplayed();
        return result;
    }

    nameTitleValue() {
        this.tituloLbl.waitForDisplayed();
        let nomeTitle = this.tituloLbl.getText();
        return nomeTitle;
    }

    pesquisarAtivos(ativo) {
        this.pesquisarTxt.waitForDisplayed();
        this.pesquisarTxt.setValue(ativo);
        browser.pause(2000);
    }

    resultadoPesquisaItemPrim() {
        this.itemPrimeiroLbl.waitForDisplayed();
        let result = this.itemPrimeiroLbl.getText();
        return result;
    }

    resultadoPesquisaItemQuar() {
        this.itemQuartoLbl.waitForDisplayed();
        let result = this.itemQuartoLbl.getText();
        return result;
    }

}

module.exports = ListagemAtivosPage;