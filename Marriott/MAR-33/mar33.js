(function(){
  
  function mar33() {
    
    
    setTimeout(function(){
    
      // this will run on multiple pages, check to see if element is there before running code
      if (document.querySelector('.nearby-hotels-fragment') != null) {

        document.querySelector('head').insertAdjacentHTML('beforeend', '<style>.card-wrapper .card-details-wrapper .card-divider .card-btn a[type="button"]{width: auto;font-size: 0.8125rem;line-height: 1rem;min-height: 2rem;border-radius: 1.875rem;padding: 0px 1rem;background-color: rgb(28, 28, 28);font-family: Swiss721-BT, Helvetica, Arial, sans-serif;font-weight: 400;color: rgb(255, 255, 255);cursor: pointer;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;right: -0.375rem;display: flex;align-items: center;}</style>')

        document.querySelectorAll('.nearby-hotels .price-rate button').forEach(function(el){
          el.setAttribute('target', '_blank');
          el.outerHTML = el.outerHTML.replace('data-link', 'href').replace('button', 'a');
        });

      }
    
    }, 6000);
  
  }

  // doc ready check
  var cancel_interval_mar33 = setInterval(loadMar33, 30);
  function loadMar33() {
    /******* START -----DOM is parsed  ************/
    if (document.readyState == "interactive" && typeof window.s === "object") {
      console.log("DOM is interactive.....");
      clearInterval(cancel_interval_mar33);
      mar33();
    }
    /******* END  ******/
    /******* START -----DOM is loaded  ************/
    else if (document.readyState == "complete" && typeof window.s === "object") {
      console.log("DOM is completed.....");
      clearInterval(cancel_interval_mar33);
      mar33();
    }
    else{
      console.log("DOM is still loading.....");
    }
    /******* END  ******/
  }   

})();