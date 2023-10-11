export function offersTemplate(image, offerLink, tagline, stayDates, bookBefore, offerDetails){


    const offersHTML = `
    <div class="mod-offers-listing--item o-offer" data-offer="hotel">
			<a href="${offerLink}">
				<figure class="o-offer__media scaled">
					<picture class="content img-normal-size">
							<source class="img-normal-size" data-srcset="${image}" media="(min-width: 980px)" srcset="${image}" data-src="${image}">
							<source data-srcset="${image}" srcset="${image}" data-src="${image}">
							<img class=" ls-is-cached lazyloaded" data-src="${image}" alt="Up to 30% off" srcset="${image}" data-srcset="${image}" src="${image}">
					</picture>
					<picture class="content img-large-size">
							<source class="img-large-size" data-srcset="${image}" media="(min-width: 980px)" srcset="${image}" data-src="${image}">
							<source data-srcset="${image}" srcset="${image}" data-src="${image}">
							<img class="lazyload" data-src="${image}" alt="Up to 30% off" srcset="${image}" data-srcset="${image}">
					</picture>
					<h3>
						<span>Up to </span>
						<strong>30% Off</strong>
					</h3>
				</figure>
			</a>
			<div class="js-details-content o-offer__text">
				<div class="o-offer__text__title">
					<p class="o-offer__tagline">${tagline}</p>
					<span class="o-offer__divider o-offer__divider--mobile"></span>
					<p class="o-offer__tag-detail">Up to 30% rates when you book 60 days in advance</p>
				</div>
				<div class="o-offer__text__details">
					<div class="js-details-btn o-offer__details-btn">
						<a class="btn-arrow btn-arrow--down" href="#">
						<span>View Details</span>
						</a>
					</div>
					<div class="o-offer__text__collapsible" style="display: block;">
						<div class="o-offer__text__details--side">
						<div class="o-offer__text__details__item"><span class="bold">Stay Dates:</span> <br>${stayDates}</div>
						<div class="o-offer__text__details__item"><span class="bold">Must Book Before:</span> <br>${bookBefore}</div>
						<div class="o-offer__text__details__item o-offer__text__details__item--mobile"><span class="bold">Offer Details:</span> ${offerDetails}</div>
						</div>
					</div>
					<div class="mod-offers-listing__buttons">
						<a class="cta cta--arrow" href="https://www.venetianlasvegas.com/booking?start_month=current">
							<span>
								<aside class="icon" role="presentation">
										<svg>
												<use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#calendar"></use>
										</svg>
								</aside>
								Book Now
							</span>
							<svg role="presentation">
								<use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#cta_red"></use>
							</svg>
							</a>
							<a class="o-offer__cta btn-arrow btn-arrow--right js-offer-link" href="${offerLink}">
							<span>View Offer</span>
							<svg role="presentation">
								<use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#nav_mobile_caret"></use>
							</svg>
						</a>
					</div>
				</div>
			</div>
    </div>
    `;

    return offersHTML;
  
  
  }