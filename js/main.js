$(function(){
  var paralax = {
    paralax1 : $('.paralax1'),
    paralax2 : $('.paralax2'),
    paralax3 : $('.paralax3'),
    paralax4 : $('.paralax4'),
    paralax5 : $('.paralax5'),
    paralax6 : $('.paralax6'),
    paralax7 : $('.paralax7'),
    paralax8 : $('.paralax8'),
    paralax9 : $('.paralax9'),
    paralax10 : $('.paralax10'),
    paralaxfon2 : $('.paralaxfon2'),
  }

  $(document).mousemove(function(e){

    var position = {
      valueX : (e.pageX * -1/15),
      valueY : (e.pageY * -1/15),
      valueX2 : (e.pageX * -1/30),
      valueY2 : (e.pageY * -1/30),
      valueX3 : (e.pageX * -1/8),
      valueY3 : (e.pageY * -1/8),
    }

    paralax.paralax1.css({
      'transform':'translate3d('+position.valueX2/4+'px, '+position.valueY2/4+'px, 0)'
    })
    paralax.paralax2.css({
      'transform':'translate3d('+(position.valueX2/2)+'px, '+(position.valueX2/2)+'px, 0)'
    })
    paralax.paralax3.css({
      'transform':'translate3d('+(position.valueX2/-2)+'px, '+(position.valueY2/-2)+'px, 0)'
    })
    paralax.paralax4.css({
      'transform':'translate3d('+(position.valueX2/4)+'px, '+(position.valueY2/4)+'px, 0)'
    })
    paralax.paralax5.css({
      'transform':'translate3d('+(position.valueX2/-4)+'px, '+(position.valueY2/-4)+'px, 0)'
    })
    paralax.paralax6.css({
      'transform':'translate3d('+(position.valueX2/-1)+'px, '+(position.valueY2/-1)+'px, 0)'
    })
    paralax.paralax7.css({
      'transform':'translate3d('+(position.valueX2/2)+'px, '+(position.valueY2/2)+'px, 0)'
    })
    paralax.paralax8.css({
      'transform':'translate3d('+(position.valueX2/5)+'px, '+(position.valueY2/5)+'px, 0)'
    })
    paralax.paralax9.css({
      'transform':'translate3d('+(position.valueX2/-5)+'px, '+(position.valueY2/-5)+'px, 0)'
    })
    paralax.paralax10.css({
      'transform':'translate3d('+(position.valueX2/4)+'px, '+(position.valueY2/4)+'px, 0)'
    })
    paralax.paralaxfon2.css({
      'transform':'translate3d('+(position.valueX2/-6)+'px, '+(position.valueY2/-6)+'px, 0)'
    })
  })

  if ($('.select-options ul li').hasClass('selected')) {
    $('.select .input').text($('.select-options li.selected > span:first-child').text());
    $('.select-hidden').val($('.select-options li.selected > span:first-child').text())
  }

  $('.select').click(function() {
    $(this).find('.select-options').toggleClass('visible');
  });
  $('.select-options li').click(function() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $(this).closest('.select').find('.input').text($(this).find('span:first-child').text());
    $(this).closest('.select').find('.select-hidden').val($(this).find('span:first-child').text())
  });

  
  
  var scroll = function(){
    var animate = function(x, y, name){
      if($(window).scrollTop() <= x && $(window).scrollTop() >= y ){
        $(name).addClass('animate')
      }
    }
    $('.sale').addClass('animate')
    animate(279, 179, '.aboutSale');
    animate(600, 500, '.animation');
    animate(1400, 1200, '.howSale');
    animate(1800, 1600, '.advantages');
    animate(2000, 1800, '.product');
    animate(3200, 3000, '.rewiev');
    animate(4100, 3800, '.contact');


    $(window).on('scroll', function(){
      animate(279, 179, '.aboutSale');
      animate(600, 500, '.animation');
      animate(1400, 1200, '.howSale');
      animate(1800, 1600, '.advantages');
      animate(2000, 1800, '.product');
      animate(3200, 3000, '.rewiev');
      animate(4100, 3800, '.contact');
    
    })
  
  }

  scroll();

  
  $(".menu-icon").on("click", function() {
    $(this).toggleClass("active");
    $(this).find("div").removeClass("no-animation");
    $('.subMenu').toggleClass('active')
    $('.subMenuRedPattern').toggleClass('active')
  });

  $(window).resize(function(){
    if($(this).width() > 1200){
      $(".menu-icon").removeClass('active')
      $('.subMenu').removeClass('active')
      $('.subMenuRedPattern').removeClass('active')
    }
  })


  $('.saleWeaponBtn, .weaponAboutButton').on('click', function(){
    $('.black-window').addClass('active');
    $('.sale-form-modal-content').addClass('active');
  })

  $('.black-window, .sale-form-modal-close').on('click', function(){
    $('.black-window').removeClass('active');
    $('.sale-form-modal-content').removeClass('active');
  })

  $('.tabs-item').on('click', function(){
    var id = $(this).attr('data-id')
    $('.tabsBox').removeClass('active')
    $('#'+id).addClass('active')
    $('.tabs-item').removeClass('active');
    $(this).addClass('active');
  })

  $('.productAddBtn').on('click', function(){
    $(this).css({'display': 'none'})
    $('.productitem').css({'display': 'block'})
  })
  

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: $('.sliderLength').length,
    slidesPerView: $('.sliderLength').length,
    loop: true,
    freeMode: true,
    loopedSlides: $('.sliderLength').length + 1, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: $('.sliderLength').length,
    loop:true,
    loopedSlides: $('.sliderLength').length + 1, //looped slides should be the same
    navigation: {
      nextEl: '.nextBtn',
      prevEl: '.prevBtn',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  

})