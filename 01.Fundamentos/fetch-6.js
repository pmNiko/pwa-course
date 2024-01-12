
const uri = 'https://reqres.in/api/users/1000'


fetch(uri)
  .then(response => {
    if (response.ok) {
      return  response.json()
    } else {
      throw new Error('No existe el usuario 1000')
    }      
  })
  .then()
  .catch(err  => console.error(`Failed to create request ${err.message}`))

