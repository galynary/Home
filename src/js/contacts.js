const buttonContacts = document.querySelector('.contacts-toggle');
const pageContacts = document.querySelector('.page__contacts');
const buttonIconContacts = document.querySelector('.contacts__icon');

buttonIconContacts.style.display = 'none';
pageContacts.style.transform = 'translateY(-93%)';

buttonContacts.addEventListener('click', () => {
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
