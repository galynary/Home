const buttonAboutUs = document.querySelector('#openAboutButton');

const buttonIconAboutUs = document.querySelector('.icon__about-us');
const pageAboutUs = document.querySelector('.page__about-us');

buttonIconAboutUs.style.display = 'none';

buttonAboutUs.addEventListener('click', () => {
  if (pageAboutUs.style.transform === 'translateY(-100%)') {
    pageAboutUs.style.transform = 'translateY(6%)';
    buttonIconAboutUs.style.display = 'none';
  } else {
    pageAboutUs.style.transform = 'translateY(-90%)';
    buttonIconAboutUs.style.display = 'block';
    buttonIconAboutUs.style.transform = 'rotate(180deg)';
  }
});

buttonIconAboutUs.addEventListener('click', () => {
  pageAboutUs.style.transform = 'translateY(6%)';
  buttonIconAboutUs.style.display = 'none';
  buttonIconAboutUs.style.transform = 'rotate(-90deg)';
});
