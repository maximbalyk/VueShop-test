(function(e){function t(t){for(var a,r,i=t[0],l=t[1],s=t[2],u=0,f=[];u<i.length;u++)r=i[u],o[r]&&f.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d2086b7":"ea7d9901","chunk-2d217357":"af49cba0","chunk-2d217a99":"c0bd02f8","chunk-3828022c":"7d3ddf14","chunk-2402fe05":"95cfa911","chunk-4e078908":"0fa379f0","chunk-64f74e5e":"07d64e04","chunk-803248e2":"bb8c78ca","chunk-abbf885a":"77a9ecf0"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-2402fe05":1,"chunk-4e078908":1,"chunk-64f74e5e":1,"chunk-803248e2":1,"chunk-abbf885a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d2086b7":"31d6cfe0","chunk-2d217357":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-3828022c":"31d6cfe0","chunk-2402fe05":"92647ec0","chunk-4e078908":"92647ec0","chunk-64f74e5e":"92647ec0","chunk-803248e2":"92647ec0","chunk-abbf885a":"92647ec0"}[e]+".css",o=l.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],u=s.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete r[e],p.parentNode.removeChild(p),n(c)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e),s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:u})},12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/VueShop-test/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("1dce"),o=n.n(r),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grey darken-1 empty-layout"},[n("router-view")],1)},s=[],u=n("2877"),f={},p=Object(u["a"])(f,l,s,!1,null,null,null),h=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main-layout"},[n("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),n("Sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),n("main",{staticClass:"app-content",class:{full:!e.isOpen}},[n("div",{staticClass:"app-page"},[n("router-view")],1)]),e._m(0)],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"page-footer blue footer-position"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col l6 s12"},[n("h5",{staticClass:"white-text"},[e._v("Служба підтримки")]),n("div",{staticClass:"white-text"},[n("a",{staticClass:"white-text",attrs:{href:"tel:+80000000000"}},[e._v("+8 (000) 000-00-00")])]),n("span",{staticClass:"grey-text text-lighten-4 "},[e._v("\n            Графік роботи колл-центру "),n("br"),e._v(" Цілодобово\n          ")])]),n("div",{staticClass:"col l4 offset-l2 s12"},[n("h5",{staticClass:"white-text"},[e._v("KropShop")]),n("ul",[n("li",[n("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[e._v("Про компанію")])]),n("li",[n("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[e._v("Контакти")])]),n("li",[n("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[e._v("Правова інформація")])]),n("li",[n("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"#!"}},[e._v("Стати партнером")])])])])])]),n("div",{staticClass:"footer-copyright"},[n("div",{staticClass:"container"},[e._v("\n      © 2014 KropShop\n      ")])])])}],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar blue lighten-1"},[n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"navbar-left"},[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[n("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),n("span",{staticClass:"brand-logo center"},[e._v("KropShop")])])])])},b=[],g={},k=Object(u["a"])(g,v,b,!1,null,null,null),y=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,function(t){return n("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[n("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])}),1)},_=[],C={props:["value"],data:function(){return{links:[{title:"Всі товари",url:"/",exact:!0},{title:"Смартфони",url:"/smartphones"},{title:"Ноутбуки",url:"/notebooks"},{title:"Фітнес браслети",url:"/bracelets"},{title:"Фотоапарати",url:"/cameras"},{title:"Оформить заказ",url:"/profile"}]}}},x=C,O=Object(u["a"])(x,w,_,!1,null,null,null),j=O.exports,S={name:"main-layout",data:function(){return{isOpen:!0}},components:{Navbar:y,Sidebar:j}},E=S,P=(n("89d3"),Object(u["a"])(E,d,m,!1,null,null,null)),N=P.exports,$={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:h,MainLayout:N}},T=$,A=(n("5c0b"),Object(u["a"])(T,c,i,!1,null,null,null)),M=A.exports,B=n("8c4f");a["a"].use(B["a"]);var L=new B["a"]({mode:"history",base:"/VueShop-test/",routes:[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/",name:"home",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-3828022c"),n.e("chunk-2402fe05")]).then(n.bind(null,"bb51"))}},{path:"/cameras",name:"cameras",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-3828022c"),n.e("chunk-803248e2")]).then(n.bind(null,"b64b"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main"},component:function(){return n.e("chunk-2d217a99").then(n.bind(null,"c84b"))}},{path:"/smartphones",name:"smartphones",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-3828022c"),n.e("chunk-64f74e5e")]).then(n.bind(null,"21a1"))}},{path:"/notebooks",name:"notebooks",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-3828022c"),n.e("chunk-abbf885a")]).then(n.bind(null,"04d1"))}},{path:"/profile",name:"profile",meta:{layout:"main"},component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/bracelets",name:"bracelets",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-3828022c"),n.e("chunk-4e078908")]).then(n.bind(null,"2e9f"))}}]}),q=n("2f62");a["a"].use(q["a"]);var K=new q["a"].Store({state:{},mutations:{},actions:{}}),V=n("9483");Object(V["a"])("".concat("/VueShop-test/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("6885");a["a"].config.productionTip=!1,a["a"].use(o.a),new a["a"]({router:L,store:K,render:function(e){return e(M)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},"89d3":function(e,t,n){"use strict";var a=n("8c68"),r=n.n(a);r.a},"8c68":function(e,t,n){}});
//# sourceMappingURL=app.6cd04348.js.map