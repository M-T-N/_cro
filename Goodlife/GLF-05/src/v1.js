// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  qs('head').insertAdjacentHTML(
    'beforeend',
    `
    <style>
      .header-mobile {
        transition: 0.3s ease-in;
      }
      .scroll-hidden {
        transform: translateY(-100px);
      }
    </style>
  `
  );

  const headerContainer = qs('.header-mobile');

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      // scroll up show header
      headerContainer.classList.remove('scroll-hidden');
    } else if (prevScrollpos < currentScrollPos && window.pageYOffset > 110) {
      // scroll dow hide header
      headerContainer.classList.add('scroll-hidden');
    }
    prevScrollpos = currentScrollPos;
  };
}

// Initialize experiment
poll('.header-mobile', init);
