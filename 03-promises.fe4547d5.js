var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,i){r[e]=i},e.parcelRequired7c6=t);var o=t("iQIUW");var s=class{submit(e){e.preventDefault();const{delay:i,step:r,amount:t}=e.currentTarget.elements,o=Number(i.value),s=Number(r.value),l=Number(t.value);this.promiseCaller(o,s,l)}promiseCaller(e,i,r){let t=e;for(let e=1;e<=r;e+=1)this.createPromise(e,t).then((({position:e,delay:i})=>{this.success(e,i)})).catch((({position:e,delay:i})=>{this.failure(e,i)})),t+=i}createPromise(e,i){return new Promise(((r,t)=>{setTimeout((()=>{Math.random()>.3?r({position:e,delay:i}):t({position:e,delay:i})}),i)}))}success(e,i){o.Notify.success(`✅ Fulfilled promise ${e} in ${i}ms`,{clickToClose:!0})}failure(e,i){o.Notify.failure(`❌ Rejected promise ${e} in ${i}ms`,{clickToClose:!0})}};const l=document.querySelector(".form"),n=new s;l.addEventListener("submit",n.submit.bind(n));
//# sourceMappingURL=03-promises.fe4547d5.js.map
