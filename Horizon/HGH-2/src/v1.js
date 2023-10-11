// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  // Edit headline from "Emergency Plumbing Services" to "Plumbing Services"
  qs('#GeneralWideHeader h1 strong').innerText = 'Plumbing Services';


  // New section links and their corresponding hyperlink 
  /* get city name header */
  const cityHeader = document.evaluate("//h3[contains(text(),'Types of Plumbing')]", document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.outerHTML;

  const emergencyHeader = document.evaluate("//h3[contains(text(),'Emergency Plumbing Services')]", document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.outerHTML; 

  const emergencyPara = document.evaluate("//p[contains(text(),'Our licensed and certified')]", document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.outerHTML; 

  const emergencyNumber = document.evaluate("//p[contains(text(),'Call Casteel at')]", document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.outerHTML;

  const callTodayText = document.evaluate("//p[contains(text(),'For all your plumbing needs,')]", document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.outerHTML; 

  const phoneNumber = qs('#Header_3').innerText;
  const phoneNumberHref = qs('#Header_1').href;


    // Move "Schedule Online" red section to under the headline
    /*
    qs('#GeneralWideHeader h1').insertAdjacentHTML('afterend', `
    <div class="tin__cta-highlight tin__cta-highlight--desktop">
      <a href="/book-online/" rel="noopener noreferrer" class="btn v6">Our expert technicians are here for you <span>Book Appointment Online Here</span></a>
    </div>
    <div class="tin__cta-highlight tin__cta-highlight--mobile">
      <a href="${phoneNumberHref}" rel="noopener noreferrer" class="btn v6">Our expert technicians are here for you<span class="phone"><i class="icon phone-5"></i>${phoneNumber}</span><span>Book Appointment Online Here</span></a>
    </div>
    `);
    */

    // remove original cta box
    qs('.cta-highlight').remove();
  
/*
  qs('#MainContent').insertAdjacentHTML('afterbegin', `<div class="tin__plumbing-services">
  ${cityHeader}
  <p>We handle the following types of plumbing services:</p>
  <div class="tin__plumbing-services_links">
    <ul>
      <li>
        <a href="https://www.casteelair.com/plumbing/plumbing-repair/">Emergency & Regular Plumbing Repairs</a>
      </li>
      <li>
        <a href="https://www.casteelair.com/plumbing/drain-clearing-service/">Drain Clearing</a>
      </li>
      <li>
        <a href="https://www.casteelair.com/plumbing/water-heater/">Water Heater Repair & Installation</a>
      </li>
      <li>
        <a href="https://www.casteelair.com/plumbing/sewer-water-line/">Sewer & Water Line Line Repair/Replacement</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://www.casteelair.com/plumbing/water-filtration/">Water Filtration</a>
      </li>
      <li>
        <a href="https://www.casteelair.com/plumbing/water-pipe-replacement/">Water Pipe Replacement (Re-Piping)</a>
      </li>
      <li>
        <a href="https://www.casteelair.com/plumbing/plumbing-inspection/">Plumbing Inspection</a>
      </li>
      <li>
        <a href="https://www.casteelair.com/plumbing/bathroom-and-kitchen-plumbing-service/">Bathroom & Kitchen Plumbing</a>
      </li>
    </ul>
  </div>
</div> 
  `)
 */

  qs('#MainContent').innerHTML = `
  <div class="tin__plumbing-services">
    ${cityHeader}
    <p>We handle the following types of plumbing services:</p>
    <div class="tin__plumbing-services_links">
      <ul>
        <li>
          <a href="https://www.casteelair.com/plumbing/plumbing-repair/">Emergency &amp; Regular Plumbing Repairs</a>
        </li>
        <li>
          <a href="https://www.casteelair.com/plumbing/drain-clearing-service/">Drain Clearing</a>
        </li>
        <li>
          <a href="https://www.casteelair.com/plumbing/water-heater/">Water Heater Repair &amp; Installation</a>
        </li>
        <li>
          <a href="https://www.casteelair.com/plumbing/sewer-water-line/">Sewer &amp; Water Line Line Repair/Replacement</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://www.casteelair.com/plumbing/water-filtration/">Water Filtration</a>
        </li>
        <li>
          <a href="https://www.casteelair.com/plumbing/water-pipe-replacement/">Water Pipe Replacement (Re-Piping)</a>
        </li>
        <li>
          <a href="https://www.casteelair.com/plumbing/plumbing-inspection/">Plumbing Inspection</a>
        </li>
        <li>
          <a href="https://www.casteelair.com/plumbing/bathroom-and-kitchen-plumbing-service/">Bathroom &amp; Kitchen Plumbing</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="tin__cta-highlight tin__cta-highlight--desktop">
    <a href="/book-online/" rel="noopener noreferrer" class="btn v6">Our expert technicians are here for you <span>Book Appointment Online Here</span></a>
  </div>
  <div class="tin__cta-highlight tin__cta-highlight--mobile">
    <a href="${phoneNumberHref}" rel="noopener noreferrer" class="btn v6">Our expert technicians are here for you<span class="phone"><i class="icon phone-5"></i>${phoneNumber}</span><span>Book Appointment Online Here</span></a>
  </div>
  <div class="tin__clearing-pipes">
    <h3>Clearing Your Pipes &amp; Your Worries</h3>
    <p>When you’re in need of a fast, fair, and licensed emergency plumber, call Casteel. As a fully licensed plumbing company, we will take amazing care of you!® Our team of technicians offers innovative plumbing services in areas of Georgia such as Alpharetta, Savannah, Marietta, Atlanta, and Mableton. We are trusted to perform any plumbing services you need in and around your home. Give our staff a call by phone at <a href="tel:770-802-2682">(770) 802-2682</a> to receive help with a damaged plumbing system.</p>
  </div>

  <div class="tin__reasons-why">
    <p><strong>Some of the reasons why we have over 30,000 five-star reviews include:</strong></p>
    <div class="tin__reasons-why_list">
      <ul>
        <li>We offer same-day services</li>
        <li>We have over 30 years of experience</li>
        <li>We are known for our prompt emergency response times</li>
      </ul>
      <ul>
        <li>We are always punctual and dressed professionally</li>
        <li>We offer honest, flat-rate pricing upfront</li>
        <li>We are fully licensed, bonded, and insured</li>
      </ul>
    </div>

  </div>
  <div class="tin_benefits">
    <h3>Benefits of Our Top-Rated Services</h3>
    <p>When you get in touch with our team, you can rest assured that we will take amazing care of you and your home. After arriving quickly and diagnosing your problem, we can provide you with an honest and exact quote for what your services will cost.</p>
    <p>From replacing your water heater or garbage disposal to clogs and leaks to plumbing line services, our team of emergency plumbers have the tools and expertise necessary to complete any job with ease and for a price that’s fair.</p>
  </div>
  <div class="tin_emergency-services">
    ${emergencyHeader}
    <p>From leaking water heaters to clogged toilets, to stopped-up drains to broken garbage disposals, we’ve seen our share of plumbing emergencies. Our plumbers are available 24 hours a day, 365 days a year to help, no matter what the problem is.</p>
    ${emergencyPara}
  </div>
  <div class="tin_emergency-call">
    <h3>An Emergency Plumber Is on the Way, as Soon as You Call</h3>
    ${emergencyNumber}
  </div>
  <div class="tin_here-for-you">
    <h3>Here for You When You Need Us Most</h3>
    <p>Water has a way of seeping into all the cracks and crevices that you can’t get into. Time is of the essence. When you have an emergency and need the best, contact the plumbers at Casteel to get the job done right the first time. We are proud to offer round-the-clock services to ensure that your comfort and safety never have to be put on hold.</p>
  </div>
  <div class="tin_call-today">
    <h3>Call Casteel Today – We Guarantee Our Work!</h3>
    ${callTodayText}
  </div>
  `;

  // hotjar
  setTimeout(function () { hj('trigger', 'HGH-2_v1'); }, 2000);

  
}


// Initialize experiment
poll('#MainContent', init);