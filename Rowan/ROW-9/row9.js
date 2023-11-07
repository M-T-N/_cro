(function(){
  
  function init() {

		//css
		document.querySelector('head').insertAdjacentHTML('beforeend', `
			<style>
				@media (max-width: 1439px) {
					.hero-home__content .base-lockup__heading.base-lockup__heading--3 {
						font-size: 22px;
						line-height: 26px;
					}
				}
				.hero-home__content .base-lockup__heading.base-lockup__heading--3 {
					margin-bottom: 20px;
				}
				.hero-home__content .base-lockup__subheading {
					font-family: acumin-pro,sans-serif;
					color: #000;
				}
			</style>
		`);
  
    // heading text
		document.querySelector('.hero-home__content .base-lockup__heading').innerText = 'FLEXIBLE PROGRAMS TO FIT YOUR SCHEDULE';

		// new subhead text
		document.querySelector('.hero-home__content .base-lockup__heading').insertAdjacentHTML('afterend', `
			<p class="base-lockup__subheading">
				Discover your path with fully online coursework, face-to-face classes, or hybrid pathways.
			</p>
		`);

		// cta text
		document.querySelector('.hero-home__content .base-lockup__ctas a').innerText = 'Select your program today';

  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.hero-home__content .base-lockup__ctas a', init);

})();