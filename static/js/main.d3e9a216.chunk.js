(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,,function(t,e,c){var a={"./1.jpg":17,"./10.jpg":18,"./11.jpg":19,"./12.jpg":20,"./13.jpg":21,"./14.jpg":22,"./15.jpg":23,"./16.jpg":24,"./2.jpg":25,"./3.jpg":26,"./4.jpg":27,"./5.jpg":28,"./6.jpg":29,"./7.jpg":30,"./8.jpg":31,"./9.jpg":32};function i(t){var e=n(t);return c(e)}function n(t){if(!c.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=16},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/1.7e2355ac.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/10.27762be9.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/11.f4655dd6.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/12.56ff0964.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/13.83a69df1.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/14.ed5a410b.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/15.d6aca045.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/16.06556667.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/2.44568115.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/3.7bde6e4a.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/4.60f13ceb.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/5.0f941ddc.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/6.6d9abf25.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/7.dbdc204b.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/8.5b9df009.jpg"},function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/9.d51d9bab.jpg"},function(t,e,c){"use strict";c.r(e);var a=c(0),i=c(1),n=c.n(i),s=c(5),r=c.n(s),u=c(2),j=(c(11),function(t){return Object(a.jsx)("div",{className:"ImgContainer",children:Object(a.jsx)("button",{onClick:t.onClick,className:"btn btn-primary",children:Object(a.jsx)("img",{"data-name":t.ImgName,className:"Img",src:t.image,alt:"Card"})})})}),d=(c(12),function(t){return Object(a.jsxs)("div",{className:"HeaderContainer",children:[Object(a.jsx)("h1",{className:"Title",children:"Memory Card Game"}),Object(a.jsxs)("h2",{className:"Score",children:["Score: ",t.score]}),Object(a.jsxs)("h3",{className:"HighScore",children:["High Score: ",t.HighScore]})]})}),f=(c(13),c(3));var o=function(){var t=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],e=Object(i.useState)([]),n=Object(u.a)(e,2),s=n[0],r=n[1],o=Object(i.useState)([]),p=Object(u.a)(o,2),l=p[0],g=p[1],b=Object(i.useState)(!1),m=Object(u.a)(b,2),O=m[0],h=m[1],x=Object(i.useState)(!1),v=Object(u.a)(x,2),N=v[0],S=v[1],C=Object(i.useState)(0),k=Object(u.a)(C,2),y=k[0],E=k[1],H=Object(i.useState)(0),I=Object(u.a)(H,2),w=I[0],A=I[1];function M(e){if(15===s.length)return S(!0),E(0),r([]),g(Object(f.shuffle)(t)),G;for(var c=0;c<t.length;c++){if(e.target.getAttribute("data-name")===s[c])return D();E(y+1)}r(s.concat(e.target.getAttribute("data-name"))),g(Object(f.shuffle)(t)),console.log(y)}function D(){h(!0),E(0),r([]),g(Object(f.shuffle)(t))}function G(){return N?Object(a.jsx)("h1",{children:"You Won!"}):O?Object(a.jsx)("h1",{children:"You Lost!"}):void 0}return Object(i.useEffect)((function(){g(Object(f.shuffle)(t))}),[]),Object(i.useEffect)((function(){y>w&&A(y)}),[y]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{score:y,HighScore:w}),Object(a.jsxs)("div",{className:"container Grid",children:[G,l.map((function(t,e){if(!(e>=12))return Object(a.jsx)(j,{image:c(16)("./".concat(l[e],".jpg")).default,onClick:M,ImgName:l[e]},l[e])}))]})]})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(o,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.d3e9a216.chunk.js.map