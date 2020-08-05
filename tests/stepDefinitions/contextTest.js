
const expect = require('chai').expect;
const { remote } = require('webdriverio');
const DevToolsContext = require('../support/context/devToolsContext');
const VisualRegressionContext = require('../support/context/visualRegressionContext');
const axe = require('../support/context/axe');
const EyesTest = require('../support/context/eyesTest');
let shell = require('shelljs');
const devToolsContext = new DevToolsContext();
const visualRegressionContext = new VisualRegressionContext();
const eyesTest = new EyesTest();

class ContextTest {
    // setParametros(performance, visualElement, visualNameImg, csv, driver, setAppName, setTestName, checkDados) {
    setParametros(performance, visualElement, visualNameImg, csv) {
        const context = process.env.TEST_CONTEXT;
        switch (context) {
            case "performance":
                switch (performance) {
                    case "enable":
                        devToolsContext.enablePerformance();
                        break;
                    case "disable":
                        devToolsContext.disablePerformance();
                        break;
                    case "report":
                        devToolsContext.reportPerformance();
                        break;
                    default:
                        break;
                }
                break;
            case "accessibility":
                if (csv == '') {
                    //
                } else {
                    // Chama a função de execução do teste de acessibilidade
                    axe.runAccessibilityTest(csv);
                }
                break;
            case "functional":
                console.log('<<< FUNCTIONAL TESTS STARTED >>>');
                // Quando funcional executa o teste E2E
                break;
            case "visual":
                const visualContext = process.env.VISUAL_CONTEXT;
                switch (visualContext) {
                    case 'applitools':
                        console.log("Identificou ser um teste visual applitools");
                        // Chama a função de execução do teste de regressão visual
                        console.log('<<< REGRESSION VISUAL TESTS STARTED >>>');
                        // eyesTest.runEyesTest(driver, setAppName, setTestName, checkDados);
                        break;
                    case 'wdio':
                        if (visualElement == '') {
                            //
                        } else {
                            visualRegressionContext.isToleranceChecked(visualElement, visualNameImg);
                        }
                        break;

                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
}

module.exports = ContextTest;

