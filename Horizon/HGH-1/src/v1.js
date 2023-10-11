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
      #Mainstage .info{bottom:20px;max-width:580px;padding:20px 10px}#Mainstage .info .time-left-title{text-transform:none}#Mainstage .info>p{font-weight:500;font-size:25px}@media (max-width: 1440px){#Mainstage .info .time-left-title{margin-bottom:10px}#Mainstage .info>p{font-size:20px}}@media (max-width: 1000px){#Mainstage .info{left:unset;background-color:rgba(0,86,171,0.761);width:100vw;max-width:100vw;position:static}#Mainstage .info:before{display:none}#Mainstage .info>p{font-size:18px}}@media (max-width: 550px){#Mainstage .info .time-left-title{font-size:20px !important}#Mainstage .info p{font-size:16px}}#Mainstage .info__contact{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[4];grid-template-columns:repeat(4, 1fr);grid-column-gap:20px;grid-row-gap:12px;padding-top:20px;align-items:center}#Mainstage .info__contact__text{font-size:16px}#Mainstage .info__contact__phone a{height:45px;padding:10px 5px;white-space:nowrap;display:flex;align-items:center;justify-content:center}#Mainstage .info__contact__phone svg{fill:#000}#Mainstage .info__contact__phone span{color:#000;font-size:16px;letter-spacing:0px}#Mainstage .info__contact__book a{font-size:16px;height:45px;display:flex;justify-content:center;background:#02ac1e;white-space:nowrap;padding:10px 5px}#Mainstage .info__contact__book a .btn-flex{display:flex;align-items:center;flex-direction:column;justify-content:center;text-transform:none}#Mainstage .info__contact__book a .btn-flex img{width:80px}#Mainstage .info__contact__book a:hover span{color:#fff}#Mainstage .info__contact__coupons{font-size:16px;height:45px;display:flex;align-items:center;justify-content:center;padding:10px 20px;text-align:center;background:#FF7D00}#Mainstage .info__contact__coupons:hover{color:#fff}@media (max-width: 1440px){#Mainstage .info__contact{flex-direction:column}#Mainstage .info__contact>p{font-size:20px}#Mainstage .info__contact__text{-ms-grid-row:1;grid-row:1;-ms-grid-column:2;-ms-grid-column-span:2;grid-column:2 / 4;text-align:center}#Mainstage .info__contact__phone{-ms-grid-row:2;grid-row:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1 / 3}#Mainstage .info__contact__phone a{display:flex;justify-content:center}#Mainstage .info__contact__book{-ms-grid-row:2;grid-row:2;-ms-grid-column:3;-ms-grid-column-span:2;grid-column:3 / 5}#Mainstage .info__contact__book a{display:flex;justify-content:center}#Mainstage .info__contact__book a .btn-flex{flex-direction:row}#Mainstage .info__contact__coupons{-ms-grid-row:3;grid-row:3;-ms-grid-column:2;-ms-grid-column-span:2;grid-column:2 / 4}}@media (max-width: 1000px){#Mainstage .info__contact__phone{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5}#Mainstage .info__contact__book{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5;-ms-grid-row:3;grid-row:3}#Mainstage .info__contact__coupons{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5;-ms-grid-row:4;grid-row:4}}@media (max-width: 1000px){#Mainstage{display:flex;align-items:flex-end;padding-bottom:0;height:650px}}#HomeZipSearch{padding:0 !important}#HomeZipSearch::before,#HomeZipSearch::after{display:none}#HomeZipSearch .main .flex .left-info{display:none}#HomeZipSearch .main .flex .right-zip .btn-con{display:none}#HomeZipSearch .main .flex .right-zip .overlap-img{bottom:-70px;right:25px}@media (min-width: 1441px){#HomeZipSearch .main .flex .right-zip .overlap-img{bottom:-180px}}section.content-area.v1{padding:40px 0}section.content-area.v1 .services-container{padding:0}
    </style>
  `);

  // current page phone number
  const phoneNum = qs('#HomeZipSearch .main .v5:not(.btn-ezbook)').outerHTML;

  // hero info container
  qs('#Mainstage .info').innerHTML = `
    <span class="time-left-title">
      Discounts & Coupons for The Services You Need
    </span>
    <p>
      Limited time special offers and coupons for the services you need today. From same-day heater repair, to professional drain cleaning & even water heater or full heating system replacement. Redeem exclusive discounts to save you money!
    </p>
    <div class="info__contact">
      <span class="info__contact__text">Book Same/Next Day Visit:</span>
      <span class="info__contact__phone">
        ${phoneNum}
      </span>
      <span class="info__contact__book">
        <a href="/book-online/" class="btn v5 btn-ezbook"><span class="btn-flex"><img  src="https://www.horizonservices.com/wp-content/uploads/2021/04/EZBOOK-white.png" alt="EZBOOK NOW!"><span>Online Now</span></span></a>
      </span>
      <a href="/coupons/" class="info__contact__coupons">
        Coupons
      </a>
    </div>
  `;
  
}


// Initialize experiment
poll('#HomeZipSearch .main .v5:not(.btn-ezbook) span', init);