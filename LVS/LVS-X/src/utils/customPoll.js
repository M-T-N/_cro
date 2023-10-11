export default function poll(obj, cb) {
    setTimeout(function(){if(window[obj] && window[obj].videoModal && window[obj].videoModal._buttons && window[obj].videoModal._buttons.length) {
      cb();
    }
    else {
      poll(obj, cb);
    }}, 50);
  }