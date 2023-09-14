document.addEventListener('DOMContentLoaded', () => {
  const buttonContacts = document.querySelector('#contacts__link');
  const pageContacts = document.querySelector('.wrap__page-item-contact');
  const buttonIconContacts = document.querySelector('.contacts__icon');

  buttonIconContacts.style.display = 'none';

  buttonContacts.addEventListener('click', () => {
    if (pageContacts.style.top === '0px') {
      pageContacts.style.top = '800px';
      buttonIconContacts.style.display = 'block';
    } else {
      pageContacts.style.top = '0px';
      buttonIconContacts.style.display = 'none';
    }
  });
});
