const buttonIconAboutUs = document.querySelector('.icon__about-us');
const pageAboutUs = document.querySelector('.page__about-us');
const buttonAboutUs = document.querySelector('.js-open-about-us');

buttonIconAboutUs.style.display = 'none';
pageAboutUs.style.transform = 'translateY(92%)';

buttonAboutUs.addEventListener('click', () => {
  {
    pageAboutUs.style.transform = 'translateY(4%)';
    buttonIconAboutUs.style.display = 'block';
  }
});
buttonIconAboutUs.addEventListener('click', () => {
  {
    pageAboutUs.style.transform = 'translateY(92%)';
    buttonIconAboutUs.style.display = 'none';
  }
});
