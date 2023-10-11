// ADD COMMAS TO NUMBERS
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}





// DEBOUNCE FUNCTION
export function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;   
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);	
    if (callNow) func.apply(context, args);
  };
};





// MAKE ELEMENTS DRAGABLE

export function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.addEventListener('touchstart', dragMouseDown);

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.touches[0].clientX;
    document.addEventListener('touchend', closeDragElement);
    // call a function whenever the cursor moves:
    document.addEventListener('touchmove', elementDrag);
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.touches[0].clientX;
    pos3 = e.touches[0].clientX;
    // calculate element's current positoin:
    var styleObj = window.getComputedStyle(elmnt);
    var leftValue = parseInt(styleObj.getPropertyValue('left'));
    // get rightEndPoint
    var rightEndPoint = -1*(parseInt(styleObj.getPropertyValue('width')) - window.innerWidth + 6);
    // set the element's new position, setting max and min values:
    if ((leftValue - pos1) < 0 && (leftValue - pos1) > rightEndPoint) {
      elmnt.style.left = (leftValue - pos1) + "px";
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.removeEventListener('touchend', closeDragElement);
    document.removeEventListener('touchmove', elementDrag);
  }
}





// POLL - WITH TIMEOUT
export function pollTimeout(selector, cb, int, exp) {
  setTimeout(function(){if(document.querySelector(selector)) {
    cb();
  }
  else if (exp <= 0) {
    return;
  }
  else {
    exp -= int;
    pollTimeout(selector, cb, int, exp);
  }}, int);
}





// POLL - NO TIMEOUT
export function poll(selector, cb) {
  setTimeout(function(){if(document.querySelector(selector)) {
    cb();
  }
  else {
    poll(selector, cb);
  }}, 50);
}




// GET UTM PARAMETERS
export function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}




// GET SELECTED TEXT
export function getSelectedText() {
  var text = "";
  if (typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
  }
  else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
    text = document.selection.createRange().text;
  }
  return text;
};








// AddEventListner to entire NodeList
export function addEventListenerToNodelist(nodeList, evt, handler) {
  nodeList.forEach(el => el.addEventListener(evt, handler));
}


// Query Selector Shorthand
export function qs(sel) {
  return document.querySelector(sel);
}
export function qsa(sel) {
  return document.querySelectorAll(sel);
}



// Dedupe Array
export function dedupeArray(arr) {
  newArr = arr.filter((item, pos) => arr.indexOf(item) == pos);
  return newArr;
}




// Doc Ready Check
export function checkReady(cb) {
  setTimeout(function() {
    if (document.readyState === 'complete') {
      cb();
    }
    else {
      checkReady(cb);
    }
  }, 50);
}



