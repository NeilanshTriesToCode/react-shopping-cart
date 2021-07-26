(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{139:function(e){e.exports=JSON.parse('[{"id":"fgsa2142fa","name":"Keyboards","description":"Buy different keyboard from any brand available"},{"id":"xasgy42fa","name":"Headphones","description":"Find best-fit for your ears"},{"id":"xzymm35en","name":"Speakers","description":"Portable speakers for the best experience"},{"id":"mglbeq7271","name":"Mouse","description":"For a smooth and unique user experience"}]')},150:function(e,n,t){},296:function(e,n,t){"use strict";t.r(n);var c,r,i,a,o=t(0),s=t(27),d=t.n(s),l=t(16),u=t(9),h=t(7),b=(t(149),t(150),t(8)),j=h.b.div(c||(c=Object(b.a)(["\n  display: flex;\n  background-color: black;\n  position: relative;\n  padding-bottom: 8px;\n"]))),p=h.b.ul(r||(r=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin-top: 15px;\n  //border-bottom: 0.5px solid lightgray;\n"]))),m=Object(h.b)(l.b)(i||(i=Object(b.a)(["\n  font-size: calc(\n    10px + 1vw\n  ); // at least 10px + 1vw (min-size is 10px when screen size is minimized)\n  color: black;\n  margin: 0 15px 2px; // center-margin: spacing between each StyledNavLink, last-margin: similar to margin-bottom\n  text-decoration: none;\n\n  :hover {\n    text-decoration: none;\n    color: #2196f3;\n  }\n\n  &.active {\n    text-decoration: none;\n    color: #2196f3;\n  }\n"]))),g=t(1),f=function(){var e=Object(u.f)();return Object(g.jsx)(p,{children:[{to:"/",linkName:"Home"},{to:"/categories",linkName:"Categories"},{to:"/products/allProducts",linkName:"Products"}].map((function(n){return Object(g.jsx)(m,{to:n.to,className:n.to===e.pathname?"active":"",children:n.linkName},n.to)}))})},x=Object(o.memo)(f),O=h.b.div(a||(a=Object(b.a)(["\n  width: 25%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n\n  h1 {\n    color: whitesmoke;\n    font-size: calc(20px + 2vw); // min-size is 20px when screen size is reduced\n    font-family: 'Abril Fatface', cursive;\n    // font-family: 'Playfair Display SC', serif;\n    font-weight: 100;\n  }\n\n  h3 {\n    color: whitesmoke;\n  }\n"]))),y=function(e){var n=e.title,t=e.subtitle;return Object(g.jsxs)(O,{children:[Object(g.jsx)("h1",{children:n}),Object(g.jsx)("h3",{children:t})]})},v=Object(o.memo)(y),k=t(300),w=t(144),S=t(41),_=t(28),I=t(33);function C(e,n){switch(n.type){case"ADD_PRODUCT":return 0===e.filter((function(e){return e.id===n.productInfo.id})).length?[].concat(Object(I.a)(e),[{id:n.productInfo.id,price:n.productInfo.price,qty:1}]):e.map((function(e){return e.id===n.productInfo.id?Object(_.a)(Object(_.a)({},e),{},{qty:e.qty+1}):e}));case"REMOVE_PRODUCT":return e.filter((function(e){return e.id!==n.productInfo.id}));case"ADD_QTY":return e.map((function(e){return e.id===n.productInfo.id?Object(_.a)(Object(_.a)({},e),{},{qty:e.qty+1}):e}));case"REDUCE_QTY":return 1===e.find((function(e){return e.id===n.productInfo.id})).qty?e.filter((function(e){return e.id!==n.productInfo.id})):e.map((function(e){return e.id===n.productInfo.id?Object(_.a)(Object(_.a)({},e),{},{qty:e.qty-1}):e}));case"RESET_CART":return[];default:return e}}var D=Object(o.createContext)();var z,T,N,P,E,U,A=function(e){var n=e.children,t=function(){var e=Object(o.useReducer)(C,[],(function(e){var n=localStorage.getItem("shoppingCart");return n?JSON.parse(n):e})),n=Object(S.a)(e,2),t=n[0],c=n[1];return Object(o.useEffect)((function(){localStorage.setItem("shoppingCart",JSON.stringify(t))}),[t]),[t,c]}(),c=Object(S.a)(t,2),r=c[0],i=c[1];return Object(g.jsx)(D.Provider,{value:{cartState:r,dispatch:i},children:n})},L=function(){return Object(o.useContext)(D)},R=h.b.div(z||(z=Object(b.a)(["\n  float: right;\n  height: 50%;\n  margin-top: 10px;\n  margin-bottom: auto;\n  margin-right: 15px;\n  position: absolute;\n  right: 0;\n"]))),q=t(304),F=function(e){var n=e.numProducts;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(q.a,{circle:!0,size:"sm",style:{background:"grey",color:"#f5f5f5",marginLeft:"12px"},children:n})})},B=function(){var e=L().cartState.reduce((function(e,n){return e+n.qty}),0);return Object(g.jsx)(R,{children:Object(g.jsx)(l.b,{to:"/checkout",children:Object(g.jsxs)(k.a,{children:[Object(g.jsx)(w.a,{icon:"shopping-basket",size:"lg"}),Object(g.jsx)(F,{numProducts:e})]})})})},M=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(j,{children:[Object(g.jsx)(v,{title:"Shopping Cart",subtitle:""}),Object(g.jsx)(B,{})]}),Object(g.jsx)(x,{})]})},Q=t(301),$=h.b.div(T||(T=Object(b.a)(["\n  margin-left: auto;\n  margin-right: auto;\n\n  .homepageTitleDiv {\n    color: black;\n    margin-bottom: 50px;\n    text-align: center;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\n    h1 {\n      font-weight: 100;\n      font-size: 3vw;\n    }\n  }\n"]))),J=Object(h.b)(Q.a)(N||(N=Object(b.a)(["\n  background-color: whitesmoke;\n  height: 28vw;\n  width: 50vw;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 70px;\n"]))),K=t(305),V=t(11),Y=t.n(V),H=h.b.div(P||(P=Object(b.a)(["\n  text-align: center;\n  justify-content: center;\n"]))),W=Object(h.b)(K.a)(E||(E=Object(b.a)(["\n  width: 50%;\n  background-color: lightgrey;\n  margin-left: auto;\n  margin-right: auto;\n"]))),G=h.b.div(U||(U=Object(b.a)(["\n  background-color: whitesmoke;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  margin-bottom: 20px;\n  padding: 50px;\n  border: 1pt grey;\n  box-shadow: 1px 2px 6px lightgrey;\n\n  :hover {\n    box-shadow: 1px 2px 5px grey;\n  }\n\n  // class for Product Cards\n  &.product-card {\n    margin-left: auto;\n    margin-right: auto;\n    height: calc(250px + 18vw);\n    width: calc(250px + 20vw);\n\n    .text-container {\n      height: fit-content;\n      width: fit-content;\n      h3 {\n        font-size: calc(15px + 1vw);\n        color: black;\n      }\n\n      p {\n        font-size: calc(5px + 1vw);\n      }\n    }\n\n    .text-green {\n      font-weight: 500;\n      color: ",";\n    }\n\n    .text-red {\n      font-weight: 600;\n      font-style: italic;\n      color: ",";\n    }\n\n    .text-blue {\n      font-weight: 500;\n      color: ",";\n    }\n\n    .text-black {\n      font-weight: 600;\n      font-style: italic;\n      color: ",";\n    }\n  }\n\n  .img-wrapper {\n    width: 80%;\n    margin-bottom: 15px;\n    margin-left: auto;\n    margin-right: auto;\n\n    img {\n      height: 15vw;\n      width: 100%;\n    }\n\n    "," {\n      width: 80%;\n    }\n  }\n\n  // media queries for responsive design for Styled-Components\n  "," {\n    width: 50%;\n  }\n  "," {\n    width: 80%;\n  }\n  "," {\n    width: 80%;\n  }\n  "," {\n    width: 80%;\n  }\n"])),(function(e){return e.theme.mainColors.green}),(function(e){return e.theme.mainColors.red}),(function(e){return e.theme.mainColors.blue}),(function(e){return e.theme.mainColors.black}),Y()("<=desktop",">tablet"),Y()(">desktop"),Y()("<=desktop",">tablet"),Y()("<=tablet",">phone"),Y()("<=phone")),Z=t(32);var X,ee=function(){var e=function(e){for(var n=[-1,-1,-1,-1,-1],t=0;t<5;t++){for(var c=Math.floor(Math.random()*e.length);n.includes(e[c]);)c=Math.floor(Math.random()*e.length);n[t]=e[c]}return n}(Z);return Object(g.jsxs)($,{children:[Object(g.jsx)(W,{}),Object(g.jsxs)("div",{className:"homepageTitleDiv",children:[Object(g.jsx)("h1",{className:"maintTitle",children:"Just when you thought things couldn't get better"}),Object(g.jsx)("h4",{children:"...you end up here"})]}),Object(g.jsx)(J,{autoplay:!0,children:e.map((function(e){return Object(g.jsx)("img",{src:e.thumbnail,alt:""},e.id)}))})]})},ne=Object(h.b)(l.b)(X||(X=Object(b.a)(["\n  color: darkslategrey;\n  text-decoration: none;\n\n  h3 {\n    font-size: 25px;\n  }\n\n  h5 {\n    font-size: 15px;\n    font-style: italic;\n  }\n\n  :hover {\n    color: black;\n    text-decoration: none;\n    box-shadow: 1px 2px 5px black;\n  }\n"]))),te=function(e){var n=e.id,t=e.name,c=e.description;return Object(g.jsx)(G,{children:Object(g.jsxs)(ne,{to:"/products/".concat(n),children:[Object(g.jsx)("h3",{children:t}),Object(g.jsx)("h5",{children:c})]})})},ce=t(139),re=function(){return Object(g.jsxs)(H,{children:[Object(g.jsx)(W,{}),ce.map((function(e){return Object(g.jsx)(te,{id:e.id,name:e.name,description:e.description},e.id)}))]})},ie=t(299),ae=t(303);var oe,se,de,le=function(e){var n,t=(n=e,function(e,t){switch(t.filterAction){case"SET":return e.includes(t.filterName)?e.filter((function(e){return e!==t.filterName})):[].concat(Object(I.a)(e),[t.filterName]);case"RESET":return n;default:return e}});return Object(o.useReducer)(t,e)},ue=h.b.div(oe||(oe=Object(b.a)(["\n  position: relative;\n\n  "," {\n    width: 20%;\n  }\n  "," {\n    width: 50%;\n  }\n  "," {\n    width: 50%;\n  }\n"])),Y()("<=desktop",">tablet"),Y()("<=tablet",">phone"),Y()("<=phone")),he=h.b.div(se||(se=Object(b.a)(["\n  background-color: whitesmoke;\n  border: 1pt solid lightgrey;\n  border-radius: 5px;\n  width: 15%;\n  margin-left: 40px;\n  margin-right: auto;\n  padding: 15px;\n  position: fixed;\n\n  "," {\n    width: 20%;\n  }\n  "," {\n    margin-left: auto;\n    margin-right: 0;\n    width: 30%;\n  }\n  "," {\n    width: 30%;\n  }\n"])),Y()("<=desktop",">tablet"),Y()("<=tablet",">phone"),Y()("<=phone")),be=h.b.div(de||(de=Object(b.a)(["\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  //border: 1pt solid black;\n\n  "," {\n    margin-right: 0;\n  }\n  "," {\n    margin-right: 0;\n  }\n  "," {\n    margin-right: 0;\n  }\n"])),Y()("<=desktop",">tablet"),Y()("<=tablet",">phone"),Y()("<=phone")),je=t(302),pe=function(e){var n=e.inStock,t=e.addProduct;return Object(g.jsx)("div",{style:{float:"right"},children:Object(g.jsxs)(k.a,{size:"md",color:"blue",disabled:!n,onClick:t,children:[Object(g.jsx)(w.a,{icon:"shopping-cart"})," Add to Cart"]})})},me=function(e){var n=e.productId,t=e.name,c=e.productPrice,r=e.currency,i=e.delivery,a=e.inStock,s=e.thumbnail,d=(e.categoryId,L()),l=(d.cartState,d.dispatch),u=Object(o.useCallback)((function(){l({type:"ADD_PRODUCT",productInfo:{id:n,price:c}}),je.a.info("Product added to cart",4e3)}),[l,n,c]);return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(G,{className:"product-card",children:[Object(g.jsx)("div",{className:"img-wrapper",children:Object(g.jsx)("img",{src:s,alt:"product img"})}),Object(g.jsxs)("div",{className:"text-container",children:[Object(g.jsx)("h3",{children:t}),Object(g.jsx)("h4",{children:"".concat(r," ").concat(c,".00")}),Object(g.jsx)("p",{className:i?"text-blue":"text-black",children:i?"Delivery available":"Delivery unavailable"}),Object(g.jsx)("p",{className:a?"text-green":"text-red",children:a?"In stock":"Out of stock"})]}),Object(g.jsx)(pe,{inStock:a,addProduct:u})]})})};var ge,fe,xe,Oe,ye=function(){var e=Object(u.g)().cid,n=le([]),t=Object(S.a)(n,2),c=t[0],r=t[1],i=function(e,n){var t=Object(I.a)(e);return n.includes("IN_STOCK_ONLY")&&(t=t.filter((function(e){return e.inStock}))),n.includes("BELOW_$50")&&(t=t.filter((function(e){return e.price<50}))),n.includes("$50_$100")&&(t=t.filter((function(e){return e.price>=50&&e.price<=100}))),n.includes("ABOVE_$100")&&(t=t.filter((function(e){return e.price>100}))),t}(function(e,n){var t=e;return"allProducts"!==n&&(t=e.filter((function(e){return e.categoryId===n}))),t}(Z,e),c),a=function(e){r({filterAction:"SET",filterName:e})};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(W,{}),Object(g.jsxs)(ue,{children:[Object(g.jsxs)(he,{children:[Object(g.jsx)("h4",{children:"Filters"}),Object(g.jsxs)(ie.a,{value:c,children:[Object(g.jsx)(ae.a,{value:"IN_STOCK_ONLY",onChange:a,children:"In stock only"}),Object(g.jsx)(ae.a,{value:"BELOW_$50",onChange:a,children:"Below $50"}),Object(g.jsx)(ae.a,{value:"$50_$100",onChange:a,children:"$50 - $100"}),Object(g.jsx)(ae.a,{value:"ABOVE_$100",onChange:a,children:"Above $100"})]}),Object(g.jsx)(k.a,{color:"cyan",size:"sm",onClick:function(){r({filterAction:"RESET"})},children:"Reset"})]}),i.length<1&&Object(g.jsx)("div",{style:{textAlign:"center"},children:Object(g.jsx)("h4",{style:{fontStyle:"italic"},children:"No products found."})}),Object(g.jsx)(be,{children:i.map((function(e){return Object(g.jsx)(me,{productId:e.id,name:e.name,productPrice:e.price,currency:e.currency,delivery:e.delivery,inStock:e.inStock,thumbnail:e.thumbnail,categoryId:e.categoryId},e.id)}))})]})]})},ve=function(e){var n=e.id,t=e.productQty,c=e.addQty,r=e.reduceQty,i=Object(o.useRef)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k.a,{size:"xs",onClick:function(){return r(n)},children:Object(g.jsx)(w.a,{icon:"minus"})}),Object(g.jsx)("span",{ref:i,style:{padding:"10px"},children:t}),Object(g.jsx)(k.a,{size:"xs",onClick:function(){return c(n)},children:Object(g.jsx)(w.a,{icon:"plus"})})]})},ke=h.b.div(ge||(ge=Object(b.a)(["\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n  margin-bottom: 15px;\n  text-align: normal;\n  h3 {\n    color: slategrey;\n  }\n\n  Button {\n    float: right;\n  }\n"]))),we=Object(h.b)(G)(fe||(fe=Object(b.a)(["\n  table-layout: auto;\n  margin-left: auto;\n  margin-right: auto;\n  align-content: center;\n  width: 70%;\n\n  table {\n    margin-left: auto;\n    margin-right: auto;\n    border-collapse: collapse;\n    padding: 5px;\n\n    thead {\n      font-size: calc(10px + 1vw);\n      border-bottom: 1pt solid black;\n    }\n\n    th {\n      padding-bottom: 3px;\n    }\n\n    tbody > tr {\n      border-bottom: 0.5pt solid lightgrey;\n    }\n\n    tr {\n      font-size: calc(5px + 1vw);\n    }\n\n    td {\n      text-align: center;\n      //white-space: nowrap;\n      padding: 15px;\n    }\n\n    tfoot {\n      td {\n        font-size: calc(10px + 2vw);\n      }\n    }\n\n    "," {\n      width: 100%;\n\n      td {\n        padding: 5px;\n      }\n    }\n    "," {\n      width: 90%;\n\n      td {\n        padding: 5px;\n      }\n    }\n    "," {\n      width: 80%;\n\n      td {\n        padding: 5px;\n      }\n    }\n  }\n"])),Y()("<=desktop",">tablet"),Y()("<=tablet",">phone"),Y()("<=phone")),Se=(h.b.table(xe||(xe=Object(b.a)([""]))),h.b.table(Oe||(Oe=Object(b.a)([""]))),function(e){var n=e.id,t=e.productPrice,c=Z.find((function(e){return e.id===n}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("td",{children:Object(g.jsx)("img",{src:c.thumbnail,alt:"img",style:{height:"3vw",width:"4vw"}})}),Object(g.jsx)("td",{children:c.name}),Object(g.jsx)("td",{children:"".concat(c.currency," ").concat(t,".00")})]})}),_e=function(){var e=L(),n=e.cartState,t=e.dispatch,c=Object(o.useCallback)((function(e){t({type:"ADD_QTY",productInfo:{id:e}})}),[t]),r=Object(o.useCallback)((function(e){t({type:"REDUCE_QTY",productInfo:{id:e}})}),[t]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(W,{}),Object(g.jsxs)(ke,{children:[Object(g.jsx)("h3",{children:"Checkout"}),Object(g.jsx)("div",{style:{float:"right",marginLeft:"auto"},children:Object(g.jsxs)(k.a,{color:"cyan",onClick:function(){t({type:"RESET_CART"})},children:[Object(g.jsx)(w.a,{icon:"cart-arrow-down"})," Reset"]})})]}),n.length<1&&Object(g.jsx)("div",{style:{textAlign:"center"},children:Object(g.jsx)("h4",{children:"You have no items in the cart yet."})}),n.length>0&&Object(g.jsx)(we,{children:Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{}),Object(g.jsx)("th",{children:"Name"}),Object(g.jsx)("th",{children:"Price"}),Object(g.jsx)("th",{children:"Quantity"}),Object(g.jsx)("th",{})]})}),Object(g.jsx)("tbody",{children:n.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)(Se,{id:e.id,productPrice:e.price}),Object(g.jsx)("td",{children:Object(g.jsx)(ve,{id:e.id,productQty:e.qty,addQty:c,reduceQty:r})}),Object(g.jsx)("td",{children:Object(g.jsx)(k.a,{onClick:function(){return n=e.id,t({type:"REMOVE_PRODUCT",productInfo:{id:n}}),void je.a.info("Removed product from cart",4e3);var n},children:Object(g.jsx)(w.a,{icon:"close-circle"})})})]},e.id)}))}),Object(g.jsx)("tfoot",{children:Object(g.jsx)("tr",{children:Object(g.jsx)("td",{children:Object(g.jsx)("h5",{style:{fontSize:"calc(8px + 1vw)"},children:"Total: USD ".concat(n.reduce((function(e,n){return e+n.price*n.qty}),0),".00")})})})})]})})]})},Ie={mainColors:{blue:"#2196f3",red:"#ff0000",green:"#32cd32",black:"#000000"}};var Ce=function(){return Object(g.jsx)(A,{children:Object(g.jsx)(h.a,{theme:Ie,children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(M,{}),Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{exact:!0,path:"/",component:ee}),Object(g.jsx)(u.a,{exact:!0,path:"/categories",component:re}),Object(g.jsx)(u.a,{exact:!0,path:"/products/:cid",component:ye}),Object(g.jsx)(u.a,{exact:!0,path:"/checkout",component:_e})]})]})})})},De=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,306)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),i(e),a(e)}))};d.a.render(Object(g.jsx)(l.a,{children:Object(g.jsx)(Ce,{})}),document.getElementById("root")),De()},32:function(e){e.exports=JSON.parse('[{"id":"1a","name":"Ducky One 2","price":100,"currency":"USD","delivery":false,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_DKME1961ST-USPDZZT1_10.jpg","inStock":true,"categoryId":"fgsa2142fa"},{"id":"2a","name":"Varmilo Sakura","price":140,"currency":"USD","delivery":true,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_2790_SakuraTKL_1.jpg","inStock":true,"categoryId":"fgsa2142fa"},{"id":"3a","name":"MK Disco","price":80,"currency":"USD","delivery":true,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_2017_Disco_White_Caps_1.png","inStock":false,"categoryId":"fgsa2142fa"},{"id":"4b","name":"Razer Kraken","price":60,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/71BKQhFzDmL._AC_SY355_.jpg","inStock":false,"categoryId":"xasgy42fa"},{"id":"5b","name":"HyperX Cloud II","price":115,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/719KtJ-RAFL._AC_SL1417_.jpg","inStock":true,"categoryId":"xasgy42fa"},{"id":"6b","name":"Sennheiser PC 3 Chat","price":60,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/61kIoNSe3VL._SL1500_.jpg","inStock":true,"categoryId":"xasgy42fa"},{"id":"7c","name":"JBL Go 3 Bluetooth Speaker","price":40,"currency":"USD","delivery":true,"thumbnail":"https://www.bhphotovideo.com/images/images2500x2500/jbl_jblgo3bluam_go_3_portable_bluetooth_1583007.jpg","inStock":true,"categoryId":"xzymm35en"},{"id":"8c","name":"beats Pill","price":60,"currency":"USD","delivery":true,"thumbnail":"https://target.scene7.com/is/image/Target/GUEST_432687d2-d345-44dd-aa00-920a0bc4759d?wid=488&hei=488&fmt=pjpeg","inStock":false,"categoryId":"xzymm35en"},{"id":"9c","name":"Bose Soundlink II","price":80,"currency":"USD","delivery":false,"thumbnail":"https://www.bhphotovideo.com/images/images2000x2000/bose_752195_0200_soundlink_color_ii_bluetooth_1282068.jpg","inStock":true,"categoryId":"xzymm35en"},{"id":"10c","name":"JBL Flip 5","price":105,"currency":"USD","delivery":true,"thumbnail":"https://www.okeguys.com/wp-content/uploads/2021/01/JBL-Charge-5.jpg","inStock":true,"categoryId":"xzymm35en"},{"id":"11d","name":"HP Z3700 Wireless Mouse","price":30,"currency":"USD","delivery":false,"thumbnail":"https://www.hp.com/us-en/shop/app/assets/images/product/V0L79AA%23ABL/right_facing.png?_=1609927655761","inStock":true,"categoryId":"mglbeq7271"},{"id":"12d","name":"Lenovo N700 Dual Touch","price":55,"currency":"USD","delivery":true,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/61m8xUTmDGL._SL1243_.jpg","inStock":true,"categoryId":"mglbeq7271"},{"id":"13d","name":"Logitech Pebble M350","price":40,"currency":"USD","delivery":true,"thumbnail":"http://urbangiz.com/wp-content/uploads/2020/09/logitech-pebble-m350-1-1.png","inStock":true,"categoryId":"mglbeq7271"},{"id":"14d","name":"HP Z5000 Wireless Mouse","price":45,"currency":"USD","delivery":true,"thumbnail":"https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/E/5/E5C13AA-2_T1525411325.png","inStock":false,"categoryId":"mglbeq7271"}]')}},[[296,1,2]]]);
//# sourceMappingURL=main.4e1373d4.chunk.js.map