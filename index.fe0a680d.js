!function(){var t=document.getElementById("toggle-button"),e=document.querySelector("[data-slide-left]"),n=document.querySelector("[data-slide-right]"),o=document.querySelector(".swiper__hero"),s=document.querySelector(".wrap__left-slide"),a=document.querySelector(".wrap__right-slide"),r=document.querySelector(".icon__menu-button"),l=document.querySelectorAll(".menu-button__item"),i=!1;t.addEventListener("click",(function(){i?(l.forEach((function(t,e){t.style.transition="transform 5s ease",t.style.animationName="menuButton".concat(e+1),t.style.animation="menuButton".concat(e+1," 2s reverse forwards"),t.style.transform="translate(0,0)"})),setTimeout((function(){o.style.display="block"}),500),setTimeout((function(){r.style.transform="rotate(180deg)",e.style.transform="translateX(0%)",n.style.transform="translateX(0%)"}),700),setTimeout((function(){s.style.animationPlayState="running",a.style.animationPlayState="running"}),2300)):(s.style.animationPlayState="paused",a.style.animationPlayState="paused",setTimeout((function(){r.style.transform="rotate(90deg)",e.style.transform="translateX(-100%)",n.style.transform="translateX(100%)"}),1200),setTimeout((function(){o.style.display="none"}),3e3),setTimeout((function(){l.forEach((function(t,e){t.style.transition="transform 0.5s ease",t.style.animation="menuButton".concat(e+1," 2s forwards")}))}),2500)),i=!i}));var c=document.getElementById("toggle-button-mob"),u=document.querySelector(".wrap__slide-up"),y=document.querySelector(".wrap__slide-down"),m=document.querySelector(".icon__menu-button-mob"),d="linear";u.style.transition="transform ".concat("1s"," ").concat(d),y.style.transition="transform ".concat("1s"," ").concat(d),c.addEventListener("click",(function(){"running"===u.style.animationPlayState?(u.style.animationPlayState="paused",y.style.animationPlayState="paused",setTimeout((function(){m.style.transform="rotate(90deg)",u.style.transform="translateY(-120%)",y.style.transform="translateY(100%)"}),200)):(u.style.animationPlayState="running",y.style.animationPlayState="running",setTimeout((function(){m.style.transform="rotate(180deg)",u.style.transform="translateY(0%)",y.style.transform="translateY(0%)"}),0))})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("#contacts__link"),e=document.querySelector(".wrap__page-item-contact"),n=document.querySelector(".page-item-contact-mob"),o=document.querySelector(".wrap__about-us-link"),s=document.querySelector(".wrap__contacts-icon"),a=document.querySelector(".page__item-aboutus-mob"),r=document.querySelector(".js-open-about-us"),l=!0;e.style.transition="top 2s ease",r.disabled=!1,t.addEventListener("click",(function(){s.style.display="block",e.style.top="93%",o.style.bottom="20px",a.style.zIndex="21",n.style.zIndex="22",r.disabled=!0,l=!1})),s.addEventListener("click",(function(){l||(e.style.top="15px",s.style.display="none",n.style.zIndex="22",r.disabled=!1,l=!0)}))})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".js-open-about-us"),e=document.querySelector(".wrap__about-us-link"),n=document.querySelector(".wrap__icon-about-us"),o=document.querySelector(".page-item-contact-mob"),s=document.querySelector(".wrap__page-item-contact"),a=document.querySelector("#contacts__link"),r=document.querySelector(".page__item-aboutus-mob");e.style.transition="bottom 2s ease",a.disabled=!1,t.addEventListener("click",(function(){e.style.bottom="90%",n.style.display="block",o.style.zIndex="21",r.style.zIndex="22",s.style.top="10px",a.disabled=!0,!1})),n.addEventListener("click",(function(){n.style.display="none",e.style.bottom="20px",r.style.zIndex="22",a.disabled=!1,!0}))}));var f=document.getElementById("toggle-button"),p=document.getElementById("toggle-button2"),_=document.querySelector(".page-container__left"),S=document.querySelector(".page-container__right"),b=document.querySelector(".icon__menu-button2"),g=document.querySelectorAll(".menu-button__item"),q=(document.querySelector("[data-open-selling]"),document.querySelector(".slide__page")),k=document.querySelector(".page__section"),w=document.querySelector(".my__swiper");g.forEach((function(t){t.addEventListener("click",(function(){f.style.display="none",p.style.display="block",w.style.display="block",w.style.zIndex="40",setTimeout((function(){q.style.display="block",q.style.zIndex="40",q.style.transition="transform 4s ease"}),300),setTimeout((function(){b.style.transform="rotate(180deg)",p.style.transform="translate(0%, -350%)",_.style.transform="translateX(0%)",S.style.transform="translateX(0%)",_.style.transition="transform 4s ease",S.style.transition="transform 4s ease",p.style.transition="transform 4s ease"}),500),setTimeout((function(){k.style.display="block",k.style.zIndex="41",k.style.animation="openPage 4s linear forwards",k.style.transition="transform 5s ease"}),2500)}))}));p.addEventListener("click",(function(){k.style.animation="closePage 4s linear forwards",k.style.transition="transform 5s ease",setTimeout((function(){k.style.display="none",k.style.transition="transform 5s ease"}),4e3),setTimeout((function(){b.style.transform="rotate(90deg)",p.style.transform="translate(-50%, 0%)",_.style.transform="translateX(-100%)",S.style.transform="translateX(100%)",_.style.transition="transform 4s ease",S.style.transition="transform 4s ease",p.style.transition="transform 4s ease"}),2e3),setTimeout((function(){w.style.display="none",w.style.zIndex="1",p.style.display="none",f.style.display="block"}),6e3)}))}();
//# sourceMappingURL=index.fe0a680d.js.map