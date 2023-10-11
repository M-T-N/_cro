import { qs } from "./qs";

export function bottomBanner(){

  const bannerLink = qs('.receipt__actions a').href;

  qs('.receipt__actions').innerHTML = `
    <a class="receipt__actions__link" href="${bannerLink}">
      <div class="receipt__actions__link__img">
        <img src="//cdn.optimizely.com/img/8200950428/d65799e824b04478bf3ff87bd4db7b50.png" alt="Grazie Rewards">
      </div>
      <div class="receipt__actions__link__copy">
        <div class="receipt__actions__link__copy__text">
          <p>Join Grazie Rewards now and get 5% off all future bookings when you book direct!</p>
        </div>
        <div class="receipt__actions__link__copy__button">
          <span>Sign Up</span>
        </div>
      </div>
    <a>
  `;
}