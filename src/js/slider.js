const slideButton = document.querySelector('.button__menu-open');
const slideLeft = document.querySelector('.wrap__left-slide');
const slideRight = document.querySelector('.wrap__rigth-slide');
const wrapSlide = document.querySelector('.wrap__slide');
const menuButton = document.querySelector('.icon__menu-button');

let isToggled = true;

menuButton.style.transform = 'rotate(180deg)';
slideButton.addEventListener('click', () => {
  if (isToggled) {
    slideLeft.style.transform = 'translateX(0)';
    slideRight.style.transform = 'translateX(0)';
    menuButton.style.transform = 'rotate(180deg)';
    slideLeft.style.transition = 'transform 1.5s ease';
    slideRight.style.transition = 'transform 1.5s ease';
  } else {
    slideLeft.style.transform = 'translateX(-100%)';
    slideLeft.style.transition = 'transform 1.5s ease';
    slideRight.style.transition = 'transform 1.5s ease';
    slideRight.style.transform = 'translateX(100%)';
    menuButton.style.transform = 'rotate(90deg)';
    wrapSlide.style.display = 'none';
  }

  isToggled = !isToggled;
  setTimeout(function () {
    if (
      slideLeft.style.transform === 'translateX(-100%)' &&
      slideRight.style.transform === 'translateX(100%)'
    ) {
      wrapSlide.style.display = 'none';
    }
  }, 5000);
});
