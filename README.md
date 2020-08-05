
![WebdriverIO](http://www.christian-bromann.com/wdio.png)

## Principais Frameworks:
- webdriverIO (v6)
- cucumber (v6)
- appium-service (v6)
- tedious (v6)
- devtools (v6)
- chromedriver (v83)
- newman (v4)
- wdio-image-comparison (v1)

## Principais Funcionalidades:
- Page Object Model
- Projeto em JavaScript
- Automação mobile (nativo)
- Automação mobile (hybrid - independete de framework)
- Automação de teste de API
- Automação de teste de acessibilidade
- Automação de teste de Performance (devtools)
- Automação de teste de regressão visual
- Ações em banco de dados (select/insert/delete/ update)
- Compatível com as versões 8.x a 13.x do Nodejs
- Contém cenários de exemplo do tipo declarativo do BDD
- Supports Data externalisation
- Integrado com [eslint](https://www.npmjs.com/package/eslint) para identificar e gerar relatórios sobre padrões de código
- Integrado com [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter) para relatórios HTML intuitivos e detalhados HTML reporting
- Incorpora capturas de tela em caso de falha
- Integrado ao módulo [wdio-pepino-paralelo-execução](https://www.npmjs.com/package/wdio-cucumber-parallel-execution) para execução paralela

## Para começar:
#### Pré-requisito
1. NodeJS instalado globalmente no sistema operacional. Instale sempre a versão estável.
https://nodejs.org/dist/latest-v10.x/node-v10.18.1.pkg

2. Git instalado

3. Navegador Chrome ou Firefox instalado

4. JAVA SDK

4. Editor de texto (Opcional) instalado => Sublime/VSCode/Atom/Sublime

**Editor padrão:** *VSCode (Visual Studio Code). Instalar os plugins [Cucumber (Gherkin)] by Alexandre Krechik e [vscode-icons] by Roberto Huertas.*

6. Para SO MacOs, instale [Xcode](https://developer.apple.com/xcode/) ou na loja App Store

**ATENÇÃO - Xcode:** *É necessário ACEITAR os termos do CONTRATO após a instalação*

**Aceitar os termos do Xcode**
```
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install
sudo xcodebuild -license accept
```

7. Para SO MacOS, instale também [Homebrew Tutorial](https://brew.sh/index_pt-br) e [nvm](https://github.com/nvm-sh/nvm)

8. Instale o [Python](https://www.python.org/downloads/release/python-2714/) para MacOS / Windows

9. Instale o [Android Studio](https://developer.android.com/studio) para MacOS / Windows

    9.1. **Virtual Devices:** *Crie um emulador API 29 (Q) com o AVD Name: **Pixel 2 API 29***

10. Instale o [Appium Desktop](https://github.com/appium/appium-desktop/releases/tag/v1.15.1) para MacOS / Windows

## Instalação

```
npm install
```


## Executando os cenários de exemplo

- Executar em modo headless no navegador chrome:

```
npm run test
```

- Executar em modo headless no navegador chrome e paralelamente os cenários:

```
npm run test:parallel
```

- Executar em modo headless nos navegadores chrome e firefox:

```
npm run test:multiBrowser
```

- Executar em modo desktop no navegador chrome:

```
npm run test:debug
```

- Executar teste de performance. O resultado poderá ser visualizado no prompt:

```
npm run test:devtools
```

- Executar teste de regressão visual. O resultado poderá ser visualizado em **./tests/reports/screenshots/**:

```
npm run test:visual
```

- Executar teste de acessibilidade. O resultado poderá ser visualizado em **./tests/reports/accessibility-results/**:

```
npm run test:accessibility
```

- Executar teste em Android nativo ou hybrid. **API level configurada no projeto: 29**. O resultado poderá ser visualizado em **./tests/reports/html/**:

```
npm run android:debug
```

- Executar teste em Android nativo ou hybrid em modo headless. É necessário configurar variaveis de ambiente previamente. **API level configurada no projeto: 28**. O resultado poderá ser visualizado em **./tests/reports/html/**:

```
npm run test:android
```

- Executar teste em iOS nativo ou hybrid. **Device iOS 13.5 - iPhone 11 Pro**. O resultado poderá ser visualizado em **./tests/reports/html/**:

```
npm run ios:debug
```

- Executar teste em iOS nativo ou hybrid em modo headless. **Device iOS 13.5 - iPhone 11 Pro**. O resultado poderá ser visualizado em **./tests/reports/html/**:

```
npm run test:ios
```
