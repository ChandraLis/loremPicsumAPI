/*
const url = 'https://picsum.photos/400/600';

var randomImage = document.querySelector('.photos');

let button = document.getElementById('dazzle me');

button.addEventListener('click', fetch)

fetch ('https://picsum.photos/400/600')
.then(function(response) {
 if(!response.ok){
     console.log(response);
     return new Error(response);
 }
 console.log("Response:", response);
 return response.blob();
})
.then(function() {
    
}

.catch(function(err) {
    console.log(err);
}),


*/
/*
img.addEventListener('click',() =>{
    quoteContainer.removeChild(img);

    fetchImage();
})
*/

const url = 'https://picsum.photos/400/600';
/*
var randomImage = document.querySelector('.random-image'); 
console.log("randomImage:", randomImage);
*/


let image = document.getElementById('image')
let button = document.getElementById('dazzle me')


let fetchImage =() => {

fetch(url)
  .then(function(response) {
  if (!response.ok){ 
      console.log(response); 
  } 
  console.log("Response:", response);
  return response.blob(); 
})/*
.then(function(imgBlob) { 
  console.log("Photo:", imgBlob)
  var objectURL = URL.createObjectURL(imgBlob); 
  console.log("Object URL:", objectURL);
  randomImage.src = objectURL; 

  console.log("randomImage.src:", randomImage.src);
})*/
.catch(function(err) { 
  console.log(err); 
});
}
let img = document.createElement('img');
    img.src = 'https://picsum.photos/400/600';

image.appendChild(image);   

image.firstElementChild != null ? img.removeChild(img) : null;



//button.addEventListener('click', fetchImage)

button.addEventListener('click',() =>{
    img.removeChild(img);

    fetchImage();
})


