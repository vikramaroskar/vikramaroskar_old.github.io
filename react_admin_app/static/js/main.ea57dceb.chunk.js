(this["webpackJsonptest-admin"]=this["webpackJsonptest-admin"]||[]).push([[0],{505:function(e,t,a){e.exports=a(875)},510:function(e,t,a){},875:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(43),o=a.n(c),l=(a(510),a(896)),s=a(895),m=a(897),i=a(898),u=a(262),E=a(471),d=a(187),f=a(430),h=a(4),p=a(414),v=a.n(p),b=Object(h.withStyles)({link:{textDecoration:"none"},icon:{width:"0.5em",paddingLeft:2}})((function(e){var t=e.record,a=void 0===t?{}:t,r=e.source,c=e.classes;return n.a.createElement("a",{href:a[r],className:c.link},a[r],n.a.createElement(v.a,{className:c.icon}))})),w=function(e){return n.a.createElement(u.b,e,n.a.createElement(E.a,{rowClick:"edit"},n.a.createElement(d.a,{source:"id"}),n.a.createElement(d.a,{source:"name"}),n.a.createElement(d.a,{source:"username"}),n.a.createElement(f.a,{source:"email"}),n.a.createElement(d.a,{source:"address.street"}),n.a.createElement(d.a,{source:"phone"}),n.a.createElement(b,{source:"website"}),n.a.createElement(d.a,{source:"company.name"})))},g=a(473),P=a(890),k=a(263),y=a(901),I=a(470),j=a(892),S=a(472),x=a(321),O=a(163),W=a(894),B=function(e){var t=e.record;return n.a.createElement("span",null,"Post ",t?'"'.concat(t.title,'"'):"")},J=function(e){return n.a.createElement(u.b,e,n.a.createElement(E.a,null,n.a.createElement(d.a,{source:"id"}),n.a.createElement(g.a,{source:"userId",reference:"users"},n.a.createElement(d.a,{source:"name"})),n.a.createElement(d.a,{source:"id"}),n.a.createElement(d.a,{source:"title"}),n.a.createElement(d.a,{source:"body"}),n.a.createElement(P.a,null)))},L=function(e){return n.a.createElement(k.b,Object.assign({title:n.a.createElement(B,null)},e),n.a.createElement(I.a,null,n.a.createElement(j.a,{source:"id"}),n.a.createElement(S.a,{source:"userId",reference:"users"},n.a.createElement(x.a,{optionText:"name"})),n.a.createElement(O.a,{source:"title"}),n.a.createElement(W.a,{source:"body"})))},N=function(e){return n.a.createElement(y.a,e,n.a.createElement(I.a,null,n.a.createElement(S.a,{source:"userId",reference:"users"},n.a.createElement(x.a,{optionText:"name"})),n.a.createElement(O.a,{source:"title"}),n.a.createElement(W.a,{source:"body"})))},T=a(442),_=a(468),C=a.n(_),D=a(469),U=a.n(D),$=a(70),q=a.n($),z=a(92),A=a.n(z),F=a(441),G=a.n(F),H=function(){return n.a.createElement(q.a,null,n.a.createElement(G.a,{title:"Welcome to the administration"}),n.a.createElement(A.a,null,"Lorem ipsum sic dolor amet..."))},K=a(251),M=function(e,t){if(e===K.d){var a=t.username;return localStorage.setItem("username",a),Promise.resolve()}if(e===K.e)return localStorage.removeItem("username"),Promise.resolve();if(e===K.b){var r=t.status;return 401===r||403===r?(localStorage.removeItem("username"),Promise.reject()):Promise.resolve()}return e===K.a?localStorage.getItem("username")?Promise.resolve():Promise.reject():Promise.reject("Unknown method")},Q=Object(T.a)("http://jsonplaceholder.typicode.com"),R=function(){return n.a.createElement(l.a,{dashboard:H,authProvider:M,dataProvider:Q},n.a.createElement(s.a,{name:"posts_1",list:m.a}),n.a.createElement(s.a,{name:"posts_2",list:J,edit:i.a}),n.a.createElement(s.a,{name:"posts",list:J,edit:L,create:N,icon:C.a}),n.a.createElement(s.a,{name:"users",list:w,icon:U.a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[505,1,2]]]);
//# sourceMappingURL=main.ea57dceb.chunk.js.map