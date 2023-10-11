import { qs, qsa } from "./qs";

export function columnCondense(){

  // remove Grazie from bottom of right column
  qs('.receipt__pricing app-grazie-promo-mini').remove();

  // copy, remove, and insert suiteName
  const suiteName = qs('.receipt__suite--name').outerHTML;
  qs('.receipt__suite--name').remove();
  qs('.receipt__suite').insertAdjacentHTML('afterbegin', suiteName);

  // insert 'Your Reservation Details' header
  if (qs('.receipt__suite--heading') == null) {
    qs('.receipt__suite--name').insertAdjacentHTML('afterbegin', `
      <span class="receipt__suite--heading">
        Your Reservation Details
      </span>
    `);
  }

  /***  move right column into left  ***/
  jQuery('.receipt__pricing').appendTo('.receipt__suite');


  /*** function to move 'offer' into dropdown when clicked ***/
  // copy and remove
  const offer = qs('.receipt__pricing__summary__row--wrap').outerHTML;
  qs('.receipt__pricing__summary__row--wrap').remove();
  // when dropdown opens, wait then append copied html
  qs('.receipt__pricing__details__link').addEventListener('click', function(){
    setTimeout(function(){
      if (qs('.receipt__pricing__summary__row--wrap') == null) {
        qs('.receipt__pricing__daily').insertAdjacentHTML('beforeend', offer);
      }
    }, 100);
  });
}