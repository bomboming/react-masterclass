(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{68:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t(41),o=t.n(i),r=t(70),a=t(44),l=t(6),s=t(12),d=t(22),b=t(10),j=t(71),h=t(26),u=t(5),p="https://api.coinpaprika.com/v1";function x(){return fetch("".concat(p,"/coins")).then((function(n){return n.json()}))}var f=t(43),O=t.n(f),g=t(1);var m=function(n){var e=n.coinId,t=Object(j.a)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(p,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data,o=null!==i&&void 0!==i?i:[];return null===o||void 0===o||o.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close]}})),Object(g.jsx)("div",{children:c?"Loading chart...":Object(g.jsx)(O.a,{})})};var v,y,w,k,C,I,L,q,S,z=function(){return Object(g.jsx)("h1",{children:"Price"})};var B,P,F,M,A,T,_,D=u.c.h1(v||(v=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),H=u.c.span(y||(y=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),J=u.c.div(w||(w=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),$=u.c.header(k||(k=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),E=u.c.div(C||(C=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),R=u.c.div(I||(I=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),U=u.c.p(L||(L=Object(l.a)(["\n  margin: 20px 0px;\n"]))),W=u.c.div(q||(q=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),G=u.c.span(S||(S=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),K=function(){var n,e,t=Object(b.g)().coinId,c=Object(b.f)().state,i=Object(b.h)("/:coinId/price"),o=Object(b.h)("/:coinId/chart"),r=Object(j.a)(["info",t],(function(){return function(n){return fetch("".concat(p,"/coins/").concat(n)).then((function(n){return n.json()}))}(t)})),a=r.isLoading,l=r.data,s=Object(j.a)(["tickers",t],(function(){return function(n){return fetch("".concat(p,"/tickers/").concat(n)).then((function(n){return n.json()}))}(t)}),{refetchInterval:5e3}),u=s.isLoading,x=s.data,f=a||u;return Object(g.jsxs)(J,{children:[Object(g.jsx)(h.b,{children:Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:null!==c&&void 0!==c&&c.name?c.name:f?"Loading...":null===l||void 0===l?void 0:l.name})})}),Object(g.jsx)($,{children:Object(g.jsx)(D,{children:null!==c&&void 0!==c&&c.name?c.name:f?"Loading...":null===l||void 0===l?void 0:l.name})}),f?Object(g.jsx)(H,{children:"Loading..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(E,{children:[Object(g.jsxs)(R,{children:[Object(g.jsx)("span",{children:"Rank:"}),Object(g.jsx)("span",{children:null===l||void 0===l?void 0:l.rank})]}),Object(g.jsxs)(R,{children:[Object(g.jsx)("span",{children:"Symbol:"}),Object(g.jsxs)("span",{children:["$",null===l||void 0===l?void 0:l.symbol]})]}),Object(g.jsxs)(R,{children:[Object(g.jsx)("span",{children:"Price:"}),Object(g.jsxs)("span",{children:["$",null===x||void 0===x||null===(n=x.quotes)||void 0===n||null===(e=n.USD)||void 0===e?void 0:e.price.toFixed(3)]})]})]}),Object(g.jsx)(U,{children:null===l||void 0===l?void 0:l.description}),Object(g.jsxs)(E,{children:[Object(g.jsxs)(R,{children:[Object(g.jsx)("span",{children:"Total Suply:"}),Object(g.jsx)("span",{children:null===x||void 0===x?void 0:x.total_supply})]}),Object(g.jsxs)(R,{children:[Object(g.jsx)("span",{children:"Max Supply:"}),Object(g.jsx)("span",{children:null===x||void 0===x?void 0:x.max_supply})]})]}),Object(g.jsxs)(W,{children:[Object(g.jsx)(G,{isActive:null!==o,children:Object(g.jsx)(d.b,{to:"/".concat(t,"/chart"),children:"Chart"})}),Object(g.jsx)(G,{isActive:null!==i,children:Object(g.jsx)(d.b,{to:"/".concat(t,"/price"),children:"Price"})})]}),Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/:coinId/price",children:Object(g.jsx)(z,{})}),Object(g.jsx)(b.a,{path:"/:coinId/chart",children:Object(g.jsx)(m,{coinId:t})})]})]})]})};var N=u.c.div(B||(B=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),Q=u.c.header(P||(P=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),V=u.c.h1(F||(F=Object(l.a)(["\n  font-size: 48px;\n  font-weight: 800;\n  color: ",";\n"])),(function(n){return n.theme.titleColor})),X=u.c.span(M||(M=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),Y=u.c.ul(A||(A=Object(l.a)([""]))),Z=u.c.li(T||(T=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    color: ",";\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.liBgColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),nn=u.c.img(_||(_=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"]))),en=function(){var n=Object(j.a)(["allCoins"],x),e=n.isLoading,t=n.data,c=null===t||void 0===t?void 0:t.slice(0,10);return Object(g.jsxs)(N,{children:[Object(g.jsx)(h.b,{children:Object(g.jsx)(h.a,{children:Object(g.jsx)("title",{children:"\ucf54\uc778"})})}),Object(g.jsx)(Q,{children:Object(g.jsx)(V,{children:"Coin World"})}),e?Object(g.jsx)(X,{children:"Loading..."}):Object(g.jsx)(Y,{children:null===c||void 0===c?void 0:c.map((function(n){return Object(g.jsx)(Z,{children:Object(g.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(g.jsx)(nn,{src:"https://coinicons-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var tn,cn,on,rn,an=function(){return Object(g.jsx)(d.a,{children:Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/:coinId",children:Object(g.jsx)(K,{})}),Object(g.jsx)(b.a,{path:"/",children:Object(g.jsx)(en,{})})]})})},ln=t(49),sn={textColor:"#fdcb6e",bgColor:"#ffeaa7",accentColor:"#fd79a8",titleColor:"#00b894",liBgColor:"white",themeBg:"gray"},dn={textColor:"#2d3436",bgColor:"#636e72",accentColor:"#d63031",titleColor:"#00b894",liBgColor:"#dfe6e9",themeBg:"white"};var bn=Object(u.b)(tn||(tn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),jn=u.c.button(cn||(cn=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 20px 0 20px;\n  background-color: ",";\n  border: none;\n"])),(function(n){return n.theme.bgColor})),hn=u.c.button(on||(on=Object(l.a)(["\n  background-color: ",";\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  margin: 10px;\n"])),(function(n){return n.theme.themeBg})),un=u.c.button(rn||(rn=Object(l.a)(["\n  background-color: tomato;\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  margin: 10px;\n"]))),pn=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],i=e[1],o=!0===t?"\ud83c\udf1d":"\ud83c\udf1a";return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(u.a,{theme:t?dn:sn,children:[Object(g.jsxs)(jn,{children:[Object(g.jsx)(hn,{onClick:function(){return i((function(n){return!n}))},children:o}),Object(g.jsx)(un,{onClick:function(){return window.location.replace("/")},children:"\ud83c\udfe0"})]}),Object(g.jsx)(bn,{}),Object(g.jsx)(an,{}),Object(g.jsx)(ln.a,{initialIsOpen:!0})]})})},xn=new r.a;o.a.render(Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(a.a,{client:xn,children:Object(g.jsx)(pn,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.b90d0419.chunk.js.map