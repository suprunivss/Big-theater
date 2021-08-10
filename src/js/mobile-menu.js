(function () {
  const openButton = document.querySelector('.header__button');
  const menu = document.querySelector('.burger__menu');

  function closeMenuHandler(event) {
    const isBurgerMenu = event.target.closest('.burger__menu');
    const isCloseButton = event.target.closest('.burger__button');

    if (isBurgerMenu && !isCloseButton) return;

    openButton.classList.remove('header__button_active');
    menu.classList.remove('burger__menu_active');

    document.removeEventListener('click', closeMenuHandler);
  }

  openButton.addEventListener('click', event => {
    event.stopPropagation();

    openButton.classList.toggle('header__button_active');
    menu.classList.toggle('burger__menu_active');

    document.addEventListener('click', closeMenuHandler);
  });
})();
