import formatMoney from '../../utils/formatMoney';
import breakdown from '../../html/breakdown';

export default function ($) {
  const observer = new MutationObserver(handlePriceChange);
  // Observer desktop element, mobile element can be removed from DOM by user input
  observer.observe(
    document.querySelectorAll('.step-confirmation__pricing-detail-heading')[1],
    { characterData: true, subtree: true }
  );

  function handlePriceChange(m) {
    // Add resort fee line items
    $('.step-confirmation__pricing-detail-table tbody tr').append(
      '<td>$45.00</td>'
    );

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

    // Update total price for mutationObservers
    tinuiti.totalPrice = formatMoney(total.toFixed(2));
    tinuiti.roomRate = formatMoney(roomRate.toFixed(2));
    tinuiti.taxes = formatMoney(taxes.toFixed(2));
    tinuiti.resortFees = formatMoney(resortFees.toFixed(2));

    // Update headers
    const desktopHeaderPriceElmnt = document.querySelector(
      '.progress-navigation__step--active .progress-navigation__step-excerpt'
    );
    const mobileHeaderPriceElmnt = document.querySelector(
      '.progress-navigation__expand-button-price'
    );
    desktopHeaderPriceElmnt
      ? (desktopHeaderPriceElmnt.innerHTML = tinuiti.totalPrice)
      : null;
    mobileHeaderPriceElmnt
      ? (mobileHeaderPriceElmnt.innerHTML = tinuiti.totalPrice)
      : null;

    // Update breakdowns
    $('.tin_breakdown').html(breakdown());

    // Update mobile collapsed price if applicable
    $(
      '.step-confirmation__pricing-detail--preview .step-confirmation__pricing-total'
    ).text(tinuiti.totalPrice);
  }
}
