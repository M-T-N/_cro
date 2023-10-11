import { qs,qsa } from "../utils/qs";
import { stickyHighlights, stickyHighlightsWithHost } from "./stickyHighlights";
import { hero } from "./hero";
import { bottomDetails } from "./bottomDetails";
import { offersColumn, offersColumnWithHost } from "./offersColumn";
import { cleanup } from "./cleanup";
import { mobileStickyCTA } from "./mobileStickyCTA";
import { openBooking } from "./openBooking";

export function pageAssemble() {

  // move the dropdown and FAQ into the T&C's section below (needs to run before offersColumn)
  bottomDetails();

  // add complimentary nights to the hero
  hero();

  // add sticky sidebar (desktop only)
	/* check if there is a host or not, load html based on that */
	if (qs('.offer-contact__header--1')) {
		qs('.offer-details__flexible').innerHTML = `
			${offersColumnWithHost()}
			${stickyHighlightsWithHost()}
		`;
	} else {
		qs('.offer-details__flexible').innerHTML = `
			${offersColumn()}
			${stickyHighlights()}
		`;
	}

  // add mobile sticky cta
  mobileStickyCTA();

  // open booking when clicking my cta's
  openBooking();

  // after page assembly, remove elements that have been cloned
  cleanup();


}