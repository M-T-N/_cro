import watchInput from '../utils/watchInput';
import {watchBody, watchBodySRP} from '../utils/watchBody';
import { yesParens, noParens } from '../utils/blurbs';
import { qs, qsa } from '../utils/qs';
import addTagsSRP from '../utils/addTagsSRP';

export default function searchFunction(){

  // different results for desktop and mobile
  switch (document.documentElement.clientWidth > 767) {
    //desktop
    case true:

    // watch Flexible Dates tab in dropdown
      watchBodySRP(qs('.l-date-picker-body .tab2'), function(mutations){
        mutations.forEach(mutation => {
            if (mutation.target.classList.contains('selected') && qsa('.l-date-picker-body .search__flexible_date--info--srp').length == 0) {
              // place after 'flexible dates' tab in Dates dropdown
              document.querySelector('.l-date-picker-body span[data-tab-value="Flexible Dates"]').insertAdjacentHTML('afterend', `
              <p class="search__flexible_date--info--srp">${noParens}</p>
              `);
            }
            if (mutation.target.classList.contains('selected') == 0 && qsa('.l-date-picker-body .search__flexible_date--info--srp').length != 0) {
              qs('.l-date-picker-body .search__flexible_date--info--srp').remove();
            }
        });
      });

      // watch datepicker box if Flex dates are selected
      watchBodySRP(qs('div[data-label="Flexible in"]'), function(mutations){
        mutations.forEach(mutation => {
          switch (mutation.target.style.display) {
            case "block":
              // place after date picker box (before dropdown), don't add if there
              if (qsa('.m-field-control.m-date-picker.l-date-picker > .search__flexible_date--info--srp').length == 0) {
                qs('.m-field-control.m-date-picker.l-date-picker').insertAdjacentHTML('beforeend', `
                  <p class="search__flexible_date--info--srp">${noParens}</p>
                `);      
              }
              // place below dates, before going into dropdown
              if (qsa('#staydates .search__flexible_date--info--srp').length == 0) {
                qs('#staydates').insertAdjacentHTML('beforeend', `
                  <p class="search__flexible_date--info--srp">${noParens}</p>
                `)
              }
              break;
            case "none":
            case '':
              qs('.m-field-control.m-date-picker.l-date-picker .search__flexible_date--info--srp').remove();
              qs('#staydates .search__flexible_date--info--srp').remove();
              break;
          }
        });
      });

      // on pageload, if dates are flexible, place below dates, before going into dropdown
      if (
        qs('#staydates .l-dates').innerText.indexOf('Flexible') != -1 &&
        qsa('#staydates .search__flexible_date--info--srp').length == 0 &&
        qsa('.m-field-control.m-date-picker.l-date-picker > .search__flexible_date--info--srp').length == 0
        ) {
          qs('#staydates').insertAdjacentHTML('beforeend', `
            <p class="search__flexible_date--info--srp">${noParens}</p>
          `);
          qs('.m-field-control.m-date-picker.l-date-picker').insertAdjacentHTML('beforeend', `
            <p class="search__flexible_date--info--srp">${noParens}</p>
          `);  
        }

    break;
    //mobile
    case false:

        // watch Flexible Dates tab in dropdown
        watchBodySRP(qs('.l-date-picker-body .tab2'), function(mutations){
          mutations.forEach(mutation => {
              if (mutation.target.classList.contains('selected') && qsa('.m-field-control.m-date-picker.l-date-picker .search__flexible_date--info--srp').length == 0) {
                // place after date picker box (before dropdown)
                qs('.m-field-control.m-date-picker.l-date-picker .field-title').insertAdjacentHTML('afterend', `
                  <p class="search__flexible_date--info--srp">${yesParens}</p>
                `);
              }
              if (!mutation.target.classList.contains('selected') && qsa('.m-field-control.m-date-picker.l-date-picker .search__flexible_date--info--srp').length != 0) {
                qs('.m-field-control.m-date-picker.l-date-picker .search__flexible_date--info--srp').remove();
              }
          });
        });


      // also run on pageload
      if (qsa('.m-field-control.m-date-picker.l-date-picker > .search__flexible_date--info--srp').length == 0) {
        qs('.m-field-control.m-date-picker.l-date-picker .field-title').insertAdjacentHTML('afterend', `
          <p class="search__flexible_date--info--srp">${yesParens}</p>
        `);      
      }


      // if dates are flexible on pageload, place below dates, before going into dropdown
      if (qs('#staydates .l-dates').innerText.indexOf('Flexible') != -1 && qsa('#staydates .search__flexible_date--info--srp').length == 0) {
        qs('#staydates').insertAdjacentHTML('beforeend', `
          <p class="search__flexible_date--info--srp">${yesParens}</p>
        `)
      }

    break;
  }


  // add tracking tags
  addTagsSRP();
}

