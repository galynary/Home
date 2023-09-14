const toggleButton = document.getElementById('toggle-button');
const leftSlide = document.querySelector('[data-slide-left]');
const rightSlide = document.querySelector('[data-slide-right]');
const menuButton = document.querySelector('.icon__menu-button');

const animationDuration = '1s';
const easingFunction = 'linear';
leftSlide.style.transition = `transform ${animationDuration} ${easingFunction}`;
rightSlide.style.transition = `transform ${animationDuration} ${easingFunction}`;

// Додаємо обробник кліку на кнопку
toggleButton.addEventListener('click', () => {
  // Оприлюднюємо стани анімації та змінюємо transform відповідно
  if (leftSlide.style.animationPlayState === 'running') {
    leftSlide.style.animationPlayState = 'paused';
    rightSlide.style.animationPlayState = 'paused';

    // Затримка перед зміною transform
    setTimeout(() => {
      menuButton.style.transform = 'rotate(90deg)';
      leftSlide.style.transform = 'translateX(-100%)';
      rightSlide.style.transform = 'translateX(100%)';
    }, 200); // Змініть затримку на потрібну вам
  } else {
    leftSlide.style.animationPlayState = 'running';
    rightSlide.style.animationPlayState = 'running';

    // Затримка перед зміною transform
    setTimeout(() => {
      menuButton.style.transform = 'rotate(180deg)';
      leftSlide.style.transform = 'translateX(0%)';
      rightSlide.style.transform = 'translateX(0%)';
    }, 0); // Змініть затримку на потрібну вам
  }
});
