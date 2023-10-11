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
      .bottom-header .top-logo img{max-width:165px !important}@media (max-width: 429px){#Mainstage{height:47em}}@media (min-width: 430px) and (max-width: 1000px){#Mainstage{height:38em}}@media (min-width: 1001px) and (max-width: 1300px){#Mainstage{height:55em}}@media (min-width: 1301px){#Mainstage{height:48em}}#Mainstage .info{bottom:20px;max-width:580px;padding:20px 10px;background-color:rgba(0,86,171,0.761)}#Mainstage .info .time-left-title{text-transform:none}#Mainstage .info>p{font-weight:500;font-size:25px;color:#fff}@media (max-width: 1440px){#Mainstage .info .time-left-title{margin-bottom:10px}#Mainstage .info>p{font-size:17px}}@media (max-width: 1000px){#Mainstage .info{left:unset;background-color:rgba(0,86,171,0.761);width:100vw;max-width:100vw;position:static}#Mainstage .info:before{display:none}#Mainstage .info>p{font-size:18px}}@media (max-width: 550px){#Mainstage .info .time-left-title{font-size:20px !important}#Mainstage .info p{font-size:16px}}#Mainstage .info__contact{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[4];grid-template-columns:repeat(4, 1fr);grid-column-gap:20px;grid-row-gap:12px;padding-top:20px;align-items:center}#Mainstage .info__contact__text{font-size:16px}#Mainstage .info__contact__phone:hover{cursor:pointer}#Mainstage .info__contact__phone a{height:45px;padding:10px 5px;white-space:nowrap;display:flex;align-items:center;justify-content:center;background-color:white}#Mainstage .info__contact__phone svg{fill:#000}#Mainstage .info__contact__phone span{color:#000;font-size:16px;letter-spacing:0px}#Mainstage .info__contact__book a{font-size:16px;height:45px;display:flex;justify-content:center;background:#02ac1e;white-space:nowrap;padding:10px 5px}#Mainstage .info__contact__book a .btn-flex{display:flex;align-items:center;flex-direction:column;justify-content:center;text-transform:none}#Mainstage .info__contact__book a .btn-flex img{width:80px}#Mainstage .info__contact__book a:hover span{color:#fff}#Mainstage .info__contact__coupons{font-size:16px;height:45px;display:flex;align-items:center;justify-content:center;padding:10px 20px;text-align:center;background:#FF7D00}#Mainstage .info__contact__coupons:hover{color:#fff}@media (max-width: 1440px){#Mainstage .info__contact{flex-direction:column}#Mainstage .info__contact>p{font-size:20px}#Mainstage .info__contact__text{-ms-grid-row:1;grid-row:1;-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5;text-align:center}#Mainstage .info__contact__phone{-ms-grid-row:2;grid-row:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1 / 3}#Mainstage .info__contact__phone a{display:flex;justify-content:center}#Mainstage .info__contact__book{-ms-grid-row:2;grid-row:2;-ms-grid-column:3;-ms-grid-column-span:2;grid-column:3 / 5}#Mainstage .info__contact__book a{display:flex;justify-content:center}#Mainstage .info__contact__book a .btn-flex{flex-direction:row}#Mainstage .info__contact__coupons{-ms-grid-row:3;grid-row:3;-ms-grid-column:2;-ms-grid-column-span:2;grid-column:2 / 4}}@media (max-width: 1000px){#Mainstage .info__contact__phone{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5}#Mainstage .info__contact__book{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5;-ms-grid-row:3;grid-row:3}#Mainstage .info__contact__coupons{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1 / 5;-ms-grid-row:4;grid-row:4}}@media (max-width: 1000px){#Mainstage{display:flex;align-items:flex-end;padding-bottom:0;height:650px}}.home-zip-search:before,.home-zip-search:after{display:none}
    </style>
  `)


  // get page phone #
  const phuneNum = qs('#Header_3').innerText;
    
  var newSection = `
    <section class="module--content-module magic show hzn-pt-16 hzn-pb-16" style="background-color: rgb(255, 255, 255);">
      <div class="main temp-module temp-right items-start">
        <div class="tm-image" style="width: 30%;">
          <img width="1024" height="768" src="https://i.imgur.com/PwudFNM.png" alt="Heater" loading="lazy" class="attachment-large size-large">
        </div>
        <div class="tm-content" style="width: 70%; color: rgb(30, 30, 30); font-size: 20px;">
          <h2 style="text-align: left;">
            <span style="color: rgb(201, 0, 0);">
              <strong>Heater Tune-Up</strong>
            </span>
          </h2>
          <p>Even if you prefer cold weather, there is not much to love about high heating costs or a broken furnace on a chilly night. Keeping your furnace and its equipment running in tip-top shape can result in higher efficiency. In other words, furnace tune-ups can save you time and money—this winter and every year. With just an hour or two of preventive maintenance each fall, your furnace can last longer, while costing less to run.</p>
          <p>We are currently offering a Heater Tune-up with Free 1" Filter for $79 until 11/30/22. Click "Learn More" to learn what a tune-up includes and schedule your appointment online today.</p>
          <a href="https://www.snellheatingandair.com/heating-services/furnace-tune-up/" class="btn tm-cta-6 self-start hzn-mt-16 hzn-mb-16">Learn More</a>
        </div>
      </div>
    </section>
  `;
      

  // hero section
  qs('.info').outerHTML = `
  <div class="info">
    <span class="time-left-title">
      Voted #1 Rated Heating, Air Conditioning & Plumbing Contractor Near You!
    </span> 
    <p>
      A comfortable home starts with Horizon! Experienced, local professionals available 24/7 to provide best-in-class SAME-DAY Service when you need it most. $0 Emergency Fees. Guaranteed to fix it on the first visit. Home of the original “No-Breakdown Guaranteed” Heater Tune-Up. Ask about $0 Down/ $0 Payments until 2024!
    </p> 
    <div class="info__contact">
      <span class="info__contact__text">Book Same/Next Day Visit:</span> 
      <span class="info__contact__phone">
        <a href="tel:${phuneNum}" class="btn v5">
          <icon svg="269528"><svg viewBox="0 0 1024 1024" data-use="/cms/svg/ygzz3v3cy5f.svg#icon_269528"><path d="M827.1 911.5a253.6 253.6 0 0 0 16.9-26.8c31.1-63-170.9-242.6-224.1-187.8-15 15-44.9 65.4-87.4 12.6a2080 2080 0 0 1-160.3-341.8c-13.4-67.3 42.9-61 63.8-63.8 74-10.2 62.6-286.3-4.3-299.7a1036.2 1036.2 0 0 0-132.7-3.5c-40.6 5.1-117.3 72.9-121.7 193a901.5 901.5 0 0 0 95.3 435.9a861.6 861.6 0 0 0 271.3 346.9c93.7 70.5 192.2 49.6 220.9 19.3 2.8-3.2 7.1-8.3 12.2-14.6Z"></path></svg>
          </icon>
          <span>
            ${phuneNum}
          </span>
        </a>
      </span> 
      <span class="info__contact__book">
        <a href="/book-online/" class="btn v5 btn-ezbook">
          <span class="btn-flex"><img src="https://www.horizonservices.com/wp-content/uploads/2021/04/EZBOOK-white.png" alt="EZBOOK NOW!">
            <span>Schedule Online</span>
          </span>
        </a>
      </span> 
      <a href="/coupons/" class="info__contact__coupons">
        Discounts & Coupons
      </a>
    </div>
  </div>
  `;

  // remove sub-hero phone and schedule
  qs('#HomeZipSearch').remove();
      
  // move 'indoor air quality' down
  jQuery('a.btn[href="https://www.snellheatingandair.com/indoor-air-quality/"]').closest('section').insertAfter(jQuery('a.btn[href="https://www.snellheatingandair.com/plumbing/plumbing-repair/"]').closest('section'));
  
  
  //insert new section
  jQuery('a.btn[href="https://www.snellheatingandair.com/snell-partners-with-shanahans-heating-cooling/"]').closest('section').after(newSection);


  qs('.module--content-module a[https://www.snellheatingandair.com/heating-services/furnace-tune-up/"]').addEventListener('click', function(){
    ga('send', 'event', 'cro conversion', 'HGH13_V0: Heater Tune-up click');
  });
  
}


// Initialize experiment
poll('a.btn[href="https://www.snellheatingandair.com/plumbing/plumbing-repair/"]', init);
