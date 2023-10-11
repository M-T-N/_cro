


(function(){
  
  function init() {
  
    /*** step 2 ***/
		console.log('LVS-431 step 2');

		// set the offer details to session storage when clicking cta, used in step 3
		document.querySelectorAll('.suite-card__cta').forEach(el => {
			el.addEventListener('click', () => {

				let offerDescripton = el.closest('.suite-card').querySelector('.suite-card__offers .offer-picker__offer-column--name input:checked').nextSibling.innerText.trim();

				window.localStorage.setItem('lvs431', offerDescripton);
				document.cookie = `lvs431=${offerDescripton}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;

			});
		});

  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.tower-merchandising', init);

})();









/*** step 3 ***/
(function(){

	console.log('LVS-431 step 3');
	
	// get the offer detail info
	//const offerDetailInfo = window.localStorage.lvs431;
	// const offerDetailInfo = document.querySelectorAll('.step-confirmation__offer-img')[1].nextElementSibling.querySelector('dd:nth-child(2)').innerText;

	function offerDetailInfoHTML(offerDetailInfo) {
		
		return `<div class="step-confirmation__offer-detail">
			<div class="step-confirmation__offer-detail__heading">
				<span>
					<img src="//cdn.optimizely.com/img/8200950428/6e4139ee377c49d5834d37813f48ce4e.png" alt="red star">
				</span>
				Offer Applied
			</div>
			<div class="step-confirmation__offer-detail__info">
				${offerDetailInfo}
			</div>
		</div>
		<hr class="step-confirmation__divider ng-tns-c113-22">
	`;
	}

  function initDesktop() {

		// check if it's there, don't fire twice
		if (!document.querySelector('.step-confirmation__summary--desktop .step-confirmation__offer-detail')) {

			const offerTextLocation = document.querySelector('.step-confirmation__pricing-detail dl.right-aligned dd:not(.increased-width)');

			let offerDetailInfo = offerTextLocation.innerText;

			// add new html for desktop
			document.querySelector('.step-confirmation__summary--desktop .step-confirmation__booking-detail').insertAdjacentHTML('beforebegin', offerDetailInfoHTML(offerDetailInfo));


			// mutationObserver for if user logs in/out and offer changes
			function subscriber(mutations) {
				for (let mutation of mutations) {
					console.log('Text Change!!');
					let offerDetailInfo = offerTextLocation.innerText;
					document.querySelector('.step-confirmation__summary--desktop .step-confirmation__offer-detail__info').innerText = offerDetailInfo;
				}
			}
			
			// instantiating observer
			var observer = new MutationObserver(subscriber);
			
			// observing target
			observer.observe(offerTextLocation, {
				characterData: true,
				subtree: true,
			});

		}
  }



	function initMobile() {

		if (!document.querySelector('.step-confirmation__summary[aria-live="polite"] .step-confirmation__offer-detail')) {
			
			const offerTextLocation = document.querySelector('.step-confirmation__pricing-detail--top-line dd.no-margin');
	
			let offerDetailInfo = offerTextLocation.innerText;

			// add new html for desktop
			document.querySelector('.step-confirmation__summary[aria-live="polite"] .step-confirmation__booking-detail').insertAdjacentHTML('beforebegin', offerDetailInfoHTML(offerDetailInfo));


				// mutationObserver for if user logs in/out and offer changes
				function subscriber(mutations) {
					for (let mutation of mutations) {
						console.log('Text Change!!');
						let offerDetailInfo = offerTextLocation.innerText;
						document.querySelector('.step-confirmation__summary:not(.step-confirmation__summary--desktop) .step-confirmation__offer-detail__info').innerText = offerDetailInfo;
					}
				}
				
				// instantiating observer
				var observer = new MutationObserver(subscriber);
				
				// observing target
				observer.observe(offerTextLocation, {
					characterData: true,
					subtree: true,
				});
				
		}
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.step-confirmation__pricing-detail dl.right-aligned dd:not(.increased-width)', initDesktop);
	poll('.step-confirmation__pricing-detail--top-line dd.no-margin', initMobile);


})();







let target = document.querySelector('.step-confirmation__pricing-detail dl.right-aligned dd:not(.increased-width)');
let options = {
	characterData: true,
	subtree: true
}
function mCallback(mutations) {
  for (let mutation of mutations) {

      console.log('Mutation Detected: Character data has been altered.');

  }
}
let observer = new MutationObserver(mCallback);
observer.observe(target, options);






/* Old step 3 */
// (function(){

// 	console.log('LVS-431 step 3');
	
// 	// get the offer detail info
// 	//const offerDetailInfo = window.localStorage.lvs431;
// 	const offerDetailInfo = document.querySelectorAll('.step-confirmation__offer-img')[1].nextElementSibling.querySelector('dd:nth-child(2)').innerText;

// 	const offerDetailInfoHTML = `
// 		<div class="step-confirmation__offer-detail">
// 			<div class="step-confirmation__offer-detail__heading">
// 				<span>
// 					<img src="//cdn.optimizely.com/img/8200950428/6e4139ee377c49d5834d37813f48ce4e.png" alt="red star">
// 				</span>
// 				Offer Applied
// 			</div>
// 			<div class="step-confirmation__offer-detail__info">
// 				${offerDetailInfo}
// 			</div>
// 		</div>
// 		<hr class="step-confirmation__divider ng-tns-c113-22">
// 	`;

//   function initDesktop() {

// 		// check if it's there, don't fire twice
// 		if (!document.querySelector('.step-confirmation__summary--desktop .step-confirmation__offer-detail')) {

// 			// add new html for desktop
// 			document.querySelector('.step-confirmation__summary--desktop .step-confirmation__booking-detail').insertAdjacentHTML('beforebegin', offerDetailInfoHTML);

// 		}
//   }

// 	function initMobile() {

// 		if (!document.querySelector('.step-confirmation__summary[aria-live="polite"] .step-confirmation__offer-detail')) {

// 			// add new html for desktop
// 			document.querySelector('.step-confirmation__summary[aria-live="polite"] .step-confirmation__booking-detail').insertAdjacentHTML('beforebegin', offerDetailInfoHTML);
				
// 		}
//   }
  
//   function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
//   poll('.step-confirmation__summary--desktop .step-confirmation__booking-detail', initDesktop);
// 	poll('.step-confirmation__summary[aria-live="polite"] .step-confirmation__booking-detail', initMobile);


// })();