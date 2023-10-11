export function desktopOfferDetails(offerDetails){
 
  const template = `
    <div class="o-offer__text__offerDetails">
      <span class="bold">Offer Details:</span> ${offerDetails}
    </div>
  `;

  return template;

}

export function stayDateTemplate(stayDates, bookBefore, offerDetails){
 
  const template = `
    <div class="o-offer__text__details--side">
        <div class="o-offer__text__details__item"><span class="bold">Stay Dates:</span> <br>${stayDates}</div>
        <div class="o-offer__text__details__item"><span class="bold">Must Book Before:</span> <br>${bookBefore}</div>
        <div class="o-offer__text__details__item o-offer__text__details__item--mobile"><span class="bold">Offer Details:</span> ${offerDetails}</div>
    </div>
  `;

  return template;

}