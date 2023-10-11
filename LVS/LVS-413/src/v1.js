// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';
import { css } from './components/css';
import { hero } from './components/hero';
import { featured } from './components/featured';
import { offers } from './components/offers';
import { cardSorter } from './components/cardSorter';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // inject css
  css();

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