// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // CSS
  /*
  qs('head').insertAdjacentHTML('beforeend', `
    <style>
    .navbar{position:initial}.tin__footer{position:-webkit-sticky;position:sticky;bottom:-70px;display:flex;align-items:center;justify-content:space-between;background:#3a5eba;padding:15px;transition:all 300ms ease-in}.tin__footer.active{bottom:0}.tin__footer .navbar-brand{max-width:70px;margin-right:0}.tin__footer__btn span{color:white;font-weight:700;background:#1ca78e;padding:7px 60px}
    </style>
  `);
  */
  

  // add footer bar
  qs('main').insertAdjacentHTML('beforeend',`
    <div class="tin__footer">
      <a _ngcontent-c13="" aria-label="Back to homepage" class="navbar-brand" data-wa-link="Click:EHM:Enroll:Navbar-Call:Home" href="/"><img _ngcontent-c13="" alt="Medicare Insurance Options from eHealth Medicare" class="img-fluid logo" height="33" src="/assets/nav/EHM-logo-white-on-grey.svg" width="100"></a>
      <div class="tin__footer__btn">
        <span>Find Plans</span>
      </div>
      <a _ngcontent-c13="" aria-label="Call an agent" class="navbar-call-button d-lg-none phone-number" data-wa-link="ehm:header:call now" href="tel:18664111787" role="button"><span _ngcontent-c13=""><i _ngcontent-c13="" class="ehi-icon ehi-icon-lg">Z</i></span></a>
    </div>
  `);


  // intersection observer when form goes out of view
  const onIntersection = (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        qs('.tin__footer').classList.add('active');
      }
      if (entry.isIntersecting) {
        qs('.tin__footer').classList.remove('active');
      }
    }
  };
  const observer = new IntersectionObserver(onIntersection);
  observer.observe(qs('.hero-content .capped'));
  //observer.observe(qs('.medicare-form-bottom'));

  // simulate 'find plans' click from footer
  qs('.tin__footer__btn').addEventListener('click', function(){
    qs('.hero button').click();
  });
}


// Initialize experiment
poll('.navbar', init);