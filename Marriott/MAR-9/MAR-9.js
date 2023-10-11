(function(){
  
  function mar9() {
  
    // Log
    console.log('MAR-9 | SRP: New Tab Opens for RLM');

    document.querySelectorAll('.js-view-rate-btn-link.l-float-right').forEach(function(el){ 
      el.setAttribute('target', '_blank');
    });

  
  }

  // Marriott doc ready check
  var cancel_interval_mar9 = setInterval(loadMar9, 30);
  function loadMar9() {
    if (document.readyState == "interactive" && typeof window.s === "object") {
      clearInterval(cancel_interval_mar9);
      mar9();
    }
    else if (document.readyState == "complete" && typeof window.s === "object") {
      clearInterval(cancel_interval_mar9);
      mar9();
    }
  } 

})();