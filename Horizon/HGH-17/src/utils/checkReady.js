// Doc Ready Check
export default function checkReady(cb) {
  setTimeout(function() {
    if (document.readyState === 'complete') {
      cb();
    }
    else {
      checkReady(cb);
    }
  }, 50);
}