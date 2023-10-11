function init() {
  document.querySelector('h1[role="heading"]').innerText =
    'Superfast money transfers around the world';
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
