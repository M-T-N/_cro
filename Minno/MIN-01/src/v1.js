// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import style from './styles/v1.scss'



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // change subhead text
  qs('.woh-pricing-copy').innerText = 'Join thousands of Christian families who already subscribe and start streaming or downloading our shows and devotionals!';

  // change button to email form
  qs('.woh-button').innerHTML = `
    <form class="netflix-form__wrap" method="GET" action="https://www.gominno.com/signup?sub_level=minnomonthly" _lpchecked="1">
	    <input type="email" name="email" placeholder="Email Address" required="">
	    <input type="submit" value="Try FREE for 7 Days">
    </form>
  `;
  
}


// Initialize experiment
poll('.woh-button', init);