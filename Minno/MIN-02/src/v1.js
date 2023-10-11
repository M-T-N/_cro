// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  

  // new html for email form
  const emailForm = `
    <div class="thrv_wrapper tin_email">
      <form class="netflix-form__wrap" method="GET" action="https://www.gominno.com/signup?sub_level=minnomonthly" _lpchecked="1">
        <input type="email" name="email" placeholder="Email Address" required="">
        <input type="submit" value="Try FREE for 7 Days">
      </form>
    </div>
  `;

  // insert form after column section
  qs('#tve_editor > .thrv_wrapper:nth-of-type(3) .tve-page-section-in > .thrv_wrapper > .tve-cb >.thrv_wrapper:last-child').insertAdjacentHTML('afterend', emailForm);
}


// Initialize experiment
poll('#tve_editor > .thrv_wrapper:nth-of-type(3) .tve-page-section-in > .thrv_wrapper > .tve-cb >.thrv_wrapper:last-child', init);