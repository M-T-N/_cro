// CSS
document.querySelector('head').insertAdjacentHTML('beforeend', `
  <style type="text/css">
    .template-index #content {
      margin-top: 75px;
    }
    .hero {
      background-image: url('https://i.imgur.com/szzhGV2.jpg');
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .hero__image {
      padding: 50px 0;
    }
    .hero__image img {
      width: 300px;
    }
    .hero__copy__text h2 {
      font-family: 'TideSans-700Mondo', sans-serif;
      color: #fff;
      font-weight: 900;
      line-height: 1.4;
      font-size: 35px;
      text-align: center;
    }
    .hero__copy__text h2 span {
      font-style: italic;
    }
    .hero__copy__cta {
      font-family: 'TideSans-700Mondo', sans-serif;
      border-radius: 50%;
      color: white;
      font-weight: 900;
      border-radius: 30px;
      background-image: linear-gradient(360deg, #ff7308, #f7ddbe);
      padding: 20px;
      text-align: center;
      font-size: 25px;
    }
    .hero__copy__cta a:hover {
      color: #fff;
    }
    @media (max-width: 832px) {
      .template-index #content {
        margin-top: 30px;
      }
      .hero {
        padding: 30px;
        background-image: url('https://i.imgur.com/k3bjkL2.jpg');
      }
      .hero__image {
        display: none;
      }
    }
    .row.one-row .column.flex.max-cols-4:nth-child(n+3),
    .row.one-row .column.flex.max-cols-6:nth-child(n+3) {
      display: block;
    }
    .pbc {
      display: flex;
      justify-content: space-evenly;
    }
    .ftr {
      margin-right: 20px;
    }
    .product-block {
      margin-bottom: 20px !important;
    }
    .product-block .title {
      white-space: break-spaces;
      margin-bottom: 0;
    }
    .price-review--wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .price-review--wrap .price {a
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .price-review--wrap .price .amount {
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .price-review--wrap .spr-badge {
      display: flex;
      width: max-content;
    }
    .spr-icon {
      color: #daa520;
    }
  </style>
`);


// JS

document.querySelector('#content .slideshow-section').outerHTML = `
  <div class="hero">
    <div class="hero__image">
      <img src="https://i.imgur.com/7cyuP0d.png" alt="">
    </div>
    <div class="hero__copy">
      <div class="hero__copy__text">
        <h2>The Minno<br>
          <span>Laugh and Grow<br>
          Bible for Kids</span></h2>
      </div>
      <div class="hero__copy__cta">
        <a href="https://shop.gominno.com/collections/bibles-and-more/products/laugh-and-grow-bible-for-kids">BUY NOW</a>
      </div>
    </div>
  </div>
`;

// In the products section display all 4 books for each subsection on all screen sizes. For desktop, make the product sections 2 column. For mobile and tablet, make the products 1 column.
document.querySelectorAll('.product-block').forEach(el => {
  el.classList.remove('max-cols-4', 'min-cols-2');
  el.classList.add('max-cols-2', 'min-cols-1');
});


// Rearrange the product description with the product title to the left, and the product price and reviews to the right, stacked with the prices on top.
document.querySelectorAll('.pbc').forEach(el => {
  const price = el.querySelector('.price').outerHTML;
  const review = el.querySelector('.spr-badge').outerHTML;
  el.querySelector('.price').remove();
  el.querySelector('.spr-badge').remove();
  el.insertAdjacentHTML('beforeend', `<div class="price-review--wrap">${price + review}<div/>`);
});