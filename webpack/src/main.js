/* global window document jQuery:true */

import Viewer from 'viewerjs';
import UIKit from 'uikit';
import { TweenMax, Power3 } from 'gsap/TweenMax';
import 'uikit/dist/js/components/sticky';
import 'uikit/dist/js/components/notify';
import logo from './img/adventurouswebdesign.svg';

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
    src: logo,
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
        $tmHeaders.css({
          'background-position': `center -${scrollTop / 3}}px`,
          visibility: 'visible',
        });
        $logo.css('padding-top', `${scrollTop / 2}px`);
      }
    } else {
      $tmHeaders.css('visibility', 'hidden');
    }
  });


  // Do mountain paralax only on tablet++
  if (window.innerWidth > 764) {
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
    url: 'data-original',
  };

  $.each($('.image-gallery'), (i, el) => {
    const viewer = new Viewer(el, vOpts);
    viewer.initViewer();

    if (window.innerWidth < 764) {
      const mobilePrompt = $(el).find('.image-gallery__mobile-prompt');
      const hand = mobilePrompt.find('.hand-x');
      UIKit.scrollspy(mobilePrompt);

      // Set starting position.
      TweenMax.set(hand, {
        rotation: 10,
        transformOrigin: 'bottom center',
        x: -20,
      });

      mobilePrompt.on('inview.uk.scrollspy', () => {
        TweenMax.to(hand, 0.75, {
          x: 20,
          rotation: -10,
          repeat: 3,
          ease: Power3.easeInOut,
          yoyo: true,
          onComplete: () => { mobilePrompt.fadeOut(); },
        });
      });
    }
  });

  $.each($('.terminal--autoplay'), (i, el) => {
    const $el = $(el);
    UIKit.scrollspy($el);

    $el.on('inview.uk.scrollspy', () => { $el.find('asciinema-player').trigger('play'); });
    $el.on('outview.uk.scrollspy', () => { $el.find('asciinema-player').trigger('pause'); });
  });

  if (window.location.pathname.indexOf('contact') !== -1) {
    $(document).on('afterready.uk.dom', () => {
      const form = $('#contact');

      document.getElementById('contact').addEventListener('keyup', (e) => {
        if (e.target.checkValidity() === true) {
          $(e.target).removeClass('invalid').addClass('valid');
        } else {
          $(e.target).addClass('invalid').removeClass('valid');
        }
      }, true);

      document.getElementById('contact').addEventListener('submit', (e) => {
        e.preventDefault();

        const data = form.serializeArray();
        const message = UIKit.notify({
          message: 'Submitting',
          timeout: 0,
          status: 'default',
          pos: 'top-center',
        });

        form
          .find('input, textarea, select, button')
          .addClass('blocked')
          .attr('disabled', 'disabled');

        $.ajax(
          'https://hooks.zapier.com/hooks/catch/247165/l7oaeq/',
          {
            data,
            dataType: 'json',
            method: 'POST',
          },
        ).fail(() => {
          form
            .find('input, textarea, select, button')
            .removeClass('blocked')
            .removeAttr('disabled');
          form.prepend('<div class="uk-notify-message uk-margin-large-bottom">Problem submitting your message. Please email me@cameronhurd.com if this persists!</div>');
        }).done(() => {
          form.find('.has-float-label').css('opacity', 0.8);
          form.prepend('<div class="uk-notify-message uk-margin-large-bottom">Thank you. Your message was recieved!</div>');
          form.find('button').fadeOut();
        }).always(() => {
          message.close();
        });
      }, true);
    });
  }
})(jQuery);
