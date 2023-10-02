const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');
const paginationItems = document.querySelectorAll('.pagination__item');


let slideIndex = 1;
showSlides(slideIndex);


prevArrow.addEventListener('click', () => {
  showSlides((slideIndex -= 1));
});


nextArrow.addEventListener('click', () => {
  showSlides((slideIndex += 1));
});


paginationItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    showSlides(index + 1);
  });
});


function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.slide__page');
  const paginationItems = document.querySelectorAll('.pagination__item');


  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }


  for (i = 0; i < paginationItems.length; i++) {
    paginationItems[i].classList.remove('active');
  }


  slides[slideIndex - 1].style.display = 'block';
  paginationItems[slideIndex - 1].classList.add('active');
}


