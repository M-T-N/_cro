// Imports
import { qs, qsa } from './utils/qs';
import styles from './styles/v2.scss';
import { bestRateTab } from './html/bestRateTab';
import { bestRateOverlay2 } from './html/bestRateOverlay2';
import {watchTab} from './utils/watchTab';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}



(function(){
  
  function mar15() {

    console.log('MAR-15_v1');


    var standardRatesTab = document.querySelector('.results-container[data-rate-type="standard"]');
    if (standardRatesTab) {
      function sendImpression() {
        var y = new Object();
        y.list3 = 'Rate Tab: Standard Rates';
        y.events = 'event168';
        s.t(y);
      }

      // send impression if standard rates is visible on page load
      if (standardRatesTab.getAttribute('aria-expanded') == 'true') sendImpression();

      // watch if standard rates becomes visible
      var standardRatesTabObserver = new MutationObserver(handleStandardRatesTabMutation);
      standardRatesTabObserver.observe(standardRatesTab, { attributes: true, attributeFilter: ['aria-expanded'] });
      function handleStandardRatesTabMutation() {
        if (standardRatesTab.getAttribute('aria-expanded') == 'true') sendImpression();
      }
    }
  
  

    // CSS
    qs('head').insertAdjacentHTML('beforeend', `
      <style>
      #cartSearchSummarized{align-items:center}#staydates{flex:2;padding-right:10px}#guestsrooms{flex:2}#cartSearchSummarized>div:last-child{flex:1;display:flex}.l-room-results-container .l-display-flex.l-margin-top-three-quarters{background:#fff}.l-exclusion-disclaimer p{font-size:.875rem;color:#1c1c1c;font-weight:500;font-family:proxima-nova, Helvetica, Arial, sans-serif}.tin--best-rate__tab{display:flex;align-items:center;transform:translateX(-20px);cursor:pointer}.tin--best-rate__tab picture{transform:translateY(7px)}.tin--best-rate__tab picture img{width:50px}.tin--best-rate__tab__text p{white-space:nowrap;margin:0;color:#b84c16;font-weight:600}@media (min-width: 601px){.tin--best-rate__tab__text p .mobile-break{display:none}}@media (max-width: 600px){.tin--best-rate__tab{background:#fff;padding-top:13px;transform:translateX(0px)}.tin--best-rate__tab picture{transform:translateY(10px)}.tin--best-rate__tab picture img{width:75px}.tin--best-rate__tab__text{transform:translateX(-15px)}}.tin-modal.mfp-wrap .mfp-content h2{font-size:1.5rem}.tin-modal.mfp-wrap .mfp-content li{margin-bottom:1rem}.tin-modal.mfp-wrap .mfp-content li a{color:#000;font-weight:700;text-decoration:underline}@media (max-width: 600px){.price-toggle-container{text-align:left}}@media (max-width: 457px){.price-toggle-container label::before{top:0.5rem !important}}
      </style>`);
  

    // add tab on pageload
    if (document.querySelector('span[title="Standard Rates"]').closest('li').classList.contains('ui-state-active')) {
      document.querySelector('#editSearch').insertAdjacentHTML('beforebegin', bestRateTab);
    }

    // toggle best rate tab  based on standard rates
    watchTab(qs('span[title="Standard Rates"]').closest('li'));

    // click function to open best rate tab
    qs('.tin--best-rate__tab').addEventListener('click', () => {

      qs('#page-container').insertAdjacentHTML('beforebegin', bestRateOverlay2);
      qs('html').style.marginRight = '17px';
      qs('html').style.overflow = 'hidden';

      // close modal function, added after html is added
      qsa('.tin-modal.mfp-wrap , .tin-modal .mfp-close').forEach(function(el){
        el.addEventListener('click', () => {
          qs('.tin-modal.mfp-bg').remove();
          qs('.tin-modal.mfp-wrap').remove();
          qs('html').style.removeProperty('margin-right');
          qs('html').style.removeProperty('overflow');
        });
      });

      //prevent close on modal content clicks
      qs('.tin-modal .mfp-content').addEventListener('click', event => {
        event.stopPropagation();
      });
      
    });

  
  }

  // doc ready check
  var cancel_interval_mar15 = setInterval(loadMar15, 30);
  function loadMar15() {
    /******* START -----DOM is parsed  ************/
    if (document.readyState == "interactive" && typeof window.s === "object") {
      console.log("DOM is interactive.....");
      clearInterval(cancel_interval_mar15);
      mar15();
    }
    /******* END  ******/
    /******* START -----DOM is loaded  ************/
    else if (document.readyState == "complete" && typeof window.s === "object") {
      console.log("DOM is completed.....");
      clearInterval(cancel_interval_mar15);
      mar15();
    }
    else{
      console.log("DOM is still loading.....");
    }
    /******* END  ******/
  }   

})();