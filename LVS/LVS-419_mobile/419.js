function initialClick() {
  document.querySelector(`.tin-collapse-0`).classList.add("tin-open");
  document.querySelector(".tin-target-0 > span").innerText = "Hide Details";
  document.querySelector("head").insertAdjacentHTML(
    "beforeend",
    `
  <style type="text/css">
        .tin-target-0::after {
          transform: rotate(180deg);
        }
  </style>
`
  );
}

function detailClick(e) {
  if (!document.querySelector(`.tin-collapse-${e.target.classList[1].slice(-1)}`).classList.contains("tin-open")) {
    e.target.children[0].innerText = "Hide Details";
    document.querySelector("head").insertAdjacentHTML(
      "beforeend",
      `
  <style type="text/css">
        .${e.target.classList[1]}::after {
          transform: rotate(180deg);
        }
  </style>
`
    );

    document.querySelector(`.tin-collapse-${e.target.classList[1].slice(-1)}`).classList.add("tin-open");
  } else {
    e.target.children[0].innerText = "View Details";
    document.querySelector("head").insertAdjacentHTML(
      "beforeend",
      `
  <style type="text/css">
        .${e.target.classList[1]}::after {
          transform: rotate(0deg);
        }
  </style>
`
    );

    document.querySelector(`.tin-collapse-${e.target.classList[1].slice(-1)}`).classList.remove("tin-open");
  }
}

(function () {
  function cleanImageUrl(url) {
    url = url.slice(5);
    url = url.slice(0, url.length - 2);
    return url;
  }

  function cleanText(offer) {
    offer = offer.substr(33);
    return offer;
  }

  function init() {
    let image;
    let tinHolder = document.createElement("div");
    tinHolder.classList.add("tin-offer-holder");
    document.querySelectorAll(".glide__slide-content").forEach((element, index) => {
      document.querySelector(".dashboard-offers").appendChild(tinHolder.cloneNode(true));
      image = document.querySelectorAll("li.glide__slide")[index].style.backgroundImage;
      let cleanImage = cleanImageUrl(image);

      document.querySelectorAll(".tin-offer-holder")[index].innerHTML = `
				<a class="tin-link" href="${element.querySelector("a").href}"> <img class="tin-image" src='${cleanImage}'></img></a>
				<div class="tin-details-content tin-details-${index}">
				<div class="tin-offer-title">${element.querySelector("h1").innerText}</div>
				<span class="tin-divider"></span>
				<div class="tin-offer-subtitle"></div>    
				<div class="tin-offer-detail-holder">
					<div class="tin-detail-button">
						<a class="tin-collapse-button tin-target-${index}">
							<span>View Details</span>
						</a>
					</div>
					<div class="tin-collapsible tin-collapse-${index}">
						<div  >
							<span class="tin-bold">Stay Dates: </span>${element.querySelector("h2").innerText}
						</div>
						<div class="tin-bold">Offer Details: </div>
						<div class="tin-offer-two"> </div>
						<div class="tin-offer-three"> </div>
						</div>
					</div>
					<div class="tin-offer-listing-buttons">
							<a class="cta cta--arrow" href="https://www.venetianlasvegas.com/booking?start_month=current">
									<span>
											<aside class="icon" role="presentation">
													<svg>
															<use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#calendar">
															</use>
													</svg>
											</aside>
											Book Now
									</span>
									<svg role="presentation"> 
											<use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#cta_red">
											</use>
									</svg>
							</a>
							<a class="o-offer__cta btn-arrow btn-arrow--right js-offer-link" href="${element.querySelector("a").href}">
									<span> View Offer </span>
									<svg role="presentation">
											<use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#nav_mobile_caret"></use>
									</svg>
							</a>
					</div>
				</div>
			`;
    });

    let tinOffer = 0;
    let currentText;
    // featured offers
    document.querySelectorAll(".glide__slide-content__cta").forEach(function (el) {
      fetch(el.href)
        .then(function (response) {
          switch (response.status) {
            // status "OK"
            case 200:
              return response.text();
            // status "Not Found"
            case 404:
              throw response;
          }
        })
        .then(function (template) {
          const parser = new DOMParser();
          const html = parser.parseFromString(template, "text/html");

          html.querySelectorAll(".offer-details__list li").forEach(function (el, index) {
            currentText = cleanText(el.innerText.toString());
            if (index == 0) {
              document.querySelector(`.tin-details-${tinOffer} > .tin-offer-subtitle`).innerText = currentText;
            } else if (index == 1) {
              document.querySelector(`.tin-details-${tinOffer} > .tin-offer-detail-holder > .tin-collapsible > .tin-offer-two`).innerText = currentText;
            } else if (index == 2) {
              document.querySelector(`.tin-details-${tinOffer} > .tin-offer-detail-holder > .tin-collapsible > .tin-offer-three`).innerText = currentText;
            }
          });
          tinOffer += 1;
        })
        .catch(function (response) {
          // "Not Found"
          //console.log(response.statusText);
        });
    });

    document.querySelectorAll(".tin-offer-detail-holder").forEach((element) => {
      element.addEventListener("click", detailClick);
    });
    initialClick();
  }

  console.log("VEN-419 | MOBILE Grazie Offers Dashboard");

  function poll(sel, cb) {
    setTimeout(function () {
      if (document.querySelector(sel)) cb();
      else poll(sel, cb);
    }, 50);
  }

  poll(".glide__slide-content__cta", init);
})();
