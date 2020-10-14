(()=>{"use strict";(e=>{let t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");const l=()=>{let e=(()=>{let e=(new Date("31 december  2020").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:n,seconds:t}})();t.textContent=e.hours,e.hours<10&&(t.textContent="0"+e.hours),n.textContent=e.minutes,e.minutes<10&&(n.textContent="0"+e.minutes),o.textContent=e.seconds,e.seconds<10&&(o.textContent="0"+e.seconds),e.timeRemaining>0?setTimeout(l,1e3):(t.textContent="00",n.textContent="00",o.textContent="00",clearTimeout())};l()})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body");document.querySelector(".menu"),document.querySelector(".close-btn"),document.querySelector(".active-menu"),document.querySelector(".container"),t.addEventListener("click",(t=>{let n=t.target;if(e.classList.contains("active-menu")){if(e.classList.contains("active-menu")){if(n.classList.contains("test"))return;n.classList.contains("active-menu")?n.classList.contains("close-btn")&&e.classList.remove("active-menu"):e.classList.remove("active-menu")}}else n=n.closest(".menu"),n&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");document.querySelector(".popup-close");let o,l=0;t.forEach((t=>t.addEventListener("click",(()=>{o=requestAnimationFrame(r),l=0,e.style.display="block"})))),e.addEventListener("click",(t=>{let n=t.target;"popup-close"===n.className?(e.style.display="none",l=0,e.style.top="0"):(n=n.closest(".popup-content"),n||(e.style.display="none",l=0,e.style.top="0"))}));let r=()=>{o=requestAnimationFrame(r),l++,document.documentElement.clientWidth>768&&l<50?n.style.top=5*l+"px":cancelAnimationFrame(o)};o=requestAnimationFrame(r)})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let o=e.target;o=o.closest(".service-header-tab"),o&&t.forEach(((e,l)=>{e===o&&(e=>{for(let o=0;o<n.length;o++)e===o?(t[o].classList.add("active"),n[o].classList.remove("d-none")):(t[o].classList.remove("active"),n[o].classList.add("d-none"))})(l)}))}))})(),(()=>{const e=document.querySelector(".portfolio-dots"),t=document.querySelectorAll(".portfolio-item"),n=document.getElementById("command");var o;n.addEventListener("mouseover",(e=>{let t=e.target;if(t.classList.contains("command__photo")){let e=t.getAttribute("src");t.src=t.dataset.img,t.setAttribute("data-img",e)}})),n.addEventListener("mouseout",(e=>{let t=e.target;if(t.classList.contains("command__photo")){let e=t.getAttribute("src");t.src=t.dataset.img,t.setAttribute("data-img",e)}})),e.insertAdjacentHTML("beforeEnd",(o=t.length,'\n            <li class="dot"></li>\n        '.repeat(o))),(()=>{const e=document.querySelector(".portfolio-content"),n=(document.querySelectorAll(".portfolio-btn"),document.querySelectorAll(".dot"));document.querySelector(".dot").classList.add("dot-active");let o,l=0;const r=(e,t,n)=>{e[t].classList.remove(n)},c=(e,t,n)=>{e[t].classList.add(n)},a=()=>{r(t,l,"portfolio-item-active"),r(n,l,"dot-active"),l++,l>=t.length&&(l=0),c(t,l,"portfolio-item-active"),c(n,l,"dot-active")},s=(e=3e3)=>{o=setInterval(a,e)};e.addEventListener("click",(e=>{e.preventDefault();let o=e.target;o.matches(".portfolio-btn, .dot")&&(r(t,l,"portfolio-item-active"),r(n,l,"dot-active"),o.matches("#arrow-right")?l++:o.matches("#arrow-left")?l--:o.matches(".dot")&&n.forEach(((e,t)=>{e===o&&(l=t)})),l>=t.length&&(l=0),l<0&&(l=t.length-1),c(t,l,"portfolio-item-active"),c(n,l,"dot-active"))})),e.addEventListener("mouseover",(e=>{let t=e.target;(t.matches(".portfolio-btn")||t.matches(".dot"))&&clearInterval(o)})),e.addEventListener("mouseout",(e=>{let t=e.target;(t.matches(".portfolio-btn")||t.matches(".dot"))&&s()})),s(2e3)})()})(),(()=>{const e=document.querySelector(".calc-block"),t=e.querySelectorAll('input[type="text"]');e.addEventListener("input",(()=>{for(let e=0;e<t.length;e++)t[e].value=t[e].value.replace(/\D/g,"")})),((t=100)=>{const n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),l=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),c=document.getElementById("total");e.addEventListener("change",(e=>{const a=e.target;(a.matches("select")||a.matches("input"))&&(()=>{let e=0,a=1,s=1;const i=n.options[n.selectedIndex].value,u=+o.value;r.value>1&&(a+=(r.value-1)/10),l.value&&l.value<5?s*=2:l.value&&l.value<10&&(s*=1.5),i&&u&&(e=+Math.round(t*i*u*a*s)),(({timing:e,draw:t,duration:n})=>{const o=performance.now();requestAnimationFrame((function l(r){let c=(r-o)/n;c>1&&(c=1);const a=e(c);t(a),c<1&&requestAnimationFrame(l)}))})({duration:300,timing:e=>e,draw(t){c.textContent=Math.floor(t*e)}})})()}))})(100)})(),(()=>{const e=document.createElement("div");e.style.cssText="font-size: 2rem; color: #fff";const t=e=>{e.nextElementSibling&&"Заполните поле!"===e.nextElementSibling.textContent&&e.nextElementSibling.remove()};document.body.addEventListener("input",(e=>{e.preventDefault(),(e=>{const t=document.querySelectorAll(".form-btn"),n=/^(\+7)?8?([-()]*\d){10}$/;if("user_phone"===e.name)if(e.value=e.value.replace(/^\++/g,"+"),e.value=e.value.replace(/[^+0-9]/g,""),n.test(e.value))"Ошибка в этом поле"===e.parentNode.lastElementChild.textContent&&e.parentNode.lastElementChild.remove(),t.forEach((e=>{e.removeAttribute("disabled")}));else{const n=document.createElement("div");if(n.textContent="Ошибка в этом поле",e.nextElementSibling&&"Ошибка в этом поле"===e.nextElementSibling.textContent)return;e.insertAdjacentElement("afterend",n),t.forEach((e=>{e.setAttribute("disabled",!0)}))}"user_email"===e.name&&(e.value=e.value.replace(/[^@a-zA-Z0-9.-_]/g,"")),"user_name"===e.name&&(e.value=e.value.replace(/[^а-яё\s]/gi,"")),"user_message"===e.name&&(e.value=e.value.replace(/[^а-яА-Я ,.?!"';:\-\%()\#]/g,""))})(e.target),t(e.target)})),document.body.addEventListener("submit",(n=>{n.preventDefault(),(n=>{if("form"===n.localName){const o=n.querySelectorAll("input"),l=n.querySelector('input[name="user_email"]'),r=n.querySelector('input[name="user_phone"]'),c=n.querySelector('input[name="user_name"]'),a=n.querySelector("textarea");if(""!==r.value&&""!==l.value&&""!==c.value){if(!a||a&&""!==a.value){n.appendChild(e),e.textContent="Загрузка...";const t=new FormData(n);let l={};t.forEach(((e,t)=>{l[t]=e})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(l).then((t=>{if(!0!==t.ok)throw new Error("status network not 200");e.textContent="Спасибо! Мы скоро с Вами свяжемся!",a&&(a.value="");for(let e=0;e<o.length;e++)o[e].value="";setTimeout((()=>{e.remove()}),5e3)})).catch((t=>{e.textContent="Что-то пошло не так...",console.log(t)}))}else if(a&&""===a.value){const e=document.createElement("div");if(e.textContent="Заполните поле!",e.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",a.nextElementSibling&&"Заполните поле!"===a.nextElementSibling.textContent)return;""===a.value&&a.insertAdjacentElement("afterend",e)}}else for(let e=0;e<o.length;e++){const t=document.createElement("div");if(t.textContent="Заполните поле!",t.style.cssText="color: red; line-height: 0px; height: 15px; font-size: 15px;",o[e].nextElementSibling&&"Заполните поле!"===o[e].nextElementSibling.textContent)return;""===o[e].value&&o[e].insertAdjacentElement("afterend",t)}document.body.addEventListener("input",t)}})(n.target)}))})(),(()=>{const e=document.getElementById("command");e.addEventListener("mouseover",(e=>{console.log(1);let t=e.target;if(t.classList.contains("command__photo")){let e=t.getAttribute("data-img"),n=t.getAttribute("src");t.setAttribute("data-img",e),t.setAttribute("src",n)}})),e.addEventListener("mouseout",(e=>{console.log(2);let t=e.target,n=t.getAttribute("data-img"),o=t.getAttribute("src");t.setAttribute("data-img",n),t.setAttribute("src",o)}))})(),(()=>{const e=document.querySelector("#btnScroll"),t=document.querySelector("menu").querySelectorAll("ul>li"),n=e=>document.documentElement.scrollTop+e.getBoundingClientRect().y,o=e=>{let t=e.target,o=t.getAttribute("to");if(t){const e=document.getElementById(o.substring(1,o.length)),t=n(e);window.scrollTo({top:t,behavior:"smooth"})}};e.addEventListener("click",o);for(let e=0;e<t.length;e++)t[e].addEventListener("click",o);e.addEventListener("click",(e=>{let t=e.target;t=t.closest(".test");let o=t.getAttribute("to");if(t){const e=document.getElementById(o.substring(1,o.length)),t=n(e);window.scrollTo({top:t,behavior:"smooth"})}}))})()})();