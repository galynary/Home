!function(){var e=document.getElementById("toggle-button"),t=document.querySelector(".button__left2"),n=document.querySelector(".button__right2"),o=document.querySelector("[data-slide-left]"),a=document.querySelector("[data-slide-right]"),s=document.querySelector(".swiper__hero"),l=document.querySelector(".wrap__left-slide"),r=document.querySelector(".wrap__right-slide"),i=document.querySelector(".icon__menu-button"),c=document.querySelectorAll(".menu-button__item"),u=!1;e.addEventListener("click",(function(){u?(setTimeout((function(){c.forEach((function(e,t){e.style.transition="transform 5s ease",e.style.animationName="menuButton".concat(t+1),e.style.animation="menuButton".concat(t-1," 2s reverse forwards"),e.style.transform="translate(0,0)"}))}),500),setTimeout((function(){s.style.display="block",t.style.opacity="0",n.style.opacity="0"}),2e3),setTimeout((function(){o.style.transition="transform 2s ease",a.style.transition="transform 2s ease",i.style.transform="rotate(180deg)",function(){var e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(o.style.transform="translateY(0%)",a.style.transform="translateY(0%)"):(o.style.transform="translateX(0%)",a.style.transform="translateX(0%)")}t(),e.addListener(t)}()}),2300),setTimeout((function(){l.style.animationPlayState="running",r.style.animationPlayState="running"}),5e3)):(l.style.animationPlayState="paused",r.style.animationPlayState="paused",setTimeout((function(){i.style.transform="rotate(90deg)",t.style.opacity="1",n.style.opacity="1",i.style.transition="transform 1s ease",o.style.transition="transform 2s ease",a.style.transition="transform 2s ease",function(){var e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(o.style.transform="translateY(-100%)",a.style.transform="translateY(100%)"):(o.style.transform="translateX(-100%)",a.style.transform="translateX(100%)")}t(),e.addListener(t)}()}),1e3),setTimeout((function(){s.style.display="none"}),3100),setTimeout((function(){c.forEach((function(e,t){e.style.transition="transform 0.5s ease",e.style.animation="menuButton".concat(t+1," 2s forwards")}))}),2e3)),u=!u})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#contacts__link"),t=document.querySelector(".wrap__page-item-contact"),n=document.querySelector(".page-item-contact-mob"),o=document.querySelector(".wrap__about-us-link"),a=document.querySelector(".wrap__contacts-icon"),s=document.querySelector(".page__item-aboutus-mob"),l=document.querySelector(".js-open-about-us"),r=!0;t.style.transition="top 2.5s ease",l.disabled=!1,e.addEventListener("click",(function(){a.style.display="block",t.style.top="90%",o.style.bottom="20px",s.style.zIndex="21",n.style.zIndex="22",l.disabled=!0,r=!1})),a.addEventListener("click",(function(){r||(t.style.top="15px",a.style.display="none",n.style.zIndex="22",l.disabled=!1,r=!0)}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-open-about-us"),t=document.querySelector(".wrap__about-us-link"),n=document.querySelector(".wrap__icon-about-us"),o=document.querySelector(".page-item-contact-mob"),a=document.querySelector(".wrap__page-item-contact"),s=document.querySelector("#contacts__link"),l=document.querySelector(".page__item-aboutus-mob");t.style.transition="bottom 2.5s ease",s.disabled=!1,e.addEventListener("click",(function(){t.style.bottom="92%",n.style.display="block",o.style.zIndex="21",l.style.zIndex="22",a.style.top="10px",s.disabled=!0,!1})),n.addEventListener("click",(function(){n.style.display="none",t.style.bottom="20px",l.style.zIndex="22",s.disabled=!1,!0}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("toggle-button"),t=document.getElementById("toggle-button2"),n=document.querySelector(".icon__phone-black"),o=document.querySelector(".logo-img__white"),a=(document.querySelector(".logo__text-desktop"),document.querySelector(".page-container__left")),s=document.querySelector(".page-container__right"),l=document.querySelector(".icon__menu-button2"),r=document.querySelector(".button__left2"),i=document.querySelector(".button__right2"),c=document.querySelectorAll(".wrap-menu__button"),u=(document.querySelector("[data-open-selling]"),document.querySelector(".wrap__swiper-arrows")),y=document.querySelector(".wrap__page-item-contact"),d=document.querySelector(".contacts__link"),m=document.querySelector(".wrap__about-us-link"),f=document.querySelector(".js-open-about-us"),p=document.querySelector(".wrap__swiper-pagination"),_=document.querySelectorAll(".slide__page"),g=document.querySelectorAll(".page__section"),q=document.getElementById("data-selling"),S=document.querySelector(".wrap-swiper__slide"),v=document.querySelector(".wrap__page-container"),b=document.querySelectorAll(".pagination__item"),h=document.querySelector("[data-open-selling]"),E=document.querySelector("[data-open-faq]"),w=document.querySelector("[data-discover-open]"),k=document.querySelector("[data-open-consulting]"),x=document.querySelector("[data-open-gallery]");v.addEventListener("wheel",(function(e){0!==e.deltaY&&(v.scrollTop+=5*e.deltaY,e.preventDefault())})),c.forEach((function(l){l.addEventListener("click",(function(){e.style.display="none",t.style.display="flex",t.style.opacity="1",S.style.display="block",S.style.zIndex="62",r.style.opacity="0",i.style.opacity="0",v.style.zIndex="62",setTimeout((function(){a.style.transition="transform 5s ease",s.style.transition="transform 5s ease",a.style.transform="translateX(0%)",s.style.transform="translateX(0%)",t.style.transition="transform 4s ease",function(){var e=window.matchMedia("(max-width: 1200px)");function o(){e.matches?(n.style.display="block",t.style.transform="translate(-50%, -280%)"):t.style.transform="translate(-50%, -300%)"}o(),e.addListener(o)}()}),150),setTimeout((function(){y.style.background="#fff",m.style.background="#fff",d.style.color="#000",d.style.zIndex="63",f.style.color="#000",f.style.zIndex="63"}),2e3),setTimeout((function(){if(l===h){var e=document.querySelector("[data-selling]");b.forEach((function(e){e.classList.remove("active")})),g.forEach((function(e){e===document.querySelector(".data-selling-page")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",b[0].classList.add("active")}else if(l===E){var t=document.querySelector("[data-faq]");b.forEach((function(e){e.classList.remove("active")})),g.forEach((function(e){e===document.querySelector(".data-faq-page")&&(e.style.animation="openPage 4s linear forwards",e.style.opacity="1",e.style.display="block",e.style.transition="transform 5s ease")})),t.style.display="flex",t.style.zIndex="62",b[1].classList.add("active")}else if(l===w){var n=document.querySelector("[data-discover]");g.forEach((function(e){e===document.querySelector(".data-discover-page")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")})),n.style.display="flex",n.style.zIndex="62",b[2].classList.add("active")}else if(l===k){var o=document.querySelector("[data-description-house]");g.forEach((function(e){e===document.querySelector(".data-description-house-page")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")})),o.style.display="flex",o.style.zIndex="62",b[3].classList.add("active")}else if(l===x){var a=document.querySelector("[data-gallery]");g.forEach((function(e){e===document.querySelector("[data-gallery-page]")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")})),a.style.display="flex",a.style.zIndex="62",b[4].classList.add("active")}}),2100),setTimeout((function(){!function(){var e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(S.style.right="0px",S.style.bottom="150px"):(S.style.right="150px",S.style.bottom="0px")}t(),e.addListener(t)}()}),2500),setTimeout((function(){u.style.display="block",o.style.display="none",S.getBoundingClientRect().bottom<=window.innerHeight?p.style.display="block":p.style.display="none"}),3e3)}))}));t.addEventListener("click",(function(){g.forEach((function(e){e.style.animation="closePage 5s linear forwards",e.style.transition="transform 5s ease",e.style.opacity="0"})),l.style.transform="rotate(-90deg)",setTimeout((function(){S.style.right="0px"}),3200),setTimeout((function(){a.style.transition="transform 5s ease",s.style.transition="transform 5s ease",t.style.transition="transform 4s ease",t.style.transform="translate(-50%, 0%)",a.style.transform="translateX(-100%)",s.style.transform="translateX(100%)"}),3300),setTimeout((function(){p.style.display="none",n.style.display="none",b.forEach((function(e){e.classList.remove("active")})),o.style.display="block",u.style.display="none",y.style.background="#000",d.style.color="#fff",m.style.background="#000",f.style.color="#fff"}),3300),setTimeout((function(){_.forEach((function(e){e.style.display="none",e.style.transition="transform 5s ease"})),q.style.display="block",S.style.display="none",S.style.zIndex="1",t.style.display="none",e.style.display="flex",r.style.opacity="1",i.style.opacity="1",n.style.zIndex="52"}),8e3)}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".prev"),t=document.querySelector(".next"),n=(document.querySelector("[data-open-selling]"),document.querySelector("[data-open-faq]"),document.querySelector("[data-discover-open]"),document.querySelectorAll(".page-container__left")),o=document.querySelectorAll(".page-container__right"),a=document.querySelectorAll(".page__section"),s=document.querySelectorAll(".slide__page"),l=document.querySelectorAll(".pagination__item"),r=(document.querySelectorAll(".wrap-menu__button"),0);function i(e){var t=document.querySelectorAll(".slide__page"),n=document.querySelectorAll(".pagination__item");e<1?e=t.length:e>t.length&&(e=1),t.forEach((function(e){e.style.display="none"})),t[e-1].style.display="block",r=e,n.forEach((function(e){e.classList.remove("active")})),n[e-1].classList.add("active")}e.addEventListener("click",(function(e){e.preventDefault(),n.forEach((function(e){e.style.transform="translateX(0%)"})),o.forEach((function(e){e.style.transform="translateX(0%)"})),s.forEach((function(e){e.style.animation="none",e.style.transition="none"})),a.forEach((function(e){e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(r-1)})),t.addEventListener("click",(function(e){e.preventDefault(),n.forEach((function(e){e.style.transform="translateX(0%)"})),o.forEach((function(e){e.style.transform="translateX(0%)"})),s.forEach((function(e){e.style.animation="none",e.style.transition="none"})),a.forEach((function(e){e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(r+1)})),l.forEach((function(e,t){e.addEventListener("click",(function(t){var l=parseInt(e.getAttribute("data-index"));t.preventDefault(),n.forEach((function(e){e.style.transform="translateX(0%)"})),o.forEach((function(e){e.style.transform="translateX(0%)"})),s.forEach((function(e){e.style.animation="none",e.style.transition="none"})),a.forEach((function(e){e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(l)}))}))})),document.querySelectorAll(".write-us__input").forEach((function(e){e.addEventListener("focus",(function(){e.removeAttribute("placeholder")})),e.addEventListener("blur",(function(){""===e.value&&e.setAttribute("placeholder",e.getAttribute("data-placeholder"))})),e.setAttribute("data-placeholder",e.getAttribute("placeholder"))}));var y=document.querySelectorAll(".gallery__img"),d=document.querySelector(".arrow-up"),m=document.querySelector(".arrow-down"),f=0;function p(e){y.forEach((function(e){e.style.display="none"})),y[e].style.display="block"}function _(){0===f?d.classList.add("active"):d.classList.remove("active"),f===y.length-1?m.classList.add("active"):m.classList.remove("active")}d.addEventListener("click",(function(){f>0&&(p(--f),_())})),m.addEventListener("click",(function(){f<y.length-1&&(p(++f),_())})),p(f),_();var g=document.getElementById("openGalleryButton"),q=document.getElementById("gallery");g.addEventListener("click",(function(e){e.preventDefault(),q.style.opacity="1"}))}();
//# sourceMappingURL=index.e38ebb2a.js.map
