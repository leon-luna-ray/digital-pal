(this["webpackJsonpdigital-pal"]=this["webpackJsonpdigital-pal"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(9),i=n.n(a),r=n(2),o=n(20),s=n(23),u=n(21),j=n(22),l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,a=Object(c.useRef)(t);Object(c.useEffect)((function(){a.current=t}),[t]),Object(c.useEffect)((function(){if(null!=n){var t=function(e){return a.current(e)};return n.addEventListener(e,t),function(){return n.removeEventListener(e,t)}}}),[e,n])},b=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(null),s=Object(r.a)(o,2),u=s[0],j=s[1];return Object(c.useEffect)((function(){var t=window.matchMedia(e);j(t),i(t.matches)}),[e]),l("change",(function(e){return i(e.matches)}),u),a};function f(e,t,n){var a=Object(c.useState)((function(){var c=n.getItem(e);return null!=c?JSON.parse(c):"function"===typeof initialValue?t():t})),i=Object(r.a)(a,2),o=i[0],s=i[1];Object(c.useEffect)((function(){if(void 0===o)return n.removeItem(e);n.setItem(e,JSON.stringify(o))}),[e,o,n]);var u=Object(c.useCallback)((function(){s(void 0)}),[]);return[o,s,u]}var d=function(){var e,t=f("useDarkMode",e,window.localStorage),n=Object(r.a)(t,2),a=n[0],i=n[1],o=b("(prefers-color-scheme: dark)"),s=a||o;return Object(c.useEffect)((function(){document.body.classList.toggle("dark-mode",s)}),[s]),[s,i]},O=n(1),m=function(){var e=d(),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(O.jsx)("div",{className:"dark-mode-btn",onClick:function(){return c((function(e){return!e}))},style:{background:n?"#333":"#fff",color:n?"white":"black"},children:n?"Light \u2b1c\ufe0f":"Dark \u2b1b\ufe0f"})},h=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=(t[0],t[1],Object(c.useState)("")),a=Object(r.a)(n,2),i=a[0],l=a[1],b=Object(c.useState)("\ud83d\udc7e"),f=Object(r.a)(b,2),d=f[0],h=f[1],p=Object(c.useState)(""),v=Object(r.a)(p,2),g=v[0],x=v[1],y=Object(c.useState)(!0),S=Object(r.a)(y,2),k=S[0],w=S[1],N=Object(c.useState)(!1),I=Object(r.a)(N,2),E=I[0],z=I[1],L=Object(c.useState)(!1),J=Object(r.a)(L,2),C=J[0],D=J[1],M=Object(c.useState)(!1),T=Object(r.a)(M,2),B=T[0],P=T[1],R=Object(c.useState)(100),V=Object(r.a)(R,2),Y=(V[0],V[1],function(){setTimeout((function(){l(""),h("\ud83d\udc7e"),x("")}),2e3)}),q=[{name:"feed",color:"btn-danger",function:function(){E?(l("\ud83c\udf52"),x("Mmmmm! That was yummy!"),z(!1),Y()):(l("\ud83d\udeab"),h(""),x("No thanks! I'm full"),z(!0),Y())}},{name:"play",color:"btn-warning",function:function(){k?(l("\ud83c\udfbe"),x("yay! Let's play!"),w(!1),z(!0),Y()):(l("\ud83d\udeab"),h(""),x("I don't wanna!"),w(!0),Y())}},{name:"sleep",color:"btn-primary",function:function(){B?(l("\ud83c\udf19"),x("Nite nite ...zzzzz"),P(!1),z(!0),Y()):(l("\ud83d\udeab"),h(""),x("I'm not tired!"),Y())}},{name:C?"go inside":"go outside",color:"btn-success",function:C?function(){l("\ud83c\udfe1"),x("Okay I'm tired..."),P(!0),D(!1),Y()}:function(){l("\u2600\ufe0f"),x("Yay! I wanna play outside!"),D(!0),Y()}}].map((function(e,t){return Object(O.jsx)(o.a,{md:6,lg:3,children:Object(O.jsx)(s.a,{className:"command-btn text-uppercase ".concat(e.color),onClick:e.function,children:e.name},t)},t)}));return Object(O.jsxs)(u.a,{children:[Object(O.jsx)(j.a,{children:Object(O.jsx)("nav",{className:"d-flex justify-content-end",children:Object(O.jsx)(m,{})})}),Object(O.jsxs)("main",{className:"text-center",children:[Object(O.jsx)("h1",{className:"digital-pal-title",children:"Digital Pal"}),Object(O.jsx)(j.a,{className:"controls",children:q}),Object(O.jsx)("span",{id:"action-icon",className:"icon",children:i}),Object(O.jsx)("span",{id:"digital-pal",className:"icon",children:d}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:g})]})]})},p=(n(17),function(){return Object(O.jsx)("div",{children:Object(O.jsx)(h,{})})});i.a.render(Object(O.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7efc1ed7.chunk.js.map