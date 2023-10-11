export default function quizBlock(linkURL){

  // make html block for new section
  return `
    <div class="mod-generic-detail-list--item ">
      <div class="mod-generic-detail-list--media" aria-hidden="true">
        <a href="${linkURL}" tabindex="-1">
          <picture class="content">
            <source data-srcset="//cdn.optimizely.com/img/8200950428/fbd34be6b797402cb311e13b044ab27d.jpg" media="(min-width: 640px)" srcset="//cdn.optimizely.com/img/8200950428/fbd34be6b797402cb311e13b044ab27d.jpg">
            <source data-srcset="//cdn.optimizely.com/img/8200950428/fbd34be6b797402cb311e13b044ab27d.jpg" srcset="//cdn.optimizely.com/img/8200950428/fbd34be6b797402cb311e13b044ab27d.jpg">
            <img class=" lazyloaded" data-src="//cdn.optimizely.com/img/8200950428/fbd34be6b797402cb311e13b044ab27d.jpg" src="//cdn.optimizely.com/img/8200950428/fbd34be6b797402cb311e13b044ab27d.jpg">
          </picture>
        </a>
      </div>
      <div class="mod-generic-detail-list--text">
        <p>Every one of our rooms is a suite, but which suite suits your style and getaway dreams? Take our suite personality quiz to find out what one of our Las Vegas suite rooms fits your own personal style. From unique luxury, a once-in-a-lifetime experience, or comfortably close to the action. We will help determine your perfect suite.</p>
        <div class="cta-stack">
          <a class="cta cta--arrow" href="${linkURL}" aria-label="TAKE THE QUIZ">
            <span>TAKE THE QUIZ</span>	 
            <svg role="presentation"><use xlink:href="/etc.clientlibs/venetian/clientlibs/dependencies/resources/img/icons/icons.svg#cta_red"></use></svg>
          </a>
        </div>
      </div>
    </div>
  `;

}