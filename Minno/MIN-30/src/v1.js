// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // MIN-27 hero
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

  qs('.aqua-bar:not(.about-mino)').outerHTML = `
   <div class="aqua-bar section tin-join">
     <div class="tin-join--wrapper">
      <div class="tin-join__cta">
        <div class="tin-join__cta--wrap">
          <h2>It's Okay to Press Play Again</h2>
          <p>See how parents feel streaming worry-free kids' shows that match their values.</p>
          <div class="tin-join__cta--btn">
            <a href="https://www.gominno.com/pricing">
              <img src="https://i.imgur.com/By78eDk.png" alt="Join Minno">
            </a>
          </div>
        </div>
      </div>
      <div class="tin-join__video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xXCx4aMdkyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
   </div>
  `;
  
}


// Initialize experiment
poll('.aqua-bar:not(.about-mino)', init);