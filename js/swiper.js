
const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  loop: true,
  speed: 1200,
  freeModeMomentum: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    450: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 2.3,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 2.3,
      spaceBetween: 30
    }
  }
});