export function esemSlide(element, config) {

  // set defaults
  config = config || {};
  config.transitionSpeed = config.transitionSpeed || 500;
  config.slideInterval = config.slideInterval || 5000;
  config.dotColor = config.dotColor || '#fff';
  config.autoPlay = config.autoPlay || true;

  var styles = '\
  .esem-carousel {\
    width: 450px;\
    height: 350px;\
  }\
  .esem-carousel-slides {\
    width: 100%;\
    height: 100%;\
    overflow: hidden;\
    position: relative;\
  }\
  .esem-slide {\
    transform: translateX(120%);\
    display: block;\
    height: 100%;\
    width: 100%;\
    position: absolute;\
  }\
  .esem-slide.esem-active {\
    transform: translateX(0px);\
  }\
  .sliding {\
    transition: transform ' + (config.transitionSpeed/1000) + 's;\
    -webkit-transition: transform ' + (config.transitionSpeed/1000) + 's;\
    -moz-transition: transform ' + (config.transitionSpeed/1000) + 's;\
    -o-transition: transform ' + (config.transitionSpeed/1000) + 's;\
    -ms-transition: transform ' + (config.transitionSpeed/1000) + 's;\
  }\
  .esem-slide.sliding {\
    transform: translateX(0px);\
  }\
  .esem-slide.esem-active.sliding {\
    transform: translateX(-120%);\
  }\
  .esem-carousel-dots {\
		width: 100%;\
		margin: 40px auto 0;\
		display: flex;\
		justify-content: center;\
	}\
	.esem-dot {\
		height: 16px;\
		width: 16px;\
    border-radius: 50%;\
    border: 2px solid;\
		border-color: ' + config.dotColor + ';\
		display: inline-block;\
		cursor: pointer;\
		margin: 10px 6px;\
	}\
	.esem-dot.esem-active {\
		background-color: ' + config.dotColor + ';\
	}\
  '

  // Append styles
  document.head.insertAdjacentHTML('beforeend', '<style>' + styles + '</style>');

  // Polyfill
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  // Add carousel, prepend element
  element.insertAdjacentHTML('beforebegin', '<div class="esem-carousel"><div class="esem-carousel-dots"></div></div>');
  document.querySelector('.esem-carousel').insertAdjacentElement('afterbegin', element);

  // Add class to carousel
  element.classList.add('esem-carousel-slides');
  // Add class and attributes to slides, add dots
  for (var i = 0; i < element.childElementCount; i++) {
    element.children[i].classList.add('esem-slide');
    element.children[i].setAttribute('data-index', i);
    document.querySelector('.esem-carousel-dots').insertAdjacentHTML('beforeend', '<span class="esem-dot" data-index="' + i +'"></span>');
  }

  // Make first slide active
  document.querySelector('.esem-slide').classList.add('esem-active');
  document.querySelector('.esem-dot').classList.add('esem-active');

  // Start autoplay
  if (config.autoPlay) {
    var esemAutoplay = setInterval(slide, config.slideInterval);
  }


  // EVENT HANDLERS
  document.querySelectorAll('.esem-slide').forEach(function(element) {
    element.addEventListener('transitionend', transitionHandler);
  });
  document.querySelectorAll('.esem-dot').forEach(function(element) {
    element.addEventListener('click', dotClick);
  });

  // FUNCTIONS
  function slide() {
    // Set the starting point to the currently active slide
    var i = parseInt(document.querySelector('.esem-slide.esem-active').getAttribute('data-index'));
    // Check if at the end of slides, if so start at beginning
    var j = (i + 1) > (document.querySelectorAll('.esem-slide').length - 1) ? 0 : (i + 1);
    // Add sliding class to slides
    document.querySelectorAll('.esem-slide')[i].classList.add('sliding');
    document.querySelectorAll('.esem-slide')[j].classList.add('sliding');
    // Add/remove active class to dots
    document.querySelectorAll('.esem-dot')[i].classList.remove('esem-active');
    document.querySelectorAll('.esem-dot')[j].classList.add('esem-active');
  }

  function transitionHandler(e) {
    // Do not run for transition events of the sliding div's descendants
    if (e.target !== this) {
      return;
    }
    if (this.classList.contains('esem-active')) {
      this.classList.remove('esem-active');
    }
    else {
      this.classList.add('esem-active');
    }
    this.classList.remove('sliding');
  }

  function dotClick() {
    // Return if click is on active dot or carousel is currently sliding
    if (document.querySelector('.esem-dot.esem-active') === this || document.querySelector('.sliding')) {
      return;
    }
    if (config.autoPlay) {
      // Stop Autoplay
      clearInterval(esemAutoplay);
    }
    // Get index of dot clicked
    var i = this.getAttribute('data-index');
    // Slide away current active slide
    document.querySelector('.esem-slide.esem-active').classList.add('sliding');
    // Slide in slide of clicked index
    document.querySelectorAll('.esem-slide')[i].classList.add('sliding');
    // Remove active class of current active dot
    document.querySelector('.esem-dot.esem-active').classList.remove('esem-active');
    // Add active class to clicked dot
    this.classList.add('esem-active');

    if (config.autoPlay) {
      // Restart autoplay after animation has finished
      setTimeout(function() {
	esemAutoplay = setInterval(slide, config.slideInterval);
      }, (config.transitionSpeed + 50));
    }
  }
}