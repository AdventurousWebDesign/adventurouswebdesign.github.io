/* global window jQuery:true */

import Viewer from 'viewerjs';
import UIKit from 'uikit';
import TweenMax from 'gsap/TweenMax';

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
    if (window.TweenMax) {
      TweenMax.killDelayedCallsTo(addPointerEvents);
      TweenMax.delayedCall(scrollThreshold, addPointerEvents);
    }
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

      if (window.TweenMax) {
        TweenMax.set($bgBlur, { alpha });
        TweenMax.set($logo, { alpha: 1 - (alpha * 0.8) });
        $tmHeaders.css('background-position', `center -${scrollTop / 3}}px`);
        $logo.css('padding-top', `${scrollTop / 2}px`);
      }
    }
  });


  // Do mountain paralax only on tablet++
  if (window.outerWidth > 764) {
    const $bgBody1 = $('.portfolio-bg--1');
    const $bgBody2 = $('.portfolio-bg--2');

    $window.on('scroll ready', () => {
      const scrollTop = $window.scrollTop() + 0.001;

      if (!scrollFlag) {
        scrollFlag = true;
        $body.addClass('disable-pointer-events');
      }

      debouncePointerEvents();

      let offset = scrollTop * -0.2;
      const opacity = (scrollTop / 1000) + 0.5;

      if (offset > -50) { offset = -50; }
      if (offset < -500) { offset = -500; }

      if (window.TweenMax) {
        TweenMax.set($bgBody1, { y: `${(offset / 10)}%` });
        TweenMax.set($bgBody2, { y: `${(offset / 10) * 0.8}%` });
        TweenMax.set([$bgBody1, $bgBody2], { opacity });
      }
    });
  }

  // Viewer Options
  const vOpts = {
    navbar: false,
    toolbar: false,
    movable: false,
    rotatable: false,
    scalable: false,
    fullscreen: false,
  };

  $.each($('.image-gallery'), (i, el) => {
    const viewer = new Viewer(el, vOpts);
    viewer.initViewer();
  });

  $.each($('.terminal--autoplay'), (i, el) => {
    const $el = $(el);
    UIKit.scrollspy($el);

    $el.on('inview.uk.scrollspy', () => { $el.find('asciinema-player').trigger('play'); });
    $el.on('outview.uk.scrollspy', () => { $el.find('asciinema-player').trigger('pause'); });
  });
})(jQuery);
