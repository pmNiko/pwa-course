


self.addEventListener('fetch', event => {

  // const offlineResponse = new Response(`
  //   Bienvenido a mi página web

  //   Disculpa, pero para usarla, necesitas internet.
  // `)


  // const offlineResponse = new Response(`

  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //       <title>Mi PWA</title>
    
  //       <link rel="shortcut icon" href="#">
  //   </head>
  //   <body class="container p-3">
  //     <h1>Offline Mode</h1>
  //   </body>
  //   </html>
  // `, {
  //   headers: {
  //     'Content-type': 'text/html'
  //   }
  // })

  const offlineResponse = fetch('pages/offline.html')

  const resp = fetch(event.request)
                  .catch(err => offlineResponse );

  event.respondWith( resp )
})