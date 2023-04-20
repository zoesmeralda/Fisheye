async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  console.log('hufcn')

  const photographers = await fetch('data/photographers.json')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })

    .then((data) => {
      console.log('data', data)
      return data
    })
  return photographers
  // et bien retourner le tableau photographers seulement une fois
  //   return {
  //     photographers: [...photographers, ...photographers, ...photographers],
  //   }
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = new photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  console.log("tggtft", photographers)
  displayData(photographers)
}

init()
