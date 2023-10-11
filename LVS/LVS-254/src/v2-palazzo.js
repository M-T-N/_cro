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

    // update Luxury King Suite
    qs('.mod-suites-browse-listing:nth-of-type(1) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-description').innerText = 'Almost twice the size of the average Las Vegas hotel room. The Luxury King Suite is the largest standard suite on the Strip. Each room has a king size bed, separated living room and oversized bathroom with Roman tub.';

    // update Luxury Two Queen Suite
    qs('.mod-suites-browse-listing:nth-of-type(1) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-description').innerText = 'A favorite with families and business travelers due to its extra space in the bedroom. The Luxury Two Queen Suite is our standard suite with two queen beds. Plus, an oversized bathroom with Roman tub.';

    // update 'Premier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__description').innerText = 'Enjoy our premier Las Vegas suites for every special occasion. Our premium king and grand one-bedroom suites offer plenty of extra space.';

    // Premium King Suite
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-description').innerText = 'Make yourself at home in our 940-square-foot Premium King Suite, right on the Las Vegas Strip. This upgrade from our standard suite adds a lovely sitting area with comfortable armchairs. Here you can enjoy a cocktail in the privacy of your own. Plus, an Italian marble foyer and Roman tub with separated glass- enclosed shower.';

    // Grand One Bedroom Suite
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-description').innerText = 'The Grand One Bedroom Suite is 1,280 square feet of elegance, right on the Las Vegas Strip. A marble foyer complete with a powder room, flows into a sumptuous living room. You will find a comfortable couch, dining table, and wet bar set for entertaining.';

    // update 'Top Tier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__description').innerText = 'Our Top Tier suite rooms deliver unmatched luxury. For an experience that is once-in-a-lifetime. Book direct through Reservations at 866.263.2999.';

    // update Executive Suites
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-description').innerText = 'The Executive Suites offers 1,850-square-feet of indulgence for every traveler. Located at one of the most exciting crossroads of the Las Vegas Strip. Both spacious and comfortable, these suites come with a jetted tub. In addition, you will get either a piano, pool table, or massage table, or theater room in the suite.';

    // update Penthouse Suites
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-description').innerText = 'The Palazzo Penthouse Suite are contemporary and engaging. With 3,000 feet of space. Plus, access to the Prestige Club Lounge and Limo to and from the airport. Along with VIP check-in and VIP concierge service.';

    // update Presidential Suites
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(3) .mod-suites-browse-listing__card-description').innerText = 'The 6,200 square-foot Presidential Suite room in The Venetian is a remarkable retreat. With this luxury Las Vegas suite room comes access to Prestige lounge. In addition, you will receive VIP check-in and concierge services. As well as a Limo to from the airport.';

    // update Chairman Suites
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(4) .mod-suites-browse-listing__card-description').innerText = 'A terrace overlooks the Strip is the perfect backdrop for morning coffee or a late-night cocktail. Each suite provides every comfort and function needed to enjoy your time here. Including massage parlor, workout room with steam and sauna, wet bar, and dining room.';


    // remove all bullet lists
    qsa('.mod-suites-browse-listing__card-amenities').forEach(i => i.remove());
  }

  
  // Initialize experiment
  poll('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(4) .mod-suites-browse-listing__card-description', init);
  
}


// SUB-PAGE Luxury King Suites
if (window.location.href.indexOf('/luxury-king-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'At 720 square feet the Luxury King Suite is about twice the size of standard accommodations on the Strip. Complete with the comfort of one pillow-top king bed, sleep comes easy. With a sunken living room you can lounge solo or entertain guests. Enjoy a soak in a Roman tub or in the separate shower. A makeup mirror on the vanity makes getting ready effortless. Utilize the work desk when business matters are a priority. Order from in-suite dining for a night away from the hustle and bustle of the casino.';

    qs('.mod-room-detail-hero-item .description').remove();

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Bella Luxury Two Queen Suites
if (window.location.href.indexOf('/bella-luxury-two-queen-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'Stay in the Luxury Two Queens Suite with over 720 square feet in The Palazzo tower. At twice the size of standard rooms on the Strip, you can enjoy a sunken living room at your leisure. Unwind in the all-marble bathroom with a Roman tub and separate glass-enclosed shower. Need a makeup mirror? There’s one provided on the vanity for your convenience. When business is a priority, the dedicated work desk is great for creating an office space. Sleep in and order an in-suite meal to enjoy at your dining table.';

    qs('.mod-room-detail-hero-item .description').remove();
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Fortuna Premium King Suites
if (window.location.href.indexOf('/fortuna-premium-king-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'At 940 square feet, the Premium King Suite offers a view of the Strip or the pool. After a long day of travel, one pillow-top king bed provides supreme comfort. A sunken living room offers plenty of space to stretch out for your stay. The all-marble bathroom, Roman tub, and a separate shower creates a spa-like experience. Work at your leisure from the dedicated work desk. Take advantage of your dining table for two and order a meal from in-suite dining.';

    qs('.mod-room-detail-hero-item .description').remove();
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Siena grand one bedroom suites
if (window.location.href.indexOf('/siena-grand-one-bedroom-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'Sink into the comfort of the 1280 square foot elegance of the grand one bedroom suite. Retreat to an all-marble bathroom for a relaxing shower or a soak in the separate jetted tub. Gather in the living room or entertain at the dining table with friends. Utilize the walk-in closet to organize your clothes and store your luggage. If you need an extra bed, a sofa sleeper is available.';

    qs('.mod-room-detail-hero-item .description').remove();
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Lago Executive Suites
if (window.location.href.indexOf('/lago-executive-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'The Executive Suites offer 1,850-square-feet of indulgence for every traveler. Located at one of the most exciting crossroads of the Strip. Both spacious and comfortable, each suite comes with a jetted tub. Plus, either a piano, pool table, or massage table, or theater room in the suite. To book this room, please contact The Palazzo at 866.263.2999.';

    qs('.mod-room-detail-hero-item .description').remove();
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Penthouse Suites
if (window.location.href.indexOf('/penthouse-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'The 3,000 feet of space that comprise The Palazzo Penthouse Suite are both contemporary and engaging. Imported Italian marble floors lend an air of Old World charm to its foyer. Along with great area, separate powder room, and grand master bath. A full bar, pool table, and massage parlor complete an incredible living area. To book this room, please contact The Palazzo at 866.263.2999.';

    qs('.mod-room-detail-hero-item .description').remove();

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Presidential Suites
if (window.location.href.indexOf('/presidential-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'Designed for luxury from the balcony Jacuzzi to the Italian-marble foyer. Entertain your guests with a beautiful living area, dining room, and full bar. Relax with your own massage parlor or enjoy your private workout room. Plus enjoy 24-hour butler service and airport limo service. You will also receive legendary service and personal attention that is prompt and done with care. To book this room, please contact The Palazzo at 866.263.2999.';

    qs('.mod-room-detail-hero-item .description').remove();

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Chairman Suites
if (window.location.href.indexOf('/chairman-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'A terrace overlooks the Strip is the perfect backdrop for morning coffee or a late-night cocktail. Each suite provides every comfort and function needed to enjoy your time here. Including massage parlor, workout room with steam and sauna, wet bar, and dining room. To book this room, please contact The Palazzo at 866.263.2999.';

    qs('.mod-room-detail-hero-item .description').remove();

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}
