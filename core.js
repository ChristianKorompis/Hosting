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
    var thumbnail = $('.image-mobile-post-v1');
		
    var isDesktop = thumbnail.appendTo('.mode-desktop');
    
    var isMobile = siteHeader.hasClass('mobile');
    
    var sitePost = $('.penutup-layout-post');

    var isMobilepost = sitePost.hasClass('penggaya-post-dalam');
    
    if (viewportWidth < 1080) {
			if (!isMobilepost) {
				sitePost.addClass('penggaya-post-dalam');
			}
		} else {
			if (isMobilepost) {
				sitePost.removeClass('penggaya-post-dalam');
			}
		}

		if (viewportWidth > 1079) {
			if (!isDesktop) {
				siteHeader.addClass('mobile');
				$('.image-mobile-post-v1').appendTo('.mode-desktop');
			}
		} else {
			if (isDesktop) {
				siteHeader.removeClass('mobile');
				$('.image-mobile-post-v1').appendTo('.image-mobile-post');
			}
		}
	});
})(jQuery);
;
