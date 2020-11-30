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
$(document).ready(function(){

	if ($('.jc_header').length) {

		var jsnavHeader = $('.jc_header'),
			burgerMenu = jsnavHeader.find('.jc_burgerMenu'),
			jsnavMenuListWrapper = $('.jc_gnav_menu > ul'),
			jsnavMenuListDropdown = $('.jc_gnav_menu ul li:has(ul)')
		
		burgerMenu.on("click", function(){
			$(this).toggleClass('is-openMenu');
			jsnavMenuListWrapper.slideToggle(300);
		});
		
		jsnavMenuListDropdown.each(function(){
			$(this).append( '<span class="jc_plus"></span>' );
			$(this).addClass('is-dropdown');
		});
		
		$('.jc_plus').on("click", function(){
			$(this).prev('ul').slideToggle(300);
			$(this).toggleClass('is-open');
		});
		
		$('.is-dropdown a').append('<span></span>');

	}

});