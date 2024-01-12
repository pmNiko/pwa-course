


// if ('serviceWorker' in navigator) {
//   console.log('Es viable utilizar service worker!');
// }


//?? confirmar si podemos utilizarlo
if (navigator.serviceWorker) {
    // console.log('Es viable utilizar service worker!');

    navigator.serviceWorker.register('/sw.js')
  
}