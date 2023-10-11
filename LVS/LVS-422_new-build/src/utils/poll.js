// POLL - NO TIMEOUT
export default function poll(selector, cb) {
    setTimeout(function(){if(document.querySelector(selector)) {
      cb();
    }
    else {
      poll(selector, cb);
    }}, 50);
  }