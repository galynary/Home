const e=document.getElementById("toggle-button"),t=document.querySelector(".button__left2"),o=document.querySelector(".button__right2"),a=document.querySelector("[data-slide-left]"),n=document.querySelector("[data-slide-right]"),s=document.querySelector(".swiper__hero"),l=document.querySelector(".wrap__left-slide"),r=document.querySelector(".wrap__right-slide"),i=document.querySelector(".icon__menu-button"),c=document.querySelectorAll(".menu-button__item");let y=!1;e.addEventListener("click",(()=>{y?(setTimeout((()=>{c.forEach(((e,t)=>{e.style.transition="transform 5s ease",e.style.animationName=`menuButton${t+1}`,e.style.animation=`menuButton${t-1} 2s reverse forwards`,e.style.transform="translate(0,0)"}))}),500),setTimeout((()=>{s.style.display="block",t.style.opacity="0",o.style.opacity="0"}),2e3),setTimeout((()=>{a.style.transition="transform 2s ease",n.style.transition="transform 2s ease",i.style.transform="rotate(180deg)",function(){let e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(a.style.transform="translateY(0%)",n.style.transform="translateY(0%)"):(a.style.transform="translateX(0%)",n.style.transform="translateX(0%)")}t(),e.addListener(t)}()}),2300),setTimeout((()=>{l.style.animationPlayState="running",r.style.animationPlayState="running"}),5e3)):(l.style.animationPlayState="paused",r.style.animationPlayState="paused",setTimeout((()=>{i.style.transform="rotate(90deg)",t.style.opacity="1",o.style.opacity="1",i.style.transition="transform 1s ease",a.style.transition="transform 2s ease",n.style.transition="transform 2s ease",function(){let e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(a.style.transform="translateY(-100%)",n.style.transform="translateY(100%)"):(a.style.transform="translateX(-100%)",n.style.transform="translateX(100%)")}t(),e.addListener(t)}()}),1e3),setTimeout((()=>{s.style.display="none"}),3100),setTimeout((()=>{c.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t+1} 2s forwards`}))}),2e3)),y=!y})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#contacts__link"),t=document.querySelector(".wrap__page-item-contact"),o=document.querySelector(".page-item-contact-mob"),a=document.querySelector(".wrap__about-us-link"),n=document.querySelector(".wrap__contacts-icon"),s=document.querySelector(".page__item-aboutus-mob"),l=document.querySelector(".js-open-about-us");let r=!0;t.style.transition="top 2.5s ease",l.disabled=!1,e.addEventListener("click",(()=>{n.style.display="block",t.style.top="90%",a.style.bottom="20px",s.style.zIndex="21",o.style.zIndex="22",l.disabled=!0,r=!1})),n.addEventListener("click",(()=>{r||(t.style.top="15px",n.style.display="none",o.style.zIndex="22",l.disabled=!1,r=!0)}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".js-open-about-us"),t=document.querySelector(".wrap__about-us-link"),o=document.querySelector(".wrap__icon-about-us"),a=document.querySelector(".page-item-contact-mob"),n=document.querySelector(".wrap__page-item-contact"),s=document.querySelector("#contacts__link"),l=document.querySelector(".page__item-aboutus-mob");let r=!0;t.style.transition="bottom 2.5s ease",s.disabled=!1,e.addEventListener("click",(()=>{t.style.bottom="92%",o.style.display="block",a.style.zIndex="21",l.style.zIndex="22",n.style.top="10px",s.disabled=!0,r=!1})),o.addEventListener("click",(()=>{o.style.display="none",t.style.bottom="20px",l.style.zIndex="22",s.disabled=!1,r=!0}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("toggle-button"),t=document.getElementById("toggle-button2"),o=document.querySelector(".icon__phone-black"),a=document.querySelector(".logo-img__white"),n=(document.querySelector(".logo__text-desktop"),document.querySelector(".page-container__left")),s=document.querySelector(".page-container__right"),l=document.querySelector(".icon__menu-button2"),r=document.querySelector(".button__left2"),i=document.querySelector(".button__right2"),c=document.querySelectorAll(".wrap-menu__button"),y=(document.querySelector("[data-open-selling]"),document.querySelector(".wrap__swiper-arrows")),d=document.querySelector(".wrap__page-item-contact"),u=document.querySelector(".contacts__link"),m=document.querySelector(".wrap__about-us-link"),p=document.querySelector(".js-open-about-us"),f=document.querySelector(".wrap__swiper-pagination"),_=document.querySelectorAll(".slide__page"),g=document.querySelectorAll(".page__section"),q=document.getElementById("data-selling"),S=document.querySelector(".wrap-swiper__slide"),b=document.querySelector(".wrap__page-container"),h=document.querySelectorAll(".pagination__item"),E=document.querySelector("[data-open-selling]"),v=document.querySelector("[data-open-faq]"),w=document.querySelector("[data-discover-open]"),x=document.querySelector("[data-open-consulting]"),k=document.querySelector("[data-open-gallery]");b.addEventListener("wheel",(e=>{0!==e.deltaY&&(b.scrollTop+=5*e.deltaY,e.preventDefault())})),c.forEach((l=>{l.addEventListener("click",(()=>{e.style.display="none",t.style.display="flex",t.style.opacity="1",S.style.display="block",S.style.zIndex="62",r.style.opacity="0",i.style.opacity="0",b.style.zIndex="62",setTimeout((()=>{n.style.transition="transform 5s ease",s.style.transition="transform 5s ease",n.style.transform="translateX(0%)",s.style.transform="translateX(0%)",t.style.transition="transform 4s ease",function(){let e=window.matchMedia("(max-width: 1200px)");function a(){e.matches?(o.style.display="block",t.style.transform="translate(-50%, -280%)"):t.style.transform="translate(-50%, -300%)"}a(),e.addListener(a)}()}),150),setTimeout((()=>{d.style.background="#fff",m.style.background="#fff",u.style.color="#000",u.style.zIndex="63",p.style.color="#000",p.style.zIndex="63"}),2e3),setTimeout((()=>{if(l===E){let e=document.querySelector("[data-selling]");h.forEach((e=>{e.classList.remove("active")})),g.forEach((e=>{e.style.opacity="0",e===document.querySelector("[data-selling-page]")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",h[0].classList.add("active")}else if(l===v){let e=document.querySelector("[data-faq]");h.forEach((e=>{e.classList.remove("active")})),g.forEach((e=>{e.style.opacity="0",e===document.querySelector("[data-faq-page]")&&(e.style.animation="openPage 4s linear forwards",e.style.opacity="1",e.style.display="block",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",h[1].classList.add("active")}else if(l===w){let e=document.querySelector("[data-discover]");g.forEach((e=>{e.style.opacity="0",e===document.querySelector("[data-discover-page]")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",h[2].classList.add("active")}else if(l===x){let e=document.querySelector("[data-description-house]");g.forEach((e=>{e.style.opacity="0",e===document.querySelector("[data-discover-page]")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",h[3].classList.add("active")}else if(l===k){let e=document.querySelector("[data-gallery]");g.forEach((e=>{e.style.opacity="0",e===document.querySelector("[data-gallery-page]")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",h[4].classList.add("active")}}),2100),setTimeout((()=>{!function(){let e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(S.style.right="0px",S.style.bottom="150px"):(S.style.right="150px",S.style.bottom="0px")}t(),e.addListener(t)}()}),2500),setTimeout((()=>{y.style.display="block",a.style.display="none",S.getBoundingClientRect().bottom<=window.innerHeight?f.style.display="block":f.style.display="none"}),3e3)}))}));t.addEventListener("click",(()=>{g.forEach((e=>{e.style.animation="closePage 5s linear forwards",e.style.transition="transform 5s ease",e.style.opacity="0"})),l.style.transform="rotate(-90deg)",setTimeout((()=>{S.style.right="0px"}),3200),setTimeout((()=>{n.style.transition="transform 5s ease",s.style.transition="transform 5s ease",t.style.transition="transform 4s ease",t.style.transform="translate(-50%, 0%)",n.style.transform="translateX(-100%)",s.style.transform="translateX(100%)"}),3300),setTimeout((()=>{f.style.display="none",o.style.display="none",h.forEach((e=>{e.classList.remove("active")})),a.style.display="block",y.style.display="none",d.style.background="#000",u.style.color="#fff",m.style.background="#000",p.style.color="#fff"}),3300),setTimeout((()=>{_.forEach((e=>{e.style.display="none",e.style.transition="transform 5s ease"})),q.style.display="block",S.style.display="none",S.style.zIndex="1",t.style.display="none",e.style.display="flex",r.style.opacity="1",i.style.opacity="1",o.style.zIndex="52"}),8e3)}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".prev"),t=document.querySelector(".next"),o=(document.querySelector("[data-open-selling]"),document.querySelector("[data-open-faq]"),document.querySelector("[data-discover-open]"),document.querySelectorAll(".page-container__left")),a=document.querySelectorAll(".page-container__right"),n=document.querySelectorAll(".page__section"),s=document.querySelectorAll(".slide__page"),l=document.querySelectorAll(".pagination__item");document.querySelectorAll(".wrap-menu__button");let r=0;function i(e){const t=document.querySelectorAll(".slide__page"),o=document.querySelectorAll(".pagination__item");e<1?e=t.length:e>t.length&&(e=1),t.forEach((e=>{e.style.display="none"})),t[e-1].style.display="block",r=e,o.forEach((e=>{e.classList.remove("active")})),o[e-1].classList.add("active")}e.addEventListener("click",(e=>{e.preventDefault(),o.forEach((e=>{e.style.transform="translateX(0%)"})),a.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.animation="none",e.style.transition="none"})),n.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(r-1)})),t.addEventListener("click",(e=>{e.preventDefault(),o.forEach((e=>{e.style.transform="translateX(0%)"})),a.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.animation="none",e.style.transition="none"})),n.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(r+1)})),l.forEach(((e,t)=>{e.addEventListener("click",(t=>{const l=parseInt(e.getAttribute("data-index"));t.preventDefault(),o.forEach((e=>{e.style.transform="translateX(0%)"})),a.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.animation="none",e.style.transition="none"})),n.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),i(l)}))}))}));document.querySelectorAll(".write-us__input").forEach((e=>{e.addEventListener("focus",(()=>{e.removeAttribute("placeholder")})),e.addEventListener("blur",(()=>{""===e.value&&e.setAttribute("placeholder",e.getAttribute("data-placeholder"))})),e.setAttribute("data-placeholder",e.getAttribute("placeholder"))}));const d=document.querySelectorAll(".gallery__img"),u=document.querySelector(".arrow-up"),m=document.querySelector(".arrow-down");let p=0;function f(e){d.forEach((e=>{e.style.display="none"})),d[e].style.display="block"}function _(){0===p?u.classList.add("active"):u.classList.remove("active"),p===d.length-1?m.classList.add("active"):m.classList.remove("active")}u.addEventListener("click",(()=>{p>0&&(p--,f(p),_())})),m.addEventListener("click",(()=>{p<d.length-1&&(p++,f(p),_())})),f(p),_();
//# sourceMappingURL=index.25336707.js.map
