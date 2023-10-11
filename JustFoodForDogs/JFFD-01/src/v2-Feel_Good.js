// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // change desktop BG image
  qs('.hero--banner__desktop .img-holder > img').setAttribute('src', 'https://images.emailaptitude.com/factor/2020/April/CartAbandon1/reduced/V2-desktop%20banner.jpg');

  // change mobile BG image
  qs('.hero--banner__mobile .img-holder > img').setAttribute('src', 'https://images.emailaptitude.com/factor/2020/April/CartAbandon1/reduced/V2-mobile%20banner.jpg');


  // change 1st and 2nd line in hero text
  qs('.hero--banner__content__title p:nth-child(1)').innerText = 'Feel Good About Your Dog\'s Nutrition';
  qs('.hero--banner__content__title p:nth-child(2)').remove();

  
  // remove class from hero text to clear styling
  qs('.hero--banner__content__details').classList.remove('center-center');

  
}


// Initialize experiment
poll('.hero--banner__content__buttons', init);