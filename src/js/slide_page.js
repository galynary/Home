document.addEventListener("DOMContentLoaded", function () {
  const prevArrow = document.querySelector('.prev');
  const nextArrow = document.querySelector('.next');
  const leftContainer = document.querySelectorAll('.page-container__left');
  const rightContainer = document.querySelectorAll('.page-container__right');
  const pageSection = document.querySelectorAll('.page__section');
  const slidePage = document.querySelectorAll('.fade');
  const paginationItems = document.querySelectorAll('.pagination__item');

let slideIndex = 0; // Start from the first slide (0-based index)

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
      });
    showSlide(slideIndex + 1);
  });

  paginationItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      // Get the index from the data attribute of the clicked item
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
      });
      showSlide(dataIndex);
    });
  });

  // Function to show a specific slide
  function showSlide(index) {
    const slides = document.querySelectorAll('.slide__page');
    const paginationItems = document.querySelectorAll('.pagination__item');
  
    if (index < 1) {
      index = slides.length; // Wrap around to the last slide
    } else if (index > slides.length) {
      index = 1; // Wrap around to the first slide
    }
  
    // Hide all slides
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
  
    // Show the selected slide
    slides[index - 1].style.display = 'block';
  
    // Update the current slide index
    slideIndex = index;
  
    // Update the active pagination item
    paginationItems.forEach(button => {
      button.classList.remove('active');
    });
  
    paginationItems[index - 1].classList.add('active');
  }})