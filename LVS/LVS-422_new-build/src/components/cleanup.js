import { qs,qsa } from "../utils/qs";

export function cleanup(){

  const toBeRemoved = [
    '.offer-details__fixed .offers-intro',
    '.offer-details__fixed .offer-contact-container',
    '.offer-details__fixed .offer-details__inclusions-container',
    '.offers-column__body .mod-interstitial-info',
    '.offers-column__body .mod-generic-details-accordion__container'
  ]

  qsa(toBeRemoved).forEach(el => el.remove());

}