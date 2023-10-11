import { qs,qsa } from "../utils/qs";
import { hero } from './hero';
import { featured } from './featured';
import { offers2 } from './offers2';
import { cardSorter } from './cardSorter';


export function pageAssemble2() {

	// new hero
	hero();

	// featured section
	featured();

	// offers
	offers2();

	// card sorter
	cardSorter();


}