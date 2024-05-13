"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });
  });
  var main_swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000
    }
  });

  // キャンペーンカードスワイパー
  var campaign_swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    centeredSlides: true,
    // スライドを中央に配置
    spaceBetween: 24,
    slidesPerView: 1,
    speed: 3000,
    // loopAdditionalSlides: 1,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  //アニメーション
  var box = $('.colorbox'),
    speed = 700;
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;
    image.css('opacity', '0');
    color.css('width', '0%');
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({
          'width': '100%'
        }, speed, function () {
          image.css('opacity', '1');
          $(this).css({
            'left': '0',
            'right': 'auto'
          });
          $(this).animate({
            'width': '0%'
          }, speed);
        });
        counter = 1;
      }
    });
  });
});