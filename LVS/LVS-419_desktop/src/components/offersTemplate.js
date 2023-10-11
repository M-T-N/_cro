import { qs, qsa } from "../utils/qs";
import { offerFetch } from "./offerFetch";

export function offersTemplate(image, offerLink, tagline, stayDates, bookBefore, offerDetails){

  const offersHTML = `
  <div class="mod-offers-listing--item o-offer">
    <a href="${offerLink}">
      <figure class="o-offer__media scaled">
         <picture class="content img-normal-size">
            <source class="img-normal-size" data-srcset="${image}" media="(min-width: 980px)" srcset="${image}" data-src="${image}">
            <source data-srcset="${image}" srcset="${image}" data-src="${image}">
            <img class=" ls-is-cached lazyloaded" data-src="${image}" srcset="${image}" data-srcset="${image}" src="${image}">
         </picture>
         <picture class="content img-large-size">
            <source class="img-large-size" data-srcset="${image}" media="(min-width: 980px)" srcset="${image}" data-src="${image}">
            <source data-srcset="${image}" srcset="${image}" data-src="${image}">
            <img class="lazyload" data-src="${image}" srcset="${image}" data-srcset="${image}">
         </picture>
      </figure>
   </a>
   <div class="js-details-content o-offer__text">
      <div class="o-offer__text--wrap">
         <p class="o-offer__tagline">${tagline}</p>
         <span class="o-offer__divider o-offer__divider--mobile"></span>
         <span class="o-offer__divider o-offer__divider--desktop"></span>
         <div class="js-details-btn o-offer__details-btn">
            <a class="btn-arrow btn-arrow--down" href="#">
            <span>View Details</span>
            </a>
         </div>
         <div class="o-offer__text__collapsible" style="display: block;">
            <div class="o-offer__text__details">
               <div class="o-offer__text__details__item"><span class="bold">Stay Dates:</span> ${stayDates}</div>
               <div class="o-offer__text__details__item"><span class="bold">Must Book Before:</span> ${bookBefore}</div>
               <div class="o-offer__text__details__item"><span class="bold">Offer Details:</span> ${offerDetails}</div>
            </div>
         </div>
      </div>
      <div class="mod-offers-listing__buttons">
         <a class="cta cta--arrow" href="https://www.venetianlasvegas.com/booking?start_month=current">
            <span>
               <aside class="icon" role="presentation">
                  <svg>
                     <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#calendar"></use>
                  </svg>
               </aside>
               Book Now
            </span>
            <svg role="presentation">
               <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#cta_red"></use>
            </svg>
         </a>
         <a class="o-offer__cta btn-arrow btn-arrow--right js-offer-link" href="/offers/advance-purchase-offer.html">
            <span>View Offer</span>
            <svg role="presentation">
               <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#nav_mobile_caret"></use>
            </svg>
         </a>
      </div>
    </div>
  </div>
  `;

  return offersHTML;


}