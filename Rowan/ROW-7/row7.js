// POLL
(function(){
  
  function init() {


		// css
		document.querySelector('head').insertAdjacentHTML('beforeend', `
			<style>
				@media (max-width: 639px) {
					.hero-primary {
						padding: 35px 0 20px;
					}
					.program-finder__container {
						margin-top: 15px;
					}
					.program-finder__column--sidebar {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						grid-gap: 15px 10px;
					}
					.program-finder__search-wrapper {
						grid-column: 1/4;
					}
					.program-finder__reset-wrap {
						grid-column: 3/4;
						grid-row-start: 2;
						margin-top: 0;
						background: #fcc000;
					}
					.program-finder__filter-button {
						grid-column: 1/3;
						grid-row-start: 2;
						margin-top: 0;
					}
					.program-finder__reset-button {
						color: #000;
					}
					.program-finder__reset-button::before, 
					.program-finder__reset-button::after {
						display: none;
					}
				}
			</style>
		`);
  


		// change filter reset button text
		document.querySelector('.program-finder__reset-button').innerText = 'Reset';


		// count the number of applied filters, if '0' then display '+'
		let filterText = document.querySelector('.program-finder__filter-button span:nth-child(2)');
		function filterCount() {
			let filterNum = document.querySelectorAll('.program-finder__column--modal .program-finder-accordion input[aria-checked="true"]').length;
			filterText.innerText = `Filter [${filterNum == 0 ? '+' : filterNum}]`;
		}
		// run it on pageload
		filterCount();



		// mutationObserver to watch filter count changes
		function subscriber(mutations) {
			mutations.forEach(function (mutation) {
				filterCount();
			});
		}

		var observer = new MutationObserver(subscriber);

		var target = document.querySelector('.program-finder__column--modal .program-finder-accordion');

		var config = {
			childList: true,  // looks for child elements added or removed
			attributes: true,  // looks for when an attribute changes
			subtree: true,  // target childs will be observed | on attributes/characterData changes if they observed on target
			attributeFilter: ['aria-checked'],  // filter for attributes | array of attributes that should be observed, in this case only style
		};

		observer.observe(target, config);
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.program-finder__filter-button', init);

})();