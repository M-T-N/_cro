import { qs, qsa } from "../utils/qs";
import { complimentaryNights } from "./variables";

export function hero() {

	const inclusionCount = qsa('.offer-details__inclusions-list_item').length;

  // add complimentary nights text for desktop
  qs('.offers-hero__title').insertAdjacentHTML('afterend', `
    <div class="offers-hero__nights">
      <p>Get ${complimentaryNights} Complimentary Nights${inclusionCount > 1 ? ' -- and More' : ''}</p>
    </div>
  `);


}