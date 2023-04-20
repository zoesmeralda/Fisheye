
//commentaire
// async function getImage() {
//   const dataImage = await fetch('data/photographers.json').then((res) =>
//     res.json().then((data) => (image = data.image)),
//   )
//   return dataImage
// }
// The photo to displayed
let displayedPhoto = 0;
// Get the list of all images
const imageArray = document.getElementsByClassName("for-zoom");

async function zoom(photoNumber) {
  // Save photonumber globally
  displayedPhoto = photoNumber;

  // Display the modal
  const zoomModal = document.getElementById("zoom-modal");
  zoomModal.style.display = "flex";

  // Get the div which will display the image
  const divImage = document.getElementById("image-title");
  // Make a copy of the image to prevent bugs
  const selectedImageCopy = imageArray[photoNumber].cloneNode(true);
  // display the image and remove last one
  divImage.replaceChildren(selectedImageCopy);
}

function closeZoom() {
  const zoomModal = document.getElementById("zoom-modal");
  const body = document.querySelector("body");
  zoomModal.style.display = "none";
  body.style.overflowY = "auto";}

//qd on clique sur dp photonumber -1 next +1 + actualiser la page
//affichage photo précédente
function displayPrev() {
  if (displayedPhoto <= 0) {
    displayedPhoto = imageArray.length - 2;
  } else {
    displayedPhoto--;
  }
  zoom(displayedPhoto);
}
//affichage photo suivante
function displayNext() {
  if (displayedPhoto >= imageArray.length - 2) {
    displayedPhoto = 0;
  } else {
    displayedPhoto++;
  }
  zoom(displayedPhoto);
}