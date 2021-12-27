import { setSuccessSubmitSubscriber } from './form-submit';

const formInputElements = document.querySelectorAll('.js-form-input');

function resetSavedValues() {
  formInputElements.forEach(input => {
    localStorage.removeItem(input.dataset.name);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  formInputElements.forEach(input => {
    const savedValue = localStorage.getItem(input.dataset.name);

    if (savedValue) {
      input.value = savedValue;
    }

    input.addEventListener('input', ({ target: { dataset, value } }) => {
      localStorage.setItem(dataset.name, value);
    })
  })
})

setSuccessSubmitSubscriber(resetSavedValues);
