(function(){
  
  function init() {
  
		// css
		document.querySelector('head').insertAdjacentHTML('beforeend', `<style>
		.base-lockup__heading {
			margin-bottom: 20px;
		}
		.base-lockup__social-proof {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 15px;
		}
		.base-lockup__social-proof__item {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
		.base-lockup__social-proof__item__stat {
			color:#00009e;
			font-family: rhode-wide,sans-serif;
			font-size: 28px;
		}
		.base-lockup__social-proof__item__divider {
			border: 1px solid #000;
			width: 40px;
			margin: 3px 0 6px;
		}
		.base-lockup__social-proof__item__source {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			text-align: left;
			font-family: acumin-pro,sans-serif;
			color: #000;
		}
		.base-lockup__social-proof__item__source__primary {
			font-size: 10px;
			margin-bottom: 5px;
		}
		.base-lockup__social-proof__item__source__subsource {
			font-size: 10px;
		}
		
		@media (min-width: 640px) {
			.hero-home__inner {
				width: 100%;
				justify-content: center;
				margin: 0;
			}
			.hero-home__content-wrap {
				margin-left: 0;
				min-width: 650px;
				flex: 0 0 100%;
			}
			.hero-home--b .hero-home__content-wrap {
				margin-left: 0;
			}
			.base-lockup__social-proof {
				grid-gap: 40px;
				padding: 0 40px;
				grid-template-columns: 1.5fr 1fr 1.5fr;
			}
			.base-lockup__social-proof__item__source__primary {
				font-size: 12px;
			}			
		}
		@media (min-width: 1024px) {
			.hero-home--b .hero-home__content-wrap {
				margin-left: 0;
			}
		}
		</style>`)

    // html
		document.querySelector('.hero-home__content .base-lockup__heading').insertAdjacentHTML('afterend', `
		<div class="base-lockup__social-proof">
			<div class="base-lockup__social-proof__item">
				<div class="base-lockup__social-proof__item__stat">
					<h3>#88</h3>
				</div>
				<div class="base-lockup__social-proof__item__divider"></div>
				<div class="base-lockup__social-proof__item__source">
					<div class="base-lockup__social-proof__item__source__primary">
						<p>Top Public Schools 2024</p>
					</div>
					<div class="base-lockup__social-proof__item__source__subsource">
						<p>(U.S. News & World Report)</p>
					</div>					
				</div>
			</div>
			<div class="base-lockup__social-proof__item">
				<div class="base-lockup__social-proof__item__stat">
					<h3>20</h3>
				</div>
				<div class="base-lockup__social-proof__item__divider"></div>
				<div class="base-lockup__social-proof__item__source">
					<div class="base-lockup__social-proof__item__source__primary">
						<p>Average Class Size</p>
					</div>					
				</div>
			</div>
			<div class="base-lockup__social-proof__item">
				<div class="base-lockup__social-proof__item__stat">
					<h3>4th</h3>
				</div>
				<div class="base-lockup__social-proof__item__divider"></div>
				<div class="base-lockup__social-proof__item__source">
					<div class="base-lockup__social-proof__item__source__primary">
						<p>Fastest-Growing Public Research University in the Nation</p>
					</div>
					<div class="base-lockup__social-proof__item__source__subsource">
						<p>(The Chronicle of Higher Education)</p>
					</div>					
				</div>
			</div>
		</div>
		`);
  }
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.hero-home__content .base-lockup__heading', init);

})();