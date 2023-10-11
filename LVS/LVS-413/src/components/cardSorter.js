import { qs, qsa } from "../utils/qs";

export function cardSorter(){

  // tag the cards
  // const cards = qsa('.mod-offers-listing .o-offer');
  // for (var i=0; i<cards.length; i++) {
  //   cards[i].setAttribute("data-offer", OTYPE[i]);
  // }


  // add divs for offer type
  qs('.mod-offers-listing--group').insertAdjacentHTML('afterbegin', `
    <div class="mod-offers-listing--group__toggle">
      <div class="mod-offers-listing--group__toggle--hotel mod-offers-listing--group__toggle__item active">
        <span>Hotel Offers</span>
      </div>
      <div class="mod-offers-listing--group__toggle--event mod-offers-listing--group__toggle__item">
        <span>Special Event Rates & Packages</span>
      </div>      
    </div>
    <div class="mod-offers-listing--group--wrap">
      <h4 class="mod-offers-listing--group__header" id="hotelOffers">Hotel Offers</h4>
      <div class="mod-offers-listing--group--hotel mod-offers-listing--group__category"></div>
    </div>
    <div class="mod-offers-listing--group--wrap">
      <h4 class="mod-offers-listing--group__header" id="eventOffers">Special Event Rates & Packages</h4>
      <div class="mod-offers-listing--group--event mod-offers-listing--group__category"></div>
    </div>
  `);

  // move cards into container
  qsa('.mod-offers-listing--item').forEach(el => {
    if (el.dataset.offer == 'hotel') {
      jQuery(el).appendTo('.mod-offers-listing--group--hotel');
    }
    if (el.dataset.offer == 'event') {
      jQuery(el).appendTo('.mod-offers-listing--group--event');
    }
  });

  // move Atomic Saloon position to before The Big Game
  $(document.querySelector('.mod-offers-listing--item a[href="/offers/atomic-offer.html"]').parentElement).insertBefore(document.querySelector('.mod-offers-listing--item > a[href="/offers/the-big-game-2024-offer.html"]').parentElement)


  // toggle click even to scroll down page
  qsa('.mod-offers-listing--group__toggle__item').forEach(el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('mod-offers-listing--group__toggle--hotel')) {
        el.classList.add('active');
        qs('.mod-offers-listing--group__toggle--event').classList.remove('active');
      } 
      if (el.classList.contains('mod-offers-listing--group__toggle--event')) {
        el.classList.add('active');
        qs('.mod-offers-listing--group__toggle--hotel').classList.remove('active');
        //desktop
        if (window.innerWidth >= 820) {
          jQuery('html, body').animate({
            scrollTop: (jQuery('#eventOffers').offset().top - 200)
          }, 200, 'linear');
        }
        //mobile 
        if (window.innerWidth < 820) {
          jQuery('html, body').animate({
            scrollTop: (jQuery('#eventOffers').offset().top - 80)
          }, 200, 'linear');
        }
      }
    });
  });


}