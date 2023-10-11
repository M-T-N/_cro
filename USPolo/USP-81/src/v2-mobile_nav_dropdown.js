// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import style from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


  function init() {

    qsa('#mobile_menu > .sublink > a').forEach(function(i){
      
      // stop link from going to new page
      i.addEventListener('click', event => event.preventDefault());

    });


    
  }
  // Initialize experiment
  poll('li[data-mobile-dropdown-rel="clearance"]', init);

