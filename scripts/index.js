let editButton = document.querySelector('.profile__btn-edit');
let closeButton = document.querySelector('.popup__btn-close');

let popupConteiner = document.querySelector('.popup');

let formElement = document.querySelector('.popup__body');

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__subheader');

let nameDefault = document.querySelector('.profile__header');
let jobDefault = document.querySelector('.profile__subheader');


function togglePopup() {
  popupConteiner.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click', togglePopup);



function formSubmitHandler(evt) {
  evt.preventDefault();


  nameDefault.textContent = nameInput.value;
  jobDefault.textContent = jobInput.value;

  togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);