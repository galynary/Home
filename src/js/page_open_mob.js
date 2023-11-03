/*document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-button-mob');
  const toggleButton2 = document.getElementById('toggle-button2');
  const logoBlack = document.querySelector('.logo-icon-black__desktop');
  const logoWhite = document.querySelector('.logo-img__white');
  const logoText = document.querySelector('.logo__text-desktop');
  const leftContainer = document.querySelector('.page-container__left');
  const rightContainer = document.querySelector('.page-container__right');
  const menuButton = document.querySelector('.icon__menu-button2');
  const buttonLeft = document.querySelector('.button__left2');
  const buttonRight = document.querySelector('.button__right2');
  const menuButtonItems = document.querySelectorAll('.wrap-menu__button');
  const menuButtonSelling = document.querySelector('[data-open-selling]');
  const swiperArrows = document.querySelector('.wrap__swiper-arrows');
  const backgroundContactsLink = document.querySelector('.wrap__contacts-link');
  const contactsLink = document.querySelector('.contacts__link');
  const backgroundAboutUsLink = document.querySelector('.wrap__about-us-link');
  const aboutUsLink = document.querySelector('.js-open-about-us');
  const swiperPagination = document.querySelector('.wrap__swiper-pagination');
  const slidePage = document.querySelectorAll('.slide__page');
  const pageSection = document.querySelectorAll('.page__section');
  const pageSelling = document.getElementById('data-selling');
  const mySwiper = document.querySelector('.wrap-swiper__slide');
  const pageContainer = document.querySelector('.wrap__page-container');
  const paginationItems = document.querySelectorAll('.pagination__item');
  const openSelling = document.querySelector('[data-open-selling]');
  const openFaq = document.querySelector('[data-open-faq]');
  const openDiscover = document.querySelector('[data-discover-open]');
  const slideFaq = document.querySelector('[data-faq]');
  const slideDiscover = document.querySelector('[data-discover]');

  pageContainer.addEventListener('wheel', (e) => {
    const scrollSpeed = 5;
    if (e.deltaY !== 0) {
      pageContainer.scrollTop += e.deltaY * scrollSpeed;
      e.preventDefault();
    }
  });

  menuButtonItems.forEach((buttonItem) => {
    buttonItem.addEventListener('click', () => {
      toggleButton.style.display = 'none';
      toggleButton2.style.display = 'flex';
      toggleButton2.style.zIndex = "62";
      toggleButton2.style.opacity = "1";
      mySwiper.style.display = 'block';
      mySwiper.style.zIndex = "62";
      buttonLeft.style.opacity = "0";
      buttonRight.style.opacity = "0";
      pageContainer.style.zIndex = "62";
      setTimeout(() => {
        function defineScreen() {
          let screen = window.matchMedia("(max-width: 1200px)");
          function applyStyles() {
              if (screen.matches) {
                mySwiper.style.right = "0px";
                mySwiper.style.bottom = "150px";
              } else {
                mySwiper.style.right = "150px";
                mySwiper.style.bottom = "0px";
              }
            }
      
            applyStyles();
            screen.addListener(applyStyles);
          }
        
          // Call the defineScreen function
          defineScreen();
        },100);

     setTimeout(() => {
        toggleButton2.style.transform = 'translate(-50%, -350%)';
        leftContainer.style.transform = 'translateX(0%)';
        rightContainer.style.transform = 'translateX(0%)';
        leftContainer.style.transition = 'transform 4s ease';
        rightContainer.style.transition = 'transform 4s ease';
        toggleButton2.style.transition = 'transform 4s ease';
      }, 150);
      setTimeout(() => {
      backgroundContactsLink.style.background ="#fff";
      contactsLink.style.color ="#000";
      backgroundAboutUsLink.style.background ="#fff";
      aboutUsLink.style.color ="#000";
    }, 1000);
      setTimeout(() => {
      if (buttonItem === openSelling) {
        let slide = document.querySelector('[data-selling]');
        paginationItems.forEach((item) => {
          item.classList.remove('active');
        });
        pageSection.forEach((section) => {
          section.style.opacity = '0';
          if (section === document.querySelector('[data-selling-page]')) {
            section.style.opacity = '1';
            section.style.display = 'block';
            section.style.animation = 'openPage 4s linear forwards';
            section.style.transition = 'transform 5s ease';
          }
        });
        slide.style.display = 'flex';
        slide.style.zIndex = "62";
        paginationItems[0].classList.add('active');
      } else if (buttonItem === openFaq) {
        let slide = document.querySelector('[data-faq]');
        paginationItems.forEach((item) => {
          item.classList.remove('active');
        });
        pageSection.forEach((section) => {
          section.style.opacity = '0';
          if (section === document.querySelector('[data-faq-page]')) {
            section.style.animation = 'openPage 4s linear forwards';
            section.style.opacity = '1';
            section.style.display = 'block';
            section.style.transition = 'transform 5s ease';
          }
        });
        slide.style.display = 'flex';
        slide.style.zIndex = "62";
        paginationItems[1].classList.add('active');
      } else if (buttonItem === openDiscover) {
        let slide = document.querySelector('[data-discover]');
        pageSection.forEach((section) => {
          section.style.opacity = '0';
          if (section === document.querySelector('[data-discover-page]')) {
            section.style.opacity = '1';
            section.style.display = 'block';
            section.style.animation = 'openPage 4s linear forwards';
            section.style.transition = 'transform 5s ease';
          }
        });
        slide.style.display = 'flex';
        slide.style.zIndex = "62";
        paginationItems[2].classList.add('active');
      }
    }, 4200);
      setTimeout(() => {
        swiperArrows.style.zIndex = "63";
        swiperPagination.style.zIndex = "63";
        swiperPagination.style.display = 'block';
        logoWhite.style.display = 'none';
        swiperPagination.style.zIndex = "63";
    }, 4300);
});
  });

  let isOpenPage = false;

  toggleButton2.addEventListener('click', () => {
    setTimeout(() => {
      pageSection.forEach((section) => {
        section.style.animation = 'closePage 4s linear forwards';
        section.style.transition = 'transform 5s ease';
        section.style.opacity = "0";
      });
    }, 200);

    menuButton.style.transform = 'rotate(-90deg)';
    setTimeout(() => {
      mySwiper.style.right = "0px";
    }, 1000);

    setTimeout(() => {
      toggleButton2.style.transform = 'translate(-50%, 0%)';
      leftContainer.style.transform = 'translateX(-100%)';
      rightContainer.style.transform = 'translateX(100%)';
      leftContainer.style.transition = 'transform 4s ease';
      rightContainer.style.transition = 'transform 4s ease';
      toggleButton2.style.transition = 'transform 4s ease';
    }, 1050);

    setTimeout(() => {
      swiperPagination.style.display = 'none';
      paginationItems.forEach((item) => {
        item.classList.remove('active')
    });
      logoWhite.style.display = 'block';
     swiperPagination.style.zIndex = "1";
      backgroundContactsLink.style.background ="#000";
      contactsLink.style.color ="#fff";
      backgroundAboutUsLink.style.background ="#000";
      aboutUsLink.style.color ="#fff";
    },1500);
  setTimeout(() => {
    slidePage.forEach(slide => {
      slide.style.display = 'none';
      slide.style.transition = 'transform 5s ease';
    })
  
    pageSelling.style.display = 'block';
      mySwiper.style.display = 'none';
      mySwiper.style.zIndex = "1";
        swiperArrows.style.zIndex = "1";
        swiperPagination.style.zIndex = "1";
        toggleButton2.style.display = 'none';
        toggleButton.style.display = 'flex';
        buttonLeft.style.opacity="1";
        buttonRight.style.opacity="1";
      },6000)})})*/