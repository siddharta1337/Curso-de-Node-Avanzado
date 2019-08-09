const fs = require("fs");
var http = require("http");
 

function leerArchivo() {
    //fs.readFileSync("./archivos/archivo.txt", "utf8");
     const streamlectura = fs.createReadStream("./archivos/archivo.txt", {
         encoding: "utf-8"
       });
}

http
  .createServer(function(req, res) {    
    for (let a = 0; a < 500; a++) {
        leerArchivo();
    }
    res.write("Hola mundo");  
    res.end();  
})
.listen(8080);  