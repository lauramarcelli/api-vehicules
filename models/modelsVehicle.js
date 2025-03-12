//modulo que contiene la logica para obtener los de datos de los vehiculos
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/vehicles.json');

const modelsVehicle = {
    //funcion que lee archivo JSON, y lo devuelve en buffer. Con el metodo parse lo convertimos de buffer a obj javascript
    getVehicleById: () => {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data)
    },

    //escribe los nuevos datos en el json
    writeVehicle : (vehicles) => {
        const jsonData = JSON.stringify(vehicles, null, 2);
        fs.writeFileSync(filePath, jsonData);
    }
}


module.exports = modelsVehicle