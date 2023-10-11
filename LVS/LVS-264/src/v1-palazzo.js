// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// MAIN PAGE (https://www.venetian.com/towers/the-palazzo/suites.html) - Initialize experiment
if (window.location.href.indexOf('/towers/the-palazzo/suites.html') > 0) {

  function init() {

    // Main Subtext
    qs('.mod-room-browse-hero--content .o-description').innerText = 'A retreat of ultimate relaxation, where every room is a suite. Complete with plush bedding, a separate living room and more. Comfort considered in every detail to ensure you wake up rested and refreshed.';




    /*****  MOST POPULAR  *****/
    const mostPopular = qs('.mod-suites-browse-listing:nth-of-type(1)');
    // subtext
    mostPopular.querySelector('.mod-suites-browse-listing__description').innerText = 'Offering some of the best suites in Las Vegas, our standard suite rooms have everything you need and more.';

    // Luxury King Suite
    mostPopular.querySelector('.mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Grand King size bed</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Separated living room</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Oversized bathroom with Roman tub</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Dining table that seats two</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Fully stocked refreshment center</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Remote-controlled Roman shades and curtains</div>
      </div>
    `;

    // Luxury Two Queen Suite
    mostPopular.querySelector('.mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">2 Plush Queen beds</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Separated living room</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Oversized bathroom with Roman tub</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Dining table that seats two</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Fully stocked refreshment center</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Remote-controlled Roman shades and curtains</div>
      </div>
    `;




    /*****  PREMIER SUITES  *****/
    const premierSuites = qs('.mod-suites-browse-listing:nth-of-type(2)');
    // subtext
    premierSuites.querySelector('.mod-suites-browse-listing__description').innerText = 'Enjoy our premier Las Vegas suites for every special occasion. Our premium king and grand one-bedroom suites offer plenty of extra space.';

    // Premier King Suite
    premierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Italian marble foyer</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Roman tub with separate glass-enclosed shower</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Dining table that seats two</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Fully stocked refreshment center</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Distinct living room and open bedroom</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Remote-controlled Roman shades and curtains</div>
      </div>
    `;

    // Grand One Bedroom Suite
    premierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Italian marble foyer</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Jetted tub with separate glass-enclosed shower</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Plush king-size bed</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Oversized marble bath with jetted tub</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Dining table that seats four</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Fully stocked refreshment center</div>
      </div>
    `;




    /*****  TOP TIER SUITES  *****/
    const toptierSuites = qs('.mod-suites-browse-listing:nth-of-type(3)');
    // subtext
    toptierSuites.querySelector('.mod-suites-browse-listing__description').innerText = 'Our Top Tier suite rooms deliver unmatched luxury. For an experience that is once-in-a-lifetime. Book direct through Reservations at 866.263.2999.';

    // Executive Suite
    toptierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Double-door entrance with Italian marble foyer</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Featuring either a piano or pool table</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Master bedroom with King bed</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Spacious living area with semi-formal dining area</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Oversized marble bath with jetted tub</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Plus, additional variations*</div>
      </div>
    `;

    // Penthouse Suite
    toptierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">200-square-foot bathroom with jetted tub</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Wet bar / Full size bar</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Double-door entrance with Italian marble foyer</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Formal dining area with seating for six</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Incredible living area</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Separate powder room</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Plus, additional variations*</div>
      </div>
    `;

    // Presidential Suite
    toptierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(3) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Glass enclosed dual-head showers with steam control settings</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Double-door entrance with Italian marble foyer</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Lavish living and dining area</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Fully stocked refreshment center</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Formal dining area with seating for six</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Private workout room</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">24-hour butler service</div>
      </div>
    `;

    // Chairman Suite
    toptierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(4) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Double-door entrance with Italian marble foyer</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Lavish living and dining area</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Terrace</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Private Pool & Spa</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Workout room</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Steam Room and Sauna</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Movie theater sound systems in the media room</div>
      </div>
    `;


    // remove all descriptions from room card types
    qsa('.mod-suites-browse-listing__card .mod-suites-browse-listing__card-description').forEach(i => i.remove());


    
  }
  // Initialize experiment
  poll('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(4) .mod-suites-browse-listing__card-text .mod-suites-browse-listing__card-amenities', init);

}




// SUB-PAGE Luxury King Suites
if (window.location.href.indexOf('/luxury-king-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>Grand King size bed</li>
      <li>Separated living room</li>
      <li>Oversized bathroom with Roman tub</li>
      <li>Dining table that seats two</li>
      <li>Fully stocked refreshment center</li>
      <li>Remote-controlled Roman shades and curtains</li>
    `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Bella Luxury Two Queen Suites
if (window.location.href.indexOf('/bella-luxury-two-queen-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>2 Plush Queen beds</li>
      <li>Separated living room</li>
      <li>Oversized bathroom with Roman tub</li>
      <li>Dining table that seats two</li>
      <li>Fully stocked refreshment center</li>
      <li>Remote-controlled Roman shades and curtains</li>
    `;
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Fortuna Premium King Suites
if (window.location.href.indexOf('/fortuna-premium-king-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>Italian marble foyer</li>
      <li>Roman tub with separate glass-enclosed shower</li>
      <li>130-square-foot bathroom </li>
      <li>Dining table that seats two</li>
      <li>Fully stocked refreshment center</li>
      <li>Distinct living room and open bedroom</li>
      <li>Remote-controlled Roman shades and curtains</li>
      <li>Walk-in closet</li>
    `;
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Siena grand one bedroom suites
if (window.location.href.indexOf('/siena-grand-one-bedroom-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>Italian marble foyer</li>
      <li>Jetted tub with separate glass-enclosed shower</li>
      <li>Plush king-size bed</li>
      <li>Oversized marble bath with jetted tub</li>
      <li>Dining table that seats four</li>
      <li>Fully stocked refreshment center</li>
    `;
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Lago Executive Suites
if (window.location.href.indexOf('/lago-executive-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>Double-door entrance with Italian marble foyer</li>
      <li>Featuring either a piano or pool table</li>
      <li>Master bedroom with King bed </li>
      <li>Spacious living area with semi-formal dining area</li>
      <li>Oversized marble bath with jetted tub</li>
      <li>Fully stocked refreshment center</li>
      <li>To book this room, please contact The Palazzo at 866.263.2999.</li>
      `;
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Penthouse Suites
if (window.location.href.indexOf('/penthouse-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>200-square-foot bathroom with jetted tub</li>
      <li>Wet bar / Full size bar</li>
      <li>Double-door entrance with Italian marble foyer</li>
      <li>Formal dining area with seating for six</li>
      <li>Plus, additional variations*</li>
      <li>To book this room, please contact The Palazzo at 866.263.2999</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Presidential Suites
if (window.location.href.indexOf('/presidential-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>Glass enclosed dual-head showers</li>
      <li>Double-door entrance with marble foyer</li>
      <li>Lavish living and dining area</li>
      <li>Stocked refreshment center</li>
      <li>Formal dining area with seating for six</li>
      <li>Plus, additional variations*</li>
      <li>To book this room, please contact The Palazzo at 866.263.2999</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Chairman Suites
if (window.location.href.indexOf('/chairman-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>Double-door entrance with Italian marble foyer</li>
      <li>Lavish living and dining area</li>
      <li>Terrace</li>
      <li>Private Pool & Spa</li>
      <li>Steam Room and Sauna</li>
      <li>Movie theater sound systems in the media room</li>
      <li>Dining table that seats eight</li>
      <li>Plus, additional variations*</li>
      <li>To book this room, please contact The Palazzo at 866.263.2999</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}
