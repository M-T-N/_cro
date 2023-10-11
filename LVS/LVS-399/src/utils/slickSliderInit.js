export function slickSliderInit() {

  // get current slider images
  let sliderImages = Object.keys(localStorage)
                    .filter( (key)=> key.startsWith('VEN399') )
                    .map( (key)=> localStorage[key] );




  // build the slickslider gallery
  let slider = `
    <section class="suite-card__media ng-tns-c93-7 ng-star-inserted">
      <div class="suite-card__media-content ng-tns-c93-7">
        <app-suite-gallery _nghost-ngr-c87="" class="ng-tns-c93-7 ng-star-inserted">
          <div _ngcontent-ngr-c87="" class="suite-gallery">
            <div _ngcontent-ngr-c87="" class="suite-gallery__carousel"> 
  `;

  for ( i of sliderImages) {
    slider += `
    <div _ngcontent-ngr-c87="" class="suite-gallery__slide ng-star-inserted" tabindex="0" style="">
      <div _ngcontent-ngr-c87="" class="suite-gallery__slide-content">
        <picture _ngcontent-ngr-c87="" class="ng-star-inserted">
          <source _ngcontent-ngr-c87="" media="(max-width: 639px)" lazyload="${i}" srcset="${i}">
          <img _ngcontent-ngr-c87="" alt="Suite preview image" class="suite-gallery__slide-content-img ng-lazyloaded" src="${i}">
        </picture>
      </div>
    </div>
  `}

  slider += `
          </div>
        </div>
      </app-suite-gallery>
    </div>
    <div class="suite-card__controls ng-tns-c93-7 ng-trigger ng-trigger-suiteControlsTrigger ng-star-inserted" style="opacity: 1;">
     <button class="suite-card__arrow suite-card__arrow--previous ng-tns-c93-7" style="">
        <svg-icon class="suite-card__arrow-icon ng-tns-c93-7">
           <svg width="29px" height="16px" viewBox="0 0 29 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Group 13</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Design-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                 <g id="UI-Guide---Select-Dates" transform="translate(-158.000000, -1249.000000)" stroke-width="2" stroke="currentColor">
                    <g id="Calendar-Arrows/Default-Copy" transform="translate(173.000000, 1257.000000) rotate(-180.000000) translate(-173.000000, -1257.000000) translate(160.000000, 1250.000000)">
                       <g id="Group-13">
                          <polyline id="Path-8-Copy-4" transform="translate(23.000000, 7.000000) rotate(-90.000000) translate(-23.000000, -7.000000) " points="16 4.14231424 22.8176824 10 30 4"></polyline>
                          <path d="M24,7 L0,7" id="Line-3-Copy" stroke-linecap="square"></path>
                       </g>
                    </g>
                 </g>
              </g>
           </svg>
        </svg-icon>
     </button>
     <span class="suite-card__counter ng-tns-c93-7"><span class="suite-card__counter-current ng-tns-c93-7">1</span><span class="suite-card__counter-of ng-tns-c93-7">of</span><span class="suite-card__counter-total ng-tns-c93-7">4</span></span>
     <button class="suite-card__arrow suite-card__arrow--next ng-tns-c93-7" style="">
        <svg-icon class="suite-card__arrow-icon ng-tns-c93-7">
           <svg width="29px" height="16px" viewBox="0 0 29 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Calendar Arrows/Default</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Design-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                 <g id="UI-Guide---Select-Dates" transform="translate(-204.000000, -1249.000000)" stroke="currentColor">
                    <g id="Calendar-Arrows/Desktop+Tablet/Default" transform="translate(205.000000, 1250.000000)">
                       <g id="Group-13">
                          <polyline id="Path-8-Copy-4" stroke-width="2" transform="translate(23.000000, 7.000000) rotate(-90.000000) translate(-23.000000, -7.000000) " points="16 4.14231424 22.8176824 10 30 4"></polyline>
                          <path d="M24,7 L0,7" id="Line-3-Copy" stroke-width="2" stroke-linecap="square"></path>
                       </g>
                    </g>
                 </g>
              </g>
           </svg>
        </svg-icon>
     </button>
    </div>
  </section>
  `;


  // insert slider into the image place
  document.querySelector('.receipt__suite__image').innerHTML = slider;


  //initiate slick
  $('.suite-gallery__carousel').slick({
    arrows: true,
    centerPadding: "50px",
    dots: false,
    draggable: true,
    infinite: true,
    nextArrow: "button.suite-card__arrow.suite-card__arrow--next.ng-tns-c93-12.slick-arrow",
    prevArrow: "button.suite-card__arrow.suite-card__arrow--previous.ng-tns-c93-12.slick-arrow",
    rows: 1,
    swipe: true,
    useTransform: true,
    zIndex: 1000
  });
}