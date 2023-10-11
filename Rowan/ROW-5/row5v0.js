(function(){
  
  function init() {
  
    // changes here
		$('.collection-links').insertBefore('#footer');
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('#footer', init);

})();