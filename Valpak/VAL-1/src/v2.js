// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  window.wistiaInit = function (W) {
    console.log('loaded Wistia!!!');

    // add video scripts
    qs('head').insertAdjacentHTML(
      'beforeend',
      `
          <script src="https://fast.wistia.com/assets/external/E-v1.js" async> </script>
          <script src= https://fast.wistia.com/embed/medias/hlwa1fro9o.jsonp  async></script>
          <script src= https://fast.wistia.com/embed/medias/jvxtubc6zc.jsonp  async></script>
          <script src= https://fast.wistia.com/embed/medias/c79mclsh0f.jsonp  async></script>
        `
    );
    // add video html

    qs('header').insertAdjacentHTML(
      'afterend',
      `
        <section class="tin-vids">
          <h2>Customer Case Studies</h2>
          <div class="tin-vids__vidwrap">
            <div>
              <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                  <iframe src="https://fast.wistia.net/embed/iframe/hlwa1fro9o?videoFoam=true" title="Antonio's Real Italian Pizza Advertising Story Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe>
                </div>
              </div>
              <h3>Antonio's Real Italian Pizza</h3>
              <p>"We tried the product, and we had just enormous success. What I like about advertising with Valpak is that it’s very cost-effective. It allows us to hit mass market at a very cost-effective rate."</p>
            </div>
            <div>
              <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                  <iframe src="https://fast.wistia.net/embed/iframe/jvxtubc6zc?videoFoam=true" title="Two Brothers Landscaping Advertising Story Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe>
                </div>
              </div>
              <h3>Two Brothers Landscaping</h3>
              <p>"I only use Valpak. I’ve tried TV, I’ve tried radio, and nothing holds a candle to Valpak."</p>
            </div>
            <div>
              <div class="wistia_responsive_padding" style="padding:56.25% 0 28px 0;position:relative;">
                <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                  <iframe src="https://fast.wistia.net/embed/iframe/c79mclsh0f?videoFoam=true" title="Feild Family Dentistry Advertising Story Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe>
                </div>
              </div>
              <h3>Feild Family Dentistry</h3>
              <p>"I think the main and bulk reason my father and I in this practice have benefited from Valpak and why we’re interested in it is the inflow of new patients."</p>
            </div>
          </div>
          <section>
      `
    );
  };
}

// Initialize experiment
poll('header', init);
