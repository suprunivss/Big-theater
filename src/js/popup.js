const buttonAfisha = document.querySelector('.js-button-afisha');
const previewWrapper = document.querySelector('.js-preview-photos')
const popup = document.querySelector('.js-popup');
const closePopupButton = popup.querySelector('.js-popup-close-button');
const popupBackground = document.querySelector('.js-popup-background');

function onClosePopup() {
    popup.classList.remove('popup__active');
    popupBackground.classList.remove('popup-background-active');
    document.body.classList.remove('overflow-hidden');

    closePopupButton.removeEventListener('click', onClosePopup);
}

function onShowPopup() {
    popup.classList.add('popup__active');
    popupBackground.classList.add('popup-background-active');
    document.body.classList.add('overflow-hidden');
}

previewWrapper.addEventListener('click', ({ target }) => {
    if (target.closest('.js-preview-button')) {
        onShowPopup();

        closePopupButton.addEventListener('click', onClosePopup);
    }
})

buttonAfisha.addEventListener('click', () => {
    onShowPopup();

    closePopupButton.addEventListener('click', onClosePopup);
})

popup.addEventListener('click', ({ target }) => {
    if (target.closest(".js-popup") && !target.closest(".js-popup-wrapper")) {
        onClosePopup();
    }
})

document.addEventListener('keydown', ({ code }) => {
    if (code === 'Escape') {
        onClosePopup();
    }
})

