// POLL
(function(){
  
  function init() {
  
    // changes here
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('SELECTOR', init);

})();







//  Marriott Poll
(function(){
  
  function mar1() {
  
    // changes here
  
  }

  // doc ready check
  var cancel_interval_mar1 = setInterval(loadMar1, 30);
  function loadMar1() {
    /******* START -----DOM is parsed  ************/
    if (document.readyState == "interactive" && typeof window.s === "object") {
      console.log("DOM is interactive.....");
      clearInterval(cancel_interval_mar1);
      mar1();
    }
    /******* END  ******/
    /******* START -----DOM is loaded  ************/
    else if (document.readyState == "complete" && typeof window.s === "object") {
      console.log("DOM is completed.....");
      clearInterval(cancel_interval_mar1);
      mar1();
    }
    else{
      console.log("DOM is still loading.....");
    }
    /******* END  ******/
  }   

})();






// MutationObserver starter pack
// target element that we will observe
var target = document.querySelector('div');

// config object, must have at least one of the first 3
var config = {
  childList: true,  // looks for child elements added or removed
  attributes: true,  // looks for when an attribute changes
  characterData: false, // changes to a specific text node
  subtree: false,  // target childs will be observed | on attributes/characterData changes if they observed on target
  attributeFilter: ['one', 'two'],  // filter for attributes | array of attributes that should be observed, in this case only style
  attributeOldValue: false,  // will show oldValue of attribute | on add/remove/change attributes | default: null
  characterDataOldValue: false  // will show OldValue of characterData | on add/remove/change characterData | default: null
};

// subscriber function
function subscriber(mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length && mutation.addedNodes[0].length > 5) {
      mutation.target.innerText = 'too long';
    }
  });
}

// instantiating observer
var observer = new MutationObserver(subscriber);

// observing target
observer.observe(target, config);






//  intersection observer
  // intersection observer when form goes out of view
  const onIntersection = (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        qs('.tin__footer').classList.add('active');
      }
      if (entry.isIntersecting) {
        qs('.tin__footer').classList.remove('active');
      }
    }
  };
  const observer = new IntersectionObserver(onIntersection);
  observer.observe(document.querySelector('.hero-content .capped'));





/* -----  Optimizely ----- */

//Load Optimizely Utils
var utils = optimizely.get('utils');

utils.waitForElement('.classname').then(function () {

});


optimizely.get('state').getVariationMap()
optimizely.get('state').getPageStates
optimizely.get('state').getCampaignStates








/* -----  VWO ----- */
// jquery substitute
vwo_$()


// setInterval to check if element exists

// Avoid multiple setIntervals gettings started.
if (window.vwoElInterval) {
  clearInterval(window.vwoElInterval);
}
window.vwoElInterval = setInterval(function () {
  if (vwo_$(CSS_SELECTOR_PATH_OF_ELEMENT).length) {
    // Make changes that require the element to be present
    clearInterval(window.vwoElInterval);
  }
}, 100);





/* -----  Convert ----- */
// Wrap all code in custom JS editor with:
convert.$(document).ready(function () {
  //code here
});
//convert._$ is a jQuery reference modified in such a way so that the variation code can be executed multiple times while the page is still loaded. We execute the code every 50 ms until there's nothing left inside the code that seems to need processing.

convert._$  //USE IT INSIDE CODE EDITOR
convert.$   //USE IT INSIDE CUSTOM JAVASCRIPT

convert._$('#pageVersion').attr('value', 'T36.1');  /*  <---   T'testNumber'.'versNumber'  */






