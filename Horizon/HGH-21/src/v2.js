// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v2.scss';
import { card1, card2, card3, card4, card5} from './utils/cardContentV2';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  console.log('HGH-21 V2 | (Horizon) Ecomm Pop Up Iteration');

  qs('head').insertAdjacentHTML('beforeend', `<style>
  .tin__booking-cards{position:fixed;bottom:30px;left:30px;box-shadow:0px 2px 6px black;z-index:1000}.tin__booking-card{display:flex;width:500px;height:120px;padding:12px;background:#fff;position:absolute;top:-130px;left:-550px;box-shadow:0px 3px 5px black;transition:all 0.3s}.tin__booking-card.active{left:0}.tin__booking-card__content{display:flex;flex-direction:column;width:72%;margin-right:3%;justify-content:space-between}.tin__booking-card__content__header{display:flex;align-items:center;justify-content:space-between}.tin__booking-card__content__header__text h3{color:#5F5F9C;font-size:16px;font-weight:600}.tin__booking-card__content__header__booking{display:flex;align-items:center}.tin__booking-card__content__header__booking img{width:18px;margin-right:6px}.tin__booking-card__content__header__booking p{margin-bottom:0;font-style:italic;font-size:14px}.tin__booking-card__content__body{display:flex}.tin__booking-card__content__body p{margin-bottom:0;font-size:13px}.tin__booking-card__content__footer__cta{display:flex;justify-content:center}.tin__booking-card__content__footer__cta a span{display:flex;background:#02ac1e;padding:3px 15px;justify-content:center;align-items:center;border:1.5px solid black}.tin__booking-card__content__footer__cta a span img{width:70px;height:18px;margin-right:3px}.tin__booking-card__content__footer__cta a span p{margin-bottom:0;color:#fff;font-size:15px;letter-spacing:1.1px}.tin__booking-card__content__footer__cta a:hover p{color:#fff !important}.tin__booking-card__img{display:flex;align-items:center;justify-content:center;width:25%}.tin__booking-card__img img{width:100%}.tin__booking-card__close{position:absolute;right:7px;top:7px;font-size:10px;font-weight:600;border:1px solid black;border-radius:52%;padding:0 7px;display:flex;justify-content:center;align-items:center;line-height:1.9;cursor:pointer}
  </style>`)

  function randomCard(){

    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    var arr = [0, 1, 2, 3, 4];

    return shuffle(arr);

  }

  // get random array
  var order = randomCard();

  // set cards to their own array
  let cards = [card1, card2, card3, card4, card5];

  // randomize card order
  cards = order.map(val => cards[val]);
  // join card in s string
  cards = cards.join("");


  // load the cards into a div at bottom
  qs('#MainZone').insertAdjacentHTML('beforeend', `
    <div class="tin__booking-cards">${cards}</div>
  `);


  function loadCard(){

    qs('.tin__booking-cards .tin__booking-card:nth-of-type(1)').classList.add('active');

    // load the first cards for 10 secs, no card for 5, load next for 10...
    let cardCount = 1;
    function nextCard(){
      var timeoutID = setTimeout(function() {
  
          // Your logic here
          qs('.tin__booking-cards .tin__booking-card:nth-of-type('+ cardCount +')').classList.remove('active');
  
          cardCount++;
  
          setTimeout(function(){
            qs('.tin__booking-cards .tin__booking-card:nth-of-type('+ cardCount +')').classList.add('active');
            nextCard();
          }, 5000)
      
          if (cardCount > 4) {
              window.clearTimeout(timeoutID);
          }
  
      }, 10000);

      // close button click
      qsa('.tin__booking-card__close').forEach(el => {
        var cardID = el.closest('.tin__booking-card').id;
        el.addEventListener('click', () => {
          el.closest('.tin__booking-card').classList.remove('active');
          //window.clearTimeout(timeoutID);
          ga('send', 'event', 'cro conversion', 'HGH21_V2: Popup close button');
          ga('send', 'event', 'cro conversion', 'HGH21_V2: Popup close button' + cardID);
        })
      });

      // GA functions //

      qs('.left-area .cta-ezbook a').addEventListener('click', () => {
        ga('send', 'event', 'cro conversion', "HGH21_V2: EZBook Navbar click");
      });

      /*
      qsa('.tin__booking-card__content__header__link a').forEach(el => {
        el.addEventListener('click', () => {
          ga('send', 'event', 'cro conversion', "HGH17_V1: What's Included clicks");
        });
      });
      */

      qsa('.tin__booking-card__content__footer__cta a').forEach(el => {
        var cardID = el.closest('.tin__booking-card').id;
        el.addEventListener('click', () => {
          ga('send', 'event', 'cro conversion', 'HGH21_V2: EZBook Online popup clicks');
          ga('send', 'event', 'cro conversion', 'HGH21_V2: EZBook Online popup clicks' + cardID);
        });
      });

    }
    nextCard();
  }

    
  // delay modal firing
  setTimeout(function(){

    loadCard();

  }, 5000);
  

  
}


// Initialize experiment
poll('#MainZone', init);