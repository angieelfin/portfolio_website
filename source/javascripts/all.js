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

  $('.menu-button').on('click', function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('js-menu-active');
  });

// footer icons animation
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.section-footer').offset().top - ($(window).height()/1.7)) {
        $('.icon-circle').each(function(i){

          setTimeout(function(){
            $('.icon-circle').eq(i).addClass('is-showing');
          }, 150 * (i+1));
        });
      }
// button appearing when scroll into section
    var sectionNames = ['section-header', 'section-about'];
    var i;

    for (i = 0; i < sectionNames.length; i++) {

      if(wScroll > $('.'+sectionNames[i]).offset().top) {
        $('.'+sectionNames[i] + ' .ghost-button').addClass('btn-appear');
      }
    }

  });

// galleries
  $('.thumb-box').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
    var img = $(this).attr('src');

      $('.gallery').append('<div class="gallery-active"><img src="' + img + '" /><span class="close"">&times;</span></div>');
  });

  $('.gallery').delegate('.close', 'click', function() {
    $('.gallery-active').addClass('inactive');
    setTimeout(function() {
      $('.gallery-active').remove();
    }, 200);
  });
   
// form validation
  $("#email-form").validate({
    
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
            }
        },

        messages: {
            name: "Please enter your name",
            message: "Please enter your message",
            email: "Please enter a valid email address"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

});


