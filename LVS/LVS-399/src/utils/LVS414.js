export function LVS414(){
  
  var $ = window.jQuery;

  // dupe check
  if ($('.ven414').length) return;

  // Log
  console.log('VEN-414 | HOTFIX (ABE) Resort Fee to Details Drop Down v1');

  // get the number of nights
  var nights = parseInt($('.receipt__suite__details__row__key:contains("Nights")').next().text());
  if (!nights) return;

  // get the room subtotal
  var roomSubtotal = parseFloat(document.querySelector('.receipt__pricing__room-total').innerHTML.trim().replace(/,/g, '').replace('Room Total: $', '') - (45 * nights));
  if (!roomSubtotal) return;


  // add the line items
  var $tax = $('.receipt__pricing__summary__row').eq(1);
  var $roomSubtotal = $tax.clone(true);
  $roomSubtotal.find('.receipt__pricing__summary__row__key').text(`Room Rate:`);
  $roomSubtotal.find('.receipt__pricing__summary__row__value').text(`${formatMoney(roomSubtotal)}`);
  $roomSubtotal.addClass('ven414');
  //$tax.before($roomSubtotal);
  //var $fees = $tax.clone(true);
  //$fees.find('.receipt__pricing__summary__row__key').text(`Resort Fees:`);
  //$fees.find('.receipt__pricing__summary__row__value').text(`${formatMoney(nights * 45)}`);
  //$tax.after($fees);


  // add resort fees and watch for changes
  handleMutation();
  // Watch for changes
  var observer = new MutationObserver(handleMutation);
  observer.observe(document.querySelector('.receipt__pricing.step-transition--stage-2'), { childList: true });
  function handleMutation() {
    if (!document.querySelector('.ven414-header') && !document.querySelector('.ven414-fee')) {
      // Add resort fee header
      $('.receipt__pricing__daily__row--heading').append('<span class="ven414-header">Resort Fee</span>');    
      // Add resort fee line items
      $('.receipt__pricing__daily__row--price').append('<span class="ven414-fee">$45.00</span>');
    }
  }




  function formatMoney(amount) {
    const options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    };
    const formatter = new Intl.NumberFormat('en-US', options);
    return formatter.format(amount);
  }




  // add css
  document.querySelector('head').insertAdjacentHTML('beforeend', `<style>
  .ven414-header {
    flex: 0 0 25%;
    font-family: Avenir;
    font-weight: 500;
    font-size: .75rem;
    letter-spacing: .03125rem;
    line-height: 1.7;
    color: #2c2c2c;
  }
  @media screen and (min-width: 640px) {
      .ven414-header {
          font-size: .75rem;
          line-height: 1.7;
      }
      .ven414-fee {
        font-size: ;
      }      
  }
  @media screen and (min-width: 980px) {
      .ven414-header {
          font-size: .8125rem;
          line-height: 1.8;
      }
      .ven414-fee {
        font-size: .8125rem;
      }
  }
  .ven414-header {
      font-family: Avenir;
      font-weight: 400;
      font-size: .6875rem;
      font-weight: 900;
      line-height: 1.4;
      letter-spacing: .09375rem;
      color: #747170;
  }
  .ven414-fee {
      width: 25%;
  }
  .step--receipt .receipt__pricing__daily__row__date, .step--receipt .receipt__pricing__daily__row__item, .step--receipt .receipt__pricing__daily__row__charge {
      width: 25% !important;
  }

  </style>`);

}