// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // change desktop BG image
  qs('.hero--banner__desktop .img-holder > img').setAttribute('src', 'https://images.emailaptitude.com/factor/2020/April/CartAbandon1/reduced/V1-desktop%20banner.jpg');

  // change mobile BG image
  qs('.hero--banner__mobile .img-holder > img').setAttribute('src', 'https://images.emailaptitude.com/factor/2020/April/CartAbandon1/reduced/V1-mobile%20banner.jpg');


  // change 1st and 2nd line in hero text
  qs('.hero--banner__content__title p:nth-child(1)').innerText = '#1 Vet-Recommended';
  qs('.hero--banner__content__title p:nth-child(2)').innerText = 'Fresh Food For Dogs';

  
  // remove class from hero text to clear styling
  qs('.hero--banner__content__details').classList.remove('center-center');

  
  // create new element for subtext
  const subtext = document.createElement('div');
  subtext.classList.add('hero--banner__content__subtext');
  subtext.innerText = ' #1 Vet-recommended is based on a survey of 16,000 vets conducted in July 2019 by NRBI';
  qs('.hero--banner__content').appendChild(subtext);

  
}


// Initialize experiment
poll('.hero--banner__content__buttons', init);