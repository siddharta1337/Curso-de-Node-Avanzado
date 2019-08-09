const fs = require("fs");
const { Transform } = require("stream");
 


const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");


streamLectura.setEncoding("utf8");

 
const filtro = new Transform( {

    writableObjectMode: true,
    transform( data, encoding, callback){
        this.push(data.toString().toUpperCase())
        callback();
    },
    final(callback){
        callback();
    }

})



streamLectura.pipe(filtro).pipe(streamEscritura);
