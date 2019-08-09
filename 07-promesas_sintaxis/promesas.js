const promesasNode = require("fs").promises;


promesasNode.copyFile("./archivos/original.pdf" , "./archivos/copia.txt")
            .then(() => console.log("copia terminada"))
            .catch(() => console.log("no se puede copiar el archivo"))
            .finally(() => console.log("...") )


            