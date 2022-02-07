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
		
    var desktop = $('.mode-desktop');
		
    var thumbnail = $('.image-mobile-post-v1');
		
    var isDesktopMode = thumbnail.appendTo('.image-mobile-post');

    var isMobilepost = sitePost.hasClass('penggaya-post-dalam');
		
    if (viewportWidth > 1079) {
			if (!isDesktopMode) {
				thumbnail.appendTo('.mode-desktop');
			}
		} else {
			if (isDesktopMode) {
				thumbnail.appendTo('.image-mobile-post');
			}
		}
    
    if (viewportWidth < 1080) {
			if (!isMobilepost) {
				sitePost.addClass('penggaya-post-dalam');
			}
		} else {
			if (isMobilepost) {
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
