//= require_tree .
//= require jquery
$(document).ready(function(){

// navigation smooth scrolling 
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 200, 'swing', function () {
          window.location.hash = target;
      });
  });
 

// menu icon animation
  $('.menu-icon').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('menu-active-js');
  });

// footer icons animation
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.section-5-footer').offset().top - ($(window).height()/1.7)) {
        $('.social-icon').each(function(i){

          setTimeout(function(){
            $('.social-icon').eq(i).addClass('is-showing');
          }, 150 * (i+1));
        });
      }
// button appearing when scroll into section
    var sectionNames = ['section-1-header', 'section-2-about'];
    var i;

    for (i = 0; i < sectionNames.length; i++) {

      if(wScroll > $('.'+sectionNames[i]).offset().top) {
        $('.'+sectionNames[i] + ' .ghost-button').addClass('btn-appear');
      }
    }



  });
  
  $('.view-work').on('click',function (e) {
      e.preventDefault();
      $('.work-subsections').slideToggle();

        var target = this.hash;
        var $target = $('a[href="#subsections"]');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 170
        }, 200, 'swing');
    });

});