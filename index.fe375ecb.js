const e=document.getElementById("toggle-button"),t=document.querySelector(".button__left2"),o=document.querySelector(".button__right2"),n=document.querySelector("[data-slide-left]"),a=document.querySelector("[data-slide-right]"),l=document.querySelector(".swiper__hero"),s=document.querySelector(".wrap__left-slide"),r=document.querySelector(".wrap__right-slide"),i=document.querySelector(".icon__menu-button"),c=document.querySelectorAll(".menu-button__item");let y=!1;e.addEventListener("click",()=>{y?(setTimeout(()=>{c.forEach((e,t)=>{e.style.transition="transform 5s ease",e.style.animationName=`menuButton${t+1}`,e.style.animation=`menuButton${t-1} 2s reverse forwards`,e.style.transform="translate(0,0)"})},500),setTimeout(()=>{l.style.display="block",t.style.opacity="0",o.style.opacity="0"},2e3),setTimeout(()=>{n.style.transition="transform 2s ease",a.style.transition="transform 2s ease",i.style.transform="rotate(180deg)",function(){let e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(n.style.transform="translateY(0%)",a.style.transform="translateY(0%)"):(n.style.transform="translateX(0%)",a.style.transform="translateX(0%)")}t(),e.addListener(t)}()},2300),setTimeout(()=>{s.style.animationPlayState="running",r.style.animationPlayState="running"},5e3)):(s.style.animationPlayState="paused",r.style.animationPlayState="paused",setTimeout(()=>{i.style.transform="rotate(90deg)",t.style.opacity="1",o.style.opacity="1",i.style.transition="transform 1s ease",n.style.transition="transform 2s ease",a.style.transition="transform 2s ease",function(){let e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(n.style.transform="translateY(-100%)",a.style.transform="translateY(100%)"):(n.style.transform="translateX(-100%)",a.style.transform="translateX(100%)")}t(),e.addListener(t)}()},1e3),setTimeout(()=>{l.style.display="none"},3100),setTimeout(()=>{c.forEach((e,t)=>{e.style.transition="transform 0.5s ease",e.style.animation=`menuButton${t+1} 2s forwards`})},2e3)),y=!y}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("#contacts__link"),t=document.querySelector(".wrap__page-item-contact"),o=document.querySelector(".page-item-contact-mob"),n=document.querySelector(".wrap__about-us-link"),a=document.querySelector(".wrap__contacts-icon"),l=document.querySelector(".page__item-aboutus-mob"),s=document.querySelector(".js-open-about-us"),r=!0;t.style.transition="top 2s ease",e.addEventListener("click",()=>{a.style.display="block",t.style.top="78vh",n.style.bottom="70px",l.style.zIndex="21",o.style.zIndex="22",s.removeEventListener("click",()=>{}),r=!1}),a.addEventListener("click",()=>{r||(t.style.top="0px",a.style.display="none",o.style.zIndex="22",r=!0)})}),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".js-open-about-us"),t=document.querySelector(".wrap__about-us-link"),o=document.querySelector(".wrap__icon-about-us"),n=document.querySelector(".page-item-contact-mob"),a=document.querySelector(".wrap__page-item-contact"),l=document.querySelector("#contacts__link"),s=document.querySelector(".page__item-aboutus-mob");document.querySelector(".page__about-us").addEventListener("wheel",e=>{e.preventDefault(),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}),t.style.transition="bottom 2s ease",e.addEventListener("click",()=>{o.style.display="block",n.style.zIndex="21",s.style.zIndex="22",a.style.top="10px",l.removeEventListener("click",()=>{}),function(){let e=window.matchMedia("(max-width: 768px)");function o(){e.matches?t.style.bottom="60%":t.style.bottom="85vh"}o(),e.addListener(o)}()}),o.addEventListener("click",()=>{t.style.bottom="60px",o.style.display="none",s.style.zIndex="22"})}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("toggle-button"),t=document.getElementById("toggle-button2"),o=document.querySelector(".icon__phone-black"),n=document.querySelector(".logo-img__white");document.querySelector(".logo__text-desktop");let a=document.querySelector(".page-container__left"),l=document.querySelector(".page-container__right"),s=document.querySelector(".icon__menu-button2"),r=document.querySelector(".button__left2"),i=document.querySelector(".button__right2"),c=document.querySelectorAll(".wrap-menu__button");document.querySelector("[data-open-selling]");let y=document.querySelector(".wrap__swiper-arrows"),d=document.querySelector(".wrap__page-item-contact"),u=document.querySelector(".contacts__link"),m=document.querySelector(".wrap__about-us-link"),p=document.querySelector(".js-open-about-us"),f=document.querySelector(".wrap__swiper-pagination"),g=document.querySelectorAll(".slide__page"),_=document.querySelectorAll(".page__section"),S=document.getElementById("data-selling"),q=document.querySelector(".wrap-swiper__slide"),h=document.querySelector(".wrap__page-container"),b=document.querySelectorAll(".pagination__item"),v=document.querySelector("[data-open-selling]"),E=document.querySelector("[data-open-faq]"),w=document.querySelector("[data-discover-open]"),L=document.querySelector("[data-open-consulting]"),k=document.querySelector("[data-open-gallery]");h.addEventListener("wheel",e=>{0!==e.deltaY&&(h.scrollTop+=5*e.deltaY,e.preventDefault())}),c.forEach(o=>{o.addEventListener("click",()=>{e.style.display="none",t.style.display="flex",t.style.opacity="1",q.style.display="block",q.style.zIndex="62",r.style.opacity="0",i.style.opacity="0",h.style.zIndex="62",t.style.transition="transform 5s ease",t.style.top="2%",setTimeout(()=>{s.style.transform="rotate(180deg)",s.style.transition="transform 1s ease",a.style.transition="transform 5s ease",l.style.transition="transform 5s ease",a.style.transform="translateX(0%)",l.style.transform="translateX(0%)"},1050),setTimeout(()=>{d.style.background="#fff",m.style.background="#fff",u.style.color="#000",u.style.zIndex="63",p.style.color="#000",p.style.zIndex="63"},3e3),setTimeout(()=>{if(o===v){let e=document.querySelector("[data-selling]");b.forEach(e=>{e.classList.remove("active")}),_.forEach(e=>{e.style.opacity="0",e===document.querySelector(".data-selling-page")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")}),e.style.display="flex",e.style.zIndex="62",b[0].classList.add("active")}else if(o===E){let e=document.querySelector("[data-faq]");b.forEach(e=>{e.classList.remove("active")}),_.forEach(e=>{e.style.opacity="0",e===document.querySelector(".data-faq-page")&&(e.style.animation="openPage 5s linear forwards",e.style.opacity="1",e.style.display="block",e.style.transition="transform 5s ease")}),e.style.display="flex",e.style.zIndex="62",b[1].classList.add("active")}else if(o===w){let e=document.querySelector("[data-discover]");_.forEach(e=>{e.style.opacity="0",e===document.querySelector(".data-discover-page")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")}),e.style.display="flex",e.style.zIndex="62",b[2].classList.add("active")}else if(o===L){let e=document.querySelector("[data-description-house]");_.forEach(e=>{e.style.opacity="0",e===document.querySelector(".data-description-house-page")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")}),e.style.display="flex",e.style.zIndex="62",b[3].classList.add("active")}else if(o===k){let e=document.querySelector("[data-gallery]");_.forEach(e=>{e.style.opacity="0",e===document.querySelector("[data-gallery-page]")&&(e.style.opacity="1",e.style.display="block",e.style.animation="openPage 5s linear forwards",e.style.transition="transform 5s ease")}),e.style.display="flex",e.style.zIndex="62",b[4].classList.add("active")}},2200),setTimeout(()=>{!function(){let e=window.matchMedia("(max-width: 1200px)");function t(){e.matches?(q.style.right="0px",q.style.bottom="150px"):(q.style.right="150px",q.style.bottom="0px")}t(),e.addListener(t)}()},3e3),setTimeout(()=>{y.style.display="block",n.style.display="none",q.getBoundingClientRect().bottom<=window.innerHeight?f.style.display="block":f.style.display="none"},3e3)})}),t.addEventListener("click",()=>{_.forEach(e=>{e.style.animation="closePage 5s linear forwards",e.style.transition="transform 5s ease",e.style.opacity="0"}),setTimeout(()=>{q.style.right="0px"},3e3),setTimeout(()=>{s.style.transform="rotate(90deg)",s.style.transition="transform 1s ease",a.style.transition="transform 4s ease",l.style.transition="transform 4s ease",t.style.transition="transform 4s ease",a.style.transform="translateX(-100%)",l.style.transform="translateX(100%)"},3e3),setTimeout(()=>{f.style.display="none",o.style.display="none",b.forEach(e=>{e.classList.remove("active")}),n.style.display="block",y.style.display="none",d.style.background="#000",u.style.color="#fff",m.style.background="#000",p.style.color="#fff"},4e3),setTimeout(()=>{t.style.top="50%",t.style.transition="transform 5s ease"},4500),setTimeout(()=>{g.forEach(e=>{e.style.display="none",e.style.transition="transform 5s ease"}),S.style.display="block",q.style.display="none",q.style.zIndex="1",t.style.display="none",e.style.display="flex",r.style.opacity="1",i.style.opacity="1",o.style.zIndex="52"},7e3)})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".prev"),t=document.querySelector(".next");document.querySelector("[data-open-selling]"),document.querySelector("[data-open-faq]"),document.querySelector("[data-discover-open]");let o=document.querySelectorAll(".page-container__left"),n=document.querySelectorAll(".page-container__right"),a=document.querySelectorAll(".page__section"),l=document.querySelectorAll(".slide__page"),s=document.querySelectorAll(".pagination__item");document.querySelectorAll(".wrap-menu__button");let r=0;function i(e){let t=document.querySelectorAll(".slide__page"),o=document.querySelectorAll(".pagination__item");e<1?e=t.length:e>t.length&&(e=1),t.forEach(e=>{e.style.display="none"}),t[e-1].style.display="block",r=e,o.forEach(e=>{e.classList.remove("active")}),o[e-1].classList.add("active")}e.addEventListener("click",e=>{e.preventDefault(),o.forEach(e=>{e.style.transform="translateX(0%)"}),n.forEach(e=>{e.style.transform="translateX(0%)"}),l.forEach(e=>{e.style.animation="none",e.style.transition="none"}),a.forEach(e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"}),i(r-1)}),t.addEventListener("click",e=>{e.preventDefault(),o.forEach(e=>{e.style.transform="translateX(0%)"}),n.forEach(e=>{e.style.transform="translateX(0%)"}),l.forEach(e=>{e.style.animation="none",e.style.transition="none"}),a.forEach(e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"}),i(r+1)}),s.forEach((e,t)=>{e.addEventListener("click",t=>{let s=parseInt(e.getAttribute("data-index"));t.preventDefault(),o.forEach(e=>{e.style.transform="translateX(0%)"}),n.forEach(e=>{e.style.transform="translateX(0%)"}),l.forEach(e=>{e.style.animation="none",e.style.transition="none"}),a.forEach(e=>{e.style.animation="none",e.style.transition="none",e.style.opacity="1",e.style.display="block"}),i(s)})})}),document.querySelectorAll(".write-us__input").forEach(e=>{e.addEventListener("focus",()=>{e.removeAttribute("placeholder")}),e.addEventListener("blur",()=>{""===e.value&&e.setAttribute("placeholder",e.getAttribute("data-placeholder"))}),e.setAttribute("data-placeholder",e.getAttribute("placeholder"))});const d=document.querySelectorAll(".gallery__img"),u=document.querySelector(".arrow-up"),m=document.querySelector(".arrow-down");let p=0;function f(e){d.forEach(e=>{e.style.display="none"}),d[e].style.display="block"}function g(){0===p?u.classList.add("active"):u.classList.remove("active"),p===d.length-1?m.classList.add("active"):m.classList.remove("active")}u.addEventListener("click",()=>{p>0&&(f(--p),g())}),m.addEventListener("click",()=>{p<d.length-1&&(f(++p),g())}),f(p),g(),(()=>{let e={openGalleryButton:document.getElementById("openGalleryButton"),closeGallery:document.getElementById("closeGallery"),gallerySlider:document.getElementById("gallery")};function t(){e.gallerySlider.classList.toggle("is-hidden")}e.openGalleryButton.addEventListener("click",t),e.closeGallery.addEventListener("click",t)})();
//# sourceMappingURL=index.fe375ecb.js.map
