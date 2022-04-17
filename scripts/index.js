const ProfilePopup = document.querySelector('.popup_place_profile');
const ImagePopup = document.querySelector('.popup_place_foto');
const NewPlacePopup = document.querySelector('.popup_place_picture');
const popupPicView = document.querySelector('.popup__imgpic');
const popupPicCaption = document.querySelector('.popup__caption');
const buttonEdit = document.querySelector('.profile__btn-edit');
const buttonAdd = document.querySelector('.profile__btn-add');
const buttonProfileClose = ProfilePopup.querySelector('.popup__btn-close');
const buttonImageClose = ImagePopup.querySelector('.popup__btn-close');
const buttonPlaceClose = NewPlacePopup.querySelector('.popup__btn-close');
const formElementProfile = ProfilePopup.querySelector('.popup__body');
const formElementImage = ImagePopup.querySelector('.popup__body');
const formElementPlace = NewPlacePopup.querySelector('.popup__body-picture');
const nameInput = ProfilePopup.querySelector('.popup__text_place_top');
const jobInput = ProfilePopup.querySelector('.popup__text_place_bottom');
const nameDefault = document.querySelector('.profile__header');
const jobDefault = document.querySelector('.profile__subheader');
const namePlaceInput = ImagePopup.querySelector('.popup__text_place_top');
const srcCardInput = ImagePopup.querySelector('.popup__text_place_bottom');
const cardContainer = document.querySelector('.elements');
const template = document.querySelector('.template');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileEdit(evt) {
  evt.preventDefault();
  openPopup(ProfilePopup);
  nameInput.value = nameDefault.textContent;
  jobInput.value = jobDefault.textContent;
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  nameDefault.textContent = nameInput.value;
  jobDefault.textContent = jobInput.value;
  closePopup(ProfilePopup);
}

function renderCard() {
  const html = initialCards.map(createCard);
  cardContainer.append(...html);
}

function handlePopupNewplace(item) {
  openPopup(NewPlacePopup);
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
  closePopup(ImagePopup);
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
  closePopup(ProfilePopup);
});

buttonAdd.addEventListener('click', function() {
  openPopup(ImagePopup);
});

buttonImageClose.addEventListener('click', function() {
  closePopup(ImagePopup);
});

buttonPlaceClose.addEventListener('click', function() {
  closePopup(NewPlacePopup);
});

formElementProfile.addEventListener('submit', handleProfileSubmit);
formElementImage.addEventListener('submit', handlePlaceCardAdd);
buttonEdit.addEventListener('click', handleProfileEdit);