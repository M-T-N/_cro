(function(){
  
  function init() {
  
    // Log
    console.log('EHTH-1 | Reviews Above the Fold v1');

    // copy stars
    var stars = document.querySelector('.ehm-customer-reviews-container .row .col-12 .row .py-2').cloneNode(true);
    // copy number of reviews
    var numOfReviews = document.querySelector('.ehm-customer-reviews-container .row .col-12 .row small').cloneNode(true);

    // insert container
    document.querySelector('.hero-content .text-center').insertAdjacentHTML('beforeend', '<div class="tin-reviews"></div>');

    // insert clones
    document.querySelector('.tin-reviews').insertAdjacentElement('beforeend', stars);
    document.querySelector('.tin-reviews').insertAdjacentElement('beforeend', numOfReviews);
  
  }
  
  // custom poll - wait for number of reviews to populate
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel) && parseInt(document.querySelector(sel).innerHTML.replace('Based on ', ''))) cb();else poll(sel, cb);}, 50);}
  
  poll('.ehm-customer-reviews-container .row .col-12 .row small', init);

})();