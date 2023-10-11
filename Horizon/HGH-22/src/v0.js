// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v0.scss';
import { card1, card2, card3, card4, card5} from './utils/cardContent';


// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}



function init() {

  console.log('HGH21_v0 - HGH19 winner (control)');

  qs('head').insertAdjacentHTML('beforeend', `<style>
  .tin__booking-cards{position:fixed;bottom:30px;left:30px;box-shadow:0px 2px 6px black;z-index:1000}.tin__booking-card{display:flex;width:500px;height:130px;padding:12px;background:#fff;position:absolute;top:-130px;left:-550px;box-shadow:0px 3px 5px black;transition:all 0.3s}.tin__booking-card.active{left:0}.tin__booking-card__content{display:flex;flex-direction:column;width:75%;margin-right:5%;justify-content:space-between}.tin__booking-card__content__header{display:flex;align-items:center;justify-content:space-between}.tin__booking-card__content__header__text h3{color:#5F5F9C;font-size:14px;font-weight:600}.tin__booking-card__content__header__link a{font-size:12px;color:#5F5F9C;text-decoration:underline}.tin__booking-card__content__body{display:flex}.tin__booking-card__content__body p{margin-bottom:0;font-size:13px}.tin__booking-card__content__footer{display:flex;width:100%;justify-content:space-between}.tin__booking-card__content__footer__booking{display:flex;align-items:center}.tin__booking-card__content__footer__booking img{width:20px;height:20px}.tin__booking-card__content__footer__booking p{margin-bottom:0;margin-left:5px;font-style:italic;font-size:13px}.tin__booking-card__content__footer__cta{display:flex}.tin__booking-card__content__footer__cta span{display:flex;background:#02ac1e;padding:2px 5px;align-items:center;border:1.5px solid black}.tin__booking-card__content__footer__cta span img{width:50px;height:16px}.tin__booking-card__content__footer__cta span p{margin-bottom:0;color:#fff;font-size:13px}.tin__booking-card__content__footer__cta a:hover p{color:#fff !important}.tin__booking-card__img{display:flex;align-items:center;justify-content:center;width:20%}.tin__booking-card__img img{width:100%}.tin__booking-card__close{position:absolute;right:7px;top:7px;font-size:10px;font-weight:600;border:1px solid black;border-radius:52%;padding:0 7px;display:flex;justify-content:center;align-items:center;line-height:1.9;cursor:pointer}
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
  
      }, 12000);

      // close button click
      qsa('.tin__booking-card__close').forEach(el => {
        el.addEventListener('click', () => {
          el.closest('.tin__booking-card').classList.remove('active');
          //window.clearTimeout(timeoutID);
        })
      });


    }
    nextCard();
  }

    
  // delay modal firing
  setTimeout(function(){

    loadCard();

    // GA functions
    // 'What's Included' click
    qsa('.tin__booking-card__content__header__link a').forEach(el => {
      el.addEventListener('click', () => {
        ga('send', 'event', 'cro conversion', `HGH22_v0-control: What's Included popup click - ${el.closest('.tin__booking-card').id}`);
      });
    });
  
    //EZBook click
    qsa('.tin__booking-card__content__footer__cta a').forEach(el => {
      el.addEventListener('click', () => {
        ga('send', 'event', 'cro conversion', `HGH22_v0-control: EZBook Online popup click - ${el.closest('.tin__booking-card').id}`);
      });
    });


  }, 5000);


  

  
}


// Initialize experiment
poll('#MainZone', init);