// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';
import { css2 } from './components/css2';
import { hero } from './components/hero';
import { featured } from './components/featured';
import { offers } from './components/offers2';
import { cardSorter } from './components/cardSorter';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // inject css
  css2();

  // new hero
  hero();

  // featured section
  featured();

  // offers
  offers();

  // card sorter
  cardSorter();
}


// Initialize experiment
poll('.globalfooter', init);