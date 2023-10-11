// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  qs('head').insertAdjacentHTML('beforeend', `
    <style>
    #hero{background-image:url("https://i.imgur.com/7Rc4N6K.jpg") !important;padding:60px 3rem 0}@media (max-width: 1023px){#hero{background-image:url("https://i.imgur.com/NnpQgrT.jpg") !important;padding:30px 2rem 0;display:flex;align-items:flex-start;background-position:bottom;min-height:670px}}.hero__content{display:flex;flex-direction:column;width:55%}@media (max-width: 1023px){.hero__content{width:100%;align-items:center}}.hero__content__logo{margin-bottom:15px}@media (max-width: 1023px){.hero__content__logo{align-self:flex-start;margin-bottom:30px}}.hero__content__header h2{font-size:55px;line-height:1.2;color:#303672}@media (max-width: 1023px){.hero__content__header h2{font-size:30px;text-align:center}}.hero__content__copy p{font-size:25px;color:#303672}@media (max-width: 1023px){.hero__content__copy p{font-size:16px;text-align:center}}.hero__content__copy p span{font-weight:700}.hero__content__cta a{background:#E06B52;padding:15px 20px;display:flex;justify-content:space-around;align-items:center;width:300px;border-radius:30px;color:#fff;font-size:22px;font-weight:900;margin-bottom:50px}@media (max-width: 1023px){.hero__content__cta a{width:250px;font-size:20px;padding:10px 15px}.hero__content__cta a img{width:25px}}.hero__content__cta img{width:30px}
    </style>`);

  qs('#hero').outerHTML = `
    <div id="hero" class="hero section rocket-lazyload lazyloaded" data-ll-status="loaded">
        <div class="hero__content">
          <div class="hero__content__logo">
            <img src="https://i.imgur.com/wbcboWm.png">
          </div>
            <div class="hero__content__header">
                <h2>Watch and Grow<br>in Christ, Everyday</h2>
            </div>
            <div class="hero__content__copy">
                <p>Disciple <span>you kids</span> with instant access<br>to hours of <span>faith-filled shows.</span></p>
            </div>
            <div class="hero__content__cta">
                <a href="https://www.gominno.com/pricing">Try Minno Now <img src="https://i.imgur.com/4HwkxxO.png" alt="Try Minno Now"></a>
            </div>
        </div>
    </div>
  `;
  
}


// Initialize experiment
poll('#hero', init);