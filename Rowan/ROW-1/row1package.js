//css
document.querySelector('head').insertAdjacentHTML('beforeend', `
<style>
	.hero-tertiary {
		padding-top: 40px;
		padding-bottom: 20px;
		clip-path: inset(0px 0px);
	}
	.hero-tertiary__inner {
		display: flex;
		flex-direction: column;
		align-content: center;
	}
	.hero-tertiary__inner label {
		font-family: 't-26 carbon', monospace;
		font-size: 16px;
		text-transform: uppercase;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hero-tertiary__inner label input {
		margin-left: 0.5em;
		z-index: 10;
		font-size: 16px;
	}
	.hero-tertiary__text-content {
		margin-bottom: 25px;
		margin-left: 0;
		width: auto;
	}
	.dataTables_length {
		margin-bottom: 20px;
	}
	@media screen and (max-width: 767px){
		.hero-tertiary {
			padding-bottom: 15px;
		}
	}


	/* table padding for all viewport sizes */
	@media (min-width: 360px) {
		.main .table {
			padding-top: 40px;
		}
	}
	@media (min-width: 640px) {
		.main .table {
			padding-top: 40px;
		}
	}
	@media (min-width: 1024px) {
		.main .table {
			padding-top: 40px;
		}
	} 
	@media (min-width: 1200px) {
		.main .table {
			padding-top: 40px;
		}
	}                
	
</style>
`);

// move search bar up
jQuery('label input[type="search"]').parent().insertAfter('.hero-tertiary__text-content');


// scroll to litsings when enter is pressed
jQuery('.hero-tertiary__inner label input').on('keyup', function(e) {
	if (e.which == 13 || e.keyCode == 13) {
		$("html, body").animate({ scrollTop: $(".dataTables_wrapper").offset().top }, 300);
	}
});