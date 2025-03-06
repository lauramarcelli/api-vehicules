//modulo que tiene la logica para formatear la respuesta que se le enviara au usuario

const viewVehicle = {
    formatResponse: (vehicle) =>{
        if(!vehicle){
            return JSON.stringify({
                status: "error",
                message: "Vehiculo no encontrado"
            })
        }
        return JSON.stringify({
            status: "success",
            data: vehicle
        })
    }
}

module.exports = viewVehicle