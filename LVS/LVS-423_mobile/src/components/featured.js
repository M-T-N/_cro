import { qs } from "../utils/qs";
import { stayDateTemplate } from "./stayDateTemplate";

export function featured(){

  // store image and text
  const featuredImg = qs('.mod-offers-listing__featured__media').outerHTML;
  const featuredText = qs('.mod-offers-listing__featured .js-details-content').outerHTML;

  // add featured header and wrapped content
  qs('.mod-offers-listing__featured').innerHTML = `
    <h3 class="mod-offers-listing__featured__header">Featured Offer</h3>
    <div class="mod-offers-listing__featured--wrap">
      ${featuredImg}
      ${featuredText}
    </div>
  `;

  const stayDates = '7/5/2023 – 11/1/2023';
  const bookBefore = '10/30/2023';
  const offerDetails = 'Join Grazie® Rewards for up to an additional 5% off. $70 per ticket discount on select Atomic Saloon Show seating. Eligible seat categories include Reactor VIP Reserve and Rodeo Active Reserve. A link to an exclusive booking webpage will be provided to access the discounted tickets via confirmation e-mail after booking a stay. Cancellable / Refundable. Two-night minimum length of stay required.';

  // change title of card
  qs('.mod-offers-listing__featured--wrap .o-offer__tagline a').innerText = 'Atomic Saloon Show & Suites Package';

  // add text to tag detail (offer description)
  qs('.mod-offers-listing__featured .js-details-content .o-offer__tag-detail').innerText = 'Enjoy up to 25% off suites & up to a $70 ticket discount on select seats';

  // add red line
  qs('.mod-offers-listing__featured .js-details-content .o-offer__tag-detail').insertAdjacentHTML('afterend', `<span class="o-offer__divider"></span>`);


  // new text section
  qs('.mod-offers-listing__featured .js-details-content > div').outerHTML = `
    <div class="o-offer__text__details">
      <div class="o-offer__text__details__item"><span class="bold">Stay Dates:</span> ${stayDates}</div>
      <div class="o-offer__text__details__item"><span class="bold">Must Book Before:</span> ${bookBefore}</div>
      <div class="o-offer__text__details__item"><span class="bold">Offer Details:</span> ${offerDetails}</div>
    </div>
  `;

  // change 'view offer' button styling
  qs('.mod-offers-listing__featured .mod-offers-listing__buttons li:nth-child(2) a').outerHTML = `
    <a class="o-offer__cta btn-arrow btn-arrow--right js-offer-link" href="/offers/best-offer.html">
      <span>View Offer</span>
      <svg role="presentation"><use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#nav_mobile_caret"></use></svg>
    </a>
  `;



}