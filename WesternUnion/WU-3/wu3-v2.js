document.querySelector('head').insertAdjacentHTML(
  'beforeend',
  `
    <style>
      .wuApps {
        padding: 10px 20px;
      }
      .wuApps p {
        font-family: "Open Sans", sans-serif;
        font-weight: 900;
        font-size: 18px;
        line-height: 1.4;
      }
      .wuApps__buttons {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
      }
      .wuApps__buttons > div {
        width: 48%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .wuApps__buttons .wuApps__buttons--apple {
        justify-content: flex-start;
      }      
      .wuApps__buttons > div a {
        width: 100%;
      }
      .wuApps__buttons > div.wuApps__buttons--apple a{
        width: 90%; 
      }
      .wuApps__buttons > div a img {
        width: 100%;
      }
    </style>
  `
);

const appButtonsRegister = `
  <div class="wuApps__buttons">
      <div class="wuApps__buttons--apple">
        <a amplitude-id="icon-download-app-appStore" href="https://smart.link/to7xdz1wkyjyk?creative_id=module-button&site_id=organic-web&utm_campaign=organic-web&utm_content=module-button&utm_medium=e-web&utm_source=web">
          <img src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg">
        </a>
      </div>
      <div class="wuApps__buttons--google">
        <a amplitude-id="icon-download-app-googlePlay" href="https://smart.link/to7xdz1wkyjyk?creative_id=module-button&site_id=organic-web&utm_campaign=organic-web&utm_content=module-button&utm_medium=e-web&utm_source=web">
          <img src="https://i.imgur.com/JocW1kc.png">
        </a>
    </div>
  </div>
`;

const appButtonsLogin = `
  <div class="wuApps__buttons">
      <div class="wuApps__buttons--apple">
        <a amplitude-id="icon-download-app-appStore" href="https://smart.link/cmnww9c7ryo6o?creative_id=module-button&site_id=organic-web&utm_campaign=organic-web&utm_content=module-button&utm_medium=e-web&utm_source=web">
          <img src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg">
        </a>
      </div>
      <div class="wuApps__buttons--google">
        <a amplitude-id="icon-download-app-googlePlay" href="https://smart.link/cmnww9c7ryo6o?creative_id=module-button&site_id=organic-web&utm_campaign=organic-web&utm_content=module-button&utm_medium=e-web&utm_source=web">
          <img src="https://i.imgur.com/JocW1kc.png">
        </a>
    </div>
  </div>
`;

const appButtonsStart = `
  <div class="wuApps__buttons">
      <div class="wuApps__buttons--apple">
        <a amplitude-id="icon-download-app-appStore" href="https://smart.link/m3v01iwh2jiw7?creative_id=module-button&site_id=organic-web&utm_campaign=organic-web&utm_content=module-button&utm_medium=e-web&utm_source=web">
          <img src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg">
        </a>
      </div>
      <div class="wuApps__buttons--google">
        <a amplitude-id="icon-download-app-googlePlay" href="https://smart.link/m3v01iwh2jiw7?creative_id=module-button&site_id=organic-web&utm_campaign=organic-web&utm_content=module-button&utm_medium=e-web&utm_source=web">
          <img src="https://i.imgur.com/JocW1kc.png">
        </a>
    </div>
  </div>
`;

if (document.URL === 'https://www.westernunion.com/us/en/web/user/register') {
  document.querySelector('#optimus-body-section').insertAdjacentHTML(
    'afterend',
    `
    <div class="wuApps">
      <p>Register your free account and start sending money to loved ones around the world, anytime, with the Western Union® app.</p>
      ${appButtonsRegister}
    </div>
  `
  );
}

if (document.URL === 'https://www.westernunion.com/us/en/web/user/login') {
  document.querySelector('#optimus-body-section').insertAdjacentHTML(
    'afterend',
    `
    <div class="wuApps">
      <p>Log in and download the Western Union® app to track an ongoing money transfer or to start a new transaction.</p>
      ${appButtonsLogin}
    </div>
  `
  );
}

if (
  document.URL === 'https://www.westernunion.com/us/en/web/send-money/start'
) {
  document.querySelector('#optimus-body-section').insertAdjacentHTML(
    'afterend',
    `
    <div class="wuApps">
      <p>Send money home anytime, from anywhere with the Western Union® app. Download the app and start your next money transfer today.</p>
      ${appButtonsStart}
    </div>
  `
  );
}
