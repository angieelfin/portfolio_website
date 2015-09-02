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
    }, 350, 'swing', function () {
        window.location.hash = target;
    });
  });
 

// menu icon animation
  $('.js-menu-button').on('click', function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('menu-active');
  });

  $(window).scroll(function(){
    var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());
    console.log(scrollBottom);
    if(scrollBottom == 20) {
      $('.icon-circle').each(function(i){
        $(this).eq(i).animate({
        left: "20px",
        opacity: 1
      }, "slow", "easein");

    )}
  )};

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

// button appearing when scroll into section
    var sectionNames = ['header', 'section-about'];
    var i;

    for (i = 0; i < sectionNames.length; i++) {
      if(wScroll > $('.'+sectionNames[i]).offset().top) {
        $('.'+sectionNames[i] + ' .ghost-button').addClass('btn-appear');
      }
    }

  });

// galleries
  $('.thumb').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
    var img = $(this).attr('src');
    $('.gallery').append('<div class="gallery-active"><img src="' + img + '" /><span class="button-close"">&times;</span></div>');
  });

  $('.gallery').delegate('.button-close', 'click', function() {
    $('.gallery-active').animate({
      transform: scale(.05)
    }, 200, function(){
       $('.gallery-active').remove();
    });
    // .addClass('inactive');
    // setTimeout(function() {
    //   $('.gallery-active').remove();
    // }, 200);
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