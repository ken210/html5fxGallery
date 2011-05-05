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
	
	return this.each(function() {
		
		var element = this,
		
			// backup element classes
			elemClasses = this.className,
		
			// default to hover animation
			animEvent = options || 'hover',
		
			fps = 40,
		
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
			
			enterFrame = function () {
				
				var classToSet = elemClasses + ' ' + animEvent + currentFrame;
				
				if (ascending && currentFrame < totalFrames) {
	
					setClass(classToSet);
					currentFrame++;
	
				} else if (!ascending && currentFrame > 1) {
					
					setClass(classToSet);
					currentFrame--;
					
				} else {
					
					stop();
					
				}
				
			},
			
			play = function() {
				
				interval = setInterval(enterFrame, 1000 / fps);
	
			},
			
			stop = function() {
				
				clearInterval(interval);
				setClass(elemClasses);
				
			},
			
			forward = function() {
				
				stop();
				ascending = true;
				play();
				
			},

			backward = function() {

				stop();
				ascending = false;
				play();
				
			},
			
			init = (function() {
				
				if (animEvent == 'hover') {
				
					$(element).bind('mouseover', forward);
					$(element).bind('mouseout', backward);
					
				} else {
					
					$(element).bind(animEvent, backward);
					
				}
				
			})();
		
	});
	
};
	
	
})(jQuery);