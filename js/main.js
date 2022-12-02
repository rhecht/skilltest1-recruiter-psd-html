/* Splide Slider */
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#thumbnail-carousel', {
  breakpoints : {
    600: {
      fixedWidth : 225,
      fixedHeight: 140,
    },
  },
  cover   : true,
	fixedWidth: 225,
  fixedHeight : 140,
  gap         : 10,
  lazyLoad: 'nearby',
  perPage : 3,
  rewind      : true,
  pagination  : true,
  isNavigation: true,

  } ).mount();
} );

