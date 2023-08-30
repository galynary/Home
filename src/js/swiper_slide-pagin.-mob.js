import Swiper from 'swiper/swiper-bundle';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/swiper.scss';
const swiper = new Swiper('.my__swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000, // Затримка між слайдами (у мілісекундах)
    disableOnInteraction: true, // Автопрокрутка не зупиняється при взаємодії користувача
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true, // Включення навігації стрілками на клавіатурі
  },

  spaceBetween: 20,
});
