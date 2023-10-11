// * @private
// * @function
// * @description Establishes event handlers for sliders

function initializeEvents() {

	var $mainImageSlider = $('.pdp-main .product-primary-image');
	var $thumbnailsSlider = $('.pdp-main .product-thumbnails');
	var $videoIframe = $mainImageSlider.find('.embed-player');

	if ($videoIframe.length && $(window).width() < 1025) {
			$videoIframe.attr('height', '480');
	}

	$(window).smartresize(function () {
			if ($videoIframe.length && $(window).width() < 1025) {
					$videoIframe.attr('height', '480');
			} else {
					$videoIframe.attr('height', '510');
			}
	});

	$mainImageSlider.on("beforeChange", function(event, slick) {
			slick = $(slick.$slider);
			playPauseVideo(slick,"pause");
	});

	if (!$mainImageSlider.is('.slick-initialized')) {
			$mainImageSlider.on('afterChange', function(event, slick, currentSlide) {
					slick = $(slick.$slider);
					$thumbnailsSlider.slick('slickGoTo', currentSlide);
					var currentNavSlideElem = '.product-thumbnails .slick-slide[data-slick-index="' + currentSlide + '"]';
					$('.product-thumbnails .slick-slide.is-active').removeClass('is-active');
					$(currentNavSlideElem).addClass('is-active');
			});

			$mainImageSlider.on('click', '.play-video-btn', function () {
					var $playButton = $(this);
					var $slider = $(this).closest('.slick-slider');
					if ($playButton.is('.play')) {
							playPauseVideo($slider,"pause");
							$playButton.removeClass('play');
					} else {
							playPauseVideo($slider,"play");
							$playButton.addClass('play');
					}

			});

			$thumbnailsSlider.on('init', function () {
					$('.product-thumbnails .slick-slide.slick-current').addClass('is-active');
			});

			$thumbnailsSlider.on('click', '.slick-slide', function (event) {
					event.preventDefault();
					var goToSingleSlide = $(this).data('slick-index');
					$mainImageSlider.slick('slickGoTo', goToSingleSlide);
			});
	}
}
