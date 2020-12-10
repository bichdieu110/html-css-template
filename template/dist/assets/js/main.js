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
$(".jc_customSelect").each(function() {
	var classes = $(this).attr("class"),
		id      = $(this).attr("id"),
		name    = $(this).attr("name");
	var template =  '<div class="' + classes + '">';
		template += '<span class="c-trigger">' + $(this).attr("placeholder") + '</span>';
		template += '<div class="c-opt">';
		$(this).find("option").each(function() {
		  template += '<span class="c-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
		});
	template += '</div></div>';
	
	$(this).wrap('<div class="c-slWrapper"></div>');
	$(this).hide();
	$(this).after(template);
  });
  $(".c-option:first-of-type").hover(function() {
	$(this).parents(".c-opt").addClass("is-hover");
  }, function() {
	$(this).parents(".c-opt").removeClass("is-hover");
  });
  $(".c-trigger").on("click", function() {
	$('html').one('click',function() {
	  $(".jc_customSelect").removeClass("is-open");
	});
	$(this).parents(".jc_customSelect").toggleClass("is-open");
	event.stopPropagation();
  });
  $(".c-option").on("click", function() {
	$(this).parents(".c-slWrapper").find("select").val($(this).data("value"));
	$(this).parents(".c-opt").find(".c-option").removeClass("selection");
	$(this).addClass("selection");
	$(this).parents(".jc_customSelect").removeClass("is-open");
	$(this).parents(".jc_customSelect").find(".c-slWrapper").text($(this).text());
  });