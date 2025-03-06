const net = require('net');

const client = net.createConnection({port: 8080}, () => {
    console.log('Conectado al servidor');

    //recibimos datos del cliente
    const vehicleId = '2'
    client.write(vehicleId)
})

//evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor:  ', data.toString());
    client.end()
})

client.on('end', () => {
    console.log('conexion cerrada');
})