document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-button');
  const toggleButton2 = document.getElementById('toggle-button2');
  const iconPhone = document.querySelector('.icon__phone-black');
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
  const backgroundContactsLink = document.querySelector('.wrap__page-item-contact');
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
  const opendescriptionHouse = document.querySelector('[data-open-consulting]');
  const openGallery = document.querySelector('[data-open-gallery]');
  

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
      toggleButton2.style.opacity = "1";
     mySwiper.style.display = 'block';
      mySwiper.style.zIndex = "62";
      buttonLeft.style.opacity = "0";
      buttonRight.style.opacity = "0";
      pageContainer.style.zIndex = "62";
    
    setTimeout(() => {
          leftContainer.style.transition = 'transform 5s ease';
          rightContainer.style.transition = 'transform 5s ease';
          leftContainer.style.transform = 'translateX(0%)';
          rightContainer.style.transform = 'translateX(0%)';
          toggleButton2.style.transition = 'transform 4s ease';
          function pageScreen() {
            let screen = window.matchMedia("(max-width: 1200px)");
            function pageStyles() {
                if (screen.matches) {
                  iconPhone.style.display = 'block';
                  toggleButton2.style.transform = 'translate(-50%, -280%)';
                } else {
          toggleButton2.style.transform = 'translate(-50%, -300%)';
        }
      }
      pageStyles();
      screen.addListener(pageStyles);
    }
     pageScreen();
  },150);
setTimeout(() => {
      backgroundContactsLink.style.background ="#fff";
      backgroundAboutUsLink.style.background ="#fff";
      contactsLink.style.color ="#000";
      contactsLink.style.zIndex = "63";
      aboutUsLink.style.color ="#000";
      aboutUsLink.style.zIndex = "63";
     
    }, 2000);
      setTimeout(() => {
      if (buttonItem === openSelling) {
        let slide = document.querySelector('[data-selling]');
        paginationItems.forEach((item) => {
          item.classList.remove('active');
        });
        pageSection.forEach((section) => {
         
          if (section === document.querySelector('.data-selling-page')) {
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
         
          if (section === document.querySelector('.data-faq-page')) {
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
         
          if (section === document.querySelector('.data-discover-page')) {
            section.style.opacity = '1';
            section.style.display = 'block';
            section.style.animation = 'openPage 5s linear forwards';
            section.style.transition = 'transform 5s ease';
          }
        });
        slide.style.display = 'flex';
        slide.style.zIndex = "62";
        paginationItems[2].classList.add('active');
      }
      else if (buttonItem === opendescriptionHouse) {
        let slide = document.querySelector('[data-description-house]');
        pageSection.forEach((section) => {
         
          if (section === document.querySelector('.data-description-house-page')) {
            section.style.opacity = '1';
            section.style.display = 'block';
            section.style.animation = 'openPage 5s linear forwards';
            section.style.transition = 'transform 5s ease';
          }
        });
        slide.style.display = 'flex';
        slide.style.zIndex = "62";
        paginationItems[3].classList.add('active');
      }
      else if (buttonItem === openGallery) {
        let slide = document.querySelector('[data-gallery]');
        pageSection.forEach((section) => {
         
          if (section === document.querySelector('[data-gallery-page]')) {
            section.style.opacity = '1';
            section.style.display = 'block';
            section.style.animation = 'openPage 5s linear forwards';
            section.style.transition = 'transform 5s ease';
          }
        });
        slide.style.display = 'flex';
        slide.style.zIndex = "62";
        paginationItems[4].classList.add('active');
      }
    }, 2100);
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
      },2500);
      setTimeout(() => {
        swiperArrows.style.display = 'block'; 
        logoWhite.style.display = 'none';
        if (mySwiper.getBoundingClientRect().bottom <= window.innerHeight) {
          swiperPagination.style.display = 'block'; 
        } else {
          swiperPagination.style.display = 'none';
        }
     
    }, 3000);
});
  });

  let isOpenPage = false;

  toggleButton2.addEventListener('click', () => {
 
      pageSection.forEach((section) => {
        section.style.animation = 'closePage 5s linear forwards';
        section.style.transition = 'transform 5s ease';
        section.style.opacity = "0";
      });

    menuButton.style.transform = 'rotate(-90deg)';
    setTimeout(() => {
     mySwiper.style.right = "0px";
    }, 3200);

    setTimeout(() => {
      leftContainer.style.transition = 'transform 5s ease';
      rightContainer.style.transition = 'transform 5s ease';
      toggleButton2.style.transition = 'transform 4s ease';
      toggleButton2.style.transform = 'translate(-50%, 0%)';
      leftContainer.style.transform = 'translateX(-100%)';
      rightContainer.style.transform = 'translateX(100%)';
   },3300);

 setTimeout(() => {
      swiperPagination.style.display = 'none';
      iconPhone.style.display = 'none';
      paginationItems.forEach((item) => {
        item.classList.remove('active')
    });
      logoWhite.style.display = 'block';
      swiperArrows.style.display = 'none'; 
      backgroundContactsLink.style.background ="#000";
      contactsLink.style.color ="#fff";
      backgroundAboutUsLink.style.background ="#000";
      aboutUsLink.style.color ="#fff";
    },3300);
  setTimeout(() => {
    slidePage.forEach(slide => {
      slide.style.display = 'none';
      slide.style.transition = 'transform 5s ease';
    })
  
    pageSelling.style.display = 'block';
      mySwiper.style.display = 'none';
      mySwiper.style.zIndex = "1";
       toggleButton2.style.display = 'none';
        toggleButton.style.display = 'flex';
        buttonLeft.style.opacity="1";
        buttonRight.style.opacity="1";
        iconPhone.style.zIndex = "52";
      },8000)})})

 







 