// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  qs('.container').outerHTML = `
     <div class="freeTrial">
          <div class="freeTrial__img">
               <img src="https://i.imgur.com/wB0X2Yq.png" alt="Minno Max">
               <h4>Just 3 Steps!</h4>
          </div>
          <div class="freeTrial__heading">
               <h2>Create Your Account to Start Your Free Trial</h2>
          </div>
          <div class="freeTrial__copy">
               <p>With Minno, you can instantly stream or download thousands of hand-picked episodes that reflect your faith and values. Plus, get weekly devotionals, coloring pages, and more for just $6.99/month after your free trial! There’s no obligation - cancel anytime!</p>
          </div>
          <div class="freeTrial__cta">
               <a href="https://kids.gominno.com/signup?sub_level=minnomonthly&_ga=2.191788138.1338218545.1645051268-1089571665.1611687325" class="button monthly">Next</a>
          </div>
     </div>
  `;
  
}


// Initialize experiment
poll('.container', init);