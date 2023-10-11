// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  function styleInit() {
    // remove inline hero bg image
    document.querySelector('#hero').setAttribute('style', '');
  }

  stylePoll('#hero', styleInit);

  function stylePoll(selector, cb) {
    setTimeout(function () {
      if (document.querySelector(selector).getAttribute('style') == '') {
        cb();
      } else {
        poll(selector, cb);
      }
    }, 50);
  }

  // reorder hero column structure
  qs('#hero .hero-right').classList.add('large-7', 'medium-7');
  qs('#hero .hero-right').classList.remove(
    'large-10',
    'medium-12',
    'large-offset-1'
  );

  // add platform logos
  qs('#hero .button').insertAdjacentHTML(
    'afterend',
    '<div class="tin-logos-3"> <div class="tin-logos--img"><img src="https://i.imgur.com/zmREJO9.png" alt="iOS"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/c4m9N8D.png" alt="Android"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/A6Bs5B4.png" alt="Google Play"/></div></div><div class="tin-logos-4"> <div class="tin-logos--img"><img src="https://i.imgur.com/SqfB0Uv.png" alt="Roku"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/eXMrNSw.png" alt="Apple TV"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/m33rr8u.png" alt="Amazon Fire TV"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/YJ3yGBR.png" alt="Chromecast"/></div></div>'
  );

  // change headline text
  qs('#hero h1').innerHTML = 'Stream Kids Shows <br>Where God is Real';

  //  In the "Shows Kids Love" section, update the header of that section to be "Shows Created to Delight & Disciple"
  document.querySelector('.purple-bg .shows-title').innerText =
    'Shows Created to Delight & Disciple';

  // In that same section, update the subheader to be "More than 2,600 episodes from 125 episodes to build a culture of faith in your family"
  document.querySelector('.purple-bg .shows-description').innerText =
    'More than 2,600 episodes from 125 episodes to build a culture of faith in your family';

  // remove purple bg tabs
  qsa(
    '.purple-bg .grid-container > div:nth-of-type(2) .small-12, .purple-bg .grid-container > div:not(div:first-of-type)'
  ).forEach(function (el) {
    el.remove();
  });

  qs('.purple-bg .grid-container > .grid-x:first-of-type').insertAdjacentHTML(
    'beforeend',
    `
      <div class="small-12 medium-12 large-10 large-offset-1 cell">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/y6SV8zat3FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <a class="button" href="https://www.gominno.com/pricing" target="">Start Your 7 Day Trial</a>
      </div>
    `
  );
}

poll('#hero', init);
