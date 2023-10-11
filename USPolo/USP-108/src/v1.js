// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  console.log('USP-108');
  let minicartFreeship;
  let shopbagFreeship;
  // shipping threshold amount
  const threshold = 75;

  // current order subtotal, split and converted to num
  let subTotal;
  function getSubTotal() {
    return (subTotal = parseFloat(
      qs('.ajax-cart__subtotal .money').innerHTML.split('$')[1].split(' ')[0]
    ));
  }

  // add div for minicart freeship msg
  function addMinicartFreeship(msg) {
    qs('.ajax-cart__subtotal').insertAdjacentHTML(
      'afterend',
      `<div class="minicart__freeship">${msg}</div>`
    );
    minicartFreeship = qs('.minicart__freeship');
  }

  function addShopbagFreeship(msg) {
    qs('.heading-wrapper--cart-page .heading-divider').insertAdjacentHTML(
      'afterend',
      `<div class="shopbag__freeship">${msg}</div>`
    );
    shopbagFreeship = qs('.shopbag__freeship');
  }

  // free shipping nodes to update text
  const headerBanner = qs('.announcement-bar__text p:not(.buttons)');

  // function to swap shipping text
  function freeShip() {
    getSubTotal();
    const untilFree = (threshold * 10 - subTotal * 10) / 10;
    const untilFreeShipMsg = `You're $${untilFree.toFixed(
      2
    )} away from getting free shipping!`;
    const freeShipMsg = 'Congrats! You get free standard shipping.';

    if (subTotal > threshold) {
      headerBanner.innerText = freeShipMsg;
      if (qsa('.minicart__freeship').length > 0) {
        minicartFreeship.innerText = freeShipMsg;
      } else {
        addMinicartFreeship(freeShipMsg);
      }
      if (qsa('.shopbag__freeship').length > 0) {
        shopbagFreeship.innerText = freeShipMsg;
      } else {
        addShopbagFreeship(freeShipMsg);
      }
    } else {
      headerBanner.innerText = untilFreeShipMsg;
      if (qsa('.minicart__freeship').length > 0) {
        minicartFreeship.innerText = untilFreeShipMsg;
      } else {
        addMinicartFreeship(untilFreeShipMsg);
      }
      if (qsa('.shopbag__freeship').length > 0) {
        shopbagFreeship.innerText = untilFreeShipMsg;
      } else {
        addShopbagFreeship(untilFreeShipMsg);
      }
    }
  }

  // run the function on pageload
  freeShip();

  // set mutation observer to watch price change on cart page
  const target = document.querySelector('.header-cart__count');

  const config = {
    childList: true,
  };

  // subscriber function
  function subscriber(mutations) {
    mutations.forEach(function (mutation) {
      freeShip();
      console.log('CHANGED!');
    });
  }

  // instantiating observer
  const observer = new MutationObserver(subscriber);

  // observing target
  observer.observe(target, config);
}

// Initialize experiment
poll('.ajax-cart__subtotal .money', init);
