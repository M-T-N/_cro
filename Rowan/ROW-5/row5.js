(function(){
  
  function init() {
  
		// all pages
    $('.collection-links').insertAfter('.hero-secondary');



		// add styling from ROW-2 for MBA page
		$('#modality').insertAfter('#TabsAccord');

		if (window.location.href.includes('master-of-business-administration')) {
			document.querySelector('head').insertAdjacentHTML('beforeend', `<style>
			.header__main-content{height:50px}.main{margin-top:50px}.accordion-tabs,.base-lockup__label+.base-lockup__heading,.collection-links__link-list,.collection-links__link-list-item{margin-top:0}.hero-secondary{display:flex;flex-direction:column;padding-top:0;margin-bottom:15px}.hero-secondary__container{padding:15px 25px}.hero-secondary__heading{font-size:18px;line-height:1.2}.hero-secondary__image{margin-top:0;height:170px;z-index:10}.collection-links{padding:0;margin-bottom:25px}.collection-links .base-lockup__heading{font-size:18px}.base-lockup,.collection-links__link-list-item:nth-child(-n+2){margin-bottom:10px}.base-lockup__label{margin-bottom:5px;display:inline-block}.base-cta-large--blue{padding:10px 100px 10px 28px}.accordion-tabs h2{margin-bottom:20px}@media (min-width:640px){.collection-links__link-list,.collection-links__link-list-item,.main{margin-top:0}.hero-secondary{padding:110px 0;margin-bottom:30px}.hero-secondary__container{width:46%;position:relative;margin:0;z-index:10}.hero-secondary__inner{margin:0;width:100%;display:inline-block}.hero-secondary__content{max-width:unset;width:100%;padding:0 20px}.hero-secondary__heading{font-size:22px}.hero-secondary__line{position:absolute;margin:0;bottom:80px;z-index:100}.hero-secondary__image{height:100%}.collection-links{padding:0;margin-bottom:40px}.collection-links .base-lockup{margin-bottom:20px}.collection-links .base-lockup__label{margin-bottom:10px;display:inline-block}.collection-links .base-lockup__heading{margin-top:0;font-size:26px}.base-lockup__heading.base-lockup__heading--3{font-size:26px}}@media (max-width:1023px){.collection-links__link-list{gap:10px}}
			</style>`);
		}

  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.collection-links', init);

})();




