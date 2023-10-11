(function(){
  
  function init() {
    
    function addUrgency(){
      if (document.getElementsByClassName('product-urgency').length == false) {
        document.querySelector('#mobile-header-sticky-wrapper #theme-ajax-cart .ajax-cart__subtotal').insertAdjacentHTML('afterend', `
          <div class="product-urgency">
           <p>Items in your cart may sell out - <span>act fast!</span></p>
          </div>
        `);
      }
    }
    
    // run on pageload
    addUrgency();
    
    //run again on ATC click if needed
    document.querySelector('.button--add-to-cart').addEventListener('click', poll('#mobile-header-sticky-wrapper #theme-ajax-cart .ajax-cart__subtotal', addUrgency));
  
	console.log('init1');
  }
  
	function init2() {
		if (document.getElementsByClassName('product-urgency').length == false) {
			document.querySelector('.inc_sidebar_modal_block .inc_sidebar_cart_added_block').insertAdjacentHTML('afterend', '<div class="product-urgency"><p>'+ Math.floor(Math.random() * (15 - 5 + 1) + 5) +' people have this in cart - act fast before it sells out!</p></div>');
		}
      console.log('init2');
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('#mobile-header-sticky-wrapper #theme-ajax-cart .ajax-cart__subtotal', init);
  poll('.inc_sidebar_modal_block .inc_sidebar_cart_added_block', init2);

})();
