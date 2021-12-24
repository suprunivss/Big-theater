import { validateText, validateLength, validateEmail, validatePhone } from './utils/index';
import { requireError } from './constant';

const formElement = document.querySelector('.js-form');
const formInputElements = document.querySelectorAll('.js-form-input');
const button = document.querySelector('.js-form-submit');

function validate(target) {
    if (target.required && !target.value.length) {
        return [requireError]
    }

    switch(target.dataset.name) {
        case 'name':
            return [validateText(target.value), validateLength(25, target.value)].filter(Boolean)

        case 'company':
            return [validateText(target.value), validateLength(50, target.value)].filter(Boolean)

        case 'phone':
            return [validatePhone(target.value)].filter(Boolean)

        case 'email':
            return [validateEmail(target.value)].filter(Boolean)

        case 'message':
            return [validateLength(250, target.value)].filter(Boolean)

    }
}

function toggleButton(toggle) {
    button.disabled = toggle;
    button.classList.toggle('js-button', toggle);
}

function checkButton() {
    const isFormError = Boolean(document.querySelector('.form__error_show'));

    toggleButton(isFormError);
}

function validateForm(target) {
    const errors = validate(target);
    const isError = errors.length;
    const parentElement = target.parentElement;
    const errorElement = parentElement.querySelector('.form__error');

    target.classList.toggle('form__item_error', isError);

    errorElement.textContent = isError ? errors[errors.length - 1] : '';
    errorElement.classList.toggle('form__error_show', isError);

    checkButton();
}

formInputElements.forEach(el => {
    el.addEventListener('blur', ({ target }) => {
        validateForm(target);

        target.dataset.touch = 'true';
    })
})

formElement.addEventListener('input', ({ target }) => {
    if (target.dataset.touch === 'true') {
        validateForm(target);
    }
})
