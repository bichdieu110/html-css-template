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
//Go top footer
$(document).ready(function() {
	$(window).scroll(function() {
    $('#ji-goTop').stop().animate({
      
    }, 500);
	});
	$('#ji-goTop').click(function() {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 500, function() {
			$('#ji-goTop').stop().animate({
			}, 500);
		});
	});
});