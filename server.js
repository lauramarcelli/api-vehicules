const net = require('net');

const vehicleController = require ('./controllers/controllersVehicle')

const { v4 : uuidv4 } = require('uuid');

function isJSON(str) {
    return str.startsWith('{') && str.endsWith('}'); 
}

const server = net.createServer((socket) =>{
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const command = data.toString().trim();
        
        //condicional para dar respuesta a los párametros ingresados por cliente:
        if (command === 'OBTENER DATOS') {
              //constante para pedir info de los vehiculos que hay en el json
            const response = vehicleController.requestVehicle();
            socket.write(response);

        } else if (command.startsWith('AGREGAR DATOS')) {
            //extrae datos
            const paramsToString = command.replace('AGREGAR DATOS', '')

            if (isJSON(paramsToString)) {
                //convertimos los datos a objeto json, si cumple requisitos
                const vehicleInfo = JSON.parse(paramsToString)

                //Verificacion de los datos, que sean objeto
                if(vehicleInfo && typeof vehicleInfo === 'object') {
                    //Creamos id con uuidv4
                    const vehicleType = {
                        id: uuidv4(), ...vehicleInfo }
                    const response = vehicleController.addVehicle(vehicleType)
                    socket.write(response)    
                } else {
                    socket.write('Datos inválidos')
                }
            } else {
                socket.write('Error: Formato JSON no válido')
            }
        } else {
            socket.write('Errorr: Comando no reconocido')
        }
    })

    //Manejo de evento de desconexión
    socket.on('end', () =>{
        console.log('Cliente desconectado');
        
    })
})

server.listen(8080, () =>{
    console.log('Servidor escuchando en puerto: 8080');
    
})