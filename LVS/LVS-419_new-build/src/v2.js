// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';
import { css } from './components/css2';
import { pageAssemble2 } from './components/pageAssemble2';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

console.log('VEN-419_v2 Preload...');

function init() {

	console.log('VEN-419 Desktop v2');

  // css
  css();

  // page assemble
  pageAssemble2();
  
}


// Initialize experiment
poll('.dashboard-offers__carousel .glide__bullets .glide__bullet--active', init);