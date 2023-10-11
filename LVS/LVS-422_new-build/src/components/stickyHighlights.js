import { qs,qsa } from "../utils/qs";
import * as variable from "./variables"

const details = [];
qsa('.offer-details__inclusions-list_item div').forEach(el => {
  details.push(el.innerText);
});



export function stickyHighlights() {

  const stickyHighlights = `
    <section class="sticky-highlights--wrapper">
      <div class="sticky-highlights">
        <div class="sticky-highlights__header">
          <h4>Offer Highlights</h4>
          ${variable.saveButton}
        </div>
        <div class="sticky-highlights__details">
          <ul>
            ${details.map(detail => `<li>` + detail +`</li>`).join('')}
          </ul>
        </div>
        <div class="sticky-highlights__booking">
          <div class="sticky-highlights__booking__button">
            <a href="#" class="offer-details__cta book-login tin-cta">Book Now</a>
          </div>
          <div class="sticky-highlights__booking__divider">
            <span>OR</span>
          </div>
          <div class="sticky-highlights__booking__contact">
            <div class="sticky-highlights__booking__contact__host">
              <div class="sticky-highlights__booking__contact__host__header">
                <h5>Contact Grazie Services:</h5>
              </div>
              <div class="sticky-highlights__booking__contact__host__info">
                <div class="sticky-highlights__booking__contact__host__info__number">
                  <h5>${variable.contactInfoNumber1}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return stickyHighlights;
}


export function stickyHighlightsWithHost() {

  const stickyHighlights = `
    <section class="sticky-highlights--wrapper">
      <div class="sticky-highlights">
        <div class="sticky-highlights__header">
          <h4>Offer Highlights</h4>
          ${variable.saveButton}
        </div>
        <div class="sticky-highlights__details">
          <ul>
            ${details.map(detail => `<li>` + detail +`</li>`).join('')}
          </ul>
        </div>
        <div class="sticky-highlights__booking">
          <div class="sticky-highlights__booking__button">
            <a href="#" class="offer-details__cta book-login tin-cta">Book Now</a>
          </div>
          <div class="sticky-highlights__booking__divider">
            <span>OR</span>
          </div>
          <div class="sticky-highlights__booking__contact">
            <div class="sticky-highlights__booking__contact__host">
              <div class="sticky-highlights__booking__contact__host__header">
                <h5>Contact your host:</h5>
              </div>
              <div class="sticky-highlights__booking__contact__host__info">
                <div class="sticky-highlights__booking__contact__host__info__name">
                  <h5>${variable.contactInfoName1}</h5>
                </div>
                <div class="sticky-highlights__booking__contact__host__info__number">
                  <h5>${variable.contactInfoNumber1}</h5>
                </div>
              </div>
            </div>
            <div class="sticky-highlights__booking__contact__host">
              <div class="sticky-highlights__booking__contact__host__header">
                <h5>Contact Grazie Services:</h5>
              </div>
              <div class="sticky-highlights__booking__contact__host__info">
                <div class="sticky-highlights__booking__contact__host__info__number">
                  <h5>
										<a href="tel:+1877.247.2943">877.247.2943</a>
									</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return stickyHighlights;
}