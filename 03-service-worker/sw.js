
// Ciclo de vida del SW


//?? Cuando el sw se instala
self.addEventListener('install', event => {
    console.log("SW: Instalando SW");

    //! Se debe usar con responsabilidad 
    //! ya que puede dar a la perdidad de datos del cliente
    // self.skipWaiting();

    const instalations = new Promise( (resolve, reject) => {
      setTimeout(() => {
        console.log('SW: Instalaciones treminadas!');
        self.skipWaiting();

        resolve()
      }, 1);
    })
    

    event.waitUntil(instalations)
})

//** Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {

  // Borrar cache viejo

  console.log('SW2: Activo y listo para controlar la application!');
})


// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {
  //  Aplicar estrategias de cache
  // console.log('SW: fetch ', event.request.url);

  // if (event.request.url.includes("https://reqres.in/")) {
  //   const resp = new Response(`{ok: false, mensaje: 'jajajaja'}`)

  //   event.respondWith(resp)
  // }


} )


// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event => {

  console.log('Tenemos conexión!');
  console.log(event);
  console.log(event.tag);
})


//PUSH: Manejar las push notifications 
self.addEventListener('push', event => {
  console.log('Notification recibida.');
})