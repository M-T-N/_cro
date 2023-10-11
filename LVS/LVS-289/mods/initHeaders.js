import watchMobileHeaderPrice from './watchers/watchMobileHeaderPrice';

export default function () {
  // Update headers
  const desktopHeaderPriceElmnt = document.querySelector(
    '.progress-navigation__step--active .progress-navigation__step-excerpt'
  );
  const mobileHeaderPriceElmnt = document.querySelector(
    '.progress-navigation__expand-button-price'
  );
  desktopHeaderPriceElmnt
    ? (desktopHeaderPriceElmnt.innerHTML = tinuiti.totalPrice)
    : null;
  mobileHeaderPriceElmnt
    ? (mobileHeaderPriceElmnt.innerHTML = tinuiti.totalPrice)
    : null;
  watchMobileHeaderPrice();
}
