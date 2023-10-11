// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import lowerSection from '../mods/lowerSection';
import productRight from '../mods/productRight';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  // add lower section
  lowerSection();

  // right section
  productRight();

  // add event listener...
  qsa('#ui-id-1.tin__ui-id, #ui-id-2.tin__ui-id').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      const tab1 = qs('.tin__product-info #product-info-tab-1');
      const tab2 = qs('.tin__product-info #product-info-tab-2');
      if (el.id == 'ui-id-1') {
        tab1.style.display = 'block';
        qs(
          '.tin__product-info .ui-tabs-nav li[aria-controls="product-info-tab-1"]'
        ).classList.add('ui-state-active');
        tab2.style.display = 'none';
        qs(
          '.tin__product-info .ui-tabs-nav li[aria-controls="product-info-tab-2"]'
        ).classList.remove('ui-state-active');
      }
      if (el.id == 'ui-id-2') {
        tab1.style.display = 'none';
        qs(
          '.tin__product-info .ui-tabs-nav li[aria-controls="product-info-tab-1"]'
        ).classList.remove('ui-state-active');
        tab2.style.display = 'block';
        qs(
          '.tin__product-info .ui-tabs-nav li[aria-controls="product-info-tab-2"]'
        ).classList.add('ui-state-active');
      }
    });
  });
}

// Initialize experiment
poll('.product-top-info', init);
