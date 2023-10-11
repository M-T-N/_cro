// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import style from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // change subhead text
  qs('.woh-pricing-copy').innerText = 'Join thousands of Christian families who already subscribe and start streaming or downloading our shows and devotionals!';

  // change button text and link
  qs('.woh-button a').setAttribute('href', 'https://www.gominno.com/signup');
  qs('.woh-button a button').innerText = 'Start Your 7 Day Free Trial';
  
}


// Initialize experiment
poll('.woh-button', init);