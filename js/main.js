$(document).ready(function(){
  $('.products').click(function(event){
    event.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).parent().find('ul').slideToggle();
  })

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    speed: 800,
  });
})