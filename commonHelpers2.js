import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-d07556bb.js";const o={form:document.querySelector(".form"),inputDelay:document.querySelector('[name="delay"]'),inputFulfilled:document.querySelector('[value="fulfilled"]'),inputRejected:document.querySelector('[value="rejected"]'),buttonCreate:document.querySelector('[type="submit"]')};o.form.addEventListener("submit",i=>{i.preventDefault();const t=Number(o.inputDelay.value);new Promise((e,u)=>{setTimeout(()=>{o.inputFulfilled.checked?e(`Fulfilled promise in ${t}ms`):u(`Rejected promise in ${t}ms`)},t)}).then(e=>{r.success({title:"Success",message:e,position:"topRight",theme:"dark",backgroundColor:"#59a10d"})}).catch(e=>{r.error({title:"Error",message:e,position:"topRight",theme:"dark",backgroundColor:"#ef4040;"})})});
//# sourceMappingURL=commonHelpers2.js.map