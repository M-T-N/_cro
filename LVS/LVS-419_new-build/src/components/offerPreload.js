import { qs } from "../utils/qs";
import { featuredTemplatePreload } from "./featuredTemplate";

export function offerPreload() {

	const image = qs('.glide__slide--active').style.backgroundImage.match(/\"(.*?)\"/)[1];
	const offerLink = qs('.glide__slide--active a').href;

	// insert new html
	qs('.mod-offers-listing__featured').insertAdjacentHTML('beforeend', featuredTemplatePreload(image, offerLink));

}