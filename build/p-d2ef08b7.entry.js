import{r as t,c as e,h as o,H as r,g as n}from"./p-1e894e7c.js";import{a as l}from"./p-b590e03c.js";import{s as i,e as s}from"./p-58667357.js";import{c,a as u}from"./p-2094943b.js";var a=c((function(t){t.exports=function(){const t=(e,o)=>!0===e.matches(o)?e:t(e.parentElement,o),e="data-keyboard-selector",o="data-keyboard-skip";function r(e,{rowSelector:o,cellSelector:r}){const n=[...t(e,o).querySelectorAll(r)],l=n.indexOf(e),i=(s=e,()=>s);var s;return{selectFromAfter:i,selectFromBefore:i,next:()=>void 0!==n[l+1]?n[l+1]:null,previous:()=>void 0!==n[l-1]?n[l-1]:null}}function n(n,l){return null===n?null:n.hasAttribute(o)?function(t,e){const o=r(t,e);return{previous:o.previous,next:o.next}}(n,l):n.hasAttribute(e)||!n.matches(l.cellSelector)?function(o,n){const l=t(o,n.cellSelector),i=l.getAttribute(e),s=[...l.querySelectorAll(i)],c=s.length,u=o!==l;return{selectFromBefore:()=>u?o:s[0],selectFromAfter:()=>u?o:s[c-1],next(){const t=s.indexOf(o);return u&&t+1<c?s[t+1]:r(l,n).next()},previous(){const t=s.indexOf(o);return u&&t>0?s[t-1]:r(l,n).previous()}}}(n,l):r(n,l)}function l(t,e,{rowSelector:o="tr",cellSelector:r="th,td"}={}){const n=[...e.querySelectorAll(o)],l=[...t.querySelectorAll(r)],i=n.indexOf(t);return{previous:()=>void 0!==n[i-1]?n[i-1]:null,next:()=>void 0!==n[i+1]?n[i+1]:null,item:t=>void 0!==l[t]?l[t]:null}}function i(e,r,{rowSelector:n,cellSelector:i}={}){if(null===e)return null;const s=t(e,n);return s.hasAttribute(o)?function(t,e,o){const r=l(t,e,o);return{previous:r.previous,next:r.next}}(s,r,{rowSelector:n,cellSelector:i}):l(e,r,{rowSelector:n,cellSelector:i})}return function(e,{rowSelector:o="tr",cellSelector:r="td,th"}={}){let l=null;const s=function(e,o){const{rowSelector:r,cellSelector:l}=o;return{moveRight(t){const e=n(t,o);let r=n(e.next(),o);for(;null!==r&&void 0===r.selectFromBefore;)r=n(r.next(),o);return null!==r?r.selectFromBefore():t},moveLeft(t){const e=n(t,o);let r=n(e.previous(),o);for(;null!==r&&void 0===r.selectFromAfter;)r=n(r.previous(),o);return null!==r?r.selectFromAfter():t},moveUp(s){const c=t(s,r),u=[...c.querySelectorAll(l)],a=i(c,e,o);let d=i(a.previous(),e,o);for(;null!==d&&void 0===d.item;)d=i(d.previous(),e,o);if(null===d)return s;let h=u.indexOf(t(s,l)),f=n(d.item(h),o);for(;null===f||void 0===f.selectFromBefore&&h>0;)h--,f=n(d.item(h),o);return f.selectFromBefore()},moveDown(s){const c=t(s,r),u=[...c.querySelectorAll(l)],a=i(c,e,o);let d=i(a.next(),e,o);for(;null!==d&&void 0===d.item;)d=i(d.next(),e,o);if(null===d)return s;let h=u.indexOf(t(s,l)),f=n(d.item(h),o);for(;null===f||void 0===f.selectFromBefore&&h>0;)h--,f=n(d.item(h),o);return f.selectFromBefore()}}}(e,{rowSelector:o,cellSelector:r});e.addEventListener("keydown",({target:t,keyCode:e})=>{let o=null;37===e?o=s.moveLeft(t):38===e?o=s.moveUp(t):39===e?o=s.moveRight(t):40===e&&(o=s.moveDown(t)),null!==o&&(o.focus(),null!==l&&l.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),l=o)})}}()}));const d=class{constructor(o){t(this,o),this.globalCountrySelect=e(this,"globalCountrySelect",7),this.shouldUpdate=!1,this.trigger="Country",this.dataSrc="data/air.json",this.sortBy="Index",this.sort="asc",this.columns="Country,Index"}load(){return fetch(this.dataSrc).then(t=>t.json()).then(t=>{this.data=t})}update(){let t=this.globalCountrySelect,e="asc"===this.sort,o=this.sortWithNulls,r=i(this.pagewrapElement).append("table");r.attr("aria-label","Country list. Click country names to view details. Scroll to view more."),r.attr("role","grid");let n=this.columns.split(",").map(t=>t.trim()),c=r.append("thead").append("tr").attr("role","row").selectAll("th").data(n).enter().append("th").attr("scope","col").attr("tabindex","0").attr("role","columnheader").attr("aria-sort","none").text((function(t){return t})).on("keydown",(function(){"Space"!==s.code&&"Enter"!==s.code||this.click()})).on("click",(function(t){c.attr("class","header"),c.attr("aria-sort","none"),e?("Country"===t?d.sort((e,o)=>0-(e[t]>o[t]?-1:1)):o(d,e,t),e=!1,this.className="aes",this.setAttribute("aria-sort","ascending")):("Country"===t?d.sort((e,o)=>0-(e[t]>o[t]?1:-1)):o(d,e,t),e=!0,this.className="des",this.setAttribute("aria-sort","descending"))})),u=this.trigger,d=r.append("tbody").selectAll("tr").data(this.data).enter().append("tr"),h=d.selectAll("td").data((function(t){return n.map((function(e){return{value:t[e],name:e}}))})).enter().append("td");h.attr("tabindex","-1"),h.attr("data-th",(function(t){return t.name})),h.each((function(e){e.name===u?(i(this).attr("data-keyboard-selector","a"),i(this).append("a").attr("tabindex","-1").attr("href","#").text((function(t){return l(t.value)})).on("keydown",(function(e){s.preventDefault(),"Space"!==s.code&&"Enter"!==s.code||t.emit(e.value)})).on("click, mousedown",(function(e){return s.preventDefault(),t.emit(e.value),!1}))):i(this).text((function(t){return l(t.value)}))})),"asc"==this.sort?"Country"===this.sortBy?d.sort((t,e)=>0-(t[this.sortBy]>e[this.sortBy]?-1:1)):this.sortWithNulls(d,"asc"==this.sort,this.sortBy):"Country"===this.sortBy?d.sort((t,e)=>0-(t[this.sortBy]>e[this.sortBy]?1:-1)):this.sortWithNulls(d,"asc"==this.sort,this.sortBy),a(this.pagewrapElement.getElementsByTagName("table")[0],{rowSelector:"tr",cellSelector:"th,td"})}sortWithNulls(t,e,o){return t.sort((t,r)=>r[o]?t[o]?e?t[o]-r[o]:r[o]-t[o]:e?-1:1:e?1:-1)}componentDidLoad(){this.pagewrapElement=this.element.shadowRoot.getElementById("page-wrap"),this.shouldUpdate=!0}componentWillUpdate(){return this.load()}componentDidUpdate(){this.update()}render(){return o(r,null,o("div",{id:"page-wrap",tabindex:"0"}),o("slot",null))}get element(){return n(this)}};d.style=':host{display:block;width:100%;margin:0;padding:0;font-size:0.8rem}#page-wrap{width:100%}p{margin:20px 0}a{color:black;text-decoration-color:lightgrey}tr:hover td{background-color:#C1D3E2}table{width:100%;background:white;border-collapse:collapse}tr:nth-of-type(odd){background:#F7F9FB}th{background:white;color:black;font-size:1rem;font-weight:bold;cursor:s-resize;background-repeat:no-repeat;background-position:3% center;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}td,th{padding:6px;border:2px solid white;text-align:left}td:nth-of-type(1){font-weight:bold}th.des:after{content:"↓"}th.aes:after{content:"↑"}';export{d as oi_country_list}