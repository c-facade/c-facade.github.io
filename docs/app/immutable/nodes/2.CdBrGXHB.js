import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{h as R,Y as E,A as G,Z as K,p as U,t as $,k as B,w as V,s as r,K as Y,g as q,_ as H,l as d,m as p,$ as v,j as Z}from"../chunks/oCa5Uwze.js";import{a as u,t as h}from"../chunks/Cap3Fp7P.js";import{a as N}from"../chunks/bpes_HFP.js";import{s as z}from"../chunks/DWD6Miu4.js";import{i as F}from"../chunks/DHphPAnw.js";import{p as f}from"../chunks/DkmVZpOJ.js";import{o as Q}from"../chunks/BqNLAFhW.js";function O(e,t,a,i){var o=e.__attributes??(e.__attributes={});R&&(o[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||o[t]!==(o[t]=a)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[E]=a),a==null?e.removeAttribute(t):typeof a!="string"&&W(e).includes(t)?e[t]=a:e.setAttribute(t,a))}var M=new Map;function W(e){var t=M.get(e.nodeName);if(t)return t;M.set(e.nodeName,t=[]);for(var a,i=e,o=Element.prototype;o!==i;){a=K(i);for(var l in a)a[l].set&&t.push(l);i=G(i)}return t}var X=h('<div class="project"><h2> </h2> <p class="last-update"> </p> <figure style="margin: 0px; align:right;"><img style="max-width: 100%;"></figure> <p> <!></p> See more: <a> </a>.</div>');function m(e,t){U(t,!1);let a=f(t,"title",8,"Project title"),i=f(t,"description",12,"Description"),o=f(t,"linkTitle",12,"linktitle"),l=f(t,"link",12,"#"),k=f(t,"image",8,"rick.gif"),S=f(t,"imageAlt",8,"cool image or gif"),c=f(t,"repo",8,"Anki2Notes");const A="https://api.github.com/repos/c-facade/"+c();let y=H(new Date(2025));Q(async function(){let s;if(c()in localStorage){var L=localStorage.getItem(c());L!=null&&(console.debug(JSON.stringify(L)),s=JSON.parse(L))}else{const j=await fetch(A);if(j.ok)s=await j.json(),console.debug(JSON.stringify(s)),localStorage.setItem(c(),JSON.stringify(s));else throw new Error(`Response status: ${j.status??"error"}`)}l(s.html_url),i(s.description),V(y,new Date(s.updated_at)),o(s.name)}),F();var n=X(),_=d(n),g=d(_,!0);p(_);var w=r(_,2),P=d(w);p(w);var T=r(w,2),C=d(T);p(T);var x=r(T,2),D=d(x),I=r(D);z(I,t,"default",{}),p(x);var b=r(x,2),J=d(b);p(b),v(),p(n),$(s=>{N(g,a()),N(P,`Last updated: ${s??""}`),O(C,"src",`image/${k()??""}`),O(C,"alt",S()),N(D,`${i()??""}. `),O(b,"href",l()),N(J,`${o()??""} repository`)},[()=>q(y).toDateString()],Y),u(e,n),B()}var tt=h('See it in action: <a href="https://svelte-mood-tracker.pages.dev/">Svelte Mood Tracker</a>',1),et=h('Go to <a href="https://c-facade.github.io/Anki2Notes">Anki2Notes</a>',1),at=h('Go to <a href="https://c-facade.github.io/lambda-js">Lambda Calculus Visualiser</a>',1),rt=h('<p style="padding: 10px">My new website uses SvelteKit!</p> <main><div class="project-container box rajdani"><!> <!> <!> <!> <!> <!> <!></div></main>',1);function ft(e){var t=rt(),a=r(Z(t),2),i=d(a),o=d(i);m(o,{title:"LTC3350 driver",repo:"ltc3350-driver",image:"ltc3350-driver.png",imageAlt:"Silicon Chip"});var l=r(o,2);m(l,{title:"LTC3350 monitor",repo:"ltc-monitor",image:"ltc-monitor.png",imageAlt:"LTC3350 STATUS REPORT"});var k=r(l,2);m(k,{title:"Dado USB",repo:"dado-usb2",image:"dado-rp3.jpg"});var S=r(k,2);m(S,{title:"Hotelier",repo:"hotelier_pinna"});var c=r(S,2);m(c,{title:"Svelte Mood Tracker",repo:"svelte-mood-tracker",image:"svelte-mood.png",children:(n,_)=>{v();var g=tt();v(),u(n,g)},$$slots:{default:!0}});var A=r(c,2);m(A,{title:"Anki2Notes",repo:"Anki2Notes",image:"anki2notes.png",children:(n,_)=>{v();var g=et();v(),u(n,g)},$$slots:{default:!0}});var y=r(A,2);m(y,{title:"Lambda Calculus Visualiser",repo:"lambda-js",image:"lambda.png",children:(n,_)=>{v();var g=at();v(),u(n,g)},$$slots:{default:!0}}),p(i),p(a),u(e,t)}export{ft as component};
