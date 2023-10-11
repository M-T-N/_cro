import watchInput from '../utils/watchInput';
import watchBody from '../utils/watchBody';
import { yesParens, noParens, noParensHP } from '../utils/blurbs';
import { qs, qsa } from '../utils/qs';

export default function homepageFunction(){
  watchBody(qs('body'), function(mutations){
      mutations.forEach(mutation => {
          const newNodes = mutation.addedNodes;
          newNodes.forEach(node => {
            
            // different results for desktop and mobile
            switch (document.documentElement.clientWidth > 767) {

              //desktop
              case true:
                // iterate over every added node and look for one that has the class name 'search-dates-popup' or 'search__flexible_date' and that the element does not already exist
                if (
                  (node.className.split(' ').some(function(c){ return /search-dates-popup.*/.test(c);}) || node.className.split(' ').some(function(c){ return /search__flexible_date.*/.test(c);}))
                  ) {
                  const input = qs('.search__flexible_date input');
                  watchInput(input, 
                  function(){
                    if(input.checked == true) {
                      if (qsa('.search__flexible_date--info--hp').length < 1) {
                        qs('.search__flexible_date').insertAdjacentHTML('beforeend', `
                          <p class="search__flexible_date--info--hp">${noParensHP}</p>
                        `);
                      }
                    } else {
                      qs('.search__flexible_date--info--hp').remove();
                    }
                  });
                }
              break;
              //mobile
              case false:
                // iterate over every added node and look for one that has the class name prefix 'StyledAddDatesDiv-'
                if (
                  node.className.split(' ').some(function(c){ return /StyledAddDatesDiv-.*/.test(c); }) || node.className.split(' ').some(function(c){ return /search__flexible_date.*/.test(c);})
                ) {
                  const input = qs('.search__flexible_date input');
                  watchInput(input, 
                  function(){
                    if(input.checked == true) {
                      qs('.search__flexible_date').insertAdjacentHTML('beforeend', `
                        <p class="search__flexible_date--info--hp">${yesParens}</p>
                      `);
                    } else {
                      qs('.search__flexible_date--info--hp').remove();
                    }
                  });
                }
                // second screen with confirmations
                if (node.className.split(' ').some(function(c){ return /StyledForm-.*/.test(c); })) {
                  qs('form[action="/search/submitSearch.mi"] .search-form-body button:nth-of-type(3').insertAdjacentHTML('beforeend', `
                    <p class="search__flexible_date--info--hp">${yesParens}</p>
                  `)
                }
                break;
              }
          });
      });
  });

}