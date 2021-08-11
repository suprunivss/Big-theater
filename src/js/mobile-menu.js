(function () {
  const openButton = document.querySelector('.header__burger-btn');
  const menu = document.querySelector('.mobile__menu');

  function closeMenuHandler(event) {
    const isBurgerMenu = event.target.closest('.mobile__menu');
    const isCloseButton = event.target.closest('.mobile__button');

    if (isBurgerMenu && !isCloseButton) return;

    openButton.classList.remove('header__burger-btn_active');
    menu.classList.remove('mobile__menu_active');

    document.removeEventListener('click', closeMenuHandler);
  }

  openButton.addEventListener('click', event => {
    event.stopPropagation();

    openButton.classList.toggle('header__burger-btn_active');
    menu.classList.toggle('mobile__menu_active');

    document.addEventListener('click', closeMenuHandler);
  });
})();
