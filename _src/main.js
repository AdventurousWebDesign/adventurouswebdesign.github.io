/* global window TweenMax jQuery:true */

(($) => {
  /*
  http://bassta.bg/2013/12/medium-com-like-blurred-header-effect/
  */

  const $window = $(window);
  const $body = $('body');
  const $bgBlur = $('.bg-blur');
  const $tmHeaders = $('.tm-header-bg div');
  const $logo = $('#logo');

  $logo.empty().append($('<img />', {
    src: '/assets/adventurouswebdesign.svg',
    style: 'padding-top:20px',
  }));

  const bgBlurHeight = $bgBlur.height();
  let scrollFlag = false;
  // used to debounce pointer events
  const scrollThreshold = 0.15;
  // blur factor, 3 means the imahe will be blurred when you scroll 1/3 of the div
  const blurWhenReach = 2;

  const addPointerEvents = () => {
    scrollFlag = false;
    $body.removeClass('disable-pointer-events');
  };

  const debouncePointerEvents = () => {
    TweenMax.killDelayedCallsTo(addPointerEvents);
    TweenMax.delayedCall(scrollThreshold, addPointerEvents);
  };

  $window.on('scroll ready', () => {
    const scrollTop = $window.scrollTop();

    if (!scrollFlag) {
      scrollFlag = true;
      $body.addClass('disable-pointer-events');
    }

    debouncePointerEvents();

    if (scrollTop < bgBlurHeight) {
      let alpha = (scrollTop / bgBlurHeight) * blurWhenReach;

      if (alpha > 1) {
        alpha = 1;
      }

      TweenMax.set($bgBlur, { alpha });
      TweenMax.set($logo, { alpha: 1 - (alpha * 0.8) });
      $tmHeaders.css('background-position', `center -${scrollTop / 3}}px`);
      $logo.css('padding-top', `${scrollTop / 2}px`);
    }
  });
})(jQuery);
