function photographerMediaFactory(data) {
  const { title, image, likes, photographerId, id, name, video } = data;

  const mediaPicture = `assets/images/${image}`;

  // the photoNumber is used to identify the photo
  //affichage des medias du photographe
  function getUserMedia(photoNumber) {
    const photographerMedia = document.createElement("article");
    if (video) {
      //faire une variable avec le html
      photographerMedia.innerHTML = `
        <article class="media-card">
        <div class = "bloc-img">
        <button onclick="zoom(${photoNumber})">
        
        <video aria-label="video" controls width="250" class="for-zoom">
        <source src="assets/images/${photographerId}/${video}" alt="video de ${photographerId}
        type="video/mp4">
        </video> </button>
        </div>
        <div class="text-likes">
        <p>${title}</p>
        <div class ="heart-likes">
        <p class="p-likes" id="p-likes">${likes}</p>
        <button class="like-test" name="bouton j'aime" id="heart-card-${id}" style="background:white;border:none;margin-bottom:10px;">
        <i class="fa-regular fa-heart" ></i>
        </button>
        </div>
        </div>
        </article>
        `;
    } else {
      photographerMedia.innerHTML = `<article class="media-card">
    <div class = "bloc-img">
    
    <button onclick="zoom(${photoNumber})"><img tabindex="0" aria-label="${title}, closeup view" role="image-link" class="for-zoom" id="${photoNumber}" src="assets/images/${photographerId}/${image}" alt="photo de ${photographerId}-${title}"></img></button>
    </div>
    <div class="text-likes">
    <p role="text"> ${title}</p>
    <div class ="heart-likes">
    <p class="p-likes" id="p-likes">${likes}</p>
    <button tabindex="0" aria-label="likes" class="like-test" role="button" name="bouton j'aime" id="heart-card-${id}" style="background:white;border:none;margin-bottom:10px;">
    <i class="fa-regular fa-heart" ></i>    
    </button>
    </div>
    </div>
    </article>
        `;
    }

    return photographerMedia;
  }
  return { mediaPicture, getUserMedia };
}

//<button onclick="zoom()"><img class="arrow-video" src="assets/icons/play-button-arrows-svgrepo-com.svg" alt=""><video class="for-zoom"><source src="assets/photographers/${photographerId}/${video}" type="video/mp4" alt="vidéo de ${name}"></video></button>
