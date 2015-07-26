//= require_tree .
//= require jquery
$(document).ready(function(){



  $('.menu-icon').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('menu-active-js');
  });


  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.section-5-footer').offset().top - ($(window).height()/1.7)) {
        $('.social-icon').each(function(i){

          setTimeout(function(){
            $('.social-icon').eq(i).addClass('is-showing');
          }, 150 * (i+1));
        });
      }


    if(wScroll > $('.section-2-about').offset().top - 50) {
      $('.white-letters').addClass('sea-green-letters');
      console.log('hi');
    }

  });
});