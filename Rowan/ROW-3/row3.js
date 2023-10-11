(function(){
  
  function init() {

		// css
		document.querySelector('head').insertAdjacentHTML('beforeend', `
			<style>

				.hero-primary__lockup-container .base-lockup__ctas {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 10px;
				}
				.hero-primary__lockup-container .collection-links__link-list-item {
					width: 250px;
					margin: 0;
				}
				.hero-primary__lockup-container .collection-links__link-list-item .base-cta-large {
					min-width: unset;
					height: unset;
					flex-direction: column;
					align-items: flex-start;
					padding: 10px 20px;
				}
				.hero-primary__lockup-container .collection-links__link-list-item_apply {
					display: flex;
    			width: 100%;
				}
				.hero-primary__lockup-container .collection-links__link-list-item_header {
					margin-bottom: 6px;
				}
				.hero-primary__lockup-container .collection-links__link-list-item_header h4 {
					font-size: 20px;
    			text-transform: none;
				}
				.hero-primary__lockup-container .collection-links__link-list-item_apply > span {
					margin-right: 5px;
					font-size: 14px;
				}
				.hero-primary__lockup-container .collection-links__link-list-item_apply .collection-links__link-list-item_apply__icon {
					position: static;
					width: 35px;
				}
				
				@media (min-width: 1024px) {
					.hero-primary__lockup-container {
						flex: 0 0 70%;
						min-width: 70%;
					}
					.hero-primary__lockup-container .base-lockup {
						padding: 60px 30px;
					}
					.hero-primary__lockup-container .base-lockup__ctas {
						flex-direction: row;
					}
					.hero-primary__lockup-container .collection-links__link-list-item {
						width: 33.3%;
						margin-right: 0 !important;
					}
				}
			</style>
		`);
  
    // new html for hero
		document.querySelector('.base-lockup__ctas').innerHTML = `
		<li class="collection-links__link-list-item">
			<a href="https://admissions.rowan.edu/admissions-process/app-calendar-fees.html" target="_self" class="base-cta-large base-cta-large--brown">
				<div class="collection-links__link-list-item_header">
					<h4>First-year</h4>
				</div>
				<div class="collection-links__link-list-item_apply">
					<span>Apply</span>
					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 28.596 7.778" class="collection-links__link-list-item_apply__icon"><use xlink:href="/svgs/symbol-arrow.svg#icon"></use></svg>
				</div>
			</a>
		</li>
		<li class="collection-links__link-list-item">
			<a href="http://apply.rowan.edu/apply" target="_self" class="base-cta-large base-cta-large--brown">
				<div class="collection-links__link-list-item_header">
					<h4>Transfer</h4>
				</div>
				<div class="collection-links__link-list-item_apply">
					<span>Apply</span>
					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 28.596 7.778" class="collection-links__link-list-item_apply__icon"><use xlink:href="/svgs/symbol-arrow.svg#icon"></use></svg>
				</div>
			</a>
		</li>
		<li class="collection-links__link-list-item">
			<a href="admissions-process/international-requirements/index.html" target="_self" class="base-cta-large base-cta-large--brown">
				<div class="collection-links__link-list-item_header">
					<h4>International</h4>
				</div>
				<div class="collection-links__link-list-item_apply">
					<span>Apply</span>
					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 28.596 7.778" class="collection-links__link-list-item_apply__icon"><use xlink:href="/svgs/symbol-arrow.svg#icon"></use></svg>
				</div>
			</a>
		</li>		
		
		`;


		// remove 2nd section
		document.querySelector('#apply').remove();
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.card-image__cards', init);

})();