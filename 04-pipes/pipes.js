const fs = require("fs");

const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

streamLectura.pipe(streamEscritura);

streamLectura.on("end" , () => {
    console.log("proceso finalizado");
});