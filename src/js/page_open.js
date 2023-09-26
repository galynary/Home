const toggleButton = document.getElementById('toggle-button');
const toggleButton2 = document.getElementById('toggle-button2');
const leftContainer = document.querySelector('.page-container__left');
const rightContainer = document.querySelector('.page-container__right');
const menuButton = document.querySelector('.icon__menu-button2');
const menuButtonItems = document.querySelectorAll('.menu-button__item');
const openSelling = document.querySelector('[data-open-selling]');
const page = document.querySelector('[data-selling]');
const pageSection = document.querySelector('.wrap__page-section');

// Функція для обробки кліків на кнопки menuButtonItems
function handleMenuButtonClick() {
  toggleButton.style.display = 'none';
  toggleButton2.style.display = 'block';
  page.style.display = 'block';
  page.style.zIndex = '40';
  setTimeout(() => {
    // leftContainer та rightContainer стають на позицію 0
    menuButton.style.transform = 'rotate(180deg)';
    toggleButton2.style.transform = 'translate(0%, -350%)';
    leftContainer.style.transform = 'translateX(0%)';
    rightContainer.style.transform = 'translateX(0%)';
    leftContainer.style.transition = 'transform 6s ease';
    rightContainer.style.transition = 'transform 6s ease';
    toggleButton2.style.transition = 'transform 6s ease';
  }, 1000);
  // Появляється pageSection
  setTimeout(() => {
    pageSection.classList.add('appear');
    pageSection.classList.remove('disappear');
    pageSection.style.zIndex = '41';
    toggleButton2.style.transition = 'transform 4s ease';
  }, 6000);
}

// Додаємо обробник кліків для кожного елементу menuButtonItems
menuButtonItems.forEach((item) => {
  item.addEventListener('click', handleMenuButtonClick);
});

let isOpenPage = true;

// Обробник кліку на toggleButton2
toggleButton2.addEventListener('click', () => {
  // Зникає pageSection
 pageSection.classList.add('disappear');
    pageSection.classList.remove('appear');
    pageSection.style.transition = 'opacity 4s ease'; // Fixed transition property
 
  // leftContainer та rightContainer розсуваються
  setTimeout(() => {
  toggleButton2.style.transform = 'translate(-50%, 0%)';
  menuButton.style.transform = 'rotate(90deg)';
  leftContainer.style.transform = 'translateX(-100%)';
  rightContainer.style.transform = 'translateX(100%)';
  leftContainer.style.transition = 'transform 6s ease';
  rightContainer.style.transition = 'transform 6s ease';
  toggleButton2.style.transition = 'transform 6s ease';
}, 2500);
  setTimeout(() => {
    page.style.display = 'none';
    page.style.zIndex = '1';
    toggleButton2.style.display = 'none';
    toggleButton.style.display = 'block';
  }, 10000);
});