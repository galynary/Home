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
const pageSection = document.querySelectorAll('.page__section');
const mySwiper = document.querySelector('.wrap-swiper__slide');
const pageContainer = document.querySelector('.wrap__page-container');
const pageHeader = document.querySelector('.page__header');

pageContainer.addEventListener('wheel', (e) => {
  const scrollSpeed = 10; // Швидкість прокрутки

  if (e.deltaY !== 0) {
    pageContainer.scrollTop += e.deltaY * scrollSpeed;
      e.preventDefault(); // Запобігаємо стандартній прокрутці
  }
});


menuButtonItems.forEach(item => {
  item.addEventListener('click', () => {
   toggleButton.style.display = 'none';
    toggleButton2.style.display = 'flex';
  mySwiper.style.display = 'block';
    mySwiper.style.zIndex = "62";

   
 //появляється page
 setTimeout(() => {
  pageSection.forEach(section => {
    section.style.display = 'block';
    section.style.zIndex = "62";
    section.style.animation = 'openPage 4s linear forwards';
    section.style.transition = 'transform 5s ease';
}, 1150);
setTimeout(() => {
swiperArrows.style.zIndex = "63";
swiperPagination.style.display = 'block';
swiperPagination.style.zIndex = "63";
},3000);
       //leftContainer rightContainer стають на позицію 0
      setTimeout(() => {
      toggleButton2.style.transform = 'translate(-50%, -350%)';
      leftContainer.style.transform = 'translateX(0%)';
      rightContainer.style.transform = 'translateX(0%)';
      leftContainer.style.transition = 'transform 4s ease';
      rightContainer.style.transition = 'transform 4s ease';
      toggleButton2.style.transition = 'transform 4s ease';
  },300);
   //появляється pageSection
   setTimeout(() => {
    swiperArrows.style.zIndex = "63";
     swiperPagination.style.zIndex = "63";
     pageSection.forEach(section => {
     section.style.animation= 'openPage 4s linear forwards';
     section.style.transition = 'transform 5s ease';
     })
    }, 1150);
    setTimeout(() => {
    swiperPagination.style.display = 'block';
    swiperPagination.style.zIndex = "63";
  },3000);
  });
});
})
let isOpenPage = false;
toggleButton2.addEventListener('click', () => {
  pageSection.forEach(section => {
    section.style.animation= 'closePage 4s linear forwards';
    section.style.transition = 'transform 5s ease';
    })
  menuButton.style.transform = 'rotate(-90deg)';
  setTimeout(() => {
    swiperPagination.style.display = 'none';
    swiperPagination.style.zIndex = "1";
  },250);
  //leftContainer rightContainer розсуваються
    setTimeout(() => {
    toggleButton2.style.transform = 'translate(-50%, 0%)';
    leftContainer.style.transform = 'translateX(-100%)';
    rightContainer.style.transform = 'translateX(100%)';
    leftContainer.style.transition = 'transform 4s ease';
    rightContainer.style.transition = 'transform 4s ease';
    toggleButton2.style.transition = 'transform 4s ease';
  
  }, 1000);
setTimeout(() => {
  pageSection.forEach(section => {
    section.style.display = 'none';
    section.style.transition = 'transform 5s ease';
  })
    mySwiper.style.display = 'none';
      mySwiper.style.zIndex = "1";
      swiperArrows.style.zIndex = "1";
      swiperPagination.style.zIndex = "1";
      toggleButton2.style.display = 'none';
      toggleButton.style.display = 'flex';
    },5000);
 
  })