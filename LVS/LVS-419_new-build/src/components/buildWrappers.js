import { qs, qsa } from "../utils/qs";


export function buildWrappers(){


  qs('.dashboard-offers__carousel').insertAdjacentHTML('beforebegin', `
		<div class="mod-offers-listing">
			<div class="mod-offers-listing__featured">
				<h3 class="mod-offers-listing__featured__header">My Featured Offers</h3>
			</div>
			<div class="mod-offers-listing--group-wrapper">
				<div class="mod-offers-listing--group">
					<div class="mod-offers-listing--group--wrap">
						<div class="mod-offers-listing--group__category"></div>
					</div>
				</div>
			</div>
		</div>
	`);


}