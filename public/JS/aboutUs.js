

//Capturamos todas las fotos y descripciones
const photos = document.querySelectorAll('.photo');
const descs = document.querySelectorAll('.description');
const iconContainers = document.querySelectorAll('.iconContainer');

//Función para mostrar el texto
function showText(descElement) {
  descElement.style.display = 'block';
}

//Función para ocultar el texto
function hideText(descElement) {
  descElement.style.display = 'none';
}

photos.forEach((photo, index) => {
  photo.addEventListener('click', function (event) {
    console.log('Hiciste clic en una foto', iconContainers);
    
    photos.forEach(p => p.style.filter = 'grayscale(100%)');
    descs.forEach(d => d.style.display = 'none');
    
    //iconContainers.forEach(ic => ic.classList.remove('visible'));
    
    photo.style.filter = 'grayscale(0%)';
    descs[index].style.display = 'block';
    descs[index].style.transform = 'scale(0)';
    descs[index].style.transition = 'all 0.5s ease';
    setTimeout(function () {
      descs[index].style.transform = 'scale(1)';
    },0);
    iconContainers.forEach(ic => ic.classList.remove('visible'));
    iconContainers[index].classList.add('visible');
  });
});

document.addEventListener('click', function (event) {
  //if (!iconContainers.contains(event.target)) {console.log('fewf')};
    iconContainers.forEach(ic => {
      if (!ic.contains(event.target)){
        ic.classList.remove('visible');
      }
    });
});



//iconContainers.forEach(ic => ic.classList.remove('visible'));
// //Agrega un evento de clic a cada foto
// photos.forEach((photo, index) => {
//   photo.addEventListener('click', function (event) {
//     //Muestra el texto correspondiente a la foto clicada
//     showText(descs[index]);

//     //Agrega un evento de clic al documento para ocultar el texto al hacer clic fuera de la foto
//     function hideDescOnOutsideClick(e) {
//       //Comprueba si el clic no ocurrió en la foto ni en sus descendientes
//       if (!photo.contains(e.target)) {
//         //Oculta el texto
//         hideText(descs[index]);

        

//         //Remueve el evento de clic del documento después de ocultar el texto
//         document.removeEventListener('click', hideDescOnOutsideClick);
//       }
//     }

//     //Agrega el evento de clic al documento
//     document.addEventListener('click', hideDescOnOutsideClick);
//   });
// });

// //Agrega un evento de clic al documento para ocultar los iconos al hacer clic fuera de las imágenes
// document.addEventListener('click', function hideIconsOnOutsideClick(e) {
//   //Comprueba si el clic no ocurrió en el icon container ni en sus descendientes
//   if (!iconContainers[0].contains(e.target) && !iconContainers[1].contains(e.target)) {
//     //Oculta los iconos
//     iconContainers.forEach(ic => ic.style.display = 'none');

//     //Remueve el evento de clic del documento después de ocultar los iconos
//     document.removeEventListener('click', hideIconsOnOutsideClick);
//   }
// });


