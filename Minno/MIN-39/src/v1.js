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
    .hero{background-image:url("https://i.imgur.com/4TPT0bs.jpg");padding:60px 3rem 0}@media (max-width: 749px){.hero{background-image:url("https://i.imgur.com/FHq6kJw.jpg");padding:30px 2rem 0;display:flex;align-items:flex-start;background-position:bottom;min-height:670px}}@media (max-width: 749px) and (min-width: 750px) and (max-width: 1100px){.hero{background-image:url("https://i.imgur.com/mwrmZf3.jpg") !important}}.hero__content{display:flex;flex-direction:column;width:40%}@media (max-width: 749px){.hero__content{width:100%;align-items:center}}.hero__content__header h2{font-size:48px;line-height:1.2;color:#303672}@media (max-width: 749px){.hero__content__header h2{font-size:30px;text-align:center}}.hero__content__copy p{font-size:20px;color:#303672;margin-bottom:10px}@media (max-width: 749px){.hero__content__copy p{font-size:18px;text-align:center}}.hero__content__copy p span{font-weight:700}.hero__content__download{display:flex;justify-content:center;width:100%;margin-bottom:5px}.hero__content__download a{display:flex;justify-content:space-around;align-items:center;width:300px;border-radius:30px;color:#fff;font-size:22px;font-weight:900}.hero__content__download a.download-link__app-store{padding-right:5px}.hero__content__download a.download-link__play-store{padding-left:5px}.hero__content__download a.download-link__play-store img{height:108%}@media (max-width: 749px){.hero__content__download a{font-size:20px;padding:10px 15px}.hero__content__download a img{width:170px}}.hero__content__download img{width:30px}.hero__content__cta a{color:var(--aqua);text-decoration:underline;font-size:18px;font-weight:600}
    </style>`);

  qs('#hero').outerHTML = `
  <div id="hero" class="hero section rocket-lazyload lazyloaded" data-ll-status="loaded">
    <div class="hero__content">
      <div class="hero__content__header">
        <h2>Watch Good Grow,<br>Every Day</h2>
      </div>
      <div class="hero__content__copy">
        <p>Share Jesus with <span>you kids</span> by instantly streaming <span>faith-filled shows.</span></p>
      </div>
      <div class="hero__content__download">
        <a class="download-link__app-store" href="https://apps.apple.com/us/app/minno-kids-bible-videos/id705286113"><img src="https://i.imgur.com/3LG04PU.png" alt="App Store"></a>
        <a class="download-link__play-store" href="https://play.google.com/store/apps/details?id=com.jellytelly&hl=en&gl=US"><img src="https://i.imgur.com/ErKzDE3.png" alt="Play Store"></a>
      </div>
      <div class="hero__content__cta">
        <a href="https://www.gominno.com/pricing">Or Sign Up Now</a>
      </div>
    </div>
  </div>
  `;



  // GA tracking
  qs('.download-link__app-store').addEventListener('click', function(){
    ga('send', 'event', 'cro conversion', 'MIN39_V1: App Store click -- Hero');
  });

  qs('.download-link__play-store').addEventListener('click', function(){
    ga('send', 'event', 'cro conversion', 'MIN39_V1: Play Store click -- Hero');
  });
  

}


// Initialize experiment
poll('#hero', init);