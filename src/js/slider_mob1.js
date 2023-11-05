

/*const containerslideUp = document.querySelector('.wrap-container__left-slide');
const containerslideDown = document.querySelector('.wrap-container__right-slide');

let isAnimationPaused = false;

toggleButton.addEventListener('click', () => {
  if (!isAnimationPaused) {
    // Крок 1: Зупинка анімації слайдерів
    upSlide.style.animationPlayState = 'paused';
    downSlide.style.animationPlayState = 'paused';

    // Крок 2: Зміщення слайдерів через 1500 мс
    setTimeout(() => {
      menuButton.style.transform = 'rotate(90deg)';
      buttonLeft.style.opacity = "1";
      buttonRight.style.opacity = "1";
      containerslideUp.style.transition = 'transform 2s ease';
      containerslideDown.style.transition = 'transform 2s ease';
      containerslideUp.style.transform = 'translatey(-100%)';
      containerslideDown.style.transform = 'translatey(100%)';
    }, 1200);

    // Крок 3: Зникнення слайдерів через 1500 мс
    setTimeout(() => {
      mobslide.style.display='none';
    }, 3000);

    // Крок 4: Запуск анімації елементів меню через 2 секунди
    setTimeout(() => {
      menuItems.forEach((item, index) => {
        item.style.transition = 'transform 0.5s ease';
        item.style.animation = `menuButton${index + 1} 2s forwards`;
      });
    }, 2000);
  } else {
    // Крок 5: Анімація елементів меню у зворотному порядку
    setTimeout(() => {
    menuItems.forEach((item, index) => {
      item.style.transition = 'transform 0.5s ease';
      item.style.animation = `menuButton${index - 1} 2s reverse forwards`;
   
    });
  }, 500);
       // Крок 6: Поява слайдерів 
    setTimeout(() => {
      mobslide.style.display='block';
      buttonLeft.style.opacity = "0";
      buttonRight.style.opacity = "0";
    }, 2000);
    // Крок 7: Повернення слайдерів назад
    setTimeout(() => {
      // Крок 7: Повернення слайдерів назад
      menuButton.style.transform = 'rotate(180deg)';
      containerslideUp.style.transform = 'translateX(0%)';
      containerslideDown.style.transform = 'translateX(0%)';
      containerslideUp.style.transition = 'transform 2s ease';
      containerslideDown.style.transition = 'transform 2s ease';
 }, 2300);

    // Крок 8: Запуск анімації слайдерів через 2.3 секунди
    setTimeout(() => {
      upSlide.style.animationPlayState = 'running';
      downSlide.style.animationPlayState = 'running';
    }, 5000);
  }

  isAnimationPaused = !isAnimationPaused;
})*/