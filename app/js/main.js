$(function () {

  if (window.innerWidth > 1276) {
    $(window).scroll(function () {
      var sticky = $('.sticky'),
        adress = $('.adress'),
        scroll = $(window).scrollTop();

      if (scroll >= 100) {
        sticky.addClass('fixed');
        adress.addClass('none');
      }
      else {
        sticky.removeClass('fixed')
        adress.removeClass('none');
      };
    });
  } else {
    $('.sticky').addClass('fixed');
    $('.adress').addClass('none');
  }




  $('.click').on('click', function () {
    $('.modal').addClass('activ');
  });
  $('.close').on('click', function () {
    $('.modal').removeClass('activ');
  });

  $('.header__lists  >li:nth-child(3)').hover(function () {
    $('.header__hover-menu').toggleClass('activ');
  });



  $('.menu >li:nth-child(3)').on('click', function (e) {
    e.preventDefault();
    let hover = $('.menu__hover')
    hover.toggleClass('activ');
  });


  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };


  $('#phone-modal').on('click', function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");
  $('#phone-banner').on('click', function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");


})