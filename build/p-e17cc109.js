function t(t){let e=Number(t);return isNaN(e)?t:e%1==0?e.toFixed(0):r(t,2)}function r(t,r){let e;try{e=parseFloat(t)}catch(r){return t}return isNaN(e)?t:e.toFixed(r)}export{t as f,r as n}