//Importacion de modulo que contiene la logica para obtener los de datos de los vehiculos
const modelsVehicle = require('../models/modelsVehicle');


//Importacion de modulo que tiene la logica para formatear la respuesta que se le enviara au usuario
const viewsVehicles = require ('../views/viewsVehicles')


//objeto que manejara las solicitudes relacionadas con vehiculos
const controllersVehicle = {
    //funcion para obtener los vehiculos
    requestVehicle: () => {
        const vehicles = modelsVehicle.getVehicleById();
        return viewsVehicles.formatResponse(vehicles)
    },

    //funcion agrega un vehiculo
    addVehicle:  (vehicleType) => {
        const vehicles = modelsVehicle.getVehicleById()
        vehicles.push(vehicleType) 
        modelsVehicle.writeVehicle(vehicles)
        return viewsVehicles.formatResponse({message: 'Se ha añadido un vehiculo'});
    }
}

module.exports = controllersVehicle