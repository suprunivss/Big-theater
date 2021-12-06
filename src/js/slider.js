const navigationWrapper = document.querySelector('.js-carousel-navigation');
const sliders = document.querySelector('.js-carousel-preview');
const visibleClassName = 'carousel__item_visible';

navigationWrapper.addEventListener('click', (event) => {
    const sliderVisible = sliders.querySelector(`.${visibleClassName}`);

    sliderVisible.classList.remove(visibleClassName);

    if (event.target.closest('.js-carousel-nav-left')) {
        (sliderVisible.previousElementSibling || sliders.lastElementChild).classList.add(visibleClassName);
    } else if (event.target.closest('.js-carousel-nav-right')) {
        (sliderVisible.nextElementSibling || sliders.firstElementChild).classList.add(visibleClassName);
    }
})
