// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  console.log('HGH-16_v1');

  qs('head').insertAdjacentHTML('beforeend', `<style>
  .scrollHidden{position:fixed;overflow-y:hidden;width:100vw}.tin__ezbook-popup{position:fixed;height:100vh;width:100vw;padding:30px;display:flex;justify-content:center;align-items:center;z-index:1000000}@media (max-width: 768px){.tin__ezbook-popup{overflow:scroll}}.tin__ezbook-popup__background{position:absolute;height:100%;width:100%;background-color:rgba(0,0,0,0.5)}@media (max-width: 768px){.tin__ezbook-popup__background{height:calc(100vh + 200px)}}.tin__ezbook-popup__content{max-width:800px;background-color:#1D486F;border:6px solid #74AA50;padding:35px 30px 15px;color:#fff;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.tin__ezbook-popup__content-close{position:absolute;top:10px;right:20px;font-weight:700;font-size:20px;cursor:pointer}.tin__ezbook-popup__content-header{margin-bottom:40px}.tin__ezbook-popup__content-header h3{font-size:20px;font-weight:700;text-align:center}@media (max-width: 768px){.tin__ezbook-popup__content-header{margin-bottom:20px}.tin__ezbook-popup__content-header h3{font-size:18px}}.tin__ezbook-popup__content-body{display:flex;margin-bottom:30px}@media (max-width: 768px){.tin__ezbook-popup__content-body{flex-direction:column;align-items:center}}.tin__ezbook-popup__content-body--list{line-height:1.3;margin-right:10px}.tin__ezbook-popup__content-body--list ul{list-style:disc;list-style-position:inside;margin-left:20px;text-indent:-20px}.tin__ezbook-popup__content-body--list ul li{font-size:20px;margin-bottom:12px}.tin__ezbook-popup__content-body--list ul li span{font-style:italic}@media (max-width: 768px){.tin__ezbook-popup__content-body--list ul li{font-size:16px}}.tin__ezbook-popup__content-body--img{display:flex;align-items:center}.tin__ezbook-popup__content-body--img img{max-width:175px}@media (max-width: 768px){.tin__ezbook-popup__content-body--img{max-width:150px}}.tin__ezbook-popup__content-cta{display:flex;flex-direction:column;text-align:center}.tin__ezbook-popup__content-cta--header p{font-size:20px}@media (max-width: 768px){.tin__ezbook-popup__content-cta--header p{font-size:16px}}.tin__ezbook-popup__content-cta--button a{display:flex;align-items:center;justify-content:center;background:#02AC1E;padding:6px 15px;border:2px solid #fff;font-weight:700;margin-bottom:25px}.tin__ezbook-popup__content-cta--button a:hover{color:#fff}.tin__ezbook-popup__content-cta--button a p{font-size:20px;margin-bottom:0;line-height:1.1}.tin__ezbook-popup__content-cta--button a p img{height:30px}@media (max-width: 768px){.tin__ezbook-popup__content-cta--button a p{font-size:18px}.tin__ezbook-popup__content-cta--button a p img{height:25px}}.tin__ezbook-popup__content-cta--close{margin-bottom:30px;display:flex;justify-content:center}.tin__ezbook-popup__content-cta--close p{text-decoration:underline;cursor:pointer;margin-bottom:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.tin__ezbook-popup__content-disclaimer p{font-style:italic;margin-bottom:0}
  </style>`)

  const popup = `
    <div class="tin__ezbook-popup">
      <div class="tin__ezbook-popup__background"></div>
      <div class="tin__ezbook-popup__content">
        <div class="tin__ezbook-popup__content-close">&#9587;</div>
        <div class="tin__ezbook-popup__content-header">
          <h3>We Have Certified Technicians Available TODAY!</h3>
        </div>
        <div class="tin__ezbook-popup__content-body">
          <div class="tin__ezbook-popup__content-body--list">
            <ul>
              <li>SAME-DAY Expert Heating, Plumbing & Water Heater Services <span>(Including Tune-Ups, Repairs, Replacement)</span> or it’s FREE!*</li>
              <li>24/7, Emergency Service Available
              </li>
              <li>Confirm Your Appointment in 30 Seconds
              </li>
            </ul>
          </div>
          <div class="tin__ezbook-popup__content-body--img">
            <img src="https://www.hutchbiz.com/wp-content/uploads/2022/05/hutch-truck-left.png" alt="">
          </div>
        </div>
        <div class="tin__ezbook-popup__content-cta">
          <div class="tin__ezbook-popup__content-cta--header">
            <p>(Just tell us where to send our Technician!)</p>
          </div>
          <div class="tin__ezbook-popup__content-cta--button">
            <a href="https://www.hutchbiz.com/book-appointment/">
              <p>Click Here to Confirm Your Appointment with <span><img src="https://www.goldmedalservice.com/wp-content/uploads/2021/06/EZBOOK-white.png" alt="EZBook"></span></p>
            </a>
          </div>
          <div class="tin__ezbook-popup__content-cta--close">
            <p>No, I'd Like to Continue to the Website
            </p>
          </div>
        </div>
        <div class="tin__ezbook-popup__content-disclaimer">
          <p>*See website for details</p>
        </div>
      </div>
    </div>
  `;

  function loadPopup(){
    // load popuphtml
    qs('body').insertAdjacentHTML('afterbegin', popup);
    // stop scrolling on page
    qs('body').classList.add('scrollHidden');
    // add event listeners to close
    qsa('.tin__ezbook-popup__content-close, .tin__ezbook-popup__content-cta--close p, .tin__ezbook-popup__background').forEach(function(el){
      el.addEventListener('click', function(){
        qs('body').classList.remove('scrollHidden');
        qs('.tin__ezbook-popup').remove();
      })
    });
    // in popup CTA click
    qs('.tin__ezbook-popup__content-cta--button a').addEventListener('click', function(){
      ga('send', 'event', 'cro conversion', 'HGH16_V1: Popup Modal CTA click');
    });
  }

  // CTA click in nav/hamburger menu
  qs('.mega-ezbook a').addEventListener('click', function(){
    ga('send', 'event', 'cro conversion', 'HGH16_V1: NavBar/HamburgerMenu CTA click');
  });

  // insert new html after timeout, create cookie for first time users
  setTimeout(function(){
    loadPopup();

    // 1 hour timed cookie
    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000);
    document.cookie = 'hgh16=true; expires=' + now.toUTCString() + '; path=/;';
    
  }, 3000)
  
}


// Initialize experiment
poll('body', init);