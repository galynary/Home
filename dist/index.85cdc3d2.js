const wrapButtonAboutUs = document.querySelector(".wrap__button-about-us");
const buttonIconAboutUs = document.querySelector(".icon__about-us");
const pageAboutUs = document.querySelector(".page__about-us");
const buttonAboutUs = document.querySelector(".js-open-about-us");
wrapButtonAboutUs.addEventListener("click", ()=>{
    if (buttonAboutUs.style.transform === "translateY(-4%)") {
        buttonAboutUs.style.transform = "translateY(-92%)";
        buttonIconAboutUs.style.display = "block";
    } else {
        buttonAboutUs.style.transform = "translateY(-4%)";
        buttonIconAboutUs.style.display = "none";
    }
});

//# sourceMappingURL=index.85cdc3d2.js.map
