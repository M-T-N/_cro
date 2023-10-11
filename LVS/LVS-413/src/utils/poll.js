// POLL - NO TIMEOUT
export default function poll(selector, cb) {
  setTimeout(function(){if(document.querySelector(selector) && window.jQuery) {
    cb();
  }
  else {
    poll(selector, cb);
  }}, 50);
}