const net = require('net');

const vehicleController = require ('./controllers/controllersVehicle')


const server = net.createServer((socket) =>{
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const vehicleId = data.toString().trim();
        console.log(`Solicitud recibida: ID ${vehicleId}`);

        const response = vehicleController.handlerRequest(vehicleId);

        socket.write(response)
    })

    socket.on('error',(err) =>{
        console.log('Ha ocurrido un error', err);
    })

    socket.on('end', () =>{
        console.log('Cliente desconectado');
        
    })
})

server.listen(8080, () =>{
    console.log('Servidor escuchando en puerto: 8080');
    
})