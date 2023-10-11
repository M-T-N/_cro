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
      #persistent-nav-banner {
        transition: 0.3s ease-in;
      }
      .scroll-hidden {
        transform: translateY(-65px);
      }
      .timex .primary-logo {
        transform: translateY(5px);
      }
      .mini-cart-link {
        transform: translateY(7px);
      }
    </style>
  `
  );

  let lastScrollPosition = window.pageYOffset;
  const headerContainer = document.querySelector('#persistent-nav-banner');

  function scrollHide() {
    const newScrollPosition = window.pageYOffset;

    // upward-code  -- show the search bar
    if (lastScrollPosition > newScrollPosition) {
      headerContainer.classList.remove('scroll-hidden');
    }

    // downward-code -- hide search bar
    else if (
      lastScrollPosition < newScrollPosition &&
      window.pageYOffset > 110
    ) {
      headerContainer.classList.add('scroll-hidden');
    }

    lastScrollPosition = newScrollPosition;
  }

  window.addEventListener('scroll', scrollHide);
}

poll('#persistent-nav-banner', init);
