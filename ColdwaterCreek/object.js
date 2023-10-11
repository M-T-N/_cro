let productObj = {};

let defaultImg = 'https://staging-web-coldwatercreek.demandware.net/on/demandware.static/-/Sites-itemmaster_CWC/default/v7270aad6798190c67c38626722a72d219821a301/large/19826_1329_UGC.jpeg'

const thisHref = window.location.href;
const includesProduct = (term) => {
  if (thisHref.includes(term)){
    return thisHref;
  }
};

switch (thisHref) {
	case includesProduct('/desert-vista-sweater'):
		productObj.imgSrc = defaultImg;
		break;
	case includesProduct('/shaker-detail-button-cardigan'):
		productObj.imgSrc = defaultImg;
		productObj.color = 'Dark Olive'
		break;
	case includesProduct('/faux-suede-skirt'):
		if (thisHref.includes('kfrick_ig3')) {
			productObj.imgSrc = defaultImg;
		}
		if (thisHref.includes('scookchazen_ig3')) {
			productObj.imgSrc = defaultImg;
		}
		break;
	case includesProduct('/knit-boyfriend-jacket'):
		productObj.imgSrc = defaultImg;
		productObj.color = 'Black'
		break;
	case includesProduct('/lightweight-windbreaker'):
		if (thisHref.includes('emassey_ig5')) {
			productObj.imgSrc = defaultImg;
			productObj.color = 'Cinnamon'
		}
		if (thisHref.includes('/shamilton_ig12')) {
			productObj.imgSrc = defaultImg;
			productObj.color = 'Olive'
		}
		break;	
	case includesProduct('/knit-denim-jacket'):
		productObj.imgSrc = defaultImg;
		productObj.color = 'Medium Wash'
		break;	
	case includesProduct('/vest-for-all-seasons'):
		productObj.imgSrc = defaultImg;
		productObj.color = 'Spice'
		break;
	case includesProduct('/spiced-plaid-vest-for-all-seasons'):
		productObj.imgSrc = defaultImg;
		productObj.color = 'Spice'
		break;
	case includesProduct('/paxton-plaid-no-iron-shirt'):
		productObj.imgSrc = defaultImg;
		break;
	case includesProduct('/%23best-cotton-v-neck'):
		productObj.imgSrc = defaultImg;
		break;
	case includesProduct('/all-season-jacket'):
		productObj.imgSrc = defaultImg;
		productObj.color = 'Honey'
		break;
	case includesProduct('/urban-trails-knit-denim-jacket'):
		productObj.imgSrc = defaultImg;
		productObj.color = 'Sedona'
		break;
	case includesProduct('/vintage-wash-mix-pattern-cardigan'):
		productObj.imgSrc = defaultImg;
		productObj.color = 'Spice'
		break;
}