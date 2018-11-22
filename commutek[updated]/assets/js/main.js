jQuery(document).ready(function ($) {


//    featured slider
    var swiper = new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
        loop: true,
        slidesPerView: 'auto',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        coverflow: {
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false
        }
    });


});




$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

(function ($) {

    "use strict";

    //WOW JS
    new WOW().init();

    //Navbar Srink
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 100) {
            $('.navbar').addClass('shrink');
        } else {
            $('.navbar').removeClass('shrink');
        }
    });

    //Page Smooth Scroll
    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: null,
        speed: 1000,
        easing: 'easeInQuint',
        offset: 0,
        callback: function (anchor, toggle) {}
    });

    // comming soon countdown
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime(
                '<div class="cdown col"><span class="days"><strong>%-D</strong><p>Days.</p></span></div><div class="cdown col"><span class="hour"><strong> %-H</strong><p>Hours.</p></span></div> <div class="cdown col"><span class="minutes"><strong>%M</strong> <p>Minutes.</p></span></div><div class="cdown col"><span class="second"><strong> %S</strong><p>Second.</p></span></div>'
            ));
        });
    });

    // mailchimp start
    if ($('.mailchimp').length > 0) {
        /*  MAILCHIMP  */
        $('.mailchimp').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "http://codecorns.us17.list-manage.com/subscribe/post?u=1b0747ae5d7b7ac4cd24e600b&amp;id=96bc008c17" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);

        } else if (resp.result === 'error') {
            $('.subscription-error').html('<i class="fa fa-times"></i><br/>' + resp.msg).fadeIn(1000);
        }
    }

    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter a value',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };


    //Demo Toggle     
    $(".demo-switch").on('click',function(){
        $(".demoToggle").animate({
            right: '0',
        });
    });
    
})(jQuery);