import{l as ot,t as Xt}from"./DIeogL5L.js";const et=!1;var Yn=Array.isArray,tn=Array.prototype.indexOf,Mn=Array.from,jn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Un=Object.prototype,Bn=Array.prototype,rn=Object.getPrototypeOf;const Hn=()=>{};function Gn(t){return t()}function en(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,mt=4,H=8,it=16,x=32,G=64,Z=128,I=256,W=512,p=1024,S=2048,q=4096,F=8192,L=16384,ln=32768,Tt=65536,Vn=1<<17,sn=1<<19,gt=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function At(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Wn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const Qn=1,Xn=2,tr=4,nr=8,rr=16,er=1,lr=2,pn="[",hn="[!",dn="]",St={},sr=Symbol();function ft(t,n){var r={f:0,v:t,reactions:null,equals:At,rv:0,wv:0};return r}function ar(t){return kt(ft(t))}function yn(t,n=!1){var e;const r=ft(t);return n||(r.equals=xt),ot&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ur(t,n=!1){return kt(yn(t,n))}function kt(t){return u!==null&&u.f&w&&(g===null?On([t]):g.push(t)),t}function or(t,n){return u!==null&&!k&&tt()&&u.f&(w|it)&&(g===null||!g.includes(t))&&vn(),wn(t,n)}function wn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),Rt(t,S),tt()&&i!==null&&i.f&p&&!(i.f&(x|G))&&(A===null?Dn([t]):A.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&S||!e&&a===i||(m(a,n),o&(p|I)&&(o&w?Rt(a,q):rt(a)))}}function Ot(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let D=!1;function ir(t){D=t}let E;function M(t){if(t===null)throw Ot(),St;return E=t}function fr(){return M(b(E))}function _r(t){if(D){if(b(E)!==null)throw Ot(),St;E=t}}function cr(t=1){if(D){for(var n=t,r=E;n--;)r=b(r);E=r}}function vr(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var yt,Dt,Nt;function pr(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Dt=ht(n,"firstChild").get,Nt=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return Dt.call(t)}function b(t){return Nt.call(t)}function hr(t,n){if(!D)return st(t);var r=st(E);if(r===null)r=E.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function dr(t,n){if(!D){var r=st(t);return r instanceof Comment&&r.data===""?b(r):r}return E}function yr(t,n=1,r=!1){let e=D?E:t;for(var l;n--;)l=e,e=b(e);if(!D)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function wr(t){t.textContent=""}function It(t){var n=w|S;i===null?n|=I:i.f|=gt;var r=u!==null&&u.f&w?u:null;const e={children:null,ctx:f,deps:null,equals:At,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function Er(t){const n=It(t);return n.equals=xt,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?_t(e):N(e)}}}function En(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function Pt(t){var n,r=i;Q(En(t));try{bt(t),n=Zt(t)}finally{Q(r)}return n}function Ct(t){var n=Pt(t),r=(O||t.f&I)&&t.deps!==null?q:p;m(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function _t(t){bt(t),B(t,0),m(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){i===null&&u===null&&fn(),u!==null&&u.f&I&&on(),ct&&un()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var l=(t&G)!==0,s=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=P;try{wt(!0),vt(a),a.f|=ln}catch(T){throw N(a),T}finally{wt(o)}}else n!==null&&rt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(gt|Z))===0;if(!_&&!l&&e&&(s!==null&&mn(a,s),u!==null&&u.f&w)){var c=u;(c.children??(c.children=[])).push(a)}return a}function mr(t){const n=Y(H,null,!1);return m(n,p),n.teardown=t,n}function Tr(t){Ft();var n=i!==null&&(i.f&x)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=qt(t);return e}}function gr(t){return Ft(),Tn(t)}function Ar(t){const n=Y(G,t,!0);return(r={})=>new Promise(e=>{r.outro?xn(n,()=>{N(n),e(void 0)}):(N(n),e(void 0))})}function qt(t){return Y(mt,t,!1)}function Tn(t){return Y(H,t,!0)}function xr(t,n=[],r=It){const e=n.map(r);return gn(()=>t(...e.map(Fn)))}function gn(t,n=0){return Y(H|it|n,t,!0)}function Sr(t,n=!0){return Y(H|x,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=ct,e=u;Et(!0),J(null);try{n.call(null)}finally{Et(r),J(e)}}}function Yt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)_t(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;N(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||N(n),n=r}}function N(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:b(e);e.remove(),e=s}r=!0}Mt(t,n&&!r),Yt(t),B(t,0),m(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Lt(t);var o=t.parent;o!==null&&o.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];Ut(t,r,!0),Sn(r,()=>{N(t),n&&n()})}function Sn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ut(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Tt)!==0||(e.f&x)!==0;Ut(e,n,s?r:!1),e=l}}}function kr(t){Bt(t,!0)}function Bt(t,n){if(t.f&F){t.f^=F,t.f&p||(t.f^=p),V(t)&&(m(t,S),rt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&x)!==0;Bt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let z=!1,at=[];function Ht(){z=!1;const t=at.slice();at=[],en(t)}function Rr(t){z||(z=!0,queueMicrotask(Ht)),at.push(t)}function kn(){z&&Ht()}const Gt=0,Rn=1;let K=!1,$=Gt,j=!1,U=null,P=!1,ct=!1;function wt(t){P=t}function Et(t){ct=t}let R=[],C=0;let u=null,k=!1;function J(t){u=t}let i=null;function Q(t){i=t}let g=null;function On(t){g=t}let h=null,y=0,A=null;function Dn(t){A=t}let Vt=1,X=0,O=!1,f=null;function Kt(){return++Vt}function tt(){return!ot||f!==null&&f.l===null}function V(t){var c;var n=t.f;if(n&S)return!0;if(n&q){var r=t.deps,e=(n&I)!==0;if(r!==null){var l,s,a=(n&W)!==0,o=e&&i!==null&&!O,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=W)}for(l=0;l<_;l++)if(s=r[l],V(s)&&Ct(s),s.wv>t.wv)return!0}(!e||i!==null&&!O)&&m(t,p)}return!1}function Nn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function In(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function nt(t,n,r,e){if(K){if(r===null&&(K=!1),In(n))throw t;return}r!==null&&(K=!0);{Nn(t,n);return}}function $t(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&w?$t(s,n,r+1):n===s&&(r===0?m(s,S):s.f&p&&m(s,q),rt(s))}}function Zt(t){var pt;var n=h,r=y,e=A,l=u,s=O,a=g,o=f,_=k,c=t.f;h=null,y=0,A=null,u=c&(x|G)?null:t,O=!P&&(c&I)!==0,g=null,f=t.ctx,k=!1,X++;try{var T=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(B(t,y),v!==null&&y>0)for(v.length=y+h.length,d=0;d<h.length;d++)v[y+d]=h[d];else t.deps=v=h;if(!O)for(d=y;d<v.length;d++)((pt=v[d]).reactions??(pt.reactions=[])).push(t)}else v!==null&&y<v.length&&(B(t,y),v.length=y);if(tt()&&A!==null&&!(t.f&(w|q|S)))for(d=0;d<A.length;d++)$t(A[d],t);return l!==null&&X++,T}finally{h=n,y=r,A=e,u=l,O=s,g=a,f=o,k=_}}function bn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(h===null||!h.includes(n))&&(m(n,q),n.f&(I|W)||(n.f^=W),B(n,0))}function B(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function vt(t){var n=t.f;if(!(n&L)){m(t,p);var r=i,e=f;i=t;try{n&it?An(t):Mt(t),Yt(t),Lt(t);var l=Zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Vt;var s=t.deps,a;et&&Xt&&t.f&S}catch(o){nt(o,t,r,e||t.ctx)}finally{i=r}}}function Wt(){if(C>1e3){C=0;try{_n()}catch(t){if(U!==null)nt(t,U,null);else throw t}}C++}function zt(t){var n=t.length;if(n!==0){Wt();var r=P;P=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];Jt(l,s),Pn(s)}}finally{P=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|F)))try{V(e)&&(vt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}catch(l){nt(l,e,null,e.ctx)}}}function Cn(){if(j=!1,C>1001)return;const t=R;R=[],zt(t),j||(C=0,U=null)}function rt(t){$===Gt&&(j||(j=!0,queueMicrotask(Cn))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|x)){if(!(r&p))return;n.f^=p}}R.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,a=s&&(l&p)!==0,o=r.next;if(!a&&!(l&F))if(l&H){if(s)r.f^=p;else try{V(r)&&vt(r)}catch(v){nt(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&mt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var T=0;T<e.length;T++)_=e[T],n.push(_),Jt(_,n)}function Qt(t){var n=$,r=R;try{Wt();const l=[];$=Rn,R=l,j=!1,zt(r);var e=t==null?void 0:t();return kn(),(R.length>0||l.length>0)&&Qt(),C=0,U=null,e}finally{$=n,R=r}}async function Or(){await Promise.resolve(),Qt()}function Fn(t){var T;var n=t.f,r=(n&w)!==0;if(r&&n&L){var e=Pt(t);return _t(t),e}if(u!==null&&!k){g!==null&&g.includes(t)&&cn();var l=u.deps;t.rv<X&&(t.rv=X,h===null&&l!==null&&l[y]===t?y++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&w){var _=a;o=_,a=_.parent}else{var c=a;(T=c.deriveds)!=null&&T.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,V(s)&&Ct(s)),t.v}function Dr(t){var n=k;try{return k=!0,t()}finally{k=n}}const qn=-7169;function m(t,n){t.f=t.f&qn|n}function Nr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},ot&&!n&&(f.l={s:null,u:null,r1:[],r2:ft(!1)})}function Ir(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Q(s.effect),J(s.reaction),qt(s.fn)}}finally{Q(r),J(e)}}f=n.p,n.m=!0}return{}}function br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{cr as $,rn as A,Yn as B,Wn as C,xt as D,x as E,Q as F,Qn as G,Xn as H,nr as I,Kn as J,Er as K,Vn as L,rr as M,yn as N,st as O,tr as P,lr as Q,G as R,dt as S,er as T,sr as U,E as V,lt as W,M as X,$n as Y,nn as Z,ur as _,fr as a,jn as a0,J as a1,u as a2,pr as a3,pn as a4,b as a5,St as a6,ir as a7,dn as a8,Ot as a9,Zn as aa,wr as ab,Mn as ac,Ar as ad,Sr as ae,mr as af,Hn as ag,an as ah,gn as ai,Tt as aj,hn as ak,vr as al,kr as am,xn as an,qt as ao,Tn as ap,Rr as aq,Qt as ar,Or as as,ar as at,Tr as b,f as c,Dr as d,en as e,br as f,Fn as g,D as h,It as i,dr as j,Ir as k,hr as l,_r as m,Bn as n,Un as o,Nr as p,ft as q,Gn as r,yr as s,xr as t,gr as u,zn as v,or as w,ht as x,i as y,Jn as z};
