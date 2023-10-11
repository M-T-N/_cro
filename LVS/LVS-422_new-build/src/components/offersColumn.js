import { qs, qsa } from "../utils/qs";
import * as variable from "./variables"


const details = [];
qsa('.offer-details__inclusions-list_item div').forEach(el => {
  details.push(el.innerText);
});




export function offersColumn(){

  const offersColumn = `
   <section class="offers-column">
    <div class="offers-column__header">
      <div class="offers-column__header__calendar">
        <div class="calendar-icon"></div>
        <div class="offers-column__header__calendar__dates">
          ${variable.dates}
        </div>
      </div>
      <div class="offers-column__header__expire">
        <p>${variable.expireDate.replaceAll(/\S*/g, word => {
              return word.slice(0, 1) + word.slice(1).toLowerCase();
            })}
        </p>
      </div>
      <div class="offers-column__header__save">
        ${variable.saveButton}
      </div>
      <div class="offers-column__header__details">
        <ul>
          ${details.map(detail => `<li>` + detail +`</li>`).join('')}
        </ul>
      </div>
      <div class="offers-column__header__booking">
        <div class="offers-column__header__booking__button">
          <a class="offer-details__cta offers-hero__cta book-modal tin-cta">
            <div>Book Now</div>
            <svg class="offer-contact__caret" role="presentation" src="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg">
              <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#video_play_button"></use>
            </svg>
          </a>
        </div>
        <div class="offers-column__header__booking__divider">
          <span>OR</span>
        </div>
        <div class="offers-column__header__booking__contact">
          <div class="offers-column__header__booking__contact__host">
            <div class="offers-column__header__booking__contact__host__header">
              <h5>Contact Grazie Services:</h5>
            </div>
            <div class="offers-column__header__booking__contact__host__info">
              <div class="offers-column__header__booking__contact__host__info__number">
                <h5>
									${variable.contactInfoNumber1}
								</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offers-column__header__intro">
        <div class="offers-column__header__intro__header">
          <h3>${variable.introHeader}</h3>
        </div>
        <div class="offers-column__header__intro__copy">
          <p>${variable.introCopy}</p>
        </div>
      </div>
    </div>
    <div class="offers-column__body">
      ${variable.columnOffers}
    </div>
   </section>
  `;


  
  return offersColumn;

}





export function offersColumnWithHost(){

  const offersColumn = `
   <section class="offers-column">
    <div class="offers-column__header">
      <div class="offers-column__header__calendar">
        <div class="calendar-icon"></div>
        <div class="offers-column__header__calendar__dates">
          ${variable.dates}
        </div>
      </div>
      <div class="offers-column__header__expire">
        <p>${variable.expireDate.replaceAll(/\S*/g, word => {
              return word.slice(0, 1) + word.slice(1).toLowerCase();
            })}
        </p>
      </div>
      <div class="offers-column__header__save">
        ${variable.saveButton}
      </div>
      <div class="offers-column__header__details">
        <ul>
          ${details.map(detail => `<li>` + detail +`</li>`).join('')}
        </ul>
      </div>
      <div class="offers-column__header__booking">
        <div class="offers-column__header__booking__button">
          <a class="offer-details__cta offers-hero__cta book-modal tin-cta">
            <div>Book Now</div>
            <svg class="offer-contact__caret" role="presentation" src="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg">
              <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#video_play_button"></use>
            </svg>
          </a>
        </div>
        <div class="offers-column__header__booking__divider">
          <span>OR</span>
        </div>
        <div class="offers-column__header__booking__contact">
          <div class="offers-column__header__booking__contact__host">
            <div class="offers-column__header__booking__contact__host__header">
              <h5>Contact your host:</h5>
            </div>
            <div class="offers-column__header__booking__contact__host__info">
              <div class="offers-column__header__booking__contact__host__info__name">
                <h5>${variable.contactInfoName1}</h5>
              </div>
              <div class="offers-column__header__booking__contact__host__info__number">
                <h5>${variable.contactInfoNumber1}</h5>
              </div>
            </div>
          </div>
          <div class="offers-column__header__booking__contact__host">
            <div class="offers-column__header__booking__contact__host__header">
              <h5>Contact Grazie Services:</h5>
            </div>
            <div class="offers-column__header__booking__contact__host__info">
              <div class="offers-column__header__booking__contact__host__info__number">
                <h5>
									<a href="tel:+1877.247.2943">877.247.2943</a>
								</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offers-column__header__intro">
        <div class="offers-column__header__intro__header">
          <h3>${variable.introHeader}</h3>
        </div>
        <div class="offers-column__header__intro__copy">
          <p>${variable.introCopy}</p>
        </div>
      </div>
    </div>
    <div class="offers-column__body">
      ${variable.columnOffers}
    </div>
   </section>
  `;


  
  return offersColumn;

}