import{i as d,ao as h,b as _,ap as g,aq as E,y as m,h as u,o,e as T,j as y}from"./lpCv0clr.js";function p(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function i(e,r){var t=m;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function C(e,r){var t=(r&g)!==0,f=(r&E)!==0,s,n=!e.startsWith("<!>");return()=>{if(u)return i(o,null),o;s===void 0&&(s=p(n?e:"<!>"+e),t||(s=d(s)));var a=f||h?document.importNode(s,!0):s.cloneNode(!0);if(t){var l=d(a),c=a.lastChild;i(l,c)}else i(a,a);return a}}function b(e,r){var t=C(e,r);return()=>w(t())}function A(e,r,t="svg"){var f=!e.startsWith("<!>"),s=`<${t}>${f?e:"<!>"+e}</${t}>`,n;return()=>{if(u)return i(o,null),o;if(!n){var a=p(s),l=d(a);n=d(l)}var c=n.cloneNode(!0);return i(c,c),c}}function w(e){if(u)return e;const r=e.nodeType===11,t=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),f=m;for(const n of t){const a=document.createElement("script");for(var s of n.attributes)a.setAttribute(s.name,s.value);a.textContent=n.textContent,(r?e.firstChild===n:e===n)&&(f.nodes_start=a),(r?e.lastChild===n:e===n)&&(f.nodes_end=a),n.replaceWith(a)}return e}function M(e=""){if(!u){var r=_(e+"");return i(r,r),r}var t=o;return t.nodeType!==3&&(t.before(t=_()),T(t)),i(t,t),t}function P(){if(u)return i(o,null),o;var e=document.createDocumentFragment(),r=document.createComment(""),t=_();return e.append(r,t),i(r,t),e}function S(e,r){if(u){m.nodes_end=o,y();return}e!==null&&e.before(r)}const x="5";var v;typeof window<"u"&&((v=window.__svelte??(window.__svelte={})).v??(v.v=new Set)).add(x);export{S as a,M as b,P as c,i as d,b as e,p as f,A as n,C as t};
