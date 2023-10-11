// POLL
(function(){
  
  function init() {
    
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
    
    function urlSet1Function(){
    	if (document.querySelector('.mod-quick-facts--open-table a').href.includes('sevenrooms')) {
      	document.querySelector('.mod-quick-facts--open-table a').classList.add('tin--sevenrooms');
      }
      if (document.querySelector('.mod-quick-facts--open-table a').href.includes('opentable')) {
      	document.querySelector('.mod-quick-facts--open-table a').classList.add('tin--opentable');
      }
    }
    
    function urlSet2Function(){
    	if (document.querySelector('.mod-right-rail__content a.cta').href.includes('sevenrooms')) {
      	document.querySelector('.mod-right-rail__content a.cta').classList.add('tin--sevenrooms');
      }
      if (document.querySelector('.mod-right-rail__content a.cta').href.includes('opentable')) {
      	document.querySelector('.mod-right-rail__content a.cta').classList.add('tin--opentable');
      }    
    }
    
    function urlSet3Function(){
     	if (document.querySelector('.mod-right-rail__content a.cta').href.includes('sevenrooms')) {
      	document.querySelector('.mod-right-rail__content a.cta').classList.add('tin--sevenrooms');
      }
      if (document.querySelector('.mod-right-rail__content a.cta').href.includes('opentable')) {
      	document.querySelector('.mod-right-rail__content a.cta').classList.add('tin--opentable');
      } 
    }
    
    
    checkURLset1(urlSet1);
    checkURLset2(urlSet2);
   	checkURLset3(urlSet3);
    
    
    
    
    
    
    
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.mod-booking__toggle--mobile .js-booking-submit', init);

})();