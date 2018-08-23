$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});



/* ***************************
  Enable Smooth Scrolling
  Author: Chris Coyier
  URL:  CSS-Tricks.com
***************************** */

// Enable Smooth Scrolling ...  by Chris Coyier of CSS-Tricks.com




/* ***************************
  
  Owl carousel responsive
  
***************************** */

        $('.owl-carousel').owlCarousel({
            loop: true
            , margin: 0
            , items: 4
            , nav: false
            , dots: false
            , responsive: {
                0: {
                    items: 1
                }
                , 600: {
                    items: 2
                }
                , 1000: {
                    items: 3
                }
            }
        });