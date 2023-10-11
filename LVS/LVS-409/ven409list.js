
document.querySelector('.mod-quick-facts__phone--text') != null

document.querySelector('.rail-reserve__content a[target="_self"]') != null

document.querySelector('.rail-reserve__inner .reserverightrailcopy:last-child p') != null


.tin--sevenrooms
.tin--opentable

document.querySelector('.mod-quick-facts__phone--text').innerText;

https://www.venetianlasvegas.com/restaurants/wakuda.html
https://www.venetianlasvegas.com/restaurants/brera-osteria.html
https://www.venetianlasvegas.com/restaurants/estiatorio-milos.html
https://www.venetianlasvegas.com/restaurants/matteos-ristorante-italiano.html
https://www.venetianlasvegas.com/restaurants/mott-32.html
https://www.venetianlasvegas.com/restaurants/bouchon.html
https://www.venetianlasvegas.com/restaurants/yardbird.html
https://www.venetianlasvegas.com/restaurants/cut.html
https://www.venetianlasvegas.com/restaurants/buddy-v-ristorante.html
https://www.venetianlasvegas.com/restaurants/flight-club-social-darts.html
https://www.venetianlasvegas.com/restaurants/villa-azur.html
https://www.venetianlasvegas.com/restaurants/lavo.html
https://www.venetianlasvegas.com/restaurants/sugarcane.html
https://www.venetianlasvegas.com/restaurants/sushisamba.html
https://www.venetianlasvegas.com/restaurants/tao.html
https://www.venetianlasvegas.com/restaurants/delmonico-steakhouse.html
https://www.venetianlasvegas.com/restaurants/chica.html




document.querySelector('.rail-reserve__inner .reserverightrailcopy:last-child p').innerText.trim().split('Phone: ')[1];
https://www.venetianlasvegas.com/restaurants/hong-kong-cafe.html




document.querySelector('.rail-reserve__inner .reserverightrailcopy:nth-child(3) p').innerText.trim().split('Phone: ')[1];

https://www.venetianlasvegas.com/restaurants/canonita.html
https://www.venetianlasvegas.com/restaurants/canaletto.html
https://www.venetianlasvegas.com/restaurants/canyon-ranch-grill.html
https://www.venetianlasvegas.com/restaurants/casanova.html
https://www.venetianlasvegas.com/restaurants/mercato-della-pescheria.html
https://www.venetianlasvegas.com/restaurants/primeburger.html
https://www.venetianlasvegas.com/restaurants/royal-britannia.html
https://www.venetianlasvegas.com/restaurants/smith-and-wollensky.html
https://www.venetianlasvegas.com/restaurants/the-x-pot.html
https://www.venetianlasvegas.com/restaurants/trattoria-reggiano.html
https://www.venetianlasvegas.com/restaurants/truth-and-tonic.html



url.pathname.includes('canonita' || 'wakuda')



