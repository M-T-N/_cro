import { qs } from '../utils/qs';

export default function () {
  const kingSlickSettings = {
    dots: false,
    speed: 500,
    prevArrow: qs('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(1) .slick-prev'),
    nextArrow: qs('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(1) .slick-next')
  };
  const queenSlickSettings = {
    dots: false,
    speed: 500,
    prevArrow: qs('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(2) .slick-prev'),
    nextArrow: qs('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(2) .slick-next')
  };
  const prestigeSlickSettings = {
    dots: false,
    speed: 500,
    prevArrow: qs('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(3) .slick-prev'),
    nextArrow: qs('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(3) .slick-next')
  };
  window.jQuery('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(1) .o-small-gallery__items--tin').slick(kingSlickSettings);
  window.jQuery('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(2) .o-small-gallery__items--tin').slick(queenSlickSettings);
  window.jQuery('.tin_suites-flex .mod-suites-browse-listing__card:nth-child(3) .o-small-gallery__items--tin').slick(prestigeSlickSettings);
}