// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';
import { css2 } from './components/css2';
import { pageAssemble2 } from './components/pageAssemble2';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {
	
	console.log('LVS-423_v2 Desktop');

  // inject css
  css2();

	// wrap in poll funciton for jquery
	function pollJquery() {
		setTimeout(function(){
			if (window.jQuery) {
					// ASSEMBLE!
					pageAssemble2();
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