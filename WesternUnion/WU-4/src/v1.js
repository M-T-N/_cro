// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import div from './html/appBanner.html';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  qs('head').insertAdjacentHTML(
    'beforeend',
    `
    <style>
    
      .pad-sm-vert {
        padding: 12px 8px;
        font-family: Euclid WU,Noto Sans,sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
      .d-flex {
        display: flex;
        text-align: left;
      }
      .close_btn {
        width: 16px;
        display: flex;
        align-items: center;
      }
      .asb-icon {
        padding: 0 10px;
      }
      .banner-msg {
        width: calc(100% - 171px);        
      }
      .app-download {
        height: 32px;
        font-size: 13px;
        min-width: 30%;
        background-color: #000;
        border-radius: 999px;
        text-align: center;
        color: #fd0;
      }
    </style>
  `
  );
  qs('header').insertAdjacentHTML('beforebegin', div);
}

// Initialize experiment
poll('header', init);
