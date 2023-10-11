// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';





// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// home2
if (document.URL.indexOf('home2') > -1) {
  function init() {

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
            <div class="hero__content__cta--sub">
              <h4>No credit card required!</h4>
            </div>
        </div>
    </div>
  `;
  }
 // Initialize experiment
  poll('#hero', init);
}

// start-you-trial
if (document.URL.indexOf('start-your-trial') > -1) {
  function init() {

    console.log('MIN-31');
  // new page html
  qs('.container').outerHTML = `
  <div class="container tin-trial">
    <header class="article-header pricing-header">
      <img src="https://i.imgur.com/wB0X2Yq.png" alt="Max Minno">
      <h1 class="page-title">Stream FREE For 7 Days<br>No Credit Card Required</h1>
    </header>
    <div class="columns is-centered">
      <div class="column is-half">
          <div class="plan-box">
            <div class="plan-box-inner">
              <h2 class="plan-box-inner__header">With a Minno free trial, you experience...</h2>
                <div>
                  <ul>
                      <li><span>Total confidence</span> in what your kids watch</li>
                      <li><span>Zero worry</span> about unmonitored screen time</li>
                      <li><span>Support in your parenting</span> with shows that match your family’s values</li>
                      <li><span>Freedom to choose</span> from an always-growing selection of fun and faith-inspiring content</li>
                      <li><span>Being part of a movement</span> that brings Biblical values to kids’ shows like never before</li>
                  </ul>
                </div>
                <a href="https://kids.gominno.com/signup?nb=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9" class="button monthly">Get Started</a>
                <div class="sub-price"><p>Only $6.99/mo. after</p></div>
            </div>
          </div>
      </div>
    </div>
    <div class="has-text-centered">
      <a class="button is-primary is-medium is-fullwidth-mobile gift" href="https://www.gominno.com/gift?gtm_debug%3D1651695700674">Gift Minno Now</a>
    </div>
    <div class="has-text-centered">
      <p>*Subject to <a class="terms-link" href="https://www.gominno.com/toc?gtm_debug%3D1651695700674">Terms and Conditions</a><br>
          <sub>All prices listed in USD</sub>
      </p>
    </div>
  </div>`;


  // remove lower button
  qsa('.container > div.has-text-centered').forEach(el => {
    el.remove();
  })
  
  }


  poll('.container .columns .is-two-fifths:nth-of-type(2)', init);
}