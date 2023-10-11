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

    // intro text
    qs('.mod-room-browse-hero--content .o-description').innerText = 'Every one of our rooms is a suite. Comfort considered in every detail to ensure a good night’s sleep.';

    // update 'Most Popular Suites' subtext
    qs('.mod-suites-browse-listing .mod-suites-browse-listing__description:nth-of-type(1)').innerText = 'Offerings some of the best suites in Las Vegas, our standard suite rooms have everything you need and more.';

    //Luxury King Suite
    qs('.mod-suites-browse-listing:nth-of-type(1) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-description').innerText = 'In our Grand King suite room, stretch out in an oversized, pillow-top king bed. Or entertain in your separated living room. Relax by soaking in your oversized bathroom with Roman tub. Choose a suite with a view to enjoy the Las Vegas lights.';

    //Luxury Two Queen Suite
    qs('.mod-suites-browse-listing:nth-of-type(1) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-description').innerText = 'Step up to one of the most impeccable Vegas hotel suites on the Strip. Each Luxury Two Queen Suite features a separated living room and two plush queen-size pillow-top beds. Relax in your oversized bathroom and soak in a Roman tub. And end the day with remote control Roman shades and curtains.';

    // 'Premier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__description').innerText = 'Enjoy our premier Las Vegas suites for every special occasion. Offering extra space, luxury and more.';

    // Premier Two Queen Suite
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-description').innerText = 'Enter your Premium Two Queen Suite through the double-door entrance. Leading you into an Italian marble foyer. In this Las Vegas suite, you will enjoy the plush queen-size pillow-top beds and Egyptian cotton sheets. In addition, take advantage of your spacious walk-in closet. Enjoy a separated living room or relax in your oversized bathroom. Take advantage of the work area, with dual-line phone and wireless Internet access.';

    // Grand king suite
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-description').innerText = 'The Grand King Suite is the perfect Las Vegas retreat. Offering the highest levels of comfort expected from a luxury resort. This impeccable suite room features a king-size bed with Egyptian cotton sheets. In addition to an over-sized bathroom with jetted tub and separate glass-enclosed shower.';

    // Grand One Bedroom
    qs('.mod-suites-browse-listing:nth-of-type(2) .mod-suites-browse-listing__card:nth-of-type(3) .mod-suites-browse-listing__card-description').innerText = 'The Grand One Bedroom suite sets the mood for the perfect stay at a world-class resort. Fall in love a semi-formal dining room, perfect for entertaining guests. Relax in the jetted tub or large separate glass shower. Enjoy the full wet bar with seating area and high-definition TV as well as the stocked refreshment center. This suite room has all you need and more at the best suites in Las Vegas.';

    // 'Top Tier Suites' subtext
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__description').innerText = 'Our Top Tier suite rooms deliver unmatched luxury. For an experience that is once-in-a-lifetime. Book direct through Reservations at 866.263.2998.';

    // Executive King Suite
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-description').innerText = 'Our Executive King Suite room has everything you need and more. Step into luxury and feel a world of unmatched beauty. Enjoy 1,850-square-foot of space that is warm and welcoming the moment you arrive through the double doors. Relax in your jetted tub or host guests in a separated living room or the large dining area. Choose extra luxury with a personal theater or workout room.';

    // Penthouse Suite
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-description').innerText = 'The Penthouse suite room is the most luxurious suite in our resort. With a glass chandelier and views of Las Vegas through the floor to ceiling window. Cozy up to the fireplace in the comfort of your master bedroom. Two luxurious bathrooms featuring marble floors adjacent to each bedroom. Or relax in your jetted tub with separate glass-enclosed showers.';

    // Presidential Suite
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(3) .mod-suites-browse-listing__card-description').innerText = 'The 5,200 square-foot Presidential Suite room in The Venetian is a remarkable retreat. With this luxury Las Vegas suite room comes access to Prestige lounge. In addition, you will receive VIP check-in and concierge services. As well as a Limo to from the airport.';

    // Chairman Suite
    qs('.mod-suites-browse-listing:nth-of-type(3) .mod-suites-browse-listing__card:nth-of-type(4) .mod-suites-browse-listing__card-description').innerText = 'Our Chairman Suites come standard with 24-hour butler service and airport limo service. In addition, you will receive VIP check-in and concierge service. Additional options are a workout room with sauna and steam and a massage parlor. As well as a dining room round out, along with its many useful and relaxing touches.';

    // Luxury King Suite - Venezia
    qs('.mod-suites-browse-listing:nth-of-type(4) .mod-suites-browse-listing__card:nth-of-type(1) .mod-suites-browse-listing__card-description').innerText = 'Start the day with incredible breakfasts at Thomas Keller’s Bouchon, located moments from your suite. Relax in the oversized king bed. Or host guests in your distinct living room with bi-level configuration. Take a day for yourself and enjoy the luxurious all-marble bath with oversized Roman tub.';

    // Luxury Two Queen Suite - Venezia
    qs('.mod-suites-browse-listing:nth-of-type(4) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-description').innerText = 'For a quiet moment, the Luxury Two Queen Suites inside the Venezia Tower are just right. Choose a room with a view to enjoy the Las Vegas lights. Relax in your plush Queen bed or in your all-marble bath with oversized Roman tub.';

    // remove all bullet lists
    qsa('.mod-suites-browse-listing__card-amenities').forEach(i => i.remove());


  }
  
  // Initialize experiment
  poll('.mod-suites-browse-listing:nth-of-type(4) .mod-suites-browse-listing__card:nth-of-type(2) .mod-suites-browse-listing__card-text .mod-suites-browse-listing__card-amenities', init);

}






