
var swiper;

// Function to initialize Swiper
function initSwiper() {
  swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, 
    spaceBetween: 30, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function expandDiv(element) {
  element.classList.toggle('expanded');
  
  if (element.classList.contains('expanded')) {
   
    swiper.params.slidesPerView = 1;
  } else {
   
    swiper.params.slidesPerView = 4;
  }
  
  
  swiper.update();
}


document.addEventListener("DOMContentLoaded", function() {
  initSwiper();
});
