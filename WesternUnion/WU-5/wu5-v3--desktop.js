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
          <a href="https://smart.link/eol8dhidwtikm?creative_id=HamburgerMenuTest3" amplitude-id="menu-mobile-app" class="nav-item__link" role="menuitem">
              <span class="white-space-nowrap nav-item__title">Mobile app</span>
          </a>
      </li>
      `
    );
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
