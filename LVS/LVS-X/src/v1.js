import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import customPoll from './utils/customPoll';
import section from './html/cardsV1.html';
import styles from './styles/v1.scss';
import slickInit from './mods/slickInit';
import videoInit from './mods/videoInit';
import arrowClick from './mods/arrowClick';
import checkReady from './utils/checkReady';
import setMax from './mods/setMax';

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {

  // LOG
  console.log('LVS-274 | HP > New Suite Section v1');

  // Insert new section
  qs('.mod-tower-pathing').insertAdjacentHTML('beforebegin', section);

  // Start the slick sliders
  poll('.slick-initialized', slickInit);

  // Re-init video
  checkReady(videoInit);

  // Event Listners for counter
  qsa('.tin_suites-flex .slick-arrow').forEach(el => el.addEventListener('click', arrowClick));

  checkReady(setMax);

}

// Initialize experiment
poll('.mod-tower-pathing', init);