(this.webpackJsonpmystore=this.webpackJsonpmystore||[]).push([[0],{41:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),a=t(15),s=t.n(a),i=t(9),d=t(16),l=t(10),o="SET_PRODUCTS",j="SELECTED_PRODUCT",u="REMOVE_SELECTED_PRODUCT",b={products:[]},h=Object(d.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case o:return Object(l.a)(Object(l.a)({},e),{},{products:n});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case j:return Object(l.a)(Object(l.a)({},e),n);case u:return{};default:return e}}}),O=Object(d.b)(h,{}),p=(t(41),t(13)),m=t(3),x=t(1),v=function(){return Object(x.jsx)("div",{className:"ui fixed menu",children:Object(x.jsx)("div",{className:"ui container center",children:Object(x.jsx)("h2",{children:"FakeShop"})})})},f=t(12),g=t.n(f),N=t(17),y=t(18),E=t.n(y),k=function(){var e=Object(i.c)((function(e){return e.allProducts.products})).map((function(e){var c=e.id,t=e.title,n=e.image,r=e.price,a=e.category;return Object(x.jsx)("div",{className:"four wide column",children:Object(x.jsx)(p.b,{to:"/product/".concat(c),children:Object(x.jsx)("div",{className:"ui link cards",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"image",children:Object(x.jsx)("img",{src:n,alt:t})}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("div",{className:"header",children:t}),Object(x.jsxs)("div",{className:"meta price",children:["$ ",r]}),Object(x.jsx)("div",{className:"meta",children:a})]})]})})})},c)}));return Object(x.jsx)(x.Fragment,{children:e})},w=function(e){return{type:o,payload:e}},C=function(e){return{type:j,payload:e}},D=function(){var e=Object(i.c)((function(e){return e.allProducts.products})),c=Object(i.b)(),t=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("Err",e)}));case 2:t=e.sent,c(w(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(e),Object(n.useEffect)((function(){t()}),[]),Object(x.jsx)("div",{className:"ui grid container",children:Object(x.jsx)(k,{})})},P=function(){var e=Object(i.c)((function(e){return e.product})),c=e.title,t=e.image,r=e.price,a=e.category,s=e.description,d=Object(m.f)().productId,l=Object(i.b)();console.log(e);var o=function(){var e=Object(N.a)(g.a.mark((function e(c){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://fakestoreapi.com/products/".concat(c)).catch((function(e){console.log("Err",e)}));case 2:t=e.sent,l(C(t.data));case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return d&&""!==d&&o(d),function(){l({type:u})}}),[d]),Object(x.jsx)("div",{className:" ui grid container",children:0===Object.keys(e).length?Object(x.jsx)("div",{children:"...Loading"}):Object(x.jsx)("div",{className:"ui grid container",children:0===Object.keys(e).length?Object(x.jsx)("div",{children:"...Loading"}):Object(x.jsx)("div",{className:"ui placeholder segment",children:Object(x.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(x.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(x.jsxs)("div",{className:"middle aligned row",children:[Object(x.jsx)("div",{className:"column lp",children:Object(x.jsx)("img",{className:"ui fluid image",src:t,alt:""})}),Object(x.jsxs)("div",{className:"column rp",children:[Object(x.jsx)("h1",{children:c}),Object(x.jsx)("h2",{children:Object(x.jsxs)("p",{className:"ui teal tag label",children:["$",r]})}),Object(x.jsx)("h3",{className:"ui brown block header",children:a}),Object(x.jsx)("p",{children:s}),Object(x.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(x.jsx)("div",{className:"hidden content",children:Object(x.jsx)("i",{className:"shop icon"})}),Object(x.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})})})})};var S=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(v,{}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{path:"/mystore",exact:!0,component:D}),Object(x.jsx)(m.a,{path:"/product/:productId",exact:!0,component:P}),Object(x.jsx)(m.a,{children:" 404 Not Found"})]})]})})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(i.a,{store:O,children:Object(x.jsx)(S,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.4b434071.chunk.js.map