var swiper = new Swiper(".trust-wrapper .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
    }
  });