const e=document.querySelector(".button__menu-open"),t=document.querySelector("[data-slide-left]"),s=document.querySelector("[data-slide-right]"),o=document.querySelector(".button__left2"),n=document.querySelector(".button__right2"),l=document.querySelector(".swiper__hero"),r=document.querySelector(".wrap__left-slide"),a=document.querySelector(".wrap__right-slide"),y=document.querySelector(".icon__menu-button"),i=document.querySelectorAll(".menu-button__item");let c=!1;e.addEventListener("click",(()=>{c?(i.forEach(((e,t)=>{e.style.transition="transform 5s ease",e.style.animationName=`menuButton${t+1}`,e.style.animation=`menuButton${t-1} 2s reverse forwards`,e.style.transform="translate(0,0)",o.style.opacity="0",n.style.opacity="0"})),setTimeout((()=>{l.style.display="block"}),500),setTimeout((()=>{y.style.transform="rotate(180deg)",t.style.transform="translateX(0%)",s.style.transform="translateX(0%)",t.style.transition="transform 2s ease",s.style.transition="transform 2s ease"}),1500),setTimeout((()=>{r.style.animationPlayState="running",a.style.animationPlayState="running"}),3e3)):(r.style.animationPlayState="paused",a.style.animationPlayState="paused",setTimeout((()=>{y.style.transform="rotate(90deg)",t.style.transform="translateX(-100%)",s.style.transform="translateX(100%)",t.style.transition="transform 2s ease",s.style.transition="transform 2s ease",o.style.opacity="1",n.style.opacity="1"}),1500),setTimeout((()=>{l.style.display="none"}),3500),setTimeout((()=>{i.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t+1} 2s forwards`}))}),3500)),c=!c}));const u=document.querySelector(".button__menu-open-mob"),d=document.querySelector(".swiper__hero"),m=document.querySelector(".wrap__left-slide"),p=document.querySelector(".wrap__right-slide"),f=document.querySelector(".button__left-mob"),_=document.querySelector(".button__right-mob"),g=document.querySelector(".wrap-container__left-slide"),S=document.querySelector(".wrap-container__right-slide"),q=document.querySelector(".icon__menu-button-mob"),b=document.querySelectorAll(".menu-button__item");let k=!1;u.addEventListener("click",(()=>{k?(setTimeout((()=>{b.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t-1} 2s reverse forwards`}))}),500),setTimeout((()=>{d.style.display="block",f.style.opacity="0",_.style.opacity="0"}),2e3),setTimeout((()=>{q.style.transform="rotate(180deg)",g.style.transform="translateX(0%)",S.style.transform="translateX(0%)",g.style.transition="transform 2s ease",S.style.transition="transform 2s ease"}),2300),setTimeout((()=>{m.style.animationPlayState="running",p.style.animationPlayState="running"}),5e3)):(m.style.animationPlayState="paused",p.style.animationPlayState="paused",setTimeout((()=>{q.style.transform="rotate(90deg)",f.style.opacity="1",_.style.opacity="1",g.style.transition="transform 2s ease",S.style.transition="transform 2s ease",g.style.transform="translatey(-100%)",S.style.transform="translatey(100%)"}),1200),setTimeout((()=>{d.style.display="none"}),3e3),setTimeout((()=>{b.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t+1} 2s forwards`}))}),2e3)),k=!k})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#contacts__link"),t=document.querySelector(".wrap__page-item-contact"),s=document.querySelector(".page-item-contact-mob"),o=document.querySelector(".wrap__about-us-link"),n=document.querySelector(".wrap__contacts-icon"),l=document.querySelector(".page__item-aboutus-mob"),r=document.querySelector(".js-open-about-us");let a=!0;t.style.transition="top 2.5s ease",r.disabled=!1,e.addEventListener("click",(()=>{n.style.display="block",t.style.top="90%",o.style.bottom="20px",l.style.zIndex="21",s.style.zIndex="22",r.disabled=!0,a=!1})),n.addEventListener("click",(()=>{a||(t.style.top="15px",n.style.display="none",s.style.zIndex="22",r.disabled=!1,a=!0)}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".js-open-about-us"),t=document.querySelector(".wrap__about-us-link"),s=document.querySelector(".wrap__icon-about-us"),o=document.querySelector(".page-item-contact-mob"),n=document.querySelector(".wrap__page-item-contact"),l=document.querySelector("#contacts__link"),r=document.querySelector(".page__item-aboutus-mob");let a=!0;t.style.transition="bottom 2.5s ease",l.disabled=!1,e.addEventListener("click",(()=>{t.style.bottom="92%",s.style.display="block",o.style.zIndex="21",r.style.zIndex="22",n.style.top="10px",l.disabled=!0,a=!1})),s.addEventListener("click",(()=>{s.style.display="none",t.style.bottom="20px",r.style.zIndex="22",l.disabled=!1,a=!0}))}));const w=document.getElementById("toggle-button"),E=document.getElementById("toggle-button2"),h=(document.querySelector(".logo-icon-black__desctop"),document.querySelector(".logo-icon-white__desctop"),document.querySelector(".logo__text-desctop"),document.querySelector(".page-container__left")),x=document.querySelector(".page-container__right"),I=document.querySelector(".icon__menu-button2"),T=document.querySelector(".button__left2"),v=document.querySelector(".button__right2"),z=document.querySelector("[data-open-selling]"),L=(document.getElementById("slide__page-selling"),document.querySelector(".wrap__swiper-arrows")),X=document.querySelector(".wrap__contacts-link"),A=document.querySelector(".contacts__link"),B=document.querySelector(".wrap__about-us-link"),P=document.querySelector(".js-open-about-us"),D=document.querySelector(".wrap__swiper-pagination"),Y=document.querySelectorAll(".slide__page"),j=document.getElementById("data-selling"),$=document.querySelector(".wrap-swiper__slide"),C=document.querySelector(".wrap__page-container");C.addEventListener("wheel",(e=>{0!==e.deltaY&&(C.scrollTop+=5*e.deltaY,e.preventDefault())})),z.addEventListener("click",(()=>{w.style.display="none",E.style.display="flex",E.style.opacity="1",$.style.display="block",$.style.zIndex="62",T.style.opacity="0",v.style.opacity="0",setTimeout((()=>{Y.forEach((e=>{e.style.display="block",e.style.zIndex="62",e.style.transition="transform 5s ease"}),100),setTimeout((()=>{E.style.transform="translate(-50%, -350%)",h.style.transform="translateX(0%)",x.style.transform="translateX(0%)",h.style.transition="transform 4s ease",x.style.transition="transform 4s ease",E.style.transition="transform 4s ease",C.style.zIndex="62"}),100),setTimeout((()=>{j.style.display="block",j.style.animation="openPage 4s linear forwards",j.style.zIndex="62",j.style.transition="transform 5s ease"}),4300),setTimeout((()=>{L.style.zIndex="63",D.style.zIndex="63",D.style.display="block",D.style.zIndex="63",X.style.background="#fff",A.style.color="#000",B.style.background="#fff",P.style.color="#000"}),4300),setTimeout((()=>{$.style.right="150px"}),4320)}))}));E.addEventListener("click",(()=>{setTimeout((()=>{j.style.animation="closePage 4s linear forwards",j.style.transition="transform 5s ease"}),200),I.style.transform="rotate(-90deg)",setTimeout((()=>{$.style.right="0px"}),1e3),setTimeout((()=>{j.style.display="none",E.style.transform="translate(-50%, 0%)",h.style.transform="translateX(-100%)",x.style.transform="translateX(100%)",h.style.transition="transform 4s ease",x.style.transition="transform 4s ease",E.style.transition="transform 4s ease"}),1e3),setTimeout((()=>{D.style.display="none",D.style.zIndex="1",X.style.background="#000",A.style.color="#fff",B.style.background="#000",P.style.color="#fff"}),1500),setTimeout((()=>{Y.forEach((e=>{e.style.display="none",e.style.transition="transform 5s ease"})),$.style.display="none",$.style.zIndex="1",L.style.zIndex="1",D.style.zIndex="1",E.style.display="none",w.style.display="flex",T.style.opacity="1",v.style.opacity="1"}),6e3)}));const M=document.getElementById("toggle-button"),O=document.getElementById("toggle-button2"),N=(document.querySelector(".logo-img__black"),document.querySelector(".logo-img__white"),document.querySelector(".logo__text-desctop"),document.querySelector(".page-container__left")),F=document.querySelector(".page-container__right"),G=document.querySelector(".icon__menu-button2"),H=document.querySelector("[data-open-faq]"),J=(document.getElementById("slide__page-faq"),document.querySelector(".wrap__swiper-arrows")),K=document.querySelector(".wrap__swiper-pagination"),Q=document.querySelectorAll(".slide__page"),R=document.getElementById("data-faq"),U=document.querySelector(".wrap-swiper__slide"),V=document.querySelector(".wrap__page-container"),W=document.querySelector(".button__left2"),Z=document.querySelector(".button__right2"),ee=document.querySelector(".wrap__contacts-link"),te=document.querySelector(".contacts__link"),se=document.querySelector(".wrap__about-us-link"),oe=document.querySelector(".js-open-about-us");V.addEventListener("wheel",(e=>{0!==e.deltaY&&(V.scrollTop+=5*e.deltaY,e.preventDefault())})),H.addEventListener("click",(()=>{M.style.display="none",O.style.display="flex",O.style.opacity="1",U.style.display="block",U.style.zIndex="62",W.style.opacity="0",Z.style.opacity="0",setTimeout((()=>{Q.forEach((e=>{e.style.display="block",e.style.zIndex="62",e.style.transition="transform 5s ease"}),100),setTimeout((()=>{O.style.transform="translate(-50%, -350%)",N.style.transform="translateX(0%)",F.style.transform="translateX(0%)",N.style.transition="transform 4s ease",F.style.transition="transform 4s ease",O.style.transition="transform 4s ease",V.style.zIndex="62"}),100),setTimeout((()=>{R.style.display="block",R.style.animation="openPage 4s linear forwards",R.style.zIndex="64",R.style.transition="transform 5s ease"}),4300),setTimeout((()=>{J.style.zIndex="63",K.style.zIndex="63",K.style.display="block",K.style.zIndex="63",ee.style.background="#fff",te.style.color="#000",se.style.background="#fff",oe.style.color="#000"}),4300),setTimeout((()=>{U.style.right="150px"}),4320)}))}));O.addEventListener("click",(()=>{setTimeout((()=>{R.style.animation="closePage 4s linear forwards",R.style.transition="transform 5s ease"}),200),G.style.transform="rotate(-90deg)",setTimeout((()=>{U.style.right="0px"}),1e3),setTimeout((()=>{R.style.display="none",O.style.transform="translate(-50%, 0%)",N.style.transform="translateX(-100%)",F.style.transform="translateX(100%)",N.style.transition="transform 4s ease",F.style.transition="transform 4s ease",O.style.transition="transform 4s ease"}),1e3),setTimeout((()=>{K.style.display="none",K.style.zIndex="1",ee.style.background="#000",te.style.color="#fff",se.style.background="#000",oe.style.color="#fff"}),1500),setTimeout((()=>{Q.forEach((e=>{e.style.display="none",e.style.transition="transform 5s ease"})),U.style.display="none",U.style.zIndex="1",J.style.zIndex="1",K.style.zIndex="1",O.style.display="none",M.style.display="flex",W.style.opacity="1",Z.style.opacity="1"}),6e3)})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".prev"),t=document.querySelector(".next"),s=document.querySelectorAll(".page-container__left"),o=document.querySelectorAll(".page-container__right"),n=document.querySelectorAll(".page__section"),l=document.querySelectorAll(".slide__page"),r=document.querySelectorAll(".pagination__item");let a=0;function y(e){const t=document.querySelectorAll(".slide__page"),s=document.querySelectorAll(".pagination__item");e<1?e=t.length:e>t.length&&(e=1),t.forEach((e=>{e.style.display="none"})),t[e-1].style.display="block",a=e,s.forEach((e=>{e.classList.remove("active")})),s[e-1].classList.add("active")}e.addEventListener("click",(e=>{e.preventDefault(),s.forEach((e=>{e.style.transform="translateX(0%)"})),o.forEach((e=>{e.style.transform="translateX(0%)"})),l.forEach((e=>{e.style.animation="none",e.style.transition="none"})),n.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),y(a-1)})),t.addEventListener("click",(e=>{e.preventDefault(),s.forEach((e=>{e.style.transform="translateX(0%)"})),o.forEach((e=>{e.style.transform="translateX(0%)"})),l.forEach((e=>{e.style.animation="none",e.style.transition="none"})),n.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),y(a+1)})),r.forEach(((e,t)=>{e.addEventListener("click",(t=>{const r=parseInt(e.getAttribute("data-index"));t.preventDefault(),s.forEach((e=>{e.style.transform="translateX(0%)"})),o.forEach((e=>{e.style.transform="translateX(0%)"})),l.forEach((e=>{e.style.animation="none",e.style.transition="none"})),n.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),y(r)}))}))}));document.querySelectorAll(".write-us__input").forEach((e=>{e.addEventListener("focus",(()=>{e.removeAttribute("placeholder")})),e.addEventListener("blur",(()=>{""===e.value&&e.setAttribute("placeholder",e.getAttribute("data-placeholder"))})),e.setAttribute("data-placeholder",e.getAttribute("placeholder"))}));const ne=document.getElementById("toggle-button"),le=document.getElementById("toggle-button2"),re=(document.querySelector(".logo-img__black"),document.querySelector(".logo-img__white"),document.querySelector(".logo__text-desctop"),document.querySelector(".page-container__left")),ae=document.querySelector(".page-container__right"),ye=document.querySelector(".icon__menu-button2"),ie=document.querySelector("[data-discover-open]"),ce=(document.getElementById("slide__page-discover"),document.querySelector(".wrap__swiper-arrows")),ue=document.querySelector(".wrap__swiper-pagination"),de=document.querySelectorAll(".slide__page"),me=document.getElementById("data-discover"),pe=document.querySelector(".wrap-swiper__slide"),fe=document.querySelector(".wrap__page-container"),_e=document.querySelector(".button__left2"),ge=document.querySelector(".button__right2"),Se=document.querySelector(".wrap__contacts-link"),qe=document.querySelector(".contacts__link"),be=document.querySelector(".wrap__about-us-link"),ke=document.querySelector(".js-open-about-us");fe.addEventListener("wheel",(e=>{0!==e.deltaY&&(fe.scrollTop+=5*e.deltaY,e.preventDefault())})),ie.addEventListener("click",(()=>{ne.style.display="none",le.style.display="flex",le.style.opacity="1",pe.style.display="block",pe.style.zIndex="62",_e.style.opacity="0",ge.style.opacity="0",setTimeout((()=>{de.forEach((e=>{e.style.display="block",e.style.zIndex="62",e.style.transition="transform 5s ease"}),100),setTimeout((()=>{le.style.transform="translate(-50%, -350%)",re.style.transform="translateX(0%)",ae.style.transform="translateX(0%)",re.style.transition="transform 4s ease",ae.style.transition="transform 4s ease",le.style.transition="transform 4s ease",fe.style.zIndex="62"}),100),setTimeout((()=>{me.style.display="block",me.style.animation="openPage 4s linear forwards",me.style.zIndex="64",me.style.transition="transform 5s ease"}),4300),setTimeout((()=>{ce.style.zIndex="63",ue.style.zIndex="63",ue.style.display="block",ue.style.zIndex="63",Se.style.background="#fff",qe.style.color="#000",be.style.background="#fff",ke.style.color="#000"}),4300),setTimeout((()=>{pe.style.right="150px"}),4320)}))}));le.addEventListener("click",(()=>{setTimeout((()=>{me.style.animation="closePage 4s linear forwards",me.style.transition="transform 5s ease"}),200),ye.style.transform="rotate(-90deg)",setTimeout((()=>{pe.style.right="0px"}),1e3),setTimeout((()=>{me.style.display="none",le.style.transform="translate(-50%, 0%)",re.style.transform="translateX(-100%)",ae.style.transform="translateX(100%)",re.style.transition="transform 4s ease",ae.style.transition="transform 4s ease",le.style.transition="transform 4s ease"}),1e3),setTimeout((()=>{ue.style.display="none",ue.style.zIndex="1",Se.style.background="#000",qe.style.color="#fff",be.style.background="#000",ke.style.color="#fff"}),1500),setTimeout((()=>{de.forEach((e=>{e.style.display="none",e.style.transition="transform 5s ease"})),pe.style.display="none",pe.style.zIndex="1",ce.style.zIndex="1",ue.style.zIndex="1",le.style.display="none",ne.style.display="flex",_e.style.opacity="1",ge.style.opacity="1"}),6e3)}));
//# sourceMappingURL=index.31202f77.js.map
