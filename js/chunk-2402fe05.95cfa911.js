(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2402fe05"],{"21bb":function(t,s,e){"use strict";var a=e("bcc9"),i=e.n(a);i.a},bb51:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row"},t._l(t.prepereadList,function(s){return e("div",{key:s.id,staticClass:"col s6 m4 l3 xl2"},[e("div",{staticClass:"card large"},[e("div",[e("div",{staticClass:"card-image"},[e("img",{staticClass:"materialboxed",attrs:{height:"150",src:s.image}})]),e("div",{staticClass:"card-content"},[e("h4",[t._v(t._s(t.shorten(s.title,5)))]),e("h5",[t._v(t._s(s.price))]),e("h6",[t._v(t._s(t.shorten(s.about,9))+" ...")])])]),e("div",{staticClass:"card-action"},[e("button",{staticClass:"waves-effect waves-light btn-small",on:{click:function(e){return t.addToBuy(s)}}},[t._v("\n              Add\n            ")]),t._m(0,!0)])])])}),0)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"waves-effect waves-light btn-small"},[e("a",{attrs:{href:"/profile"}},[t._v("Buy")])])}],n=(e("28a5"),e("b6d0")),r=e.n(n),c=e("774e"),o=e.n(c),l=e("4d75"),u={data:function(){return{myJson:l,listOfCategory:o()(new r.a(l.map(function(t){var s=t.category;return s}))),prepereadList:l,showCategory:!1,shopList:[]}},methods:{shorten:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return t.split(" ").slice(0,s).join(" ")},defaultPrepereadList:function(){this.prepereadList=this.myJson},addToBuy:function(t){this.shopList.push(t),console.log(this.shopList)}}},d=u,h=(e("21bb"),e("2877")),f=Object(h["a"])(d,a,i,!1,null,null,null);s["default"]=f.exports},bcc9:function(t,s,e){}}]);
//# sourceMappingURL=chunk-2402fe05.95cfa911.js.map