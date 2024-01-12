

const request = new XMLHttpRequest();

const uri = 'https://reqres.in/api'

const user = {
  name: 'Nikolas',
  job: 'Developer'
}


fetch(uri, {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(console.log)
  .catch(err  => console.error(`Failed to create request ${err.message}`))

