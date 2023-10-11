// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import quizBlock from './mods/quizBlock1';
import dropdownLinks from './mods/dropdownLinks';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  const quizLink = 'https://www.venetian.com/quiz/find-your-perfect-room-one.html';
  
  // insert new quizBlock at beginning
  qs('.mod-generic-detail-list > .mod-generic-detail-list--item:nth-of-type(1)').insertAdjacentHTML('beforebegin', quizBlock(quizLink));


  // set var for nav section 'plan your trip'
  dropdownLinks(quizLink);

}


// Initialize experiment
poll('.mod-generic-detail-list > .mod-generic-detail-list--item:nth-of-type(1)', init);

setTimeout(function(){ 
  hj('trigger', 'lvs-258-v1');
}, 2000);