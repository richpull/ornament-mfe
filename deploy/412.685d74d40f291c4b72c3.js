"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[412],{5826:(e,n,l)=>{l.r(n);var r=l(3011),i=l.n(r),s=l(5541),t=l(764),a=l(2514),o=l(1466),c=(l(9616),l(5516),l(6740)),d=l(3302),u=l(2909),h=l(8047),x=l(3159),f=function(){var e=(0,h.dh)().pushMessage;return(0,x.jsx)(c.$n,{variant:"outlined",onClick:function(){e({title:"Snackbar is worked!",status:"success"})},children:"Test snackbar"})},j=l(3478),p=function(){var e=(0,r.useState)(!1),n=(0,t.A)(e,2),l=n[0],i=n[1],s=(console.log("hooks"),"dialog"),a=function(){return i((function(e){return!e}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.$n,{onClick:a,children:"open dialog"}),(0,x.jsxs)(j.lG,{onClose:a,open:l,children:[(0,x.jsx)(j.c7,{children:(0,x.jsxs)(j.L3,{children:["Hello world! ",s]})}),(0,x.jsx)(j.R4,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam blanditiis dignissimos doloremque ea enim eveniet fugiat ipsam itaque modi molestiae odio, optio perspiciatis placeat, porro repudiandae saepe suscipit velit!"}),(0,x.jsx)(j.Es,{children:(0,x.jsx)(c.$n,{onClick:a,children:"Close"})})]})]})},m=l(2830),g=function(){return(0,x.jsxs)(m.l6,{label:"Числительные",placeholder:"Подсказка",children:[(0,x.jsx)(m.c$,{value:0,children:"Ноль"}),(0,x.jsx)(m.c$,{value:1,children:"Один"}),(0,x.jsx)(m.c$,{value:2,children:"Два"}),(0,x.jsx)(m.c$,{value:3,children:"Три"}),(0,x.jsx)(m.c$,{value:4,children:"Четыре"}),(0,x.jsx)(m.c$,{disabled:!0,value:5,children:"Пять"})]})},v=l(9849),C=l(4377),k=l(2771),b=l(5177),y=l(6814),A=l(9323),$=l(8196),_=l(4024),S=l(1304),L=function(){var e=(0,r.useRef)(null),n=(0,o.C)(!1),l=(0,t.A)(n,2),i=l[0],s=l[1],a=s.off,d=s.toggle;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.$n,{ref:e,onClick:d,children:"Open Menu"}),(0,x.jsxs)(v.W1,{open:i,anchorRef:e,menuListProps:{style:{minWidth:320}},onClose:a,placement:"bottom",children:[(0,x.jsxs)(v.Dr,{onClick:function(){},children:[(0,x.jsx)(C.L,{children:(0,x.jsx)(k.n,{})}),(0,x.jsx)(C.Zq,{primary:"Профиль"})]}),(0,x.jsxs)(v.Dr,{onClick:function(){},children:[(0,x.jsx)(C.L,{children:(0,x.jsx)(b.b,{})}),(0,x.jsx)(C.Zq,{primary:"Сообщения"}),(0,x.jsx)(C.L,{disableMargin:!0,children:(0,x.jsx)(_.Ex,{color:"actionDark",content:5})})]}),(0,x.jsxs)(v.Dr,{disabled:!0,onClick:function(){},children:[(0,x.jsx)(C.L,{children:(0,x.jsx)(y.d,{})}),(0,x.jsx)(C.Zq,{primary:"Группы"})]}),(0,x.jsxs)(v.Dr,{onClick:function(){},children:[(0,x.jsx)(C.L,{children:(0,x.jsx)(A.Z,{})}),(0,x.jsx)(C.Zq,{primary:"Настройки"})]}),(0,x.jsx)(S.cG,{className:"MixSpacing MixSpacing_mt_1x MixSpacing_mb_1x",color:"secondary",role:"separator"}),(0,x.jsxs)(v.Dr,{onClick:function(){},children:[(0,x.jsx)(C.L,{children:(0,x.jsx)($.G,{})}),(0,x.jsx)(C.Zq,{primary:"Выйти"})]})]})]})},P=function(){var e=(0,r.useRef)(null),n=(0,o.C)(!1),l=(0,t.A)(n,2),i=l[0],s=l[1],a=s.off,h=s.toggle;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(d.BJ,{gap:"s",children:[(0,x.jsx)(c.$n,{children:"Button"}),(0,x.jsx)(f,{}),(0,x.jsx)(p,{}),(0,x.jsx)(g,{}),(0,x.jsx)(L,{}),(0,x.jsx)(c.$n,{ref:e,onClick:h,children:"Открыть Popover"})]}),(0,x.jsx)(u.AM,{open:i,onClose:a,anchorRef:e,children:"Контент внутри Popover"})]})},M=(l(366),function(e){var n=e.value,l=e.onChange,r=e.children;return(0,x.jsxs)("div",{className:"Checker",children:[(0,x.jsx)("div",{className:"Checker__label",children:r}),(0,x.jsx)("div",{className:"Checker__input",children:(0,x.jsx)("input",{checked:n,type:"checkbox",onChange:l})})]})}),q=l(1109),R=l(7490),T=i().lazy((function(){return(0,R.loadRemote)("remote1/WithProvider")}));const B=function(){var e=(0,o.C)(!0),n=(0,t.A)(e,2),l=n[0],i=n[1].toggle,s=(0,o.C)(!0),c=(0,t.A)(s,2),u=c[0],f=c[1].toggle,j=(0,o.C)(!1),p=(0,t.A)(j,2),m=p[0],g=p[1].toggle,v=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(d.BJ,{gap:"2xl",children:[(0,x.jsx)("p",{children:(0,x.jsx)("b",{children:"HOST"})}),(0,x.jsx)(M,{value:l,onChange:i,children:"ThemeProvider in host"}),(0,x.jsx)(M,{value:u,onChange:f,children:"Components?"})]}),u&&(0,x.jsx)(P,{}),(0,x.jsx)(M,{value:m,onChange:g,children:"load remote?"}),m&&(0,x.jsx)(r.Suspense,{fallback:"loading...",children:(0,x.jsx)(T,{})})]})};return(0,x.jsx)(q.Context.Provider,{value:"I am host context value",children:(0,x.jsx)("div",{className:"Block",children:l?(0,x.jsx)(a.NP,{theme:a.HO,children:(0,x.jsx)(h.n,{children:v()})}):v()})})};(0,R.init)({name:"host",remotes:[{name:"remote1",alias:"remote1",entry:"http://localhost:3001/mf-manifest.json"}]}),s.createRoot(document.getElementById("root")).render((0,x.jsx)(i().StrictMode,{children:(0,x.jsx)(B,{})}))},3624:(e,n,l)=>{l.r(n),l.d(n,{default:()=>a});var r=l(4240),i=l.n(r),s=l(433),t=l.n(s)()(i());t.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n.Block {\n  margin: 30px;\n  border: 1px dashed #ccc;\n  padding: 20px;\n  border-radius: 20px;\n}",""]);const a=t},9366:(e,n,l)=>{l.r(n),l.d(n,{default:()=>a});var r=l(4240),i=l.n(r),s=l(433),t=l.n(s)()(i());t.push([e.id,".Checker{\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n.Checker__label {\n    padding-right: 10px;\n}\n.Checker__input {\n    line-height: 0;\n}",""]);const a=t},9616:(e,n,l)=>{var r=l(6905),i=l.n(r),s=l(8750),t=l.n(s),a=l(2358),o=l.n(a),c=l(7321),d=l.n(c),u=l(6069),h=l.n(u),x=l(1826),f=l.n(x),j=l(3624),p={};p.styleTagTransform=f(),p.setAttributes=d(),p.insert=o().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=h();var m=i()(j.default,p);if(!j.default.locals||e.hot.invalidate){var g=!j.default.locals,v=g?j:j.default.locals;e.hot.accept(3624,(n=>{j=l(3624),function(e,n,l){if(!e&&n||e&&!n)return!1;var r;for(r in e)if((!l||"default"!==r)&&e[r]!==n[r])return!1;for(r in n)if(!(l&&"default"===r||e[r]))return!1;return!0}(v,g?j:j.default.locals,g)?(v=g?j:j.default.locals,m(j.default)):e.hot.invalidate()}))}e.hot.dispose((function(){m()})),j.default&&j.default.locals&&j.default.locals},366:(e,n,l)=>{var r=l(6905),i=l.n(r),s=l(8750),t=l.n(s),a=l(2358),o=l.n(a),c=l(7321),d=l.n(c),u=l(6069),h=l.n(u),x=l(1826),f=l.n(x),j=l(9366),p={};p.styleTagTransform=f(),p.setAttributes=d(),p.insert=o().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=h();var m=i()(j.default,p);if(!j.default.locals||e.hot.invalidate){var g=!j.default.locals,v=g?j:j.default.locals;e.hot.accept(9366,(n=>{j=l(9366),function(e,n,l){if(!e&&n||e&&!n)return!1;var r;for(r in e)if((!l||"default"!==r)&&e[r]!==n[r])return!1;for(r in n)if(!(l&&"default"===r||e[r]))return!1;return!0}(v,g?j:j.default.locals,g)?(v=g?j:j.default.locals,m(j.default)):e.hot.invalidate()}))}e.hot.dispose((function(){m()})),j.default&&j.default.locals&&j.default.locals}}]);