const navigationWrapper = document.querySelector('.js__carousel');
const sliders = document.querySelector('.carousel__preview');

navigationWrapper.addEventListener('click', (event) => {
    const sliderVisible = sliders.querySelector('.carousel__item_visible');

    sliderVisible.classList.remove('carousel__item_visible');

    if (event.target.closest('.js__carousel-left')) {
        (sliderVisible.previousElementSibling || sliders.lastElementChild).classList.add('carousel__item_visible');
    } else if (event.target.closest('.js__carousel-right')) {
        (sliderVisible.nextElementSibling || sliders.firstElementChild).classList.add('carousel__item_visible');
    }
})
