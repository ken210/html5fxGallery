/**
 * @author Ken
 * ken210.com / @ken_rosaka
 * 04-29-2011
 * 
 * emulate a timeline based animation using css classes
 * 
 */
 

(function($){ // non-conflict mode
	
$.fn.spriteFrames = function(options) {
	
	var defaults = {

		fps : 40,
		
		// default to hover animation
		animEvent : 'hover',
		
		// callback function defaults to none
		complete : undefined
		
	};
	
	// merge defaults with options
	$.extend(defaults, options);
	
	return this.each(function() {
		
		var element = this,
		
			// backup element classes
			elemClasses = this.className,
		
			interval,
			
			currentFrame = 1,
			
			// at last 1 frame
			totalFrames = parseInt($(this).data('frames'), 10) || 1,
			
			// direction of the animation, default to normal (first frames first)
			ascending = true,
			
			cssClass = '',
			
			setClass = function(options) {
				
				$(element).removeClass();
				$(element).addClass(options);
				
			},
			
			enterFrame = function (skip) {
				
				var classToSet = elemClasses + ' ' + defaults.animEvent + currentFrame;
				
				if (ascending && currentFrame < totalFrames) {
	
					setClass(classToSet);
					currentFrame++;
	
				} else if (!ascending && currentFrame > 1) {
					
					setClass(classToSet);
					currentFrame--;
					
				} else {
					
					stop(skip);
					
				}
				
			},
			
			play = function(skip) {
				
				interval = setInterval(enterFrame, 1000 / defaults.fps, skip);
	
			},
			
			stop = function(skip) {
				
				clearInterval(interval);
				setClass(elemClasses);
				
				// callback function
				if ($.isFunction(defaults.complete) && skip)
					defaults.complete.call(this);
					
			},
			
			forward = function(event) {
				
				stop();
				ascending = true;
				play(event.data.skip);
				
			},

			backward = function() {

				stop();
				ascending = false;
				play();
				
			},
			
			init = (function() {
				
				if (defaults.animEvent == 'hover') {
				
					// $(element).bind('mouseover', forward);
					$(element).bind('mouseover', {skip: true}, forward);
					$(element).bind('mouseout', backward);
					
				} else {
					
					$(element).bind(defaults.animEvent, forward);
					
				}
				
			})();
		
	});
	
};
	
})(jQuery);