// SUB-PAGE Luxury King Suites
if (window.location.href.indexOf('/luxury-king-suites.html') > 0) {

  function init() {

    // update text
    qs('.mod-room-detail-hero-item .o-h31').innerText = 'Stretch out with 650 square feet in a Luxury King Suite. Nearly double the size of standard rooms offered on the Las Vegas Strip, this suite comes complete with a pillow-top king bed. Relax or entertain in your sunken living room. With a Roman tub and a separate glass-enclosed shower, a tranquil soak is never far away. Getting ready is easy with a makeup mirror and vanity. When business matters need your attention, use the dedicated work desk. Choose to stay in and order from the in-suite dining menu to enjoy at your dining table.';

    // remove bullet list
    qs('.mod-room-detail-hero-item .description').remove();
  }

  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Bella Luxury Two Queen Suites
if (window.location.href.indexOf('/bella-luxury-two-queen-suites.html') > 0) {
  
  function init() {

    // update text
    qs('.mod-room-detail-hero-item .o-h31').innerText = 'Stay in the largest standard suite on the Las Vegas Strip. Relax in a Luxury Two Queen suite and sink into the comfort of two pillow-top queen beds. A sunken living room and a dining area offers plenty of space. The spa experience isn’t far with an all-marble bathroom. Enjoy a soak in the oversized Roman tub or separate glass-enclosed shower. The vanity and makeup mirror provide an additional space for getting ready. And organize business needs with a dedicated work desk.';

    // remove bullet list
    qs('.mod-room-detail-hero-item .description').remove();
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Rialto Premium Two Queen Suites
if (window.location.href.indexOf('/rialto-premium-two-queen-suites.html') > 0) {
  
  function init() {

    // update text
    qs('.mod-room-detail-hero-item .o-h31').innerText = 'Upgrade to a spacious stay in our Premium Two Queens Suite. At 1,100 square feet, it’s double the size of our standard suites. Restful sleep is easy with the comfort of two pillow-top queen beds. A sunken living room provides space for entertaining guests and a sofa sleeper. Find relaxation in the all-marble bathroom with a Roman tub and separate shower.  With a dining table for three, take advantage of the extensive in-suite menu. The dedicated work desk serves your everyday business needs. Remote-controlled Roman shades and curtains offer a convenient way to maintain a darkened suite.';

    // remove bullets
    qs('.mod-room-detail-hero-item .description').remove();
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Piazza Grand King Suites
if (window.location.href.indexOf('/piazza-grand-king-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'Enjoy a restful night of sleep in a private master bedroom with one king bed. With 1,500 square feet the Grand King Suite is perfect to entertain guests. In the sunken living room, you will find a wet bar and a formal dining table. Use the convenient sofa sleeper for an extra sleeping area. Enjoy the jetted tub and separate shower in the 170-square-foot bathroom. Use the dedicated work desk when business matters need your attention. Remote-controlled Roman shades and curtains keep your suite darkened.';

    qs('.mod-room-detail-hero-item .description').remove();
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Prima Grand One-Bedroom Suites
if (window.location.href.indexOf('/prima-grand-one-bedroom-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').innerText = 'Enjoy world-class views of the Strip while lounging in your Las Vegas hotel suite. Relax in the king-sized bed or unwind in the jetted tub in the 200-square-foot marble bathroom. Maintain a darkened suite with remote-controlled Roman shades and curtains for a more restful sleep. Getting ready is easy with an additional powder room. The work desk is great for attending to business needs at your leisure. Keep your clothes organized and store your luggage out of sight in the walk-in closet. A full-size wet bar will help entertain guests in the living room or semi-formal dining area. For extra guests, a sofa sleeper is standard with every Grand One Bedroom Suite.';

    qs('.mod-room-detail-hero-item .description').remove();
    
  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}



// SUB-PAGE Renaissance Executive One-Bedroom Suites
if (window.location.href.indexOf('/renaissance-executive-one-bedroom-suites.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerText = 'Three times the size of our standard accommodations, you’ll enjoy a fully furnished, grand living room, large dining room and a sitting area with incredible views. This suite offers a workout room with cedar wood sauna. The personal theatre room includes seating for 6-8, making it an ideal space for entertaining or hosting a meeting. The workout room includes cardio equipment, either a treadmill, elliptical, or stationary bike, and a personal sauna. To book this room, please contact The Venetian at 866.263.2998.';

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Penthouse Suites
if (window.location.href.indexOf('/penthouse.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerText = 'The Penthouse suite room is the most luxurious suite in our resort. With a glass chandelier and views of Las Vegas through the floor to ceiling window. Cozy up to the fireplace in the comfort of your master bedroom. Two luxurious bathrooms featuring marble floors adjacent to each bedroom. Or relax in your jetted tub with separate glass-enclosed showers. You will have access to Prestige Club Lounge, Limo to/from airport and VIP check-in and concierge services. To book this suite, please contact The Venetian at 866.263.2998.';

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Presidential Suites
if (window.location.href.indexOf('/presidential.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerText = 'This 5,200 square-foot suite room in The Venetian is a nothing less than a retreat. With this luxury Las Vegas suite comes access to the Prestige lounge. In addition, you will receive VIP check-in and concierge services. As well as a Limo to from the airport.  These two-bedroom suites are extensive and luxurious. In addition, you will receive legendary service and personal attention that is prompt and done with care. The best suites in Vegas are our Presidential Suites. To book this room, please contact The Venetian at 866.263.2998.';

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}


// SUB-PAGE Chairman Suites
if (window.location.href.indexOf('/chairman.html') > 0) {
  
  function init() {

    qs('.mod-room-detail-hero-item .o-h31').remove();

    qs('.mod-room-detail-hero-item .description').innerText = 'The Venetian Chairman Suite stands out in the world of luxury. These three-bedroom suites do not compromise in their size. We have procured the best furnishings to create the ultimate retreat. Our Chairman Suites come standard with personal attention from our experts. Our Chairman Suites come standard with 24-hour butler service and airport limo service. In addition, you will receive VIP check-in and concierge service. One step inside, you will be in the frame of mind to enjoy everything our resort has to offer. To book this room please contact The Venetian at 866.263.2998.';

  }
  // Initialize experiment
  poll('.mod-room-detail-hero-item .description', init);
}
