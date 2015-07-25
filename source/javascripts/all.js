//= require_tree .
//= require jquery
$(document).ready(function(){
  $('.menu-icon').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('menu-active-js');
  });
});

