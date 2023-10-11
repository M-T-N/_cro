function initDesktop() {
  // remove old mobile app link
  document.querySelector(
    '.nav-dropdown.wu-header__dropdown__items a[amplitude-id="menu-mobile-app"] span'
  ).innerText = 'Download mobile app';
  document.querySelector(
    '.nav-dropdown.wu-header__dropdown__items a[amplitude-id="menu-mobile-app"]'
  ).href = 'https://smart.link/mcjm052167tgz?creative_id=HamburgerMenuTest2';
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
