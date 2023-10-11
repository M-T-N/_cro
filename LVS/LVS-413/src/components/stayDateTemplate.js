export function stayDateTemplate(stayDates, bookBefore, offerDetails){
 
  const template = `
    <div class="o-offer__text__details">
        <div class="o-offer__text__details__item"><span class="bold">Stay Dates:</span> ${stayDates}</div>
        <div class="o-offer__text__details__item"><span class="bold">Must Book Before:</span> ${bookBefore}</div>
        <div class="o-offer__text__details__item"><span class="bold">Offer Details:</span> ${offerDetails}</div>
    </div>
  `;

  return template;

}