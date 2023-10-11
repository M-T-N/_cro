function init() {
  document.querySelector('h1[role="heading"]').innerText =
    'Join the millions of consumers sending money with Western Union';
}

poll('h1[role="heading"]', init);

function poll(selector, cb) {
  setTimeout(function () {
    if (document.querySelector(selector)) {
      cb();
    } else {
      poll(selector, cb);
    }
  }, 50);
}
