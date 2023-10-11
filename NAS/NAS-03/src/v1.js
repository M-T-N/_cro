// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  // there are 2 divs with '.intro-bar', so add another class to the first on e to target it
  jQuery('.intro-bar').eq(0).addClass('tin-ref');

  // move the form up
  jQuery('#1236').insertAfter('.intro-bar.tin-ref');

  // add heading to form section
  qs('.page__main > .form form[data-formid="1236"]').insertAdjacentHTML(
    'afterbegin',
    `
    <h2>Request a Board Assessment Demo</h2>
  `
  );

  // add containers for left/right
  qs('form[data-formid="1236"] > style').insertAdjacentHTML(
    'afterend',
    `
    <div class="form-fields">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  `
  );

  // add elmts into the left/right
  qsa(
    '.page__main form[data-formid="1236"] div#FirstName, .page__main form[data-formid="1236"] div#LastName, .page__main form[data-formid="1236"] div#Email, .page__main form[data-formid="1236"] div#Phone'
  ).forEach((el) => {
    qs('form[data-formid="1236"] .left').insertAdjacentElement('beforeend', el);
  });

  qsa('.page__main form[data-formid="1236"] > .mktoFormRow').forEach((el) => {
    qs('form[data-formid="1236"] .right').insertAdjacentElement(
      'beforeend',
      el
    );
  });

  // remove 'job role' field, comments
  qs('.page__main form[data-formid="1236"] #Lead_Job_Role__c').remove();
  qs('.page__main form[data-formid="1236"] #MktoPersonNotes').remove();

  // remove original form section from bottom
  qs('.solutions-request-demo.requestdemo-bar').remove();
}

// Initialize experiment
poll('.solutions-request-demo .mktoFormRow[id="State"]', init);
