const buttonContacts = document.querySelector('.contacts-toggle');
const pageContacts = document.querySelector('.page__contacts');
const buttonIconContacts = document.querySelector('.contacts__icon');
const wrapSlide = document.querySelector('.wrap__slide');

buttonIconContacts.style.display = 'none';
pageContacts.style.transform = 'translateY(-93%)';

buttonContacts.addEventListener('click', () => {
  setTimeout(function () {
    wrapSlide.style.display = 'none';
  }, 0);
  {
    pageContacts.style.transform = 'translateY(-7%)';
    buttonIconContacts.style.display = 'block';
  }
});
buttonIconContacts.addEventListener('click', () => {
  {
    buttonIconContacts.style.display = 'none';
    pageContacts.style.transform = 'translateY(-93%)';
  }
});
