

function mensajesPrivados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mensajes");
        }, 1500);
    });
}


function galeriaDeFotos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fotos");
        }, 1500);
    });
}

function ultimasTransacciones() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("transacciones");
        }, 1500);
    });
}


Promise.all( [ mensajesPrivados() , galeriaDeFotos() , ultimasTransacciones()  ] ).then( (valores)=>{
    console.log( valores );
})