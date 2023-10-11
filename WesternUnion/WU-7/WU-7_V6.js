function init() {
  document
    .querySelector('head')
    .insertAdjacentHTML(
      'beforeend',
      '<style>h1[role="heading"]{line-height: 1.15;}</style>'
    );

  document.querySelector('h1[role="heading"]').innerText =
    'Bank to bank transfers to select countries starting at a $0 transfer fee¹';
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
