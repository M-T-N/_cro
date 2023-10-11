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
      	document.querySelector('.mod-booking__toggle--mobile .js-booking-submit span').innerText = 'RESERVE A TABLE';
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

      document.querySelector('.mod-booking__toggle--mobile .js-booking-submit span').innerText = 'RESERVE A TABLE';
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
  
         document.querySelector('.mod-booking__toggle--mobile .js-booking-submit span').innerText = 'RESERVE A TABLE';

    }

    checkURLset1(urlSet1);
    checkURLset2(urlSet2);
    checkURLset3(urlSet3);


  }
  

  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.mod-booking__toggle--mobile .js-booking-submit', init1);

})();