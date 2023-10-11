import { qs, qsa } from './qs';
import { venTower, bothTowers, plzTower } from './towerListPalazzo';
export function roomFilter(){

  // add filter buttons
  qs('.mod-suites-browse-listing__description').insertAdjacentHTML('afterend', `
   <div class="mod-suites-browse-listing__cards-filters">
    <div class="mod-suites-browse-listing__cards-filters--all">
      <p>View All Suites</p>
    </div>
    <div class="mod-suites-browse-listing__cards-filters--vnz">
      <p>Venetian Suite</p>
    </div>
    <div class="mod-suites-browse-listing__cards-filters--plz">
      <p>Palazzo Suites</p>
    </div>
   </div> 
  `);


  // function to reinitialize sliders when unhidden
  function reSlick(){
    jQuery('.slick-slider').slick('setPosition');
  }


  function hideCards(sel) {
    sel.closest('.mod-suites-browse-listing__card').classList.add('filterHide');
  }

  function showCards(sel) {
    sel.closest('.mod-suites-browse-listing__card').classList.remove('filterHide');
  }



  // all suites click
  qs('.mod-suites-browse-listing__cards-filters--all p').addEventListener('click', function(){
    //classes
    qs('.mod-suites-browse-listing__cards-filters--all').classList.add('active');
    qsa('.mod-suites-browse-listing__cards-filters--vnz, .mod-suites-browse-listing__cards-filters--plz').forEach(function(el){
      el.classList.remove('active');
    });

    // hide/show
    qsa(venTower + `,` + plzTower + `,` + bothTowers).forEach(function(el){
      showCards(el);
    });

    reSlick();

  });

  // venetian suites click
  qs('.mod-suites-browse-listing__cards-filters--vnz p').addEventListener('click', function(){
    //classes
    qs('.mod-suites-browse-listing__cards-filters--vnz').classList.add('active');
    qsa('.mod-suites-browse-listing__cards-filters--all, .mod-suites-browse-listing__cards-filters--plz').forEach(function(el){
      el.classList.remove('active');
    });

    
    // hide/show
    qsa(plzTower).forEach(function(el){
      hideCards(el);
    });

    qsa(venTower + `,` + bothTowers).forEach(function(el){
      showCards(el);
    });


    reSlick();

  });

  // palazzo suite click
  qs('.mod-suites-browse-listing__cards-filters--plz p').addEventListener('click', function(){
    //classes
    qs('.mod-suites-browse-listing__cards-filters--plz').classList.add('active');
    qsa('.mod-suites-browse-listing__cards-filters--all, .mod-suites-browse-listing__cards-filters--vnz').forEach(function(el){
      el.classList.remove('active');
    });

    // hide/show
    qsa(plzTower).forEach(function(el){
      showCards(el);
    });
    qsa(bothTowers).forEach(function(el){
      showCards(el);
    });
    qsa(venTower).forEach(function(el){
      hideCards(el);
    });

    reSlick();

  });


  // qsa(plzTower).forEach(function(el){
  //   showCards(el);
  // });
  // qsa(bothTowers).forEach(function(el){
  //   showCards(el);
  // });
  // qsa(venTower).forEach(function(el){
  //   hideCards(el);
  // });

}