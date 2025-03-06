//modulo que contiene la logica para obtener los de datos de los vehiculos
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/vehicles.json');

const vehicleModel = {
    getVehicleById: (id) =>{
        const infoData = fs.readFileSync(filePath, 'utf8');
        const vehicles = JSON.parse(infoData)
        return vehicles.find(v => v.id === id || null)
    }
}

module.exports = vehicleModel