document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper-container', {
    direction: 'vertical', // Налаштування для вертикального слайдера
    slidesPerView: 1,
    watchOverflow: true,
    autoHeight: true,
    loop: true,
    freeMode: true,
    initialSlide: 1, // Кількість видимих слайдів одночасно
    spaceBetween: 0, // Відстань між слайдами (пікселі)
    mousewheel: {
      sensitivity: 1,
    },
  });
});
