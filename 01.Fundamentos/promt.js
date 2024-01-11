

function sumarUno(numero) {
  const promesa = new Promise((resolve, reject) => {

    if (numero > 4) {
      reject(`El numero ${numero} excede el maximo!`)
    }

    setTimeout(() => {
      resolve(numero + 1)
    }, 800);
  })

  return promesa;
}


sumarUno(2)
  .then((numero) => sumarUno(numero))
  .then((numero) => sumarUno(numero))
  .then((numero) => sumarUno(numero))
  .then((numero) => console.log(numero))
  .catch((err) => console.error(err))
  .finally(() => console.log('fin de la ejecución...'))
