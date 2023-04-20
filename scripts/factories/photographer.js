function photographerFactory(data) {
  const { id, city, country, tagline, price, name, portrait, tags } = data

  const picture = `assets/photographers/${portrait}`
//Carte photographe page accueil
  function getUserCardDOM() {
    const photographersSection = document.createElement('article')
    photographersSection.innerHTML = `
        <div class="portrait">
        <a href="photographer.html?index=${id}" aria-label="image de ${name}" tabindex="0">
        <article data-filter = "${id}" class="photographer_article">
        <img src="assets/photographers/${portrait}" alt="${name}">
        <h2>${name}</h2>
        <h3 aria-label="${city}, ${country}">${city}, ${country}</h3>
        <p  aria-label="${tagline}">${tagline}</p>
        <p aria-label="${price}€/jour">${price}€/jour</p>
        </article>
        </a>
        </div>
        `
    return photographersSection
  }
//header photographe page photographer
  function getUserHeader() {
    const photographerHeader = document.createElement('article')
    photographerHeader.innerHTML = `
    <div>
    <h2>${name} </h2>
    <div class="identite" tabindex="0">
<h3 role="text">${city}, ${country} </h3>
<p>${tagline}</p>
<p class="price">${price}€/jour</p>
</div>
<div id="bloc-contact">
<button role="buttons" class="contact_button" onclick="displayModal()" aria-label="contact-me">Contactez-Moi </button>
</div>
</div>
<div id="bloc-picture">
<img role="image" src="assets/photographers/${portrait}" srcset="assets/photographers/${portrait}" alt="${name}" tabindex="0">
</div>
`
    return photographerHeader
  }


  return { name, picture, getUserCardDOM, getUserHeader }
}
//photographe + nom aria label