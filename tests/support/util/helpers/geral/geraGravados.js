
const fs = require('fs');
let path = require('path');
let data, toFile, stringFile, cpfGravado, cpfs;

class GeraGravados {

    gravaCPF(cpf) {

        cpfGravado = {
            cpfG: cpfs
        };

        data = JSON.stringify(cpfGravado);
        toFile = path.join(__dirname, '../gravados/cpf.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }
}
module.exports = GeraGravados;