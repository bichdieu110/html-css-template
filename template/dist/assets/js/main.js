$('.jc_listFeatured').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});