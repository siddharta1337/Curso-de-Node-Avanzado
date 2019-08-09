const fs = require("fs");

const streamLectura = fs.createReadStream( "./archivos/mi_archivo.txxxxxxt" , {encoding:'utf8'} );


streamLectura.on("open" , ()=>{
    console.log("abriendo archivo")
}).on("data" , ()=>{
    console.log("----")
}).on('close', ()=>{
    console.log("archivo cerrado") 
}).on('error' , ()=>{
     console.log("error en el archivo")
})
 