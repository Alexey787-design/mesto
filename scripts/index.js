/* let container = document.querySelector('.container'); */
let editButton = document.querySelector('.button_location_profile_edit');
let closeButton = document.querySelector('.button_location_popup_close');
/* let saveButton = document.querySelector('.button_location_popup'); */
let popupConteiner = document.querySelector('.popup');
// Находим форму в DOM
let formElement = document.querySelector('.popup__body');

let nameInput = document.querySelector('.popup__name'); //находим в инпуте введенный заголовок
let jobInput = document.querySelector('.popup__subheader'); //находим в инпуте введеный подзаголовок

let nameDefault = document.querySelector('.profile__header'); //находим обьект, в котором текущий заголовок
let jobDefault = document.querySelector('.profile__subheader'); //находим обьект, в котором текущий подзаголовок


function togglePopup() {
  popupConteiner.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click', togglePopup);

/* function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    togglePopup();
  }
}

popupConteiner.addEventListener('click', onOverlayClick); */

function formSubmitHandler(evt) {
  evt.preventDefault();


  nameDefault.textContent = nameInput.value;
  jobDefault.textContent = jobInput.value;

  togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler); //функция по нажатию кнопки сохранить
/* saveButton.addEventListener('click', formSubmitHandler); */
console.log(jobDefault.textContent);
console.log(nameDefault.textContent);
console.log(nameInput.value);
console.log(jobInput.value);