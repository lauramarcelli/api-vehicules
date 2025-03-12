const net = require('net');

const controllersVehicle = require ('./controllers/controllersVehicle')

const { v4 : uuidv4 } = require('uuid');

function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

// function isJSON(str) {
//     return str.startsWith('{') && str.endsWith('}'); 
// }

const server = net.createServer((socket) =>{
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const command = data.toString().trim();
        
        //condicional para dar respuesta a los párametros ingresados por cliente:
        if (command === 'OBTENER DATOS') {
              //constante para pedir info de los vehiculos que hay en el json
            const response = controllersVehicle.requestVehicle();
            socket.write(response  + '\n');

        } else if (command.startsWith('AGREGAR DATOS')) {
            //extrae datos
            const paramsToString = command.replace('AGREGAR DATOS', '').trim()

            if (isJSON(paramsToString)) {
                //convertimos los datos a objeto json, si cumple requisitos
                const vehicleInfo = JSON.parse(paramsToString)

                //Verificacion de los datos, que sean objeto
                if(vehicleInfo && typeof vehicleInfo === 'object') {
                    //Creamos id con uuidv4
                    const vehicleType = { id: uuidv4(), ...vehicleInfo }
                    const response = controllersVehicle.addVehicle(vehicleType)
                    socket.write(response  + '\n')    
                } else {
                    socket.write('Datos inválidos\n')
                }
            } else {
                socket.write('Error: Formato JSON no válido\n')
            }
        } else {
            socket.write('Error: Comando no reconocido\n')
        }
    })

    //Manejo de evento de desconexión
    socket.on('end', () =>{
        console.log('Cliente desconectado\n');
        
    })
})

server.listen(8080, () =>{
    console.log('Servidor escuchando en puerto: 8080');
    
})