(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a729a140"],{2922:function(t,e,c){},"70bd":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),r={class:"create-order"},a=Object(n["j"])("訂單預覽"),o={class:"address-wrap"},s={class:"address"},i={class:"good"},u={class:"good-img"},b={alt:""},d={class:"good-desc"},l={class:"good-title"},j={class:"good-btn"},O={class:"price"},f=Object(n["i"])("small",null,"$",-1),p=Object(n["j"])(" 商品金額 "),h=Object(n["j"])(" QRCode"),v=Object(n["i"])("br",null,null,-1),g=Object(n["j"])(" 轉帳 "),m=Object(n["i"])("br",null,null,-1);function y(t,e,c,y,k,w){var L=Object(n["I"])("nav-bar"),I=Object(n["I"])("van-icon"),_=Object(n["I"])("van-submit-bar"),C=Object(n["I"])("van-image"),R=Object(n["I"])("van-grid-item"),S=Object(n["I"])("van-grid"),T=Object(n["I"])("van-popup"),N=Object(n["J"])("lazy");return Object(n["A"])(),Object(n["h"])(n["a"],null,[Object(n["i"])("div",r,[Object(n["k"])(L,null,{default:Object(n["R"])((function(){return[a]})),_:1}),Object(n["i"])("div",o,[Object(n["i"])("div",{class:"name",onClick:e[0]||(e[0]=function(){return y.goTo&&y.goTo.apply(y,arguments)})},[Object(n["i"])("span",null,Object(n["L"])(t.address.name),1),Object(n["i"])("span",null,Object(n["L"])(t.address.phone),1)]),Object(n["i"])("div",s,Object(n["L"])(t.address.province)+Object(n["L"])(t.address.city)+Object(n["L"])(t.address.county)+Object(n["L"])(t.address.address),1),Object(n["k"])(I,{name:"arrow",onClick:y.goTo},null,8,["onClick"])]),Object(n["i"])("div",i,[(Object(n["A"])(!0),Object(n["h"])(n["a"],null,Object(n["G"])(t.cartList,(function(t,e){return Object(n["A"])(),Object(n["h"])("div",{class:"good-item",key:e},[Object(n["i"])("div",u,[Object(n["S"])(Object(n["i"])("img",b,null,512),[[N,t.goods.cover_url]])]),Object(n["i"])("div",d,[Object(n["i"])("div",l,[Object(n["i"])("span",null,Object(n["L"])(t.goods.title),1),Object(n["i"])("span",null,"x1"+Object(n["L"])(t.num),1)]),Object(n["i"])("div",j,[Object(n["i"])("div",O,[f,Object(n["j"])(Object(n["L"])(t.goods.price),1)])])])])})),128))])]),Object(n["k"])(_,{class:"submit-all",price:100*y.total,"button-text":"提交訂單",onSubmit:y.handleCreateOrder},{default:Object(n["R"])((function(){return[p]})),_:1},8,["price","onSubmit"]),Object(n["k"])(T,{closeable:"","close-on-click-overlay":!1,show:t.showPay,"onUpdate:show":e[1]||(e[1]=function(e){return t.showPay=e}),position:"bottom",style:{height:"40%"},onClose:y.close},{default:Object(n["R"])((function(){return[Object(n["k"])(S,{border:!1,"column-num":2},{default:Object(n["R"])((function(){return[Object(n["k"])(R,null,{default:Object(n["R"])((function(){return[h,v,Object(n["k"])(C,{width:"150",height:"150",src:t.aliyun},null,8,["src"])]})),_:1}),Object(n["k"])(R,null,{default:Object(n["R"])((function(){return[g,m,Object(n["k"])(C,{width:"150",height:"150",src:t.aliyun},null,8,["src"])]})),_:1})]})),_:1})]})),_:1},8,["show","onClose"])],64)}var k=c("5530"),w=(c("e7e5"),c("d399")),L=(c("4de4"),c("d3b7"),c("159b"),c("a7ac")),I=c("1bab");function _(t){return Object(I["a"])({url:"/api/orders",method:"post",params:t})}function C(){return Object(I["a"])({url:"/api/orders/preview"})}function R(t,e){return Object(I["a"])({url:"/api/orders/".concat(t,"/pay"),params:e})}function S(t){return Object(I["a"])({url:"/api/orders/".concat(t,"/status")})}var T=c("6c02"),N=c("5502"),P={name:"cerateOrder",components:{navBar:L["a"]},setup:function(){var t=Object(N["b"])(),e=(Object(T["c"])(),Object(T["d"])()),c=Object(n["E"])({cartList:[],address:{},showPay:!1,orderNo:"",aliyun:""}),r=function(){w["a"].loading({message:"加載中...",forbidClick:!0}),C().then((function(t){var e=t.address.filter((function(t){return"1"==t.is_default}));0==e.length?c.address={address:"未有寄送地址，請選擇或添加地址"}:c.address=e[0],c.cartList=t.carts,w["a"].clear()}))};Object(n["y"])((function(){r()}));var a=function(){e.push({path:"/address"})},o=function(){},s=function(){var n={address_id:c.address.id};_(n).then((function(n){Object(w["a"])("創建成功"),t.dispatch("updateCar"),c.showPay=!0,c.orderNo=n.id,R(c.orderNo,{type:"aliyun"}).then((function(t){c.aliyun=t.qr_code_url}));var r=setInterval((function(){S(c.orderNo).then((function(t){2==t&&(clearInterval(r),e.push({path:"/order",query:{state:2}}))}))}),2e3)}))},i=Object(n["d"])((function(){var t=0;return c.cartList.forEach((function(e){t+=parseInt(e.num)*parseFloat(e.goods.price)})),t}));return Object(k["a"])(Object(k["a"])({},Object(n["M"])(c)),{},{goTo:a,close:o,handleCreateOrder:s,total:i})}},x=(c("b201"),c("6b0d")),A=c.n(x);const E=A()(P,[["render",y]]);e["default"]=E},b0c0:function(t,e,c){var n=c("83ab"),r=c("5e77").EXISTS,a=c("e330"),o=c("9bf2").f,s=Function.prototype,i=a(s.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,b=a(u.exec),d="name";n&&!r&&o(s,d,{configurable:!0,get:function(){try{return b(u,i(this))[1]}catch(t){return""}}})},b201:function(t,e,c){"use strict";c("2922")}}]);
//# sourceMappingURL=chunk-a729a140.4c3947ef.js.map