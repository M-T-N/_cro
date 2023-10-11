import { qs, qsa } from '../utils/qs';

export default function dropdownLinks(quizURL) {

  // set top level selector for the menu
  const planSection = qs('.mod-global-nav__resort .mod-global-nav__menu-group:nth-of-type(1) .mod-global-nav__shop .mod-global-nav__level-3 > .mod-global-nav__menu');

  // remove 'about the venetian'
  planSection.querySelector('li:nth-of-type(3)').remove();

  // change 'take a quiz' to 'find attractions...'
  planSection.querySelector('li:nth-of-type(1) .mod-global-nav__link-text').innerText = 'Find Attractions For You';

  // new link to quiz
  const quizLink = `
    <li>
      <a href="${quizURL}">
        <span class="mod-global-nav__link-text">Find Your Perfect Suite</span>
      </a>
    </li>
  `
  // add new link to quiz
  planSection.querySelector('li:nth-of-type(1)').insertAdjacentHTML('afterend', quizLink);
}