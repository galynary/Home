var buttonContacts=document.querySelector(".wrap__button-contacts"),contactsToggle=document.querySelector(".contacts-toggle"),buttonIconContacts=document.querySelector(".contacts__icon"),pageContacts=document.querySelector(".page__contacts"),elementBefore=document.querySelector("::before");buttonContacts.addEventListener("click",(function(){"translateY(-100%)"===contactsToggle.style.transform?(contactsToggle.style.transform="translateY(-3%)",buttonIconContacts.style.display="block",elementBefore.style.display="block",pageContacts.style.display="block"):(contactsToggle.style.transform="translateY(-100%)",buttonIconContacts.style.display="none",elementBefore.style.display="none",pageContacts.style.display="none")}));
//# sourceMappingURL=index.e097d13b.js.map
