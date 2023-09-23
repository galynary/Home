const toggleButton = document.getElementById('toggle-button');
const leftSlide = document.querySelector('[data-slide-left]');
const rightSlide = document.querySelector('[data-slide-right]');
const wrapSlide = document.querySelector('.swiper__hero');
const wrapLeftSlide = document.querySelector('.wrap__left-slide');
const wrapRightSlide = document.querySelector('.wrap__right-slide');
const menuButton = document.querySelector('.icon__menu-button');
const menuItems = document.querySelectorAll('.menu-button__item');

let isAnimationPaused = false;

toggleButton.addEventListener('click', () => {
  if (!isAnimationPaused) {
    // Крок 1: Зупинка анімації слайдерів
    wrapLeftSlide.style.animationPlayState = 'paused';
    wrapRightSlide.style.animationPlayState = 'paused';

    // Крок 2: Зміщення слайдерів через 1500 мс
    setTimeout(() => {
      menuButton.style.transform = 'rotate(90deg)';
      leftSlide.style.transform = 'translateX(-100%)';
      rightSlide.style.transform = 'translateX(100%)';
    }, 1200);

    // Крок 3: Зникнення слайдерів через 1500 мс
    setTimeout(() => {s
      wrapSlide.style.display='none';
    }, 3000);

    // Крок 4: Запуск анімації елементів меню через 2 секунди
    setTimeout(() => {
      menuItems.forEach((item, index) => {
        item.style.transition = 'transform 0.5s ease';
        item.style.animation = `menuButton${index + 1} 2s forwards`;
      });
    }, 2500);
  } else {
    // Крок 5: Анімація елементів меню у зворотному порядку
    menuItems.forEach((item, index) => {
      item.style.transition = 'transform 5s ease';
      item.style.animationName = `menuButton${index + 1}`;
      item.style.animation = `menuButton${index + 1} 2s reverse forwards`;
      item.style.transform = 'translate(0,0)'; // Повернення в початкове положення
    });
       // Крок 6: Поява слайдерів 
    setTimeout(() => {
      wrapSlide.style.display='block';
    }, 500);
    // Крок 7: Повернення слайдерів назад
    setTimeout(() => {
      // Крок 7: Повернення слайдерів назад
      menuButton.style.transform = 'rotate(180deg)';
      leftSlide.style.transform = 'translateX(0%)';
      rightSlide.style.transform = 'translateX(0%)';
     
     
    }, 700);

    // Крок 8: Запуск анімації слайдерів через 2.3 секунди
    setTimeout(() => {
      wrapLeftSlide.style.animationPlayState = 'running';
      wrapRightSlide.style.animationPlayState = 'running';
    }, 2300);
  }

  isAnimationPaused = !isAnimationPaused;
});