// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  function pad(num) {
    return `0${num}`.substr(-2);
  }

  // determine dates
  const today = new Date();
  let arrival = new Date();
  // set arrival to the next friday
  if (today.getDay() < 6) {
    arrival.setDate(today.getDate() + (5 - today.getDay()));
  } else {
    arrival.setDate(today.getDate() + 6);
  }
  // set departure to the sunday after
  let departure = new Date(arrival);
  departure.setDate(arrival.getDate() + 2);
  // stringify dates
  arrival = `${arrival.getFullYear()}-${pad(arrival.getMonth() + 1)}-${pad(
    arrival.getDate()
  )}`;
  departure = `${departure.getFullYear()}-${pad(
    departure.getMonth() + 1
  )}-${pad(departure.getDate())}`;

  const cta = `<a href="/booking?adults[]=1&arrival_date=${arrival}&children[]=0&departure_date=${departure}&view=suites&filter=prestige" class="mod-hero__top__cta cta--arrow cta" aria-label="Book Now" tabindex="0"> <span>Book Now</span> <svg role="presentation"><use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#cta_red"></use></svg> </a>`;

  document
    .querySelector('.primary .mod-suites-browse-listing:nth-of-type(2)')
    .insertAdjacentHTML(
      'afterend',
      `
      <section class="mod-suites-browse-listing">
        <h2 class="mod-suites-browse-listing__title">Prestige Club Lounge</h2>
        <p class="mod-suites-browse-listing__description">Arrive in style with Prestige Club Lounge, the quiet center of luxury. A club level lounge upgrade you need to experience to believe.</p>
        <div class="mod-suites-browse-listing__card">
            <div class="mod-suites-browse-listing__card-media">
              <div id="suites-browse-listing-gallery-fortuna_pal_premier" class="mod-suites-browse-listing-gallery o-small-gallery">
                  <div class="o-small-gallery__controls" aria-hidden="true">
                    <button type="button" class="o-small-gallery__control--prev slick-prev slick-arrow" style="">
                        <svg>
                          <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#left_arrow"></use>
                        </svg>
                    </button>
                    <button type="button" class="o-small-gallery__control--next slick-next slick-arrow" style="">
                        <svg>
                          <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#right_arrow"></use>
                        </svg>
                    </button>
                  </div>
                  <div class="o-small-gallery__items slick-initialized slick-slider">
                    <div aria-live="polite" class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 1370px; transform: translate3d(-274px, 0px, 0px);" role="listbox">
                          <div class="o-small-gallery__item link-hover-scale slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" style="width: 274px;">
                              <a href="/towers/the-palazzo/fortuna-premium-king-suites.html" tabindex="-1">
                              <img class="content lazyloaded" data-src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/bathroom-1_1200x800.jpg.resize.0.0.693.462.jpg" alt="Bathroom" src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/bathroom-1_1200x800.jpg.resize.0.0.693.462.jpg">
                              </a>
                          </div>
                          <div class="o-small-gallery__item link-hover-scale slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide20" style="width: 274px;">
                              <a class="js-video-btn" data-href="vtd284xa3j" data-text="The Palazzo Premium King Suite" tabindex="0" role="button" title="Play Video: The Palazzo Premium King Suite">
                                <img class="content lazyloaded" data-src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/living-room-1_1200x800.jpg.resize.0.0.693.462.jpg" alt="Premium King Suite " src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/living-room-1_1200x800.jpg.resize.0.0.693.462.jpg">
                                <span>
                                    <svg role="presentation">
                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#video_play_button"></use>
                                    </svg>
                                </span>
                              </a>
                          </div>
                          <div class="o-small-gallery__item link-hover-scale slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide21" style="width: 274px;">
                              <a href="/towers/the-palazzo/fortuna-premium-king-suites.html" tabindex="-1">
                              <img class="content lazyloaded" data-src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/king-bed-2_1200x800.jpg.resize.0.0.693.462.jpg" alt="Oversized King Bed" src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/king-bed-2_1200x800.jpg.resize.0.0.693.462.jpg">
                              </a>
                          </div>
                          <div class="o-small-gallery__item link-hover-scale slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide22" style="width: 274px;">
                              <a href="/towers/the-palazzo/fortuna-premium-king-suites.html" tabindex="-1">
                              <img class="content lazyloaded" data-src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/bathroom-1_1200x800.jpg.resize.0.0.693.462.jpg" alt="Bathroom" src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/bathroom-1_1200x800.jpg.resize.0.0.693.462.jpg">
                              </a>
                          </div>
                          <div class="o-small-gallery__item link-hover-scale slick-slide slick-cloned" data-slick-index="3" id="" aria-hidden="true" tabindex="-1" style="width: 274px;">
                              <a class="js-video-btn" data-href="vtd284xa3j" data-text="The Palazzo Premium King Suite" tabindex="-1" role="button" title="Play Video: The Palazzo Premium King Suite">
                                <img class="content ls-is-cached lazyloaded" data-src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/living-room-1_1200x800.jpg.resize.0.0.693.462.jpg" alt="Premium King Suite " src="/content/dam/venetian/suites/palazzo/fortuna-premium-king/living-room-1_1200x800.jpg.resize.0.0.693.462.jpg">
                                <span>
                                    <svg role="presentation">
                                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#video_play_button"></use>
                                    </svg>
                                </span>
                              </a>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div id="suites-browse-listing-gallery-fortuna_pal_premier__counter" class="o-small-gallery__counter" aria-hidden="true">
                    <span class="o-small-gallery__paging o-small-gallery__counter--current">1</span>
                    <span class="">of</span>
                    <span class="o-small-gallery__paging o-small-gallery__counter--total">3</span>
                  </div>
              </div>
            </div>
            <div class="mod-suites-browse-listing__card-text">
              <h3 class="mod-suites-browse-listing__card-title"><a href="/towers/the-palazzo/fortuna-premium-king-suites.html">Prestige Club Lounge</a></h3>
              <p class="mod-suites-browse-listing__card-tags">12,000 sqft lounge</p>
              <p class="mod-suites-browse-listing__card-description">Arrive in style with Prestige Club Lounge. Architectural Digest raved that it was one of ten hotels “where you should splurge on a club-level upgrade.” Prestige Club Lounge in The Palazzo tower is the last word in luxury. This 12,000-square-foot space is for those who love sophistication and service. Sip on a complimentary Prosecco. Start your day with Continental breakfast—all 23 floors above the Strip.</p>
              <div class="mod-suites-browse-listing__card-amenities" role="list">
                  <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
                    <div role="listitem">Private check-in w/ Prosecco</div>
                  </div>
                  <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
                    <div role="listitem">Daily continental breakfast</div>
                  </div>
                  <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
                    <div role="listitem">Afternoon coffee & tea</div>
                  </div>
                  <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
                    <div role="listitem">Daily cocktail reception</div>
                  </div>
                  <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
                    <div role="listitem">Business Center access</div>
                  </div>
              </div>
              <div class="cta-stack">
                  <a class="cta cta--outline-arrow" href="https://www.venetian.com/resort/amenities/prestige-club-lounge.html">
                    <span>Learn More</span>
                    <i>
                        <svg role="presentation">
                          <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#cta_outline"></use>
                        </svg>
                    </i>
                  </a>
                  ${cta}
              </div>
            </div>
        </div>
      </section>
      `
    );

  // $('#suites-browse-listing-gallery-prestige_pal .o-small-gallery__items').slick();
}

poll('.primary .mod-suites-browse-listing:nth-of-type(2)', init);
