(function($){
	({
		init: function(){
			var self = this;

			$(function(){
        self.banner();
        self.feature();
        self.faq();
			});
		},

		banner: function() {
			if ($('#banner-particles').length <= 0) return ;
			particlesJS("banner-particles", {
				particles: {
					number: { value: 20, density: { enable: true, value_area: 800 } },
					color: { value: "#ffa93d" },
					shape: {
						type: "circle",
						stroke: { width: 8, color: "#ffa93d" },
						polygon: { nb_sides: 5 },
						image: { src: "img/github.svg", width: 100, height: 100 }
					},
					opacity: {
						value: 0.6,
						random: false,
						anim: { enable: false, speed: 0.8, opacity_min: 0.1, sync: false }
					},
					size: {
						value: 2,
						random: true,
						anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
					},
					line_linked: {
						enable: true,
						distance: 255,
						color: "#ffa93d",
						opacity: 0.4,
						width: 2
					},
					move: {
						enable: true,
						speed: 6,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						bounce: false,
						attract: { enable: false, rotateX: 600, rotateY: 1200 }
					}
				},
				interactivity: {
					detect_on: "canvas",
					events: {
						onhover: { enable: true, mode: "repulse" },
						onclick: { enable: true, mode: "push" },
						resize: true
					},
					modes: {
						grab: { distance: 400, line_linked: { opacity: 1 } },
						bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
						repulse: { distance: 200, duration: 0.4 },
						push: { particles_nb: 4 },
						remove: { particles_nb: 2 }
					}
				},
				retina_detect: true
			});
    },
    feature: function() {
      $('.jc_featured-list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });
    },
    faq: function() {
      if($('.c-faq-list').length) {
        $('.c-faq-list').each(function() {
          var _panel = $(this).find('> .c-faq-list_item');
          _panel
            .find('> .c-faq-list_item_content')
            .hide()
          _panel
            .find('> .c-faq-list_item_content.active')
            .show()
        })

        $(".jc_switch-toggle").click(function () {
          $(this).next(".c-faq-list_item_content").slideToggle(),
          $(".jc_switch-toggle").not($(this)).next(".c-faq-list_item_content").slideUp(),
          $(".jc_switch-toggle").not($(this)).removeClass("on"),
          $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on");
        });
      }
    }
	}.init());

}(jQuery));
