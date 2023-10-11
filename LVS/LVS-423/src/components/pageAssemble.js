import { qs,qsa } from "../utils/qs";
import { hero } from './hero';
import { featured } from './featured';
import { offers } from './offers';
import { cardSorter } from './cardSorter';


export function pageAssemble() {

	// new hero
	hero();

	// featured section
	featured();

	// offers
	offers();

	// card sorter
	cardSorter();



}