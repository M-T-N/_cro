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
    #hero{background-image:url("https://i.imgur.com/7Rc4N6K.jpg") !important;padding:60px 3rem 0}@media (max-width: 1023px){#hero{background-image:url("https://i.imgur.com/NnpQgrT.jpg") !important;padding:30px 2rem 0;display:flex;align-items:flex-start;background-position:bottom;min-height:670px}}.hero__content{display:flex;flex-direction:column;width:55%}@media (max-width: 1023px){.hero__content{width:100%;align-items:center}}.hero__content__logo{margin-bottom:15px}@media (max-width: 1023px){.hero__content__logo{align-self:flex-start;margin-bottom:30px}}.hero__content__header h2{font-size:55px;line-height:1.2;color:#303672}@media (max-width: 1023px){.hero__content__header h2{font-size:30px;text-align:center}}.hero__content__copy p{font-size:25px;color:#303672}@media (max-width: 1023px){.hero__content__copy p{font-size:16px;text-align:center}}.hero__content__copy p span{font-weight:700}.hero__content__downloads{display:flex;justify-content:space-between}.hero__content__downloads--apple{width:46%}.hero__content__downloads--google{width:51%;transform:translateY(-7%)}.hero__content__cta a{padding:15px 20px;display:flex;justify-content:space-around;align-items:center;color:#3bbebe;text-decoration:underline;font-size:22px;font-weight:900;margin-bottom:50px}@media (max-width: 1023px){.hero__content__cta a{width:250px;font-size:20px;padding:10px 15px}.hero__content__cta a img{width:25px}}.hero__content__cta img{width:30px}
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
        <div class="hero__content__downloads">
          <div class="hero__content__downloads--apple">
            <a href="https://apps.apple.com/us/app/minno-kids-bible-videos/id705286113 ">
              <img src="https://i.imgur.com/3LG04PU.png" alt="App Store Download">
            </a>
          </div>
          <div class="hero__content__downloads--google">
            <a href="https://play.google.com/store/apps/details?id=com.jellytelly&hl=en&gl=US">
              <img src="https://i.imgur.com/ErKzDE3.png" alt="Google Play Download">
            </a>
          </div>
        </div>
        <div class="hero__content__cta">
            <a href="https://www.gominno.com/pricing">Or Sign Up Now</a>
        </div>
    </div>
  </div>
  `;

  // GA send events
  qs('.hero__content__downloads--apple a').addEventListener('click', function(){
    ga('send', 'event', 'cro conversion', 'MIN37_v1: Apple App Store -- Hero');
  });

  qs('.hero__content__downloads--google a').addEventListener('click', function(){
    ga('send', 'event', 'cro conversion', 'MIN37_v1: Google Play Store -- Hero');
  });
  
}

function init2(){
  qs('.platforms > div:nth-child(2)').innerHTML = `
  <div class="cell">
    <a class="tin__app-store--link" target="_blank" href="https://apps.apple.com/us/app/minno-kids-bible-videos/id705286113">
      <img class="av-service lazyloaded" src="https://u53vs3w06453a0jvojprayp5-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917@2x.png" alt="App Store - Mobile app" data-ll-status="loaded"><noscript><img class="av-service" src="https://u53vs3w06453a0jvojprayp5-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917@2x.png" alt="App Store - Mobile app" /></noscript>
    </a>
  </div>
  <div class="cell">
    <a target="_blank" href="https://amzn//apps/android?asin=B017MVYM1C">
      <img class="av-service lazyloaded" src="https://u53vs3w06453a0jvojprayp5-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/amazon-badge-1@2x.png" alt="Amazon.com - Logo" data-ll-status="loaded"><noscript><img class="av-service" src="https://u53vs3w06453a0jvojprayp5-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/amazon-badge-1@2x.png" alt="Amazon.com - Logo" /></noscript>
    </a>
  </div>
  <div class="cell">
    <a class="tin__play-store--link" target="_blank" href="https://play.google.com/store/apps/details?id=com.jellytelly&hl=en&gl=US">
      <img class="av-service lazyloaded" src="https://u53vs3w06453a0jvojprayp5-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Mask-Group-13@2x.png" alt="Google Play - Download" data-ll-status="loaded"><noscript><img class="av-service" src="https://u53vs3w06453a0jvojprayp5-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Mask-Group-13@2x.png" alt="Google Play - Download" /></noscript>
    </a>
  </div>
  `;

  // GA send events
  qs('.tin__app-store--link').addEventListener('click', function(){
    ga('send', 'event', 'cro conversion', 'MIN37_v1: Apple App Store -- Lower');
  });

  qs('.tin__play-store--link').addEventListener('click', function(){
    ga('send', 'event', 'cro conversion', 'MIN37_v1: Google Play Store -- Lower');
  });
}


// Initialize experiment
poll('#hero', init);

// lower section init
poll('.platforms > div:nth-child(2) > .cell:nth-child(3)', init2);