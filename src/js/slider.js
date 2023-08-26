const slideButton = document.querySelector('.button__menu-open');
const slideLeft = document.querySelector('.wrap__left-slide');
const slideRight = document.querySelector('.wrap__rigth-slide');
const wrapSlide = document.querySelector('.wrap__slide');
const menuButton = document.querySelector('.icon__menu-button');

let isToggled = true;
wrapSlide.style.display = 'block';
menuButton.style.transform = 'rotate(180deg)';

slideButton.addEventListener('click', () => {
  if (isToggled) {
    slideLeft.style.transform = 'translateX(0)';
    slideRight.style.transform = 'translateX(0)';
    menuButton.style.transform = 'rotate(180deg)';
  } else {
    slideLeft.style.transform = 'translateX(-100%)';
    slideRight.style.transform = 'translateX(100%)';
    menuButton.style.transform = 'rotate(90deg)';
  }
  isToggled = !isToggled;
});

const hideSwiper =
  wrapSlide.style.display === 'block'
    ? ((slideLeft.style.transform = 'translateX(0)'),
      (slideRight.style.transform = 'translateX(0)'))
    : ((slideLeft.style.transform = 'translateX(-100%)'),
      (slideRight.style.transform = 'translateX(100%)'));
