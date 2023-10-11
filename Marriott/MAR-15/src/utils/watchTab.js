export function watchTab(target){
    
  // config object, must have at least one of the first 3
  var config = {
    attributes: true,  // looks for when an attribute changes
    attributeFilter: ['class'],  // filter for attributes | array of attributes that should be observed, in this case only style
  };

  // subscriber function
  function subscriber(mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.actualTarget.classList.contains('ui-state-active')) {
        // add the tab
        if (document.documentElement.clientWidth > 600) {
          //desktop
          if (document.querySelector('.tin--best-rate__tab') == null) {
            document.querySelector('#editSearch').insertAdjacentHTML('beforebegin', bestRateTab);
          }
        } else {
          //mobile
          if (document.querySelector('.tin--best-rate__tab') == null) {
            document.querySelector('.price-toggle-container').insertAdjacentHTML('beforebegin', bestRateTab);
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