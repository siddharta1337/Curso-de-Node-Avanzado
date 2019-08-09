const fs = require("fs");
const util = require("util");

// fs.writeFile("./archivos/archivo/", "12345678" , ()=>{
//     console.log("ok")
// } )


const writeFilePromesa = util.promisify(fs.writeFile);


writeFilePromesa("./archivos/archivo.txt", "12345678" )
.then( ()=>{
    console.log("ok")
})
.catch( ()=>{
    console.log("error")
})