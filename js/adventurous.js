$(function(){
  
  /*
  http://bassta.bg/2013/12/medium-com-like-blurred-header-effect/
  */
  
  $window = $(window);
  $body  = $("body");              
  $bgBlur = $(".bg-blur");
  $tmHeaders = $('.tm-header-bg div');
  $logo = $('#logo');
  $parallax = $('[data-parallax]');

  $logo.empty().append($('<img />', {src: '/assets/adventurouswebdesign.svg', style: 'padding-top:20px'}));
                
  var bgBlurHeight = $bgBlur.height();
  var scrollFlag = false;
  var scrollThreshold  = 0.15; //used to debounce pointer events 
  var blurWhenReach = 2; //blur factor, 3 means the imahe will be blurred when you scroll 1/3 of the div
                
  $window.on("scroll ready", function(event){
	               
	  var scrollTop = $window.scrollTop(); 
	               
	  if(!scrollFlag){
		  scrollFlag = true;
	    $body.addClass("disable-pointer-events");
	  }
	               
	  debouncePointerEvents();
	               
	  if(scrollTop < bgBlurHeight){
	    var _alpha = (scrollTop / bgBlurHeight) * blurWhenReach;
	    if(_alpha > 1){ _alpha = 1 }
		  TweenMax.set($bgBlur, {alpha: _alpha });
		  TweenMax.set($logo, {alpha: 1 - (_alpha * 0.8 ) });
		  $tmHeaders.css('background-position', 'center -' + scrollTop / 3 + 'px');
		  $logo.css('padding-top', scrollTop / 2 + 'px');
	  }

	  
	$parallax.css('background-position', 'center -' 
		+ ($parallax.offset().top - (scrollTop * 0.9))
		+ 'px'
	);
	  
	               
   });
	
   // Speed up things by disabling pointer events. I use TweenMax delayedCall instead JS native setInterval just for the sake of showing how to use this method. See more at http://www.thecssninja.com/javascript/pointer-events-60fps
				
  function debouncePointerEvents(){
	  TweenMax.killDelayedCallsTo(addPointerEvents);
		TweenMax.delayedCall(scrollThreshold, addPointerEvents);
  }
				
  function addPointerEvents(){
	  scrollFlag = false;
		$body.removeClass("disable-pointer-events");
  }
				
});