// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v3.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function init() {
  // insert new html for fabric pickers

  qs('.plp-col--right .grid-item-1').insertAdjacentHTML(
    'beforebegin',
    /* html */
    `
    <div class="tin-filter">
      <div class="tin-fabricPicker">
        <div class="tin-fabricPicker__card tin-fabricPicker__card--supima">
          <img src="https://i.imgur.com/O0lnRMQ.jpg" alt="supima">
        </div>
        <div class="tin-fabricPicker__card tin-fabricPicker__card--tri">
          <img src="https://i.imgur.com/5MUsCxe.jpg" alt="tri">
        </div>
        <div class="tin-fabricPicker__card tin-fabricPicker__card--slub">
          <img src="https://i.imgur.com/NbDcYJh.jpg" alt="slub">
        </div>
      </div>
      <div class="tin-filter__clear">
        <button>Shop All</button>
      </div>
    </div>
  `
  );

  // show or hide 'shop all' button
  function toggleShopall() {
    // array for acive filters
    const filterSelected = [];

    // push state of active filters
    qsa('.tin-fabricPicker__card').forEach(function (el) {
      filterSelected.push(el.classList.contains('active'));
    });

    if (filterSelected.includes(true)) {
      qs('.tin-filter__clear').classList.add('tin-filter__clear--active');
      console.log('ACTIVE!');
    } else {
      qs('.tin-filter__clear').classList.remove('tin-filter__clear--active');
      console.log('HIDDEN!');
    }
  }

  // event listeners for filters
  qsa('.tin-fabricPicker__card').forEach(function (el) {
    el.addEventListener('click', function () {
      switch (true) {
        case el.classList.contains('tin-fabricPicker__card--supima'):
          qs(
            '.collection-filter-tag[data-filter-value="supima-cotton"]'
          ).click();
          this.classList.toggle('active');
          toggleShopall();
          break;
        case el.classList.contains('tin-fabricPicker__card--tri'):
          qs(
            '.collection-filter-tag[data-filter-value="tri-blend-jersey"]'
          ).click();
          this.classList.toggle('active');
          toggleShopall();
          break;
        case el.classList.contains('tin-fabricPicker__card--slub'):
          qs('.collection-filter-tag[data-filter-value="cotton-slub"]').click();
          this.classList.toggle('active');
          toggleShopall();
          break;
        default:
          console.log('no match');
      }
    });
  });

  // clear filter function
  function clearFilters() {
    qsa('.tin-fabricPicker__card').forEach(function (card) {
      card.classList.remove('active');
      qs('.tin-filter__clear').classList.remove('tin-filter__clear--active');
    });
  }

  // make new filters inactive when clicking 'clear' button
  qsa('.collection-filter-clear').forEach(function (el) {
    el.addEventListener('click', clearFilters);
  });

  // 'shop all' button simulates click on clear filter button
  qs('.tin-filter__clear button').addEventListener('click', function () {
    qs('.collection-filter-top-desktop .collection-filter-clear').click();
  });
}

// Initialize experiment
poll('.plp-col--right .grid-item-1', init);
