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
    .hero{background-image:url("https://i.imgur.com/7Rc4N6K.jpg");padding:60px 3rem 0}@media (max-width: 1023px){.hero{background-image:url("https://i.imgur.com/NnpQgrT.jpg");padding:30px 2rem 0;display:flex;align-items:flex-start;background-position:bottom;min-height:670px}}.hero__content{display:flex;flex-direction:column;width:55%}@media (max-width: 1023px){.hero__content{width:100%;align-items:center}}.hero__content__header h2{font-size:55px;line-height:1.2;color:#303672}@media (max-width: 1023px){.hero__content__header h2{font-size:30px;text-align:center}}.hero__content__copy p{font-size:25px;color:#303672}@media (max-width: 1023px){.hero__content__copy p{font-size:16px;text-align:center}}.hero__content__copy p span{font-weight:700}.hero__content__cta a{background:#E06B52;padding:15px 20px;display:flex;justify-content:space-around;align-items:center;width:300px;border-radius:30px;color:#fff;font-size:22px;font-weight:900;margin-bottom:50px}@media (max-width: 1023px){.hero__content__cta a{width:250px;font-size:20px;padding:10px 15px}.hero__content__cta a img{width:25px}}.hero__content__cta img{width:30px}.about-box img{width:50%;margin-bottom:20px}.cta__orange{background:#E06B52;padding:15px 20px;display:flex !important;justify-content:space-around;align-items:center;width:300px;border-radius:30px;color:#fff;font-size:22px;font-weight:900;margin-bottom:50px}.cta__orange img{width:30px}
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
        </div>
    </div>
  `;


  // add testimonial
  qs('#hero').insertAdjacentHTML('afterend', `
  <div class="about-mino aqua-bar section">
    <div class="grid-container">
      <div class="grid-x grid-margin-x grid-padding-x">
          <div class="small-12 medium-12 large-12 cell">
            <h1 class="about-mino-heading">What Parents Are Saying About Minno</h1>
          </div>
      </div>
      <div class="grid-x grid-padding-x small-up-1 medium-up-1 large-up-3 text-center">
          <div class="cell">
            <div class="about-box">
                <img src="https://i.imgur.com/qTYK6zZ.png" alt="review stars">
                <p>“There are so many options to choose from and they are constantly adding more content. Well worth the subscription!!"</p>
                <h3>Baxters5</h3>
            </div>
          </div>
          <div class="cell">
            <div class="about-box">
                <img src="https://i.imgur.com/qTYK6zZ.png" alt="review stars">
                <p> “I love that I can put this app on, give it to my kids and not worry what they will choose. They love the freedom too and love learning about Jesus in so many ways!”</p>
                <h3>Mags</h3>
            </div>
          </div>
          <div class="cell">
            <div class="about-box">
                <img src="https://i.imgur.com/qTYK6zZ.png" alt="review stars">
                <p>“Very awesome, clean entertainment for our kids. Much better than mindless YouTube surfing!”</p>
                <h3>Jonah</h3>
            </div>
          </div>
      </div>
    </div>
  </div>
  `);


  // make other CTAs orange style and new text
  qsa('a.button').forEach(function(el){
    el.classList.add('cta__orange');
    el.innerHTML = 'Try Minno Now<img src="https://i.imgur.com/4HwkxxO.png" alt="Try Minno Now">';
  });

  
}


// Initialize experiment
poll('.pricing a.button', init);