$(document).ready(function(){
  $('.products').click(function(event){
    event.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).parent().find('ul').slideToggle();
  })
})