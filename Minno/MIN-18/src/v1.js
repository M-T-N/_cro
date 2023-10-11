// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  
  qs('head').insertAdjacentHTML(
    'beforeend',
    `
    <style>
    .tin-logos-3{max-width:700px;display:-ms-inline-grid;display:inline-grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3, 1fr);width:100%;margin:50px 0 30px}@media (max-width: 1023px){.tin-logos-3{margin-top:30px}}.tin-logos-4{max-width:800px;display:-ms-inline-grid;display:inline-grid;-ms-grid-columns:(1fr)[4];grid-template-columns:repeat(4, 1fr);width:100%}.tin-logos--img{display:flex;align-items:center;justify-content:center}.tin-logos--img img{width:75%}.tin-logos--img img[alt="iOS"]{width:35%;transform:translate(30%, 10%)}.tin-logos--img img[alt="Amazon Fire TV"],.tin-logos--img img[alt="Google Play"]{transform:translateY(10%)}.screentime{display:flex;flex-direction:column;align-items:center;width:100%;padding:40px 0;background-image:url("https://i.imgur.com/szzhGV2.jpg");background-size:cover}.screentime__header{text-align:center;color:#fff}.screentime__info{display:flex;flex-direction:row;padding:20px 30px;max-width:1100px;justify-content:space-between;width:100%}.screentime__info--vid{width:50%}.screentime__info--vid .responsive-embed{margin-bottom:0}.screentime__info--vid iframe{border-radius:15px}.screentime__info--text{width:45%;padding-top:20px;font-family:'var(--tide-7)';color:var(--purple);display:flex;align-items:center}.screentime__info--text ul{list-style:none;margin-bottom:0}.screentime__info--text ul li{font-size:20px}.screentime__info--text ul li:nth-of-type(2){padding-left:30px}.screentime__info--text ul li:nth-of-type(3){padding-left:40px}.screentime__info--text ul li:nth-of-type(4){padding-left:50px}.screentime__testimonial{max-width:600px;text-align:center;padding-top:20px;color:#fff;font-size:17px}.screentime__testimonial--text{margin-bottom:10px}.screentime__testimonial--author{font-weight:600}@media (max-width: 1023px){.screentime{background-image:url("https://i.imgur.com/k3bjkL2.jpg")}.screentime__info{flex-direction:column;align-items:center}.screentime__info--vid,.screentime__info--text{width:90%}.screentime__info--text{justify-content:center}.screentime__info--text ul{text-align:center}.screentime__info--text ul li{padding-left:0 !important}}@media (max-width: 767px) and (min-width: 640px){.hero{min-height:600px}.tin-logos{margin-top:30px}}.limited-img--mobile{width:80%}@media (min-width: 1024px){.limited-img--mobile{display:none}}@media (max-width: 1023px){.limited-img img{padding-top:50px}.limited-img--desktop{display:none}}
    </style>
  `
  );
  

  // new hero h1 text
  document.querySelector('.hero-right h2').innerText =
    'Stories to Kindle the Season of JOY';

  // new hero p text
  document.querySelector('.hero-right p').innerText =
    'Get to know Jesus today and all year with thousands of shows that capture your kids’ heart';

  // add badge

  document
    .querySelector('#hero .button')
    .insertAdjacentHTML(
      'afterend',
      '<a href="https://www.gominno.com/pricing"><img class="limited-img--mobile" src="https://i.imgur.com/uIDl5dn.png"></a><div class="tin-logos-3"> <div class="tin-logos--img"><img src="https://i.imgur.com/Qth7u6P.png" alt="iOS"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/0r3htmE.png" alt="Android"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/dHndTJI.png" alt="Google Play"/></div></div><div class="tin-logos-4"> <div class="tin-logos--img"><img src="https://i.imgur.com/QuhKmnL.png" alt="Roku"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/1RSkfwb.png" alt="Apple TV"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/dq9lhEr.png" alt="Amazon Fire TV"/></div><div class="tin-logos--img"><img src="https://i.imgur.com/Z8HYH7b.png" alt="Chromecast"/></div></div>'
    );

  // screentime section
  qs('.purple-bg').insertAdjacentHTML(
    'afterend',
    '<div class="screentime"> <div class="screentime__header"> <h3>Make Screentime Count</h3> </div><div class="screentime__info"> <div class="screentime__info--vid"><iframe width="560" height="315" onclick="ga(\'send\', \'event\', \'Video\', \'click\', \'MIN-14\');"  src="https://www.youtube.com/embed/C3hwUbmKh1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="screentime__info--text"> <ul> <li>Why Parents Choose Minno</li><li>Jesus in the everyday moments of life</li><li>Stories that gather the family</li><li>A whole lot of fun!</li></ul> </div></div><div class="screentime__testimonial"><div class="screentime__testimonial--text">"So happy I discovered this Christian app. The kids are loving it and I am enjoying all the great conversations it’s bringing up."</div><div class="screentime__testimonial--author">-Shannon</div></div></div>'
  );

  // change main to 7 col wide
  document
    .querySelector('#hero .hero-right')
    .classList.add('large-7', 'large-order-2');
  document
    .querySelector('#hero .hero-right')
    .classList.remove('large-10', 'large-offset-1');

  // add new container and image
  document
    .querySelector('#hero .grid-x')
    .insertAdjacentHTML(
      'beforeend',
      '<div class="limited-img limited-img--desktop cell small-8 small-offset-2 large-offset-0 large-5 large-order-1"><a href="https://www.gominno.com/pricing"><img src="https://i.imgur.com/uIDl5dn.png"></a></div>'
    );

  //  In the "Shows Kids Love" section, update the header of that section to be "Shows Created to Delight & Disciple"
  document.querySelector('.purple-bg .shows-title').innerText =
    'Shows Created to Delight & Disciple';

  // In that same section, update the subheader to be "More than 2,600 episodes from 125 episodes to build a culture of faith in your family"
  document.querySelector('.purple-bg .shows-description').innerText =
    'More than 2,600 episodes from 125 episodes to build a culture of faith in your family';

  // remove purple bg tabs
  qsa('.purple-bg .grid-container > div:nth-of-type(2) .small-12').forEach(
    function (el) {
      el.remove();
    }
  );

  qs('.purple-bg .grid-container > div:nth-of-type(2)').insertAdjacentHTML(
    'afterbegin',
    `
    <div class="small-12 medium-12 large-10 large-offset-1 cell">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/y6SV8zat3FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `
  );
}

// Initialize experiment
poll('#hero .button', init);
