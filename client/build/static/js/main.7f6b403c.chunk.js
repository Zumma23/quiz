(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),u=n(4),o=n.n(u),r=(n(9),n(3)),s=(n(10),n(1));var a=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],i=e[1],u=Object(c.useState)(!1),o=Object(r.a)(u,2),a=(o[0],o[1]);return Object(c.useEffect)((function(){fetch("/users").then((function(t){if(t.ok)return t.json()})).then((function(t){i(t),a(!0)}))})),Object(s.jsx)("div",{className:"App",children:n.map((function(t){return Object(s.jsx)("div",{children:t.email},t.id)}))})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,u=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),u(t),o(t)}))};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(a,{})}),document.getElementById("root")),f()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7f6b403c.chunk.js.map