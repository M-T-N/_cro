// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // add new sticky cta element
  const stickyCTA = `
    <div class="tin_stickyCTA tin_stickyCTA--hidden">
      <button>Add to Cart</button>
    </div>
  `;


  document.querySelector('.page').insertAdjacentHTML('beforeend', stickyCTA);



  // setup intersection observer to determine if purchase type is in view
  const target = document.querySelector('.single--product--Detail__delivery-type');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry.intersectionRatio);
      if (entry.intersectionRatio > 0) {
        // HIDE sticky CTA, in view 
        document.querySelector('.tin_stickyCTA').classList.add('tin_stickyCTA--hidden');
        console.log('HIDDEN!')
      } else if (entry.intersectionRatio == 0 && window.scrollY > 1500) {
        // SHOW sticky CTA, out of view
        document.querySelector('.tin_stickyCTA').classList.remove('tin_stickyCTA--hidden');
        console.log('VISSS!')
      }
    });
  });
  
  observer.observe(target);
 

  // add click event to new button to make it scroll up to purchase section
  document.querySelector('.tin_stickyCTA').addEventListener('click', function(e){
    e.preventDefault();
  	jQuery('html, body').animate({
      scrollTop: ((jQuery('.single--product--Detail__delivery-type').offset().top) - (jQuery('#nav-container').height()) - 20)
    }, 500, 'linear');
  });
}


// Initialize experiment
poll('.single--product--Detail__delivery-type', init);