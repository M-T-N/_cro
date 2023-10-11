(function(){
  
  function init() {

		console.log('LVS-439');

		//css
		document.querySelector('head').insertAdjacentHTML('beforeend', `
			<style>
				@media (min-width: 820px) {
					.tin__mod-global-nav__level-1__link {
						line-height: 1 !important;
					}
				}
				@media (min-width: 1400px) {
					.mod-global-nav .mod-global-nav__level-1 .tin__mod-global-nav__level-1__link {
						line-height: 14px;
					}
				}
			</style>
		`);
  

		// for all links
    document.querySelectorAll('.mod-global-nav__suites, .mod-global-nav__pools-spa, .mod-global-nav__resort, .mod-global-nav__meetings, .mod-global-nav__casino, .mod-global-nav__thingstodo').forEach(el => {

			el.classList.remove('has-mobile-subnav');

			el.querySelector('.mod-global-nav__mobile-pointer').remove();

			el.querySelector('a').classList.remove('mod-global-nav__level-1__link');

			el.querySelector('a').classList.add('tin__mod-global-nav__level-1__link');

		});


		// change link hrefs
		document.querySelector('.mod-global-nav__suites a').href = 'https://www.venetianlasvegas.com/suites.html';
		document.querySelector('.mod-global-nav__pools-spa a').href = 'https://www.venetianlasvegas.com/home/pools-and-spa.html';
		document.querySelector('.mod-global-nav__resort a').href = 'https://www.venetianlasvegas.com/home/resort.html';
		document.querySelector('.mod-global-nav__meetings a').href = 'https://www.venetianlasvegas.com/home/meetings.html';
		document.querySelector('.mod-global-nav__casino a').href = 'https://www.venetianlasvegas.com/home/casino.html';
		document.querySelector('.mod-global-nav__thingstodo a').href = 'https://www.venetianlasvegas.com/home/things-to-do.html';

  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.mod-global-nav__thingstodo', init);

})();