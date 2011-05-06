$(function(){
	
//	$('ul.frameByFrame').find('a.hover').spriteFrames();
	
	$('ul.frameByFrame').find('a.hover').spriteFrames({
		
		fps: 10,
		
		complete: function () {
			
			console.log('oie');
			
		}
		
	});
	
});