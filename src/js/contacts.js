const buttonContacts = document.querySelector('#js-open-contacts');
const pageContacts = document.querySelector('.page__contacts');
const buttonIconContacts = document.querySelector('.contacts__icon');

buttonContacts.addEventListener('click', () => {
  if (pageContacts.style.transform === 'translateY(-97%)') {
    pageContacts.style.transform = 'translateY(2%)';
    buttonIconContacts.style.display = 'block';
  } else {
    pageContacts.style.transform = 'translateY(-97%)';
    buttonIconContacts.style.display = 'none';
  }
});
buttonIconContacts.addEventListener('click', () => {
  pageContacts.style.transform = 'translateY(-97%)';
  buttonIconContacts.style.display = 'none';
});