// manually add cookie
document.cookie = 'tin_test=true; expires=Fri, 04 Jul 2025 08:00:00 GMT; path=/;';
document.cookie = 'optly_venetian_test=true; expires=Fri, 04 Jul 2025 08:00:00 GMT; path=/;';
document.cookie = `optly_venetian_test=true; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;






// add jquery to a page that doesn't have it
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);





// hotjar trigger
setTimeout(function () { hj('trigger', 'LVS-231_V2'); }, 2000);


// google analytics api push event
ga('send', 'event', 'cro conversion', 'HGH6_V1: EZBook Online -- Hero');

ga('send', 'event', 'Category', 'Action', 'Label', 'Value');
// Category (Required) is the name you give to a group of objects you want to track.
// Action (Required) is the type of interaction, such as downloading a document.
// Label (Optional) is useful for summarising what the event is about, such as clicks on navigation menu options.
// Value (Optional) can be used if you’d like to assign a numeric value to your file download.



// scroll from one element on the page to another, with offset for sticky header height
$('.product-info__reviews').click(function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: (($('.elite-reviews').offset().top) - ($('.nav__bar').height()))
  }, 500, 'linear');
});





// hide header on downscroll, show on upscroll
function init() {
  qs('head').insertAdjacentHTML(
    'beforeend',
    `
    <style>
      #persistent-nav-banner {
        transition: 0.3s ease-in;
      }
      .scroll-hidden {
        transform: translateY(-65px);
      }
      .timex .primary-logo {
        transform: translateY(5px);
      }
      .mini-cart-link {
        transform: translateY(7px);
      }
    </style>
  `
  );

  let lastScrollPosition = window.pageYOffset;
  const headerContainer = document.querySelector('#persistent-nav-banner');

  function scrollHide() {
    const newScrollPosition = window.pageYOffset;

    // upward-code  -- show the search bar
    if (lastScrollPosition > newScrollPosition) {
      headerContainer.classList.remove('scroll-hidden');
    }

    // downward-code -- hide search bar
    else if (
      lastScrollPosition < newScrollPosition &&
      window.pageYOffset > 110
    ) {
      headerContainer.classList.add('scroll-hidden');
    }

    lastScrollPosition = newScrollPosition;
  }

  window.addEventListener('scroll', scrollHide);
}






// close modal or menu when clicking off
$(window).click(function () {
  //Hide the menus if visible
  $('#nav-content').css({ 'display': 'none', 'opacity': '0' });
  $('#burger').removeClass('nav__burger--active');
});

$('#nav-content, #burger').click(function (event) {
  event.stopPropagation();
});





// find an element on the page based on partial text string
document.evaluate("//h3[contains(text(),'Types of Plumbing')]", document, null,  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.outerHTML;





// watch screen when scrolling to determine if an element is in the viewport or not, and run function based on that
var el = document.querySelector('elementToWatch');

function isElementInViewport(el) {

  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

function onVisibilityChange(el, callback) {
  var old_visible;
  return function () {
    var visible = isElementInViewport(el);
    if (visible != old_visible) {
      old_visible = visible;
      if (typeof callback == 'function') {
        callback();
      }
    }
  };
}

var handler = onVisibilityChange(el, function () {
  if (isElementInViewport(el)) {
    // element is in viewport
  } else {
    // element is not in viewport
  }

});





// save images from slider for use on another page down the funnel

// delete older image entries
function deleteLocalEntries(){
  let search = 'VEN399';
  let values = Object.keys(localStorage)
               .filter( (key)=> key.startsWith(search) )
               .map( (key)=> localStorage[key] );
  // loop through and delete entries
  for (let i = 0; i < values.length; i++ ){
    window.localStorage.removeItem('VEN399_img'+[i]);
  }
}


// set click event listener on all cta bokking buttons
document.querySelectorAll('.suite-card__cta').forEach(el => {

  el.addEventListener('click', function(){
    
    // first delete all previous entries
    deleteLocalEntries();
    
    this.closest('.suite-card').querySelectorAll('.slick-list .slick-slide:not(.slick-cloned)').forEach(slideImg => {
      // when clicked, copy all the main images from that button's parent and set to loacalStorage
      window.localStorage.setItem('VEN399_img' + slideImg.dataset.slickIndex , slideImg.querySelector('img').src);
      
    });
  });
  
});

// get current slider images
let sliderImages = Object.keys(localStorage)
                  .filter( (key)=> key.startsWith('VEN399') )
                  .map( (key)=> localStorage[key] );









// set a timer with a specified end date with UTC value, display clock on screen
function countdown(endDate) {
  var days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }

  setInterval(calculate, 1000);

  function calculate() {
    var startDate = new Date();
    startDate = startDate.getTime();

    var timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      document.querySelector(".elite-countdown__days .elite-countdown--num").innerHTML = parseInt(days, 10);
      document.querySelector(".elite-countdown__hours .elite-countdown--num").innerHTML = ("0" + hours).slice(-2);
      document.querySelector(".elite-countdown__minutes .elite-countdown--num").innerHTML = ("0" + minutes).slice(-2);
      document.querySelector(".elite-countdown__seconds .elite-countdown--num").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

(function () {
  countdown(new Date(Date.UTC(2018, 11, 01, 0, 0, 0, 0)));
}());






// watch a parent element to see if new child elements are added when scrolling down the page
var domInsertionObserver = new MutationObserver(function (mutation, observer) {
  for (var node = 0; node < mutation.length; node++) {
    // run your function here
  }
});
domInsertionObserver.observe(document.querySelector('.parent-element'), { childList: true });






// check for the browser type

function BrowserDetection() {
  //Check if browser is IE
  if (navigator.userAgent.search("MSIE") & gt; = 0) {
    // insert conditional IE code here
  }
    //Check if browser is Chrome
    else if (navigator.userAgent.search("Chrome") & gt; = 0) {
    // insert conditional Chrome code here
  }
    //Check if browser is Firefox 
    else if (navigator.userAgent.search("Firefox") & gt; = 0) {
    // insert conditional Firefox Code here
  }
    //Check if browser is Safari
    else if (navigator.userAgent.search("Safari") & gt; = 0 & amp; & amp; navigator.userAgent.search("Chrome") & lt; 0) {
    // insert conditional Safari code here
  }
    //Check if browser is Opera
    else if (navigator.userAgent.search("Opera") & gt; = 0) {
    // insert conditional Opera code here
  }
}







// click to copy to clipboard, changing text for 1 second

// set string to be copied
var promoCode = document.querySelector('.promocodeCopy').innerText;

$('.promocodeCopy').click(function () {

  var el = document.createElement('textarea'); // Create a <textarea> element
  el.value = promoCode; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  el.select();
  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element

  $('.promocodeCopy').text('COPIED!'); // change text of button to copied

  setTimeout(function () {
    $('.promocodeCopy').text(promoCode); // return to original text after timeout
  }, 1000);

});






// load a 3rd party script, then do something after
var loadScript = function (location, callback) {
  var fileRef = document.createElement('script');
  fileRef.setAttribute('type', 'text/javascript');

  if (callback) {
    if (fileRef.readyState) {  // IE
      fileRef.onreadystatechange = function () {
        if (fileRef.readyState == 'loaded' || fileRef.readyState == 'complete') {
          fileRef.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Non-IE
      fileRef.onload = function () {
        callback();
      };
    }
  }

  fileRef.setAttribute('src', location);
  document.head.appendChild(fileRef);
};

loadScript('https://www.yelp.com/embed/widgets.js', function () {
  // CALLBACK - code that does something with the data returned by loading the script
});





// GTM Event Tracking
var checkExistGA = setInterval(function () {
  if (jQuery('[src*="https://www.google-analytics.com/analytics.js"]').length) {
    dataLayer.push({
      'event': 'croTest',
      'expName': 'BOM-31',
      'expGroup': 'variation',
      'expVariation': 'V1'
    });
    clearInterval(checkExistGA);
  }
}, 100);





//TripActions Tracking Template

vwo_$(document).ready(function () {
  var waitMarketo = setInterval(function () {
    if (vwo_$('input[name="elitecrotestid__c"]').length) {
      clearInterval(waitMarketo);

      // UPDATE VARIABLE (ex: Test #1, Variation #1 = TPA_01_1)
      var esemVar = 'TPA_00_0'

      // 1 - Add Hidden Attribute
      vwo_$('input[name="elitecrotestid__c"]').attr('value', esemVar);
      console.log('QA - Hidden Marketo Value Updated');

      // 2 - Add Custom Event - Marketo Submission
      vwoGoalContact = MktoForms2.getForm(1587);
      vwoGoalContact.onSuccess(function (values, followUpUrl) {
        window._vis_opt_queue = window._vis_opt_queue || [];
        window._vis_opt_queue.push(function () { _vis_opt_goal_conversion(201); });
        console.log('QA - Marketo Form Submit 1587');
      });

      // 3 - Add HJ Trigger
      hj('trigger', esemVar);
    }
  });
});




// simulate keypress (angular or other fields that require action)
var simulateInput = function (elem) {
  var ev = new Event('input');
  elem.value = elem.value + 'k';
  elem.dispatchEvent(ev);
};
// hide field, if needed
cityField.closest('.step-confirmation__form-row').setAttribute('style', 'display:none;');
// set classes to make valid, if needed
cityField.classList.value = "step-confirmation__form-input step-confirmation__form-input--text ng-dirty ng-valid ng-touched";


// change a select/option 
if ("createEvent" in document) {
  //timeout for Safari, which might need to delay to activate changes
  setTimeout(function () {

    var stateDropdown = document.querySelector('.step-confirmation__form-input[name="state"]');
    stateDropdown.value = "NV";
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    stateDropdown.dispatchEvent(evt);

  }, 2000);
}


// another trigger for select/option changes
document.querySelector('#suite-types').value = 'bestsellers';
    
var evt = new CustomEvent('change');
document.querySelector('#suite-types').dispatchEvent(evt);

