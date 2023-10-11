function initDesktop() {
  // remove old mobile app link
  document
    .querySelector(
      '.nav-dropdown.wu-header__dropdown__items a[amplitude-id="menu-mobile-app"]'
    )
    .closest('.nav-item')
    .remove();

  // add new link
  document
    .querySelector('.nav-dropdown.wu-header__dropdown__items li:nth-child(3)')
    .insertAdjacentHTML(
      'beforebegin',
      `
      <li class="nav-item">
          <a href="/us/en/mobile-app.html" amplitude-id="menu-mobile-app" class="nav-item__link" role="menuitem">
              <span class="white-space-nowrap nav-item__title">Download mobile app</span>
          </a>
      </li>
      `
    );
}

function initMobile() {
  // add link
  document
    .querySelector('.wu-mobile-menu-content .nav-dropdown li:first-child')
    .insertAdjacentHTML(
      'beforebegin',
      `
      <li class="nav-item pad-xs-all">
        <a href="/us/en/mobile-app.html" amplitude-id="menu-mobile-app" class="nav-item__link" role="menuitem">
            <span class="nav-item__title font-body-xs white-space-nowrap">Download mobile app</span>
        </a>
      </li>
      `
    );
}

poll(
  '.nav-dropdown.wu-header__dropdown__items a[amplitude-id="menu-mobile-app"]',
  initDesktop
);

poll('.wu-mobile-menu-content .nav-dropdown li:first-child', initMobile);

function poll(selector, cb) {
  setTimeout(function () {
    if (document.querySelector(selector)) {
      cb();
    } else {
      poll(selector, cb);
    }
  }, 50);
}
