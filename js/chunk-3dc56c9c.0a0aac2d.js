(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dc56c9c"],{"0fb3":function(t,e,c){},3970:function(t,e,c){},"5a4e":function(t,e,c){},"6a41":function(t,e,c){"use strict";c("0fb3")},"6ab7":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var n=c("7a23"),a=Object(n["j"])("加入購物車"),i=Object(n["j"])("立即購買"),o=["innerHTML"];function r(t,e,c,r,u,s){var l=Object(n["I"])("nav-bar"),d=Object(n["I"])("van-image"),b=Object(n["I"])("van-tag"),j=Object(n["I"])("van-button"),O=Object(n["I"])("van-card"),f=Object(n["I"])("van-tab"),p=Object(n["I"])("goos-list"),v=Object(n["I"])("van-tabs");return Object(n["A"])(),Object(n["h"])("div",null,[Object(n["k"])(l,null,{default:Object(n["R"])((function(){return[Object(n["j"])("商品詳情 "+Object(n["L"])(r.id),1)]})),_:1}),Object(n["k"])(d,{style:{"margin-top":"1.875rem"},width:"100%","lazy-load":"",src:t.detail.cover_url},null,8,["src"]),Object(n["k"])(O,{num:t.detail.stock,price:t.detail.price,desc:t.detail.description,title:t.detail.title},{tags:Object(n["R"])((function(){return[Object(n["k"])(b,{type:"primary"},{default:Object(n["R"])((function(){return[Object(n["j"])(Object(n["L"])(t.detail.collects_count>3?"新書報到":""),1)]})),_:1}),Object(n["k"])(b,{style:{"margin-left":"3px"},type:"danger"},{default:Object(n["R"])((function(){return[Object(n["j"])(Object(n["L"])(t.detail.collects_count>5?"推薦":""),1)]})),_:1})]})),footer:Object(n["R"])((function(){return[Object(n["k"])(j,{type:"warning",onClick:r.handleAddCar},{default:Object(n["R"])((function(){return[a]})),_:1},8,["onClick"]),Object(n["k"])(j,{type:"danger",onClick:r.buyNow},{default:Object(n["R"])((function(){return[i]})),_:1},8,["onClick"])]})),_:1},8,["num","price","desc","title"]),Object(n["k"])(v,{active:r.active,"onUpdate:active":e[0]||(e[0]=function(t){return r.active=t})},{default:Object(n["R"])((function(){return[Object(n["k"])(f,{title:"概述"},{default:Object(n["R"])((function(){return[Object(n["i"])("div",{class:"content",innerHTML:t.detail.details},null,8,o)]})),_:1}),Object(n["k"])(f,{title:"相關圖書"},{default:Object(n["R"])((function(){return[Object(n["k"])(p,{goods:t.like_goods},null,8,["goods"])]})),_:1})]})),_:1},8,["active"])])}var u=c("5530"),s=(c("e7e5"),c("d399")),l=c("a7ac"),d=c("9a61"),b=c("1bab");function j(t){return Object(b["a"])({url:"/api/goods/"+t})}var O=c("6c02"),f=c("f290"),p=c("5502"),v={name:"Detail",components:{navBar:l["a"],GoosList:d["a"]},setup:function(){var t=Object(n["F"])(0),e=Object(O["c"])(),c=Object(O["d"])(),a=Object(p["b"])(),i=Object(n["F"])(0);i.value=e.query.id;var o=Object(n["E"])({detail:{},like_goods:[]});Object(n["y"])((function(){j(i.value).then((function(t){o.detail=t.goods,o.like_goods=t.like_goods}))}));var r=function(){Object(f["a"])({goods_id:o.detail.id,num:1}).then((function(t){"201"!=t.status&&"204"!=t.status||(s["a"].success("添加成功"),a.dispatch("updateCar")),console.log(t.status)}))},l=function(){Object(f["a"])({goods_id:o.detail.id,num:1}).then((function(t){"201"!=t.status&&"204"!=t.status||(s["a"].success("準備結帳囉!!"),a.dispatch("updateCar"),c.push({path:"/shopcar"})),console.log(t.status)}))};return Object(u["a"])(Object(u["a"])({id:i},Object(n["M"])(o)),{},{active:t,handleAddCar:r,buyNow:l})}},g=(c("8276"),c("6b0d")),k=c.n(g);const m=k()(v,[["render",r],["__scopeId","data-v-793187be"]]);e["default"]=m},7947:function(t,e,c){"use strict";c("5a4e")},8276:function(t,e,c){"use strict";c("3970")},"9a61":function(t,e,c){"use strict";var n=c("7a23"),a={class:"goods"};function i(t,e,c,i,o,r){var u=Object(n["I"])("goods-list-item");return Object(n["A"])(),Object(n["h"])("div",a,[(Object(n["A"])(!0),Object(n["h"])(n["a"],null,Object(n["G"])(c.goods,(function(t){return Object(n["A"])(),Object(n["f"])(u,{key:t,product:t},null,8,["product"])})),128))])}var o=function(t){return Object(n["D"])("data-v-55f2f70a"),t=t(),Object(n["B"])(),t},r={class:"goods-info"},u={class:"price"},s=o((function(){return Object(n["i"])("small",null,"$",-1)})),l={class:"collect"},d=o((function(){return Object(n["i"])("i",{class:"fa-solid fa-star"},null,-1)}));function b(t,e,c,a,i,o){var b=Object(n["J"])("lazy");return Object(n["A"])(),Object(n["h"])("div",{class:"goods-item",onClick:e[0]||(e[0]=function(){return a.itemClick&&a.itemClick.apply(a,arguments)})},[Object(n["S"])(Object(n["i"])("img",null,null,512),[[b,c.product.cover_url]]),Object(n["i"])("div",r,[Object(n["i"])("p",null,Object(n["L"])(c.product.title),1),Object(n["i"])("span",u,[s,Object(n["j"])(" "+Object(n["L"])(c.product.price),1)]),Object(n["i"])("span",l,[d,Object(n["j"])(Object(n["L"])(c.product.collects_count),1)])])])}var j=c("6c02"),O={name:"goodListItem",props:{product:Object,default:function(){return{}}},setup:function(t){var e=Object(j["d"])();return{itemClick:function(){e.push({path:"/detail",query:{id:t.product.id}})}}}},f=(c("6a41"),c("6b0d")),p=c.n(f);const v=p()(O,[["render",b],["__scopeId","data-v-55f2f70a"]]);var g=v,k={name:"goodsList",components:{GoodsListItem:g},props:{goods:{type:Array,default:function(){return[]}}}};c("7947");const m=p()(k,[["render",i],["__scopeId","data-v-2a9759fb"]]);e["a"]=m},e01a:function(t,e,c){"use strict";var n=c("23e7"),a=c("83ab"),i=c("da84"),o=c("e330"),r=c("1a2d"),u=c("1626"),s=c("3a9b"),l=c("577e"),d=c("9bf2").f,b=c("e893"),j=i.Symbol,O=j&&j.prototype;if(a&&u(j)&&(!("description"in O)||void 0!==j().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=s(O,this)?new j(t):void 0===t?j():j(t);return""===t&&(f[e]=!0),e};b(p,j),p.prototype=O,O.constructor=p;var v="Symbol(test)"==String(j("test")),g=o(O.toString),k=o(O.valueOf),m=/^Symbol\((.*)\)[^)]+$/,_=o("".replace),y=o("".slice);d(O,"description",{configurable:!0,get:function(){var t=k(this),e=g(t);if(r(f,t))return"";var c=v?y(e,7,-1):_(e,m,"$1");return""===c?void 0:c}}),n({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-3dc56c9c.0a0aac2d.js.map