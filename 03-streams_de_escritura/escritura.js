const fs = require("fs");

var contenido = "1234567890";
var iteraciones = 15;


const streamEscritura = fs.createWriteStream( "./archivos/mi_archivo.txt");

for (var i = 0; i < iteraciones; i++) {
    contenido += contenido;

    streamEscritura.write(contenido, res => {
        console.log("...");
    });
}

fs.writeFile("./archivos/mi_archivo2.txt" , contenido , ()=>{
    console.log("escritura directa finalizada");
});



