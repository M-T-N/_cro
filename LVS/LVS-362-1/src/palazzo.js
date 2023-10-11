// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';
import { textUpdatePalazzo } from './utils/textUpdatePalazzo';
import { towerIcons } from './utils/towerIconsPalazzo';
import { roomFilter } from './utils/roomFilterPalazzo';
import { palazzoNewRooms } from './utils/palazzoNewRooms';




// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  qs('head').insertAdjacentHTML('beforeend', `<style>
  .mod-suites-browse-listing__cards{display:-ms-grid;display:grid;grid-column-gap:2%;grid-row-gap:50px}.mod-suites-browse-listing__cards-filters{display:flex;justify-content:space-evenly;max-width:850px;margin:0 auto 20px}@media (max-width: 639px){.mod-suites-browse-listing__cards-filters{justify-content:space-between}}.mod-suites-browse-listing__cards-filters p{cursor:pointer}.mod-suites-browse-listing__cards-filters .active p{text-decoration:underline;text-decoration-color:red;text-decoration-thickness:2px;text-underline-offset:5px}@media (max-width: 639px){.mod-suites-browse-listing__cards{-ms-grid-columns:(100%)[1];grid-template-columns:repeat(1, 100%)}}@media (min-width: 640px){.mod-suites-browse-listing__cards{-ms-grid-columns:(49%)[2];grid-template-columns:repeat(2, 49%)}}@media (min-width: 980px){.mod-suites-browse-listing__cards{-ms-grid-columns:(32%)[3];grid-template-columns:repeat(3, 32%)}}.mod-suites-browse-listing__card{display:flex;flex-direction:column;border:none;width:100%;padding:0}.mod-suites-browse-listing__card:last-of-type{border-bottom:none}.mod-suites-browse-listing__card-media{width:100%}.mod-suites-browse-listing__card-text{width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start}@media (min-width: 980px){.mod-suites-browse-listing__card-text{margin-left:0;padding-right:0}}.mod-suites-browse-listing__card-text .cta-stack{display:flex;flex-direction:row-reverse;margin-top:auto}@media (min-width: 980px){.mod-suites-browse-listing__card-text .cta-stack{position:static}}.mod-suites-browse-listing__card-text .cta-stack .cta{margin-top:0}.mod-suites-browse-listing__card-text .cta-stack .cta>span{min-width:unset}.mod-suites-browse-listing__card-text .cta-stack .cta--tin{display:flex;justify-content:center;align-items:center;padding-left:15px;color:#000;font-style:italic}.mod-suites-browse-listing__card-text .cta-stack .cta--tin span{text-decoration:underline}.mod-suites-browse-listing__card-text .cta-stack .cta--tin::after{content:'\\2192';padding-left:10px}.mod-suites-browse-listing__card-description{font-style:italic}@media (min-width: 980px){.mod-suites-browse-listing__card-title{font-size:32px}}@media (min-width: 640px){.mod-suites-browse-listing__card-title{line-height:120%}}.mod-suites-browse-listing__card .towers_overlay{position:absolute;right:0;z-index:100;background:rgba(255,255,255,0.8);display:flex;align-items:center;justify-content:space-between;padding:6px 12px}.mod-suites-browse-listing__card .towers_overlay--icons{transform:translateY(3px);display:flex}.mod-suites-browse-listing__card .towers_overlay--text{padding-left:6px}.mod-suites-browse-listing__card.filterHide{display:none}
  </style>`);

  // insert new rooms from /suites
  palazzoNewRooms();


  // move all of the cards into a single container
  $('.mod-suites-browse-listing__card').each(function(){
    $(this).appendTo($('.mod-suites-browse-listing').eq(0));
  });

  // wrap all cards in container for new 'grid'
  $('.mod-suites-browse-listing__card').wrapAll('<div class="mod-suites-browse-listing__cards">');

  // remove bottom room type container
  qs('.mod-suites-browse-listing:nth-of-type(2)').remove();

  // update section header text
  qs('.mod-suites-browse-listing__title').innerHTML = 'Two Hotels.<br>One Great Stay.';
  qs('.mod-suites-browse-listing__description').innerText = 'Nearly double the size of your average Las Vegas hotel room, our standard Las Vegas hotel suites have everything you need and more. Celebrity Radio UK calls them "[…] divine… elegant, spacious, perfectly designed and offer the epitome of decadence, indulgence, and luxury.” We totally agree.';

  // remove bullet lists from all cards
  qsa('.mod-suites-browse-listing__card-amenities').forEach(function(el){
    el.remove();
  });

  // update card text
  textUpdatePalazzo();

  // remove styling from 'view suite' button
  qsa('.cta.cta--outline-arrow').forEach(function(el){
    el.classList.add('cta--tin');
    el.classList.remove('cta', 'cta--outline-arrow');
    el.querySelector('i').remove();
  });

  // remove Presidential and Chairman suites
  qsa('a[aria-label="Presidential Suite: View Suite"], a[aria-label="Chairman Suite: View Suite"]').forEach(el => {
    el.closest('.mod-suites-browse-listing__card').remove();
  })

  // add tower icons overlay to each card (slow it down)
  setTimeout(function(){
    towerIcons();
  }, 3000);


  // add suite filters and functions
  roomFilter();


  // make Palazzo filter default (slow it down)
  setTimeout(function(){
    qs('.mod-suites-browse-listing__cards-filters--plz p').click();
  }, 1500)
  
}



// Initialize experiment
poll('a.cta[aria-label="Chairman Suite: View Suite"]', init);