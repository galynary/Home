!function(){var e=document.querySelector(".button__menu-open"),t=document.querySelector("[data-slide-left]"),n=document.querySelector("[data-slide-right]"),o=document.querySelector(".button__left2"),s=document.querySelector(".button__right2"),r=document.querySelector(".swiper__hero"),l=document.querySelector(".wrap__left-slide"),a=document.querySelector(".wrap__right-slide"),i=document.querySelector(".icon__menu-button"),c=document.querySelectorAll(".menu-button__item"),y=!1;e.addEventListener("click",(function(){y?(c.forEach((function(e,t){e.style.transition="transform 5s ease",e.style.animationName="menuButton".concat(t+1),e.style.animation="menuButton".concat(t-1," 2s reverse forwards"),e.style.transform="translate(0,0)",o.style.opacity="0",s.style.opacity="0"})),setTimeout((function(){r.style.display="block"}),500),setTimeout((function(){i.style.transform="rotate(180deg)",t.style.transform="translateX(0%)",n.style.transform="translateX(0%)",t.style.transition="transform 2s ease",n.style.transition="transform 2s ease"}),1500),setTimeout((function(){l.style.animationPlayState="running",a.style.animationPlayState="running"}),3e3)):(l.style.animationPlayState="paused",a.style.animationPlayState="paused",setTimeout((function(){i.style.transform="rotate(90deg)",t.style.transform="translateX(-100%)",n.style.transform="translateX(100%)",t.style.transition="transform 2s ease",n.style.transition="transform 2s ease",o.style.opacity="1",s.style.opacity="1"}),1500),setTimeout((function(){r.style.display="none"}),3500),setTimeout((function(){c.forEach((function(e,t){e.style.transition="transform 0.5s ease",e.style.animation="menuButton".concat(t+1," 2s forwards")}))}),3500)),y=!y}));var u=document.querySelector(".button__menu-open-mob"),d=document.querySelector(".swiper__hero"),m=document.querySelector(".wrap__left-slide"),f=document.querySelector(".wrap__right-slide"),p=document.querySelector(".button__left-mob"),_=document.querySelector(".button__right-mob"),g=document.querySelector(".wrap-container__left-slide"),S=document.querySelector(".wrap-container__right-slide"),q=document.querySelector(".icon__menu-button-mob"),b=document.querySelectorAll(".menu-button__item"),k=!1;u.addEventListener("click",(function(){k?(setTimeout((function(){b.forEach((function(e,t){e.style.transition="transform 0.5s ease",e.style.animation="menuButton".concat(t-1," 2s reverse forwards")}))}),500),setTimeout((function(){d.style.display="block",p.style.opacity="0",_.style.opacity="0"}),2e3),setTimeout((function(){q.style.transform="rotate(180deg)",g.style.transform="translateX(0%)",S.style.transform="translateX(0%)",g.style.transition="transform 2s ease",S.style.transition="transform 2s ease"}),2300),setTimeout((function(){m.style.animationPlayState="running",f.style.animationPlayState="running"}),5e3)):(m.style.animationPlayState="paused",f.style.animationPlayState="paused",setTimeout((function(){q.style.transform="rotate(90deg)",p.style.opacity="1",_.style.opacity="1",g.style.transition="transform 2s ease",S.style.transition="transform 2s ease",g.style.transform="translatey(-100%)",S.style.transform="translatey(100%)"}),1200),setTimeout((function(){d.style.display="none"}),3e3),setTimeout((function(){b.forEach((function(e,t){e.style.transition="transform 0.5s ease",e.style.animation="menuButton".concat(t+1," 2s forwards")}))}),2e3)),k=!k})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#contacts__link"),t=document.querySelector(".wrap__page-item-contact"),n=document.querySelector(".page-item-contact-mob"),o=document.querySelector(".wrap__about-us-link"),s=document.querySelector(".wrap__contacts-icon"),r=document.querySelector(".page__item-aboutus-mob"),l=document.querySelector(".js-open-about-us"),a=!0;t.style.transition="top 2.5s ease",l.disabled=!1,e.addEventListener("click",(function(){s.style.display="block",t.style.top="90%",o.style.bottom="20px",r.style.zIndex="21",n.style.zIndex="22",l.disabled=!0,a=!1})),s.addEventListener("click",(function(){a||(t.style.top="15px",s.style.display="none",n.style.zIndex="22",l.disabled=!1,a=!0)}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-open-about-us"),t=document.querySelector(".wrap__about-us-link"),n=document.querySelector(".wrap__icon-about-us"),o=document.querySelector(".page-item-contact-mob"),s=document.querySelector(".wrap__page-item-contact"),r=document.querySelector("#contacts__link"),l=document.querySelector(".page__item-aboutus-mob");t.style.transition="bottom 2.5s ease",r.disabled=!1,e.addEventListener("click",(function(){t.style.bottom="92%",n.style.display="block",o.style.zIndex="21",l.style.zIndex="22",s.style.top="10px",r.disabled=!0,!1})),n.addEventListener("click",(function(){n.style.display="none",t.style.bottom="20px",l.style.zIndex="22",r.disabled=!1,!0}))}));var w=document.getElementById("toggle-button"),E=document.getElementById("toggle-button2"),h=(document.querySelector(".logo-icon-black__desctop"),document.querySelector(".logo-icon-white__desctop"),document.querySelector(".logo__text-desctop"),document.querySelector(".page-container__left")),x=document.querySelector(".page-container__right"),I=document.querySelector(".icon__menu-button2"),v=document.querySelector(".button__left2"),T=document.querySelector(".button__right2"),z=document.querySelector("[data-open-selling]"),L=(document.getElementById("slide__page-selling"),document.querySelector(".wrap__swiper-arrows")),X=document.querySelector(".wrap__contacts-link"),A=document.querySelector(".contacts__link"),B=document.querySelector(".wrap__about-us-link"),P=document.querySelector(".js-open-about-us"),D=document.querySelector(".wrap__swiper-pagination"),Y=document.querySelectorAll(".slide__page"),j=document.getElementById("data-selling"),C=document.querySelector(".wrap-swiper__slide"),M=document.querySelector(".wrap__page-container");M.addEventListener("wheel",(function(e){0!==e.deltaY&&(M.scrollTop+=5*e.deltaY,e.preventDefault())})),z.addEventListener("click",(function(){w.style.display="none",E.style.display="flex",E.style.opacity="1",C.style.display="block",C.style.zIndex="62",v.style.opacity="0",T.style.opacity="0",setTimeout((function(){Y.forEach((function(e){e.style.display="block",e.style.zIndex="62",e.style.transition="transform 5s ease"}),100),setTimeout((function(){E.style.transform="translate(-50%, -350%)",h.style.transform="translateX(0%)",x.style.transform="translateX(0%)",h.style.transition="transform 4s ease",x.style.transition="transform 4s ease",E.style.transition="transform 4s ease",M.style.zIndex="62"}),100),setTimeout((function(){j.style.display="block",j.style.animation="openPage 4s linear forwards",j.style.zIndex="62",j.style.transition="transform 5s ease"}),4300),setTimeout((function(){L.style.zIndex="63",D.style.zIndex="63",D.style.display="block",D.style.zIndex="63",X.style.background="#fff",A.style.color="#000",B.style.background="#fff",P.style.color="#000"}),4300),setTimeout((function(){C.style.right="150px"}),4320)}))}));E.addEventListener("click",(function(){setTimeout((function(){j.style.animation="closePage 4s linear forwards",j.style.transition="transform 5s ease"}),200),I.style.transform="rotate(-90deg)",setTimeout((function(){C.style.right="0px"}),1e3),setTimeout((function(){j.style.display="none",E.style.transform="translate(-50%, 0%)",h.style.transform="translateX(-100%)",x.style.transform="translateX(100%)",h.style.transition="transform 4s ease",x.style.transition="transform 4s ease",E.style.transition="transform 4s ease"}),1e3),setTimeout((function(){D.style.display="none",D.style.zIndex="1",X.style.background="#000",A.style.color="#fff",B.style.background="#000",P.style.color="#fff"}),1500),setTimeout((function(){Y.forEach((function(e){e.style.display="none",e.style.transition="transform 5s ease"})),C.style.display="none",C.style.zIndex="1",L.style.zIndex="1",D.style.zIndex="1",E.style.display="none",w.style.display="flex",v.style.opacity="1",T.style.opacity="1"}),6e3)}));var O=document.getElementById("toggle-button"),N=document.getElementById("toggle-button2"),F=(document.querySelector(".logo-img__black"),document.querySelector(".logo-img__white"),document.querySelector(".logo__text-desctop"),document.querySelector(".page-container__left")),G=document.querySelector(".page-container__right"),H=document.querySelector(".icon__menu-button2"),J=document.querySelector("[data-open-faq]"),K=(document.getElementById("slide__page-faq"),document.querySelector(".wrap__swiper-arrows")),Q=document.querySelector(".wrap__swiper-pagination"),R=document.querySelectorAll(".slide__page"),U=document.getElementById("data-faq"),V=document.querySelector(".wrap-swiper__slide"),W=document.querySelector(".wrap__page-container"),Z=document.querySelector(".button__left2"),$=document.querySelector(".button__right2"),ee=document.querySelector(".wrap__contacts-link"),te=document.querySelector(".contacts__link"),ne=document.querySelector(".wrap__about-us-link"),oe=document.querySelector(".js-open-about-us");W.addEventListener("wheel",(function(e){0!==e.deltaY&&(W.scrollTop+=5*e.deltaY,e.preventDefault())})),J.addEventListener("click",(function(){O.style.display="none",N.style.display="flex",N.style.opacity="1",V.style.display="block",V.style.zIndex="62",Z.style.opacity="0",$.style.opacity="0",setTimeout((function(){R.forEach((function(e){e.style.display="block",e.style.zIndex="62",e.style.transition="transform 5s ease"}),100),setTimeout((function(){N.style.transform="translate(-50%, -350%)",F.style.transform="translateX(0%)",G.style.transform="translateX(0%)",F.style.transition="transform 4s ease",G.style.transition="transform 4s ease",N.style.transition="transform 4s ease",W.style.zIndex="62"}),100),setTimeout((function(){U.style.display="block",U.style.animation="openPage 4s linear forwards",U.style.zIndex="64",U.style.transition="transform 5s ease"}),4300),setTimeout((function(){K.style.zIndex="63",Q.style.zIndex="63",Q.style.display="block",Q.style.zIndex="63",ee.style.background="#fff",te.style.color="#000",ne.style.background="#fff",oe.style.color="#000"}),4300),setTimeout((function(){V.style.right="150px"}),4320)}))}));N.addEventListener("click",(function(){setTimeout((function(){U.style.animation="closePage 4s linear forwards",U.style.transition="transform 5s ease"}),200),H.style.transform="rotate(-90deg)",setTimeout((function(){V.style.right="0px"}),1e3),setTimeout((function(){U.style.display="none",N.style.transform="translate(-50%, 0%)",F.style.transform="translateX(-100%)",G.style.transform="translateX(100%)",F.style.transition="transform 4s ease",G.style.transition="transform 4s ease",N.style.transition="transform 4s ease"}),1e3),setTimeout((function(){Q.style.display="none",Q.style.zIndex="1",ee.style.background="#000",te.style.color="#fff",ne.style.background="#000",oe.style.color="#fff"}),1500),setTimeout((function(){R.forEach((function(e){e.style.display="none",e.style.transition="transform 5s ease"})),V.style.display="none",V.style.zIndex="1",K.style.zIndex="1",Q.style.zIndex="1",N.style.display="none",O.style.display="flex",Z.style.opacity="1",$.style.opacity="1"}),6e3)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".prev"),t=document.querySelector(".next"),n=document.querySelectorAll(".page-container__left"),o=document.querySelectorAll(".page-container__right"),s=document.querySelectorAll(".page__section"),r=document.querySelectorAll(".slide__page"),l=document.querySelectorAll(".pagination__item"),a=0;function i(e){var t=document.querySelectorAll(".slide__page"),n=document.querySelectorAll(".pagination__item");e<1?e=t.length:e>t.length&&(e=1),t.forEach((function(e){e.style.display="none"})),t[e-1].style.display="block",a=e,n.forEach((function(e){e.classList.remove("active")})),n[e-1].classList.add("active")}e.addEventListener("click",(function(e){e.preventDefault(),n.forEach((function(e){e.style.transform="translateX(0%)"})),o.forEach((function(e){e.style.transform="translateX(0%)"})),r.forEach((function(e){e.style.animation="none",e.style.transition="none"})),s.forEach((function(e){e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(a-1)})),t.addEventListener("click",(function(e){e.preventDefault(),n.forEach((function(e){e.style.transform="translateX(0%)"})),o.forEach((function(e){e.style.transform="translateX(0%)"})),r.forEach((function(e){e.style.animation="none",e.style.transition="none"})),s.forEach((function(e){e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(a+1)})),l.forEach((function(e,t){e.addEventListener("click",(function(t){var l=parseInt(e.getAttribute("data-index"));t.preventDefault(),n.forEach((function(e){e.style.transform="translateX(0%)"})),o.forEach((function(e){e.style.transform="translateX(0%)"})),r.forEach((function(e){e.style.animation="none",e.style.transition="none"})),s.forEach((function(e){e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(l)}))}))})),document.querySelectorAll(".write-us__input").forEach((function(e){e.addEventListener("focus",(function(){e.removeAttribute("placeholder")})),e.addEventListener("blur",(function(){""===e.value&&e.setAttribute("placeholder",e.getAttribute("data-placeholder"))})),e.setAttribute("data-placeholder",e.getAttribute("placeholder"))}));var se=document.getElementById("toggle-button"),re=document.getElementById("toggle-button2"),le=(document.querySelector(".logo-img__black"),document.querySelector(".logo-img__white"),document.querySelector(".logo__text-desctop"),document.querySelector(".page-container__left")),ae=document.querySelector(".page-container__right"),ie=document.querySelector(".icon__menu-button2"),ce=document.querySelector("[data-discover-open]"),ye=(document.getElementById("slide__page-discover"),document.querySelector(".wrap__swiper-arrows")),ue=document.querySelector(".wrap__swiper-pagination"),de=document.querySelectorAll(".slide__page"),me=document.getElementById("data-discover"),fe=document.querySelector(".wrap-swiper__slide"),pe=document.querySelector(".wrap__page-container"),_e=document.querySelector(".button__left2"),ge=document.querySelector(".button__right2"),Se=document.querySelector(".wrap__contacts-link"),qe=document.querySelector(".contacts__link"),be=document.querySelector(".wrap__about-us-link"),ke=document.querySelector(".js-open-about-us");pe.addEventListener("wheel",(function(e){0!==e.deltaY&&(pe.scrollTop+=5*e.deltaY,e.preventDefault())})),ce.addEventListener("click",(function(){se.style.display="none",re.style.display="flex",re.style.opacity="1",fe.style.display="block",fe.style.zIndex="62",_e.style.opacity="0",ge.style.opacity="0",setTimeout((function(){de.forEach((function(e){e.style.display="block",e.style.zIndex="62",e.style.transition="transform 5s ease"}),100),setTimeout((function(){re.style.transform="translate(-50%, -350%)",le.style.transform="translateX(0%)",ae.style.transform="translateX(0%)",le.style.transition="transform 4s ease",ae.style.transition="transform 4s ease",re.style.transition="transform 4s ease",pe.style.zIndex="62"}),100),setTimeout((function(){me.style.display="block",me.style.animation="openPage 4s linear forwards",me.style.zIndex="64",me.style.transition="transform 5s ease"}),4300),setTimeout((function(){ye.style.zIndex="63",ue.style.zIndex="63",ue.style.display="block",ue.style.zIndex="63",Se.style.background="#fff",qe.style.color="#000",be.style.background="#fff",ke.style.color="#000"}),4300),setTimeout((function(){fe.style.right="150px"}),4320)}))}));re.addEventListener("click",(function(){setTimeout((function(){me.style.animation="closePage 4s linear forwards",me.style.transition="transform 5s ease"}),200),ie.style.transform="rotate(-90deg)",setTimeout((function(){fe.style.right="0px"}),1e3),setTimeout((function(){me.style.display="none",re.style.transform="translate(-50%, 0%)",le.style.transform="translateX(-100%)",ae.style.transform="translateX(100%)",le.style.transition="transform 4s ease",ae.style.transition="transform 4s ease",re.style.transition="transform 4s ease"}),1e3),setTimeout((function(){ue.style.display="none",ue.style.zIndex="1",Se.style.background="#000",qe.style.color="#fff",be.style.background="#000",ke.style.color="#fff"}),1500),setTimeout((function(){de.forEach((function(e){e.style.display="none",e.style.transition="transform 5s ease"})),fe.style.display="none",fe.style.zIndex="1",ye.style.zIndex="1",ue.style.zIndex="1",re.style.display="none",se.style.display="flex",_e.style.opacity="1",ge.style.opacity="1"}),6e3)}))}();
//# sourceMappingURL=index.21a37afc.js.map