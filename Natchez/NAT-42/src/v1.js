// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss'



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // copy search bar HTML
  const searchBar = document.querySelector('#search_mini_form').outerHTML;

  // put copy in the header
  qs('.header-container').insertAdjacentHTML('beforeend', searchBar);

  // add class to new search bar
  qs('.header-container > #search_mini_form').classList.add('tin__search');


  // copy search icon
  const searchIcon = qs('#search_mini_form .icon-search').outerHTML;

  // insert new search button
  qs('.header .wrap > a.icon-cart').insertAdjacentHTML('beforebegin', searchIcon);

  // add class to new search icon
  qs('.header .wrap > .icon-search').classList.add('tin__search-icon');


  // function to add class to field for dropdown
  function searchDrop() {
    qs('.tin__search').classList.toggle('tin__search--active');
  }

  // add click event to new icon
  qs('.tin__search-icon').addEventListener('click', searchDrop)

}


// Initialize experiment
poll('#search_mini_form', init);