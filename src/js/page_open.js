const toggleButton = document.getElementById('toggle-button');
const toggleButton2 = document.getElementById('toggle-button2');
const logoBlack = document.querySelector('.logo-icon-black__desctop');
const logoWhite = document.querySelector('.logo-icon-white__desctop');
const logoText = document.querySelector('.logo__text-desctop');
const leftContainer = document.querySelector('.page-container__left');
const rightContainer = document.querySelector('.page-container__right');
const menuButton = document.querySelector('.icon__menu-button2');
const menuButtonItems = document.querySelectorAll('.menu-button__item');
const openSelling = document.querySelector('[data-open-selling]');
const page = document.getElementById('slide__page-selling');
const swiperArrows = document.querySelector('.wrap__swiper-arrows');
const swiperPagination = document.querySelector('.wrap__swiper-pagination');
const pageSection = document.querySelector('.page__section');
const mySwiper = document.querySelector('.wrap-swiper__slide');


menuButtonItems.forEach(item => {
  item.addEventListener('click', () => {
   toggleButton.style.display = 'none';
    toggleButton2.style.display = 'block';
  mySwiper.style.display = 'block';
    mySwiper.style.zIndex = "50";
    mySwiper.style.Right = "20%";
   
 //появляється page
  setTimeout(() => {
        page.style.display = 'block';
        page.style.zIndex = "50";
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
  },300);
   //появляється pageSection
    setTimeout(() => {
      logoWhite.style.display = 'none';
      logoBlack.style.display = 'block';
      logoText.style.color="black";
       pageSection.style.display = 'block';
       pageSection.style.zIndex = "51";
       swiperArrows.style.zIndex = "52";
       swiperPagination.style.zIndex = "52";
       pageSection.style.animation= 'openPage 4s linear forwards';
       pageSection.style.transition = 'transform 5s ease';
    }, 1150);
  });
});
let isOpenPage = false;
toggleButton2.addEventListener('click', () => {
  pageSection.style.animation= 'closePage 4s linear forwards';
  pageSection.style.transition = 'transform 5s ease';
  //leftContainer rightContainer розсуваються
    setTimeout(() => {
    menuButton.style.transform = 'rotate(90deg)';
    toggleButton2.style.transform = 'translate(-50%, 0%)';
  leftContainer.style.transform = 'translateX(-100%)';
    rightContainer.style.transform = 'translateX(100%)';
  leftContainer.style.transition = 'transform 4s ease';
    rightContainer.style.transition = 'transform 4s ease';
    toggleButton2.style.transition = 'transform 4s ease';
  
  }, 300);
  setTimeout(() => {
    logoWhite.style.display = 'block';
    logoBlack.style.display = 'none';
    logoText.style.color="white";
   },2250);
  setTimeout(() => {
    pageSection.style.display = 'none';
    pageSection.style.transition = 'transform 5s ease';
    mySwiper.style.display = 'none';
      mySwiper.style.zIndex = "1";
      swiperArrows.style.zIndex = "1";
      swiperPagination.style.zIndex = "1";
      toggleButton2.style.display = 'none';
      toggleButton.style.display = 'block';
    },5000);
 
  })