const e=document.querySelector(".button__menu-open"),t=document.querySelector("[data-slide-left]"),o=document.querySelector("[data-slide-right]"),n=document.querySelector(".button__left2"),a=document.querySelector(".button__right2"),s=document.querySelector(".swiper__hero"),l=document.querySelector(".wrap__left-slide"),r=document.querySelector(".wrap__right-slide"),c=document.querySelector(".icon__menu-button"),i=document.querySelectorAll(".menu-button__item");let y=!1;e.addEventListener("click",(()=>{y?(setTimeout((()=>{i.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t-1} 2s reverse forwards`}))}),500),setTimeout((()=>{s.style.display="block",n.style.opacity="0",a.style.opacity="0"}),2e3),setTimeout((()=>{t.style.transition="transform 2s ease",o.style.transition="transform 2s ease",c.style.transform="rotate(180deg)",function(){let e=window.matchMedia("(min-width: 1200px)");function n(){e.matches?(t.style.transform="translateY(0%)",o.style.transform="translateY(0%)"):(t.style.transform="translateX(0%)",o.style.transform="translateX(0%)")}n(),e.addListener(n)}()}),2300),setTimeout((()=>{l.style.animationPlayState="running",r.style.animationPlayState="running"}),5e3),y=!y):(l.style.animationPlayState="paused",r.style.animationPlayState="paused",setTimeout((()=>{c.style.transform="rotate(90deg)",n.style.opacity="1",a.style.opacity="1",t.style.transition="transform 2s ease",o.style.transition="transform 2s ease",function(){let e=window.matchMedia("(max-width: 1200px)");function n(){e.matches?(t.style.transform="translateY(-100%)",o.style.transform="translateY(100%)"):(t.style.transform="translateX(-100%)",o.style.transform="translateX(100%)")}n(),e.addListener(n)}()}),1e3),setTimeout((()=>{s.style.display="none"}),3100),setTimeout((()=>{i.forEach(((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t+1} 2s forwards`}))}),3e3))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#contacts__link"),t=document.querySelector(".wrap__page-item-contact"),o=document.querySelector(".page-item-contact-mob"),n=document.querySelector(".wrap__about-us-link"),a=document.querySelector(".wrap__contacts-icon"),s=document.querySelector(".page__item-aboutus-mob"),l=document.querySelector(".js-open-about-us");let r=!0;t.style.transition="top 2.5s ease",l.disabled=!1,e.addEventListener("click",(()=>{a.style.display="block",t.style.top="90%",n.style.bottom="20px",s.style.zIndex="21",o.style.zIndex="22",l.disabled=!0,r=!1})),a.addEventListener("click",(()=>{r||(t.style.top="15px",a.style.display="none",o.style.zIndex="22",l.disabled=!1,r=!0)}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".js-open-about-us"),t=document.querySelector(".wrap__about-us-link"),o=document.querySelector(".wrap__icon-about-us"),n=document.querySelector(".page-item-contact-mob"),a=document.querySelector(".wrap__page-item-contact"),s=document.querySelector("#contacts__link"),l=document.querySelector(".page__item-aboutus-mob");let r=!0;t.style.transition="bottom 2.5s ease",s.disabled=!1,e.addEventListener("click",(()=>{t.style.bottom="92%",o.style.display="block",n.style.zIndex="21",l.style.zIndex="22",a.style.top="10px",s.disabled=!0,r=!1})),o.addEventListener("click",(()=>{o.style.display="none",t.style.bottom="20px",l.style.zIndex="22",s.disabled=!1,r=!0}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("toggle-button"),t=document.getElementById("toggle-button2"),o=document.querySelector(".icon__phone-black"),n=document.querySelector(".logo-img__white"),a=(document.querySelector(".logo__text-desktop"),document.querySelector(".page-container__left")),s=document.querySelector(".page-container__right"),l=document.querySelector(".icon__menu-button2"),r=document.querySelector(".button__left2"),c=document.querySelector(".button__right2"),i=document.querySelectorAll(".wrap-menu__button"),y=(document.querySelector("[data-open-selling]"),document.querySelector(".wrap__swiper-arrows")),d=document.querySelector(".wrap__page-item-contact"),u=document.querySelector(".contacts__link"),m=document.querySelector(".wrap__about-us-link"),p=document.querySelector(".js-open-about-us"),f=document.querySelector(".wrap__swiper-pagination"),_=document.querySelectorAll(".slide__page"),q=document.querySelectorAll(".page__section"),S=document.getElementById("data-selling"),g=document.querySelector(".wrap-swiper__slide"),b=document.querySelector(".wrap__page-container"),h=document.querySelectorAll(".pagination__item"),E=document.querySelector("[data-open-selling]"),w=document.querySelector("[data-open-faq]"),v=document.querySelector("[data-discover-open]");document.querySelector("[data-faq]"),document.querySelector("[data-discover]");b.addEventListener("wheel",(e=>{0!==e.deltaY&&(b.scrollTop+=5*e.deltaY,e.preventDefault())})),i.forEach((l=>{l.addEventListener("click",(()=>{e.style.display="none",t.style.display="flex",t.style.opacity="1",g.style.display="block",g.style.zIndex="62",r.style.opacity="0",c.style.opacity="0",b.style.zIndex="62",setTimeout((()=>{!function(){let e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(g.style.right="0px",g.style.bottom="150px"):(g.style.right="150px",g.style.bottom="0px")}t(),e.addListener(t)}()}),100),setTimeout((()=>{a.style.transition="transform 6s ease",s.style.transition="transform 6s ease",a.style.transform="translateX(0%)",s.style.transform="translateX(0%)",t.style.transition="transform 4s ease",function(){let e=window.matchMedia("(max-width: 1200px)");function n(){e.matches?(o.style.display="block",t.style.transform="translate(-50%, -280%)"):t.style.transform="translate(-50%, -350%)"}n(),e.addListener(n)}()}),150),setTimeout((()=>{d.style.background="#fff",m.style.background="#fff",u.style.color="#000",u.style.zIndex="63",p.style.color="#000",p.style.zIndex="63"}),1e3),setTimeout((()=>{if(l===E){let e=document.querySelector("[data-selling]");h.forEach((e=>{e.classList.remove("active")})),q.forEach((e=>{e.style.opacity="0",e===document.querySelector("[data-selling-page]")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",h[0].classList.add("active")}else if(l===w){let e=document.querySelector("[data-faq]");h.forEach((e=>{e.classList.remove("active")})),q.forEach((e=>{e.style.opacity="0",e===document.querySelector("[data-faq-page]")&&(e.style.animation="openPage 4s linear forwards",e.style.opacity="1",e.style.display="block",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",h[1].classList.add("active")}else if(l===v){let e=document.querySelector("[data-discover]");q.forEach((e=>{e.style.opacity="0",e===document.querySelector("[data-discover-page]")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 4s linear forwards",e.style.transition="transform 5s ease")})),e.style.display="flex",e.style.zIndex="62",h[2].classList.add("active")}}),3500),setTimeout((()=>{y.style.display="block",n.style.display="none",g.getBoundingClientRect().bottom<=window.innerHeight?f.style.display="block":f.style.display="none"}),3900)}))}));t.addEventListener("click",(()=>{setTimeout((()=>{q.forEach((e=>{e.style.animation="closePage 4s linear forwards",e.style.transition="transform 4s ease",e.style.opacity="0"}))}),200),l.style.transform="rotate(-90deg)",setTimeout((()=>{g.style.right="0px"}),1e3),setTimeout((()=>{a.style.transition="transform 4s ease",s.style.transition="transform 4s ease",t.style.transition="transform 4s ease",t.style.transform="translate(-50%, 0%)",a.style.transform="translateX(-100%)",s.style.transform="translateX(100%)"}),1500),setTimeout((()=>{f.style.display="none",o.style.display="none",h.forEach((e=>{e.classList.remove("active")})),n.style.display="block",f.style.zIndex="1",d.style.background="#000",u.style.color="#fff",m.style.background="#000",p.style.color="#fff"}),5500),setTimeout((()=>{_.forEach((e=>{e.style.display="none",e.style.transition="transform 5s ease"})),S.style.display="block",g.style.display="none",g.style.zIndex="1",y.style.display="none",t.style.display="none",e.style.display="flex",r.style.opacity="1",c.style.opacity="1",o.style.zIndex="52"}),6100)}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".prev"),t=document.querySelector(".next"),o=(document.querySelector("[data-open-selling]"),document.querySelector("[data-open-faq]"),document.querySelector("[data-discover-open]"),document.querySelectorAll(".page-container__left")),n=document.querySelectorAll(".page-container__right"),a=document.querySelectorAll(".page__section"),s=document.querySelectorAll(".slide__page"),l=document.querySelectorAll(".pagination__item");document.querySelectorAll(".wrap-menu__button");let r=0;function c(e){const t=document.querySelectorAll(".slide__page"),o=document.querySelectorAll(".pagination__item");e<1?e=t.length:e>t.length&&(e=1),t.forEach((e=>{e.style.display="none"})),t[e-1].style.display="block",r=e,o.forEach((e=>{e.classList.remove("active")})),o[e-1].classList.add("active")}e.addEventListener("click",(e=>{e.preventDefault(),o.forEach((e=>{e.style.transform="translateX(0%)"})),n.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.animation="none",e.style.transition="none"})),a.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),c(r-1)})),t.addEventListener("click",(e=>{e.preventDefault(),o.forEach((e=>{e.style.transform="translateX(0%)"})),n.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.animation="none",e.style.transition="none"})),a.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),c(r+1)})),l.forEach(((e,t)=>{e.addEventListener("click",(t=>{const l=parseInt(e.getAttribute("data-index"));t.preventDefault(),o.forEach((e=>{e.style.transform="translateX(0%)"})),n.forEach((e=>{e.style.transform="translateX(0%)"})),s.forEach((e=>{e.style.animation="none",e.style.transition="none"})),a.forEach((e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"})),c(l)}))}))}));document.querySelectorAll(".write-us__input").forEach((e=>{e.addEventListener("focus",(()=>{e.removeAttribute("placeholder")})),e.addEventListener("blur",(()=>{""===e.value&&e.setAttribute("placeholder",e.getAttribute("data-placeholder"))})),e.setAttribute("data-placeholder",e.getAttribute("placeholder"))}));
//# sourceMappingURL=index.54733fd3.js.map
