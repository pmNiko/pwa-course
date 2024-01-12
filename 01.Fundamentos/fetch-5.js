
const uri = 'https://reqres.in/api/users/1'


fetch(uri)
  .then(response => {
    response.clone().json()
      .then(usuario => console.log(usuario));
      
    response.json()
      .then(usuario => console.log(usuario));

  })
  .catch(err  => console.error(`Failed to create request ${err.message}`))

