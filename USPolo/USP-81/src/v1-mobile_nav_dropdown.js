// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


  function init() {

    qsa('#mobile_menu > .sublink > a').forEach(function(i){
      
      // remove links from top level dropdown
      i.removeAttribute('href');


      function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
            // Windows Phone must come first because its UA also contains "Android"
      
          if (/android/i.test(userAgent)) {
              // simulate click on dropdown arrow when category is clicked
              i.addEventListener('click', function(event){
                // don't add event listener to dropdown arrow
                if (i !== event.target) {
                  return;
                } else {
                  i.querySelector('.icon-down-arrow').click();
                }
              });
          }
      
          // iOS detection from: http://stackoverflow.com/a/9039885/177710
          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
              // only fire 1 event to prevent iOS from firing twice, closing the dropdown
              let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

              // simulate click on dropdown arrow when category is clicked
              i.addEventListener(touchEvent, function(event){
                // don't add event listener to dropdown arrow
                if (i !== event.target) {
                  return;
                } else {
                  i.querySelector('.icon-down-arrow').click();
                }
              });
          }
    
      };
      getMobileOperatingSystem();


    });


    
  }
  // Initialize experiment
  poll('li[data-mobile-dropdown-rel="clearance"]', init);

