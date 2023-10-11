// Imports
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

	console.log('LVS-423_v1 Desktop');

  // inject css
  css();


	// wrap in poll funciton for jquery
	function pollJquery() {
		setTimeout(function(){
			if (window.jQuery) {
					// ASSEMBLE!
					pageAssemble();
			} else {
				pollJquery()
			}
		}, 50);
	}
	// fire it
	pollJquery();



}


// Initialize experiment
poll('.globalfooter', init);