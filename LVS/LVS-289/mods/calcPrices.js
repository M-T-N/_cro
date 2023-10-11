import formatMoney from '../utils/formatMoney';

export default function ($, variation) {
  const roomRate = parseFloat(
    document
      .querySelector('.step-confirmation__pricing-detail-heading')
      .innerHTML.replace(' Room Total: $', '')
      .replace(/,/g, '')
  );
  const resortFees =
    parseInt(
      $('.step-confirmation__booking-detail')
        .find('dt:contains("Nights")')[0]
        .nextElementSibling.innerHTML.replace(/[$,]/g, '')
    ) * 45;
  const taxes =
    parseFloat(
      $('.step-confirmation__pricing-detail')
        .find('dt:contains("Tax:")')[0]
        .nextElementSibling.innerHTML.replace(/[$,]/g, '')
    ) +
    (resortFees / 45) * 6.02;
  const total = roomRate + resortFees + taxes;

  if (roomRate) {
    // Cache total price for mutationObservers
    window.tinuiti = {
      totalPrice: formatMoney(total.toFixed(2)),
      roomRate: formatMoney(roomRate.toFixed(2)),
      taxes: formatMoney(taxes.toFixed(2)),
      resortFees: formatMoney(resortFees.toFixed(2)),
      variation,
    };
  }
}
