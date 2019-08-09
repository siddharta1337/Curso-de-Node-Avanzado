
function numeroAleatorio() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 2000);
  })

}


 async function resultado() {


  console.log("resultado invocado")

  const aleratorio = await numeroAleatorio();

  console.log(`Resultado: ${aleratorio}`)

}



resultado();


