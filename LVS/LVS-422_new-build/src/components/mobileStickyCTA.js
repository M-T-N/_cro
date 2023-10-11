import { qs, qsa } from "../utils/qs";



export function mobileStickyCTA(){

	// create the sticky cta
	qs('main').insertAdjacentHTML('beforeend', `
		<div class="mobile__sticky-cta">
			<a onclick="openBooking"  class="offer-details__cta offers-hero__cta book-modal tin-cta">
				<div>Book Now</div>
				<svg class="offer-contact__caret" role="presentation" src="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg">
					<use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#video_play_button"></use>
				</svg>
			</a>
		</div>
	`);


  // intersection observer when form goes out of view
  // const onIntersection = (entries) => {
  //   for (const entry of entries) {
  //     if (!entry.isIntersecting) {
  //       qs('.mobile__sticky-cta').classList.add('active');
  //     }
  //     if (entry.isIntersecting) {
  //       qs('.mobile__sticky-cta').classList.remove('active');
  //     }
  //   }
  // };
  //const observer = new IntersectionObserver(onIntersection);
  //observer.observe(document.querySelector('.offers-column__header__booking__button .tin-cta'));



  var observer = new IntersectionObserver(observerCallback);

  function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
          qs('.mobile__sticky-cta').classList.remove('active');
        }
        if (!entry.isIntersecting) {
          qs('.mobile__sticky-cta').classList.add('active');
        }
    });
  };

  document.querySelectorAll('.offer-hero, .offers-column__header__booking__button .tin-cta').forEach((i) => {
      if (i) {
        observer.observe(i);
      }
  });


  // document.querySelectorAll('.offer-details__fixed, .offers-column__header__booking__button .tin-cta').forEach(i => {
  //   if (i) {
  //     const observer = new IntersectionObserver((entries) => {
  //       onIntersection(entries, observer, i);
  //     });
  //     observer.observe(i);
  //   }
  // });




  // const onIntersection = (entries, observer, i) => {
  //   entries.forEach(entry, i => {
  //     if (!entry.isIntersecting) {
  //       qs('.mobile__sticky-cta').classList.add('active');
  //     }
  //     if (entry.isIntersecting) {
  //       qs('.mobile__sticky-cta').classList.remove('active');
  //     }
  //   })
  // };


}