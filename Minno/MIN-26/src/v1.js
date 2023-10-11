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
    .hero{background-image:url("https://i.imgur.com/dAoyVE0.jpg");padding:60px 3rem 0}@media (max-width: 1023px){.hero{background-image:url("https://i.imgur.com/7JUKraN.jpg");padding:30px 2rem 0}}.hero__content{display:flex;flex-direction:column;width:55%}@media (max-width: 1023px){.hero__content{width:100%}}.hero__content__header h2{font-size:55px;line-height:1.2}@media (max-width: 1023px){.hero__content__header h2{font-size:35px}}.hero__content__copy p{font-size:25px}@media (max-width: 1023px){.hero__content__copy p{font-size:20px}}.hero__content__copy p span{font-weight:700}.hero__content__cta a{background:#E06B52;padding:15px 20px;display:flex;justify-content:space-around;align-items:center;width:300px;border-radius:30px;color:#fff;font-size:22px;font-weight:900;margin-bottom:50px}@media (max-width: 1023px){.hero__content__cta a{width:250px;font-size:20px;padding:10px 15px}.hero__content__cta a img{width:25px}}.hero__content__cta img{width:30px}.hero__content__logos{display:flex;justify-content:space-around;align-items:center;margin-bottom:20px;max-width:650px}@media (max-width: 1023px){.hero__content__logos{flex-direction:column;width:50%}}.hero__content__logos img{width:150px}@media (max-width: 1023px){.hero__content__logos img{margin-bottom:15px;width:100px}}.hero__content__logos img[alt="Veggietales"]{width:200px}@media (max-width: 1023px){.hero__content__logos img[alt="Veggietales"]{width:150px}}.hero__content__subcopy p{text-align:right;font-size:25px}.hero__content__subcopy p span{font-weight:700}@media (max-width: 1023px){.hero__content__subcopy{width:50%;display:flex;justify-content:center}.hero__content__subcopy p{font-size:17px;text-align:left;white-space:nowrap}}
    </style>`);

  qs('#hero').outerHTML = `
    <div id="hero" class="hero section rocket-lazyload lazyloaded" data-ll-status="loaded">
        <div class="hero__content">
            <div class="hero__content__header">
                <h2>Watch and Grow<br>in Christ, Everyday</h2>
            </div>
            <div class="hero__content__copy">
                <p>Disciple <span>you kids</span> with instant access<br>to hours of <span>faith-filled shows.</span></p>
            </div>
            <div class="hero__content__cta">
                <a href="https://www.gominno.com/pricing">Try Minno Now <img src="https://i.imgur.com/4HwkxxO.png" alt="Try Minno Now"></a>
            </div>
            <div class="hero__content__logos">
                <img src="https://i.imgur.com/aRrOF2Y.png" alt="Veggietales">
                <img src="https://i.imgur.com/9JjD9jV.png" alt="5 minute family devotional">
                <img src="https://i.imgur.com/7eL2Rzt.png" alt="Church at home">
            </div>
            <div class="hero__content__subcopy">
                <p>... and so much <span>more!</span></p>
            </div>
        </div>
    </div>
  `;
  
}


// Initialize experiment
poll('#hero', init);