$(function () {


  // scroll menu
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

  // modal-menu
  $('.header__menu-button').on('click', function () {
    $('.modal-menu').addClass('active');
    $('body').addClass('lock');
  });
  $('.close_button').on('click', function () {
    $('.modal-menu').removeClass('active');
    $('body').removeClass('lock');
  });


  $('.click').on('click', function () {
    $('.modal').addClass('activ');
  });
  $('.close').on('click', function () {
    $('.modal').removeClass('activ');
  });

  $('.header__lists  >li:nth-child(3)').hover(function () {
    $('.header__hover-menu').toggleClass('activ');
  });




  // mask
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

  // mask
  $('#phone-modal').on('click', function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");
  $('#phone-banner').on('click', function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");
  $('#phone-footer__form').on('click', function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");
  $('#phone-answer').on('click', function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");


  document.querySelectorAll(".filters .blog__btn").forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      const filters = document.querySelectorAll(".filters .blog__btn");
      const tabs = document.querySelectorAll(".tabs__list .blog__items");

      filters.forEach(function (tab) {
        tab.classList.remove("blog__active-btn");
      });
      this.classList.add("blog__active-btn");

      tabs.forEach(function (tabContent) {
        tabContent.classList.remove("blog__active-btn");
      });
      tabs[index].classList.add("blog__active-btn");

    });
  });
  document.querySelectorAll(".filters .clients__btn").forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      const filters = document.querySelectorAll(".filters .clients__btn");
      const tabs = document.querySelectorAll(".tabs__list .clients__items");

      filters.forEach(function (tab) {
        tab.classList.remove("clients_active-btn");
      });
      this.classList.add("clients_active-btn");

      tabs.forEach(function (tabContent) {
        tabContent.classList.remove("clients_active-btn");
      });
      tabs[index].classList.add("clients_active-btn");

    });
  });

  // tabs list
  document.querySelectorAll(".select").forEach((el) => {
    el.addEventListener("click", function (e) {
      if (e.target && e.target.matches(".option")) {
        // this.querySelector(".shown").innerHTML = e.target.innerHTML;
      }
      this.classList.toggle("collapsed");
    });
  });


  // uPTop
  $('.back-to-top').click(function () {
    $('body,html').animate({scrollTop: 0}, 800); // 800 - Скорость анимации
  });

  $(window).scroll(function () { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back-to-top').addClass('active');
    } else {
      $('.back-to-top').removeClass('active');
    }
  });

  // popup qs
  $(".questions__item-subtext").click(function () {
    $(this).parent().find(".questions__item-text").slideToggle();
    $(this).toggleClass("opened");
    return false;
  });

  // popup qs
  $(".vacancies__item-title").click(function () {
    $(this).parent().find(".vacancies__item-text").slideToggle();
    $(this).toggleClass("opened");
    return false;
  });




})

