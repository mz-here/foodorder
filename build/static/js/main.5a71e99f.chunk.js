(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__ZaFw7",control:"Checkout_control__2fluA",actions:"Checkout_actions__1DZ1G",submit:"Checkout_submit__1SF7T",invalid:"Checkout_invalid__3DlyX"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3E-Oe",total:"Cart_total__1riqQ",actions:"Cart_actions__1_wBE","button--alt":"Cart_button--alt__AyMKt",button:"Cart_button__1FpYw"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2ybVE",summary:"CartItem_summary__CE84M",price:"CartItem_price__-ewyf",amount:"CartItem_amount__2j8eo",actions:"CartItem_actions__3SnRK"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__28hqL",icon:"HeaderCartButton_icon__3Krda",badge:"HeaderCartButton_badge__3BFrD",bump:"HeaderCartButton_bump__bnToK"}},,,,function(e,t,n){e.exports={meal:"MealItem_meal__12LYP",description:"MealItem_description__2fvT-",price:"MealItem_price__119xs"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2YQdl","meals-appear":"AvailableMeals_meals-appear__1ifr1",MealsIsLoading:"AvailableMeals_MealsIsLoading__IVGXV",MealsError:"AvailableMeals_MealsError__-CUPJ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3LUy2",modal:"Modal_modal__1zL0v","slide-down":"Modal_slide-down__2H9Ic"}},function(e,t,n){e.exports={header:"Header_header__NwJZD","main-image":"Header_main-image__1NhLb"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__Cn368"}},function(e,t,n){e.exports={card:"Card_card__1Z5kd"}},function(e,t,n){e.exports={input:"Input_input__itGTe"}},function(e,t,n){e.exports={form:"MealItemForm_form__3Ban_"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(19),a=n.n(c),r=(n(31),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(9),j=n.n(d),m=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useContext)(u).items,d=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(16),h=n.n(O),x=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:h.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:h.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},f=n(20),p=n.n(f),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n(12),y=n(21),N=n.n(y),g=function(e){return Object(o.jsx)("div",{className:N.a.card,children:e.children})},A=n(5),I=n(22),k=n.n(I),w=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:k.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(A.a)({ref:t},e.input))]})})),M=n(23),S=n.n(M),F=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(w,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},E=n(13),R=n.n(E),D=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:R.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:R.a.description,children:e.description}),Object(o.jsx)("div",{className:R.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},H=n(14),P=n.n(H),T=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!0),i=Object(r.a)(a,2),l=i[0],u=i[1],d=Object(s.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,a,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://foodorder-aaea0-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:P.a.MealsIsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:P.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:P.a.meals,children:Object(o.jsx)(g,{children:Object(o.jsx)("ul",{children:O})})})},B=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(T,{})]})},L=n(10),V=n.n(L),Y=n(15),J=n.n(Y),z=function(e){return Object(o.jsx)("div",{className:J.a.backdrop,onClick:e.onClose})},K=function(e){return Object(o.jsx)("div",{className:J.a.modal,children:Object(o.jsx)("div",{className:J.a.content,children:e.children})})},Z=document.getElementById("overlays"),q=function(e){return Object(o.jsxs)(s.Fragment,{children:[V.a.createPortal(Object(o.jsx)(z,{onClose:e.onClose}),Z),V.a.createPortal(Object(o.jsx)(K,{children:e.children}),Z)]})},G=n(7),$=n.n(G),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:$.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:$.a.summary,children:[Object(o.jsx)("span",{className:$.a.price,children:t}),Object(o.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:$.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(4),X=n.n(U),W=n(3),ee=n.n(W),te=function(e){return""===e.trim()},ne=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=Object(s.useRef)(),j="".concat(ee.a.control," ").concat(c.name?"":ee.a.invalid),m="".concat(ee.a.control," ").concat(c.street?"":ee.a.invalid),b="".concat(ee.a.control," ").concat(c.postalCode?"":ee.a.invalid),O="".concat(ee.a.control," ").concat(c.city?"":ee.a.invalid);return Object(o.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=l.current.value,r=u.current.value,s=d.current.value,o=!te(n),j=!te(c),m=!te(s),b=5===r.trim().length;a({name:o,street:j,city:m,postalCode:b}),o&&j&&m&&b&&e.onConfirm({name:n,street:c,city:s,postalCode:r})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:ee.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:ee.a.submit,children:"Confirm"})]})]})},ce=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],f=Object(s.useContext)(u),p="$".concat(f.totalAmount.toFixed(2)),_=f.items.length>0,y=function(e){f.removeItem(e)},N=function(e){f.addItem(e)},g=function(){var e=Object(C.a)(Object(v.a)().mark((function e(t){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-6b4a6.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:f.items})});case 3:m(!1),x(!0),f.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:X.a["cart-items"],children:f.items.map((function(e){return Object(o.jsx)(Q,{name:e.name,amount:e.amount,price:e.price,onRemove:y.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),I=Object(o.jsxs)("div",{className:X.a.actions,children:[Object(o.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:X.a.button,onClick:function(){a(!0)},children:"Order"})]}),k=Object(o.jsxs)(i.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:X.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),c&&Object(o.jsx)(ne,{onConfirm:g,onCancel:e.onClose}),!c&&I]}),w=Object(o.jsx)("p",{children:"Sending order data..."}),M=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:X.a.actions,children:Object(o.jsx)("button",{className:X.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(q,{onClose:e.onClose,children:[!j&&!h&&k,j&&w,!j&&h&&M]})},ae=n(17),re={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var s=Object(A.a)(Object(A.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[a]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,re},ie=function(e){var t=Object(s.useReducer)(se,re),n=Object(r.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})};var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(ce,{onClose:function(){c(!1)}}),Object(o.jsx)(x,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(B,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(oe,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.5a71e99f.chunk.js.map