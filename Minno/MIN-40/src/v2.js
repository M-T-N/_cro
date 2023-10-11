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
    #hero{background-image:url("https://i.imgur.com/4TPT0bs.jpg") !important;padding:60px 3rem 0;background-position-y:calc(100% + 16px)}@media (max-width: 749px){#hero{background-image:url("https://i.imgur.com/FHq6kJw.jpg") !important;padding:30px 2rem 0;display:flex;align-items:flex-start;background-position-y:-80px;min-height:670px}}@media (min-width: 750px) and (max-width: 1100px){#hero{background-image:url("https://i.imgur.com/mwrmZf3.jpg") !important}}@media (max-width: 450px){#hero{background-position-y:0}}.hero__content{display:flex;flex-direction:column;width:45%;align-items:flex-start}@media (max-width: 749px){.hero__content{width:100%;align-items:center}}.hero__content__logo{margin-bottom:15px}.hero__content__logo img{min-width:240px;height:74px}@media (max-width: 749px){.hero__content__logo{margin-bottom:30px}}.hero__content__header h2{font-size:40px;line-height:1.2;color:#303672;text-align:left}@media (min-width: 750px) and (max-width: 974px){.hero__content__header h2{font-size:36px}}@media (max-width: 749px){.hero__content__header h2{font-size:30px;text-align:center}}.hero__content__copy p{font-size:16px;color:#303672;text-align:left}@media (max-width: 749px){.hero__content__copy p{font-size:16px;text-align:center}}.hero__content__copy p span{font-weight:700}.hero__content__cta a{background:#E06B52;padding:15px 20px;display:flex;justify-content:space-around;align-items:center;width:300px;border-radius:30px;color:#fff;font-size:22px;font-weight:900;margin-bottom:50px}@media (max-width: 749px){.hero__content__cta a{width:250px;font-size:20px;padding:10px 15px}.hero__content__cta a img{width:25px}}.hero__content__cta img{width:30px}
    </style>`);

  qs('#hero').outerHTML = `
    <div id="hero" class="hero section rocket-lazyload lazyloaded" data-ll-status="loaded">
        <div class="hero__content">
          <div class="hero__content__logo">
            <img src="https://i.imgur.com/AOHcwCu.png">
          </div>
            <div class="hero__content__header">
              <h2>The #1 Source of Christian Content for Kids</h2>
            </div>
            <div class="hero__content__copy">
                <p>Watch <span>fun</span> and <span>educational</span> shows with a focus on <span>faith.</span></p>
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