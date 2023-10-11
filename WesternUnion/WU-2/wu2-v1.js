/* ** css ** */
document.querySelector('head').insertAdjacentHTML(
  'beforeend',
  `
  <style>
    .font-heading-h1 {
      font-size: 52px;
    }
    .component-0 .container .d-none {
      display: none !important;
    }
    .tin__heaqder-qr {
      width: 150px;
    }
    div[role="list-item"] .font-body-reg{
      font-size: 19px;
    }
    .footer__qr {
      width: 130px;
      position: absolute;
      z-index: 10;
      top: 220px;
      left: 162px;
    }
  </style>
`
);

/* ** header section ** */

// make text container position absolute, move right
document
  .querySelector('.component-0 .container .col-L-8')
  .classList.remove('position-relative');
document
  .querySelector('.component-0 .container .col-L-8')
  .classList.add('position-absolute');
document.querySelector('.component-0 .container .col-L-8').style.right = '0px';

// change subtext
document.querySelector(
  '.component-0 .container .col-L-8 .mar-sm-bm:nth-of-type(2) p'
).innerHTML =
  'Send money, track transfers, pay bills, review exchange rates and find agent locations—all on the go with the Western Union<sup>®</sup> app.<br><br>Scan the QR code to download the WU app.';

// remove app/play store buttons
document
  .querySelector('.component-0 .container .col-L-8 .mar-sm-bm:nth-of-type(3)')
  .remove();

// insert new qr code
document
  .querySelector('.component-0 .container .col-L-8 .mar-sm-bm:nth-of-type(1)')
  .insertAdjacentHTML(
    'afterend',
    `
    <div class="col col-16 col-XL-12 mar-sm-bm">
      <img class="tin__heaqder-qr" src="https://www.westernunion.com/content/dam/wu/images/qr-code-146472-mobile-app-hero.svg">
    </div>
  `
  );

// move image to left
document
  .querySelector('.component-0 .container .b-new-black:not(.d-none) .col-16')
  .classList.remove('ml-auto');
document
  .querySelector('.component-0 .container .b-new-black:not(.d-none) .col-16')
  .classList.add('mr-auto');

/* ** footer section ** */
document.querySelector('.component-8 .col-16 > a').remove();
document.querySelector('.component-8 .col-16 > .row').remove();

// new qr text
document
  .querySelector('.component-8 .col-16 > div[role="list"]')
  .insertAdjacentHTML(
    'afterend',
    `
  <h4>Scan the QR code to download the WU app.</h4>
`
  );

// insert qr image
document
  .querySelector('.component-8 .col-14 .b-download-bg')
  .insertAdjacentHTML(
    'afterend',
    `
    <img class="footer__qr" src="https://www.westernunion.com/content/dam/wu/images/qr-code-146470-mobile-app-download-module.svg">
`
  );
