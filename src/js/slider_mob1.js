const toggleButton = document.getElementById('toggle-button-mob');
const upSlide = document.querySelector('.wrap__slide-up');
const downSlide = document.querySelector('.wrap__slide-down');
const menuButton = document.querySelector('.icon__menu-button-mob');

const animationDuration = '1s';
const easingFunction = 'linear';
upSlide.style.transition = `transform ${animationDuration} ${easingFunction}`;
downSlide.style.transition = `transform ${animationDuration} ${easingFunction}`;

// Додаємо обробник кліку на кнопку
toggleButton.addEventListener('click', () => {
  // Оприлюднюємо стани анімації та змінюємо transform відповідно
  if (upSlide.style.animationPlayState === 'running') {
    upSlide.style.animationPlayState = 'paused';
    downSlide.style.animationPlayState = 'paused';

    // Затримка перед зміною transform
    setTimeout(() => {
      menuButton.style.transform = 'rotate(90deg)';
      upSlide.style.transform = 'translateY(-120%)';
      downSlide.style.transform = 'translateY(100%)';
    }, 200); // Змініть затримку на потрібну вам
  } else {
    upSlide.style.animationPlayState = 'running';
    downSlide.style.animationPlayState = 'running';

    // Затримка перед зміною transform
    setTimeout(() => {
      menuButton.style.transform = 'rotate(180deg)';
      upSlide.style.transform = 'translateY(0%)';
      downSlide.style.transform = 'translateY(0%)';
    }, 0); // Змініть затримку на потрібну вам
  }
});
