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

    // Main Subtext
    qs('.mod-room-browse-hero--content .o-description').innerText = 'Every one of our rooms is a suite. Comfort considered in every detail to ensure a good night’s sleep.';
    
    /*****  MOST POPULAR   *****/
    const mostPopular = qs('section.mod-suites-browse-listing:nth-of-type(1)');
    // subtext
    mostPopular.querySelector('.mod-suites-browse-listing__description').innerText = 'Offerings some of the best suites in Las Vegas, our standard suite rooms have everything you need and more.';

    // Luxury King Suite
    mostPopular.querySelector('.mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities').innerHTML = `
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Grand King oversized, pillow-top king bed</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Separated living room</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Oversized all-marble bathroom</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Roman tub</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Remote-controlled Roman shades and curtains</div>
      </div>
      <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
          <div role="listitem">Choose a suite with a view*</div>
      </div>
    `;

    // Luxury Two Queen Suite
    mostPopular.querySelector('.mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">2 Plush Queen beds</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Egyptian cotton sheets</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Separated living room</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Oversized bathroom</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Roman tub</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Remote control Roman shades and curtains</div>
    </div>
  `;




    /*****  PREMIER SUITES  *****/
    const premierSuites = qs('section.mod-suites-browse-listing:nth-of-type(2)');
    // subtext
    premierSuites.querySelector('.mod-suites-browse-listing__description').innerText = 'Enjoy our premier Las Vegas suites for every special occasion. Offering extra space, luxury and more.';

    // Premium Two Queen Suite
    premierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">2 Plush Queen beds</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Separated living room with sofa-sleeper</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">An oversized bathroom</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Roman Tub</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Egyptian cotton sheets</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Spacious walk-in closet</div>
    </div>
  `;

    // Grand King Suite
    premierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Master bedroom with Grand King bed</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Double-door Italian marble foyer</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">1.5 baths, with powder room in entryway</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Over-sized bathroom with jetted tub</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Separate glass-enclosed shower</div>
    </div>
  `;

    // Grand One Bedroom
    premierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(3) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Private bedroom with view</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Semi-formal dining room</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Double-head shower and jetted tub</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Large separate glass shower</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Full size bar with seating and HDTV</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Fully stocked refreshment center</div>
    </div>
  `;




    /*****  TOP TIER SUITES  *****/
    const toptierSuites = qs('section.mod-suites-browse-listing:nth-of-type(3)');
    // subtext
    toptierSuites.querySelector('.mod-suites-browse-listing__description').innerText = 'Our Top Tier suite rooms deliver unmatched luxury. For an experience that is once-in-a-lifetime. Book direct through Reservations at 866.263.2998.';

    // Executive King Suite
    toptierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Jetted tub and shower with two shower heads & bench</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Separated living room and large dining area with bar</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Double entry doors</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Choice of personal theater or workout room</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Separated living room</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Large dining area</div>
    </div>
  `;

    // Penthouse Suite
    toptierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Floor to ceiling window</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Fireplace</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Access to Prestige lounge</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Two luxurious bathrooms</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Jetted tub with separate glass-enclosed showers</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Limo to/from airport</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">VIP check-in & VIP concierge services</div>
    </div>
  `;

    // Presidential Suite
    toptierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(3) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Access to Prestige lounge</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Limo to/from airport</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">VIP check-in & VIP concierge services</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Two spa bathtubs</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Two steam showers</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Movie theater sound systems in the media room</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Workout room with stationary bicycle and treadmill</div>
    </div>
  `;

    // Chairman Suite
    toptierSuites.querySelector('.mod-suites-browse-listing__card:nth-of-type(4) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Three to four bedrooms</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Seating areas separated entirely from dining and living rooms</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Baby Grand piano</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Media room with karaoke, PlayStation system and 65" plasma TV</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">24-hour butler service</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Limo to/from airport</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">VIP check-in & VIP concierge services</div>
    </div>
  `;




    /*****  VENEZIA TOWER  *****/
    const veneziaTower = qs('section.mod-suites-browse-listing:nth-of-type(4)');
    // subtext
    veneziaTower.querySelector('.mod-suites-browse-listing__description').innerText = 'Comfortably close to the action, yet far away for relaxation. Call direct to Reservations to book at 866.263.2998.';

    // Luxury King Suite
    veneziaTower.querySelector('.mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Steps away from Thomas Keller’s Bouchon</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Oversized King size bed</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Bi-level configuration</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Distinct living room and open bedroom</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Luxurious all-marble bath with oversized tub</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Roman Tub</div>
    </div>
  `;

    // Luxury Two Queen Suite
    veneziaTower.querySelector('.mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-amenities').innerHTML = `
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">2 Plush Queen beds</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
      <div role="listitem">Bi-level configuration</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Distinct living room and open bedroom</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Luxurious all-marble bath with oversized tub</div>
    </div>
    <div class="mod-suites-browse-listing__card-amenities--primary" role="presentation">
        <div role="listitem">Roman Tub</div>
    </div>
  `;




    // remove descriptions
    qsa('.mod-suites-browse-listing__card-description').forEach(function(i){
      i.remove();
    })


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




// SUB-PAGE Luxury King Suite
if (window.location.href.indexOf('/luxury-king-suites.html') > 0) {
  
  function init() {

    //qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>Steps away from Thomas Keller’s Bouchon</li>
      <li>Oversized King size bed</li>
      <li>Bi-level configuration</li>
      <li>Distinct living room and open bedroom</li>
      <li>Luxurious all-marble bath with oversized tub</li>
      <li>Roman Tub</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}




// SUB-PAGE Luxury Two Queen Suite
if (window.location.href.indexOf('/bella-luxury-two-queen-suites.html') > 0) {
  
  function init() {

    //qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.o-h19').innerText = 'For a quiet moment that is just right';

    qs('.mod-room-detail-hero-item .description').innerHTML = `
      <li>2 Plush Queen beds</li>
      <li>Bi-level configuration</li>
      <li>Distinct living room and open bedroom</li>
      <li>Luxurious all-marble bath with oversized tub</li>
      <li>Roman Tub</li>
      `;

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}