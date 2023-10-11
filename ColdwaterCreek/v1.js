(function(){
  
  function init() {


		/* first, using the url, set the image source and swatch color if needed */
		let productObj = {};

		let defaultImg = 'https://staging-web-coldwatercreek.demandware.net/on/demandware.static/-/Sites-itemmaster_CWC/default/v7270aad6798190c67c38626722a72d219821a301/large/19826_1329_UGC.jpeg'

		const thisHref = window.location.href;
		const includesProduct = (term) => {
			if (thisHref.includes(term)){
				return thisHref;
			}
		};

		switch (thisHref) {
			case includesProduct('/desert-vista-sweater'):
				productObj.imgSrc = defaultImg;
				break;
			case includesProduct('/shaker-detail-button-cardigan'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Dark Olive'
				break;
			case includesProduct('/faux-suede-skirt'):
				if (thisHref.includes('kfrick_ig3') || thisHref.includes('Frickspicks')) {
					productObj.imgSrc = defaultImg;
				}
				if (thisHref.includes('scookchazen_ig3') || thisHref.includes('SabrinaCookChazen')) {
					productObj.imgSrc = defaultImg;
				}
				break;
			case includesProduct('/knit-boyfriend-jacket'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Black'
				break;
			case includesProduct('/lightweight-windbreaker'):
				if (thisHref.includes('emassey_ig5')) {
					productObj.imgSrc = defaultImg;
					productObj.color = 'Cinnamon'
				}
				if (thisHref.includes('shamilton_ig12') || thisHref.includes('Makeupobsessedmom')) {
					productObj.imgSrc = defaultImg;
					productObj.color = 'Olive'
				}
				break;	
			case includesProduct('/knit-denim-jacket'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Medium Wash'
				break;	
			case includesProduct('/vest-for-all-seasons'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Spice'
				break;
			case includesProduct('/spiced-plaid-vest-for-all-seasons'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Spice'
				break;
			case includesProduct('/paxton-plaid-no-iron-shirt'):
				productObj.imgSrc = defaultImg;
				break;
			case includesProduct('/%23best-cotton-v-neck'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Green Grove'
				break;
			case includesProduct('/all-season-jacket'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Honey'
				break;
			case includesProduct('/urban-trails-knit-denim-jacket'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Sedona'
				break;
			case includesProduct('/vintage-wash-mix-pattern-cardigan'):
				productObj.imgSrc = defaultImg;
				productObj.color = 'Spice'
				break;
		}



		/* then setup the image add function to image and thumbnail sliders */
    
    let imageSlider = $('.product-primary-image');
    let thumbailSlider = $('.product-thumbnails');  
  
    function addImage(imageURL) {
			return `
			<div class="item">
				<a href="/on/demandware.static/-/Sites-itemmaster_CWC/default/dw3e736b77/large/22969_3693_main.jpg" target="_blank" class="product-image main-image image-zoom" itemprop="image" >
					<img data-src="${imageURL}?sw=525" class="primary-image lazyloaded" alt="image of Desert Vista Sweater, Mesa Rose Multi 0" data-zoom-image="${imageURL}" src="${imageURL}?sw=525">
					<div class="product-badges holder "> 
						<span class="product-badge product-image main-image"></span>
					</div>
				</a>
			</div>
				`;
  	}
    
    function addThumbnail(imageURL) {
      return `
      <div class="thumb">
          <div class="thumbnail-link" >
              <img class="productthumbnail lazyloaded" data-src="${imageURL}?sw=70" alt="Desert Vista Sweater, Mesa Rose Multi, large thumbnail" data-lgimg="{&quot;url&quot;:&quot;null&quot;, &quot;alt&quot;:&quot;image of Product image is missing!&quot; " src="${imageURL}?sw=70">
          </div>
      </div>
      `;
    }
    
    function injectSlide(mainImg, thmbImg){
      mainImg.slick('slickAdd', addImage(productObj.imgSrc));
      thmbImg.slick('slickAdd', addThumbnail(productObj.imgSrc));
    }
    
    // run on pageload
    injectSlide(imageSlider, thumbailSlider);





		//mutation observer for watching swatches
		var target = document.querySelector('.product-content');
		var config = { childList: true, subtree: true };
		var observer = new MutationObserver(subscriber);
		observer.observe(target, config);
		function subscriber(mutations) {
			mutations.forEach(mutation => {
				// ignore all but 1 mutation
				if (
					!mutation.target.classList.contains('swatch-tier1-group') &&
					!mutation.target.classList.contains('swatch-tier2-group') && 
					!mutation.target.classList.contains('product-color') &&
					mutation.previousSibling != null
					) {
						// run on a specific swatch
						if (document.querySelector(`li[data-varattrval='${productObj.color}']`).classList.contains('selected')) {
							console.log('Dover Red Selected');
							// wait for the slide images to load by polling for the first slide image
							poll('.product-primary-image.slick-initialized .slick-active img', function(){
								// reset the selectors for the sliders because they get destroyed when selecting a new color
								let imageSlider = $('.product-primary-image');
								let thumbailSlider = $('.product-thumbnails'); 
								// add slides back in
								injectSlide(imageSlider, thumbailSlider);
							});
						}
					}
			});
		}
    




	// end init
	}
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.swatches', init);

})();
  

