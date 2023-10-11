// shorthand functions
function qs(sel) {
  return document.querySelector(sel);
}
function qsa(sel) {
  return document.querySelectorAll(sel);
}



var bestRateTab = ' <a href="#" class="tin--best-rate__tab custom_click_track" return false data-custom_click_track_value="RLM Header|Best Rate Guarantee|external|"> <picture data-param-large="downsize=1180px:*" data-param-desktop="downsize=1024px:*" data-param-tablet="downsize=768px:*" data-param-mobile="downsize=600px:*"> <source data-srcset-large="https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?&amp;interpolation=progressive-bilinear&amp;_queryParam_ , https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?2x" media="(min-width: 1025px)"> <source data-srcset-desktop="https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?&amp;interpolation=progressive-bilinear&amp;_queryParam_ , https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?2x" media="(min-width: 769px)" srcset="https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?&amp;interpolation=progressive-bilinear&amp;downsize=600px:* , https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?2x"> <source data-srcset-tablet="https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?&amp;interpolation=progressive-bilinear&amp;_queryParam_" media="(min-width: 601px)" srcset="https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?&amp;interpolation=progressive-bilinear&amp;downsize=600px:*"> <source data-srcset-mobile="https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?&amp;interpolation=progressive-bilinear&amp;_queryParam_" media="(max-width: 600px)" srcset="https://cache.marriott.com/marriottassets/BookDirect/logos/_thumb_536421-1.png?&amp;interpolation=progressive-bilinear&amp;downsize=600px:*"> <img src="https://cache.marriott.com/marriottassets/Loyalty/program-pages/icons/transparent.png?&amp;interpolation=progressive-bilinear&amp;downsize=600px:*" data-altflag="" alt="Best Rate Guarantee"> </picture> <div class="tin--best-rate__tab__text"> <p>Our Best Rate. <br class="mobile-break">Guaranteed.</p></div></a>';


var bestRateOverlay2 = '<div class="mfp-bg m-modal t-modal-lang mfp-ready tin-modal"></div><div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor m-modal t-modal-lang mfp-ready tin-modal" tabindex="-1" style="overflow: hidden auto;"> <div class="mfp-container mfp-ajax-holder mfp-s-ready" aria-live="assertive"> <div class="mfp-content"> <div class="modal-content"> <div class="t-bg-white"> <section class="mi-sub-section sub-section l-print-fullbleed l-container l-margin-subsection-bottom-small l-margin-tile-vertical-default l-padding-tile-vertical-default l-padding-subsection-vertical-none"> <div class=" l-s-col-4 l-m-col-8 l-s-col-last l-m-col-last l-l-col-12 l-xl-col-12 l-l-col-last l-xl-col-last "> <div> <div class="tile-rate-policy-details-ers" tabindex="0"> <h1 class="l-margin-top-none l-margin-bottom-double l-margin-right-double">You\'re looking at the lowest rates available online for this room, guaranteed.</h1> <h2 class="l-margin-top l-margin-bottom-none t-font-weight-semibold t-line-height-xxl t-font-m t-room-details-sub-heading">Stop searching and start traveling.</h2> <div class="l-additional-info-wrapper"> <ul class="l-margin-top"> <li class="l-padding-none t-font-s t-line-height-m l-info-list-item">There are few guarantees in life. But our <strong>Best Rate Guarantee</strong> is one of the best. It assures that you’ll always get the best rate available when you book directly with Marriott®. Here’s how it works:</li><li class="l-padding-none t-font-s t-line-height-m l-info-list-item">1. Make a reservation using any official Marriott reservation channel (Marriott.com, Marriott Bonvoy App, Customer Engagement Centers, or directly with a hotel).</li><li class="l-padding-none t-font-s t-line-height-m l-info-list-item">2. If you find a lower rate for the same hotel, same room type, and same reservation dates on a non-Marriott website or non-Marriott Bonvoy app (“Comparison Rate”) you may submit <a class="custom_click_track" data-custom_click_track_value="Best Rate Guarantee overlay|BRG claim form|external|" href="https://www.marriott.com/look/claimForm.mi" title="a Best Rate Guarantee ">a Best Rate Guarantee claim</a>.</li><li class="l-padding-none t-font-s t-line-height-m l-info-list-item">3. If we approve your claim, we’ll match the Comparison rate AND give you your choice of either an extra 25% discount on the room (20% discount for Design Hotels) OR give you 5,000 Marriott Bonvoy Points.</li></ul> </div><div class="l-exclusion-disclaimer"> <p> Some exclusions apply. <a class="custom_click_track" data-custom_click_track_value="Best Rate Guarantee overlay|See Details link|external|" href="https://www.marriott.com/online-hotel-booking.mi#bestrate,">See details.</a> </p></div></div></div></div></section> </div><button type="button" class="mfp-close"><span class="is-hidden-text">Close</span></button> </div></div></div></div>';



