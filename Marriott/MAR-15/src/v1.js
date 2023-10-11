// Imports
import { qs, qsa } from './utils/qs';
import styles from './styles/v1.scss';
import { bestRateTab } from './html/bestRateTab';
import { bestRateOverlay } from './html/bestRateOverlay';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}



(function(){
  
  function mar15() {

    // CSS
    qs('head').insertAdjacentHTML('beforeend', `
      <style>
      #cartSearchSummarized{align-items:center}#staydates{flex:2;padding-right:10px}#guestsrooms{flex:2}#cartSearchSummarized>div:last-child{flex:1;display:flex}.l-room-results-container .l-display-flex.l-margin-top-three-quarters{background:#fff}.tin--best-rate__tab{display:flex;align-items:center;transform:translateX(-20px);cursor:pointer}.tin--best-rate__tab picture{transform:translateY(7px)}.tin--best-rate__tab picture img{width:50px}.tin--best-rate__tab__text p{white-space:nowrap;margin:0;color:#b84c16;font-weight:600}@media (min-width: 601px){.tin--best-rate__tab__text p .mobile-break{display:none}}@media (max-width: 600px){.tin--best-rate__tab{background:#fff;padding-top:13px;transform:translateX(0px)}.tin--best-rate__tab picture{transform:translateY(10px)}.tin--best-rate__tab picture img{width:75px}.tin--best-rate__tab__text{transform:translateX(-15px)}}.tin--best-rate__overlay{position:fixed;width:100%;height:100%;z-index:1100;box-sizing:border-box;overflow:scroll;pointer-events:none;padding:7rem 8rem}.tin--best-rate__overlay__background{background:#0b0b0b;opacity:0.8;width:100%;height:100%;position:fixed;overflow:hidden;z-index:1050;top:0;left:0}.tin--best-rate__overlay__content{max-width:73.75rem;background:#fff;padding:3.75rem;padding-top:1.25rem;margin:0 auto;border-radius:.25rem;position:relative;pointer-events:all;box-sizing:border-box}.tin--best-rate__overlay__content--icon{position:absolute;left:-5px;top:2.25rem}.tin--best-rate__overlay__content--icon img{width:70px;filter:brightness(0)}.tin--best-rate__overlay__content--close{position:absolute;top:10px;right:15px;cursor:pointer}.tin--best-rate__overlay__content--close span{font-size:30px}.tin--best-rate__overlay__content__text h3{font-size:44px;font-weight:700;font-family:'Swiss-721';line-height:1}.tin--best-rate__overlay__content__text h4{font-family:'Swiss-721';font-size:24px;font-weight:600;margin-top:1rem}.tin--best-rate__overlay__content__text p{font-family:proxima-nova, Helvetica, Arial, sans-serif;font-size:0.875rem;font-weight:500;margin-top:1rem}@media (max-width: 600px){.tin--best-rate__overlay{padding:.625rem}.tin--best-rate__overlay__content{height:100%;overflow:scroll;top:10px;margin:0 10px}.tin--best-rate__overlay__content__text h3{font-size:1.75rem}.tin--best-rate__overlay__content__text h4{font-size:1.25rem}.tin--best-rate__overlay__content__text p{font-size:.875rem}.tin--best-rate__overlay__content--close{position:fixed;top:30px;right:45px}.tin--best-rate__overlay__content--close span{font-size:30px}}@media (max-width: 600px){.price-toggle-container{text-align:left}}@media (max-width: 457px){.price-toggle-container label::before{top:0.5rem !important}}


      </style>`);
  
    // different results for desktop and mobile
    switch (document.documentElement.clientWidth > 600) {

      //desktop
      case true:
        // remove column widths
        qs('#staydates').classList.remove('l-l-col-3');
        qs('.tile-search-summary-cart-sticky #guestsrooms').classList.remove('l-l-col-6');
        qs('#cartSearchSummarized .l-l-col-2.l-m-col-4.l-s-col-2').classList.remove('l-l-col-2');
        // add new grid item/content
        //qs('.tile-search-summary-cart-sticky #guestsrooms').insertAdjacentHTML('afterend', bestRateTab);

        qs('#editSearch').insertAdjacentHTML('beforebegin', bestRateTab);

      break;
      //mobile
      case false:
        qs('.price-toggle-container').insertAdjacentHTML('beforebegin', bestRateTab);
      break;
    }

      // click function to open best rate tab
      qs('.tin--best-rate__tab').addEventListener('click', () => {

        qs('#page-container').insertAdjacentHTML('afterbegin', bestRateOverlay);
        //qs('body').style.overflow = 'scroll';

        // close modal function, added after html is added
        qsa('.tin--best-rate__overlay__content--close, .tin--best-rate__overlay__background').forEach(function(el){
          el.addEventListener('click', () => {
            qs('.tin--best-rate__overlay__background').remove();
            qs('.tin--best-rate__overlay').remove();
            //qs('body').style.overflow = 'scroll';
          });
        })
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