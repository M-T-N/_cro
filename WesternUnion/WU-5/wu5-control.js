function initDesktop() {
  // add new link
  document.querySelector('a[amplitude-id="menu-mobile-app"]').href =
    'https://smart.link/8cx5ys19bmbhh?creative_id=HamburgerMenuControl';
}

poll(
  '.nav-dropdown.wu-header__dropdown__items a[amplitude-id="menu-mobile-app"]',
  initDesktop
);

function poll(selector, cb) {
  setTimeout(function () {
    if (document.querySelector(selector)) {
      cb();
    } else {
      poll(selector, cb);
    }
  }, 50);
}
