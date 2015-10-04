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
      }, 500, 'swing', function () {
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
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.footer').offset().top - ($(window).height()/1.7)) {
        $('.icon-circle').each(function(i){

          setTimeout(function(){
            $('.icon-circle').eq(i).addClass('is-showing');
          }, 150 * (i+1));
        });
      }
  });

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
  });

  $('.thumb-box').on('click', function(e) {
    e.preventDefault();

    var img = $(this).attr('src');

    $('.gallery').append('<div class="gallery-active"><img src="' + img + '"/><span class="close">&times;</span></div>');
  });

  $('.gallery').delegate('.close', 'click', function() {
    $('.gallery-active').addClass('inactive');
    setTimeout(function() {
      $('.gallery-active').remove();
    }, 200);
  });

  $('#email-form').on('submit', function(event) {
    event.preventDefault();
    if($(this).valid()) {
      var $emailInput = $("[name='email']");
      var $nameInput = $("[name='name']");
      var $messageInput = $("[name='message']");
      var $errorMessage = $('.form-error');

      $.ajax({
        url: '/contact',
        type: 'POST',
        dataType: "json",
        async: true,
        jsonp: false,
        data: {
          email: $emailInput.val(),
          name: $nameInput.val(),
          body: $messageInput.val()
        },
      })
      .done(function(data) {
          $('.send-button').remove();

          $(".form-input").each(function(i, input) {
            $(input).val("")
          });

          if ($errorMessage.length > 0) {
            $('.form-error').remove()
          }

          $('.section-contact-content').
            append('<p class="form-success">Thank you! Your message was successfully send!</p>');
      })
      .error(function(xhr, err, status) {
        if (!$errorMessage.length > 0) {
          $('.section-contact-content')
          .append('<p class="form-error">Oops! Something went wrong, please try again.</p>');
        }
      })
    }
  });
});
