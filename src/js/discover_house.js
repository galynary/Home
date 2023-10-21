const toggleButton = document.getElementById('toggle-button');
const toggleButton2 = document.getElementById('toggle-button2');
const logoBlack = document.querySelector('.logo-img__black');
const logoWhite = document.querySelector('.logo-img__white');
const logoText = document.querySelector('.logo__text-desctop');
const leftContainer = document.querySelector('.page-container__left');
const rightContainer = document.querySelector('.page-container__right');
const menuButton = document.querySelector('.icon__menu-button2');
const menuButtonDiscover = document.querySelector('[data-discover-open]');
const page = document.getElementById('slide__page-discover');
const swiperArrows = document.querySelector('.wrap__swiper-arrows');
const swiperPagination = document.querySelector('.wrap__swiper-pagination');
const pageSection = document.querySelectorAll('.slide__page');
const section = document.getElementById('data-discover');
const mySwiper = document.querySelector('.wrap-swiper__slide');
const pageContainer = document.querySelector('.wrap__page-container');
const buttonLeft = document.querySelector('.button__left2');
const buttonRight = document.querySelector('.button__right2');
const backgroundContactsLink = document.querySelector('.wrap__contacts-link');
const contactsLink = document.querySelector('.contacts__link');
const backgroundAboutUsLink = document.querySelector('.wrap__about-us-link');
const aboutUsLink = document.querySelector('.js-open-about-us');



pageContainer.addEventListener('wheel', (e) => {
  const scrollSpeed = 5; // Швидкість прокрутки

  if (e.deltaY !== 0) {
    pageContainer.scrollTop += e.deltaY * scrollSpeed;
      e.preventDefault(); // Запобігаємо стандартній прокрутці
  }
});


menuButtonDiscover.addEventListener('click', () => {
   toggleButton.style.display = 'none';
   toggleButton2.style.display = 'flex';
    toggleButton2.style.opacity="1";
  mySwiper.style.display = 'block';
    mySwiper.style.zIndex = "62";
    buttonLeft.style.opacity="0";
    buttonRight.style.opacity="0";

   
 //появляється page
 setTimeout(() => {
  pageSection.forEach(section => {
    section.style.display = 'block';
    section.style.zIndex = "62";
    section.style.transition = 'transform 5s ease';
}, 100);
//leftContainer rightContainer стають на позицію 0
   setTimeout(() => {
      toggleButton2.style.transform = 'translate(-50%, -350%)';
      leftContainer.style.transform = 'translateX(0%)';
      rightContainer.style.transform = 'translateX(0%)';
      leftContainer.style.transition = 'transform 4s ease';
      rightContainer.style.transition = 'transform 4s ease';
      toggleButton2.style.transition = 'transform 4s ease';
      pageContainer.style.zIndex = "62";
   
  },100);
  setTimeout(() => {
    section.style.display = 'block';
    section.style.animation= 'openPage 4s linear forwards';
   section.style.zIndex = "64";
    section.style.transition = 'transform 5s ease';
   
    },4300);
   //появляється pageSection
    setTimeout(() => {
      swiperArrows.style.zIndex = "63";
       swiperPagination.style.zIndex = "63";
       swiperPagination.style.display = 'block';
       swiperPagination.style.zIndex = "63";
       backgroundContactsLink.style.background ="#fff";
       contactsLink.style.color ="#000";
       backgroundAboutUsLink.style.background ="#fff";
       aboutUsLink.style.color ="#000";
     }, 4300);
    setTimeout(() => {
     mySwiper.style.right ="150px";
    },4320);
  });
})

let isOpenPage = false;
toggleButton2.addEventListener('click', () => {
  setTimeout(() => {
    section.style.animation= 'closePage 4s linear forwards';
    section.style.transition = 'transform 5s ease';
   },200);
menuButton.style.transform = 'rotate(-90deg)';
  setTimeout(() => {
    mySwiper.style.right ="0px";
  },1000);
  //leftContainer rightContainer розсуваються
    setTimeout(() => {
      section.style.display = 'none';
    toggleButton2.style.transform = 'translate(-50%, 0%)';
  leftContainer.style.transform = 'translateX(-100%)';
    rightContainer.style.transform = 'translateX(100%)';
  leftContainer.style.transition = 'transform 4s ease';
    rightContainer.style.transition = 'transform 4s ease';
    toggleButton2.style.transition = 'transform 4s ease';
   },1000);
   setTimeout(() => {
    swiperPagination.style.display = 'none';
    swiperPagination.style.zIndex = "1";
    backgroundContactsLink.style.background ="#000";
    contactsLink.style.color ="#fff";
    backgroundAboutUsLink.style.background ="#000";
    aboutUsLink.style.color ="#fff";
  },1500);
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
      buttonLeft.style.opacity="1";
      buttonRight.style.opacity="1";
    },6000);
 
  })