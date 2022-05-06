const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'popup__btn-disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement, config);
      toggleButton(inputList, config);
    });
  });
};

function disableSubmitButton(config) {
  const button = Array.from(document.querySelectorAll(config.submitButtonSelector));
  button.forEach((buttonElement) => {
    buttonElement.classList.add(config.inactiveButtonClass)
    buttonElement.setAttribute('disabled', true);
  });
};

function enableSubmitButton(config) {
  const button = Array.from(document.querySelectorAll(config.submitButtonSelector));
  button.forEach((buttonElement) => {
    buttonElement.classList.remove(config.inactiveButtonClass)
    buttonElement.removeAttribute('disabled', true);
  });
};

function hasInvalidInput(inputList) {
  return inputList.some(function(input) {
    return !input.validity.valid
  })
}


//добавить и при открытии попапа 
function toggleButton(inputList, config) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(config)
  } else {
    enableSubmitButton(config)
  }
}

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

enableValidation(config);