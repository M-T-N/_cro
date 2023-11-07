(function(){
  
  function init() {

		// css
		document.querySelector('head').insertAdjacentHTML('beforeend', `
		<style>
			.tabs-group-tabs__panel-item > ul {
				margin-top: 16px;
			}
			.tabs-group-tabs__panel-item .bold {
				font-weight: bold;
			}
			@media (max-width: 767px) {
				.tin-test li {
					padding-left: 20px;
				}
			}
		</style>
		`);
  
    // new html
		document.querySelector('.tabs-group-tabs__panel-list').outerHTML = `
		<ul class="tabs-group-tabs__panel-list tin-test">
			<li class="tabs-group-tabs__panel-item">Choose how you would like to apply:
				<ul>
					<li><span class="bold">Common Application:</span> <a href="https://apply.commonapp.org/Login?ma=536&tref=00001">visit website here</a>, add Rowan University to your "My Colleges" list, and complete your application</li>
					<li><span class="bold">Coalition for College Application:</span> <a href="https://app.scoir.com/app/signup#scoir">visit website here</a>, search for Rowan University page, click Apply button, and complete your  application</li>
				</ul>
			</li>
			<li class="tabs-group-tabs__panel-item">Depending on application type, confirm you have completed all supplemental sections. These could include additional question sections, recommender sections, financial aid sections, etc.</li>
			<li class="tabs-group-tabs__panel-item">Invite your recommenders before submitting your application electronically.</li>
			<li class="tabs-group-tabs__panel-item">Have your school counselor and teachers submit all documents electronically.</li>
			<li class="tabs-group-tabs__panel-item">Submit your application using your official name on all documents.</li>
			<li class="tabs-group-tabs__panel-item"><a href="../art-music-td.html">Review specific requirements</a> if you are applying to an Art, Theatre/Dance, or Music program.</li>
		</ul>
		`;
  }


	// remove 'apply now' button
	if (!document.querySelector('.tabs-group-tabs__panel-inner .base-cta-primary')) {
		//mobile
		document.querySelector('.tabs-group-accordion__inner .base-cta-primary').remove();
	} else {
		//desktop
		document.querySelector('.tabs-group-tabs__panel-inner .base-cta-primary').remove();
	}
  
  function poll(sel, cb) {setTimeout(function(){if(document.querySelector(sel)) cb();else poll(sel, cb);}, 50);}
  
  poll('.tabs-group-tabs__panel-list', init);

})();