$(document).ready(function(){
  // 點nav-list時選單收縮
  $('.products').click(function(event){
    event.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).parent().find('ul').stop().slideToggle();
  })
  // 點折疊選單內的選項時，選單收起
  $('.products').parent().find('ul li a').click(function(event){
    event.preventDefault();
    $('.products').parent().toggleClass('active');
    $(this).parent().parent().slideToggle();
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
      delay: 4000,
    },
    speed: 800,
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 300,
    'positionFromTop':200,
  })
})