(function(){
  
  function init() {
  
    // remove subheader
    document.querySelector('#Mainstage .hero-wrapper > p').remove();
    
    document.querySelector('#Mainstage .hero-wrapper .coupons-wrapper a:first-of-type').outerHTML = `
      <div class="copy">
       <p>
        With our commitment to customer service, our 24/7 service includes holidays nights and weekends (you know…the times when AC units break the most!). No matter the time or day, know that you can rely on Waychoff’s to supply reliable, same-day service to get your system working again as soon as possible.
       </p>
       <p>Confirm your appointment in 30 seconds (just tell us where to send our technician!)</p>
      </div>
    `;
    
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('#Mainstage', init);

})();