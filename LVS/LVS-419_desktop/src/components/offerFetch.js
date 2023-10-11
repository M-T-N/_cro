import { qs, qsa } from "../utils/qs";
import { cleanImageUrl, cleanText } from "./textTrim";
import { featuredTemplate } from "./featuredTemplate";
import { offersTemplate } from "./offersTemplate";

export function offerFetch(){

  qsa('.glide__slide-content__cta').forEach(async function(el, index){
    
    await fetch(el.href)
    .then(function (response) {
      switch (response.status) {
        // status "OK"
        case 200:
          return response.text();
          // status "Not Found"
          case 404:
            throw response;
      }
    })
    .then(function (template) {
      const parser = new DOMParser();
      const html = parser.parseFromString(template, 'text/html');
      const image = el.closest('.glide__slide').style.backgroundImage.match(/\"(.*?)\"/)[1];
      const offerLink = el.href;
      const tagline = html.querySelector('.offer-details__hero-inner h1').innerText;
      const stayDates = html.querySelector('.offer-details__dates h4').innerText;
      const bookBefore = html.querySelector('.offers_grid-item_expiry').innerText;

      let offerDetails = [];
      html.querySelectorAll('.offer-details__list li').forEach(el => {
        //offerDetails.push(cleanText(el.innerText));
        let trimmedText = el.textContent.trimStart('');
        trimmedText = trimmedText.replace(/1 - |2 - |3 - /g, '');
        trimmedText = trimmedText.split('\n')[0];
        offerDetails.push(trimmedText);
      });
      

      // place html based on index of cards

      console.log(el, index);

      if (index == 0) {
        // featured
        qs('.mod-offers-listing__featured').insertAdjacentHTML('beforeend', featuredTemplate(image, offerLink, tagline, stayDates, bookBefore, offerDetails));
      } else {
        // offers
        qs('.mod-offers-listing--group__category').insertAdjacentHTML('beforeend', offersTemplate(image, offerLink, tagline, stayDates, bookBefore, offerDetails));
      }

    })
    .catch(function (response) {
        // "Not Found"
        console.log(response);
        console.log(response.status);
        console.log(response.statusText);
    });
  });

}