// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';
import homepageFunction from './pages/homepage';
import searchFunction from './pages/searchResultsPage';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function mar2() {

  console.log('MAR-2_v2');

  qs('head').insertAdjacentHTML('beforeend', `<style>
  .search__flexible_date--info--hp{position:absolute;color:#707070;padding-left:1.875rem;transform:translateY(3px)}@media (max-width: 47.96875rem){.search__flexible_date--info--hp{padding-left:1.7rem;transform:translateY(-3px)}}@media (max-width: 47.96875rem){.search-form-body .search__flexible_date--info--hp{position:static;padding-left:0;transform:none;margin-bottom:0;margin-top:5px}}@media (max-width: 47.96875rem){.MuiPaper-root .search-dates-popup__main>div:nth-child(2){height:70px}.search-dates-popup__main>div:nth-child(2){height:4.8rem}}.tile-search-summary .t-is-visible-m{width:100%}.search__flexible_date--info--srp{display:inline-block;font-size:14px;margin-left:2px}@media (max-width: 47.96875rem){.search__flexible_date--info--srp{margin-top:0;margin-bottom:0}}#staydates .search__flexible_date--info--srp{margin-left:0;margin-top:5px;margin-bottom:0}@media (max-width: 47.96875rem){.m-field-control.m-date-picker.l-date-picker .field-title{display:inline-block}
  </style>`);

  // changes here
  if (document.URL.indexOf('/search/') == -1) {
    homepageFunction();
  } 
  if (document.URL.indexOf('/search/') != -1) { 
    searchFunction();
  }
  
}


// doc ready check
var cancel_interval_mar2 = setInterval(loadmar2, 30);
function loadmar2() {
  /******* START -----DOM is parsed  ************/
  if (document.readyState == "interactive" && typeof window.s === "object") {
    console.log("DOM is interactive.....");
    clearInterval(cancel_interval_mar2);
    mar2();
  }
  /******* END  ******/
  /******* START -----DOM is loaded  ************/
  else if (document.readyState == "complete" && typeof window.s === "object") {
    console.log("DOM is completed.....");
    clearInterval(cancel_interval_mar2);
    mar2();
  }
  else{
    console.log("DOM is still loading.....");
  }
  /******* END  ******/
}   