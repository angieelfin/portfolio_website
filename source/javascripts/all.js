//= require jquery
//= require_tree .

$(document).ready(function(){

// navigation smooth scrolling 
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 350, 'swing', function () {
        window.location.hash = target;
    });
  });
 

// menu icon animation
  $('.js-menu-button').on('click', function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('menu-active');
  });


 // footer icons animation
  $(window).scroll(function(){
    var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if(scrollBottom <= 20) {

      $('.icon-circle').each(function(i){
        $(this).animate({opacity: 1}, 550 * (i+1));
      });
    }

    var wScroll = $(this).scrollTop();
    var sectionNames = ['header', 'section-about'];
    var i;

    for (i = 0; i < sectionNames.length; i++) {
      if(wScroll > $('.'+sectionNames[i]).offset().top) {
        $('.'+sectionNames[i]).find('.button-ghost').addClass('btn-appear');
      }
    }
  });


// button appearing when scroll into section
 

// galleries
  $('.thumb').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
    var img = $(this).attr('src');
    $('.gallery').append('<div class="gallery-active"><img src="' + img + '" /><span class="button-close"">&times;</span></div>');
  });

  $('.gallery').delegate('.button-close', 'click', function() {
    // $('.gallery-active').animate({transform: scale(0.05)}, 200, function(){
    //    $('.gallery-active').remove();
    //  });
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

// form submission
  $('.form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/contact', {
      type: 'POST',
      data: $('.form').serialize(),
      success: function() {
        $('.button-send').remove();
        $('.section-contact').append('<p class="form-success">Thank you! Your message was successfully send!</p>');
        alert('send');
      },
      error: function() {
        $('.contact-content').append('<p class="form-error">Oops! Something went wrong, please try again.</p>');
        alert('error');
      }
    });
    return false;
  });

});


