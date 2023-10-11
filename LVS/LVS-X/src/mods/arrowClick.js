export default function arrowClick(e) {
    var max = 3;
    var current = parseInt($(e.target).closest('.mod-suites-browse-listing-gallery').find('.o-small-gallery__counter--current').text());
    // Next Arrow
    if ($(e.target).closest('.slick-arrow').hasClass('slick-next')) {
      if (current < max) {
        $(e.target).closest('.mod-suites-browse-listing-gallery').find('.o-small-gallery__counter--current').text(current + 1);
      } else {
        $(e.target).closest('.mod-suites-browse-listing-gallery').find('.o-small-gallery__counter--current').text('1');
      }
    }
    // Prev Arrow
    else {
      if (current == 1) {
        $(e.target).closest('.mod-suites-browse-listing-gallery').find('.o-small-gallery__counter--current').text(max);
      } else {
        $(e.target).closest('.mod-suites-browse-listing-gallery').find('.o-small-gallery__counter--current').text(current - 1);
      }
    }
  }