(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();function H(){}function Te(e){return e()}function Be(){return Object.create(null)}function ae(e){e.forEach(Te)}function He(e){return typeof e=="function"}function je(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let se;function _e(e,t){return se||(se=document.createElement("a")),se.href=t,e===se.href}function Ye(e){return Object.keys(e).length===0}let ie=!1;function ke(){ie=!0}function Re(){ie=!1}function Xe(e,t,l,c){for(;e<t;){const s=e+(t-e>>1);l(s)<=c?e=s+1:t=s}return e}function Ke(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const u=[];for(let i=0;i<t.length;i++){const v=t[i];v.claim_order!==void 0&&u.push(v)}t=u}const l=new Int32Array(t.length+1),c=new Int32Array(t.length);l[0]=-1;let s=0;for(let u=0;u<t.length;u++){const i=t[u].claim_order,v=(s>0&&t[l[s]].claim_order<=i?s+1:Xe(1,s,w=>t[l[w]].claim_order,i))-1;c[u]=l[v]+1;const y=v+1;l[y]=u,s=Math.max(y,s)}const o=[],a=[];let m=t.length-1;for(let u=l[s]+1;u!=0;u=c[u-1]){for(o.push(t[u-1]);m>=u;m--)a.push(t[m]);m--}for(;m>=0;m--)a.push(t[m]);o.reverse(),a.sort((u,i)=>u.claim_order-i.claim_order);for(let u=0,i=0;u<a.length;u++){for(;i<o.length&&a[u].claim_order>=o[i].claim_order;)i++;const v=i<o.length?o[i]:null;e.insertBefore(a[u],v)}}function n(e,t){if(ie){for(Ke(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function U(e,t,l){ie&&!l?n(e,t):(t.parentNode!==e||t.nextSibling!=l)&&e.insertBefore(t,l||null)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function O(){return L(" ")}function ut(e,t,l,c){return e.addEventListener(t,l,c),()=>e.removeEventListener(t,l,c)}function r(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function _(e){return Array.from(e.childNodes)}function We(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function De(e,t,l,c,s=!1){We(e);const o=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const m=e[a];if(t(m)){const u=l(m);return u===void 0?e.splice(a,1):e[a]=u,s||(e.claim_info.last_index=a),m}}for(let a=e.claim_info.last_index-1;a>=0;a--){const m=e[a];if(t(m)){const u=l(m);return u===void 0?e.splice(a,1):e[a]=u,s?u===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,m}}return c()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function Je(e,t,l,c){return De(e,s=>s.nodeName===t,s=>{const o=[];for(let a=0;a<s.attributes.length;a++){const m=s.attributes[a];l[m.name]||o.push(m.name)}o.forEach(a=>s.removeAttribute(a))},()=>c(t))}function h(e,t,l){return Je(e,t,l,d)}function N(e,t){return De(e,l=>l.nodeType===3,l=>{const c=""+t;if(l.data.startsWith(c)){if(l.data.length!==c.length)return l.splitText(c.length)}else l.data=c},()=>L(t),!0)}function z(e){return N(e," ")}function Qe(e,t,l,c){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,c?"important":"")}let pe;function ee(e){pe=e}const Z=[],Me=[],ne=[],Ge=[],Ze=Promise.resolve();let me=!1;function et(){me||(me=!0,Ze.then(Fe))}function ve(e){ne.push(e)}const he=new Set;let Q=0;function Fe(){if(Q!==0)return;const e=pe;do{try{for(;Q<Z.length;){const t=Z[Q];Q++,ee(t),tt(t.$$)}}catch(t){throw Z.length=0,Q=0,t}for(ee(null),Z.length=0,Q=0;Me.length;)Me.pop()();for(let t=0;t<ne.length;t+=1){const l=ne[t];he.has(l)||(he.add(l),l())}ne.length=0}while(Z.length);for(;Ge.length;)Ge.pop()();me=!1,he.clear(),ee(e)}function tt(e){if(e.fragment!==null){e.update(),ae(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ve)}}const re=new Set;let lt;function st(e,t){e&&e.i&&(re.delete(e),e.i(t))}function ft(e,t,l,c){if(e&&e.o){if(re.has(e))return;re.add(e),lt.c.push(()=>{re.delete(e),c&&(l&&e.d(1),c())}),e.o(t)}else c&&c()}function dt(e){e&&e.c()}function ht(e,t){e&&e.l(t)}function nt(e,t,l,c){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,l),c||ve(()=>{const a=e.$$.on_mount.map(Te).filter(He);e.$$.on_destroy?e.$$.on_destroy.push(...a):ae(a),e.$$.on_mount=[]}),o.forEach(ve)}function rt(e,t){const l=e.$$;l.fragment!==null&&(ae(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function at(e,t){e.$$.dirty[0]===-1&&(Z.push(e),et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ue(e,t,l,c,s,o,a,m=[-1]){const u=pe;ee(e);const i=e.$$={fragment:null,ctx:[],props:o,update:H,not_equal:s,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Be(),dirty:m,skip_bound:!1,root:t.target||u.$$.root};a&&a(i.root);let v=!1;if(i.ctx=l?l(e,t.props||{},(y,w,...A)=>{const g=A.length?A[0]:w;return i.ctx&&s(i.ctx[y],i.ctx[y]=g)&&(!i.skip_bound&&i.bound[y]&&i.bound[y](g),v&&at(e,y)),w}):[],i.update(),v=!0,ae(i.before_update),i.fragment=c?c(i.ctx):!1,t.target){if(t.hydrate){ke();const y=_(t.target);i.fragment&&i.fragment.l(y),y.forEach(f)}else i.fragment&&i.fragment.c();t.intro&&st(e.$$.fragment),nt(e,t.target,t.anchor,t.customElement),Re(),Fe()}ee(u)}class Ve{$destroy(){rt(this,1),this.$destroy=H}$on(t,l){if(!He(l))return H;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(l),()=>{const s=c.indexOf(l);s!==-1&&c.splice(s,1)}}$set(t){this.$$set&&!Ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(e){let t,l,c,s,o,a,m,u,i,v,y,w,A,g,$,V,j,x,I,E,B;return{c(){t=d("header"),l=d("nav"),c=d("input"),s=O(),o=d("label"),a=d("img"),u=O(),i=d("ul"),v=d("li"),y=d("a"),w=L("ABOUT US"),A=O(),g=d("li"),$=d("a"),V=L("EXCHANGE POLICY"),j=O(),x=d("label"),I=d("a"),E=d("img"),this.h()},l(M){t=h(M,"HEADER",{style:!0});var D=_(t);l=h(D,"NAV",{id:!0,class:!0});var b=_(l);c=h(b,"INPUT",{type:!0,id:!0,class:!0}),s=z(b),o=h(b,"LABEL",{for:!0,class:!0});var S=_(o);a=h(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(f),u=z(b),i=h(b,"UL",{class:!0});var F=_(i);v=h(F,"LI",{class:!0});var R=_(v);y=h(R,"A",{href:!0,class:!0});var G=_(y);w=N(G,"ABOUT US"),G.forEach(f),R.forEach(f),A=z(F),g=h(F,"LI",{class:!0});var q=_(g);$=h(q,"A",{href:!0,class:!0});var X=_($);V=N(X,"EXCHANGE POLICY"),X.forEach(f),q.forEach(f),F.forEach(f),j=z(b),x=h(b,"LABEL",{class:!0});var K=_(x);I=h(K,"A",{href:!0,class:!0});var T=_(I);E=h(T,"IMG",{src:!0,alt:!0,class:!0}),T.forEach(f),K.forEach(f),b.forEach(f),D.forEach(f),this.h()},h(){r(c,"type","checkbox"),r(c,"id","menu"),r(c,"class","svelte-1xeni8q"),_e(a.src,m="assets\\menu.png")||r(a,"src",m),r(a,"alt","menus"),r(a,"class","svelte-1xeni8q"),r(o,"for","menu"),r(o,"class","menu-icon svelte-1xeni8q"),r(y,"href","about.html"),r(y,"class","svelte-1xeni8q"),r(v,"class","svelte-1xeni8q"),r($,"href","exchange.html"),r($,"class","svelte-1xeni8q"),r(g,"class","svelte-1xeni8q"),r(i,"class","svelte-1xeni8q"),_e(E.src,B="assets\\logo.png")||r(E,"src",B),r(E,"alt",""),r(E,"class","svelte-1xeni8q"),r(I,"href","index.html"),r(I,"class","svelte-1xeni8q"),r(x,"class","logo svelte-1xeni8q"),r(l,"id","navbar"),r(l,"class","svelte-1xeni8q"),Qe(t,"margin-bottom","80px")},m(M,D){U(M,t,D),n(t,l),n(l,c),n(l,s),n(l,o),n(o,a),n(l,u),n(l,i),n(i,v),n(v,y),n(y,w),n(i,A),n(i,g),n(g,$),n($,V),n(l,j),n(l,x),n(x,I),n(I,E)},p:H,i:H,o:H,d(M){M&&f(t)}}}function ct(e){var t=window.pageYOffset;return window.onscroll=function(){var l=window.pageYOffset;t>l?document.getElementById("navbar").style.top="0":(document.getElementById("navbar").style.top="-80px",document.getElementById("menu").checked=!1),t=l},[]}class _t extends Ve{constructor(t){super(),Ue(this,t,ct,it,je,{})}}function ot(e){let t,l,c,s,o,a,m,u,i,v,y,w,A,g,$,V,j,x,I,E,B,M,D,b,S,F,R,G,q,X,K,T,Y,ce,oe,W,k,ue,fe,J,de;return{c(){t=d("div"),l=d("p"),c=L("“"),s=d("i"),o=d("b"),a=L("Wholeheartedly"),m=L(" made by Aoife”"),u=O(),i=d("div"),v=d("img"),w=O(),A=d("div"),g=d("a"),$=d("p"),V=L("EXCHANGE POLICY"),j=O(),x=d("footer"),I=d("div"),E=d("ul"),B=d("li"),M=L("Please contact us via:"),D=O(),b=d("li"),S=d("a"),F=L("INSTAGRAM"),R=O(),G=d("li"),q=d("a"),X=L("FACEBOOK"),K=O(),T=d("li"),Y=d("a"),ce=L("SHOPEE"),oe=O(),W=d("li"),k=d("a"),ue=L("EMAIL"),fe=O(),J=d("div"),de=L("Copyright © Aoife Studios"),this.h()},l(p){t=h(p,"DIV",{class:!0});var C=_(t);l=h(C,"P",{class:!0});var te=_(l);c=N(te,"“"),s=h(te,"I",{});var ye=_(s);o=h(ye,"B",{});var Ee=_(o);a=N(Ee,"Wholeheartedly"),Ee.forEach(f),ye.forEach(f),m=N(te," made by Aoife”"),te.forEach(f),C.forEach(f),u=z(p),i=h(p,"DIV",{class:!0});var ge=_(i);v=h(ge,"IMG",{src:!0,alt:!0,class:!0}),ge.forEach(f),w=z(p),A=h(p,"DIV",{class:!0});var xe=_(A);g=h(xe,"A",{href:!0,class:!0});var be=_(g);$=h(be,"P",{class:!0});var Ae=_($);V=N(Ae,"EXCHANGE POLICY"),Ae.forEach(f),be.forEach(f),xe.forEach(f),j=z(p),x=h(p,"FOOTER",{class:!0});var le=_(x);I=h(le,"DIV",{class:!0});var $e=_(I);E=h($e,"UL",{class:!0});var P=_(E);B=h(P,"LI",{class:!0});var Ie=_(B);M=N(Ie,"Please contact us via:"),Ie.forEach(f),D=z(P),b=h(P,"LI",{class:!0});var Le=_(b);S=h(Le,"A",{href:!0,class:!0});var we=_(S);F=N(we,"INSTAGRAM"),we.forEach(f),Le.forEach(f),R=z(P),G=h(P,"LI",{class:!0});var Ne=_(G);q=h(Ne,"A",{href:!0,class:!0});var Oe=_(q);X=N(Oe,"FACEBOOK"),Oe.forEach(f),Ne.forEach(f),K=z(P),T=h(P,"LI",{class:!0});var ze=_(T);Y=h(ze,"A",{href:!0,class:!0});var Se=_(Y);ce=N(Se,"SHOPEE"),Se.forEach(f),ze.forEach(f),oe=z(P),W=h(P,"LI",{class:!0});var qe=_(W);k=h(qe,"A",{href:!0,class:!0});var Ce=_(k);ue=N(Ce,"EMAIL"),Ce.forEach(f),qe.forEach(f),P.forEach(f),$e.forEach(f),fe=z(le),J=h(le,"DIV",{class:!0});var Pe=_(J);de=N(Pe,"Copyright © Aoife Studios"),Pe.forEach(f),le.forEach(f),this.h()},h(){r(l,"class","svelte-1yl3tz9"),r(t,"class","slogan svelte-1yl3tz9"),_e(v.src,y="assets\\logotrans.png")||r(v,"src",y),r(v,"alt",""),r(v,"class","svelte-1yl3tz9"),r(i,"class","logo svelte-1yl3tz9"),r($,"class","svelte-1yl3tz9"),r(g,"href","exchange.html"),r(g,"class","svelte-1yl3tz9"),r(A,"class","exchange svelte-1yl3tz9"),r(B,"class","contact svelte-1yl3tz9"),r(S,"href","https://www.instagram.com/aoifestudios/"),r(S,"class","svelte-1yl3tz9"),r(b,"class","svelte-1yl3tz9"),r(q,"href","https://www.facebook.com/profile.php?id=100091733337326"),r(q,"class","svelte-1yl3tz9"),r(G,"class","svelte-1yl3tz9"),r(Y,"href","https://shopee.vn/aoifestudios"),r(Y,"class","svelte-1yl3tz9"),r(T,"class","svelte-1yl3tz9"),r(k,"href","mailto:aoifestudios@gmail.com"),r(k,"class","svelte-1yl3tz9"),r(W,"class","svelte-1yl3tz9"),r(E,"class","svelte-1yl3tz9"),r(I,"class","footer-nav svelte-1yl3tz9"),r(J,"class","copyright svelte-1yl3tz9"),r(x,"class","svelte-1yl3tz9")},m(p,C){U(p,t,C),n(t,l),n(l,c),n(l,s),n(s,o),n(o,a),n(l,m),U(p,u,C),U(p,i,C),n(i,v),U(p,w,C),U(p,A,C),n(A,g),n(g,$),n($,V),U(p,j,C),U(p,x,C),n(x,I),n(I,E),n(E,B),n(B,M),n(E,D),n(E,b),n(b,S),n(S,F),n(E,R),n(E,G),n(G,q),n(q,X),n(E,K),n(E,T),n(T,Y),n(Y,ce),n(E,oe),n(E,W),n(W,k),n(k,ue),n(x,fe),n(x,J),n(J,de)},p:H,i:H,o:H,d(p){p&&f(t),p&&f(u),p&&f(i),p&&f(w),p&&f(A),p&&f(j),p&&f(x)}}}class mt extends Ve{constructor(t){super(),Ue(this,t,null,ot,je,{})}}export{mt as F,_t as N,Ve as S,ve as a,O as b,dt as c,h as d,d as e,_ as f,ht as g,z as h,Ue as i,f as j,N as k,_e as l,r as m,U as n,nt as o,n as p,ut as q,st as r,je as s,L as t,ft as u,rt as v,H as w};