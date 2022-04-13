const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupConteiner = document.querySelector('.popup_place_profile');
const popupConteinerFoto = document.querySelector('.popup_place_foto');
const popupConteinerPic = document.querySelector('.popup_place_picture');
const popupPicView = document.querySelector('.popup__imgpic');
const popupPicCaption = document.querySelector('.popup__caption');
const editButton = document.querySelector('.profile__btn-edit');
const addButton = document.querySelector('.profile__btn-add');


const closeButton = popupConteiner.querySelector('.popup__btn-close');
const closeButtonFoto = popupConteinerFoto.querySelector('.popup__btn-close');
const closeButtonPic = popupConteinerPic.querySelector('.popup__btn-close');

const formElement = popupConteiner.querySelector('.popup__body');
const formElementFoto = popupConteinerFoto.querySelector('.popup__body');
const formElementPic = popupConteinerPic.querySelector('.popup__body-picture');

const nameInput = document.querySelector('.popup__text_place_name');
const jobInput = document.querySelector('.popup__text_place_aboutyou');
const nameDefault = document.querySelector('.profile__header');
const jobDefault = document.querySelector('.profile__subheader');


const cardContainer = document.querySelector('.elements');
const template = document.querySelector('.template');


function togglePopup() {
  if (!popupConteiner.classList.contains('popup_opened')) {
    nameInput.value = nameDefault.textContent;
    jobInput.value = jobDefault.textContent;
  }
  popupConteiner.classList.toggle('popup_opened');
}

function togglePopupFoto() {
  popupConteinerFoto.classList.toggle('popup_opened');
}

function closePopupPic() {
  popupConteinerPic.classList.remove('popup_opened');
}


editButton.addEventListener('click', togglePopup);
addButton.addEventListener('click', togglePopupFoto);
closeButton.addEventListener('click', togglePopup);
closeButtonFoto.addEventListener('click', togglePopupFoto);
closeButtonPic.addEventListener('click', closePopupPic);



function formSubmitHandler(evt) {
  evt.preventDefault();

  nameDefault.textContent = nameInput.value;
  jobDefault.textContent = jobInput.value;

  togglePopup();
}

function formSubmitHandlerFoto(evt) {
  evt.preventDefault();
  const namePlaceInput = popupConteinerFoto.querySelector('.popup__text_place_name').value;
  const srcCardInput = popupConteinerFoto.querySelector('.popup__text_place_aboutyou').value;
  const elements = getElement({ name: namePlaceInput, link: srcCardInput });
  cardContainer.prepend(elements);
  togglePopupFoto();
}

formElement.addEventListener('submit', formSubmitHandler);
formElementFoto.addEventListener('submit', formSubmitHandlerFoto);

function render() {
  const html = initialCards.map(getElement);
  cardContainer.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const header = getElementTemplate.querySelector('.element__header');
  const srcPicture = getElementTemplate.querySelector('.element__img');
  const removeButton = getElementTemplate.querySelector('.element__garbage');
  const likeButton = getElementTemplate.querySelector('.element__like');
  header.textContent = item.name;
  srcPicture.src = item.link;

  removeButton.addEventListener('click', removeElement);
  likeButton.addEventListener('click', toggleLike);
  srcPicture.addEventListener('click', function() {
    popupPicView.src = item.link;
    popupPicView.alt = item.name;
    popupPicCaption.textContent = item.name;
    addPopupPic(formElementPic);
  });

  return getElementTemplate;
}

function removeElement(evt) {
  const element = evt.target.closest('.element')
  element.remove();
}

function toggleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function addPopupPic() {
  popupConteinerPic.classList.add('popup_opened');
}

function handlePopupimg(evt) {
  addPopupPic();
}

render();