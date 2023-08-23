const buttonContacts = document.querySelector(".wrap__button-contacts");
const contactsToggle = document.querySelector(".contacts-toggle");
const buttonIconContacts = document.querySelector(".contacts__icon");
const pageContacts = document.querySelector(".page__contacts");
const elementBefore = document.querySelector("::before");
buttonContacts.addEventListener("click", ()=>{
    if (contactsToggle.style.transform === "translateY(-100%)") {
        contactsToggle.style.transform = "translateY(-3%)";
        buttonIconContacts.style.display = "block";
        elementBefore.style.display = "block";
        pageContacts.style.display = "block";
    } else {
        contactsToggle.style.transform = "translateY(-100%)";
        buttonIconContacts.style.display = "none";
        elementBefore.style.display = "none";
        pageContacts.style.display = "none";
    }
});

//# sourceMappingURL=index.69711179.js.map
