document.addEventListener('DOMContentLoaded', () => {
  const buttonContacts = document.querySelector('#contacts__link');
const wrapContactsLink = document.querySelector('.wrap__page-item-contact');
const pageContact = document.querySelector('.page-item-contact-mob');
const aboutUsLink = document.querySelector('.wrap__about-us-link');
  const iconContacts = document.querySelector('.wrap__contacts-icon');
  const pageAboutUs = document.querySelector('.page__item-aboutus-mob');
  const buttonAboutUs = document.querySelector('.js-open-about-us');
  let isUp = true;

  wrapContactsLink.style.transition = "top 2s ease"; 

  buttonContacts.addEventListener('click', () => {
    iconContacts.style.display = 'block';
    wrapContactsLink.style.top = '80vh';
   aboutUsLink.style.bottom = '70px';
    pageAboutUs.style.zIndex = '21';
    pageContact.style.zIndex = '22';
    buttonAboutUs.removeEventListener('click', () => {});
    isUp = false;
  });

  iconContacts.addEventListener('click', () => {
    if (!isUp) {
      wrapContactsLink.style.top = '0px';
      iconContacts.style.display = 'none';
      pageContact.style.zIndex = '22';
    isUp = true;
    }
  });
});
