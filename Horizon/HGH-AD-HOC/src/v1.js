// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  qs('head').insertAdjacentHTML('beforeend', `
    <style>
      @media (max-width: 1000px){.left-area .top-logo{display:flex;justify-content:center}.left-area .top-logo img{max-width:150px !important;max-height:75px;margin:0 !important}.left-area .cta-ezbook{background:#02ac1e;width:25%;height:100%;display:flex;align-items:center}.left-area .cta-ezbook a{display:flex;flex-direction:column;padding:5px}.left-area .cta-ezbook a span{text-align:center;line-height:1;color:white;font-family:Lato, sans-serif;font-weight:600;font-size:13px}}#Mainstage{height:53em}#Mainstage .info{bottom:20px;max-width:580px;padding:20px 10px}#Mainstage .info .time-left-title{text-transform:none}#Mainstage .info>ul{font-weight:500;font-size:25px;text-align:left;list-style-type:disc;list-style-position:inside;line-height:1.2;margin-left:40px;text-indent:-30px}#Mainstage .info>ul>li{margin-bottom:10px}@media (max-width: 1440px){#Mainstage .info .time-left-title{margin-bottom:10px}#Mainstage .info>ul{font-size:20px}}@media (max-width: 1000px){#Mainstage .info{left:unset;background-color:rgba(0,86,171,0.761);width:100vw;max-width:100vw;position:static}#Mainstage .info:before{display:none}#Mainstage .info>ul{font-size:18px}}@media (max-width: 550px){#Mainstage .info .time-left-title{font-size:20px !important}#Mainstage .info>ul{font-size:16px}}#Mainstage .info__contact{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[4];grid-template-columns:repeat(4, 1fr);grid-column-gap:20px;grid-row-gap:12px;padding-top:10px;align-items:center}#Mainstage .info__contact__text{font-size:24px;line-height:1.2}#Mainstage .info__contact__phone a{height:45px;padding:10px 5px;white-space:nowrap;display:flex;align-items:center;justify-content:center}#Mainstage .info__contact__phone svg{fill:#000}#Mainstage .info__contact__phone span{color:#000;font-size:16px;letter-spacing:0px}#Mainstage .info__contact__book a{font-size:16px;height:45px;display:flex;justify-content:center;background:#02ac1e;white-space:nowrap;padding:10px 5px}#Mainstage .info__contact__book a .btn-flex{display:flex;align-items:center;flex-direction:column;justify-content:center;text-transform:none}#Mainstage .info__contact__book a .btn-flex img{width:80px}#Mainstage .info__contact__book a:hover span{color:#fff}#Mainstage .info__contact__coupons{font-size:16px;height:45px;display:flex;align-items:center;justify-content:center;padding:10px 20px;text-align:center;background:#FF7D00}#Mainstage .info__contact__coupons:hover{color:#fff}@media (max-width: 1440px){#Mainstage .info__contact{flex-direction:column}#Mainstage .info__contact>p{font-size:20px}#Mainstage .info__contact__text{-ms-grid-row:1;grid-row:1;-ms-grid-column:2;-ms-grid-column-span:2;grid-column:2 / 4;text-align:center}#Mainstage .info__contact__phone{-ms-grid-row:2;grid-row:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1 / 3}#Mainstage .info__contact__phone a{display:flex;justify-content:center}#Mainstage .info__contact__book{-ms-grid-row:2;grid-row:2;-ms-grid-column:3;-ms-grid-column-span:2;grid-column:3 / 5}#Mainstage .info__contact__book a{display:flex;justify-content:center}#Mainstage .info__contact__book a .btn-flex{flex-direction:row}#Mainstage .info__contact__coupons{-ms-grid-row:3;grid-row:3;-ms-grid-column:2;-ms-grid-column-span:2;grid-column:2 / 4}}@media (max-width: 1000px){#Mainstage .info__contact__text{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5;font-size:20px}#Mainstage .info__contact__phone{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5}#Mainstage .info__contact__book{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5;-ms-grid-row:3;grid-row:3}#Mainstage .info__contact__coupons{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5;-ms-grid-row:4;grid-row:4}}@media (max-width: 1000px){#Mainstage{display:flex;align-items:flex-end;padding-bottom:0;height:670px}}#HomeZipSearch{padding:0 !important}#HomeZipSearch::before,#HomeZipSearch::after{display:none}#HomeZipSearch .main .flex .left-info{display:none}#HomeZipSearch .main .flex .right-zip .btn-con{display:none}#HomeZipSearch .main .flex .right-zip .overlap-img{bottom:-70px;right:25px}@media (min-width: 1441px){#HomeZipSearch .main .flex .right-zip .overlap-img{bottom:-180px}}section.content-area.v1{padding:40px 0}section.content-area.v1 .services-container{padding:0}
    </style>
  `);

  // hero info container
  qs('#Mainstage .info').innerHTML = `
    <span class="time-left-title">
      Voted #1 Rated Heating, Air Conditioning & Plumbing Contractor Near You!
    </span>
    <ul>
      <li>SAME-DAY Expert Heating, Plumbing & Water Heater Services (Including Tune-Ups, Repairs, Replacement) or it’s FREE!</li>
      <li>24/7, Emergency Service Available</li>
      <li>Confirm Your Appointment in 30 Seconds (Just tell us where to send our Technician!)</li>
    </ul>
    <div class="info__contact">
      <span class="info__contact__text">Book Same/Next Day Visit:</span>
      <span class="info__contact__phone">
        <a href="tel:800-642-4419" class="btn v5"><icon svg="269528"><svg viewBox="0 0 1024 1024" data-use="/cms/svg/ygzz3v3cy5f.svg#icon_269528"><path d="M827.1 911.5a253.6 253.6 0 0 0 16.9-26.8c31.1-63-170.9-242.6-224.1-187.8-15 15-44.9 65.4-87.4 12.6a2080 2080 0 0 1-160.3-341.8c-13.4-67.3 42.9-61 63.8-63.8 74-10.2 62.6-286.3-4.3-299.7a1036.2 1036.2 0 0 0-132.7-3.5c-40.6 5.1-117.3 72.9-121.7 193a901.5 901.5 0 0 0 95.3 435.9a861.6 861.6 0 0 0 271.3 346.9c93.7 70.5 192.2 49.6 220.9 19.3 2.8-3.2 7.1-8.3 12.2-14.6Z"></path></svg></icon><span>800-642-4419</span></a>
      </span>
      <span class="info__contact__book">
        <a href="/book-online/" class="btn v5 btn-ezbook"><span class="btn-flex"><img  src="https://www.horizonservices.com/wp-content/uploads/2021/04/EZBOOK-white.png" alt="EZBOOK NOW!"><span>Schedule Online</span></span></a>
      </span>
      <a href="/coupons/" class="info__contact__coupons">
        Discounts & Coupons
      </a>
    </div>
  `;


  // cta in header on mobile, from hgh6
  if (window.innerWidth < 1001) {
    // new header layout
    qs('.bottom-header .left-area .top-logo').insertAdjacentHTML('afterend', `
    <div class="cta-ezbook">
      <a href="/book-online/">
        <img src="https://www.horizonservices.com/wp-content/uploads/2021/04/EZBOOK-white.png" alt="EZBOOK NOW!">
        <span>Schedule<br>Online Now</span>
      </a>
    </div>
    `);
  
    // remove header logo hard height/width
    qs('.bottom-header .left-area .top-logo img').removeAttribute('height');
    qs('.bottom-header .left-area .top-logo img').removeAttribute('width');
  
    // GA push tracking on ezbook -- Header
    qs('.cta-ezbook a').addEventListener('click', () => {
      ga('send', 'event', 'cro conversion', 'HGH6_V1: EZBook Online -- Header');
    });
  
    // stop scaling on iphone
    qs('meta[name="viewport"]').content = 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no';
  }
  
}


// Initialize experiment
poll('#Mainstage .info', init);