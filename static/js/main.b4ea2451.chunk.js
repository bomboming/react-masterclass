(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{68:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(41),o=t.n(r),a=t(70),l=t(44),s=t(12),d=t(6),b=t(5),j=t(22),h=t(10),u=t(71),p=t(26),x="https://api.coinpaprika.com/v1";function f(){return fetch("".concat(x,"/coins")).then((function(n){return n.json()}))}var O=t(43),g=t.n(O),m=t(1);var v=function(n){var e=n.coinId,t=Object(u.a)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(x,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data,r=null!==i&&void 0!==i?i:[];return null===r||void 0===r||r.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close]}})),Object(m.jsx)("div",{children:c?"Loading chart...":Object(m.jsx)(g.a,{})})};var y,w,k,C,I,L,q,S,z,B=function(){return Object(m.jsx)("h1",{children:"Price"})},M=b.c.h1(y||(y=Object(d.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),P=b.c.span(w||(w=Object(d.a)(["\n  text-align: center;\n  display: block;\n"]))),A=b.c.div(k||(k=Object(d.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),F=b.c.header(C||(C=Object(d.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),T=b.c.div(I||(I=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),_=b.c.div(L||(L=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),D=b.c.p(q||(q=Object(d.a)(["\n  margin: 20px 0px;\n"]))),H=b.c.div(S||(S=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),J=b.c.span(z||(z=Object(d.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var $,E,R,U,W,G,K,N=function(){var n,e,t=Object(h.g)().coinId,c=Object(h.f)().state,i=Object(h.h)("/:coinId/price"),r=Object(h.h)("/:coinId/chart"),o=Object(u.a)(["info",t],(function(){return function(n){return fetch("".concat(x,"/coins/").concat(n)).then((function(n){return n.json()}))}(t)})),a=o.isLoading,l=o.data,s=Object(u.a)(["tickers",t],(function(){return function(n){return fetch("".concat(x,"/tickers/").concat(n)).then((function(n){return n.json()}))}(t)}),{refetchInterval:5e3}),d=s.isLoading,b=s.data,f=a||d;return Object(m.jsxs)(A,{children:[Object(m.jsx)(p.b,{children:Object(m.jsx)(p.a,{children:Object(m.jsx)("title",{children:null!==c&&void 0!==c&&c.name?c.name:f?"Loading...":null===l||void 0===l?void 0:l.name})})}),Object(m.jsx)(F,{children:Object(m.jsx)(M,{children:null!==c&&void 0!==c&&c.name?c.name:f?"Loading...":null===l||void 0===l?void 0:l.name})}),f?Object(m.jsx)(P,{children:"Loading..."}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(T,{children:[Object(m.jsxs)(_,{children:[Object(m.jsx)("span",{children:"Rank:"}),Object(m.jsx)("span",{children:null===l||void 0===l?void 0:l.rank})]}),Object(m.jsxs)(_,{children:[Object(m.jsx)("span",{children:"Symbol:"}),Object(m.jsxs)("span",{children:["$",null===l||void 0===l?void 0:l.symbol]})]}),Object(m.jsxs)(_,{children:[Object(m.jsx)("span",{children:"Price:"}),Object(m.jsxs)("span",{children:["$",null===b||void 0===b||null===(n=b.quotes)||void 0===n||null===(e=n.USD)||void 0===e?void 0:e.price.toFixed(3)]})]})]}),Object(m.jsx)(D,{children:null===l||void 0===l?void 0:l.description}),Object(m.jsxs)(T,{children:[Object(m.jsxs)(_,{children:[Object(m.jsx)("span",{children:"Total Suply:"}),Object(m.jsx)("span",{children:null===b||void 0===b?void 0:b.total_supply})]}),Object(m.jsxs)(_,{children:[Object(m.jsx)("span",{children:"Max Supply:"}),Object(m.jsx)("span",{children:null===b||void 0===b?void 0:b.max_supply})]})]}),Object(m.jsxs)(H,{children:[Object(m.jsx)(J,{isActive:null!==r,children:Object(m.jsx)(j.b,{to:"/".concat(t,"/chart"),children:"Chart"})}),Object(m.jsx)(J,{isActive:null!==i,children:Object(m.jsx)(j.b,{to:"/".concat(t,"/price"),children:"Price"})})]}),Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/:coinId/price",children:Object(m.jsx)(B,{})}),Object(m.jsx)(h.a,{path:"/:coinId/chart",children:Object(m.jsx)(v,{coinId:t})})]})]})]})},Q=b.c.div($||($=Object(d.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),V=b.c.header(E||(E=Object(d.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),X=b.c.ul(R||(R=Object(d.a)([""]))),Y=b.c.li(U||(U=Object(d.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    color: ",";\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.liBgColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),Z=b.c.h1(W||(W=Object(d.a)(["\n  font-size: 48px;\n  font-weight: 800;\n  color: ",";\n"])),(function(n){return n.theme.titleColor})),nn=b.c.span(G||(G=Object(d.a)(["\n  text-align: center;\n  display: block;\n"])));b.c.img(K||(K=Object(d.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var en=function(){var n=Object(u.a)(["allCoins"],f),e=n.isLoading,t=n.data,c=null===t||void 0===t?void 0:t.slice(0,10);return Object(m.jsxs)(Q,{children:[Object(m.jsx)(p.b,{children:Object(m.jsx)(p.a,{children:Object(m.jsx)("title",{children:"\ucf54\uc778"})})}),Object(m.jsx)(V,{children:Object(m.jsx)(Z,{children:"Coin World"})}),e?Object(m.jsx)(nn,{children:"Loading..."}):Object(m.jsx)(X,{children:null===c||void 0===c?void 0:c.map((function(n){return Object(m.jsx)(Y,{children:Object(m.jsxs)(j.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[n.name," \u2192"]})},n.id)}))})]})};var tn,cn,rn,on,an=function(){return Object(m.jsx)(j.a,{children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{exact:!0,path:"/:coinId",children:Object(m.jsx)(N,{})}),Object(m.jsx)(h.a,{exact:!0,path:"/",children:Object(m.jsx)(en,{})})]})})},ln=t(49),sn={textColor:"#fdcb6e",bgColor:"#ffeaa7",accentColor:"#fd79a8",titleColor:"#00b894",liBgColor:"white",themeBg:"gray"},dn={textColor:"#2d3436",bgColor:"#636e72",accentColor:"#d63031",titleColor:"#00b894",liBgColor:"#dfe6e9",themeBg:"white"},bn=Object(b.b)(tn||(tn=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),jn=b.c.button(cn||(cn=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 20px 0 20px;\n  background-color: ",";\n  border: none;\n"])),(function(n){return n.theme.bgColor})),hn=b.c.button(rn||(rn=Object(d.a)(["\n  background-color: ",";\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  margin: 10px;\n"])),(function(n){return n.theme.themeBg})),un=b.c.button(on||(on=Object(d.a)(["\n  background-color: tomato;\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  margin: 10px;\n"])));var pn=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],i=e[1],r=!0===t?"\ud83c\udf1d":"\ud83c\udf1a";return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{theme:t?dn:sn,children:[Object(m.jsxs)(jn,{children:[Object(m.jsx)(hn,{onClick:function(){return i((function(n){return!n}))},children:r}),Object(m.jsx)(un,{onClick:function(){return window.location.replace("/")},children:"\ud83c\udfe0"})]}),Object(m.jsx)(bn,{}),Object(m.jsx)(an,{}),Object(m.jsx)(ln.a,{initialIsOpen:!0})]})})},xn=new a.a;o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(l.a,{client:xn,children:Object(m.jsx)(pn,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.b4ea2451.chunk.js.map