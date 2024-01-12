

fetch('no-encontrado.html')
  .then(resp => resp.text())
  .then(html => {
    let body = document.querySelector('body');

    body.innerHTML = html
  })
  .catch(err => console.error('Error en la petición: ',err))