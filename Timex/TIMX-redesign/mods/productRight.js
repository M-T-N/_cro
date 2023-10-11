import { qs, qsa } from '../src/utils/qs';

export default function () {
  // move 'wishlist' below button
  if (qs('.wishlist-link')) {
    const wishlist = qs('.wishlist-link').outerHTML;
    qs('.product-actions').insertAdjacentHTML('beforeend', wishlist);
  }
}
