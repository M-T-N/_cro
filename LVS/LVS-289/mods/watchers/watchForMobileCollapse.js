import hideOldBreakdown from '../hideOldBreakdown';
import breakdown from '../../html/breakdown';

export default function ($) {
  const observer = new MutationObserver(handleM);
  observer.observe(
    document.querySelector('.step-confirmation__summary-inner'),
    { childList: true }
  );
  function handleM(m) {
    if (
      m[0].addedNodes[0] &&
      m[0].addedNodes[0].classList.contains(
        'step-confirmation__pricing-detail--preview'
      )
    ) {
      document.querySelector(
        '.step-confirmation__pricing-detail--preview .step-confirmation__pricing-total'
      ).innerHTML = tinuiti.totalPrice;
    } else if (m[0].addedNodes[0]) {
      hideOldBreakdown($);
      // Insert new breakdown container
      $('.step-confirmation__pricing-detail')
        .find('dt:contains("Tax:")')
        .eq(0)
        .before('<section class="tin_breakdown"></section>');
      // Populate the container
      $('.tin_breakdown').eq(0).html(breakdown());
      if (tinuiti.variation === 2) {
        // Change "Room Total" to "Summary"
        $(
          '.step-confirmation__summary-detail.ng-trigger-expandable .step-confirmation__pricing-detail-heading'
        )
          .eq(0)
          .hide();
        $(
          '.step-confirmation__summary-detail.ng-trigger-expandable .step-confirmation__pricing-detail-heading'
        )
          .eq(0)
          .after(
            '<h3 class="step-confirmation__pricing-detail-heading"> Summary </h3>'
          );
      } else if (tinuiti.variation === 3) {
        // Change "Room Total" to "Summary"
        $(
          '.step-confirmation__summary-detail.ng-trigger-expandable .step-confirmation__pricing-detail-heading'
        )
          .eq(0)
          .hide();
        $(
          '.step-confirmation__summary-detail.ng-trigger-expandable .step-confirmation__pricing-detail-heading'
        ).after(
          '<h3 class="step-confirmation__pricing-detail-heading" style="height: 30px;"> </h3>'
        );
      }
    }
  }
}
