// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v0.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  // new hero h1 text
  qs('.hero-right h2').innerText = 'The #1 Christian App For Kids';

  // new hero p text
  qs('.hero-right p').innerText =
    'Join thousands of families who already subscribe and start streaming or downloading our shows and devotionals!';

  // add badge
  qs('#hero .button').insertAdjacentHTML(
    'afterend',
    '<div class="tin-logos-3"> <div class="tin-logos--img"><img src="https://i.imgur.com/Qth7u6P.png" alt="iOS"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/0r3htmE.png" alt="Android"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/dHndTJI.png" alt="Google Play"/></div></div><div class="tin-logos-4"> <div class="tin-logos--img"><img src="https://i.imgur.com/QuhKmnL.png" alt="Roku"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/1RSkfwb.png" alt="Apple TV"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/dq9lhEr.png" alt="Amazon Fire TV"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/Z8HYH7b.png" alt="Chromecast"/></div></div>'
  );

  // lower section
  qs('#hero').insertAdjacentHTML(
    'afterend',
    '<div class="screentime"> <div class="screentime__header"> <h3>Make Screentime Count</h3> </div><div class="screentime__info"> <div class="screentime__info--vid"><iframe width="560" height="315" onclick="ga(\'send\', \'event\', \'Video\', \'click\', \'MIN-14\');"  src="https://www.youtube.com/embed/C3hwUbmKh1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="screentime__info--text"> <ul> <li>Christ-Centric</li><li>Kid-Focused</li><li>Parent-Empowering</li><li>...and Some Serious Fun</li></ul> </div></div></div>'
  );
}

// Initialize experiment
poll('#hero .button', init);
