// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.dev/api/people/1/
 Imprima en consola el nombre y gÃ©nero de la persona.
*/

// ResoluciÃ³n de la tarea #1
const uriSwapi = 'https://swapi.dev/api/people/1/'

// fetch(uriSwapi)
//   .then(response => response.json())
//   .then(character => console.log(`Name: ${character.name}, \nGenero: ${character.gender === 'male' ? 'Masculino' : 'Femenino'}`))


// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.dev/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegÃºrese que tenga
 el ID y la fecha de creaciÃ³n del objeto
*/

// Resolución de la tarea #2
const uriReqRes = 'https://reqres.in/api/users'

function postData(character) {
  const {name, gender} = character

  return fetch(uriReqRes, {
    method: 'POST',
    body: JSON.stringify({name, gender: gender === 'male' ? 'masculino' : 'femenino'}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

fetch(uriSwapi)
  .then(response => response.json())
  .then(postData)
  .then(resp => resp.json())
  .then(console.log)