(function(){
  
  function init1() {
    
    console.log('VEN-409_v1');

    function checkURLset1(urlList) {
      for (var i = 0; i < urlList.length; i++) {
          if (document.location.pathname.includes(urlList[i])) {
            urlSet1Function();
          }
      }
      return false;
    }
    function checkURLset2(urlList) {
      for (var i = 0; i < urlList.length; i++) {
          if (document.location.pathname.includes(urlList[i])) {
            urlSet2Function();
          }
      }
      return false;
    }
    
    function checkURLset3(urlList) {
      for (var i = 0; i < urlList.length; i++) {
          if (document.location.pathname.includes(urlList[i])) {
            urlSet3Function();
          }
      }
      return false;
    }  


    const urlSet1 = [
      'wakuda',
      'brera-osteria',
      'estiatorio-milos',
      'matteos-ristorante-italiano',
      'mott-32',
      'bouchon',
      'yardbird',
      'cut',
      'buddy-v-ristorante',
      'flight-club-social-darts',
      'villa-azur',
      'lavo',
      'sugarcane',
      'sushisamba',
      'tao',
      'delmonico-steakhouse',
      'chica',
    ];

    const urlSet2 = [
      'canonita',
      'canaletto',
      'canyon-ranch-grill',
      'casanova',
      'mercato-della-pescheria',
      'primeburger',
      'royal-britannia',
      'smith-and-wollensky',
      'the-x-pot',
      'trattoria-reggiano',
      'truth-and-tonic',
    ];
    
    const urlSet3 = [
      'hong-kong-cafe'
    ];
  
    
    
    // design 1
    function urlSet1Function(){

      // copy phone number
      const phoneNumber = document.querySelector('.mod-quick-facts__phone--text').innerText;
			const htmlPhone  = phoneNumber.split('.').join('');
      
      //remove phone number
      document.querySelector('.mod-quick-facts__phone').remove();

      // change cta to phone
      document.querySelector('.mod-booking__toggle--mobile .dates').outerHTML = `
          <button class="phone">
            <a href="tel:+1${htmlPhone}" class="mod-quick-facts__phone-item">
              <span>
                <svg role="presentation">
                  <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#quick-facts-phone"></use>
                </svg>
              </span>
              <span class="mod-quick-facts__phone--text">${phoneNumber}</span>
            </a>
          </button>
      `;

      // change reservation button
      // replace cta link
      setTimeout(function(){
        // make sticky cta href same as button
        document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').href = document.querySelector('.mod-quick-facts--open-table a').href;
        
        // determine if link is sevenrooms or open-table and add class based on that
        if (document.querySelector('.mod-quick-facts--open-table a').href.includes('sevenrooms')) {
          document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').classList.add('tin--sevenrooms');
        }
        if (document.querySelector('.mod-quick-facts--open-table a').href.includes('opentable')) {
          document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').classList.add('tin--opentable');
        }
        
      }, 1000);
      
      // and text
      if (document.location.href.indexOf('flight-club') == -1) {
      	document.querySelector('.mod-booking__toggle--mobile .js-booking-submit span').innerText = 'MAKE A RESERVATION';
      }
      if (document.location.href.indexOf('flight-club') > 0) {
      	document.querySelector('.mod-booking__toggle--mobile .js-booking-submit span').innerText = 'Reserve an Oche';
      }      
    }
    
    
    // design 2
    function urlSet2Function(){
      // copy phone number
      const phoneNumber = document.querySelector('.reserverightrailcopy:nth-child(3) .rail-reserve__content p').innerText.split('Phone: ')[1];
			const htmlPhone  = phoneNumber.split('.').join('');
      
      // change cta to phone
      document.querySelector('.mod-booking__toggle--mobile .dates').outerHTML = `
        <button class="phone">
          <a href="tel:${htmlPhone}" class="mod-quick-facts__phone-item">
            <span>
              <svg role="presentation">
                <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#quick-facts-phone"></use>
              </svg>
            </span>
            <span class="mod-quick-facts__phone--text">${phoneNumber}</span>
          </a>
        </button>
      `;


      // replace ctas text and link
      setTimeout(function(){
        document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').href = document.querySelector('.mod-right-rail__content a.cta').href;
        
        // determine if link is sevenrooms or open-table and add class based on that
        if (document.querySelector('.mod-right-rail__content a.cta').href.includes('sevenrooms')) {
          document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').classList.add('tin--sevenrooms');
        }
        if (document.querySelector('.mod-right-rail__content a.cta').href.includes('opentable')) {
          document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').classList.add('tin--opentable');
        }
        
      }, 1000);

      document.querySelector('.mod-booking__toggle--mobile .js-booking-submit span').innerText = 'MAKE A RESERVATION';
    }
 

    // design 3
    function urlSet3Function(){

      const phoneNumber = document.querySelector('.reserverightrailcopy:nth-child(3) .rail-reserve__content p:last-child').innerText.split('Phone: ')[1].trim();
      const htmlPhone  = phoneNumber.split('.').join('');
      
      setTimeout(function(){
          // change cta to phone
          document.querySelector('.mod-booking__toggle--mobile .dates').outerHTML = `
            <button class="phone">
              <a href="tel:${htmlPhone}" class="mod-quick-facts__phone-item">
                <span>
                  <svg role="presentation">
                    <use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#quick-facts-phone"></use>
                  </svg>
                </span>
                <span class="mod-quick-facts__phone--text">${phoneNumber}</span>
              </a>
            </button>
          `;
        }, 1000);
  
        // replace ctas text and link
        setTimeout(function(){
          document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').href = document.querySelector('.mod-right-rail__content a.cta').href;
          
          // determine if link is sevenrooms or open-table and add class based on that
          if (document.querySelector('.mod-right-rail__content a.cta').href.includes('sevenrooms')) {
            document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').classList.add('tin--sevenrooms');
          }
          if (document.querySelector('.mod-right-rail__content a.cta').href.includes('opentable')) {
            document.querySelector('.mod-booking__toggle--mobile .js-booking-submit').classList.add('tin--opentable');
          }
          
        }, 1000);
  
         document.querySelector('.mod-booking__toggle--mobile .js-booking-submit span').innerText = 'MAKE A RESERVATION';

    }

    checkURLset1(urlSet1);
    checkURLset2(urlSet2);
    checkURLset3(urlSet3);


  }
  

  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.mod-booking__toggle--mobile .js-booking-submit', init1);

})();