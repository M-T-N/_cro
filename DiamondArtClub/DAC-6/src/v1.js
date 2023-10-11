// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
function initSlick() {
  qs('.ProductGallery').classList.add('tin-blur');
}
function init() {
  const simImgMain = qs('.slick-track .slick-slide[data-slick-index="0"]')
    .dataset.thumbImage;
  const simImgLink = qs('.slick-track .slick-slide[data-slick-index="0"] a')
    .href;
  const simImgHolder = qs(
    '.slick-track .slick-slide[data-slick-index="0"] a > div'
  ).style.backgroundImage;

  const renderedImgMain = qs('.slick-track .slick-slide[data-slick-index="1"]')
    .dataset.thumbImage;
  const renderedImgLink = qs(
    '.slick-track .slick-slide[data-slick-index="1"] a'
  ).href;
  const renderedImgHolder = qs(
    '.slick-track .slick-slide[data-slick-index="1"] a > div'
  ).style.backgroundImage;

  // change first image, psuedoimage
  qsa(
    '.slick-track .slick-slide[data-slick-index="0"], .slick-track .slick-slide[data-slick-index="4"]'
  ).forEach(function (el) {
    el.dataset.thumbImage = renderedImgMain;
  });
  qsa(
    '.slick-track .slick-slide[data-slick-index="0"] a, .slick-track .slick-slide[data-slick-index="4"] a'
  ).forEach(function (el) {
    el.href = renderedImgLink;
  });
  qsa(
    '.slick-track .slick-slide[data-slick-index="0"] a > div, .slick-track .slick-slide[data-slick-index="4"] a > div'
  ).forEach(function (el) {
    el.style.backgroundImage = renderedImgHolder;
  });
  qs(
    '.slick-track .slick-slide[data-slick-index="1"]'
  ).dataset.thumbImage = simImgMain;
  qs('.slick-track .slick-slide[data-slick-index="1"] a').href = simImgLink;
  qs(
    '.slick-track .slick-slide[data-slick-index="1"] a > div'
  ).style.backgroundImage = simImgHolder;

  qs('.ProductGallery').classList.remove('tin-blur');
}

// add blur on slickslider load
poll('.ProductGallery', initSlick);
// Initialize experiment
poll('.slick-track .slick-slide[data-slick-index="1"] a > div', init);
