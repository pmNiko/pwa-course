
const request = new XMLHttpRequest();

const uri = 'superman.png'


fetch(uri)
  .then(response => response.blob())
  .then(image => {
    const imagePath = URL.createObjectURL( image )
    document.querySelector('img').src = imagePath;
  })
  .catch(err  => console.error(`Failed to create request ${err.message}`))

