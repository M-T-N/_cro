(function(){
  
  function init() {

    console.log('USP-117');

    function addUrgency(){
      console.log('AddUrgency1');
      if (document.getElementsByClassName('product-urgency--alert').length == false && document.querySelectorAll('#mobile-header-sticky-wrapper #theme-ajax-cart .ajax-cart__subtotal').length > 0) {
        document.querySelector('#mobile-header-sticky-wrapper #theme-ajax-cart .ajax-cart__subtotal').insertAdjacentHTML('afterend', `
        <div class="product-urgency--alert">
        <p>Items in your cart may sell out - <span>act fast!</span></p>
        </div>
        `);
      }
    }

    function addUrgency2(){
      console.log('AddUrgency2');
      if (document.getElementsByClassName('product-urgency--count').length == false && document.querySelectorAll('.inc_sidebar_modal_block .inc_sidebar_cart_added_block').length > 0) {
        document.querySelector('.inc_sidebar_modal_block .inc_sidebar_cart_added_block').insertAdjacentHTML('afterend', '<div class="product-urgency--count"><p>'+ Math.floor(Math.random() * (15 - 5 + 1) + 5) +' people have this in cart - act fast before it sells out!</p></div>');
      }
    }
    
    // run on pageload
    addUrgency();
    addUrgency2();

    //run again on ATC click if needed
    document.querySelector('.button--add-to-cart').addEventListener('click', poll('#mobile-header-sticky-wrapper #theme-ajax-cart .ajax-cart__subtotal', addUrgency));

    document.querySelector('.button--add-to-cart').addEventListener('click', poll('.inc_sidebar_modal_block .inc_sidebar_cart_added_block', addUrgency2));
  
  }
  
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.button--add-to-cart', init);

})();
