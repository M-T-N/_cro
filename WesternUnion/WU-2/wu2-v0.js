document.querySelector('head').insertAdjacentHTML(
  'beforeend',
  `
  <style>
    .appModal {
      height: 100vh;
      width: 100vw;
      background: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: 100;
    }
    .appModal__container {
      background: #000;
      color: #fff;
      max-width: 800px;
      display: flex;
      padding: 45px 30px 35px;
      position: relative;
    }
    .appModal__text {
      margin-right: 20px;
      font-family: Euclid WU,Noto Sans,Arial,sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .appModal__text h2 {
      margin-bottom: 20px;
      font-size: 30px;
    }
    .appModal__text p {
      display: flex;
      align-items: center;
      line-height: 1;
      margin: 0 0 15px 0;
    }
    .appModal__text span {
        font-size: 15px;
        transform: translateY(-10px);
        font-weight: 100;
        display: inline-block;
    }
    .appModal__text .icon-check svg {
      width: 18px;
      height: 18px;
    }
    .appModal__qr {
      width: 400px;
    }
    .appModal__close {
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 25px;
      cursor: pointer;
    }
    .tin__app-btn-text {
      padding-top: 20px;
    }
    .tin__app-btn-text p {
      font-size: 19px;
    }
    .component-8 .container > .row > .col-16 .col-16.d-flex.mar-sm-tp.mar-M-xs-tp {
      flex-direction: column;
    }
    .component-8 .container > .row > .col-16 .col-16.d-flex.mar-sm-tp.mar-M-xs-tp .row:first-of-type {
      flex-wrap: nowrap;
    }
    @media (min-width: 1235px) {
      .tin__app-btn-text p {
        white-space: nowrap;
      }
      .component-8 .container > .row > .col-16 {
        z-index: 2;
      }
      .component-8 .container > .row > .col-14 {
        z-index: 1;
      }
    }
  </style>
`
);

const checkMark = `
    <i data-grunticon-embed="" class="wu-icon icon-check d-inline-flex mar-xs-rt" data-wu-icon="icon-check" style="background-image: none;">
       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
          <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
          <title>0081_done</title>
          <desc>Created with Sketch.</desc>
          <g id="0081_done" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
             <path d="M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M24.22,9.11 L14,19.335 L7.78,13.11 L6,14.89 L14,22.89 L26,10.89 L24.22,9.11 Z" id="Combined-Shape" fill="#ffffff"></path>
          </g>
       </svg>
    </i>
`;

const appModal = `
  <div class="appModal">
    <div class="appModal__container">
      <div class="appModal__text">
          <h2>Download the Western Union<span>&reg;</span><br>app in 2 Easy Steps</h2>
          <p>${checkMark} Scan the QR Code with your phone</p>
          <p>${checkMark} Download the app in your device's app store</p>
          <p>Open the app to start sending money to loved ones around the world today.</p>
      </div>
      <div class="appModal__qr">
          <img src="https://www.westernunion.com/web-assets/wu-qr-english.svg">
      </div>
      <div class="appModal__close">&#x2716;</div>
    </div>
  </div>
`;

const appButtonText = `
  <div class="tin__app-btn-text">
    <p class="font-body-sm text-wu-dark">Click on the app icons above to scan the QR code and download the app.</p>
  </div>
`;

// add new text below buttons
document
  .querySelector('.component-0 .container .col.col-16.col-XL-14.mar-sm-bm')
  .insertAdjacentHTML('beforeend', appButtonText);

document.querySelector(
  '.component-9 .container > .row > .col-16 .col-16.d-flex.mar-sm-tp.mar-M-xs-tp'
).innerHTML = `
    <div class="row">
      <a href="https://smart.link/5acbed12c0841" class="d-block mar-xs-rt" target="_blank" data-linkname="app-download-appStore" id="btn-app-download-appStore" amplitude-id="icon-download-app-appStore">
        <img
          class="w-auto"
          role="img"
          aria-label="app-store-1"
          data-lazyload-mobile-desktop-src="/staticassets/static/d0f9a0dc8ae0774aae6dca197d8b6f26/app-store-1.svg"
          alt="app-store-1"
          src="/staticassets/static/d0f9a0dc8ae0774aae6dca197d8b6f26/app-store-1.svg"
        />
      </a>
      <a href="https://smart.link/5acbed12c0841" class="d-block" target="_blank" data-linkname="app-download-googlePlay" id="btn-app-download-googlePlay" amplitude-id="icon-download-app-googlePlay">
        <img
          class="w-auto"
          role="img"
          aria-label="google-play-1"
          data-lazyload-mobile-desktop-src="/staticassets/static/3e1c0f5482a7543e843fd1bece4ffbdc/google-play-1.svg"
          alt="google-play-1"
          src="/staticassets/static/3e1c0f5482a7543e843fd1bece4ffbdc/google-play-1.svg"
        />
      </a>
    </div>
    <div class="row">
      ${appButtonText}
    </div>
`;

document
  .querySelector(
    '.component-9 .container > .row > .col-16 .col-16.d-flex.mar-sm-tp.mar-M-xs-tp'
  )
  .classList.remove('d-flex');

function closeModal() {
  document.querySelector('.appModal').remove();
  document.querySelector('body').setAttribute('style', 'overflow: auto;');
}

function openModal() {
  // insert modal html
  document.querySelector('body').insertAdjacentHTML('afterbegin', appModal);
  // stop page from scrolling
  document.querySelector('body').setAttribute('style', 'overflow: hidden;');
  // click event listener to close modal
  document.querySelector('.appModal').addEventListener('click', closeModal);
}

document
  .querySelectorAll(
    'a[href="https://smart.link/rlf60ipsdti4z"], a[href="https://smart.link/gal5epm8yp94v"], a[href="https://smart.link/5acbed12c0841"], a[href="https://smart.link/5acb915645e76"]'
  )
  .forEach((el) => {
    // stop app store buttons from opening new pages
    el.setAttribute('onclick', 'return false');
    el.addEventListener('click', openModal);
  });
