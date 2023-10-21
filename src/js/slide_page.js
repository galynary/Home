document.addEventListener("DOMContentLoaded", function () {
  const prevArrow = document.querySelector('.prev');
  const nextArrow = document.querySelector('.next');
  const leftContainer = document.querySelectorAll('.page-container__left');
  const rightContainer = document.querySelectorAll('.page-container__right');
  const pageSection = document.querySelectorAll('.page__section');
  const slidePage = document.querySelectorAll('.slide__page');
  const paginationItems = document.querySelectorAll('.pagination__item');

let slideIndex = 0; 

  prevArrow.addEventListener('click', (event) => {
    event.preventDefault();
    leftContainer.forEach(leftContainer => {
      leftContainer.style.transform = 'translateX(0%)';
    })
    rightContainer.forEach(rightContainer => {
      rightContainer.style.transform = 'translateX(0%)';
    })
    slidePage.forEach(fade => {
      fade.style.animation = 'none';
      fade.style.transition = 'none';
    });
    pageSection.forEach(section => {
      section.style.animation = 'none';
      section.style.transition = 'none';
      section.style.opacity ='1';
      section.style.display = 'block';
    });
    showSlide(slideIndex - 1);
  });

  nextArrow.addEventListener('click', (event) => {
    event.preventDefault();
    leftContainer.forEach(leftContainer => {
      leftContainer.style.transform = 'translateX(0%)';
    })
    rightContainer.forEach(rightContainer => {
      rightContainer.style.transform = 'translateX(0%)';
    })
    slidePage.forEach(fade => {
      fade.style.animation = 'none';
      fade.style.transition = 'none';
    });
    pageSection.forEach(section => {
      section.style.animation = 'none';
      section.style.transition = 'none';
      section.style.opacity ='1';
      section.style.display = 'block';
      });
    showSlide(slideIndex + 1);
  });

  paginationItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      const dataIndex = parseInt(item.getAttribute('data-index'));
      event.preventDefault();
      leftContainer.forEach(leftContainer => {
        leftContainer.style.transform = 'translateX(0%)';
      })
      rightContainer.forEach(rightContainer => {
        rightContainer.style.transform = 'translateX(0%)';
      })
      slidePage.forEach(fade => {
        fade.style.animation = 'none';
        fade.style.transition = 'none';
      });
      pageSection.forEach(section => {
        section.style.animation = 'none';
        section.style.transition = 'none';
        section.style.opacity ='1';
        section.style.display = 'block';
      });
      showSlide(dataIndex);
    });
  });
function showSlide(index) {
    const slides = document.querySelectorAll('.slide__page');
    const paginationItems = document.querySelectorAll('.pagination__item');
  
    if (index < 1) {
      index = slides.length;
    } else if (index > slides.length) {
      index = 1;
    }
  slides.forEach(slide => {
      slide.style.display = 'none';
    });
   slides[index - 1].style.display = 'block';
   slideIndex = index;
  paginationItems.forEach(button => {
      button.classList.remove('active');
    });
  
    paginationItems[index - 1].classList.add('active');
  }})