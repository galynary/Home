const toggleButton = document.querySelector('.button__menu-open');
const slideLeft = document.querySelector('.wrap__left-slide');
const slideRight = document.querySelector('.wrap__rigth-slide');
const wrapSlide = document.querySelector('.wrap__slide');
let rotatedButton = false;

toggleButton.addEventListener('click', () => {
  if (!rotatedButton) {
    toggleButton.style.transform = 'rotate(90deg)';
    slideLeft.style.transform = 'translateX(-100%)';
    slideRight.style.transform = 'translateX(100%)';
    wrapSlide.style.display = 'none';
  } else {
    toggleButton.style.transform = 'rotate(180deg)';
    slideLeft.style.transform = 'translateX(0%)';
    slideRight.style.transform = 'translateX(0%)';
    wrapSlide.style.display = 'block';
  }

  rotatedButton = !rotatedButton;
});
