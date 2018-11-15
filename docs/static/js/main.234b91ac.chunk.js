(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),l=n.n(r),i=n(4),o=n(5),s=n(7),u=n(6),d=n(8),m=n(1),f=n.n(m),b=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"card add-card"},f.a.createElement("button",{children:"+",className:"add-card-button",onClick:this.global.addCard,title:"Add a new card."}))}}]),t}(f.a.Component)),h=n(9),O=n(2),j=n(10),p=n(13),v=n.n(p),g=(n(26),function(e){var t=e.multiverseid,n=e.name,a=e.onSelect,r=e.set;return c.a.createElement("div",{className:"search-result",onClick:function(){a({multiverseid:t,name:n,set:r})},title:n},"(",r,") ",n)}),E=function(e){var t=e.onSelect,n=e.search,a=Object(m.useGlobal)("searchedCards"),r=Object(j.a)(a,2),l=r[0],i=r[1];if(""!==n&&!Object.prototype.hasOwnProperty.call(l,n)){var o;try{o=v()("https://api.mtgeni.us/mtg.json?q="+encodeURIComponent(n))}catch(s){if(s instanceof Promise)throw s;o=s.message}i(Object(O.a)({},l,Object(h.a)({},n,o)))}return n&&Object.prototype.hasOwnProperty.call(l,n)?Array.isArray(l[n])?l[n].map(function(e){return c.a.createElement(g,Object.assign({key:e.multiverseid,onSelect:t},e))}):c.a.createElement("div",{children:l[n],className:"search-error"}):null},C=(n(28),c.a.forwardRef(function(e,t){var n=function(e,t){var n=Object(a.useState)(e),c=Object(j.a)(n,2),r=c[0],l=c[1];return{handleChange:function(e){l(e.target.value)},handleResultSelect:function(e){l(e.name),t(e)},value:r}}(e.name,e.onResult),r=n.handleChange,l=n.handleResultSelect,i=n.value;return c.a.createElement("div",{className:"search"},c.a.createElement("input",{onChange:r,placeholder:"Card Name",ref:t,type:"text",value:i}),c.a.createElement(a.Suspense,{fallback:"Loading..."},c.a.createElement(E,{onSelect:l,search:i.toLowerCase()})))})),w=(n(30),function(e,t){var n=e.cards.findIndex(function(e){return e.id===t});if(-1===n)throw new Error("Card ID ".concat(t," cannot be found."));return Object(O.a)({},e,{cards:e.cards.slice(0,n).concat(e.cards.slice(n+1,e.cards.length+1))})}),y=function(e,t,n){var a=e.cards.findIndex(function(e){return e.id===t});if(-1===a)throw new Error("Card ID ".concat(t," cannot be found."));return Object(O.a)({},e,{cards:e.cards.slice(0,a).concat([Object(O.a)({id:t},n)]).concat(e.cards.slice(a+1,e.cards.length+1))})},k=function(e){var t=e.id,n=e.multiverseid,r=e.name,l=e.set,i=Object(m.useGlobal)("addCard"),o=Object(m.useGlobal)(w),s=Object(a.useRef)(null),u=Object(m.useGlobal)(y);return c.a.createElement("div",{className:"card",onMouseEnter:function(){s.current.focus()}},n?c.a.createElement("img",{alt:r,className:"card-image",height:"100%",src:"https://i.mtgeni.us/"+n+".png",width:"100%"}):null,c.a.createElement("span",{children:"+",className:"card-add",onClick:function(){i({multiverseid:n,name:r,set:l})},title:"Copy this card."}),c.a.createElement(C,{name:r||"",onResult:function(e){u(t,e)},ref:s}),c.a.createElement("span",{children:"-",className:"card-subtract",onClick:function(){o(t)},title:"Remove this card."}))},N=(n(32),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"cards"},this.global.cards.map(function(e){return c.a.createElement(k,Object.assign({key:e.id},e))}),c.a.createElement(b,null))}}]),t}(c.a.Component)),R=f()(N),S=(n(34),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return 0===this.props.remaining?null:c.a.createElement("div",{className:"counter"},"Add"," ",c.a.createElement("strong",{children:this.props.remaining})," ","more.")}}]),t}(c.a.PureComponent)),G=Object(m.withGlobal)(function(e){var t=9-e.cards.length%9;return 9===t?{remaining:0}:{remaining:t}})(S),I=(n(36),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("h1",null,"Magic: The Gathering Card Proxies"),c.a.createElement(G,null)),c.a.createElement("main",null,c.a.createElement(R,null)))}),x=n(14);Object(m.setGlobal)({cards:[],searchedCards:Object.create(null)});var P=Object.create(null);Object(m.addReducer)("addCard",function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,n=Date.now(),a=function(e){return e.id===n};-1!==e.cards.findIndex(a);)n++;return Object(O.a)({},e,{cards:Object(x.a)(e.cards).concat([Object(O.a)({id:n},t)])})});n(38);l.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.234b91ac.chunk.js.map