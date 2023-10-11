import { qs, qsa } from "../utils/qs";

export function hero(){

  // set elements
  const heroWrapper = qs('.injectioncontainerwrapper > .mod-offers-listing-section');
  const heroText = heroWrapper.querySelector('.mod-offers-listing__title').innerText;

  // new html for hero
  heroWrapper.outerHTML = `
  <section class="mod-offers-listing-section">        
    <div class="mod-offers-listing__title">
      <h1>Las Vegas Hotel Deals <br>& Vacation Packages</h1>
    </div>
    <div class="mod-offers-listing__grazie-reward">
      <div class="mod-offers-listing__grazie-reward__img">
        <img src="https://www.venetianlasvegas.com/etc.clientlibs/venetian-booking-engine/clientlibs/main/resources/assets/svg/logo--grazie.svg" alt="">
      </div>
      <div class="mod-offers-listing__grazie-reward__content">
        <div class="mod-offers-listing__grazie-reward__content__header"><h3>Join Grazie Rewards now for up to an additional 5% off</h3>
        </div>
        <div class="mod-offers-listing__grazie-reward__content__copy">
          <p>Members of Grazie Rewards always get the best suite rates, as well as exclusive email offers, dining promotions and entertainment perks.</p>
        </div>
        <div class="mod-offers-listing__grazie-reward__content__links">
          <a class="cta cta--arrow" href="https://www.venetianlasvegas.com/grazie/register.html">
            <span>
               Join Now
            </span>
            <svg role="presentation">
               <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#cta_red"></use>
            </svg>
         </a>
         <a class="o-offer__cta btn-arrow btn-arrow--right js-offer-link" href="https://www.venetianlasvegas.com/grazie-program/about.html">
          <span>Learn More</span>
          <svg role="presentation"><use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#nav_mobile_caret"></use></svg>
          </a>
        </div>
      </div>
      <svg class="mod-offers-listing__grazie-reward__bg">
        <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#footer-logo"></use>
      </svg>
    </div>
  </section>
  `;

}