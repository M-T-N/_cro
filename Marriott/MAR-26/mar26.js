<style>
  .search__flexible_date--info--hp {
    position: absolute;
    color: #707070;
    padding-left: 1.875rem;
    transform: translateY(3px)
  }
  
  @media (max-width: 47.96875rem) {
    .search__flexible_date--info--hp {
      padding-left: 1.7rem;
      transform: translateY(-3px)
    }
  }
  
  @media (max-width: 47.96875rem) {
    .search-form-body .search__flexible_date--info--hp {
      position: static;
      padding-left: 0;
      transform: none;
      margin-bottom: 0;
      margin-top: 5px
    }
  }
  
  @media (max-width: 47.96875rem) {
    .MuiPaper-root .search-dates-popup__main>div:nth-child(2) {
      height: 70px
    }
  
    .search-dates-popup__main>div:nth-child(2) {
      height: 4.8rem
    }
  }
  
  .tile-search-summary .t-is-visible-m {
    width: 100%
  }
  
  .search__flexible_date--info--srp {
    display: inline-block;
    font-size: 14px;
    margin-left: 6px
  }

  .nights-count {
    top: 3px;
  }
  
  @media (max-width: 47.96875rem) {
    .search__flexible_date--info--srp {
      margin-top: 0;
      margin-bottom: 0
    }
  }
  
  #staydates .search__flexible_date--info--srp {
    margin-left: 0;
    margin-top: 5px;
    margin-bottom: 0
  }
  
  @media (max-width: 47.96875rem) {
    .m-field-control.m-date-picker.l-date-picker .field-title {
      display: inline-block
    }
</style>


<script>
console.log('MAR_26-v1')

// blurbs for specific sections
const yesParens = `(Click on Specific Dates to see rates)`;
const noParens = `Click on Specific Dates to see rates below`;
const noParensHP = `Choose Specific Dates in order to see rates`;


// querySelector + querySelectorAll functions
function qs(sel) {
  return document.querySelector(sel);
}
function qsa(sel) {
  return document.querySelectorAll(sel);
}


// watch input mutationObserver
function watchInput(elem, returnFunc){
  let observer =new MutationObserver(cb);
  function cb(mutations){
    returnFunc();
  }
  observer.observe(elem, {
    attributes: true
  });
}

// watch body mutation observer
function watchBody(elem, returnFunc){
  let observer =new MutationObserver(cb);
  function cb(mutations){
    returnFunc(mutations);
  }
  observer.observe(elem, {
    childList: true,
    subtree: true,
  });
}

// watch body mutation observer for SRP
function watchBodySRP(elem, returnFunc){
  let observer =new MutationObserver(cb);
  function cb(mutations){
    returnFunc(mutations);
  }
  observer.observe(elem, {
    attributes: true
  });
}


// tagging function
function addTagsSRP(){
  // datepicker
  document.querySelector('#staydates').classList.add('custom_click_track');
  document.querySelector('#staydates').setAttribute('custom_click_track_value', 'SRP Datepicker|Stay Dates|internal');

  // edit button
  document.querySelector('.js-edit-search').classList.add('custom_click_track');
  document.querySelector('.js-edit-search').setAttribute('custom_click_track_value', 'SRP Edit Search|Edit|internal');
  
  // specific dates tab
  document.querySelector('.l-date-picker-body .tab1').classList.add('custom_click_track');
  document.querySelector('.l-date-picker-body .tab1').setAttribute('custom_click_track_value', 'SRP Dropdown Datepicker|Specific Dates|internal');
  
  // flexible dates tab
  document.querySelector('.l-date-picker-body .tab2').classList.add('custom_click_track');
  document.querySelector('.l-date-picker-body .tab2').setAttribute('custom_click_track_value', 'SRP Dropdown Datepicker|Flexible Dates|internal');
}


function mar26() {


  // changes here


  // SRP function
  if (document.URL.indexOf('/search/') != -1) { 
    
    // different results for desktop and mobile
  switch (document.documentElement.clientWidth > 767) {
    //desktop
    case true:

    // watch Flexible Dates tab in dropdown
      watchBodySRP(qs('.l-date-picker-body .tab2'), function(mutations){
        mutations.forEach(mutation => {
            if (mutation.target.classList.contains('selected') && qsa('.l-date-picker-body .search__flexible_date--info--srp').length == 0) {
              // place after 'flexible dates' tab in Dates dropdown
              document.querySelector('.l-date-picker-body span[data-tab-value="Flexible Dates"]').insertAdjacentHTML('afterend', '<p class="search__flexible_date--info--srp">' + noParens + '</p>');
            }
            if (mutation.target.classList.contains('selected') == 0 && qsa('.l-date-picker-body .search__flexible_date--info--srp').length != 0) {
              qs('.l-date-picker-body .search__flexible_date--info--srp').remove();
            }
        });
      });

      // watch datepicker box if Flex dates are selected
      watchBodySRP(qs('div[data-label="Flexible in"]'), function(mutations){
        mutations.forEach(mutation => {
          switch (mutation.target.style.display) {
            case "block":
              // place after date picker box (before dropdown), don't add if there
              if (qsa('.m-field-control.m-date-picker.l-date-picker > .search__flexible_date--info--srp').length == 0) {
                qs('.m-field-control.m-date-picker.l-date-picker').insertAdjacentHTML('beforeend', '<p class="search__flexible_date--info--srp">' + noParens + '</p>');      
              }
              // place below dates, before going into dropdown
              if (qsa('#staydates .search__flexible_date--info--srp').length == 0) {
                qs('#staydates').insertAdjacentHTML('beforeend', '<p class="search__flexible_date--info--srp">' + noParens + '</p>')
              }
              break;
            case "none":
            case '':
              qs('.m-field-control.m-date-picker.l-date-picker .search__flexible_date--info--srp').remove();
              qs('#staydates .search__flexible_date--info--srp').remove();
              break;
          }
        });
      });

      // on pageload, if dates are flexible, place below dates, before going into dropdown
      if (
        qs('#staydates .l-dates').innerText.indexOf('Flexible') != -1 &&
        qsa('#staydates .search__flexible_date--info--srp').length == 0 &&
        qsa('.m-field-control.m-date-picker.l-date-picker > .search__flexible_date--info--srp').length == 0
        ) {
          qs('#staydates').insertAdjacentHTML('beforeend', '<p class="search__flexible_date--info--srp">' + noParens + '</p>');
          qs('.m-field-control.m-date-picker.l-date-picker').insertAdjacentHTML('beforeend', '<p class="search__flexible_date--info--srp">' + noParens + '</p>');  
        }

    break;
    //mobile
    case false:

        // watch Flexible Dates tab in dropdown
        watchBodySRP(qs('.l-date-picker-body .tab2'), function(mutations){
          mutations.forEach(mutation => {
              if (mutation.target.classList.contains('selected') && qsa('.m-field-control.m-date-picker.l-date-picker .search__flexible_date--info--srp').length == 0) {
                // place after date picker box (before dropdown)
                qs('.m-field-control.m-date-picker.l-date-picker .field-title').insertAdjacentHTML('afterend', '<p class="search__flexible_date--info--srp">' + yesParens + '</p>');
              }
              if (!mutation.target.classList.contains('selected') && qsa('.m-field-control.m-date-picker.l-date-picker .search__flexible_date--info--srp').length != 0) {
                qs('.m-field-control.m-date-picker.l-date-picker .search__flexible_date--info--srp').remove();
              }
          });
        });


      // also run on pageload, if dates are flexible
      if (qs('#staydates .l-dates').innerText.indexOf('Flexible') != -1 && qsa('#staydates .search__flexible_date--info--srp').length == 0) {

        //place below dates, before going into dropdown
        qs('#staydates').insertAdjacentHTML('beforeend', '<p class="search__flexible_date--info--srp">' + yesParens + '</p>');

        // place after clicking 'edit' button, next to datepicker
        setTimeout(function(){
          qs('.m-field-control.m-date-picker.l-date-picker .field-title').insertAdjacentHTML('afterend', '<p class="search__flexible_date--info--srp">' + yesParens + '</p>');
        }, 1000)

      }

    break;
  }


  // add tracking tags
  addTagsSRP();
  
  }
  


}


// doc ready check
var cancel_interval_mar26 = setInterval(loadmar26, 30);
function loadmar26() {
  /******* START -----DOM is parsed  ************/
  if (document.readyState == "interactive" && typeof window.s === "object") {
    console.log("DOM is interactive.....");
    clearInterval(cancel_interval_mar26);
    mar26();
  }
  /******* END  ******/
  /******* START -----DOM is loaded  ************/
  else if (document.readyState == "complete" && typeof window.s === "object") {
    console.log("DOM is completed.....");
    clearInterval(cancel_interval_mar26);
    mar26();
  }
  else{
    console.log("DOM is still loading.....");
  }
  /******* END  ******/
}   
</script>