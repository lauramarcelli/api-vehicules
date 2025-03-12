const net = require('net');
const readline = require('readline');

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const client = net.createConnection({port: 8080}, () => {
    console.log('Conectado al servidor');

    rl.question('Ingrese un comando (Por ej: OBTENER DATOS o AGREGAR DATOS {"marca": "nissan", "modelo": "sentra", "año":2022}): ', (command) => {client.write(command)
    });
});

//evento data

client.on('data', (data) => {
    console.log('Respuesta del servidor:');
    console.log(data.toString());
    rl.close();
    client.end()
})

client.on('end', () => {
    console.log('conexion cerrada');
})