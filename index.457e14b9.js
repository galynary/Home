!function(){var e=document.getElementById("toggle-button"),t=document.querySelector("[data-slide-left]"),n=document.querySelector("[data-slide-right]"),o=document.querySelector(".swiper__hero"),s=document.querySelector(".wrap__left-slide"),a=document.querySelector(".wrap__right-slide"),r=document.querySelector(".icon__menu-button"),l=document.querySelectorAll(".menu-button__item"),i=!1;e.addEventListener("click",(function(){i?(l.forEach((function(e,t){e.style.transition="transform 5s ease",e.style.animationName="menuButton".concat(t+1),e.style.animation="menuButton".concat(t+1," 2s reverse forwards"),e.style.transform="translate(0,0)"})),setTimeout((function(){o.style.display="block"}),500),setTimeout((function(){r.style.transform="rotate(180deg)",t.style.transform="translateX(0%)",n.style.transform="translateX(0%)"}),700),setTimeout((function(){s.style.animationPlayState="running",a.style.animationPlayState="running"}),2300)):(s.style.animationPlayState="paused",a.style.animationPlayState="paused",setTimeout((function(){r.style.transform="rotate(90deg)",t.style.transform="translateX(-100%)",n.style.transform="translateX(100%)"}),1200),setTimeout((function(){o.style.display="none"}),3e3),setTimeout((function(){l.forEach((function(e,t){e.style.transition="transform 0.5s ease",e.style.animation="menuButton".concat(t+1," 2s forwards")}))}),2500)),i=!i}));var c=document.getElementById("toggle-button-mob"),y=document.querySelector(".wrap__slide-up"),u=document.querySelector(".wrap__slide-down"),d=document.querySelector(".icon__menu-button-mob"),m="linear";y.style.transition="transform ".concat("1s"," ").concat(m),u.style.transition="transform ".concat("1s"," ").concat(m),c.addEventListener("click",(function(){"running"===y.style.animationPlayState?(y.style.animationPlayState="paused",u.style.animationPlayState="paused",setTimeout((function(){d.style.transform="rotate(90deg)",y.style.transform="translateY(-120%)",u.style.transform="translateY(100%)"}),200)):(y.style.animationPlayState="running",u.style.animationPlayState="running",setTimeout((function(){d.style.transform="rotate(180deg)",y.style.transform="translateY(0%)",u.style.transform="translateY(0%)"}),0))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#contacts__link"),t=document.querySelector(".wrap__page-item-contact"),n=document.querySelector(".page-item-contact-mob"),o=document.querySelector(".wrap__about-us-link"),s=document.querySelector(".wrap__contacts-icon"),a=document.querySelector(".page__item-aboutus-mob"),r=document.querySelector(".js-open-about-us"),l=!0;t.style.transition="top 2.5s ease",r.disabled=!1,e.addEventListener("click",(function(){s.style.display="block",t.style.top="90%",o.style.bottom="20px",a.style.zIndex="21",n.style.zIndex="22",r.disabled=!0,l=!1})),s.addEventListener("click",(function(){l||(t.style.top="15px",s.style.display="none",n.style.zIndex="22",r.disabled=!1,l=!0)}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-open-about-us"),t=document.querySelector(".wrap__about-us-link"),n=document.querySelector(".wrap__icon-about-us"),o=document.querySelector(".page-item-contact-mob"),s=document.querySelector(".wrap__page-item-contact"),a=document.querySelector("#contacts__link"),r=document.querySelector(".page__item-aboutus-mob");t.style.transition="bottom 2.5s ease",a.disabled=!1,e.addEventListener("click",(function(){t.style.bottom="92%",n.style.display="block",o.style.zIndex="21",r.style.zIndex="22",s.style.top="10px",a.disabled=!0,!1})),n.addEventListener("click",(function(){n.style.display="none",t.style.bottom="20px",r.style.zIndex="22",a.disabled=!1,!0}))}));var f=document.getElementById("toggle-button"),p=document.getElementById("toggle-button2"),_=document.querySelector(".logo-icon-black__desctop"),g=document.querySelector(".logo-icon-white__desctop"),S=document.querySelector(".logo__text-desctop"),b=document.querySelector(".page-container__left"),q=document.querySelector(".page-container__right"),k=document.querySelector(".icon__menu-button2"),w=document.querySelectorAll(".menu-button__item"),I=(document.querySelector("[data-open-selling]"),document.getElementById("slide__page-selling")),v=document.querySelector(".wrap__swiper-arrows"),x=document.querySelector(".wrap__swiper-pagination"),E=document.querySelector(".page__section"),z=document.querySelector(".wrap-swiper__slide");w.forEach((function(e){e.addEventListener("click",(function(){f.style.display="none",p.style.display="block",z.style.display="block",z.style.zIndex="50",z.style.Right="20%",setTimeout((function(){I.style.display="block",I.style.zIndex="50",I.style.transition="transform 4s ease"}),300),setTimeout((function(){k.style.transform="rotate(180deg)",p.style.transform="translate(-50%, -350%)",b.style.transform="translateX(0%)",q.style.transform="translateX(0%)",b.style.transition="transform 4s ease",q.style.transition="transform 4s ease",p.style.transition="transform 4s ease"}),300),setTimeout((function(){g.style.display="none",_.style.display="block",S.style.color="black",E.style.display="block",E.style.zIndex="51",v.style.zIndex="52",x.style.zIndex="52",E.style.animation="openPage 4s linear forwards",E.style.transition="transform 5s ease"}),1150)}))}));p.addEventListener("click",(function(){E.style.animation="closePage 4s linear forwards",E.style.transition="transform 5s ease",setTimeout((function(){k.style.transform="rotate(90deg)",p.style.transform="translate(-50%, 0%)",b.style.transform="translateX(-100%)",q.style.transform="translateX(100%)",b.style.transition="transform 4s ease",q.style.transition="transform 4s ease",p.style.transition="transform 4s ease"}),300),setTimeout((function(){g.style.display="block",_.style.display="none",S.style.color="white"}),2250),setTimeout((function(){E.style.display="none",E.style.transition="transform 5s ease",z.style.display="none",z.style.zIndex="1",v.style.zIndex="1",x.style.zIndex="1",p.style.display="none",f.style.display="block"}),5e3)}));var T=document.getElementById("toggle-button"),L=document.getElementById("toggle-button2"),h=document.querySelector(".page-container__left"),P=document.querySelector(".page-container__right"),X=document.querySelector(".icon__menu-button2"),B=document.querySelectorAll(".menu-button__item"),A=(document.querySelector("[data-open-faq]"),document.getElementById("slide__page-faq")),Y=document.querySelector(".wrap__swiper-arrows"),j=document.querySelector(".wrap__swiper-pagination"),C=document.querySelector(".page__section"),D=document.querySelector(".my__swiper");B.forEach((function(e){e.addEventListener("click",(function(){T.style.display="none",L.style.display="block",D.style.display="block",D.style.zIndex="41",setTimeout((function(){A.style.display="block",A.style.zIndex="41",A.style.transition="transform 4s ease"}),300),setTimeout((function(){X.style.transform="rotate(180deg)",L.style.transform="translate(0%, -350%)",h.style.transform="translateX(0%)",P.style.transform="translateX(0%)",h.style.transition="transform 4s ease",P.style.transition="transform 4s ease",L.style.transition="transform 4s ease"}),500),setTimeout((function(){C.style.display="block",C.style.zIndex="41",Y.style.zIndex="42",j.style.zIndex="42",C.style.animation="openPage 4s linear forwards",C.style.transition="transform 5s ease"}),2500)}))}));L.addEventListener("click",(function(){C.style.animation="closePage 4s linear forwards",C.style.transition="transform 5s ease",setTimeout((function(){C.style.display="none",C.style.transition="transform 5s ease"}),4e3),setTimeout((function(){X.style.transform="rotate(90deg)",L.style.transform="translate(-50%, 0%)",h.style.transform="translateX(-100%)",P.style.transform="translateX(100%)",h.style.transition="transform 4s ease",P.style.transition="transform 4s ease",L.style.transition="transform 4s ease"}),2e3),setTimeout((function(){D.style.display="none",D.style.zIndex="1",Y.style.zIndex="1",j.style.zIndex="1",L.style.display="none",T.style.display="block"}),6e3)}));var M=document.querySelector(".prev"),O=document.querySelector(".next"),N=document.querySelectorAll(".pagination__item"),R=1;function F(e){var t,n=document.querySelectorAll(".slide__page"),o=document.querySelectorAll(".pagination__item");for(e>n.length&&(R=1),e<1&&(R=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<o.length;t++)o[t].classList.remove("active");n[R-1].style.display="block",o[R-1].classList.add("active")}F(R),M.addEventListener("click",(function(){F(R-=1)})),O.addEventListener("click",(function(){F(R+=1)})),N.forEach((function(e,t){e.addEventListener("click",(function(){F(t+1)}))}))}();
//# sourceMappingURL=index.457e14b9.js.map
