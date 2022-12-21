// Swiper
      var swiper = new Swiper(".mySwiper", {
        effect: "cube", autoplay:true, keyboard : true,
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: -80,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
// Swiper