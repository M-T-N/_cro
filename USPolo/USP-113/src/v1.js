// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // get SKU and name
  const productSKU = qs('.sku').outerHTML;
  const productName = qs('.product_name').outerHTML;

  if (qsa('.tin__header').length < 1) {
    qs('.product__images').insertAdjacentHTML('beforebegin', `
      <div class="tin__header">
          <div class="product__title">
              ${productSKU}
              ${productName}
          </div>
      </div>
    `);
  }
  
}



// Initialize experiment
poll('.product_name', init);