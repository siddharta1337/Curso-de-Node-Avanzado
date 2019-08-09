const express = require("express");
const app = express();
const puerto = 3000;

app.get('/' , (request, respuesta)=> {
    respuesta.send('Hola Mundo')
})


app.listen( puerto , ()=>{ 
    console.log(`escuchando el puerto ${puerto}!`)
})