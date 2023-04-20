let errorFirst = document.querySelector(".error-first");
let errorLast = document.querySelector(".error-last");
let errorEmail = document.querySelector(".error-email");
let errorMessage = document.querySelector(".error-message");
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}
function noScroll() {
  const modal = document.getElementById("contact-modal");
  const body = document.querySelector("body");
  if (modal.style.display === "block") {
    body.style.overflowY = "hidden";
    
  }
  console.log("noscroll");
  body.style.overflowY = "hidden";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  const messageValidate = document.getElementById("form-validation");
  const inputBorder = document.querySelectorAll(".input");
  modal.style.display = "none";
  messageValidate.style.display = "none";
  inputBorder.forEach(function (item) {
    item.style.border = "none";
  });
form.reset();

}

async function nomPhotographeModal() {
  console.log("nom")
  const photographerData = await fetch("data/photographers.json");
  const namePhotographer = document.getElementById("name-contact-form");
  namePhotographer.textContent = `
  ${photographerData.name}
  `;
}
function focusMethod() {
  console.log("focus");
  const  focusableElements =
    'button, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector("contact-modal"); // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; 
  // Regex Email
  const myRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //.focus()
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  //check first
  if (first.value.length < 0) {
    //errorMessage = 'Veuillez entrer 2 caractères ou plus pour le champs';
    errorFirst.style.display = "block";
    errorFirst.style.color = "red";
    document.getElementById("first").focus();
    errorFirst.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champs";
    console.log("je suis ici");
  }
  //check last
  else if (last.value.length < 0) {
    errorLast.style.display = "block";
    errorLast.style.color = "red";
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champs";
    //check email
  } else if (myRegex.test(email.value) === false) {
    errorEmail.style.display = "block";
    errorEmail.style.color = "red";
    errorEmail.innerHTML = "Veuillez entrer un email valide";
    //check message
  } else if (message.value.length < 2) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    errorMessage.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champs";
  } else if (message.value.length > 2) {
    closeModal();
  }

  if (first.value.length > 2) {
    errorFirst.style.display = "none";
  }
  if (last.value.length > 2) {
    errorLast.style.display = "none";
  }

  if (myRegex.test(email.value) === true) {
    errorEmail.style.display = "none";
  }

  //si first =erreur donc ligne du dessus avc get elemnt
  //else si last = erreur focus que last et ainsi de suite (else if )
  //si dernier champs pas d'erreur envoyer closemodale
  //activer le message d'erreur chaque ligne
}
function initEvenement() {
  window.addEventListener("keydown", function (event) {
    console.log("*********************************");
    if (event.key === "Escape", "Enter") {
      closeModal();
    }

  });
}
/*noScroll();
nomPhotographeModal();
initEvenement();
console.log("noscroll");*/