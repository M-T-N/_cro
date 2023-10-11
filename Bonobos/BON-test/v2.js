if (document.querySelectorAll('.toggle_item_selectedItem__1Vmmo').length == 2) {
  // add active state to 2nd option group
  document
    .querySelector(
      '.product-options-component .options_input__3d5up:nth-child(2)'
    )
    .classList.add('tin__option--active');

  // hide all after 2nd form
  document
    .querySelectorAll(
      '.product-options-component .options_input__3d5up:not(.options_input__3d5up:nth-child(-n+2))'
    )
    .forEach(function (el) {
      el.classList.add('form-hidden');
    });
}

if (document.querySelectorAll('.toggle_item_selectedItem__1Vmmo').length == 3) {
  // add active state to 3nd option group
  document
    .querySelector(
      '.product-options-component .options_input__3d5up:nth-child(3)'
    )
    .classList.add('tin__option--active');

  // hide all after 3nd form
  document
    .querySelectorAll(
      '.product-options-component .options_input__3d5up:not(.options_input__3d5up:nth-child(-n+3))'
    )
    .forEach(function (el) {
      el.classList.add('form-hidden');
    });
}

if (document.querySelectorAll('.toggle_item_selectedItem__1Vmmo').length == 4) {
  // add active state to 4nd option group
  document
    .querySelector(
      '.product-options-component .options_input__3d5up:nth-child(4)'
    )
    .classList.add('tin__option--active');

  // hide all after 4nd form
  document
    .querySelectorAll(
      '.product-options-component .options_input__3d5up:not(.options_input__3d5up:nth-child(-n+4))'
    )
    .forEach(function (el) {
      el.classList.add('form-hidden');
    });
}

if (document.querySelectorAll('.toggle_item_selectedItem__1Vmmo').length == 5) {
  // add active state to 5nd option group
  document
    .querySelector(
      '.product-options-component .options_input__3d5up:nth-child(5)'
    )
    .classList.add('tin__option--active');

  // hide all after 5nd form
  document
    .querySelectorAll(
      '.product-options-component .options_input__3d5up:not(.options_input__3d5up:nth-child(-n+5))'
    )
    .forEach(function (el) {
      el.classList.add('form-hidden');
    });
}
