

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}


function datosDeUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}


login().then( ()=>{
    console.log("usuario autenticado")

    return datosDeUsuario()
}).then( ()=>{
    console.log("datos de usuario OK")
}).catch( ()=>{
    console.log("error")
});
   


datosDeUsuario()


