(function(){
  
  function init() {
  
    // remove subheader
    document.querySelector('#Mainstage .hero-wrapper > p').remove();
    
    document.querySelector('#Mainstage .hero-wrapper .coupons-wrapper a:first-of-type').outerHTML = `
      <div class="list">
       <ul>
        <li>Same-day expert heating, plumbing & water heater services (Including tune-ups, repairs, replacement)</li>
        <li>24/7 emergency service available</li>
        <li>Confirm your appointment in 30 seconds (just tell us where to send our technician!)</li>
       </ul>
      </div>
    `;
    
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('#Mainstage', init);

})();