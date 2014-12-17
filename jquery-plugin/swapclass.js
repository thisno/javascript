/*
use

$('#id').swapClass('class_a', 'class_b');

*/
(function($) {
	$.fn.swapClass = function(a, b) {
		if ($(this).is('.' + a)) {
			$(this).removeClass(a);
			$(this).addClass(b);

		} else if ($(this).is('.' + b)) {
			$(this).removeClass(b);
			$(this).addClass(a);
		} else {
			$(this).addClass(a);
		}
	}
})(jQuery);