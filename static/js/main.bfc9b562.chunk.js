(this.webpackJsonpproxy=this.webpackJsonpproxy||[]).push([[0],[,,,,function(e,n,t){e.exports=t(14)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(3),r=t.n(o),i=t(1);t(9);t(10);function l(e){var n=e.children,t=n.replace(/-(?:medium|thumb)\.jpg$/,"-large.jpg");return c.a.createElement("div",{className:"card"},c.a.createElement("img",{alt:n,height:"100%",src:t,width:"100%"}))}t(11);function u(e){var n=e.children,t=e.onClose;return c.a.createElement("div",{className:"cards"},c.a.createElement("button",{onClick:t},"Back"),c.a.createElement("div",null,n.split("\n").map((function(e){return c.a.createElement(l,null,e)}))))}t(12);function s(e){var n=e.children,t=e.onChange,a=e.onSubmit,o=n.split("\n").length,r=o%9>0,i=c.a.useMemo((function(){return r?"Add ".concat(9-o%9):"Submit"}),[o,r]),l=c.a.useCallback((function(e){e.preventDefault(),a()}),[a]),u=c.a.useCallback((function(e){t(e.currentTarget.value)}),[t]);return c.a.createElement("form",{action:"#",className:"input",onSubmit:l},c.a.createElement("textarea",{cols:42,onChange:u,placeholder:"https://i.mtgeni.us/1.png\nhttps://i.mtgeni.us/2.png\nhttps://i.mtgeni.us/3.png",rows:12,value:n}),c.a.createElement("input",{disabled:r,type:"submit",value:i}))}t(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement((function(){var e=c.a.useState(""),n=Object(i.a)(e,2),t=n[0],a=n[1],o=c.a.useState(!0),r=Object(i.a)(o,2),l=r[0],m=r[1],p=c.a.useCallback((function(){m(!0)}),[]),h=c.a.useCallback((function(){m(!1)}),[]);return c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"Proxy"),l?c.a.createElement(s,{onChange:a,onSubmit:h},t):c.a.createElement(u,{onClose:p},t))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.bfc9b562.chunk.js.map