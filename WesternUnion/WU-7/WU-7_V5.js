function init() {
  document.querySelector('h1[role="heading"]').innerText =
    'Send money to digital wallets, bank accounts or for cash pick up';
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
