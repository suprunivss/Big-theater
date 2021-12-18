import { throttle } from './utils/throttle';

const headerElement = document.querySelector('.js-header');

const onDocumentMouseWheel = () => {
  const isScrolled = document.documentElement.scrollTop >= 1;
  headerElement.classList.toggle('header__scroll', isScrolled);
}

const onDocumentMouseWheelThrottling = throttle(onDocumentMouseWheel, 500);

document.addEventListener('scroll', onDocumentMouseWheelThrottling);
