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