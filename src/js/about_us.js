document.addEventListener('DOMContentLoaded', () => {
  const buttonAboutUs = document.querySelector('.js-open-about-us');
  const aboutUsLink = document.querySelector('.wrap__about-us-link');
  const iconAboutUs = document.querySelector('.wrap__icon-about-us');
  const pageContact = document.querySelector('.page-item-contact-mob');
  const wrapContactsLink = document.querySelector('.wrap__page-item-contact');
  const buttonContacts = document.querySelector('#contacts__link');
  const pageAboutUs = document.querySelector('.page__item-aboutus-mob');
  const aboutUsContainer = document.querySelector('.page__about-us');
  const wrapPageAboutUs = document.querySelector('.wrap__page-about-us');
  const pageItemAboutus = document.querySelector('.page__item-aboutus ');



  let isUp = true;

 
  aboutUsContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollToBottom();
  });
  
  // Прокрутка до самого низу сторінки
  function scrollToBottom() {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
      })}
  


  // Встановлюємо transition для top
  aboutUsLink.style.transition = "bottom 2s ease"; // Змініть час і тип анімації за потребою

  buttonAboutUs.addEventListener('click', () => {
    iconAboutUs.style.display = 'block';
    pageContact.style.zIndex = '21';
    pageAboutUs.style.zIndex = '22';
    wrapContactsLink.style.top = '10px';
    wrapPageAboutUs.style.transition = "bottom 5s ease";
    buttonContacts.removeEventListener('click', () => {});
    isUp = false;
    function defineScreen() {
      let screen = window.matchMedia("(max-width: 768px)");
      function applyStyles() {
          if (screen.matches) {
          
            wrapPageAboutUs.style.bottom = '60%';
           
          } else {
            wrapPageAboutUs.style.bottom = '80%';
          }
        }
  
        applyStyles();
        screen.addListener(applyStyles);
      }
    
      // Call the defineScreen function
      defineScreen();
    
  });

  iconAboutUs.addEventListener('click', () => {
    wrapPageAboutUs.style.bottom = '0px';
    iconAboutUs.style.display = 'none';
    pageAboutUs.style.zIndex = '22';
    isUp = true;
  });
});
