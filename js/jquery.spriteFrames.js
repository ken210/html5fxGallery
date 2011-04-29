/**
 * @author Ken
 * ken210.com / @ken_rosaka
 * 04-29-2011
 * 
 * emulate a timeline based animation using background-position
 * 
 */

(function($){ // non-conflict mode
	
$.fn.spriteFrames = function(options) {
	
	// optional configs
	var defaults = {

		// will deprecate this in future, i prefer fps than frameInterval
		frameInterval : 15,
		
		// start at frame 1
		currentFrame : 1,
		
	};
	
	// merge defaults with options
	$.extend(defaults, options);
	
	// caching selectors
	var element = this,
	
		// at last 1 frame
		totalFrames = element.frames || 1;
	
		
	return this.each(function(){
		
		console.log($(this).attr('frames'));
		
	});
	
};
	
	
})(jQuery);