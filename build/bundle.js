var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,e,n){t.$$.on_destroy.push(a(e,n))}function l(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(e){return e&&c(e.destroy)?e.destroy:t}function h(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function v(){return y(" ")}function x(){return y("")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r||n[r]&&n[r].set?t[r]=e[r]:w(t,r,e[r])}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}let C;function E(t){C=t}function P(){if(!C)throw new Error("Function called outside component initialization");return C}function L(t){P().$$.on_mount.push(t)}function S(){const t=P();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}function j(t,e){P().$$.context.set(t,e)}function A(t){return P().$$.context.get(t)}const O=[],R=[],M=[],T=[],N=Promise.resolve();let q=!1;function B(t){M.push(t)}let D=!1;const H=new Set;function I(){if(!D){D=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];E(e),K(e.$$)}for(O.length=0;R.length;)R.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];H.has(e)||(H.add(e),e())}M.length=0}while(O.length);for(;T.length;)T.pop()();q=!1,D=!1,H.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const U=new Set;let G;function z(){G={r:0,c:[],p:G}}function F(){G.r||o(G.c),G=G.p}function Y(t,e){t&&t.i&&(U.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),G.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Q(t,e){const n={},r={},o={$$scope:1};let c=t.length;for(;c--;){const s=t[c],a=e[c];if(a){for(const t in s)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[c]=a}else for(const t in s)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e,r){const{fragment:s,on_mount:a,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,r),B(()=>{const e=a.map(n).filter(c);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(B)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(O.push(t),q||(q=!0,N.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,c,s,a,i,l=[-1]){const u=C;E(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=c?c(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&tt(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&Y(e.$$.fragment),X(e,n.target,n.anchor),I()}E(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const rt=[];function ot(e,n=t){let r;const o=[];function c(t){if(s(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,a=t){const i=[s,a];return o.push(i),1===o.length&&(r=n(c)||t),s(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ct(e,n,r){const s=!Array.isArray(e),i=s?[e]:e,l=n.length<2;return{subscribe:ot(r,e=>{let r=!1;const u=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=n(s?u[0]:u,e);l?e(r):p=c(r)?r:t},h=i.map((t,e)=>a(t,t=>{u[e]=t,f&=~(1<<e),r&&d()},()=>{f|=1<<e}));return r=!0,d(),function(){o(h),p()}}).subscribe}}const st={},at={};function it(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const lt=function(t,e){const n=[];let r=it(t);return{get location(){return r},listen(e){n.push(e);const o=()=>{r=it(t),e({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=n.indexOf(e);n.splice(r,1)}},navigate(e,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?t.history.replaceState(o,null,e):t.history.pushState(o,null,e)}catch(n){t.location[c?"replace":"assign"](e)}r=it(t),n.forEach(t=>t({location:r,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(t,o,c){const[s,a=""]=c.split("?");e++,n.push({pathname:s,search:a}),r.push(t)},replaceState(t,o,c){const[s,a=""]=c.split("?");n[e]={pathname:s,search:a},r[e]=t}}}}()),{navigate:ut}=lt,ft=/^:(.+)/;function pt(t,e){return t.substr(0,e.length)===e}function dt(t){return"*"===t[0]}function ht(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function $t(t){return t.replace(/(^\/+|\/+$)/g,"")}function mt(t,e){return{route:t,score:t.default?0:ht(t.path).reduce((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return ft.test(t)}(e)?dt(e)?t-=5:t+=3:t+=2:t+=1,t),0),index:e}}function gt(t,e){let n,r;const[o]=e.split("?"),c=ht(o),s=""===c[0],a=function(t){return t.map(mt).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,o=a.length;t<o;t++){const o=a[t].route;let i=!1;if(o.default){r={route:o,params:{},uri:e};continue}const l=ht(o.path),u={},f=Math.max(c.length,l.length);let p=0;for(;p<f;p++){const t=l[p],e=c[p];if(void 0!==t&&dt(t)){u["*"===t?"*":t.slice(1)]=c.slice(p).map(decodeURIComponent).join("/");break}if(void 0===e){i=!0;break}let n=ft.exec(t);if(n&&!s){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n={route:o,params:u,uri:"/"+c.slice(0,p).join("/")};break}}return n||r||null}function yt(t,e){return t+(e?"?"+e:"")}function vt(t,e){return $t("/"===e?t:`${$t(t)}/${$t(e)}`)+"/"}function xt(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bt(t){let e;const n=t[16].default,r=l(n,t,t[15],null);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&32768&e&&r.p(u(n,t,t[15],null),f(n,t[15],e,null))},i(t){e||(Y(r,t),e=!0)},o(t){J(r,t),e=!1},d(t){r&&r.d(t)}}}function wt(t,e,n){let r,o,c,{basepath:s="/"}=e,{url:a=null}=e;const l=A(st),u=A(at),f=ot([]);i(t,f,t=>n(8,c=t));const p=ot(null);let d=!1;const h=l||ot(a?{pathname:a}:lt.location);i(t,h,t=>n(7,o=t));const $=u?u.routerBase:ot({path:s,uri:s});i(t,$,t=>n(6,r=t));const m=ct([$,p],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:r,uri:o}=e;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:o}});function g(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=vt(e,n),"undefined"==typeof window){if(d)return;const e=function(t,e){return gt([t],e)}(t,o.pathname);e&&(p.set(e),d=!0)}else f.update(e=>(e.push(t),e))}function y(t){f.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}l||(L(()=>lt.listen(t=>{h.set(t.location)})),j(st,h)),j(at,{activeRoute:p,base:$,routerBase:m,registerRoute:g,unregisterRoute:y});let{$$slots:v={},$$scope:x}=e;return t.$set=t=>{"basepath"in t&&n(3,s=t.basepath),"url"in t&&n(4,a=t.url),"$$scope"in t&&n(15,x=t.$$scope)},t.$$.update=()=>{if(64&t.$$.dirty){const{path:t}=r;f.update(e=>(e.forEach(e=>e.path=vt(t,e._path)),e))}if(384&t.$$.dirty){const t=gt(c,o.pathname);p.set(t)}},[f,h,$,s,a,d,r,o,c,l,u,p,m,g,y,x,v]}class kt extends nt{constructor(t){super(),et(this,t,wt,bt,s,{basepath:3,url:4})}}const _t=t=>({params:2&t,location:16&t}),Ct=t=>({params:t[1],location:t[4]});function Et(t){let e,n,r,o;const c=[Lt,Pt],s=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=s[e]=c[e](t),{c(){n.c(),r=x()},m(t,n){s[e].m(t,n),$(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?s[e].p(t,o):(z(),J(s[i],1,1,()=>{s[i]=null}),F(),n=s[e],n||(n=s[e]=c[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){J(n),o=!1},d(t){s[e].d(t),t&&m(r)}}}function Pt(t){let e;const n=t[13].default,r=l(n,t,t[12],Ct);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&4114&e&&r.p(u(n,t,t[12],Ct),f(n,t[12],e,_t))},i(t){e||(Y(r,t),e=!0)},o(t){J(r,t),e=!1},d(t){r&&r.d(t)}}}function Lt(t){let n,r;const o=[{location:t[4]},t[1],t[2]];var c=t[0];function s(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(c)var a=new c(s());return{c(){a&&W(a.$$.fragment),n=x()},m(t,e){a&&X(a,t,e),$(t,n,e),r=!0},p(t,e){const r=22&e?Q(o,[16&e&&{location:t[4]},2&e&&V(t[1]),4&e&&V(t[2])]):{};if(c!==(c=t[0])){if(a){z();const t=a;J(t.$$.fragment,1,0,()=>{Z(t,1)}),F()}c?(W((a=new c(s())).$$.fragment),Y(a.$$.fragment,1),X(a,n.parentNode,n)):a=null}else c&&a.$set(r)},i(t){r||(a&&Y(a.$$.fragment,t),r=!0)},o(t){a&&J(a.$$.fragment,t),r=!1},d(t){t&&m(n),a&&Z(a,t)}}}function St(t){let e,n,r=null!==t[3]&&t[3].route===t[7]&&Et(t);return{c(){r&&r.c(),e=x()},m(t,o){r&&r.m(t,o),$(t,e,o),n=!0},p(t,[n]){null!==t[3]&&t[3].route===t[7]?r?(r.p(t,n),Y(r,1)):(r=Et(t),r.c(),Y(r,1),r.m(e.parentNode,e)):r&&(z(),J(r,1,1,()=>{r=null}),F())},i(t){n||(Y(r),n=!0)},o(t){J(r),n=!1},d(t){r&&r.d(t),t&&m(e)}}}function jt(t,n,r){let o,c,{path:s=""}=n,{component:a=null}=n;const{registerRoute:l,unregisterRoute:u,activeRoute:f}=A(at);i(t,f,t=>r(3,o=t));const d=A(st);i(t,d,t=>r(4,c=t));const h={path:s,default:""===s};let $={},m={};var g;l(h),"undefined"!=typeof window&&(g=()=>{u(h)},P().$$.on_destroy.push(g));let{$$slots:y={},$$scope:v}=n;return t.$set=t=>{r(11,n=e(e({},n),p(t))),"path"in t&&r(8,s=t.path),"component"in t&&r(0,a=t.component),"$$scope"in t&&r(12,v=t.$$scope)},t.$$.update=()=>{8&t.$$.dirty&&o&&o.route===h&&r(1,$=o.params);{const{path:t,component:e,...o}=n;r(2,m=o)}},n=p(n),[a,$,m,o,c,f,d,h,s,l,u,n,v,y]}class At extends nt{constructor(t){super(),et(this,t,jt,St,s,{path:8,component:0})}}function Ot(t){let n,r,o;const c=t[16].default,s=l(c,t,t[15],null);let a=[{href:t[0]},{"aria-current":t[2]},t[1]],i={};for(let t=0;t<a.length;t+=1)i=e(i,a[t]);return{c(){n=g("a"),s&&s.c(),k(n,i)},m(e,c,a){$(e,n,c),s&&s.m(n,null),r=!0,a&&o(),o=b(n,"click",t[5])},p(t,[e]){s&&s.p&&32768&e&&s.p(u(c,t,t[15],null),f(c,t[15],e,null)),k(n,Q(a,[1&e&&{href:t[0]},4&e&&{"aria-current":t[2]},2&e&&t[1]]))},i(t){r||(Y(s,t),r=!0)},o(t){J(s,t),r=!1},d(t){t&&m(n),s&&s.d(t),o()}}}function Rt(t,e,n){let r,o,{to:c="#"}=e,{replace:s=!1}=e,{state:a={}}=e,{getProps:l=(()=>({}))}=e;const{base:u}=A(at);i(t,u,t=>n(12,r=t));const f=A(st);i(t,f,t=>n(13,o=t));const p=S();let d,h,$,m;let g,{$$slots:y={},$$scope:v}=e;return t.$set=t=>{"to"in t&&n(6,c=t.to),"replace"in t&&n(7,s=t.replace),"state"in t&&n(8,a=t.state),"getProps"in t&&n(9,l=t.getProps),"$$scope"in t&&n(15,v=t.$$scope)},t.$$.update=()=>{4160&t.$$.dirty&&n(0,d="/"===c?r.uri:function(t,e){if(pt(t,"/"))return t;const[n,r]=t.split("?"),[o]=e.split("?"),c=ht(n),s=ht(o);if(""===c[0])return yt(o,r);if(!pt(c[0],".")){return yt(("/"===o?"":"/")+s.concat(c).join("/"),r)}const a=s.concat(c),i=[];return a.forEach(t=>{".."===t?i.pop():"."!==t&&i.push(t)}),yt("/"+i.join("/"),r)}(c,r.uri)),8193&t.$$.dirty&&n(10,h=pt(o.pathname,d)),8193&t.$$.dirty&&n(11,$=d===o.pathname),2048&t.$$.dirty&&n(2,g=$?"page":void 0),11777&t.$$.dirty&&n(1,m=l({location:o,href:d,isPartiallyCurrent:h,isCurrent:$}))},[d,m,g,u,f,function(t){if(p("click",t),xt(t)){t.preventDefault();const e=o.pathname===d||s;ut(d,{state:a,replace:e})}},c,s,a,l,h,$,r,o,p,v,y]}class Mt extends nt{constructor(t){super(),et(this,t,Rt,Ot,s,{to:6,replace:7,state:8,getProps:9})}}function Tt(t){function e(t){const e=t.currentTarget;""===e.target&&function(t){const e=location.host;return t.host==e||0===t.href.indexOf("https://"+e)||0===t.href.indexOf("http://"+e)}(e)&&xt(t)&&(t.preventDefault(),ut(e.pathname+e.search,{replace:e.hasAttribute("replace")}))}return t.addEventListener("click",e),{destroy(){t.removeEventListener("click",e)}}}function Nt(t){let e,n,r,o,c,s,a,i=t[0].name+"";return{c(){e=g("figure"),n=g("img"),c=v(),s=g("figcaption"),a=y(i),n.src!==(r=t[0].image)&&w(n,"src",r),w(n,"alt",o=t[0].name),w(n,"class","svelte-prvxpp"),w(s,"class","svelte-prvxpp")},m(t,r){$(t,e,r),h(e,n),h(e,c),h(e,s),h(s,a)},p(t,e){1&e&&n.src!==(r=t[0].image)&&w(n,"src",r),1&e&&o!==(o=t[0].name)&&w(n,"alt",o),1&e&&i!==(i=t[0].name+"")&&_(a,i)},d(t){t&&m(e)}}}function qt(t){let e,n;const r=new Mt({props:{to:"/svelte-rick-and-morty/character/"+t[0].id,$$slots:{default:[Nt]},$$scope:{ctx:t}}});return{c(){e=g("div"),W(r.$$.fragment),w(e,"class","character svelte-prvxpp")},m(t,o){$(t,e,o),X(r,e,null),n=!0},p(t,[e]){const n={};1&e&&(n.to="/svelte-rick-and-morty/character/"+t[0].id),5&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i(t){n||(Y(r.$$.fragment,t),n=!0)},o(t){J(r.$$.fragment,t),n=!1},d(t){t&&m(e),Z(r)}}}function Bt(t,e,n){let{character:r}=e;const o=r.id;return t.$set=t=>{"character"in t&&n(0,r=t.character)},[r,o]}class Dt extends nt{constructor(t){super(),et(this,t,Bt,qt,s,{character:0,id:1})}get id(){return this.$$.ctx[1]}}function Ht(t,e,n){const r=t.slice();return r[6]=e[n],r[8]=n,r}function It(t){let e;return{c(){e=g("p"),e.textContent="Loading...",w(e,"class","loading")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function Kt(t){let e;const n=new Dt({props:{character:t[6]}});return{c(){W(n.$$.fragment)},m(t,r){X(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.character=t[6]),n.$set(r)},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function Ut(e){let n,r;return{c(){n=g("button"),n.textContent="Previous"},m(t,o,c){$(t,n,o),c&&r(),r=b(n,"click",e[3])},p:t,d(t){t&&m(n),r()}}}function Gt(e){let n,r;return{c(){n=g("button"),n.textContent="Next"},m(t,o,c){$(t,n,o),c&&r(),r=b(n,"click",e[4])},p:t,d(t){t&&m(n),r()}}}function zt(t){let e,n,r,o,c,s,a=t[0],i=[];for(let e=0;e<a.length;e+=1)i[e]=Kt(Ht(t,a,e));const l=t=>J(i[t],1,1,()=>{i[t]=null});let u=null;a.length||(u=It());let f=1!=t[2]&&Ut(t),p=t[2]<t[1]&&Gt(t);return{c(){e=g("div"),n=g("div");for(let t=0;t<i.length;t+=1)i[t].c();u&&u.c(),r=v(),o=g("div"),f&&f.c(),c=v(),p&&p.c(),w(n,"class","library svelte-1hmqthe")},m(t,a){$(t,e,a),h(e,n);for(let t=0;t<i.length;t+=1)i[t].m(n,null);u&&u.m(n,null),h(e,r),h(e,o),f&&f.m(o,null),h(o,c),p&&p.m(o,null),s=!0},p(t,[e]){if(1&e){let r;for(a=t[0],r=0;r<a.length;r+=1){const o=Ht(t,a,r);i[r]?(i[r].p(o,e),Y(i[r],1)):(i[r]=Kt(o),i[r].c(),Y(i[r],1),i[r].m(n,null))}for(z(),r=a.length;r<i.length;r+=1)l(r);F(),a.length?u&&(u.d(1),u=null):u||(u=It(),u.c(),u.m(n,null))}1!=t[2]?f?f.p(t,e):(f=Ut(t),f.c(),f.m(o,c)):f&&(f.d(1),f=null),t[2]<t[1]?p?p.p(t,e):(p=Gt(t),p.c(),p.m(o,null)):p&&(p.d(1),p=null)},i(t){if(!s){for(let t=0;t<a.length;t+=1)Y(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)J(i[t]);s=!1},d(t){t&&m(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t),u&&u.d(),f&&f.d(),p&&p.d()}}}function Ft(t,e,n){let r,o=[],c=1;L(()=>{s(1)});const s=async t=>{let e="https://rickandmortyapi.com/api/character/?page="+t;const s=await fetch(e),a=await s.json();n(0,o=a.results),n(1,r=a.info.pages),n(2,c=t)};return[o,r,c,()=>{s(c-1)},()=>{s(c+1)}]}class Yt extends nt{constructor(t){super(),et(this,t,Ft,zt,s,{})}}function Jt(e){let n;return{c(){n=g("p"),n.textContent="Loading..."},m(t,e){$(t,n,e)},p:t,d(t){t&&m(n)}}}function Qt(t){let e,n,r,o,c,s,a,i,l,u,f,p,d,x,b,k,C,E,P,L,S,j,A,O,R,M,T,N,q,B,D,H,I,K,U=t[0].name+"",G=t[0].gender+"",z=t[0].status+"",F=t[0].species+"",Y=t[0].origin.name+"",J=t[0].created+"",Q=t[0].url+"";return{c(){e=g("div"),n=g("div"),r=g("figure"),o=g("img"),a=v(),i=g("div"),l=g("h1"),u=y(U),f=v(),p=g("p"),d=g("strong"),d.textContent="Gender: ",x=y(G),b=v(),k=g("p"),C=g("strong"),C.textContent="Status: ",E=y(z),P=v(),L=g("p"),S=g("strong"),S.textContent="Specie: ",j=y(F),A=v(),O=g("p"),R=g("strong"),R.textContent="Origin: ",M=y(Y),T=v(),N=g("p"),q=g("strong"),q.textContent="Created: ",B=y(J),D=v(),H=g("p"),I=g("strong"),I.textContent="Url: ",K=y(Q),o.src!==(c=t[0].image)&&w(o,"src",c),w(o,"alt",s=t[0].name),w(o,"class","svelte-1mr1p33"),w(r,"class","picture"),w(n,"class","aside svelte-1mr1p33"),w(l,"class","svelte-1mr1p33"),w(i,"class","description svelte-1mr1p33"),w(e,"class","character svelte-1mr1p33")},m(t,c){$(t,e,c),h(e,n),h(n,r),h(r,o),h(e,a),h(e,i),h(i,l),h(l,u),h(i,f),h(i,p),h(p,d),h(p,x),h(i,b),h(i,k),h(k,C),h(k,E),h(i,P),h(i,L),h(L,S),h(L,j),h(i,A),h(i,O),h(O,R),h(O,M),h(i,T),h(i,N),h(N,q),h(N,B),h(i,D),h(i,H),h(H,I),h(H,K)},p(t,e){1&e&&o.src!==(c=t[0].image)&&w(o,"src",c),1&e&&s!==(s=t[0].name)&&w(o,"alt",s),1&e&&U!==(U=t[0].name+"")&&_(u,U),1&e&&G!==(G=t[0].gender+"")&&_(x,G),1&e&&z!==(z=t[0].status+"")&&_(E,z),1&e&&F!==(F=t[0].species+"")&&_(j,F),1&e&&Y!==(Y=t[0].origin.name+"")&&_(M,Y),1&e&&J!==(J=t[0].created+"")&&_(B,J),1&e&&Q!==(Q=t[0].url+"")&&_(K,Q)},d(t){t&&m(e)}}}function Vt(e){let n;function r(t,e){return t[0]?Qt:Jt}let o=r(e),c=o(e);return{c(){n=g("div"),c.c(),w(n,"class","wrap")},m(t,e){$(t,n,e),c.m(n,null)},p(t,[e]){o===(o=r(t))&&c?c.p(t,e):(c.d(1),c=o(t),c&&(c.c(),c.m(n,null)))},i:t,o:t,d(t){t&&m(n),c.d()}}}function Wt(t,e,n){let r,{id:o}=e,c="https://rickandmortyapi.com/api/character/"+o;return L(async()=>{const t=await fetch(c);n(0,r=await t.json())}),t.$set=t=>{"id"in t&&n(1,o=t.id)},[r,o]}class Xt extends nt{constructor(t){super(),et(this,t,Wt,Vt,s,{id:1})}}function Zt(e){let n;return{c(){n=g("div"),n.innerHTML='<h2>Stay in Touch</h2> \n  <p>You can also find me around the web.</p> \n  <ul class="vcard svelte-1dhdtdf"><li>Github: <a href="https://github.com/dcyar/" class="vcard-link svelte-1dhdtdf">dcyar</a></li> \n    <li>Twitter: <a href="https://twitter.com/dcyar_/" class="vcard-link svelte-1dhdtdf">@dcyar_</a></li></ul>',w(n,"class","about svelte-1dhdtdf")},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class te extends nt{constructor(t){super(),et(this,t,null,Zt,s,{})}}function ee(e){let n;return{c(){n=g("footer"),n.innerHTML='<p>Made with <a href="https://svelte.dev" target="_blank" class="svelte-1yybqp3">Svelte</a> by <a href="https://github.com/dcyar/" target="_blank" class="svelte-1yybqp3">@dcyar</a></p>',w(n,"class","footer svelte-1yybqp3")},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class ne extends nt{constructor(t){super(),et(this,t,null,ee,s,{})}}function re(t){let e;const n=new Xt({props:{id:t[0].id}});return{c(){W(n.$$.fragment)},m(t,r){X(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.id=t[0].id),n.$set(r)},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function oe(t){let e,n,r,c,s,a,i,l,u,f,p,y;const x=new At({props:{path:"/svelte-rick-and-morty/",component:Yt}}),b=new At({props:{path:"/svelte-rick-and-morty/character/:id",$$slots:{default:[re,({params:t})=>({0:t}),({params:t})=>t?1:0]},$$scope:{ctx:t}}}),k=new At({props:{path:"/svelte-rick-and-morty/about",component:te}});return{c(){e=g("nav"),n=g("a"),n.textContent="Home",c=v(),s=g("a"),s.textContent="About",i=v(),l=g("div"),W(x.$$.fragment),u=v(),W(b.$$.fragment),f=v(),W(k.$$.fragment),w(n,"href","/svelte-rick-and-morty/"),w(n,"class","link svelte-1na0p4x"),w(s,"href","/svelte-rick-and-morty/about"),w(s,"class","link svelte-1na0p4x"),w(e,"class","navbar svelte-1na0p4x"),w(l,"class","container svelte-1na0p4x")},m(t,m,g){$(t,e,m),h(e,n),h(e,c),h(e,s),$(t,i,m),$(t,l,m),X(x,l,null),h(l,u),X(b,l,null),h(l,f),X(k,l,null),p=!0,g&&o(y),y=[d(r=Tt.call(null,n)),d(a=Tt.call(null,s))]},p(t,e){const n={};3&e&&(n.$$scope={dirty:e,ctx:t}),b.$set(n)},i(t){p||(Y(x.$$.fragment,t),Y(b.$$.fragment,t),Y(k.$$.fragment,t),p=!0)},o(t){J(x.$$.fragment,t),J(b.$$.fragment,t),J(k.$$.fragment,t),p=!1},d(t){t&&m(e),t&&m(i),t&&m(l),Z(x),Z(b),Z(k),o(y)}}}function ce(t){let e,n,r,o,c,s,a;const i=new kt({props:{url:se,$$slots:{default:[oe]},$$scope:{ctx:t}}}),l=new ne({});return{c(){e=g("main"),n=g("h1"),n.textContent="Rick and Morty API!",r=v(),o=g("p"),o.textContent="This is an example with Svelte and Rick and Morty API",c=v(),W(i.$$.fragment),s=v(),W(l.$$.fragment),w(n,"class","svelte-1na0p4x"),w(o,"class","subtitle"),w(e,"class","svelte-1na0p4x")},m(t,u){$(t,e,u),h(e,n),h(e,r),h(e,o),h(e,c),X(i,e,null),h(e,s),X(l,e,null),a=!0},p(t,[e]){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n)},i(t){a||(Y(i.$$.fragment,t),Y(l.$$.fragment,t),a=!0)},o(t){J(i.$$.fragment,t),J(l.$$.fragment,t),a=!1},d(t){t&&m(e),Z(i),Z(l)}}}let se="";return new class extends nt{constructor(t){super(),et(this,t,null,ce,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
