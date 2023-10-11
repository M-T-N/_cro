import { qs, qsa } from "../utils/qs";


export function featuredTemplate(image, offerLink, tagline, stayDates, bookBefore, offerDetails){

  const featuredHTML = `
  <div class="mod-offers-listing__featured--wrap">
    <a class="mod-offers-listing__featured__media" href="${offerLink}">
      <figure class="o-offer__media scaled">
          <picture class="content">
            <source data-srcset="${image}.resize.0.0.776.517.jpg" media="(min-width: 980px)" srcset="${image}.resize.0.0.776.517.jpg">
            <source data-srcset="${image}.resize.0.0.474.316.jpg" srcset="${image}.resize.0.0.474.316.jpg">
            <img class=" ls-is-cached lazyloaded" data-src="${image}.resize.0.0.776.517.jpg" alt="Up to 33% off" src="${image}.resize.0.0.776.517.jpg">
          </picture>
      </figure>
    </a>
    <div class="js-details-content o-offer__text">
      <h3 class="o-offer__tagline"><a href="/offers/best-offer.html">${tagline}</a></h3>
      <span class="o-offer__divider"></span>
      <div class="o-offer__text__details">
          <div class="o-offer__text__details__item"><span class="bold">Stay Dates:</span> ${stayDates}</div>
          <div class="o-offer__text__details__item"><span class="bold">Must Book Before:</span> ${bookBefore}</div>
          <div class="o-offer__text__details__item"><span class="bold">Offer Details:</span> ${offerDetails}</div>
      </div>
      <ul class="mod-offers-listing__buttons">
          <li>
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
          </li>
          <li>
            <a class="o-offer__cta btn-arrow btn-arrow--right js-offer-link" href="/offers/best-offer.html">
                <span>View Offer</span>
                <svg role="presentation">
                  <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#nav_mobile_caret"></use>
                </svg>
            </a>
          </li>
      </ul>
    </div>
  </div>
  `;

  return featuredHTML;
}