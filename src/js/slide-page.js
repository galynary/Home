let slideIndex = 1;
showSlides(slideIndex);

function plusPage(n) {
  showSlides((slideIndex += n));
}

function currentPage(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('swiper__slide');
  let paginationItem = document.getElementsByClassName('pagination__item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < paginationItem.length; i++) {
    paginationItem[i].className = paginationItem[i].className.replace('active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  paginationItem[slideIndex - 1].className += ' active';
}