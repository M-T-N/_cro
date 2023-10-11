import poll from './utils/poll';
import styles from './styles/v1.scss';
import { css } from './components/css';
import { pageAssemble } from './components/pageAssemble';


console.log('LVS-422 Preload...');

function init() {

    console.log('LVS-422 Init');

    css();
  
    pageAssemble();

}

poll('.offer-details__terms-and-conditions', init);