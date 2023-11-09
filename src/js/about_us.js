document.addEventListener('DOMContentLoaded', () => {
  const buttonAboutUs = document.querySelector('.js-open-about-us');
  const aboutUsLink = document.querySelector('.wrap__about-us-link');
  const iconAboutUs = document.querySelector('.wrap__icon-about-us');
  const pageContact = document.querySelector('.page-item-contact-mob');
  const wrapContactsLink = document.querySelector('.wrap__page-item-contact');
  const buttonContacts = document.querySelector('#contacts__link');
  const pageAboutUs = document.querySelector('.page__item-aboutus-mob');
  let isUp = true;

  // Встановлюємо transition для top
  aboutUsLink.style.transition = "bottom 2.5s ease"; // Змініть час і тип анімації за потребою
  buttonContacts.disabled = false;
  buttonAboutUs.addEventListener('click', () => {
    aboutUsLink.style.bottom = '90%';
    iconAboutUs.style.display = 'block';
    pageContact.style.zIndex = '21';
    pageAboutUs.style.zIndex = '22';
    wrapContactsLink.style.top = '10px';
    buttonContacts.disabled = true;
    isUp = false;
  });

  iconAboutUs.addEventListener('click', () => {
   
    iconAboutUs.style.display = 'none';
    aboutUsLink.style.bottom = '0px';
    pageAboutUs.style.zIndex = '22';
    buttonContacts.disabled = false;
    isUp = true;
  });
});
