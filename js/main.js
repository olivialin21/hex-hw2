$(document).ready(function(){
  // 點“產品介紹”時，選單收縮
  $('.products').click(function(event){
    event.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).parent().find('ul').stop().slideToggle();
  });
  // 點選項或空白處時，選單收起
  $(document).click(function(event){
    if(!$('.products').is(event.target) && $('.products').has(event.target).length === 0){
      $('.products').parent().removeClass('active');
      $('.products').parent().find('ul').slideUp();  //滑動消失
    }
  });
  // top
  $('.top').click(function(){
    $('html,body').animate({
      scrollTop: 0
    }, 300);
  });

  // swiper
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

  // lightBox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 300,
    'positionFromTop':200,
  })
})