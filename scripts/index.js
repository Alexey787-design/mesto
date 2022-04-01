const editButton = document.querySelector('.profile__btn-edit');
const closeButton = document.querySelector('.popup__btn-close');

const popupConteiner = document.querySelector('.popup');

const formElement = document.querySelector('.popup__body');

const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__subheader');

const nameDefault = document.querySelector('.profile__header');
const jobDefault = document.querySelector('.profile__subheader');


function togglePopup() {
  nameInput.value = nameDefault.textContent;
  jobInput.value = jobDefault.textContent;
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