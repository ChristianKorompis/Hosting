(function ($) {

	"use strict";

	/**
	 * Add 'mobile' class on Responsive Mode
	 * @type {Window}
	 */
	$(window).on('load resize', function () {
		var viewportWidth = window.outerWidth;
		;

		var siteHeader = $('.site-header');
    
    var isMobile = siteHeader.hasClass('mobile');
    
    var sitePost = $('#main');

    var isMobilepost = sitePost.hasClass('penggaya-post-dalam');
    
    if (viewportWidth < 1079 {
			if (isMobilepost) {
				sitePost.addClass('penggaya-post-dalam');
			}
		} else {
			if (!isMobilepost) {
				sitePost.removeClass('penggaya-post-dalam');
			}
		}

		if (viewportWidth < 1008) {
			if (!isMobile) {
				siteHeader.addClass('mobile');
				$('body').addClass('mobile');
			}
		} else {
			if (isMobile) {
				siteHeader.removeClass('mobile');
				$('body').removeClass('mobile');
			}
		}
	});
})(jQuery);
;
