$(document).ready(function(){

  setTimeout(function() {
    $("body").find(".content").removeClass("active");
  }, 200);

  //Declare window height
  var wHeight = $(window).height();
  $(".banner-hero").css("height", wHeight);
  $(".footer-hero").css("height", wHeight);

  // Parallax Scroll function
  function parallaxScroll(){
    var scrolledY = $(window).scrollTop();
    //$('.footer-hero').css('background-position','center -'+((scrolledY*0.2))+'px');
    $('.banner-hero').css('background-position','center -'+((scrolledY*0.3))+'px');
  };

  if ($(window).width() > 768 ) {
    $(window).bind('scroll',function(e){
      parallaxScroll();
    });
  };

  // Parallax logo init
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);

  // accordion init function
  $(document).foundation({
    accordion: {
      toggleable: true
    }
  });

  // Accordion toggle class function
  $(".accordion dd").on("click", "a:eq(0)", function (event) {
    var dd_parent = $(this).parent();

    if ($(this).parent().hasClass('active')) {
      $(".accordion dd div.content:visible").slideToggle("normal");
      $(this).parent().siblings().removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".accordion dd div.content:visible").slideToggle("normal");
      $(this).parent().find(".content").slideToggle("normal");
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
    }
    return false;
  });

  // Accordion click function
  $(".about-me").click(function(){
    $('body,html').animate({scrollTop:
      $("#info").offset().top
    }, 750);
  });

  $(".skills-exp").click(function(){
    $('body,html').animate({scrollTop:
      $("#info").offset().top
    }, 750);
  });

  $(".gallery-port").click(function(){
    $('body,html').animate({scrollTop:
      $("#info").offset().top
    }, 750);
    $(window).resize();
  });

  $(".snippets-misc").click(function(){
    $('body,html').animate({scrollTop:
      $("#info").offset().top
    }, 750);
  });

  // Arrow in banner hero
  $(".fa-angle-down").click(function(){
    $('body,html').animate({scrollTop:
      $("#info").offset().top
    }, 750);
    return false;
  });

  // Slider init
  function sliderInit() {
    if ($(window).width() > 768 ) {
      var mySwiper = new Swiper ('.portfolio-slider', {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 50,
        simulateTouch: false
      });
    } else if ($(window).width() > 361 && $(window).width() < 769  ) {
      var mySwiper = new Swiper ('.portfolio-slider', {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 20,
        paginationClickable: true
      });
    } else if ($(window).width() < 361  ) {
      var mySwiper = new Swiper ('.portfolio-slider', {
        loop: false,
        slidesPerView: 1,
        paginationClickable: true
      });
    }

    var count = 1;

    $(".nav-slide .prev").click(function() {
      mySwiper.slidePrev();
      return false;
      count--;
      console.log(count);
    });

    $(".nav-slide .next").click(function() {
      count++;
      mySwiper.slideNext();
      return false;
      console.log(count);
    });
  };
  sliderInit();

  var count = 1;

  $(".nav-slide .prev").click(function() {
    if (count - 1 < 2) {
     $(this).addClass("hide");
    };
    if (count - 1 < 5) {
      $(".nav-slide .next").removeClass("hide");
    }
    count--;
  });

  $(".nav-slide .next").click(function() {
    if (count + 1 >= 2) {
     $(".nav-slide .prev").removeClass("hide");
    };
    if (count + 1 == 5) {
      $(this).addClass("hide");
    }
    count++;
  });

  // Popup in slide init
  $('.swiper-slide').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    image: {
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out'
    }
  });

  // Instafeed Init
  if ($(window).width() > 768 ) {
    var userFeed = new Instafeed({
      get: 'user',
      userId: 4840732,
      accessToken: '4840732.64568a9.d55249c47fe244159268044adffb487e',
      limit: 18,
      template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
      sortBy: 'random'
    })
  } else {
    var userFeed = new Instafeed({
      get: 'user',
      userId: 4840732,
      accessToken: '4840732.64568a9.d55249c47fe244159268044adffb487e',
      limit: 16,
      template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
      sortBy: 'random'
    })
  };
  userFeed.run();

  //Resize function
  $(window).resize(function() {
    var wHeight = $(window).height();
    $(".banner-hero").css("height", wHeight);
    $(".footer-hero").css("height", wHeight);
    sliderInit();
  });

});