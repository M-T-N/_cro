// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';
import { columnCondense } from './utils/columnCondense';
import { upgradeColumn } from './utils/upgradeColumn';
import { bottomBanner } from './utils/bottomBanner';
import { LVS414 } from './utils/LVS414';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// cc# 4100390208781415
function init() {

  console.log('VEN-399_v1');

  
  // add css
  if (qs('#tin-style') == null) {
    qs('head').insertAdjacentHTML('beforeend', `<style id="tin-style">

    .progress-navigation__receipt-inner{padding:1.5rem 2.5rem 1.875rem}.progress-navigation__logo img{width:140px}.step--receipt .receipt__heading{-ms-grid-row:1 !important;grid-row:1 !important;-ms-grid-column:1 !important;-ms-grid-column-span:8 !important;grid-column:1/span 8 !important}.step--receipt .upgrade__suite{-ms-grid-row:3 !important;grid-row:3 !important;-ms-grid-column:1 !important;-ms-grid-column-span:8 !important;grid-column:1/span 8 !important}.step--receipt .upgrade__suite img{width:100%}.step--receipt .upgrade__suite__header{margin-bottom:60px}.step--receipt .upgrade__suite__header__copy{text-align:center}.step--receipt .upgrade__suite__header__copy h3{font-size:25px;line-height:1;margin:15px 0}.step--receipt .upgrade__suite__header__copy p{font-size:16px;margin:15px 0}.step--receipt .upgrade__suite__header__copy button{background:#db2000;padding:15px 45px}.step--receipt .upgrade__suite__header__copy button a{color:#fff;text-transform:uppercase;text-decoration:none;font-weight:600}.step--receipt .upgrade__suite__body__header{text-align:center;font-size:16px;line-height:1}.step--receipt .upgrade__suite__body__header h3{margin:10px 0;font-weight:900}.step--receipt .upgrade__suite__body__images__img{position:relative;display:inline-block;width:100%}.step--receipt .upgrade__suite__body__images__img img{filter:brightness(0.85)}.step--receipt .upgrade__suite__body__images__img span{position:absolute;bottom:20px;left:20px;text-transform:uppercase;color:#fff;font-size:25px}.step--receipt .receipt__suite{-ms-grid-row:2 !important;grid-row:2 !important;-ms-grid-column:1 !important;-ms-grid-column-span:8 !important;grid-column:1/span 8 !important;margin-bottom:80px}.step--receipt .receipt__suite--heading{text-align:center;width:100%;display:inline-block;font-size:22px;margin-bottom:20px}.step--receipt .receipt__cta--print{background:#fff !important;color:#db2000 !important}.step--receipt .receipt__cta--print-inner__icon{display:none}.step--receipt .receipt__cta--print-inner__text{margin-left:0 !important;font-size:14px !important}.step--receipt .receipt__actions{-ms-grid-row:4 !important;grid-row:4 !important;-ms-grid-column:1 !important;-ms-grid-column-span:8 !important;grid-column:1/span 8 !important}.step--receipt .receipt__actions__link{display:flex;flex-direction:column;background:#f9f7f5;text-decoration:none;padding-bottom:20px}.step--receipt .receipt__actions__link__img img{width:100%;display:block}.step--receipt .receipt__actions__link__copy{display:flex;flex-direction:column;align-items:center}.step--receipt .receipt__actions__link__copy__text{padding:5px 15px}.step--receipt .receipt__actions__link__copy__text p{color:#2c2c2c;font-size:16px;font-weight:900;line-height:1.2}.step--receipt .receipt__actions__link__copy__button{background:#373F56;color:#fff;padding:15px 45px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:16px}@media (min-width: 980px){.progress-navigation__receipt-inner{padding:3.125rem 2.5rem 1.875rem}.step--receipt .receipt__heading{-ms-grid-row:1 !important;grid-row:1 !important;-ms-grid-column:2 !important;-ms-grid-column-span:14 !important;grid-column:2/span 14 !important}.step--receipt .upgrade__suite{-ms-grid-row:2 !important;grid-row:2 !important;-ms-grid-column:2 !important;-ms-grid-column-span:7 !important;grid-column:2/span 7 !important}.step--receipt .upgrade__suite__header{display:flex}.step--receipt .upgrade__suite__header__img{width:50%;margin-right:25px}.step--receipt .upgrade__suite__header__img img{width:100%}.step--receipt .upgrade__suite__header__copy{text-align:left;width:50%}.step--receipt .upgrade__suite__header__copy h3{margin-top:0;font-size:18px}.step--receipt .upgrade__suite__header__copy p{font-size:15px}.step--receipt .upgrade__suite__body__header img{margin-right:20px}.step--receipt .upgrade__suite__body__images{display:flex;flex-wrap:wrap;justify-content:space-between;position:relative;margin-bottom:10px}.step--receipt .upgrade__suite__body__images__img{width:49%}.step--receipt .upgrade__suite__body__images__img img{width:100%}.step--receipt .upgrade__suite__body__images__img span{position:absolute;line-height:1;bottom:20px;left:10px;color:#fff;text-transform:uppercase;font-weight:600;font-size:20px}.step--receipt .receipt__suite{-ms-grid-row:2 !important;grid-row:2 !important;-ms-grid-column:10 !important;-ms-grid-column-span:6 !important;grid-column:10/span 6 !important;margin-bottom:0}.step--receipt .receipt__actions{-ms-grid-row:3 !important;grid-row:3 !important;-ms-grid-column:2 !important;-ms-grid-column-span:14 !important;grid-column:2/span 14 !important;width:100%}.step--receipt .receipt__actions__link{flex-direction:row;padding-bottom:0}.step--receipt .receipt__actions__link__img{display:block;min-height:100px}.step--receipt .receipt__actions__link__copy{flex-direction:row;padding:0 25px}.step--receipt .receipt__actions__link__copy__text{padding:0;margin-right:25px}.step--receipt .receipt__actions__link__copy__text p{text-align:left;font-weight:500}.step--receipt .receipt__actions__link__copy__button{white-space:nowrap;padding:10px 45px}}
  
    </style>`);
  }


  // header text update
  if (qs('.progress-navigation__receipt-inner p:first-child').innerHTML.indexOf('Resort') > -1) {
    null;
  } else {
    qs('.progress-navigation__receipt-inner p:first-child').innerHTML = 
    qs('.progress-navigation__receipt-inner p:first-child').innerHTML.replace('Thank you for booking the Venetian','Thank you for booking The Venetian Resort Las Vegas');
  }
  qs('.progress-navigation__receipt-inner p:first-child').innerHTML = 
  qs('.progress-navigation__receipt-inner p:first-child').innerHTML.replace('!','.');


  // add code from LVS414
  LVS414();

  // combine both columns
  columnCondense();

  // create new upgrade column
  upgradeColumn();

  // new bottom banner
  bottomBanner();

  // change header logo
  qs('.progress-navigation__logo a').innerHTML = '<img src="//cdn.optimizely.com/img/8200950428/45bc19c08c664e45a388605096a1995d.png">';


}


// Initialize experiment
poll('.receipt__actions a img', init);

