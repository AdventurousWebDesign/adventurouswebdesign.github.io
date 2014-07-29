/*!
 * avgrund 0.1
 * http://lab.hakim.se/avgrund
 * MIT licensed
 *
 * Copyright (C) 2012 Hakim El Hattab, http://hakim.se
 */

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

  var Avgrund = (function(){

		var container = document.documentElement,
			popup = document.querySelector( '.avgrund-popup-animate' ),
			cover = document.querySelector( '.avgrund-cover' ),
			currentState = null;

		container.className = container.className.replace( /\s+$/gi, '' ) + ' avgrund-ready';

		// Deactivate on ESC
		function onDocumentKeyUp( event ) {
			if( event.keyCode === 27 ) {
				deactivate();
			}
		}

		// Deactivate on click outside
		function onDocumentClick( event ) {
			if( event.target === cover ) {
				deactivate();
			}
		}

		function activate( state ) {
			document.addEventListener( 'keyup', onDocumentKeyUp, false );
			document.addEventListener( 'click', onDocumentClick, false );
			document.addEventListener( 'touchstart', onDocumentClick, false );

			removeClass( popup, currentState );
			addClass( popup, 'no-transition' );
			addClass( popup, state );

			setTimeout( function() {
				removeClass( popup, 'no-transition' );
				addClass( container, 'avgrund-active' );
			}, 0 );

			currentState = state;
		}

		function deactivate() {
			document.removeEventListener( 'keyup', onDocumentKeyUp, false );
			document.removeEventListener( 'click', onDocumentClick, false );
			document.removeEventListener( 'touchstart', onDocumentClick, false );

			removeClass( container, 'avgrund-active' );
			removeClass( popup, 'avgrund-popup-animate')
		}

		function disableBlur() {
			addClass( document.documentElement, 'no-blur' );
		}

		function addClass( element, name ) {
			element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
		}

		function removeClass( element, name ) {
			element.className = element.className.replace( name, '' );
		}

		function show(selector){
			popup = document.querySelector( selector );
			addClass(popup, 'avgrund-popup-animate');
			activate();
			return this;
		}
		function hide() {
			deactivate();
		}

		return {
			activate: activate,
			deactivate: deactivate,
			disableBlur: disableBlur,
			show: show,
			hide: hide
		}

	})();

  $('[data-avgrund]').click(function(e){
  	$this = $(this);
  	e.preventDefault();
  	Avgrund.show('#' + $this.attr('href'));
  });
				
});