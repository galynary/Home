/*const toggleButton = document.getElementById('toggle-button');
const menuButtonList = document.querySelector('.menu-button__list');
const menuButton1 = document.querySelector('.menu-button__item:nth-child(1)');
const menuButton2 = document.querySelector('.menu-button__item:nth-child(2)');
const menuButton3 = document.querySelector('.menu-button__item:nth-child(3)');
let isOpen = false;
toggleButton.addEventListener('click', () => {
  isOpen = !isOpen;
  
  if (isOpen) {
    menuButtonList.style.display= "block";
menuButton1.style.left = '90%';
  menuButton1.style.top = '3%';
menuButton2.style.left = '65%';
menuButton2.style.top = '20%';
menuButton3.style.left = '50%';
menuButton3.style.top = '38%';
menuButton4.style.left = '50%';
menuButton4.style.top = '56%';
menuButton5.style.left = '70%';
menuButton5.style.top = '74%';
menuButton6.style.left = '80%';
menuButton6.style.top = '90%';
  }else {
    menuButtonList.style.display= "none";
    menuButton1.style.left = '50%';
  menuButton1.style.top = '50%';
  menuButton2.style.left = '50%';
  menuButton2.style.top = '50%';
  menuButton3.style.left = '50%';
  menuButton3.style.top = '50%';
  menuButton4.style.left = '50%';
  menuButton4.style.top = '50%';
  menuButton5.style.left = '50%';
  menuButton5.style.top = '50%';
  menuButton6.style.left = '50%';
  menuButton6.style.top = '50%';
}})
const toggleButton = document.getElementById('toggle-button');
const leftSlide = document.querySelector('[data-slide-left]');
const rightSlide = document.querySelector('[data-slide-right]');
const menuButton = document.querySelector('.icon__menu-button');
const wrapSlide = document.getElementById('.wrap-slide');

let isAnimationPaused = false;

toggleButton.addEventListener('click', () => {
  const computedStyleLeft = window.getComputedStyle(leftSlide);
  const computedStyleRight = window.getComputedStyle(rightSlide);

 
    if (!isAnimationPaused) {
      leftSlide.style.animationPlayState = 'paused';
      rightSlide.style.animationPlayState = 'paused';
      setTimeout(() => {
        menuButton.style.transform = 'rotate(90deg)';
        leftSlide.style.transform = 'translateX(-100%)';
        rightSlide.style.transform = 'translateX(100%)';
        wrapSlide.style.zIndex= 1;
      }, 1000);
    } else {
      leftSlide.style.animationPlayState = 'running';
      rightSlide.style.animationPlayState = 'running';
      setTimeout(() => {
        menuButton.style.transform = 'rotate(180deg)';
        leftSlide.style.transform = 'translateX(0%)';
        rightSlide.style.transform = 'translateX(0%)';
        wrapSlide.style.zIndex= 31;
      }, 1000);
    }*/