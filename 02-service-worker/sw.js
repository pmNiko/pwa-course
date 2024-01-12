


self.addEventListener('fetch', (event) => {

  // if ( event.request.url.includes('style.css') ) {
  //   event.respondWith(null)
  // }else {

  //   event.respondWith( fetch( event.request ) )
  // }

  // if (event.request.url.includes('style.css')) {
  //   const resp = new Response(`
  //     body {
  //       background-color: red !important;
  //       color: pink;
  //     }
  //   `, {
  //     headers: {
  //       'Content-Type': 'text/css'
  //     }
  //   });


  //   event.respondWith(resp)

  // }

  // if ( event.request.url.includes('main.jpg') ){
  //   event.respondWith( fetch('img/main-patas-arriba.jpg') )
  // }

  const resp = fetch( event.request )
      .then( (resp) => resp.ok ? resp : fetch( 'img/main.jpg' ))

  event.respondWith(resp)

})