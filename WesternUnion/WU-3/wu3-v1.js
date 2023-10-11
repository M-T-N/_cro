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
        <a amplitude-id="icon-download-app-appStore" href="https://smart.link/1vrsqfbqotz8s?creative_id=banner-button&site_id=organic-web&utm_campaign=organic-web&utm_content=banner-button&utm_medium=e-web&utm_source=web">
          <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png">
        </a>
      </div>
      <div class="wuApps__buttons--google">
        <a amplitude-id="icon-download-app-googlePlay" href="https://smart.link/1vrsqfbqotz8s?creative_id=banner-button&site_id=organic-web&utm_campaign=organic-web&utm_content=banner-button&utm_medium=e-web&utm_source=web">
          <img src="https://i.imgur.com/JocW1kc.png">
        </a>
    </div>
  </div>
`;

const appButtonsLogin = `
  <div class="wuApps__buttons">
      <div class="wuApps__buttons--apple">
        <a amplitude-id="icon-download-app-appStore" href="https://smart.link/dtzciz21o9snk?creative_id=banner-button&site_id=organic-web&utm_campaign=organic-web&utm_content=banner-button&utm_medium=e-web&utm_source=web">
          <img src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg">
        </a>
      </div>
      <div class="wuApps__buttons--google">
        <a amplitude-id="icon-download-app-googlePlay" href="https://smart.link/dtzciz21o9snk?creative_id=banner-button&site_id=organic-web&utm_campaign=organic-web&utm_content=banner-button&utm_medium=e-web&utm_source=web">
          <img src="https://i.imgur.com/JocW1kc.png">
        </a>
    </div>
  </div>
`;

const appButtonsStart = `
  <div class="wuApps__buttons">
      <div class="wuApps__buttons--apple">
        <a amplitude-id="icon-download-app-appStore" href="https://smart.link/vldvnc2gv6gfi?creative_id=banner-button&site_id=organic-web&utm_campaign=organic-web&utm_content=banner-button&utm_medium=e-web&utm_source=web">
          <img src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg">
        </a>
      </div>
      <div class="wuApps__buttons--google">
        <a amplitude-id="icon-download-app-googlePlay" href="https://smart.link/vldvnc2gv6gfi?creative_id=banner-button&site_id=organic-web&utm_campaign=organic-web&utm_content=banner-button&utm_medium=e-web&utm_source=web">
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
      <p>Want to send money, track transfers, pay bills, and review exchange rates? Download the Western Union® app and get started right now.</p>
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
      <p>Log in, download the Western Union® app, send money around the world digitally, or for fast cash pickup.</p>
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
      <p>Download the Western Union® app, select your receiver’s country and easily send money for fast cash pickup.</p>
      ${appButtonsStart}
    </div>
  `
  );
}
