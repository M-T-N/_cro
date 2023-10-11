import { qs } from "../utils/qs";
import { complimentaryNights } from "./variables";

export function hero() {
  qs('.offers-hero__title').insertAdjacentHTML('afterend', `
    <div class="offers-hero__nights">
      <p>Get ${complimentaryNights} Complimentary Nights -- and More</p>
    </div>
  `)
}