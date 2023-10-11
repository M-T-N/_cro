import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';
import { css } from './components/css';
import { pageAssemble } from './components/pageAssemble';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

	console.log('LVS-423_v1 Mobile');

  // inject css
  css();

	// assemble
	pageAssemble();

}


// Initialize experiment
poll('.globalfooter', init);
