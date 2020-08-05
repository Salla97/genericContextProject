const fs = require('fs');
let path = require('path');

let data, toFile, stringFile, statusGravado, statusG, status;

class GeraGeneric {

    gravaStatusG(s) {

        var status = s;

        statusGravado = {
            statusG: status
        };

        data = JSON.stringify(statusGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/status.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }
}

module.exports = GeraGeneric;