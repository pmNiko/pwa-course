
// const CACHE_NAME = 'cache-1';
const CACHE_STATIC_NAME = 'static-V2';
const CACHE_DYNAMIC_NAME = 'dynamic-V1';
const CACHE_DYNAMIC_LIMIT = 50;

const CACHE_INMUTABLE_NAME = 'inmutable-v1'

function cleanCache( cacheName, count ) {
  caches.open( cacheName ).then( cache => {
      return cache.keys()
        .then( keys => {
          if(keys.length > count){
            cache.delete( keys[0] )
              .then( cleanCache( cacheName, count));
          }
        });
    });
}


// ** Este es el contenido para el core de nuestra app
self.addEventListener('install', e => {

  const cacheProm = caches.open(CACHE_STATIC_NAME)
    .then( cache => {
      return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                '/js/app.js',
                '/img/no-img.jpg'
             ])
    });

  const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
    .then( cache =>  cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));

  e.waitUntil(Promise.all([cacheProm, cacheInmutable]));

});



// ** Este es el contenido dinámico de la app
self.addEventListener('fetch', e => {

  // ?? 5- Cache & Network Race
  const response = new Promise( (resolve, reject) => {

    let failure = false;

    const failureOnce = () => {

      if ( failure ) {
        if ( /\.(png|jpg)$/i.test( e.request.url ) ) {
          resolve( caches.match('/img/no-img.jpg') )
        } else {
          reject('No available!')
        }
      }else {
        failure = true;
      }

    };
    
    // ** Ambas peticiones se ejecutan en simultaneo
      fetch( e.request )
      .then( res => res.ok ? resolve(res) : failureOnce() )
      .catch( failureOnce );
      
      caches.match( e.request )
      .then( res => res ? resolve(res) : failureOnce() )
      .catch( failureOnce );
    // ** Ambas peticiones se ejecutan en simultaneo

  });

  e.respondWith( response )




  // ?? 4- Cache with network update
  //  Rendimiento es critico
  //  Siempre estarán un paso atras
  // if ( e.request.url.includes('bootstrap') ) {
  //   return e.respondWith( cache.match( e.request ) );
  // }

  // const response = caches.open( CACHE_STATIC_NAME )
  //   .then( cache => {
  //     fetch( e.request ).then( newResp => cache.put( e.request, newResp ));

  //     return cache.match( e.request );
  //   });
  // e.respondWith( response );



  // ?? 3- Network with cache fallback
  // const response = fetch( e.request ).then( res => {

  //   if ( !res ) return caches.match( e.request );

  //   caches.open( CACHE_DYNAMIC_NAME )
  //     .then( cache => {
  //       cache.put( e.request, res );
  //       cleanCache( CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT )
  //     });

  //   return res.clone();
  // }).catch( err => {
  //   return caches.match( e.request );
  // })

  // e.respondWith( response );



  //??  2- Cache will Network Fallback
  // const response = caches.match( e.request )
  //   .then( res  => {

  //     if ( res ) return res;

  //     // No existe el archivo que solicita
  //     console.log('No existe ', e.request.url);
      
  //     return fetch(  e.request )
  //             .then( newResp => {
  //               caches.open(CACHE_DYNAMIC_NAME)
  //                 .then( cache => {
  //                   cache.put( e.request, newResp );
  //                   cleanCache( CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT );
  //                 });

  //               return newResp.clone();
  //             });
  //   });
  // e.respondWith( response );



  //??  1- Cache Only
  // e.respondWith( caches.match( e.request) )


})















