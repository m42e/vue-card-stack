(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(145).concat([function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));n(18),n(67),n(106),n(179),n(41),n(29),n(152),n(43),n(180),n(68);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,r){var i=n.pages,a=n.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=s.sidebar||a.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,o),c=u.base,l=u.config;return l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){var r=n(17),i="["+n(146)+"]",a=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},,,,,function(t,e,n){"use strict";var r=n(103),i=n(9),a=n(14),s=n(17),o=n(104),u=n(105);r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=i(t),c=String(this);if(!s.global)return u(s,c);var l=s.unicode;s.lastIndex=0;for(var f,h=[],p=0;null!==(f=u(s,c));){var d=String(f[0]);h[p]=d,""===d&&(s.lastIndex=o(c,a(s.lastIndex),l)),p++}return 0===p?null:h}]}))},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,function(t,e,n){"use strict";n(100),n(63),n(176);var r=n(145),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=n(28),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},function(t,e){t.exports=function(t){return null==t}},function(t,e,n){var r=n(199).Symbol;t.exports=r},function(t,e,n){"use strict";n.r(e);n(100);var r=n(145),i={name:"SidebarGroup",components:{DropdownTransition:n(175).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(173).default},methods:{isActive:r.e}},a=(n(207),n(28)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(208),n(41);function o(t,e,n,r,i){var a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}};return i>2&&(a.style={"padding-left":i+"rem"}),t("RouterLink",a,n)}function u(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),u(t,e.children,n,i,a,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(r.e)(a,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(r.e)(a,f.basePath+"#"+t.slug)})):p,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),v=[i.frontmatter.sidebarDepth,h,c.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||s.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,a,v)]:(d||m)&&f.headers&&!r.d.test(f.path)?[g,u(t,Object(r.c)(f.headers),f.path,a,v)]:g}};n(209);function l(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(r.e)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},h=Object(a.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},function(t,e,n){"use strict";n(188),n(41),n(100),n(63),n(189),n(29),n(190),n(152),n(43);var r=n(39),i=n(170),a=n(175),s=n(192),o=n.n(s),u={name:"DropdownLink",components:{NavLink:i.a,DropdownTransition:a.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t}}},c=(n(193),n(28)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(r){return n("li",{key:r.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:r},on:{focusout:function(n){t.isLastItemOfArray(r,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,f=n(145),h={name:"NavLinks",components:{NavLink:i.a,DropdownLink:l},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var s,o=e[r],u=a[r]&&a[r].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===s}))||(s=r)),{text:u,link:s}}))};return[].concat(Object(r.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(f.j)(t),{items:(t.items||[]).map(f.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}},p=(n(194),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=p.exports},function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(191),n(28)),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var r=n(1),i=n(177);r({target:"String",proto:!0,forced:n(178)("link")},{link:function(t){return i(this,"a","href",t)}})},function(t,e,n){var r=n(17),i=/"/g;t.exports=function(t,e,n,a){var s=String(r(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),o+">"+s+"</"+e+">"}},function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},function(t,e,n){"use strict";var r=n(1),i=n(44),a=n(11),s=n(32),o=[].join,u=i!=Object,c=s("join",",");r({target:"Array",proto:!0,forced:u||!c},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var r=n(103),i=n(101),a=n(9),s=n(17),o=n(181),u=n(104),c=n(14),l=n(105),f=n(47),h=n(3),p=[].push,d=Math.min,g=!h((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,a);for(var o,u,c,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,h+"g");(o=f.call(g,r))&&!((u=g.lastIndex)>d&&(l.push(r.slice(d,o.index)),o.length>1&&o.index<r.length&&p.apply(l,o.slice(1)),c=o[0].length,d=u,l.length>=a));)g.lastIndex===o.index&&g.lastIndex++;return d===r.length?!c&&g.test("")||l.push(""):l.push(r.slice(d)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,i,n):r.call(String(i),e,n)},function(t,i){var s=n(r,t,this,i,r!==e);if(s.done)return s.value;var f=a(t),h=String(this),p=o(f,RegExp),v=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),b=new p(g?f:"^(?:"+f.source+")",m),k=void 0===i?4294967295:i>>>0;if(0===k)return[];if(0===h.length)return null===l(b,h)?[h]:[];for(var _=0,x=0,y=[];x<h.length;){b.lastIndex=g?x:0;var C,L=l(b,g?h:h.slice(x));if(null===L||(C=d(c(b.lastIndex+(g?0:x)),h.length))===_)x=u(h,x,v);else{if(y.push(h.slice(_,x)),y.length===k)return y;for(var $=1;$<=L.length-1;$++)if(y.push(L[$]),y.length===k)return y;x=_=C}}return y.push(h.slice(_)),y}]}),!g)},function(t,e,n){var r=n(9),i=n(64),a=n(2)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||null==(n=r(s)[a])?e:i(n)}},function(t,e,n){"use strict";var r=n(153);n.n(r).a},function(t,e,n){"use strict";e.a={}},function(t,e,n){"use strict";var r=n(1),i=n(147).trim;r({target:"String",proto:!0,forced:n(185)("trim")},{trim:function(){return i(this)}})},function(t,e,n){var r=n(3),i=n(146);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},function(t,e,n){"use strict";var r=n(154);n.n(r).a},function(t,e,n){"use strict";var r=n(155);n.n(r).a},function(t,e,n){"use strict";var r=n(1),i=n(3),a=n(45),s=n(6),o=n(15),u=n(14),c=n(65),l=n(107),f=n(46),h=n(2),p=n(108),d=h("isConcatSpreadable"),g=p>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),v=f("concat"),m=function(t){if(!s(t))return!1;var e=t[d];return void 0!==e?!!e:a(t)};r({target:"Array",proto:!0,forced:!g||!v},{concat:function(t){var e,n,r,i,a,s=o(this),f=l(s,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?s:arguments[e],m(a)){if(h+(i=u(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<i;n++,h++)n in a&&c(f,h,a[n])}else{if(h>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(f,h++,a)}return f.length=h,f}})},function(t,e,n){var r=n(8),i=n(4),a=n(62),s=n(99),o=n(7).f,u=n(42).f,c=n(101),l=n(102),f=n(110),h=n(13),p=n(3),d=n(21).set,g=n(112),v=n(2)("match"),m=i.RegExp,b=m.prototype,k=/a/g,_=/a/g,x=new m(k)!==k,y=f.UNSUPPORTED_Y;if(r&&a("RegExp",!x||y||p((function(){return _[v]=!1,m(k)!=k||m(_)==_||"/a/i"!=m(k,"i")})))){for(var C=function(t,e){var n,r=this instanceof C,i=c(t),a=void 0===e;if(!r&&i&&t.constructor===C&&a)return t;x?i&&!a&&(t=t.source):t instanceof C&&(a&&(e=l.call(t)),t=t.source),y&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=s(x?new m(t,e):m(t,e),r?this:b,C);return y&&n&&d(o,{sticky:n}),o},L=function(t){t in C||o(C,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},$=u(m),w=0;$.length>w;)L($[w++]);b.constructor=C,C.prototype=b,h(i,"RegExp",C)}g("RegExp")},function(t,e,n){"use strict";var r=n(13),i=n(9),a=n(3),s=n(102),o=RegExp.prototype,u=o.toString,c=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(c||l)&&r(RegExp.prototype,"toString",(function(){var t=i(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in o)?s.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(156);n.n(r).a},function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},function(t,e,n){"use strict";var r=n(157);n.n(r).a},function(t,e,n){"use strict";var r=n(158);n.n(r).a},,function(t,e,n){"use strict";var r=n(160);n.n(r).a},function(t,e,n){var r=n(198),i=n(203),a=n(204);t.exports=function(t){return"string"==typeof t||!i(t)&&a(t)&&"[object String]"==r(t)}},function(t,e,n){var r=n(172),i=n(201),a=n(202),s=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?i(t):a(t)}},function(t,e,n){var r=n(200),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},function(t,e,n){var r=n(172),i=Object.prototype,a=i.hasOwnProperty,s=i.toString,o=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,o),n=t[o];try{t[o]=void 0;var r=!0}catch(t){}var i=s.call(t);return r&&(e?t[o]=n:delete t[o]),i}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";var r=n(161);n.n(r).a},function(t,e,n){"use strict";var r=n(162);n.n(r).a},function(t,e,n){"use strict";var r=n(163);n.n(r).a},function(t,e,n){"use strict";var r=n(1),i=n(22).find,a=n(66),s=n(12),o=!0,u=s("find");"find"in[]&&Array(1).find((function(){o=!1})),r({target:"Array",proto:!0,forced:o||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},function(t,e,n){"use strict";var r=n(164);n.n(r).a},function(t,e,n){"use strict";var r=n(165);n.n(r).a},,,,,function(t,e,n){"use strict";n(18),n(109),n(106),n(29),n(111),n(152),n(184);var r={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},a=[],s=0;s<e.length&&!(a.length>=n);s++){var o=e[s];if(this.getPageLocalePath(o)===r&&this.isSearchable(o))if(i(o))a.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(a.length>=n);u++){var c=o.headers[u];i(c)&&a.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return a}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},i=(n(186),n(28)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=a.exports},,function(t,e,n){"use strict";n(187);var r=n(28),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=i.exports},function(t,e,n){"use strict";n.r(e);var r={name:"Home",components:{NavLink:n(170).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(n(182),n(28)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,s=n(216),o=(n(29),n(43),n(171)),u=n.n(o),c=n(145),l={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=u()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,r=e.docsDir,i=void 0===r?"":r,a=e.docsBranch,s=void 0===a?"master":a,o=e.docsRepo,c=void 0===o?n:o;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,i,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,i){return/bitbucket.org/.test(t)?(c.i.test(e)?e:t).replace(c.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(c.a,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(c.i.test(e)?e:"https://github.com/".concat(e)).replace(c.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(c.a,"")+"/":"")+i}}},f=(n(196),Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),h=n(197),p=n.n(h),d={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return v(g.PREV,this)},next:function(){return v(g.NEXT,this)}}};var g={NEXT:{resolveLink:function(t,e){return m(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return m(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function v(t,e){var n=e.$themeConfig,r=e.$page,i=e.$route,a=e.$site,s=e.sidebarItems,o=t.resolveLink,l=t.getThemeLinkConfig,f=t.getPageLinkConfig,h=l(n),d=f(r),g=u()(d)?h:d;return!1===g?void 0:p()(g)?Object(c.k)(a.pages,g,i.path):o(r,s)}function m(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var a=r[i];if("page"===a.type&&a.path===decodeURIComponent(t.path))return r[i+n]}}var b=d,k=(n(205),{components:{PageEdit:f,PageNav:Object(i.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),_=(n(206),Object(i.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),x=n(173),y=n(174),C={name:"Sidebar",components:{SidebarLinks:x.default,NavLinks:y.a},props:["items"]},L=(n(210),{name:"Layout",components:{Home:a,Page:_,Sidebar:Object(i.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:s.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(c.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),$=Object(i.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=$.exports}])]);