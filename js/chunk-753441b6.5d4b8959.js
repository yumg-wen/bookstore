(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-753441b6"],{"329a":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),o=n("e835"),r=n.n(o),u=Object(a["j"])("個人中心"),c=Object(a["i"])("div",{class:"register"},[Object(a["i"])("div",{class:"img"},[Object(a["i"])("img",{src:r.a,alt:"logo"})])],-1),i={style:{margin:"16px"}},l=Object(a["j"])(" 提交 ");function s(e,t,n,o,r,s){var d=Object(a["I"])("nav-bar"),b=Object(a["I"])("van-field"),m=Object(a["I"])("van-button"),p=Object(a["I"])("van-form");return Object(a["A"])(),Object(a["h"])(a["a"],null,[Object(a["k"])(d,null,{default:Object(a["R"])((function(){return[u]})),_:1}),c,Object(a["k"])(p,{onSubmit:o.onSubmit},{default:Object(a["R"])((function(){return[Object(a["k"])(b,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.name=t}),name:"使用者姓名",label:"使用者姓名",placeholder:"使用者姓名",rules:[{required:!0,message:"請填寫姓名"}]},null,8,["modelValue"]),Object(a["k"])(b,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",name:"密碼",label:"密碼",placeholder:"密碼至少為6個字",rules:[{required:!0,message:"請輸入密碼"}]},null,8,["modelValue"]),Object(a["k"])(b,{modelValue:e.password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password_confirmation=t}),type:"password",name:"確認密碼",label:"確認密碼",placeholder:"確認密碼",rules:[{required:!0,message:"請填寫一致密碼"}]},null,8,["modelValue"]),Object(a["k"])(b,{modelValue:e.email,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.email=t}),name:"電子信箱",label:"電子信箱",placeholder:"請輸入正確電子信箱格式 @",rules:[{required:!0,message:"請輸入電子信箱"}]},null,8,["modelValue"]),Object(a["i"])("div",i,[Object(a["i"])("div",{class:"link-login",style:{color:"var(--color-tint)",margin:"10px","text-align":"center","font-weight":"700"},onClick:t[4]||(t[4]=function(t){return e.$router.push({path:"/login"})})}," 已有帳號 立即登入 "),Object(a["k"])(m,{round:"",block:"",type:"primary",color:"var(--color-tint)","native-type":"submit"},{default:Object(a["R"])((function(){return[l]})),_:1})])]})),_:1},8,["onSubmit"])],64)}var d=n("5530"),b=(n("e7e5"),n("d399")),m=(n("9a83"),n("f564")),p=n("a7ac"),f=n("8d85"),j=n("6c02"),O={name:"Register",components:{navBar:p["a"]},setup:function(){var e=Object(j["d"])(),t=Object(a["E"])({name:"",password:"",password_confirmation:"",email:""}),n=function(){t.password!=t.password_confirmation?Object(m["a"])("密碼不一致,請再次確認密碼"):Object(f["d"])(t).then((function(n){console.log(n.status),"201"==n.status&&(b["a"].success("註冊完成"),setTimeout((function(){e.push({path:"/login"})}),1e3)),t.name="",t.password="",t.password_confirmation="",t.email=""}))};return Object(d["a"])(Object(d["a"])({},Object(a["M"])(t)),{},{onSubmit:n})}},g=n("6b0d"),h=n.n(g);const w=h()(O,[["render",s]]);t["default"]=w},"8d85":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return c}));var a=n("1bab");function o(e){return Object(a["a"])({url:"/api/auth/register",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/api/auth/login",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/api/auth/logout",method:"post"})}function c(e){return Object(a["a"])({url:"/api/user"})}},b0c0:function(e,t,n){var a=n("83ab"),o=n("5e77").EXISTS,r=n("e330"),u=n("9bf2").f,c=Function.prototype,i=r(c.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=r(l.exec),d="name";a&&!o&&u(c,d,{configurable:!0,get:function(){try{return s(l,i(this))[1]}catch(e){return""}}})},e835:function(e,t,n){e.exports=n.p+"img/logo.f4a4e4dc.jpg"}}]);
//# sourceMappingURL=chunk-753441b6.5d4b8959.js.map