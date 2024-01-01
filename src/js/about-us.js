document.addEventListener('DOMContentLoaded', () => {
  const buttonAboutUs = document.querySelector('.js-open-about-us');
  const aboutUsLink = document.querySelector('.wrap__about-us-link');
  const iconAboutUs = document.querySelector('.wrap__icon-about-us');
  const pageContact = document.querySelector('.page-item-contact-mob');
  const wrapContactsLink = document.querySelector('.wrap__page-item-contact');
  const buttonContacts = document.querySelector('#contacts__link');
  const pageAboutUs = document.querySelector('.page__item-aboutus-mob');
  const aboutUsContainer = document.querySelector('.page__about-us');

  let isUp = true;

 
  aboutUsContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollToBottom();
  });
  

  function scrollToBottom() {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
      })}
  



  aboutUsLink.style.transition = "bottom 2s ease"; 

  buttonAboutUs.addEventListener('click', () => {
    iconAboutUs.style.display = 'block';
    pageContact.style.zIndex = '21';
    pageAboutUs.style.zIndex = '22';
    buttonContacts.removeEventListener('click', () => {});
    isUp = false;
    function defineScreen() {
      let screen = window.matchMedia("(max-width: 768px)");
      function applyStyles() {
          if (screen.matches) {
            aboutUsLink.style.bottom = '60%';
           
          } else {
            aboutUsLink.style.bottom = '85%';
          }
        }
  
        applyStyles();
        screen.addListener(applyStyles);
      }
    
      // Call the defineScreen function
      defineScreen();
   
  });

  iconAboutUs.addEventListener('click', () => {
    aboutUsLink.style.bottom = '0px';
    iconAboutUs.style.display = 'none';
    pageAboutUs.style.zIndex = '22';
    isUp = true;
  });
});
