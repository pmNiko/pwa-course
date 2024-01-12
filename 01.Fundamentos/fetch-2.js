

const request = new XMLHttpRequest();

const uri = 'https://reqres.in/api/users'


fetch(uri)
  .then(response => response.json())
  .then(response => console.log(response))


fetch('https://www.wikipedia.org')
  .then( response => response.text())
  .then( html => {
    document.open();
    document.write(html);
    document.close();
  })