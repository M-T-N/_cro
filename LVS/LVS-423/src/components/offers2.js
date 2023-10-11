import { qs, qsa } from "../utils/qs";
import { desktopOfferDetails, stayDateTemplate } from "./stayDateTemplate2";
//import { loadNewOffer } from "./loadNewOffer2";

export function offers2(){

  const eachCard = qsa('.mod-offers-listing--item');

  /* Things to do to each card */
  eachCard.forEach(el => {

    // add divider line -- mobile
    el.querySelector('.o-offer__tagline').insertAdjacentHTML('afterend', `<span class="o-offer__divider o-offer__divider--mobile"></span>`);

    // wraps for desktop layout
    jQuery(el).find('.o-offer__tagline, .o-offer__divider--mobile, .o-offer__tag-detail').wrapAll('<div class="o-offer__text__title"></div>')

    // move 'view offer' button into div with 'book now'
    const viewOffer = el.querySelector('.o-offer__cta');
    el.querySelector('.mod-offers-listing__buttons').insertAdjacentHTML('beforeend', viewOffer.outerHTML);
    viewOffer.remove();

    // wrap other details and buttons
    jQuery(el).find('.o-offer__details-btn, .o-offer__text__collapsible, .mod-offers-listing__buttons').wrapAll('<div class="o-offer__text__details"></div>');


    // remove any <p> in the text details
    el.querySelectorAll('.o-offer__text__collapsible > p').forEach(el => el.remove());


  });

  /*  Individual cards */
  function updateCards() {

    //const atomicSaloon = document.querySelector('.mod-offers-listing--item a[href="/offers/atomic-offer.html"]').parentElement;
    const upTo30 = document.querySelector('.mod-offers-listing--item a[href="/offers/advance-purchase-offer.html"]').parentElement;
    const exclusiveOnline = document.querySelector('.mod-offers-listing--item a[href="/offers/up-to-20-off-offer.html"]').parentElement;
    const mostPopular = document.querySelector('.mod-offers-listing--item a[href="/offers/featured-offer.html"]').parentElement;
    const f1Heineken = document.querySelector('.mod-offers-listing--item a[href="/offers/f1-ticket-package-offer.html"]').parentElement;
    const raceSuite = document.querySelector('.mod-offers-listing--item a[href="/offers/f1-suite-offer.html"]').parentElement;
    const racetrackView = document.querySelector('.mod-offers-listing--item a[href="/offers/f1-racetrack-view-suites-offer.html"]').parentElement;
    const bigGame = document.querySelector('.mod-offers-listing--item a[href="/offers/the-big-game-2024-offer.html"]').parentElement;



    // atomicSaloon
		/***  Turned off, this is now the featured offer  ***/
    // (() => {
    //   atomicSaloon.querySelector('.o-offer__tagline').innerText = 'Atomic Saloon Show & Suites Package';
    //   atomicSaloon.querySelector('.o-offer__tag-detail').innerText = 'Enjoy up to 25% off suites & up to a $70 ticket discount on select seats';

    //   const stayDates = '7/5/2023 – 11/1/2023';
    //   const bookBefore = '10/30/2023';
    //   const offerDetails = 'Join Grazie® Rewards for up to an additional 5% off. $70 per ticket discount on select Atomic Saloon Show seating. Eligible seat categories include Reactor VIP Reserve and Rodeo Active Reserve. A link to an exclusive booking webpage will be provided to access the discounted tickets via confirmation e-mail after booking a stay. Cancellable / Refundable. Two-night minimum length of stay required.';
    //   atomicSaloon.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
    //   atomicSaloon.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', desktopOfferDetails(offerDetails));

    //   // tag the card
    //   atomicSaloon.setAttribute("data-offer", 'event');

    // })();


    // upTo30
    (() => {
      upTo30.querySelector('.o-offer__tagline').innerText = 'Advance Purchase';
      upTo30.querySelector('.o-offer__tag-detail').innerText = 'Up to 30% rates when you book 60 days in advance';

      const stayDates = '5/1/2023 – 12/31/2024';
      const bookBefore = 'At least 60 days in advance';
      const offerDetails = 'Join Grazie® Rewards for up to an additional 5% off. Must book at least 60 days in advance. Non-Cancellable / Non-Refundable. Full pre-payment of stay required.';
      upTo30.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
      upTo30.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', desktopOfferDetails(offerDetails));

      // tag the card
      upTo30.setAttribute("data-offer", 'hotel');

      // change image
      upTo30.querySelectorAll('source, img').forEach(function(el){
          el.srcset = 'https://www.venetianlasvegas.com/content/dam/venetian/resort/attractions/gondola-rides/outdoor-gondola-3_1200x800.jpg';
          el.dataset.srcset = 'https://www.venetianlasvegas.com/content/dam/venetian/resort/attractions/gondola-rides/outdoor-gondola-3_1200x800.jpg';
          el.dataset.src = 'https://www.venetianlasvegas.com/content/dam/venetian/resort/attractions/gondola-rides/outdoor-gondola-3_1200x800.jpg';
      });
    })();

    // exclusiveOnline
    (() => {
      exclusiveOnline.querySelector('.o-offer__tagline').innerText = 'Exclusive Online Savings';
      exclusiveOnline.querySelector('.o-offer__tag-detail').innerText = 'Up to 20% off with no nightly minimum stay';

      const stayDates = 'Through 12/31/2024';
      const bookBefore = '12/31/2024';
      const offerDetails = 'Join Grazie® Rewards for up to an additional 5% off. No nightly minimum stay.';
      exclusiveOnline.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
      exclusiveOnline.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', desktopOfferDetails(offerDetails));

      // tag the card
      exclusiveOnline.setAttribute("data-offer", 'hotel');

    })();

    // mostPopular
    (() => {
      mostPopular.querySelector('.o-offer__tagline').innerText = 'Most Flexible Rate';
      mostPopular.querySelector('.o-offer__tag-detail').innerText = 'Flexible 24-hour cancellation policy';

      const offerDetails = 'Free Cancellations. Fully Refundable. Flexible 24-hour cancellation policy. No nightly minimum stay. Available at The Venetian and The Palazzo.'
      mostPopular.querySelector('.o-offer__text__collapsible > ul').outerHTML = `
        <div class="o-offer__text__details">
          <div class="o-offer__text__details__item o-offer__text__details__item--mobile"><span class="bold">Offer Details:</span> ${offerDetails}</div>
        </div>
      `;
      mostPopular.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', desktopOfferDetails(offerDetails));

      // tag the card
      mostPopular.setAttribute("data-offer", 'hotel');

      // change image
      mostPopular.querySelectorAll('source, img').forEach(function(el){
        el.srcset = 'https://www.venetianlasvegas.com/content/dam/venetian/suites/venetian/luxury-king/king-bed-1_1200x800.jpg';
        el.dataset.srcset = 'https://www.venetianlasvegas.com/content/dam/venetian/suites/venetian/luxury-king/king-bed-1_1200x800.jpg';
        el.dataset.src = 'https://www.venetianlasvegas.com/content/dam/venetian/suites/venetian/luxury-king/king-bed-1_1200x800.jpg';
      });
    })();

    // f1Heineken
    (() => {
      f1Heineken.querySelector('.o-offer__tagline').innerText = 'FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX Ticket Package';

      const stayDates = 'Stay must include 11/18/2023';
      const bookBefore = 'Valid until 11/15/23 or sold out';
      const offerDetails = 'Grandstand tickets include food & non-alcoholic beverages each day. Tickets are non-transferable. After purchase, you will be contacted with additional details regarding your reservation. Three-night minimum length of stay required. Fully prepaid, non-refundable and non-cancellable.';
      f1Heineken.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
      f1Heineken.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', desktopOfferDetails(offerDetails));

      // tag the card
      f1Heineken.setAttribute("data-offer", 'event');

    })();

    // raceSuite
    (() => {
      raceSuite.querySelector('.o-offer__tag-detail').innerText = 'Elegant FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX Suites';

      const stayDates = 'Stay must include 11/18/2023';
      const bookBefore = 'Valid until 11/15/23 or sold out';
      const offerDetails = 'Three-night minimum length of stay. Fully prepaid, non-refundable and non-cancellable.';
      raceSuite.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
      raceSuite.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', desktopOfferDetails(offerDetails));

      // tag the card
      raceSuite.setAttribute("data-offer", 'event');

    })();

    // racetrackView
    (() => {
      racetrackView.querySelector('.o-offer__tag-detail').innerText = 'Enjoy a Luxury Palazzo Suite with a view';

      const stayDates = 'Stay must include 11/18/2023';
      const bookBefore = 'Valid Until 11/15/23 or sold out';
      const offerDetails = 'Three-night minimum length of stay. Fully prepaid, non-refundable and non-cancellable.';
      racetrackView.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
      racetrackView.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', desktopOfferDetails(offerDetails));

      // tag the card
      racetrackView.setAttribute("data-offer", 'event');

    })();

    // bigGame
    (() => {
      bigGame.querySelector('.o-offer__tagline').innerText = 'The Big Game 2024 Offer';
      bigGame.querySelector('.o-offer__tag-detail').innerText = 'Get in on all the football action this February';

      const stayDates = '2/4/2024 – 2/16/2024';
      const bookBefore = '2/8/2024';
      const offerDetails = 'Experience the excitement of the Big Game when it arrives in Las Vegas in 2024. Three-night minimum length of stay. Fully prepaid, non-refundable and non-cancellable. Available at The Venetian and The Palazzo.';
      bigGame.querySelector('.o-offer__text__collapsible > ul').outerHTML = stayDateTemplate(stayDates, bookBefore, offerDetails);
      bigGame.querySelector('.o-offer__tag-detail').insertAdjacentHTML('afterend', desktopOfferDetails(offerDetails));

      // tag the card
      bigGame.setAttribute("data-offer", 'event');

    })();


  }

  updateCards();

}