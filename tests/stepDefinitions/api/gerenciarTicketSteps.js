const { When, Then } = require('cucumber');
const newman = require('newman'); // require newman in your project
let caminho, id, resultResponse, idResponse;

When(/^executar API de visualizar ticket$/, () => {
    caminho = '../../support/newman/teste-test-api.postman_collection.json';
    id = 27259;

    newman.run({
        // bail : true, // even tried with bail : ['failure']
        bail: ['failure', false],
        collection: require(caminho),
        iterationData: [{ "id_ticket": id }],
        reporters: ['htmlextra'],
        reporter: {
            htmlextra: {
                export: './tests/reports/newman/',
                showOnlyFails: false,
                logs: false,
                title: 'Visualizar Ticket - API'
            },
        },
    }).on('start', function (err, summary) { // on start of run, log to console
        console.log('running a collection...');
        // console.log(summary.responseBody);
    }).on('done', function (err, summary) {
        if (err || summary.error) {
            console.error('collection run encountered an error.');
            console.log(summary.responseBody);
        }
        else {
            console.log('collection run completed.');
            console.log(summary.run);
            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            summary.run.executions.forEach(function (execution) {
                console.log(execution.response.json());
            });
        }
    });
    browser.pause(4000);
});

Then(/^a execução é realizada com sucesso$/, () => {
    console.log("Executou a API com Sucesso para o ticket: " + id);
});