(function(){
  
  function mar15() {

    console.log('MAR-15_v1');



    // CSS
    qs('head').insertAdjacentHTML('beforeend', '<style>#cartSearchSummarized{align-items:center}#staydates{flex:2;padding-right:10px}#guestsrooms{flex:2}#cartSearchSummarized>div:last-child{flex:1;display:flex}.l-room-results-container .l-display-flex.l-margin-top-three-quarters{background:#fff}.l-exclusion-disclaimer p{font-size:.875rem;color:#1c1c1c;font-weight:500;font-family:proxima-nova, Helvetica, Arial, sans-serif}.tin--best-rate__tab{display:flex;align-items:center;transform:translateX(-20px);cursor:pointer}.tin--best-rate__tab picture{transform:translateY(7px)}.tin--best-rate__tab picture img{width:50px}.tin--best-rate__tab__text p{white-space:nowrap;margin:0;color:#b84c16;font-weight:600}@media (min-width: 601px){.tin--best-rate__tab__text p .mobile-break{display:none}}@media (max-width: 600px){.tin--best-rate__tab{background:#fff;padding-top:13px;transform:translateX(0px)}.tin--best-rate__tab picture{transform:translateY(10px)}.tin--best-rate__tab picture img{width:75px}.tin--best-rate__tab__text{transform:translateX(-15px)}}.tin-modal.mfp-wrap .mfp-content h2{font-size:1.5rem}.tin-modal.mfp-wrap .mfp-content li{margin-bottom:1rem}.tin-modal.mfp-wrap .mfp-content li a{color:#000;font-weight:700;text-decoration:underline}@media (max-width: 600px){.price-toggle-container{text-align:left}}@media (max-width: 457px){.price-toggle-container label::before{top:0.5rem !important}}</style>');


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



    // for pages that do not have tabs or pages that have 2+ tabs
    if (qs('.l-rate-tabs') == null) {

      // no tabs
      document.querySelector('#editSearch').insertAdjacentHTML('beforebegin', bestRateTab);
      openOverlay();

    } else {

      // 2+ tabs
      var standardTab = qs('span[title="Standard Rates"]').closest('li');


      // add tab on pageload
      if (standardTab.classList.contains('ui-state-active')) {
        document.querySelector('#editSearch').insertAdjacentHTML('beforebegin', bestRateTab);
        openOverlay();
      }
  
      function watchTab(target){
      
        // config object, must have at least one of the first 3
        var config = {
          attributes: true,  // looks for when an attribute changes
          attributeFilter: ['class'],  // filter for attributes | array of attributes that should be observed, in this case only style
        };
      
        // subscriber function
        function subscriber(mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.target.classList.contains('ui-state-active')) {
              // add the tab
              if (document.documentElement.clientWidth > 600) {
                //desktop
                if (document.querySelector('.tin--best-rate__tab') == null) {
                  document.querySelector('#editSearch').insertAdjacentHTML('beforebegin', bestRateTab);
                  openOverlay();
                }
              } else {
                //mobile
                if (document.querySelector('.tin--best-rate__tab') == null) {
                  document.querySelector('.price-toggle-container').insertAdjacentHTML('beforebegin', bestRateTab);
                  openOverlay();
                }
              }
            } else {
              document.querySelector('.tin--best-rate__tab').remove();
            };
          });
        }
      
        // instantiating observer
        var observer = new MutationObserver(subscriber);
      
        // observing target
        observer.observe(target, config);
      
      }
  
      // tab switching mutation observer
      watchTab(standardTab);

    }
    

    // different results for desktop and mobile
    switch (document.documentElement.clientWidth > 600) {

      //desktop
      case true:
        // remove column widths
        qs('#staydates').classList.remove('l-l-col-3');
        qs('.tile-search-summary-cart-sticky #guestsrooms').classList.remove('l-l-col-6');
        qs('#cartSearchSummarized .l-l-col-2.l-m-col-4.l-s-col-2').classList.remove('l-l-col-2');

      break;

      //mobile
      case false:
        // do nothing
      break;
    }



    // click function to open best rate tab
    function openOverlay(){
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