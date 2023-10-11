// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';

function init() {
  if (
    document.querySelector('.flow-country-picker-dropdown-trigger-text')
      .innerHTML == 'United States (USD)'
  ) {
    // move search/account/cart next to logo
    jQuery('.header-options-right').appendTo('.primary-logo');

    // insert 'Timex Archive' link to collections
    qs(
      '.level-1 > li:nth-of-type(2) .level-2 > ul .level-3'
    ).insertAdjacentHTML(
      'beforeend',
      '<li><a href="https://www.timex.com/archive/" data-desktop-nav-link="https://www.timex.com/archive/" data-mobile-nav-link="">Timex Archive</a></li>'
    );

    qs('head').insertAdjacentHTML(
      'beforeend',
      `<style>
        .timex #wrapper .header-banner {
          background: #d1d1d4;
          margin-bottom: 6px !important;
        }
        .timex .header-top-wrapper {
          display: none;
        }
        .timex .primary-logo {
          display: flex !important;
          justify-content: flex-end;
          align-items: center;
          position: relative;
          width: 100% !important;
          background-image: none !important;
          height: 35px !important;
        }
        .timex .primary-logo > a {
          position: absolute;
          margin: 0 auto;
          left: 0;
          right: 0;
          text-align: center;
        }
        .timex .primary-logo > a img {
          opacity: 1;
        }
        .header-options-right {
          display: flex;
          padding-right: 20px;
        }
        .timex .header-search, .timex .menu-utility-user li{
          background: #fff;
        }
        .header-search input[type=text]:focus {
          background: #fff !important;
        }
        @media only screen and (min-width: 65rem) {
          .timex #persistent-nav-banner .level-2 {
            top: 108px;
          }
        }
        .timex #persistent-nav-banner-sticky-wrapper .level-2{
          top: 92px;
        }
      </style>}`
    );
  }
}

// Initialize experiment
poll('.flow-country-picker-dropdown-trigger-text', init);
