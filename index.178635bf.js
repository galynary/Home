const e=document.querySelector(".button__menu-open"),t=document.querySelector("[data-slide-left]"),n=document.querySelector("[data-slide-right]"),s=document.querySelector(".button__left2"),o=document.querySelector(".button__right2"),a=document.querySelector(".swiper__hero"),r=document.querySelector(".wrap__left-slide"),l=document.querySelector(".wrap__right-slide"),i=document.querySelector(".icon__menu-button"),y=document.querySelectorAll(".menu-button__item");let c=!1;e.addEventListener("click",(()=>{c?(y.forEach(((e,t)=>{e.style.transition="transform 5s ease",e.style.animationName=`menuButton${t+1}`,e.style.animation=`menuButton${t-1} 2s reverse forwards`,e.style.transform="translate(0,0)",s.style.opacity="0",o.style.opacity="0"})),setTimeout((()=>{a.style.display="block"}),500),setTimeout((()=>{i.style.transform="rotate(180deg)",t.style.transform="translateX(0%)",n.style.transform="translateX(0%)",t.style.transition="transform 2s ease",n.style.transition="transform 2s ease"}),1500),setTimeout((()=>{r.style.animationPlayState="running",l.style.animationPlayState="running"}),3e3)):(r.style.animationPlayState="paused",l.style.animationPlayState="paused",setTimeout((()=>{i.style.transform="rotate(90deg)",t.style.transform="translateX(-100%)",n.style.transform="translateX(100%)",t.style.transition="transform 2s ease",n.style.transition="transform 2s ease",s.style.opacity="1",o.style.opacity="1"}),1500),setTimeout((()=>{a.style.display="none"}),3500),setTimeout((()=>{y.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t+1} 2s forwards`}))}),3500)),c=!c}));const d=document.querySelector(".button__menu-open-mob"),m=document.querySelector(".swiper__hero"),u=document.querySelector(".wrap__left-slide"),p=document.querySelector(".wrap__right-slide"),f=document.querySelector(".button__left-mob"),_=document.querySelector(".button__right-mob"),g=document.querySelector(".wrap-container__left-slide"),S=document.querySelector(".wrap-container__right-slide"),q=document.querySelector(".icon__menu-button-mob"),b=document.querySelectorAll(".menu-button__item");let E=!1;d.addEventListener("click",(()=>{E?(setTimeout((()=>{b.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t-1} 2s reverse forwards`}))}),500),setTimeout((()=>{m.style.display="block",f.style.opacity="0",_.style.opacity="0"}),2e3),setTimeout((()=>{q.style.transform="rotate(180deg)",g.style.transform="translateX(0%)",S.style.transform="translateX(0%)",g.style.transition="transform 2s ease",S.style.transition="transform 2s ease"}),2300),setTimeout((()=>{u.style.animationPlayState="running",p.style.animationPlayState="running"}),5e3)):(u.style.animationPlayState="paused",p.style.animationPlayState="paused",setTimeout((()=>{q.style.transform="rotate(90deg)",f.style.opacity="1",_.style.opacity="1",g.style.transition="transform 2s ease",S.style.transition="transform 2s ease",g.style.transform="translatey(-100%)",S.style.transform="translatey(100%)"}),1200),setTimeout((()=>{m.style.display="none"}),3e3),setTimeout((()=>{b.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t+1} 2s forwards`}))}),2e3)),E=!E})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#contacts__link"),t=document.querySelector(".wrap__page-item-contact"),n=document.querySelector(".page-item-contact-mob"),s=document.querySelector(".wrap__about-us-link"),o=document.querySelector(".wrap__contacts-icon"),a=document.querySelector(".page__item-aboutus-mob"),r=document.querySelector(".js-open-about-us");let l=!0;t.style.transition="top 2.5s ease",r.disabled=!1,e.addEventListener("click",(()=>{o.style.display="block",t.style.top="90%",s.style.bottom="20px",a.style.zIndex="21",n.style.zIndex="22",r.disabled=!0,l=!1})),o.addEventListener("click",(()=>{l||(t.style.top="15px",o.style.display="none",n.style.zIndex="22",r.disabled=!1,l=!0)}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".js-open-about-us"),t=document.querySelector(".wrap__about-us-link"),n=document.querySelector(".wrap__icon-about-us"),s=document.querySelector(".page-item-contact-mob"),o=document.querySelector(".wrap__page-item-contact"),a=document.querySelector("#contacts__link"),r=document.querySelector(".page__item-aboutus-mob");let l=!0;t.style.transition="bottom 2.5s ease",a.disabled=!1,e.addEventListener("click",(()=>{t.style.bottom="92%",n.style.display="block",s.style.zIndex="21",r.style.zIndex="22",o.style.top="10px",a.disabled=!0,l=!1})),n.addEventListener("click",(()=>{n.style.display="none",t.style.bottom="20px",r.style.zIndex="22",a.disabled=!1,l=!0}))}));const h=document.getElementById("toggle-button"),w=document.getElementById("toggle-button2"),x=(document.querySelector(".logo-icon-black__desctop"),document.querySelector(".logo-icon-white__desctop"),document.querySelector(".logo__text-desctop"),document.querySelector(".page-container__left")),I=document.querySelector(".page-container__right"),T=document.querySelector(".icon__menu-button2"),z=document.querySelector(".button__left2"),k=document.querySelector(".button__right2"),v=document.querySelectorAll(".menu-button__item"),L=(document.querySelector("[data-open-selling]"),document.getElementById("slide__page-selling"),document.querySelector(".wrap__swiper-arrows")),X=document.querySelector(".wrap__swiper-pagination"),P=document.querySelectorAll(".page__section"),A=document.querySelector(".wrap-swiper__slide"),B=document.querySelector(".wrap__page-container");document.querySelector(".page__header");B.addEventListener("wheel",(e=>{0!==e.deltaY&&(B.scrollTop+=10*e.deltaY,e.preventDefault())})),v.forEach((e=>{e.addEventListener("click",(()=>{h.style.display="none",w.style.display="flex",w.style.opacity="1",A.style.display="block",A.style.zIndex="62",z.style.opacity="0",k.style.opacity="0",setTimeout((()=>{P.forEach((e=>{e.style.display="block",e.style.zIndex="62",e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease"}),1150),setTimeout((()=>{L.style.zIndex="63",X.style.display="block",X.style.zIndex="63"}),3e3),setTimeout((()=>{w.style.transform="translate(-50%, -350%)",x.style.transform="translateX(0%)",I.style.transform="translateX(0%)",x.style.transition="transform 4s ease",I.style.transition="transform 4s ease",w.style.transition="transform 4s ease"}),1e3),setTimeout((()=>{L.style.zIndex="63",X.style.zIndex="63",P.forEach((e=>{e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease"}))}),1150)}))}))}));w.addEventListener("click",(()=>{P.forEach((e=>{e.style.animation="closePage 4s linear forwards",e.style.transition="transform 5s ease"})),T.style.transform="rotate(-90deg)",setTimeout((()=>{X.style.display="none",X.style.zIndex="1"}),250),setTimeout((()=>{w.style.transform="translate(-50%, 0%)",x.style.transform="translateX(-100%)",I.style.transform="translateX(100%)",x.style.transition="transform 4s ease",I.style.transition="transform 4s ease",w.style.transition="transform 4s ease"}),300),setTimeout((()=>{P.forEach((e=>{e.style.display="none",e.style.transition="transform 5s ease"})),A.style.display="none",A.style.zIndex="1",L.style.zIndex="1",X.style.zIndex="1",w.style.display="none",h.style.display="flex",z.style.opacity="1",k.style.opacity="1"}),5e3)}));const D=document.getElementById("toggle-button"),Y=document.getElementById("toggle-button2"),$=document.querySelector(".page-container__left"),C=document.querySelector(".page-container__right"),M=document.querySelector(".icon__menu-button2"),O=document.querySelectorAll(".menu-button__item"),j=(document.querySelector("[data-open-faq]"),document.getElementById("slide__page-faq"),document.querySelector(".wrap__swiper-arrows")),N=document.querySelector(".wrap__swiper-pagination"),R=document.querySelectorAll(".page__section"),F=document.querySelector(".my__swiper"),G=document.querySelector(".wrap__page-container");document.querySelector(".page__header");G.addEventListener("wheel",(e=>{0!==e.deltaY&&(G.scrollTop+=10*e.deltaY,e.preventDefault())})),O.forEach((e=>{e.addEventListener("click",(()=>{D.style.display="none",Y.style.display="flex",Y.style.opacity="1",F.style.display="block",F.style.zIndex="62",setTimeout((()=>{R.forEach((e=>{e.style.display="block",e.style.zIndex="62",e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease"}),1150),setTimeout((()=>{j.style.zIndex="63",N.style.display="block",N.style.zIndex="63"}),3e3),setTimeout((()=>{Y.style.transform="translate(-50%, -350%)",$.style.transform="translateX(0%)",C.style.transform="translateX(0%)",$.style.transition="transform 4s ease",C.style.transition="transform 4s ease",Y.style.transition="transform 4s ease"}),1e3),setTimeout((()=>{j.style.zIndex="63",N.style.zIndex="63",R.forEach((e=>{e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease"}))}),1150)}))}))}));Y.addEventListener("click",(()=>{R.forEach((e=>{e.style.animation="closePage 4s linear forwards",e.style.transition="transform 5s ease"})),M.style.transform="rotate(-90deg)",setTimeout((()=>{N.style.display="none",N.style.zIndex="1"}),250),setTimeout((()=>{Y.style.transform="translate(-50%, 0%)",$.style.transform="translateX(-100%)",C.style.transform="translateX(100%)",$.style.transition="transform 4s ease",C.style.transition="transform 4s ease",Y.style.transition="transform 4s ease"}),300),setTimeout((()=>{R.forEach((e=>{e.style.display="none",e.style.transition="transform 5s ease"})),F.style.display="none",F.style.zIndex="1",j.style.zIndex="1",N.style.zIndex="1",Y.style.display="none",D.style.display="flex",buttonLeft.style.opacity="1",buttonRight.style.opacity="1"}),5e3)})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".prev"),t=document.querySelector(".next"),n=document.querySelectorAll(".page-container__left"),s=document.querySelectorAll(".page-container__right"),o=document.querySelectorAll(".page__section"),a=document.querySelectorAll(".fade"),r=document.querySelectorAll(".pagination__item");let l=0;function i(e){const t=document.querySelectorAll(".slide__page"),n=document.querySelectorAll(".pagination__item");e<1?e=t.length:e>t.length&&(e=1),t.forEach((e=>{e.style.display="none"})),t[e-1].style.display="block",l=e,n.forEach((e=>{e.classList.remove("active")})),n[e-1].classList.add("active")}e.addEventListener("click",(e=>{e.preventDefault(),n.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.transform="translateX(0%)"})),a.forEach((e=>{e.style.animation="none",e.style.transition="none"})),o.forEach((e=>{e.style.animation="none",e.style.transition="none"})),i(l-1)})),t.addEventListener("click",(e=>{e.preventDefault(),n.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.transform="translateX(0%)"})),a.forEach((e=>{e.style.animation="none",e.style.transition="none"})),o.forEach((e=>{e.style.animation="none"})),i(l+1)})),r.forEach(((e,t)=>{e.addEventListener("click",(t=>{const r=parseInt(e.getAttribute("data-index"));t.preventDefault(),n.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.transform="translateX(0%)"})),a.forEach((e=>{e.style.animation="none",e.style.transition="none"})),o.forEach((e=>{e.style.animation="none",e.style.transition="none"})),i(r)}))}))}));const H=document.getElementById("toggle-button"),J=document.getElementById("toggle-button2"),K=(document.querySelector(".logo-icon-black__desctop"),document.querySelector(".logo-icon-white__desctop"),document.querySelector(".logo__text-desctop"),document.querySelector(".page-container__left")),Q=document.querySelector(".page-container__right"),U=document.querySelector(".icon__menu-button2"),V=document.querySelectorAll(".menu-button__item"),W=(document.querySelector("[data-open-selling]"),document.getElementById("slide__page-selling"),document.querySelector(".wrap__swiper-arrows")),Z=document.querySelector(".wrap__swiper-pagination"),ee=document.querySelectorAll(".page__section"),te=document.querySelector(".wrap-swiper__slide"),ne=document.querySelector(".wrap__page-container");document.querySelector(".page__header");ne.addEventListener("wheel",(e=>{0!==e.deltaY&&(ne.scrollTop+=10*e.deltaY,e.preventDefault())})),V.forEach((e=>{e.addEventListener("click",(()=>{H.style.display="none",J.style.display="flex",te.style.display="block",te.style.zIndex="62",setTimeout((()=>{ee.forEach((e=>{e.style.display="block",e.style.zIndex="62",e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease"}),1150),setTimeout((()=>{W.style.zIndex="63",Z.style.display="block",Z.style.zIndex="63"}),3e3),setTimeout((()=>{J.style.transform="translate(-50%, -350%)",K.style.transform="translateX(0%)",Q.style.transform="translateX(0%)",K.style.transition="transform 4s ease",Q.style.transition="transform 4s ease",J.style.transition="transform 4s ease"}),300),setTimeout((()=>{W.style.zIndex="63",Z.style.zIndex="63",ee.forEach((e=>{e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease"}))}),1150),setTimeout((()=>{Z.style.display="block",Z.style.zIndex="63"}),3e3)}))}))}));J.addEventListener("click",(()=>{ee.forEach((e=>{e.style.animation="closePage 4s linear forwards",e.style.transition="transform 5s ease"})),U.style.transform="rotate(-90deg)",setTimeout((()=>{Z.style.display="none",Z.style.zIndex="1"}),250),setTimeout((()=>{J.style.transform="translate(-50%, 0%)",K.style.transform="translateX(-100%)",Q.style.transform="translateX(100%)",K.style.transition="transform 4s ease",Q.style.transition="transform 4s ease",J.style.transition="transform 4s ease"}),1e3),setTimeout((()=>{ee.forEach((e=>{e.style.display="none",e.style.transition="transform 5s ease"})),te.style.display="none",te.style.zIndex="1",W.style.zIndex="1",Z.style.zIndex="1",J.style.display="none",H.style.display="flex"}),5e3)}));
//# sourceMappingURL=index.178635bf.js.map
