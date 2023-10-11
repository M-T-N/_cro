// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  /*
  qs('head').insertAdjacentHTML('beforeend', `
    <style>
    @media (min-width: 1400px){.mod-quick-facts__container{padding:27px 20px 23px}}@media (max-width: 1020px){.mod-quick-facts__container{display:block;bottom:-205px}}@media (max-width: 1020px){.mod-quick-facts__container>li:not(:last-of-type){margin-bottom:20px}}@media (max-width: 1020px){.mod-quick-facts__container .separator{display:none}}.mod-quick-facts__group-dining{display:flex;cursor:pointer}.mod-quick-facts__group-dining:hover{color:#db2000}@media (max-width: 1020px){.mod-about{margin-top:220px}}
    </style>
  `);
  */

  // add new Group Dining li
  qs('.mod-quick-facts__menu').insertAdjacentHTML('afterend', `
    <div class="separator"></div>
    <li class="mod-quick-facts__group-dining">
        <span>
            <img src="//cdn.optimizely.com/img/8200950428/84ffa0b7eff54b27aad27c79196d8313.png" alt="Group Dining">
        </span>
        <span class="mod-quick-facts__group-dining--text">Group Dining</span>
    </li>
  `);

  // scroll down when cliking li
  qs('.mod-quick-facts__group-dining').addEventListener('click', function(event){
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: (jQuery('.interstitial-info').offset().top) - (jQuery('.site-header').outerHeight())
    }, 500, 'linear');
    // open group dining section  below
    document.querySelector('.interstitial-info .js-list-expander-btn').click();
  });


  // add new text
  qs('.interstitial-info .mod-interstitial-info__column-wrapper.hide-on-fd:nth-of-type(3) p').insertAdjacentHTML('afterend', '<h3 class="o-h10">Make an Online Reservation</h3>');
  
  // change link in Group Dining section
  qs('.interstitial-info .mod-interstitial-info__column-wrapper.hide-on-fd:nth-of-type(3) a').outerHTML = `<a href="https://50eggs.tripleseat.com/party_request/6881" class="inline-link" target="_self">Click here to make a group dining reservation</a>`;

}


// Initialize experiment
poll('.mod-quick-facts__menu', init);