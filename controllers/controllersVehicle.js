//Importacion de modulo que contiene la logica para obtener los de datos de los vehiculos
const vehicleModel = require ('../models/modelsVehicle')

//Importacion de modulo que tiene la logica para formatear la respuesta que se le enviara au usuario
const viewVehicle = require ('../views/viewsVehicles')


//objeto que manejara las solicitudes relacionadas con vehiculos
const vehicleController = {
    handlerRequest: (id) => {
        const vehicle = vehicleModel.getVehicleById(parseInt(id, 10));

        return viewVehicle.formatResponse(vehicle)
    }
}

module.exports = vehicleController