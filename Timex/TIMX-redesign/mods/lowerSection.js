import { qs, qsa } from '../src/utils/qs';

export default function () {
  // description text
  const description = qs('.product-short-desc').innerText;

  let features;
  /** * Conditional for if the is a product manual ** */
  if (qsa('.product-downloads').length > 0) {
    // user manual
    const userManual = qs('.product-downloads').outerHTML;
    // feature
    features = `${
      qs('#product-info-tab-1').outerHTML.slice(0, -6) + userManual
    }</div>`;
  } else {
    features = `${qs('#product-info-tab-1').outerHTML.slice(0, -6)}</div>`;
  }
  // specs
  const specs = qs('#product-info-tab-2').outerHTML;

  // get side profile image
  function getImagesByAlt(alt) {
    const allImages = qsa('img.productthumbnail');
    const images = [];
    for (let i = 0, len = allImages.length; i < len; ++i) {
      if (allImages[i].alt.indexOf(alt) > -1) {
        images.push(allImages[i]);
      }
    }
    return images;
  }
  let sideProfileURL;
  let sideProfileAlt;
  if (getImagesByAlt('Side View')[0] != undefined) {
    sideProfileURL = getImagesByAlt('Side View')[0].src;
    sideProfileAlt = getImagesByAlt('Side View')[0].alt;
  }

  // insert new lower html
  qs('.product-top-info').insertAdjacentHTML(
    'afterend',
    `
      <div id="product-info" class="product-info tin__product-info">
      <h2 class="visually-hidden">Additional Information</h2>
      <div class="product-feature-section">
        <div class="product-info-image">
          <img src="${sideProfileURL}" alt="${sideProfileAlt}">
        </div>
        <div class="product-info-left">
            <div class="product-short-desc">
              ${description}
            </div>
            <div class="product-info-tabs tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
              <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                  <li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="product-info-tab-1" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true"><a href="#product-info-tab-1" class="ui-tabs-anchor tin__ui-id" role="presentation" tabindex="-1" id="ui-id-1"><span>Features</span></a></li>
                  <li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="product-info-tab-2" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false">
                    <a href="#product-info-tab-2" class="ui-tabs-anchor tin__ui-id" role="presentation" tabindex="-1" id="ui-id-2"><span>Specs</span></a>
                  </li>
              </ul>
              ${features}
              ${specs}
            </div>
        </div>
      </div>
    </div>
    `
  );
}
