import { qs, qsa } from "./qs";
export function upgradeColumn() {

  const upgradeLink = qs('.receipt__actions__nor1-anchor').href;

  const userName = qs('.progress-navigation__receipt-inner__msg').innerHTML.split('Vegas, ')[1].slice(0 , -1);

  const upgradeColumn = `
   <div class="upgrade__suite">
    <div class="upgrade__suite__header">
      <div class="upgrade__suite__header__img">
        <img src="//cdn.optimizely.com/img/8200950428/d543b20ed3b54e24b57fb6fad9015ee5.jpg" alt="">
      </div>
      <div class="upgrade__suite__header__copy">
        <h3>Upgrade Your Suite</h3>
        <p>${userName}, you are eligible for a Custom Upgrade upon check-in for as little as $30 extra per night.</p>
        <button>
          <a href="${upgradeLink}">
            Upgrade Now
          </a>
        </button>
      </div>
    </div>
    <div class="upgrade__suite__body">
      <div class="upgrade__suite__body__header">
        <h3>Reservations Fill Up Quickly</h3>
        <h3>Start Planning Your Stay Today</h3>
      </div>
      <div class="upgrade__suite__body__images">
        <a href="https://www.venetianlasvegas.com/restaurants.html" target="_blank" class="upgrade__suite__body__images__img">
          <img src="//cdn.optimizely.com/img/8200950428/6c6e84918fad4410b1ebe2d0ec1ffa31.jpg" alt="Restaurants">
          <span>Restaurants</span>
        </a>
        <a href="https://www.venetianlasvegas.com/resort/amenities/canyon-ranch.html" target="_blank" class="upgrade__suite__body__images__img">
          <img src="//cdn.optimizely.com/img/8200950428/8125b6d0cfc6463e81747563d4886157.jpg" alt="Spa">
          <span>Spa</span>
        </a>
        <a href="https://www.venetianlasvegas.com/entertainment.html" target="_blank" class="upgrade__suite__body__images__img">
          <img src="//cdn.optimizely.com/img/8200950428/bd3b6a573efb49b9bac39d783f8a496b.jpg" alt="Entertainment">
          <span>Entertainment</span>
        </a>
        <a href="https://www.venetianlasvegas.com/resort/amenities/pools/cabanas.html" target="_blank" class="upgrade__suite__body__images__img">
          <img src="//cdn.optimizely.com/img/8200950428/d74cb2d5ed114558bef62a8855b98b18.jpg" alt="Cabanas">
          <span>Cabanas</span>
        </a>
      </div>
    </div>
   </div>
  `;

  qs('.receipt__suite').insertAdjacentHTML('beforebegin', upgradeColumn);
}