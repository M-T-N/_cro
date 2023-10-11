// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import newItem from './mods/newItem';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// MAIN PAGE (https://www.venetian.com/towers/the-palazzo/suites.html) - Initialize experiment
if (window.location.href.indexOf('/towers/the-palazzo/suites.html') > 0) {

  function init() {

    // update intro text
    qs('.mod-room-browse-hero--content .o-description').innerText = 'A retreat of ultimate relaxation, where every room is a suite. Complete with plush bedding, a separate living room and more. Comfort considered in every detail to ensure you wake up rested and refreshed.';

    // update 'Most Popular Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(1) .mod-suites-browse-listing__description').innerText = 'Offering some of the best suites in Las Vegas, our standard suite rooms have everything you need and more.';

    // update 'Premier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__description').innerText = 'Enjoy our premier Las Vegas suites for every special occasion. Our premium king and grand one-bedroom suites offer plenty of extra space.';

    // update 'Top Tier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__description').innerText = 'Our Top Tier suite rooms deliver unmatched luxury. For an experience that is once-in-a-lifetime. Book direct through Reservations at 866.263.2999.';


    // remove all descriptions from room card types
    qsa('.mod-suites-browse-listing__card .mod-suites-browse-listing__card-description').forEach(i => i.remove());


    /* BULLET LIST TEXT UPDATES */

    // Premium King Suite
    const kingSuite = qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities');

    kingSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(3) > div').innerText = 'Remote-controlled Roman shades and curtains';
    // add new <li>
    kingSuite.insertAdjacentHTML('beforeend', newItem('Distinct living room and open bedroom'));


    // Grand One Bedroom Suite
    const grandOneBed = qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities');

    grandOneBed.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(1) > div').innerHTML = 'Italian marble foyer';
    grandOneBed.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(3) > div').innerHTML = 'Plush king-sized bed';
    // add new <li>
    grandOneBed.insertAdjacentHTML('beforeend', newItem('Oversized marble bath with jetted tub'));


    // Executive Suites
    const executiveSuite = qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities');

    executiveSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(2) > div').innerHTML = 'Featuring either a piano or pool table';
    executiveSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(2) > div').innerHTML = 'Master bedroom with King bed';
    // add new <li>
    executiveSuite.insertAdjacentHTML('beforeend', newItem('Spacious living area with semi-formal dining area'));
    // add new <li>
    executiveSuite.insertAdjacentHTML('beforeend', newItem('Oversized marble bath with jetted tub'));


    // Penthouse Suite
    const penthouseSuite = qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities');

    penthouseSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(1) > div').innerText = '200-square-foot bathroom with jetted tub';
    penthouseSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(2) > div').innerText = 'Wet bar / Full size bar';
    penthouseSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(3) > div').innerText = 'Double-door entrance with Italian marble foyer';
    // add new <li>
    penthouseSuite.insertAdjacentHTML('beforeend', newItem('Formal dining area with seating for six'));


    // Presidential Suite
    const presidentialSuite = qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(3) .mod-suites-browse-listing__card-amenities');

    presidentialSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(1) > div').innerText = 'Glass enclosed dual-head showers with steam control settings';
    presidentialSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(2) > div').innerText = 'Double-door entrance with Italian marble foyer';
    presidentialSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(3) > div').innerText = 'Lavish living and dining area';
    // add new <li>
    presidentialSuite.insertAdjacentHTML('beforeend', newItem('Fully stocked refreshment center'));
    // add new <li>
    presidentialSuite.insertAdjacentHTML('beforeend', newItem('Formal dining area with seating for six'));


    // Chairman Suite
    const chairmanSuite = qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(4) .mod-suites-browse-listing__card-amenities');

    chairmanSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(1) > div').innerText = 'Double-door entrance with Italian marble foyer';
    chairmanSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(2) > div').innerText = 'Lavish living and dining area';
    chairmanSuite.querySelector('.mod-suites-browse-listing__card-amenities--primary:nth-of-type(2) > div').innerText = 'Terrace';
    // add new <li>
    chairmanSuite.insertAdjacentHTML('beforeend', newItem('Private Pool & Spa'));
    // add new <li>
    chairmanSuite.insertAdjacentHTML('beforeend', newItem('Steam Room and Sauna'));
    // add new <li>
    chairmanSuite.insertAdjacentHTML('beforeend', newItem('Movie theater sound systems in the media room'));


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
