// POLL
(function(){
  
  function init() {

		function qs(sel) {
			return document.querySelector(sel);
		}
		function qsa(sel) {
			return document.querySelectorAll(sel);
		}

		// css
		qs('head').insertAdjacentHTML('beforeend', `
			<style>
				.hero-primary {
					padding-top: 60px;
					padding-bottom: 60px;
					margin-bottom: 25px;
				}
				.program-finder > .program-finder__container {
					margin-top: 0;
				}
				.program-finder > .program-finder__container > .program-finder__row {
					flex-direction: column;
				}
				.program-finder__column--sidebar {
					max-width: unset;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					padding: 0;
					margin-bottom: 20px;
				}
				.program-finder__search-wrapper {
					grid-row-start: 1;
					grid-column: 2/3;
				}
				.program-finder__reset-wrap {
					margin-top: 0;
					grid-row-start: 1;
					grid-column: 1/2;
					justify-content: flex-start;
				}
				.program-finder__filters-accordion {
					margin: 0;
    			grid-row-start: 2;
					grid-gap: 20px 30px;
					display: grid;
					grid-auto-columns: 1fr;
					grid-column: 1/4;
					padding-top: 30px;
				}
				.program-finder__filters-accordion .program-finder-accordion {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-gap: 20px 30px;
				}
				.program-finder__filters-accordion .program-finder-accordion .program-finder-accordion__inner {
					border-top: 1px solid #000;
					border-bottom: none;
				}
				.program-finder__filters-accordion .program-finder-accordion .program-finder-accordion__inner:nth-child(1) {
					grid-column: 1/2;
				}
				.program-finder__filters-accordion .program-finder-accordion .program-finder-accordion__inner:nth-child(2) {
					grid-column: 2/3;
				}
				.program-finder__filters-accordion .program-finder-accordion .program-finder-accordion__inner__wrap {
					grid-column: 3/4;
					display: flex;
					flex-direction: column;
				}
				.program-finder__column--main {
					max-width: unset;
					flex: unset;
					padding: 0;
				}
				.program-finder__column--main .program-finder__results-list {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					width: 100%;
					grid-gap: 20px 30px;
				}
				.program-finder__column--main .program-finder__results-list-item {
					width: unset;
					margin: 0;
				}
			</style>
		`);
  

		// make all of the filter categories collapsed on load
		// qsa('.program-finder__column--sidebar .program-finder-accordion .program-finder-accordion__inner').forEach(el => {
		// 	el.querySelector('button').ariaExpanded = false;
		// 	el.querySelector('.program-finder-accordion__panel').classList.remove('expanded');
		// 	el.querySelector('.program-finder-accordion__panel').style = "overflow: hidden; height: 0px; display: none;";
		// });

		// create a container div for last 2 filter categories, move the last into that div
		qs('.program-finder-accordion').insertAdjacentHTML('beforeend', `<div class="program-finder-accordion__inner__wrap"/>`);

		// move the filters into the new wrapper
		qs('.program-finder-accordion__inner__wrap').appendChild(qs('.program-finder__filters-accordion .program-finder-accordion .program-finder-accordion__inner:nth-child(3)'));
		qs('.program-finder-accordion__inner__wrap').appendChild(qs('.program-finder__filters-accordion .program-finder-accordion .program-finder-accordion__inner:nth-child(3)'));

		// close the filter op load
		qsa('.program-finder__column--sidebar .program-finder-accordion .program-finder-accordion__inner button').forEach(el => el.click());



		// hide the "Clear" button on pageload, then mutationobserver to toggle
		qs('.program-finder__reset-button').style.display = "none";

		var target = document.querySelector('.program-finder-accordion');

		// config object, must have at least one of the first 3
		var config = {
			attributes: true,
			subtree: true,
			attributeFilter: ['aria-checked'],
		};

		// subscriber function
		function subscriber(mutations) {
			mutations.forEach(function (mutation) {
				if (qsa('.program-finder__column--sidebar .program-finder-accordion input[aria-checked=true]').length > 0) {
					qs('.program-finder__reset-button').style.display = "";
				} else {
					qs('.program-finder__reset-button').style.display = "none";
				}
			});
		}

		// instantiating observer
		var observer = new MutationObserver(subscriber);

		// observing target
		observer.observe(target, config);
		


  }


	function initCard9() {
		// make the 9th card visible on pageload
		document.querySelector('.program-finder__results-list li:nth-child(9)').style.display = '';
	}
  

	
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  //poll('.program-finder__filters-accordion .program-finder-accordion', init);
	poll('.program-finder__column--sidebar .program-finder-accordion .program-finder-accordion__inner:nth-child(4)', init);
	poll('.program-finder__results-list li:nth-child(9)', initCard9);

})();