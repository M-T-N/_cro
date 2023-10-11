export function loadNewOffer(offerTitle, offerSubtitle, stayDates, bookBefore, offerDetails, viewOfferURL, imageURL ){

  const newOffer = `
  <div class="mod-offers-listing--item o-offer" data-offer="event">
    <a href="/offers/the-big-game-2024-offer.html">
      <figure class="o-offer__media scaled">
          <picture class="content img-normal-size">
            <source class="img-normal-size" data-srcset="${imageURL}.resize.0.0.614.408.jpg" media="(min-width: 980px)" srcset="${imageURL}.resize.0.0.614.408.jpg">
            <source data-srcset="${imageURL}.resize.0.0.594.396.jpg" srcset="${imageURL}.resize.0.0.594.396.jpg">
            <img class=" lazyloaded" data-src="${imageURL}.resize.0.0.614.408.jpg" alt="The Big Game 2024 Offer" src="${imageURL}.resize.0.0.614.408.jpg">
          </picture>
          <picture class="content img-large-size">
            <source class="img-large-size" data-srcset="${imageURL}.resize.0.0.1250.834.jpg" media="(min-width: 980px)">
            <source data-srcset="${imageURL}.resize.0.0.594.396.jpg">
            <img class="lazyload" data-src="${imageURL}.resize.0.0.614.408.jpg" alt="The Big Game 2024 Offer">
          </picture>
          <h3>
            <span>The</span>
            <strong>Big Game 2024</strong>
          </h3>
      </figure>
    </a>
    <div class="js-details-content o-offer__text">
      <div class="o-offer__text__title">
          <p class="o-offer__tagline">${offerTitle}</p>
          <span class="o-offer__divider o-offer__divider--mobile"></span>
          <p class="o-offer__tag-detail">${offerSubtitle}</p>
          <div class="o-offer__text__offerDetails">
            <span class="bold">Offer Details:</span> ${offerDetails}
          </div>
      </div>
      <div class="o-offer__text__details">
          <div class="js-details-btn o-offer__details-btn">
            <a class="btn-arrow btn-arrow--down" href="#">
            <span>View Details</span>
            </a>
          </div>
          <div class="o-offer__text__collapsible" style="display: block;">
            <div class="o-offer__text__details--side">
                <div class="o-offer__text__details__item"><span class="bold">Stay Dates:</span> <br>${stayDates}</div>
                <div class="o-offer__text__details__item"><span class="bold">Must Book Before:</span> <br>${bookBefore}</div>
                <div class="o-offer__text__details__item o-offer__text__details__item--mobile"><span class="bold">Offer Details:</span> ${offerDetails}</div>
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
            <a class="o-offer__cta btn-arrow btn-arrow--right js-offer-link" href="${viewOfferURL}">
                <span>View Offer</span>
                <svg role="presentation">
                  <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#nav_mobile_caret"></use>
                </svg>
            </a>
          </div>
      </div>
    </div>
  </div>
  `;

  return newOffer;

}