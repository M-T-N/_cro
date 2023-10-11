import { qs, qsa } from "../utils/qs";

export const dates = qs('.offers-intro__header--dates h4').innerText;
export const expireDate = qs('.offers_grid-item_expiry').innerText;
export const saveButton = qs('.offers-intro__header--save').outerHTML;

export const introHeader = qs('.offers-intro__contents-body p:nth-child(1)').innerHTML;
export const introCopy = qs('.offers-intro__contents-body p:nth-child(2)').innerHTML;

export const complimentaryNights = qs('.offer-details__inclusions-list_item div:nth-child(1) b').innerText;

export const columnOffers = qs('.offer-details__flexible').innerHTML;

export const contactInfoName1 = qs('.offer-contact__data--0 div:nth-child(1)').innerText;
export const contactInfoNumber1 = qs('.offer-contact__data--0 div:nth-child(2) a').outerHTML;
export const contactInfoName2 = qs('.offer-contact__data--2 div:nth-child(1)').innerText;
export const contactInfoNumber2 = qs('.offer-contact__data--2 div:nth-child(2) a').outerHTML;