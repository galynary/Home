const toggleButton = document.getElementById('toggle-button');
const toggleButton2 = document.getElementById('toggle-button2');
const leftContainer = document.querySelector('.page-container__left');
const rightContainer = document.querySelector('.page-container__right');
const menuButton = document.querySelector('.icon__menu-button2');
const menuButtonItems = document.querySelectorAll('.menu-button__item');
const openSelling = document.querySelector('[data-open-selling]');
const page = document.getElementById('slide__page-selling');
const swiperArrows = document.querySelector('.wrap__swiper-arrows');
const swiperPagination = document.querySelector('.wrap__swiper-pagination');
const pageSection = document.querySelector('.page__section');
const mySwiper = document.querySelector('.my__swiper');

menuButtonItems.forEach(item => {
  item.addEventListener('click', () => {
    toggleButton.style.display = 'none';
    toggleButton2.style.display = 'block';
    mySwiper.style.display = 'block';
    mySwiper.style.zIndex = "40";
   
 //появляється page
  setTimeout(() => {
        page.style.display = 'block';
        page.style.zIndex = "40";
       page.style.transition = 'transform 4s ease';
      }, 300);
       //leftContainer rightContainer стають на позицію 0
      setTimeout(() => {
      menuButton.style.transform = 'rotate(180deg)';
      toggleButton2.style.transform = 'translate(-50%, -350%)';
      leftContainer.style.transform = 'translateX(0%)';
      rightContainer.style.transform = 'translateX(0%)';
      leftContainer.style.transition = 'transform 4s ease';
      rightContainer.style.transition = 'transform 4s ease';
      toggleButton2.style.transition = 'transform 4s ease';
  },500);
   //появляється pageSection
    setTimeout(() => {
       pageSection.style.display = 'block';
       pageSection.style.zIndex = "41";
       swiperArrows.style.zIndex = "42";
       swiperPagination.style.zIndex = "42";
       pageSection.style.animation= 'openPage 4s linear forwards';
       pageSection.style.transition = 'transform 5s ease';
    }, 2500);
  });
});
let isOpenPage = false;
toggleButton2.addEventListener('click', () => {
  pageSection.style.animation= 'closePage 4s linear forwards';
  pageSection.style.transition = 'transform 5s ease';
      //зникає pageSection
    setTimeout(() => {
      pageSection.style.display = 'none';
      pageSection.style.transition = 'transform 5s ease';
    }, 4000);
       //leftContainer rightContainer розсуваються
    setTimeout(() => {
    menuButton.style.transform = 'rotate(90deg)';
    toggleButton2.style.transform = 'translate(-50%, 0%)';
  leftContainer.style.transform = 'translateX(-100%)';
    rightContainer.style.transform = 'translateX(100%)';
    leftContainer.style.transition = 'transform 4s ease';
    rightContainer.style.transition = 'transform 4s ease';
    toggleButton2.style.transition = 'transform 4s ease';
  }, 2000);
    setTimeout(() => {
    /*  page.style.display = 'none';
      page.style.zIndex = "1";*/
      mySwiper.style.display = 'none';
      mySwiper.style.zIndex = "1";
      swiperArrows.style.zIndex = "1";
      swiperPagination.style.zIndex = "1";
      toggleButton2.style.display = 'none';
      toggleButton.style.display = 'block';
    }, 6000);
 
  })
