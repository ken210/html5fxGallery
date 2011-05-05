/**
 * @author Ken
 * ken210.com / @ken_rosaka
 * 04-29-2011
 * 
 * emulate a frame based timeline using css sprites
 * 
 */

(function($){ // non-conflict mode
	
$.fn.framedTimeline = function(options) {
	
	// optional configs
	var defaults = {

		// frames per second
		fps : 30,

		// boolean
		autoplay : false,
		
		// accepts 'paused', 'playing'
		playing : 'paused',
		
		// you can start an animation at another frame
		startFrame : 1
		
	};
	
	// merge defaults with options
	$.extend(defaults, options);
	
	var frame = {
		
			
		
		},
	
		frames = $(this).find('div.timelineFrame'),
	
		// number
		currentFrame = defaults.startFrame,
		
		// the frame object
		getCurrentFrame = function(id) {
			
			return frames.eq(id);
			
		},
	
		totalFrames = getTotalFrames(),

		getTotalFrames = function() {
			
			return $(this).find('div.timelineFrame').length;
			
		},
	
		// deixa todos os frames invisíveis, menos aquele que interessa.
		makeFrames = function() {
			
			var i = 1;
			
			for (i in this) {
				$(this) // layer
				.find('timelineFrame'); // frame
			}
		},
	
		play = function() {
			
			
			
		};
	
	
	
	
	
	return this.each(function() {
		
		// console.log($(this));

		console.log(defaults.currentPage);
		
		
	});
	
};
	
	
})(jQuery);