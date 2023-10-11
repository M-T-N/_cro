import hideOldBreakdown from './hideOldBreakdown';
import breakdown from '../html/breakdown';
import watchPriceChanges from './watchers/watchPriceChanges';
import watchForMobileCollapse from './watchers/watchForMobileCollapse';

export default function ($) {
  // Hide old breakdown
  hideOldBreakdown($);

  // Insert new breakdown container
  $('.step-confirmation__pricing-detail')
    .find('dt:contains("Tax:")')
    .before('<section class="tin_breakdown"></section>');

  // Populate the container
  $('.tin_breakdown').html(breakdown());

  // Watch for price changes
  watchPriceChanges($);

  // Watch for collapsing
  watchForMobileCollapse($);
}
