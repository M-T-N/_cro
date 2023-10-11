import { qs, qsa } from "../utils/qs";
import { offerFetch } from "./offerFetch";
import { buildWrappers } from "./buildWrappers";


export function pageAssemble(){

  // setup containers for new offer layouts
  buildWrappers();

  // fetch the offer and put them on the page
  offerFetch();

  // remove the original image slider
  qs('.dashboard-offers__carousel').remove();

  // remove previous 'featured offers' heading
  qs('.featured-offers__title').remove();
  
}