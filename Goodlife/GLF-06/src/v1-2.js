// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import getUrl from './mods/getUrl';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  // vars for card details
  let card1link;
  let card1img;
  let card1name;
  let card1colors;
  let card1price;
  let card2link;
  let card2img;
  let card2name;
  let card2colors;
  let card2price;

  // insert new section based on url of page
  switch (true) {
    case getUrl('supima-scallop-crew'):
      card1link =
        'https://goodlifeclothing.com/products/tri-blend-scallop-crew-1-goodlife-navy';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/TBSLPCREWGLNAVYcopy.jpg?v=1599920861';
      card1name = 'Tri-Blend Scallop Crew';
      card1colors = 'Navy / 14 Colors Available';
      card1price = '$60';
      card2link =
        'https://goodlifeclothing.com/products/slub-scallop-crew-black';
      card2img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SLUBSLPCREWBLACK.jpg?v=1599920721';
      card2name = 'Slub Scallop Crew';
      card2colors = 'Black / 4 Colors Available';
      card2price = '$60';
      break;
    case getUrl('supima-scallop-v'):
      card1link =
        'https://goodlifeclothing.com/products/tri-blend-scallop-crew-1-goodlife-navy';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/TBSLPCREWGLNAVYcopy.jpg?v=1599920861';
      card1name = 'Tri-Blend Scallop Crew';
      card1colors = 'Navy / 14 Colors Available';
      card1price = '$60';
      card2link =
        'https://goodlifeclothing.com/products/slub-scallop-crew-black';
      card2img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SLUBSLPCREWBLACK.jpg?v=1599920721';
      card2name = 'Slub Scallop Crew';
      card2colors = 'Black / 4 Colors Available';
      card2price = '$60';
      break;
    case getUrl('supima-classic-crew'):
      card1link =
        'https://goodlifeclothing.com/products/tri-blend-classic-crew-goodlife-navy';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/TBCLASSCREWGLNAVYcopy.jpg?v=1599931929';
      card1name = 'Tri-blend Classic Crew';
      card1colors = 'Navy / 4 Colors Available';
      card1price = '$60';
      break;
    case getUrl('supima-classic-v'):
      card1link =
        'https://goodlifeclothing.com/products/tri-blend-classic-v-goodlife-navy';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/TBCLASSVGLNAVYcopy.jpg?v=1599931975';
      card1name = 'Tri-blend Classic V';
      card1colors = 'Navy / 4 Colors Available';
      card1price = '$60';
      break;
    case getUrl('tri-blend-scallop-crew'):
      card1link =
        'https://goodlifeclothing.com/products/supima-scallop-crew-lt-heather-grey';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SUPSLPCREWLTHG.jpg?v=1599920709';
      card1name = 'Supima Scallop Crew';
      card1colors = 'Heather Grey / 4 Colors Available';
      card1price = '$68';
      card2link =
        'https://goodlifeclothing.com/products/slub-scallop-crew-black';
      card2img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SLUBSLPCREWBLACK.jpg?v=1599920721';
      card2name = 'Slub Scallop Crew';
      card2colors = 'Black / 4 Colors Available';
      card2price = '$60';
      break;
    case getUrl('tri-blend-scallop-v'):
      card1link =
        'https://goodlifeclothing.com/collections/mens-soft-t-shirts/products/supima-scallop-v-lt-heather-grey';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SUPSLPVLTHGcopy.jpg?v=1599920787';
      card1name = 'Supima Scallop V';
      card1colors = 'Heather Grey / 4 Colors Available';
      card1price = '$68';
      card2link = 'https://goodlifeclothing.com/products/slub-scallop-v-black';
      card2img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SLUBSLPVBLACKcopy.jpg?v=1599920801';
      card2name = 'Slub Scallop V';
      card2colors = 'Black / 4 Colors Available';
      card2price = '$60';
      break;
    case getUrl('tri-blend-classic-crew'):
      card1link =
        'https://goodlifeclothing.com/products/supima-classic-crew-lt-heather-grey';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SUPCLASSCREWLTHGcopy.jpg?v=1599920836';
      card1name = 'Supima Classic Crew';
      card1colors = 'Heather Grey / 4 Colors Available';
      card1price = '$68';
      break;
    case getUrl('tri-blend-classic-v'):
      card1link =
        'https://goodlifeclothing.com/products/supima-classic-v-lt-heather-grey';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SUPCLASSVLTHGcopy.jpg?v=1599920847';
      card1name = 'Supima Classic V';
      card1colors = 'Heather Grey / 4 Colors Available';
      card1price = '$68';
      break;
    case getUrl('slub-scallop-crew'):
      card1link =
        'https://goodlifeclothing.com/products/supima-scallop-crew-lt-heather-grey';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SUPSLPCREWLTHG.jpg?v=1599920709';
      card1name = 'Supima Scallop Crew';
      card1colors = 'Heather Grey / 4 Colors Available';
      card1price = '$68';
      card2link =
        'https://goodlifeclothing.com/products/tri-blend-scallop-crew-1-goodlife-navy';
      card2img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/TBSLPCREWGLNAVYcopy.jpg?v=1599920861';
      card2name = 'Tri-Blend Scallop Crew';
      card2colors = 'Navy / 14 Colors Available';
      card2price = '$60';
      break;
    case getUrl('slub-scallop-v'):
      card1link =
        'https://goodlifeclothing.com/collections/mens-soft-t-shirts/products/supima-scallop-v-lt-heather-grey';
      card1img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/SUPSLPVLTHGcopy.jpg?v=1599920787';
      card1name = 'Slub Scallop V';
      card1colors = 'Heather Grey / 4 Colors Available';
      card1price = '$60';
      card2link =
        'https://goodlifeclothing.com/products/tri-blend-scallop-v-1-goodlife-navy';
      card2img =
        'https://cdn.shopify.com/s/files/1/0202/8072/products/TBSLPVGLNAVYcopy.jpg?v=1599920705';
      card2name = 'Tri-Blend Scallop V';
      card2colors = 'Navy / 14 Colors Available';
      card2price = '$60';
      break;
    default:
      console.log('This is not a test url');
  }

  const otherFabricsSingle = `
    <section class="other-fabrics">
      <h2>Shop Other Fabrics</h2>
      <div class="other-fabrics__container">
        <div class="other-fabrics__card">
          <div class="x2_img_container">
            <a href="${card1link}">
              <img class="x2_mainImage" src="${card1img}" alt="">
              <div class="x2_filter"></div>
            </a>
          </div>
          <a href="${card1link}">
            <div class="x2_productText">
              <div class="x2_productName">${card1name}</div>
              <div class="x2_productPrice">
                <span class="x2_mainPrice">${card1price}</span>
              </div>
              <div class="x2_productSubtitle">${card1colors}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  `;

  const otherFabricsDouble = `
    <section class="other-fabrics">
      <h2>Shop Other Fabrics</h2>
      <div class="other-fabrics__container">
        <div class="other-fabrics__card">
          <div class="x2_img_container">
            <a href="${card1link}">
              <img class="x2_mainImage" src="${card1img}" alt="">
              <div class="x2_filter"></div>
            </a>
          </div>
          <a href="${card1link}">
            <div class="x2_productText">
              <div class="x2_productName">${card1name}</div>
              <div class="x2_productPrice">
                <span class="x2_mainPrice">${card1price}</span>
              </div>
              <div class="x2_productSubtitle">${card1colors}</div>
            </div>
          </a>
        </div>
        <div class="other-fabrics__card">
          <div class="x2_img_container">
            <a href="${card2link}">
              <img class="x2_mainImage" src="${card2img}" alt="">
              <div class="x2_filter"></div>
            </a>
          </div>
          <a href="${card2link}">
            <div class="x2_productText">
              <div class="x2_productName">${card2name}</div>
              <div class="x2_productPrice">
                <span class="x2_mainPrice">${card2price}</span>
              </div>
              <div class="x2_productSubtitle">${card2colors}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  `;

  // load a single or double product card depending on url

  switch (true) {
    case getUrl('supima-scallop-crew') ||
      getUrl('supima-scallop-v') ||
      getUrl('tri-blend-scallop-crew') ||
      getUrl('tri-blend-scallop-v') ||
      getUrl('slub-scallop-crew') ||
      getUrl('slub-scallop-v'):
      qs('#shopify-section-product-fabrics').insertAdjacentHTML(
        'afterend',
        otherFabricsDouble
      );
      break;
    case getUrl('supima-classic-crew') ||
      getUrl('supima-classic-v') ||
      getUrl('tri-blend-classic-v') ||
      getUrl('tri-blend-classic-crew'):
      qs('#shopify-section-product-fabrics').insertAdjacentHTML(
        'afterend',
        otherFabricsSingle
      );
      break;
    default:
      console.log('not the right page');
  }
}

// Initialize experiment
poll('#shopify-section-product-fabrics', init);
