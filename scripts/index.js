const profilePopup = document.querySelector('.popup_place_profile');
const imagePopup = document.querySelector('.popup_place_foto');
const newPlacePopup = document.querySelector('.popup_place_picture');
const popupPicView = document.querySelector('.popup__imgpic');
const popupPicCaption = document.querySelector('.popup__caption');
const buttonEdit = document.querySelector('.profile__btn-edit');
const buttonAdd = document.querySelector('.profile__btn-add');
const buttonProfileClose = profilePopup.querySelector('.popup__btn-close');
const buttonImageClose = imagePopup.querySelector('.popup__btn-close');
const buttonPlaceClose = newPlacePopup.querySelector('.popup__btn-close');
const formSelectorPlace = newPlacePopup.querySelector('.popup__body-picture');
const nameInput = profilePopup.querySelector('.popup__input_place_top');
const jobInput = profilePopup.querySelector('.popup__input_place_bottom');
const nameDefault = document.querySelector('.profile__header');
const jobDefault = document.querySelector('.profile__subheader');
const namePlaceInput = imagePopup.querySelector('.popup__input_place_top');
const srcCardInput = imagePopup.querySelector('.popup__input_place_bottom');
const cardContainer = document.querySelector('.elements');
const template = document.querySelector('.template');
const formSelectorProfile = profilePopup.querySelector('.popup__form');
const formSelectorImage = imagePopup.querySelector('.popup__form');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileEdit(evt) {
  evt.preventDefault();
  openPopup(profilePopup);
  nameInput.value = nameDefault.textContent;
  jobInput.value = jobDefault.textContent;

}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  nameDefault.textContent = nameInput.value;
  jobDefault.textContent = jobInput.value;
  closePopup(profilePopup);
}

function renderCard() {
  const html = initialCards.map(createCard);
  cardContainer.append(...html);
}

function handlePopupNewplace(item) {
  openPopup(newPlacePopup);
  popupPicView.src = item.link;
  popupPicView.alt = item.name;
  popupPicCaption.textContent = item.name;

}

function handlePlaceCardAdd(evt) {
  evt.preventDefault();
  const elements = createCard({
    name: namePlaceInput.value,
    link: srcCardInput.value
  });
  cardContainer.prepend(elements);
  namePlaceInput.value = "";
  srcCardInput.value = "";
  closePopup(imagePopup);
}

function handleRemoveElement(evt) {
  const element = evt.target.closest('.element')
  element.remove();
}

function handleLikeClick(evt) {
  evt.target.classList.toggle('element__like_active');
}

function createCard(item) {
  const elementTemplateGet = template.content.cloneNode(true);
  const header = elementTemplateGet.querySelector('.element__header');
  const srcPicture = elementTemplateGet.querySelector('.element__img');
  const buttonRemove = elementTemplateGet.querySelector('.element__garbage');
  const buttonLike = elementTemplateGet.querySelector('.element__like');
  header.textContent = item.name;
  srcPicture.src = item.link;
  srcPicture.alt = item.name;
  buttonRemove.addEventListener('click', handleRemoveElement);
  buttonLike.addEventListener('click', handleLikeClick);
  srcPicture.addEventListener('click', () => handlePopupNewplace(item));
  return elementTemplateGet;
}

renderCard();

buttonProfileClose.addEventListener('click', function() {
  closePopup(profilePopup);
});

buttonAdd.addEventListener('click', function() {
  openPopup(imagePopup);
});

buttonImageClose.addEventListener('click', function() {
  closePopup(imagePopup);
});

buttonPlaceClose.addEventListener('click', function() {
  closePopup(newPlacePopup);
});

document.addEventListener('keydown', (event) => {
  if (event.code == 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
});

formSelectorProfile.addEventListener('submit', handleProfileSubmit);
formSelectorImage.addEventListener('submit', handlePlaceCardAdd);
buttonEdit.addEventListener('click', handleProfileEdit);