(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{71:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(27),o=t.n(r),a=t(15),s=t(7),l=t(9),d=t(18),j=t(8),b=t(28),h="https://api.coinpaprika.com/v1",u="https://ohlcv-api.nomadcoders.workers.dev";function p(){return fetch("".concat(h,"/coins")).then((function(n){return n.json()}))}var x=t(1);var O=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(h,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading;return t.data,Object(x.jsx)("div",{children:c?"Loading chart...":Object(x.jsx)("h1",{children:"\ub098\uc624\ub098????"})})};var f,m,g,v,y,k,w,C,I,L=function(){return Object(x.jsx)("h1",{children:"Price"})},q=s.c.h1(f||(f=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),S=s.c.span(m||(m=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),Q=s.c.div(g||(g=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),z=s.c.header(v||(v=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),P=s.c.div(y||(y=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),M=s.c.div(k||(k=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),A=s.c.p(w||(w=Object(l.a)(["\n  margin: 20px 0px;\n"]))),D=s.c.div(C||(C=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),F=s.c.span(I||(I=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var T,H,J,R,$,_,B,E=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),i=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(u,"/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(h,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,p=s.data,f=r||l;return Object(x.jsxs)(Q,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)("title",{children:null!==e&&void 0!==e&&e.name?e.name:f?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(x.jsx)(z,{children:Object(x.jsx)(q,{children:null!==e&&void 0!==e&&e.name?e.name:f?"Loading...":null===o||void 0===o?void 0:o.name})}),f?Object(x.jsx)(S,{children:"Loading..."}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(P,{children:[Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Rank:"}),Object(x.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Symbol:"}),Object(x.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Price:"}),Object(x.jsxs)("span",{children:["$",null===p||void 0===p?void 0:p.quotes.USD.price.toFixed(3)]})]})]}),Object(x.jsx)(A,{children:null===o||void 0===o?void 0:o.description}),Object(x.jsxs)(P,{children:[Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Total Suply:"}),Object(x.jsx)("span",{children:null===p||void 0===p?void 0:p.total_supply})]}),Object(x.jsxs)(M,{children:[Object(x.jsx)("span",{children:"Max Supply:"}),Object(x.jsx)("span",{children:null===p||void 0===p?void 0:p.max_supply})]})]}),Object(x.jsxs)(D,{children:[Object(x.jsx)(F,{isActive:null!==c,children:Object(x.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(x.jsx)(F,{isActive:null!==t,children:Object(x.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/:coinId/price",children:Object(x.jsx)(L,{})}),Object(x.jsx)(j.a,{path:"/:coinId/chart",children:Object(x.jsx)(O,{coinId:n})})]})]})]})},U=s.c.div(T||(T=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),G=s.c.header(H||(H=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),K=s.c.ul(J||(J=Object(l.a)([""]))),N=s.c.li(R||(R=Object(l.a)(["\n  background-color: white;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),V=s.c.h1($||($=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),W=s.c.span(_||(_=Object(l.a)(["\n  text-align: center;\n  display: block;\n"])));s.c.img(B||(B=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var X=function(){var n,e=Object(a.useQuery)("allCoins",p),t=e.isLoading,c=e.data;return Object(x.jsxs)(U,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)("title",{children:"\ucf54\uc778"})}),Object(x.jsx)(G,{children:Object(x.jsx)(V,{children:"\ucf54\uc778"})}),t?Object(x.jsx)(W,{children:"Loading..."}):Object(x.jsx)(K,{children:null===c||void 0===c||null===(n=c.slice(0,100))||void 0===n?void 0:n.map((function(n){return Object(x.jsx)(N,{children:Object(x.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[n.name," \u2192"]})},n.id)}))})]})};var Y,Z=function(){return Object(x.jsx)(d.a,{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/:coinId",children:Object(x.jsx)(E,{})}),Object(x.jsx)(j.a,{path:"/",children:Object(x.jsx)(X,{})})]})})},nn=t(48),en=Object(s.b)(Y||(Y=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var tn=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(en,{}),Object(x.jsx)(Z,{}),Object(x.jsx)(nn.ReactQueryDevtools,{initialIsOpen:!0})]})},cn=new a.QueryClient;o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(a.QueryClientProvider,{client:cn,children:Object(x.jsx)(s.a,{theme:{textColor:"#2f3640",bgColor:"#f5f6fa",accentColor:"#9c88ff"},children:Object(x.jsx)(tn,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.bec0fff7.chunk.js.map