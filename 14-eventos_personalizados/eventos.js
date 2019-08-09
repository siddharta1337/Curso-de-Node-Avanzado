const fs = require("fs");
const streamEscritura = fs.createWriteStream("./archivos/mi_archivo.txt");
const EventEmitter = require('events');

class Emisor extends EventEmitter {}

const miEmisor = new Emisor();



function escribirEnArchivo() {

    var iteraciones = 5;

    for (var i = 0; i < iteraciones; i++) {
        streamEscritura.write(`Iteración #${i}\n`);
    }

    streamEscritura.write(`======= FIN =======`);
    streamEscritura.end();
}


function notificarPorCorreo() {

    console.log("preparando correo");

    setTimeout(
        () => { 
            miEmisor.emit("correoOK")
         }
        , 1000
    )
}

function leerDocumento() {
    fs.readFile('./archivos/mi_archivo.txt', (error, documento) => {
        console.log(documento.toString())
    });


}


streamEscritura.on('close', () => {
    notificarPorCorreo()
})

miEmisor.on("correoOK", ()=>{
    leerDocumento();
})

escribirEnArchivo();








