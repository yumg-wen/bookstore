(function(e){function t(t){for(var a,c,o=t[0],i=t[1],s=t[2],l=0,b=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(b.length)b.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-53b5053b":"6ff8e9b0","chunk-0f4b05ec":"f5aa0dcb","chunk-11a6dcd6":"48c6367b","chunk-3dc56c9c":"0a0aac2d","chunk-5c343f68":"eea31367","chunk-753441b6":"5d4b8959","chunk-a729a140":"4c3947ef","chunk-b947c916":"bc86cca3","chunk-b9c28a3e":"7b289f0e","chunk-ea6467c2":"57012903","chunk-2f39ceea":"89732e96","chunk-56ea6eb8":"6fa7b120"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-53b5053b":1,"chunk-11a6dcd6":1,"chunk-3dc56c9c":1,"chunk-5c343f68":1,"chunk-a729a140":1,"chunk-b947c916":1,"chunk-b9c28a3e":1,"chunk-ea6467c2":1,"chunk-2f39ceea":1,"chunk-56ea6eb8":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-53b5053b":"0f17eea0","chunk-0f4b05ec":"31d6cfe0","chunk-11a6dcd6":"ace08982","chunk-3dc56c9c":"c43dd43a","chunk-5c343f68":"3d5833d2","chunk-753441b6":"31d6cfe0","chunk-a729a140":"ebeecf27","chunk-b947c916":"ae23114c","chunk-b9c28a3e":"047637a5","chunk-ea6467c2":"c2e034f2","chunk-2f39ceea":"51faadd4","chunk-56ea6eb8":"5e389b99"}[e]+".css",r=i.p+a,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return t()}var b=document.getElementsByTagName("style");for(o=0;o<b.length;o++){s=b[o],l=s.getAttribute("data-href");if(l===a||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete c[e],d.parentNode.removeChild(d),n(u)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var b=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",b.name="ChunkLoadError",b.type=a,b.request=c,n[1](b)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bookstore/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1bab":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("e7e5");var a=n("d399"),c=n("bc3a"),r=n.n(c),u=n("a18c");function o(e){var t=r.a.create({baseURL:"https://api.shop.eduwork.cn",timeout:5e3});return t.interceptors.request.use((function(e){var t=window.localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){})),t.interceptors.response.use((function(e){return e.data?e.data:e}),(function(e){console.log(e),"401"==e.response.status&&(a["a"].fail("請先登入"),u["a"].push({path:"/login"}))})),t(e)}},4360:function(e,t,n){"use strict";var a=n("5502"),c={},r=c,u={setIsLogin:function(e,t){e.user.isLogin=t},addCar:function(e,t){e.user.carCount=t.count}},o=u,i=n("f290"),s={updateCar:function(e){var t=e.commit;Object(i["d"])().then((function(e){t("addCar",{count:e.data.length||0})}))}},l=s,b={user:{isLogin:!!window.localStorage.getItem("token"),carCount:0}};t["a"]=Object(a["a"])({state:b,mutations:o,actions:l,getters:r})},"44f6":function(e,t,n){e.exports=n.p+"img/book.f6d5946e.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("66cf");var a=n("343b"),c=(n("7844"),n("5596")),r=(n("4b0a"),n("2bb1")),u=(n("18e9"),n("471a")),o=(n("570a"),n("1d36")),i=(n("a39e"),n("241e")),s=(n("5d17"),n("f9bd")),l=(n("342a"),n("1437")),b=(n("da3c"),n("0b33")),d=(n("bda7"),n("5e46")),f=(n("9cb7"),n("66fd")),h=(n("4056"),n("44bf")),p=(n("66b9"),n("b650")),m=(n("5f1a"),n("a3e2")),k=(n("38d5"),n("772a")),g=(n("be7f"),n("565f")),v=(n("0653"),n("34e9")),O=(n("3c32"),n("417e")),j=(n("a909"),n("3acc")),y=(n("4467"),n("c36e")),P=(n("be39"),n("efa0")),w=(n("f06a"),n("20fb")),A=(n("c3a6"),n("ad06")),C=(n("869a"),n("6869")),R=(n("acb7"),n("67bb")),_=(n("8a58"),n("e41f")),S=(n("3df5"),n("2830")),E=(n("0ec5"),n("21ab")),L=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),q={id:"nav"},x=Object(L["i"])("div",{class:"icon"},[Object(L["i"])("i",{class:"fa-solid fa-house"})],-1),I=Object(L["i"])("div",null,"首頁",-1),T=Object(L["i"])("div",{class:"icon"},[Object(L["i"])("i",{class:"fa-solid fa-table"})],-1),N=Object(L["i"])("div",null,"分類",-1),B={class:"icon"},D=Object(L["i"])("i",{class:"fa-solid fa-cart-shopping"},null,-1),M=Object(L["i"])("div",null,"購物車",-1),H=Object(L["i"])("div",{class:"icon"},[Object(L["i"])("i",{class:"fa-solid fa-user"})],-1),J=Object(L["i"])("div",null,"我的",-1);function U(e,t,n,a,c,r){var u=Object(L["I"])("router-view"),o=Object(L["I"])("router-link"),i=Object(L["I"])("van-badge");return Object(L["A"])(),Object(L["h"])(L["a"],null,[Object(L["k"])(u),Object(L["i"])("div",q,[Object(L["k"])(o,{class:"table-bar-item",to:"/"},{default:Object(L["R"])((function(){return[x,I]})),_:1}),Object(L["k"])(o,{class:"table-bar-item",to:"/category"},{default:Object(L["R"])((function(){return[T,N]})),_:1}),Object(L["k"])(o,{class:"table-bar-item",to:"/shopcar"},{default:Object(L["R"])((function(){return[Object(L["i"])("div",B,[Object(L["k"])(i,{content:e.$store.state.user.carCount,max:"9"},{default:Object(L["R"])((function(){return[D]})),_:1},8,["content"])]),M]})),_:1}),Object(L["k"])(o,{class:"table-bar-item",to:"/profile"},{default:Object(L["R"])((function(){return[H,J]})),_:1})])],64)}var z=n("5502"),F={name:"app",setup:function(){var e=Object(z["b"])();return Object(L["y"])((function(){e.dispatch("updateCar")})),{}}},K=(n("821d"),n("6b0d")),$=n.n(K);const G=$()(F,[["render",U]]);var Q=G,V=n("a18c"),W=n("4360");n("157a");Object(L["e"])(Q).use(W["a"]).use(V["a"]).use(a["a"],{loading:n("44f6")}).use(c["b"]).use(r["b"]).use(u["b"]).use(o["a"]).use(i["a"]).use(s["a"]).use(l["a"]).use(b["a"]).use(d["a"]).use(f["a"]).use(h["b"]).use(p["b"]).use(m["b"]).use(k["b"]).use(g["b"]).use(v["a"]).use(O["a"]).use(j["a"]).use(y["a"]).use(P["a"]).use(w["a"]).use(A["b"]).use(C["a"]).use(R["a"]).use(_["b"]).use(S["a"]).use(E["a"]).mount("#app")},"821d":function(e,t,n){"use strict";n("e165")},a18c:function(e,t,n){"use strict";n("9a83");var a=n("f564"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("7a23"),n("6c02")),r=n("4360"),u=function(){return Promise.all([n.e("chunk-ea6467c2"),n.e("chunk-2f39ceea")]).then(n.bind(null,"77b8"))},o=function(){return Promise.all([n.e("chunk-ea6467c2"),n.e("chunk-56ea6eb8")]).then(n.bind(null,"bb51"))},i=function(){return Promise.all([n.e("chunk-53b5053b"),n.e("chunk-3dc56c9c")]).then(n.bind(null,"6ab7"))},s=function(){return Promise.all([n.e("chunk-53b5053b"),n.e("chunk-5c343f68")]).then(n.bind(null,"893c"))},l=function(){return Promise.all([n.e("chunk-53b5053b"),n.e("chunk-b9c28a3e")]).then(n.bind(null,"4c16"))},b=function(){return Promise.all([n.e("chunk-53b5053b"),n.e("chunk-753441b6")]).then(n.bind(null,"329a"))},d=function(){return Promise.all([n.e("chunk-53b5053b"),n.e("chunk-0f4b05ec")]).then(n.bind(null,"1fa6"))},f=function(){return Promise.all([n.e("chunk-53b5053b"),n.e("chunk-11a6dcd6")]).then(n.bind(null,"34b9"))},h=function(){return Promise.all([n.e("chunk-53b5053b"),n.e("chunk-b947c916")]).then(n.bind(null,"9c5f"))},p=function(){return Promise.all([n.e("chunk-53b5053b"),n.e("chunk-a729a140")]).then(n.bind(null,"70bd"))},m=[{path:"",name:"DefaultHome",component:u,meta:{title:"圖書商城"}},{path:"/home",name:"Home",component:u,meta:{title:"圖書商城"}},{path:"/category",name:"category",component:o,meta:{title:"圖書商城-分類"}},{path:"/detail",name:"Detail",component:i,meta:{title:"圖書商城-商品詳情"}},{path:"/Profile",name:"Profile",component:s,meta:{title:"圖書商城-個人中心",isAuthRequired:!0}},{path:"/ShopCar",name:"ShopCar",component:l,meta:{title:"圖書商城-購物車",isAuthRequired:!0}},{path:"/register",name:"Register",component:b,meta:{title:"圖書商城-註冊中心"}},{path:"/login",name:"Login",component:d,meta:{title:"圖書商城-登入中心",isAuthRequired:!0}},{path:"/address",name:"Address",component:f,meta:{title:"地址管理",isAuthRequired:!0}},{path:"/addressEdit",name:"addressEdit",component:h,meta:{title:"編輯地址",isAuthRequired:!0}},{path:"/createOrder",name:"createOrder",component:p,meta:{title:"訂單預覽",isAuthRequired:!0}}],k=Object(c["a"])({history:Object(c["b"])("/bookstore/"),routes:m});k.beforeEach((function(e,t,n){e.meta.isAuthRequired&&!1===r["a"].state.user.isLogin?(Object(a["a"])("尚未登入，請先登入"),"/login"==e.path?n():n("/login")):n(),document.title=e.meta.title})),t["a"]=k},e165:function(e,t,n){},f290:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i}));var a=n("1bab");function c(e){return Object(a["a"])({url:"/api/carts",method:"post",data:e})}function r(e,t){return Object(a["a"])({url:"/api/carts/".concat(e),method:"put",data:t})}function u(e){return Object(a["a"])({url:"/api/carts/checked",method:"patch",data:e})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(a["a"])({url:"/api/carts?"+e})}function i(e){return Object(a["a"])({url:"/api/carts/".concat(e),method:"delete"})}}});
//# sourceMappingURL=app.24514990.js.map