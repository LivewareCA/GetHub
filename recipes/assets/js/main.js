/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Touch?
			if (skel.vars.mobile)
				$body.addClass('is-touch');

		// Forms.
			var $form = $('form');

			// Auto-resizing textareas.
				$form.find('textarea').each(function() {

					var $this = $(this),
						$wrapper = $('<div class="textarea-wrapper"></div>'),
						$submits = $this.find('input[type="submit"]');

					$this
						.wrap($wrapper)
						.attr('rows', 1)
						.css('overflow', 'hidden')
						.css('resize', 'none')
						.on('keydown', function(event) {

							if (event.keyCode == 13
							&&	event.ctrlKey) {

								event.preventDefault();
								event.stopPropagation();

								$(this).blur();

							}

						})
						.on('blur focus', function() {
							$this.val($.trim($this.val()));
						})
						.on('input blur focus --init', function() {

							$wrapper
								.css('height', $this.height());

							$this
								.css('height', 'auto')
								.css('height', $this.prop('scrollHeight') + 'px');

						})
						.on('keyup', function(event) {

							if (event.keyCode == 9)
								$this
									.select();

						})
						.triggerHandler('--init');

					// Fix.
						if (skel.vars.browser == 'ie'
						||	skel.vars.mobile)
							$this
								.css('max-height', '10em')
								.css('overflow-y', 'auto');

				});

			// Fix: Placeholder polyfill.
				$form.placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.browser == 'edge' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {
		
				var	$window = $(window),
					$this = $(this);
		
				if (this.length == 0 || intensity === 0)
					return $this;
		
				if (this.length > 1) {
		
					for (var i=0; i < this.length; i++)
						$(this[i])._parallax(intensity);
		
					return $this;
		
				}
		
				if (!intensity)
					intensity = 0.25;
		
				$this.each(function() {
		
					var $t = $(this),
						on, off;
		
					on = function() {
		
						$t.css('background-position', 'center 100%, center 100%, center 0px');
		
						$window
							.on('scroll._parallax', function() {
		
								var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);
		
								$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');
		
							});
		
					};
		
					off = function() {
		
						$t
							.css('background-position', '');
		
						$window
							.off('scroll._parallax');
		
					};
		
					skel.on('change', function() {
		
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
		
					});
		
				});
		
				$window
					.off('load._parallax resize._parallax')
					.on('load._parallax resize._parallax', function() {
						$window.trigger('scroll');
					});
		
				return $(this);
		
			};

})(jQuery);

/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	
		skel.breakpoints({
			xlarge: '(max-width: 1680px)',
			large: '(max-width: 1280px)',
			medium: '(max-width: 980px)',
			small: '(max-width: 736px)',
			xsmall: '(max-width: 480px)',
			xxsmall: '(max-width: 360px)'
		});
	
		/**
		 * Applies parallax scrolling to an element's background image.
		 * @return {jQuery} jQuery object.
		 */
		$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.browser == 'edge' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {
	
			var	$window = $(window),
				$this = $(this);
	
			if (this.length == 0 || intensity === 0)
				return $this;
	
			if (this.length > 1) {
	
				for (var i=0; i < this.length; i++)
					$(this[i])._parallax(intensity);
	
				return $this;
	
			}
	
			if (!intensity)
				intensity = 0.25;
	
			$this.each(function() {
	
				var $t = $(this),
					on, off;
	
				on = function() {
	
					$t.css('background-position', 'center 100%, center 100%, center 0px');
	
					$window
						.on('scroll._parallax', function() {
	
							var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);
	
							$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');
	
						});
	
				};
	
				off = function() {
	
					$t
						.css('background-position', '');
	
					$window
						.off('scroll._parallax');
	
				};
	
				skel.on('change', function() {
	
					if (skel.breakpoint('medium').active)
						(off)();
					else
						(on)();
	
				});
	
			});
	
			$window
				.off('load._parallax resize._parallax')
				.on('load._parallax resize._parallax', function() {
					$window.trigger('scroll');
				});
	
			return $(this);
	
		};
	
		$(function() {
	
			var	$window = $(window),
				$body = $('body'),
				$wrapper = $('#wrapper'),
				$header = $('#header'),
				$banner = $('#banner');
	
			// Disable animations/transitions until the page has loaded.
				$body.addClass('is-loading');
	
				$window.on('load pageshow', function() {
					window.setTimeout(function() {
						$body.removeClass('is-loading');
					}, 100);
				});
	
			// Clear transitioning state on unload/hide.
				$window.on('unload pagehide', function() {
					window.setTimeout(function() {
						$('.is-transitioning').removeClass('is-transitioning');
					}, 250);
				});
	
			// Fix: Enable IE-only tweaks.
				if (skel.vars.browser == 'ie' || skel.vars.browser == 'edge')
					$body.addClass('is-ie');
	
			// Fix: Placeholder polyfill.
				$('form').placeholder();
	
			// Prioritize "important" elements on medium.
				skel.on('+medium -medium', function() {
					$.prioritize(
						'.important\\28 medium\\29',
						skel.breakpoint('medium').active
					);
				});
	
			// Scrolly.
				$('.scrolly').scrolly({
					offset: function() {
						return $header.height() - 2;
					}
				});

		
		});
	
	})(jQuery);