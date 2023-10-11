import poll from './utils/poll';
import styles from './styles/v1.scss';
import { css } from './components/css';
import { pageAssemble } from './components/pageAssemble';

function init() {

    console.log('test number');

    css();
  
    pageAssemble();

}

poll('selector', init);