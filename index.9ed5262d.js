const t=document.getElementById("toggle-button"),e=document.querySelector("[data-slide-left]"),n=document.querySelector("[data-slide-right]"),a=document.querySelector(".swiper__hero"),r=document.querySelector(".wrap__left-slide"),o=document.querySelector(".wrap__right-slide"),l=document.querySelector(".icon__menu-button"),i=document.querySelectorAll(".menu-button__item");let m=!1;t.addEventListener("click",(()=>{m?(i.forEach(((t,e)=>{t.style.transition="transform 5s ease",t.style.animationName=`menuButton${e+1}`,t.style.animation=`menuButton${e+1} 2s reverse forwards`,t.style.transform="translate(0,0)"})),setTimeout((()=>{a.style.display="block"}),500),setTimeout((()=>{l.style.transform="rotate(180deg)",e.style.transform="translateX(0%)",n.style.transform="translateX(0%)"}),700),setTimeout((()=>{r.style.animationPlayState="running",o.style.animationPlayState="running"}),2300)):(r.style.animationPlayState="paused",o.style.animationPlayState="paused",setTimeout((()=>{l.style.transform="rotate(90deg)",e.style.transform="translateX(-100%)",n.style.transform="translateX(100%)"}),1200),setTimeout((()=>{s,a.style.display="none"}),3e3),setTimeout((()=>{i.forEach(((t,e)=>{t.style.transition="transform 0.5s ease",t.style.animation=`menuButton${e+1} 2s forwards`}))}),2500)),m=!m}));
//# sourceMappingURL=index.9ed5262d.js.map
