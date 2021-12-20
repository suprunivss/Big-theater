const formElement = document.querySelector('.js-form');
const formItems = document.querySelectorAll('.js-form-input');
const popupSuccess = document.querySelector('.js-popup-success');
const popupSuccessCloseButton = popupSuccess.querySelector('.js-popup-close-button');
const popupError = document.querySelector('.js-popup-error');
const popupErrorCloseButton = popupError.querySelector('.js-popup-close-button');
const popupBackground = document.querySelector('.js-popup-background');


export function onCloseSuccessPopup() {
  popupSuccess.classList.remove('popup__active');
  popupBackground.classList.remove('popup-background-active');
  document.body.classList.remove('overflow-hidden');

  popupSuccessCloseButton.removeEventListener('click', onCloseSuccessPopup);
}

export function onCloseErrorPopup() {
  popupError.classList.remove('popup__active');
  popupBackground.classList.remove('popup-background-active');
  document.body.classList.remove('overflow-hidden');

  popupErrorCloseButton.removeEventListener('click', onCloseErrorPopup);
}

popupSuccess.addEventListener('click', ({ target }) => {
  if (target.closest(".js-popup-success") && !target.closest(".js-popup-wrapper")) {
    onCloseSuccessPopup();
  }
})

popupError.addEventListener('click', ({ target }) => {
  if (target.closest(".js-popup-success") && !target.closest(".js-popup-wrapper")) {
    onCloseErrorPopup();
  }
})

function onSuccessCallback() {
  onShowPopup(popupSuccess)

  popupSuccessCloseButton.addEventListener('click', onCloseSuccessPopup)
}

function onErrorCallback() {
  onShowPopup(popupError)

  popupErrorCloseButton.addEventListener('click', onCloseErrorPopup)

}

document.addEventListener('keydown', ({ code }) => {
  if (code === 'Escape') {
    onCloseSuccessPopup();
    onCloseErrorPopup();
  }
})

formElement.addEventListener('submit', async (event) => {
  event.preventDefault();

  let objValue = {};

  formItems.forEach(el => {
    objValue[el.dataset.name] = el.value;
    el.disabled = true;
  })

  const url = new URL('/form', process.env.APP_PATH);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const request = new Request(url.toString(), {
    headers,
    method: 'POST',
    body: JSON.stringify(objValue)
  });

  try {
    const response = await fetch(request)
    if(response.ok) {
      onSuccessCallback()

      formItems.forEach(el => {
        el.value = '';
      })
    } else {
      const {status, code} = await response.json()
      throw new Error(status || code)
    }

  } catch (e) {
    onErrorCallback()
  }

  formItems.forEach(el => {
    el.disabled = false;
  })

})
