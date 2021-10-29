/* eslint-disable no-unused-vars */

import slick from 'slick-carousel';
import $ from 'jquery';

const topSliderConfig = {
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 700,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
      },
    },
  ],
}

const productSliderConfig = {
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000,
  // speed: 700,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
      },
    },
  ],
}

const partnersSliderConfig = {
  arrows: false,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 700,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
}

$('.main-top-slider').slick(topSliderConfig);
$('.main-product-slider').slick(productSliderConfig)
$('.main-partners-slider').slick(partnersSliderConfig)
