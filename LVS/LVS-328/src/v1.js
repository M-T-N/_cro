// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

    // modal html
    const modalHTML = `
      <div class="tin__modal">
          <div class="tin__modal__overlay">
              <div class="tin__modal__body">
                  <span class="tin__modal__body__close">&#10005;</span>
                  <div class="tin__modal__body__header">
                      <h3>Receive Personalized Content</h3>
                  </div>
                  <div class="tin__modal__body__text">
                      <p>Share your location to receive personalized content.</p>
                  </div>
                  <div class="tin__modal__body__buttons">
                      <button class="tin__modal__body__buttons--no">
                          No Thanks
                      </button>
                      <button class="tin__modal__body__buttons--yes">
                          Yes Please
                      </button>
                  </div>
              </div>
          </div>
      </div>  
    `;

    // timer to inject html
    setTimeout(function(){
      qs('.page-wrapper').insertAdjacentHTML('beforebegin', modalHTML);
      qs('body').style.overflow = 'hidden';

      // close the modal
      qsa('.tin__modal__body__close, .tin__modal__body__buttons button').forEach(function(el){
        el.addEventListener('click',function(){
          qs('.tin__modal').remove();
          qs('body').style.overflow = 'initial';
          document.cookie = 'VEN-328=true; expires=Fri, 01 Jan 2030 08:00:00 GMT; path=/;';
        });
      });
    }, 3000);


}


// Initialize experiment
poll('body', init);