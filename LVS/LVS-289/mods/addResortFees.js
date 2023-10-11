export default function ($) {
  // Run changes on init
  handleMutation();

  // Watch for changes
  const desktopObserver = new MutationObserver(handleMutation);
  // const mobileObserver = new MutationObserver(handleMutation);
  desktopObserver.observe(
    document.querySelectorAll('.step-confirmation__pricing-detail')[2],
    { childList: true }
  );
  // mobileObserver.observe(document.querySelectorAll('.step-confirmation__pricing-detail')[0], { childList: true });

  function handleMutation() {
    // Add resort fee header
    $('.step-confirmation__pricing-detail-table thead tr').append(
      '<th class="tin_resort-fee-header">Resort Fee</th>'
    );

    // Add resort fee line items
    $('.step-confirmation__pricing-detail-table tbody tr').append(
      '<td>$45.00</td>'
    );
  }
}
