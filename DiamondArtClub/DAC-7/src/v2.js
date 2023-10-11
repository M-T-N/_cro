// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  /*
  qs('head').insertAdjacentHTML(
    'beforeend',
    `<style>
    .tin_section header{border-top:1px solid black;position:relative}.tin_section header p{padding:20px 10px;margin:0}.tin_section header .OffcanvasNav-chevron{right:20px;border-top:0.2rem solid #2d2d2d;border-right:0.2rem solid #2d2d2d;transform:translateY(-65%) translateZ(0) rotate(45deg);width:15px;height:15px}.tin_section.collapsed header .OffcanvasNav-chevron{transform:translateY(-65%) translateZ(0) rotate(135deg)}.tin_section.collapsed .tin_section__content{height:0;opacity:0;padding:0;pointer-events:none}.tin_section.collapsed .tin_section__content *{height:0;margin:0;padding:0;pointer-events:none}.tin_section__opened{padding-bottom:30px}.tin_section__reviews,.tin_section__everything-needed{border-bottom:1px solid black}.tin_section__content{padding:0px 15px 20px;transition:all 200ms ease-in;height:100%}.tin_section__content .how_to_use_sec,.tin_section__content .diamond_difference_sec{padding-top:0}.tin_section .product_small_title{font-family:Brown-Bold;letter-spacing:0;text-transform:uppercase;font-size:14px}.tin_section .how_to_use_block{text-align:center}.tin_section .how_to_use_block .title_text{text-transform:uppercase;font-weight:600;margin-bottom:10px;font-size:18px}.tin_section .how_to_use_block .icon_img{margin-bottom:15px}.tin_section .how_to_use_block img{width:160px;height:160px}.tin_section .tin__more-reviews{padding-top:30px}.tin_section .tin__more-reviews .okeReviews-reviews-review:first-of-type{display:none}.tin_section .tin__more-reviews--hidden{display:none}.okeReviews-reviewsWidget-reviewsAggregate,.ShapeCurve,.Product-artist{display:none}
    </style>`
  );
  */

  /** *  set sections  ** */
  // 1 product details
  const productDetails =
    qs('.PDPmobileform .product_desc_block:nth-of-type(1)').outerHTML +
    qs('.PDPmobileform .ProductDropdowns').outerHTML;
  // 2 description
  const productDescription = qs(
    '.PDPmobileform .product_desc_block:nth-of-type(3)'
  ).outerHTML;
  // 3 how to use
  const howToUse = qs('#shopify-section-lpg-how-to-use').outerHTML;
  // 4 everything you need is included
  const everythingNeeded = qs('.everthing_you_include_sec').outerHTML;
  // 5 icon (not collapsed) + 6 get mine now
  const icons =
    qs('.collection_shop_by_category').outerHTML +
    qs('.sec_cta_wrapper').outerHTML;
  // 7 as seen on (not collapsed)
  const asSeenOn = qs('.custreview_client_logo_wrapper').outerHTML;
  // 8 DAC vs competition
  const vsComp = qs('#shopify-section-lpg-diamond-difference').outerHTML;
  // 9 about the artist
  const aboutArtist = qs('.Product-artist-image').closest('.column').outerHTML;
  // 10 REVIEW SECTION

  // remove old previous sections
  qsa(
    '.Product-content .PDPmobileform, .product_desc_block, .ProductDropdowns, .product_desc_block, .how_to_use_steps_wrapper, .everthing_you_include_sec, .collection_shop_by_category, .custreview_client_logo_wrapper, #shopify-section-lpg-diamond-difference, .usefull_links_wrapper, #shopify-section-lpg-how-to-use'
  ).forEach(function (el) {
    el.remove();
  });
  qs('.Product-artist-image').closest('.column').remove();

  // new html on page
  qs('.buy-now--row').insertAdjacentHTML(
    'afterend',
    `
    <section class="tin_section collapsed tin_section__product-details">
      <header><p>Product Details</p><div class="OffcanvasNav-chevron"></div></header>
      <div class="tin_section__content">
        ${productDetails}
      </div>
    </section>
    <section class="tin_section collapsed tin_section__product-description">
      <header><p>Product Description</p><div class="OffcanvasNav-chevron"></div></header>
      <div class="tin_section__content">
        ${productDescription}
      </div>
    </section>
    <section class="tin_section collapsed tin_section__how-to-use">
      <header><p>How to Use</p><div class="OffcanvasNav-chevron"></div></header>
      <div class="tin_section__content">
        ${howToUse}
      </div>
    </section>
    <section class="tin_section collapsed tin_section__everything-needed">
      <header><p>Everything You Need Is Included</p><div class="OffcanvasNav-chevron"></div></header>
      <div class="tin_section__content">
        ${everythingNeeded}
      </div>
    </section>
    <section class="tin_section tin_section__opened">
      <div class="tin_section__content">
        ${icons + asSeenOn}
      </div>
    </section>
    <section class="tin_section collapsed tin_section__vs-comp">
      <header><p>Diamond Art Club vs The Competition</p><div class="OffcanvasNav-chevron"></div></header>
      <div class="tin_section__content">
        ${vsComp}
      </div>
    </section>
    <section class="tin_section collapsed tin_section__about-artist">
      <header><p>About the Artist</p><div class="OffcanvasNav-chevron"></div></header>
      <div class="tin_section__content">
        ${aboutArtist}
      </div>
    </section>
    `
  );

  // show/hide on click function
  qsa('.tin_section header').forEach(function (el) {
    el.addEventListener('click', function () {
      if (el.closest('.tin_section').classList.contains('collapsed')) {
        el.closest('.tin_section').classList.remove('collapsed');
      } else {
        el.closest('.tin_section').classList.add('collapsed');
      }
    });
  });
}

// Initialize experiment
poll('#shopify-section-lpg-diamond-difference', init);
