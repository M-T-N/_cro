// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// MAIN PAGE (https://www.venetian.com/suites.html) - Initialize experiment
if (window.location.href.indexOf('/suites.html') > 0) {

  function init() {

    // update intro text
    qs('.mod-room-browse-hero--content .o-description').innerText = 'Every one of our rooms is a suite. Comfort considered in every detail to ensure a good night’s sleep.';

    // update 'Most Popular Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(1) .mod-suites-browse-listing__description').innerText = 'Offerings some of the best suites in Las Vegas, our standard suite rooms have everything you need and more.';

    // update 'Premier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__description').innerText = 'Enjoy our premier Las Vegas suites for every special occasion. Offering extra space, luxury and more.';

    // update 'Top Tier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__description').innerText = 'Our Top Tier suite rooms deliver unmatched luxury. For an experience that is once-in-a-lifetime. Book direct through Reservations at 866.263.2998.';

    // update 'Top Tier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(4) .mod-suites-browse-listing__description').innerText = 'Our Top Tier suite rooms deliver unmatched luxury. For an experience that is once-in-a-lifetime. Book direct through Reservations at 866.263.2998.';

    // remove all descriptions from room card types
    qsa('.mod-suites-browse-listing__card .mod-suites-browse-listing__card-description').forEach(i => i.remove());


    /* BULLET LIST TEXT UPDATES */

    // Luxury King Suite
    qs('.mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities .mod-suites-browse-listing__card-amenities--primary:nth-of-type(1) > div').innerText = 'Grand King oversized, pillow-top king bed';

  }
  
  // Initialize experiment
  poll('.mod-suites-browse-listing:nth-of-type(4) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-text .mod-suites-browse-listing__card-amenities', init);

}


// SUB-PAGE Luxury King Suites
if (window.location.href.indexOf('/luxury-king-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>650-square-foot suite room</li>
      <li>Grand King oversized, pillow-top king bed</li>
      <li>Separated living room</li>
      <li>Oversized all-marble bathroom with Roman tub</li>
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
      <li>750-square-foot suite room</li>
      <li>Two plush Queen beds</li>
      <li>Distinct living room area and open bedroom</li>
      <li>Oversized all-marble bathroom with Roman tub</li>
      <li>Remote-controlled Roman shades and curtains</li>
    `;
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Rialto Premium Two Queen Suites
if (window.location.href.indexOf('/rialto-premium-two-queen-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>1,100-square-foot suite room</li>
      <li>Two plush Queen beds</li>
      <li>Distinct living room area and open bedroom</li>
      <li>Oversized all-marble bathroom with Roman tub</li>
      <li>Remote-controlled Roman shades and curtains</li>
    `;
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Piazza Grand King Suites
if (window.location.href.indexOf('/piazza-grand-king-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>1,500-square-foot suite room</li>
      <li>Master bedroom with King bed</li>
      <li>En-suite and private bath</li>
      <li>1.5 baths, with powder room in entryway</li>
      <li>Jetted tub</li>
      <li>Remote-controlled Roman shades and curtains</li>
      `;
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Prima Grand One-Bedroom Suites
if (window.location.href.indexOf('/prima-grand-one-bedroom-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>1,300-square-foot suite room</li>
      <li>Master bedroom with king bed and private bath</li>
      <li>1.5 baths, with powder room in entryway</li>
      <li>Complete wet bar</li>
      <li>Jetted tub</li>
      <li>Remote-controlled Roman shades and curtains</li>
      `;
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Renaissance Executive One-Bedroom Suites
if (window.location.href.indexOf('/renaissance-executive-one-bedroom-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>Private comfort and lavish entertaining</li>
      <li>Master bedroom with king bed, private bath and enclave make-up room</li>
      <li>Grand living room</li>
      <li>Large dining area with complete bar</li>
      <li>Walk in closet</li>
      <li>Choice of personal theater or workout room</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Penthouse Suites
if (window.location.href.indexOf('/penthouse.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>2,600-square-foot suite room</li>
      <li>Two-bedroom suite</li>
      <li>Access to Prestige Club Lounge</li>
      <li>Limo to/from airport</li>
      <li>VIP check-in & VIP concierge services</li>
      <li>Remote-controlled Roman shades and curtains</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Presidential Suites
if (window.location.href.indexOf('/presidential.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>5,200-square-foot suite room</li>
      <li>Two-bedroom suite</li>
      <li>Access to Prestige lounge</li>
      <li>Limo to/from airport</li>
      <li>VIP check-in & VIP concierge services</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Chairman Suites
if (window.location.href.indexOf('/chairman.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>8,000-square-foot suite room</li>
      <li>3 – 4-bedroom suite</li>
      <li>Workout room with sauna and steam room</li>
      <li>24-hour butler service</li>
      <li>Airport limo service</li>
      <li>VIP check-in & VIP concierge services</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}
