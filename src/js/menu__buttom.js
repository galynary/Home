const toggleButton = document.querySelector('.button__menu-open');
const slideLeft = document.querySelector('.wrap__left-slide');
const slideRight = document.querySelector('.wrap__rigth-slide');

let rotatedButton = false;

toggleButton.addEventListener('click', () => {
  if (!rotatedButton) {
    toggleButton.style.transform = 'rotate(90deg)';
    slideLeft.style.transform = 'translateX(-100%)';
    slideRight.style.transform = 'translateX(100%)';
  } else {
    toggleButton.style.transform = '';
    slideLeft.style.transform = '';
    slideRight.style.transform = '';
  }
  slideLeft.style.transition = 'transform 0.9s';
  slideRight.style.transition = 'transform 0.9s';

  rotatedButton = !rotatedButton;
});
