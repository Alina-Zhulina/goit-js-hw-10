/* empty css                      */import{f,i as m}from"./assets/vendor-d07556bb.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const t={startButton:document.querySelector("[data-start]"),dateTimePicker:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){u=r[0],u<=new Date?(m.error({title:"ERROR",message:"Please choose a date in the future"}),t.startButton.disabled=!0):t.startButton.disabled=!1}};f(t.dateTimePicker,y);t.startButton.disabled=!0;t.startButton.addEventListener("click",()=>{t.startButton.disabled=!0,t.dateTimePicker.disabled=!0;const r=new Date(u).getTime(),n=setInterval(()=>{const i=new Date().getTime(),s=r-i;if(s<=0){clearInterval(n),t.startButton.disabled=!1,t.dateTimePicker.disabled=!1,t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00";return}const e=p(s);h(e)},1e3)});function h({days:r,hours:n,minutes:i,seconds:s}){t.days.textContent=c(r),t.hours.textContent=c(n),t.minutes.textContent=c(i),t.seconds.textContent=c(s)}function c(r){return String(r).padStart(2,"0")}function p(r){const o=Math.floor(r/864e5),a=Math.floor(r%864e5/36e5),d=Math.floor(r%864e5%36e5/6e4),l=Math.floor(r%864e5%36e5%6e4/1e3);return{days:o,hours:a,minutes:d,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map