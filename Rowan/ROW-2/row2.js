// only run on business admin page
if (window.location.toString().includes('master-of-business-administration')) {

	(function(){
		
		function init() {
			// the moves
			$('#modality').insertAfter('#TabsAccord');

			$('.collection-links__container').insertBefore('#TabsAccord');

		}
		
		function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
		
		poll('.collection-links__container', init);
	
	})();

}
