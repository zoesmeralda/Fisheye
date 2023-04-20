//Mettre le code JavaScript lié à la page photographer.html

//import { Lightboximage } from "../factories/lightboxImg"
//recupere l'id
const tblPrice=[]
//recupere les infos du photographe
async function getPhotographer(photographerId) {
  const res = await fetch("data/photographers.json");
  const photographers = await res.json();
  const photographer = photographers.photographers.find(
    (e) => e.id == photographerId
  );
  //console.log("huhg", photographer)
  // const photographer = photographers
  return photographer;
}
//affichage du header avec la factory
async function getPhotographerHeader(photographerId) {
  const photographer = await getPhotographer(photographerId);
  if (photographer === undefined) {
    window.location.href = "index.html";
  }

  const factory = new photographerFactory(photographer);
  const header = document.querySelector(".photograph-header");
  const userHeader = factory.getUserHeader();
  //console.log(userHeader)
  header.appendChild(userHeader);
  //appeler factory getuserheader
  tblPrice.push(photographer.price);
  //console.log(tblPrice);
}

//recupere les medias
async function getMedia(resultIdParam) {
  //const dataMedia = await fetch('data/photographers.json').then((res) =>
  //res.json().then((data) => (media = data.media)),
  //)

  const selected = document.querySelector(".selected");
  const selectBox = document.getElementById("tri");
  //console.log(selected)
  //console.log(selectBox)
  const response = await fetch("data/photographers.json");
  let dataMedia = (await response.json()).media;
  dataMedia = dataMedia.filter(
    (media) => media.photographerId === resultIdParam
  );
  //console.log(dataMedia);
  // const listId = dataMedia.map(({ photographerId }) => photographerId)
  //console.log(dataMedia, mediaId)
  //console.log(mediaId)

  //if (listId.includes(resultIdParam)) {
  /* dataMedia = dataMedia.filter(
      (media) => media.photographerId === resultIdParam)*/
  let photoNumber = 0;
  dataMedia.forEach(function (media) {
    //console.log(media)
    const factory = new photographerMediaFactory(media);
    const displayMedia = document.querySelector(".carrousel");
    const userMedia = factory.getUserMedia(photoNumber);
    photoNumber += 1;
    displayMedia.appendChild(userMedia);
  });
  return dataMedia;
  // console.log(dataMedia)
  // } else {
  //console.log(resultIdParam)
  // return window.location.href = '';
  // };

  //console.log(dataMedia)

  //tri par popularité
  /*if (selected) {
    // Cree une condtion pour le choix du tri
  } else {
    
  }
  dataMedia.sort(function (a, b) {
    return b.likes - a.likes;
  });*/
}

//nombre de likes
/*async function likesNumber() {
  const heartImg = document.getElementById('heart-card-' + id)
  //console.log(heartImg)
  const likeElement = heartImg.previousElementSibling
  let likeContent = likeElement.textContent
  likeElement.textContent = ++likeContent


}*/

//nombre total de likes
async function getTotalLikes(medias) {
  //const idPhotographer = parseInt(new URL(location.href).searchParams.get('index', 10));
  const getMedias =  getMedia(medias)
  let likes = 0;
 // console.log(getMedias);
  //console.log(getMedia(idPhotographer));
  medias.forEach((media) => {
    likes += media.likes;
  });
  /*for (let i = 0; i < medias.length; i++) {
    likes += medias[i].likes
    console.log(i)
  }*/
  //console.log("nombre de likes:" + likes);
  const likeStorage = document.querySelector(".like-storage");
  
  likeStorage.innerHTML = `
<div class="like">
  <p id="total-likes">${likes}</p>
  </div>

  <div class="price">
  <p>${tblPrice[0]}€/jour 
  </div>`;
  //console.log(likeStorage)
}


async function init() {
  //const ClassImg = document.getElementsByClassName('like-test').id
  //console.log(ClassImg)
  const idPhotographer = parseInt(
    new URL(location.href).searchParams.get("index", 10)
  );
  if (Number.isNaN(idPhotographer)) {

    //redirection
    window.location.href = "index.html";
  
  }
  //fonction qui recupere les infos du photographe sinon redirection
  console.log(idPhotographer);
  getPhotographerHeader(idPhotographer);
  const media = await getMedia(idPhotographer);
  getTotalLikes(media);

}

//systeme de tri par popularité

init();
