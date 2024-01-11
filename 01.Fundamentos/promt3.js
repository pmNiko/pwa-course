

function sumarlento(numero) {
  return  new Promise(function(resolve, reject) {

    if (numero > 4) {
      reject(`Invalid number must be less than 5.`);
    }

    setTimeout(() => {
      resolve(numero + 1);
    }, 800);
  })
}


let sumarRapido = numero => {
  return new Promise(function(resolve, _) {
    setTimeout( () => resolve(numero + 1), 300 );
  })
}

Promise.all([
  sumarlento(4),
  sumarRapido(1),
  true,
  "Hello world!"
])
  .then(resp => console.log(resp))
  .catch(err => console.log(err))