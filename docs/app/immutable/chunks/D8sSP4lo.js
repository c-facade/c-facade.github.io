import{Y as M,Z as R,H as A,D as k,_ as C,A as V,$ as E,a0 as U,a1 as j,a2 as q,a3 as T,a4 as g,a5 as I,a as B,a6 as h,a7 as W,a8 as Z,a9 as z,aa as F,ab as G,ac as J,ad as K,ae as Q,h as S,p as X,l as x,c as ee,af as re,T as ae,ag as H,g as te,y as ne}from"./BvsCMIiw.js";import{b as se}from"./Czmkd5oG.js";import{s as ie,g as oe}from"./Bxb8CcZn.js";const ue=["touchstart","touchmove"];function fe(e){return ue.includes(e)}const le=new Set,L=new Set;function y(e){var O;var r=this,t=r.ownerDocument,n=e.type,o=((O=e.composedPath)==null?void 0:O.call(e))||[],a=o[0]||e.target,l=0,_=e.__root;if(_){var c=o.indexOf(_);if(c!==-1&&(r===document||r===window)){e.__root=r;return}var p=o.indexOf(r);if(p===-1)return;c<=p&&(l=c)}if(a=o[l]||e.target,a!==r){M(e,"currentTarget",{configurable:!0,get(){return a||t}});var w=C,u=V;R(null),A(null);try{for(var s,i=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+n];if(d!==void 0&&!a.disabled)if(k(d)){var[$,...P]=d;$.apply(a,[e,...P])}else d.call(a,e)}catch(b){s?i.push(b):s=b}if(e.cancelBubble||f===r||f===null)break;a=f}if(s){for(let b of i)queueMicrotask(()=>{throw b});throw s}}finally{e.__root=r,delete e.currentTarget,R(w),A(u)}}}function ve(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function ce(e,r){return Y(e,r)}function he(e,r){E(),r.intro=r.intro??!1;const t=r.target,n=S,o=h;try{for(var a=U(t);a&&(a.nodeType!==8||a.data!==j);)a=q(a);if(!a)throw T;g(!0),I(a),B();const l=Y(e,{...r,anchor:a});if(h===null||h.nodeType!==8||h.data!==W)throw Z(),T;return g(!1),l}catch(l){if(l===T)return r.recover===!1&&z(),E(),F(t),g(!1),ce(e,r);throw l}finally{g(n),I(o)}}const v=new Map;function Y(e,{target:r,anchor:t,props:n={},events:o,context:a,intro:l=!0}){E();var _=new Set,c=u=>{for(var s=0;s<u.length;s++){var i=u[s];if(!_.has(i)){_.add(i);var f=fe(i);r.addEventListener(i,y,{passive:f});var d=v.get(i);d===void 0?(document.addEventListener(i,y,{passive:f}),v.set(i,1)):v.set(i,d+1)}}};c(G(le)),L.add(c);var p=void 0,w=J(()=>{var u=t??r.appendChild(K());return Q(()=>{if(a){X({});var s=ee;s.c=a}o&&(n.$$events=o),S&&se(u,null),p=e(u,n)||{},S&&(V.nodes_end=h),a&&x()}),()=>{var f;for(var s of _){r.removeEventListener(s,y);var i=v.get(s);--i===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,i)}L.delete(c),u!==t&&((f=u.parentNode)==null||f.removeChild(u))}});return N.set(p,w),p}let N=new WeakMap;function be(e,r){const t=N.get(e);return t?(N.delete(e),t(r)):Promise.resolve()}let m=!1,D=Symbol();function ge(e,r,t){const n=t[r]??(t[r]={store:null,source:ae(void 0),unsubscribe:H});if(n.store!==e&&!(D in t))if(n.unsubscribe(),n.store=e,e==null)n.source.v=void 0,n.unsubscribe=H;else{var o=!0;n.unsubscribe=ie(e,a=>{o?n.source.v=a:ne(n.source,a)}),o=!1}return D in t?oe(e):te(n.source)}function ye(){const e={};function r(){re(()=>{for(var t in e)e[t].unsubscribe();M(e,D,{enumerable:!1,value:!0})})}return[e,r]}function me(e){var r=m;try{return m=!1,[e(),m]}finally{m=r}}export{ve as a,ge as b,me as c,he as h,ce as m,ye as s,be as u};
