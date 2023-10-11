export default function ($) {
  $('.step-confirmation__pricing-detail').find('dt:contains("Tax:")').hide();
  $('.step-confirmation__pricing-detail')
    .find('dt:contains("Tax:")')
    .next()
    .hide();
  $('.step-confirmation__pricing-detail')
    .find('dt:contains("Tax:")')
    .next()
    .next()
    .hide();
  $('.step-confirmation__pricing-detail')
    .find('dt:contains("Tax:")')
    .next()
    .next()
    .next()
    .hide();
}
