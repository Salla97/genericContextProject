
class LoginPage {

    get logoImg() {
        const selector = 'new UiSelector().className("android.widget.ImageView").index(1)';
        const logoImg = $(`android=${selector}`);
        return logoImg;
    }
    get usuarioApagarTxt() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText'); }

    get usuarioTxt() {
        const selector = 'new UiSelector().text("Usuário")';
        const usuarioTxt = $(`android=${selector}`);
        return usuarioTxt;
    }
    get senhaApagarTxt() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText'); }

    get senhaTxt() {
        const selector = 'new UiSelector().text("Senha")';
        const senhaTxt = $(`android=${selector}`);
        return senhaTxt;
    }
    get visualizarBtn() {
        const selector = 'new UiSelector().className("android.widget.ImageView).index(0)';
        const visualizarBtn = $(`android=${selector}`);
        return visualizarBtn;
    }
    get entrarBtn() {
        const selector = 'new UiSelector().className("android.view.ViewGroup").index(4)';
        const entrarBtn = $(`android=${selector}`);
        return entrarBtn;
    }
    get tituloMsgValidacao() {
        const selector = 'new UiSelector().resourceId("net.qa.mobile.treinamento.homolog:id/tv_title")';
        const tituloMsgValidacao = $(`android=${selector}`);
        return tituloMsgValidacao;
    }
    get msgValidacao() {
        const selector = 'new UiSelector().resourceId("net.qa.mobile.treinamento.homolog:id/tv_message")';
        const tituloMsgValidacao = $(`android=${selector}`);
        return tituloMsgValidacao;
    }
    /**
     * define elements iOS
     */
    get logoImgiOS() {
        const selector = 'type == "XCUIElementTypeImage"';
        return $(`-ios predicate string:${selector}`);
        // return logoImgApp;
    }
    get usuarioTxtiOS() {
        const selector = 'type == "XCUIElementTypeTextField" && value CONTAINS "Usuário"';
        const usuarioTxtApp = $(`-ios predicate string:${selector}`);
        return usuarioTxtApp;
    }
    get senhaTxtiOS() {
        const selector = 'type == "XCUIElementTypeSecureTextField" && value CONTAINS "Senha"';
        const senhaTxtApp = $(`-ios predicate string:${selector}`);
        return senhaTxtApp;
    }
    get visualizarBtniOS() { return $('(//XCUIElementTypeOther[@name="Senha"])[1]/XCUIElementTypeOther[2]'); }

    get entrarBtniOS() {
        const selector = 'type == "XCUIElementTypeOther" && name == "ENTRAR"';
        const entrarBtnApp = $(`-ios predicate string:${selector}`);
        return entrarBtnApp;
    }
    /**
     * define or overwrite page methods Android
     */
    islogoImgVisible() {
        this.logoImg.waitForDisplayed();
        let result = this.logoImg.isDisplayed();
        return result;
    }
    clearCamposLogin() {
        this.usuarioApagarTxt.waitForDisplayed(10000);
        this.usuarioApagarTxt.clearValue();
        this.senhaApagarTxt.clearValue();
    }
    informarDadosLogin(user, senha) {
        this.usuarioTxt.waitForDisplayed();
        this.usuarioTxt.setValue(user);
        this.senhaTxt.setValue(senha);
    }
    entrarClick() {
        this.entrarBtn.waitForDisplayed();
        this.entrarBtn.click();
    }
    /**
     * define or overwrite page methods iOS
     */
    islogoImgVisibleiOS() {
        this.logoImgiOS.waitForEnabled();
        let result = this.logoImgiOS.isEnabled();
        return result;
    }
    informarDadosLoginiOS(user, senha) {
        this.usuarioTxtiOS.waitForDisplayed();
        this.usuarioTxtiOS.setValue(user);
        this.senhaTxtiOS.setValue(senha);
    }
    entrarClickiOS() {
        this.entrarBtniOS.waitForDisplayed();
        this.entrarBtniOS.click();
    }
}

module.exports = LoginPage;