// Imports
import { qs, qsa } from './utils/qs';
import poll from './utils/poll';
import styles from './styles/v1.scss';



// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


function init() {

  console.log('HGH-3 | (Hutchinson) Commercial Page Redesign Test (Mobile)');

  qs('head').insertAdjacentHTML('beforeend', `
      <style>
      .elementor-9 .elementor-element.elementor-element-baac388>.elementor-element-populated{margin-bottom:0}.hero-carousel-c-mobile .card-title{padding:10px 20px !important}.hero-carousel-c-mobile .card-container{margin-bottom:10px}div[data-id="7eede68"] a{color:#fff}div[data-id="fc972a3"]{max-height:250px}.elementor-9 .elementor-element.elementor-element-e65f464{padding-top:10px;margin-bottom:0}.elementor-9 .elementor-element.elementor-element-e65f464 a{color:#003A70;font-weight:800}.card-title{display:flex;padding:0 20px !important;align-items:center;justify-content:space-between}.card-title .card-toggle img{width:20px;opacity:1;left:auto;position:initial;transform:none}.card-text{max-height:0;transition:all 300ms ease-in}.card-text.active{max-height:500px}#PureChatWidget.purechat.purechat-window .purechat-widget-header,#PureChatWidget.purechat.purechat-window .purechat-btn{background-color:#003A70 !important}
      </style>`);

  const mainWrapper = qs('div[data-elementor-type="wp-page"] > .elementor-inner > .elementor-section-wrap');

  // move photo up to top, put text overlay
  const topImage = qs('div[data-id="fc972a3"]').outerHTML;
  qs('div[data-id="fc972a3"]').remove();
  mainWrapper.querySelector('section:first-of-type').insertAdjacentHTML('beforebegin', `
    ${topImage}
    <section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-e65f464 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e65f464" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-row">
            <div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-baac388" data-id="baac388" data-element_type="column">
                <div class="elementor-column-wrap elementor-element-populated">
                  <div class="elementor-widget-wrap">
                      <div class="elementor-element elementor-element-b438549 elementor-widget elementor-widget-text-editor" data-id="b438549" data-element_type="widget" data-widget_type="text-editor">
                        <div class="elementor-widget-container">
                            <div class="elementor-text-editor elementor-clearfix">
                              <p>For more than six decades, we have been providing prompt, expert service and installations to our neighbors throughout South Jersey, Philadelphia, and Delaware. As the top, <a href="https://www.hutchbiz.com/residential/about/awards-accolades/">award-winning contractor</a> in plumbing, heating and air conditioning in South Jersey, we offer ways to <a href="https://www.hutchbiz.com/ways-to-save-money/">save the most energy</a>, while providing optimum comfort and air quality for your residential home.</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  `);

  // collapse card sections, make card titles triggers for dropdowns
  qsa('.card-title').forEach(function(el){
    const title = el.querySelector('.title').outerHTML;
    el.innerHTML = `
      ${title}
      <div class="card-toggle"><img src="https://i.imgur.com/0zsQhZO.png"></div>
    `
    el.addEventListener('click', function(){
      el.nextElementSibling.classList.toggle('active');
    });
  });


  //swap pictures of guys/cars and text below
  const guysCars = qs('div[data-id="ca66873"]').outerHTML;
  qs('div[data-id="ca66873"]').remove();
  qs('div[data-id="625eb1a"]').insertAdjacentHTML('afterend', guysCars);


  //Change copy of EZBook button at top of page to "Book an Appointment Online Here"
  document.querySelector('div[data-id="7eede68"] img').outerHTML = 'Book an Appointment Online Here';
  
}


// Initialize experiment
poll('div[data-id="fc972a3"]', init);