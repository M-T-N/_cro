// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  qs('head').insertAdjacentHTML('beforeend', `
    <style>
    #hero .hero-right{display:flex;flex-direction:column;align-items:center}#hero .hero-right h2{font-size:56px}#hero .hero-right p{font-size:25px}#hero .hero-right p span{font-weight:bold}@media (max-width: 1023px){#hero .hero-right h2{font-size:30px}#hero .hero-right p{font-size:16px}}.about-box img{width:50%;margin-bottom:20px}.cta__orange{background:#E06B52;padding:15px 20px;display:flex !important;justify-content:space-around;align-items:center;width:300px;border-radius:30px;color:#fff;font-size:22px;font-weight:900;margin-bottom:50px}.cta__orange img{width:30px}
    </style>`);



  // change hero text
  qs('#hero h2').innerText = 'Watch Good Grow, Every Day';
  qs('#hero p').innerHTML = 'Share Jesus with <span>your kids</span> by instantly streaming <span>faith-filled shows</span>.';


  // add testimonial
  qs('#hero').insertAdjacentHTML('afterend', `
  <div class="about-mino aqua-bar section">
    <div class="grid-container">
      <div class="grid-x grid-margin-x grid-padding-x">
          <div class="small-12 medium-12 large-12 cell">
            <h1 class="about-mino-heading">What Parents Are Saying About Minno</h1>
          </div>
      </div>
      <div class="grid-x grid-padding-x small-up-1 medium-up-1 large-up-3 text-center">
          <div class="cell">
            <div class="about-box">
                <img src="https://i.imgur.com/qTYK6zZ.png" alt="review stars">
                <p>“There are so many options to choose from and they are constantly adding more content. Well worth the subscription!!"</p>
                <h3>Baxters5</h3>
            </div>
          </div>
          <div class="cell">
            <div class="about-box">
                <img src="https://i.imgur.com/qTYK6zZ.png" alt="review stars">
                <p> “I love that I can put this app on, give it to my kids and not worry what they will choose. They love the freedom too and love learning about Jesus in so many ways!”</p>
                <h3>Mags</h3>
            </div>
          </div>
          <div class="cell">
            <div class="about-box">
                <img src="https://i.imgur.com/qTYK6zZ.png" alt="review stars">
                <p>“Very awesome, clean entertainment for our kids. Much better than mindless YouTube surfing!”</p>
                <h3>Jonah</h3>
            </div>
          </div>
      </div>
    </div>
  </div>
  `);

  // make other CTAs orange style and new text
  qsa('a.button').forEach(function(el){
    el.classList.add('cta__orange');
    el.innerHTML = 'Try Minno Now<img src="https://i.imgur.com/4HwkxxO.png" alt="Try Minno Now">';
  });

  // change hero BG image
  setTimeout(function(){
    qs('#hero').style.backgroundImage = 'url("  https://i.imgur.com/s3VyKDv.png")';
  }, 350);
  

}


// Initialize experiment
poll('.pricing a.button', init);