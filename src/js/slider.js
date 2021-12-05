const switchImg = document.querySelector('.carousel__nav');
const switchImgLeft = switchImg.querySelector('.carousel__button-left');
const switchImgRight = switchImg.querySelector('.carousel__button-right');


switchImg.addEventListener('click', (e) => {
    if(e.target === switchImgLeft) {
        previousSlide();
    } else if(e.target === switchImgRight) {
        nextSlide();
    }
})

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".carousel__item");
    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.opacity = 0;
    }

    slides[slideIndex - 1].style.opacity = 1;
}