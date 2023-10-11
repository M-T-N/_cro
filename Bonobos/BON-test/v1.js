function init() {
  document.querySelector('head').insertAdjacentHTML(
    'beforeend',
    `
    <style>
      .form-hidden {
        opacity: 0;
        height: 0;
      }
      .options_input__3d5up, .options_input__3d5up button {
        transition: all 0.2s ease-in;
      }
      .tin__option--active {
        background: #e4e4e4;
        padding: 10px;
      }
      .tin__option--active button {
        background: #e4e4e4;
        right: 10px !important;
      }
    </style>
  `
  );

  // hide lower inputs
  document
    .querySelectorAll(
      '.product-options-component .options_input__3d5up:not(.options_input__3d5up:nth-child(-n+2))'
    )
    .forEach(function (el) {
      el.classList.add('form-hidden');
    });

  // add active state to 2nd option group
  document
    .querySelector(
      '.product-options-component .options_input__3d5up:nth-child(2)'
    )
    .classList.add('tin__option--active');

  // eventlistener for options
  document
    .querySelectorAll(
      '.options_input__3d5up:not(.options_input__3d5up:nth-child(1)) .toggle-item-component'
    )
    .forEach(function (el) {
      const elParent = el.closest('.options_input__3d5up');
      const nextElParent = el.closest('.options_input__3d5up')
        .nextElementSibling;
      el.addEventListener('click', function () {
        if (
          !el.classList.contains('toggle_item_soldOut__3bsdb') &&
          nextElParent != null
        ) {
          elParent.classList.remove('tin__option--active');
          nextElParent.classList.add('tin__option--active');
          nextElParent.classList.remove('form-hidden');
        } else {
          elParent.classList.remove('tin__option--active');
        }
      });
    });
}

poll('.product-options-component .options_input__3d5up:last-child', init);

function poll(selector, cb) {
  setTimeout(function () {
    if (document.querySelector(selector)) {
      cb();
    } else {
      poll(selector, cb);
    }
  }, 50);
}
