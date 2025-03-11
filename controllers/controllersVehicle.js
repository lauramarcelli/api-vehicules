//Importacion de modulo que contiene la logica para obtener los de datos de los vehiculos
const readVehicleModel = require('../models/modelsVehicle');
const modelsVehicle = require ('../models/modelsVehicle')

//Importacion de modulo que tiene la logica para formatear la respuesta que se le enviara au usuario
const displayResponse = require ('../views/viewsVehicles')


//objeto que manejara las solicitudes relacionadas con vehiculos
const vehicleController = {
    //funcion para obtener los vehiculos
    requestVehicle: () => {
        const vehicle = readVehicleModel.getVehicleById();
        return displayResponse.formatResponse(vehicle)
    },

    //funcion agrega un vehiculo
    addVehicle:  (vehicleType) => {
        const vehicles = readVehicleModel.getVehicleById()
        vehicles.push(vehicleType) 
        return displayResponse.formatResponse({message: 'Se ha añadido un vehiculo'});
    }
}

module.exports = vehicleController