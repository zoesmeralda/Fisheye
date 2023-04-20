function lightboxFactory(data) {
    const { title, url, image} = data
    function lightboxDom() {
    const lightboxContainer = document.createElement("article");
    lightboxContainer.innerHTML = "";
    lightboxContainer.innerHTML = `
    <div id="myModal" class="modal">
    <span class="close cursor" onclick="closeZoom()">&times;</span>
    <div class="modal-content">
  
      <div class="mySlides">
        <div class="numbertext">1 / 4</div>
        <img src="${image}" style="width:100%"onclick="zoom()" >
      </div>
  
      <div class="mySlides">
        <div class="numbertext">2 / 4</div>
        <img src="${image}" style="width:100%"onclick="zoom()" >
      </div>
  
      <div class="mySlides">
        <div class="numbertext">3 / 4</div>
        <img src="${image}" style="width:100%" onclick="zoom()">
      </div>
  
      <div class="mySlides">
        <div class="numbertext">4 / 4</div>
        <img src="${image}" style="width:100%"onclick="zoom()" >
      </div>

    <div>
    <img src="${url}" alt="${title}" tabindex="0" class="modalLightbox">
    <p tabindex="0" class="modalLightbox">${title}</p>
    </div>
    `
    return lightboxContainer
    }
    
    return {title, url, image, lightboxDom, lightboxFactory}
}
// 2eme partie du lien genere visuel lightbox refaire une boucle comme dans ph.js pour recup img