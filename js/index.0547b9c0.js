(function(t){function e(e){for(var n,a,s=e[0],l=e[1],c=e[2],d=0,u=[];d<s.length;d++)a=s[d],i[a]&&u.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);b&&b(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var l=o[a];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={index:0},r=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-4b4f7846":"8c8c48ff"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=i[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=i[t]=[e,n]});e.push(o[2]=n);var r,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t),r=function(e){c.onerror=c.onload=null,clearTimeout(d);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,o[1](a)}i[t]=void 0}};var d=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,l.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/bt-ui/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var b=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("c31f")},"13dc":function(t,e,o){var n=o("aff4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("7330fa00",n,!0,{sourceMap:!1,shadowMode:!1})},"18cf":function(t,e,o){"use strict";var n=o("77a3"),i=o.n(n);i.a},"2b69":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".bt-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #bfcbd9;color:#1f2d3d;-webkit-appearance:none;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;outline:0;margin:0;border-radius:4px;padding:12px 20px;font-size:14px}.bt-button.is-round{border-radius:20px}.bt-button--size-medium{padding:10px 20px;font-size:14px;border-radius:4px}.bt-button--size-small{padding:9px 15px;font-size:12px;border-radius:3px}.bt-button--default{background:#fff;border:1px solid #bfcbd9;color:#1f2d3d}.bt-button--default:focus,.bt-button--default:hover{background:rgba(63,170,245,.05);border-color:rgba(63,170,245,.08);color:#3faaf5}.bt-button--default:active{background:#fff;outline:0}.bt-button--default:disabled{background:#fff;border:1px solid #3faaf5;color:#1f2d3d;opacity:.3;cursor:not-allowed}.bt-button--default.is-plain{border:1px solid #3faaf5}.bt-button--default.is-plain:focus,.bt-button--default.is-plain:hover{background:#fff;border-color:rgba(63,170,245,.8);color:#3faaf5}.bt-button--default.is-plain:active{background:#fff;outline:0}.bt-button--default.is-plain:disabled{opacity:.3;cursor:not-allowed;background:#fff;border:1px solid #bfcbd9;color:#1f2d3d}.bt-button--primary{background:#3faaf5;border:1px solid #3faaf5;color:#fff}.bt-button--primary:focus,.bt-button--primary:hover{opacity:.7}.bt-button--primary:disabled{opacity:.3;cursor:not-allowed}.bt-button--primary.is-plain{background:rgba(63,170,245,.05);border-color:#3faaf5;color:#3faaf5}.bt-button--primary.is-plain:focus,.bt-button--primary.is-plain:hover{opacity:1;background:#3faaf5;border:1px solid #3faaf5;color:#fff}.bt-button--primary.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(63,170,245,.05);border-color:rgba(63,170,245,.08);color:#3faaf5}.bt-button--success{background:#13ce66;border:1px solid #13ce66;color:#fff}.bt-button--success:focus,.bt-button--success:hover{opacity:.7}.bt-button--success:disabled{opacity:.3;cursor:not-allowed}.bt-button--success.is-plain{background:rgba(19,206,102,.05);border-color:rgba(19,206,102,.8);color:#13ce66}.bt-button--success.is-plain:focus,.bt-button--success.is-plain:hover{opacity:1;background:#13ce66;border:1px solid #13ce66;color:#fff}.bt-button--success.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(63,170,245,.05);border-color:rgba(63,170,245,.08);color:#3faaf5}.bt-button--info{background:#909399;border:1px solid #909399;color:#fff}.bt-button--info:focus,.bt-button--info:hover{opacity:.7}.bt-button--info:disabled{opacity:.3;cursor:not-allowed}.bt-button--info.is-plain{background:#f4f4f5;border-color:#d3d4d6;color:#909399}.bt-button--info.is-plain:focus,.bt-button--info.is-plain:hover{opacity:1;background:#909399;border:1px solid #909399;color:#fff}.bt-button--info.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(80,191,255,.05);border-color:rgba(80,191,255,.08);color:#50bfff}.bt-button--warning{background:#f7ba2a;border:1px solid #f7ba2a;color:#fff}.bt-button--warning:focus,.bt-button--warning:hover{opacity:.7}.bt-button--warning:disabled{opacity:.3;cursor:not-allowed}.bt-button--warning.is-plain{background:rgba(247,186,42,.05);border-color:rgba(247,186,42,.08);color:#f7ba2a}.bt-button--warning.is-plain:focus,.bt-button--warning.is-plain:hover{background:#f7ba2a;border:1px solid #f7ba2a;color:#fff}.bt-button--warning.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(247,186,42,.05);border-color:rgba(247,186,42,.08);color:#f7ba2a}.bt-button--danger{background:#ff4949;border:1px solid #ff4949;color:#fff}.bt-button--danger:focus,.bt-button--danger:hover{opacity:.7}.bt-button--danger:disabled{opacity:.3;cursor:not-allowed}.bt-button--danger.is-plain{background:rgba(255,73,73,.05);border-color:rgba(255,73,73,.08);color:#ff4949}.bt-button--danger.is-plain:focus,.bt-button--danger.is-plain:hover{opacity:1;background:#ff4949;border:1px solid #ff4949;color:#fff}.bt-button--danger.is-plain:disabled{opacity:.3;cursor:not-allowed;background:rgba(255,73,73,.05);border-color:rgba(255,73,73,.08);color:#ff4949}.bt-button--text{color:#409eff;background:0 0;padding-left:0;padding-right:0}.bt-button--text:focus,.bt-button--text:hover{color:#66b1ff;border-color:transparent;background-color:transparent}.bt-button--text:disabled{opacity:.3;cursor:not-allowed;background:rgba(255,73,73,.05);border-color:rgba(255,73,73,.08);color:#ff4949}.bt-button--text:active{color:#3a8ee6;background-color:transparent}.bt-button--text,.bt-button--text.is-disabled,.bt-button--text.is-disabled:focus,.bt-button--text.is-disabled:hover,.bt-button--text:active{border-color:transparent}.bt-button.is-disabled.bt-button--text{background-color:transparent}.bt-scrollbar{overflow:hidden;position:relative}.bt-scrollbar:active .bt-scrollbar__thumb,.bt-scrollbar:focus .bt-scrollbar__thumb,.bt-scrollbar:hover .bt-scrollbar__thumb{opacity:.6;-webkit-transition:opacity .2s linear,width .2s ease-in-out,height .2s ease-in-out;transition:opacity .2s linear,width .2s ease-in-out,height .2s ease-in-out}.bt-scrollbar__bar{position:absolute;right:0;bottom:0;z-index:1;-webkit-transition:background-color .2s linear;transition:background-color .2s linear;background:transparent}.bt-scrollbar__bar.is-vertical{width:15px;top:0}.bt-scrollbar__bar.is-vertical.draging{background-color:#d9dfe8}.bt-scrollbar__bar.is-vertical>div{top:0;right:2px;width:6px}.bt-scrollbar__bar.is-vertical:hover{background-color:#d9dfe8}.bt-scrollbar__bar.is-vertical:hover>div{opacity:1;width:11px}.bt-scrollbar__bar.is-horizontal{height:15px;left:0}.bt-scrollbar__bar.is-horizontal.draging{background-color:#d9dfe8}.bt-scrollbar__bar.is-horizontal>div{left:0;bottom:2px;height:6px}.bt-scrollbar__bar.is-horizontal:hover{background-color:#d9dfe8}.bt-scrollbar__bar.is-horizontal:hover>div{opacity:1;height:11px}.bt-scrollbar__thumb{position:absolute;display:block;width:0;height:0;cursor:pointer;border-radius:4px;background-color:#d3e5ff;border:1px solid #9cc5ff;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box}.bt-scrollbar__thumb.draging{opacity:1!important;height:11px!important}.bt-scrollbar__wrap{overflow:scroll;height:100%}.bt-scrollbar__wrap.nativeScroll-hide::-webkit-scrollbar{width:0;height:0}.bt-scrollbar__wrap .resize{display:inline-block}",""])},"3ace":function(t,e,o){var n=o("90ef");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("4e877be0",n,!0,{sourceMap:!1,shadowMode:!1})},"4d1c":function(t,e,o){"use strict";var n=o("e52f"),i=o.n(n);i.a},"54b3":function(t,e,o){t.exports=o.p+"img/logo.c7dda3ef.png"},"585e":function(t,e,o){var n=o("a368");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("6abd59be",n,!0,{sourceMap:!1,shadowMode:!1})},"77a3":function(t,e,o){var n=o("ebd5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("396a3ad8",n,!0,{sourceMap:!1,shadowMode:!1})},"794a":function(t,e,o){var n=o("2b69");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("795affcf",n,!0,{sourceMap:!1,shadowMode:!1})},"90ef":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"\n.side-nav{display:inline-block;margin:32px 0;padding:0;color:#3f536e;height:100%;background-color:#fff;z-index:10\n}\n.side-nav .group-container{margin-bottom:25px\n}\n.side-nav .group-container .side-nav-title{color:#333;padding:0 24px 8px;font-size:16px;font-weight:700;letter-spacing:1px;text-transform:uppercase\n}\n.side-nav .group-container .side-nav-items{font-size:14px;font-weight:400;line-height:1.8\n}\n.side-nav .group-container .side-nav-items a{display:block;color:#3f536e;padding:8px 24px;position:relative;line-height:1.5;cursor:pointer\n}\n.side-nav .group-container .side-nav-items a.active,.side-nav .group-container .side-nav-items a:hover{color:#005cf9\n}\n.side-nav .group-container .side-nav-items .side-nav-group{padding-left:24px;color:#616367;font-size:12px;font-weight:700\n}\n.side-nav .group-container .side-nav-items .side-nav-component{display:block;position:relative;padding:6px 24px 6px 32px;color:#616367;font-size:14px\n}\n.side-nav .group-container .side-nav-items .side-nav-component:hover{color:#005cf9\n}",""])},9505:function(t,e,o){var n=o("f8e0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("2eb12178",n,!0,{sourceMap:!1,shadowMode:!1})},"96ac":function(t,e,o){"use strict";var n=o("13dc"),i=o.n(n);i.a},"97d9":function(t){t.exports={"开发指南":[{path:"/",redirect:"/introduce"},{path:"/introduce",name:"介绍"},{path:"/install",name:"安装"},{path:"/quickstart",name:"快速开始"},{path:"/changelog",name:"更新日志"},{path:"/todolist",name:"TodoList"}],"基本组件":[{path:"/",name:"基础组件",children:[{path:"/button",name:"Button 按钮"},{path:"/tag",name:"Tag 标签"}]},{path:"/",name:"视图组件",children:[{path:"/message",name:"Message 消息提示"},{path:"/notification",name:"Notification 通知"}]},{path:"/",name:"表单组件",children:[{path:"/input",name:"Input 输入框"},{path:"/radio",name:"Radio 单选框"},{path:"/checkbox",name:"Checkbox 复选框"},{path:"/select",name:"Select 选择器"}]},{path:"/",name:"其他组件",children:[{path:"/tooltip",name:"Tooltip 文字提示"}]}],"业务组件":[{path:"/",name:"bt业务组件",children:[{path:"/scrollbar",name:"Scrollbar 滚动条"}]}]}},a368:function(t,e,o){e=t.exports=o("2350")(!1),e.i(o("ca90"),""),e.push([t.i,"body{background:#fff;color:#333;font:14px/1.5 -apple-system-font,Helvetica Neue,Helvetica,STHeiTi,Microsoft YaHei,sans-serif;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-overflow-scrolling:touch;font-family:SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif}body,ul{margin:0;padding:0}ul{list-style:none}li{padding:0}em{font-style:normal}a{border-bottom:0 solid currentColor;color:#005cf9;text-decoration:none}a:hover{color:#2978f7}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit}button{background:none;border:0;border-radius:0;outline:0;-webkit-appearance:none}button:disabled,button:disabled:hover,button[disabled],button[disabled]:hover{cursor:default}section{color:#1f2f3d;font-size:14px}section ul{margin:16px 0;padding-left:24px;list-style:disc}section ul li{line-height:1.8}section .le{padding:32px;border:1px solid #e2ecf4;border-radius:4px 4px 0 0;background-color:#fff;margin-top:16px}section h1,section h2,section h3,section h4,section h5{margin:16px 0!important;line-height:1.5;font-weight:500}section h1{font-size:28px}section hr{margin:1.2em 0;border:0;border-bottom:1px solid #c5d9e8}section p{padding:0;line-height:1.7;color:#3f536e;font-size:14px;margin:0}section p code{color:#5e6d82;background-color:#e6effb;margin:0 4px;display:inline-block;padding:1px 5px;border-radius:3px;height:18px;line-height:1;word-wrap:break-word}.table{display:block;width:100%;background-color:#fff;font-size:14px;border-collapse:collapse;margin-bottom:45px;overflow:auto}.table th{background-color:#fafbfc;text-align:left;color:#5c6b77}.table td,.table th{border-top:1px solid #f3f7fa;border-bottom:1px solid #d8d8d8;padding:15px 20px}.table td{color:#314659}.table td:first-child,.table td:last-child{width:10%}.table td:nth-child(2){width:30%}.table td:nth-child(3){color:#c41d7f;width:10%}.table td:nth-child(4){width:25%}.demo-block .bt-button{margin-left:10px}",""])},a973:function(t,e,o){"use strict";var n=o("3ace"),i=o.n(n);i.a},a989:function(t,e,o){"use strict";var n=o("9505"),i=o.n(n);i.a},aff4:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"\n.demo-block{margin:15px auto;border:1px solid #ebebeb;border-radius:3px;-webkit-transition:all .2s linear;transition:all .2s linear\n}\n.demo-block .source{padding:24px\n}\n.demo-block .source>div{margin-bottom:20px\n}\n.demo-block .source>div:last-child{margin-bottom:0\n}\n.demo-block .meta{background-color:#fafafa;border-top:1px solid #eaeefb;overflow:hidden;height:0;-webkit-transition:height .2s;transition:height .2s\n}\n.demo-block .meta .description{padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #ebebeb;border-radius:3px;font-size:14px;line-height:22px;color:#666;word-break:break-word;margin:10px;background-color:#fff\n}\n.demo-block .meta .highlight pre{margin:0\n}\n.demo-block .meta .highlight pre code{display:block;background:#fafafa;padding:18px 24px;overflow-x:auto\n}\n.demo-block-control{border-top:1px solid #eaeefb;height:44px;line-height:44px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px;text-align:center;margin-top:-1px;color:#409eff;cursor:pointer;position:relative\n}\n.demo-block-control:hover{color:#005cf9;background-color:#f9fafc\n}",""])},b4f2:function(t,e,o){"use strict";var n=o("d219"),i=o.n(n);i.a},ba47:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"\n.multiple-page{margin:auto\n}\n.multiple-page,.multiple-page .pages-list{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex\n}\n.multiple-page .pages-list{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0\n}\n.multiple-page .pages-list .pages-layout{display:inline-block;height:54px;width:80px;margin-left:8px;border:1px solid #412345\n}",""])},c31f:function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("btHeader"),o("div",{staticClass:"page-container"},[o("div",{staticClass:"page-body"},[o("btNav",{staticClass:"nav"}),o("router-view",{staticClass:"main"})],1)])],1)},r=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-header"},[t._m(0),o("a",{staticClass:"github",attrs:{href:"https://github.com/ouyangshikang/bt-ui"}},[o("span",[t._v("Github")]),o("svg",{attrs:{"aria-hidden":"true",height:"70",version:"1.1",viewBox:"0 0 16 16",width:"30"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"logo",attrs:{href:"/"}},[n("img",{attrs:{src:o("54b3")}}),n("span",[t._v("BT-UI")])])}],l=(o("a989"),o("2877")),c={},d=Object(l["a"])(c,a,s,!1,null,null,null);d.options.__file="bt-header.vue";var b=d.exports,u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"side-nav"},t._l(Object.keys(t.data),function(e,n){return o("div",{key:n,staticClass:"group-container"},[o("p",{staticClass:"side-nav-title"},[t._v(t._s(e))]),t._l(t.data[e],function(e,n){return o("div",{key:n,staticClass:"side-nav-items"},[e.children?o("p",{staticClass:"side-nav-group"},[t._v(t._s(e.name))]):o("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v("\n                    "+t._s(e.name)+"\n                ")]),t._l(e.children,function(e,n){return o("div",{key:n},[o("router-link",{staticClass:"side-nav-component",class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v("\n                    "+t._s(e.name)+"\n                    ")])],1)})],2)})],2)}))},p=[],f=o("97d9"),h={name:"bt-nav",data(){return{data:f}},created(){}},g=h,m=(o("a973"),Object(l["a"])(g,u,p,!1,null,null,null));m.options.__file="bt-nav.vue";var x=m.exports,v={components:{btHeader:b,btNav:x}},w=v,k=(o("4d1c"),Object(l["a"])(w,i,r,!1,null,null,null));k.options.__file="App.vue";var y=k.exports,_=o("8c4f");n["a"].use(_["a"]);let z=[];Object.keys(f).forEach(t=>{f[t].forEach(t=>{t.children?z.push(...t.children):z.push(t)})});let E=t=>{t.forEach(t=>{t.component=(e=>o.e("chunk-4b4f7846").then((()=>e(o("828d")(`./docs${t.path}.md`))).bind(null,o)).catch(o.oe))})};E(z);var C=new _["a"]({routes:z}),H=(o("585e"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-block"},[t._t("source"),o("div",{staticClass:"meta",style:{height:t.isExpand?"auto":"0"}},[o("div",{staticClass:"description"},[t._t("default")],2),t._t("highlight")],2),o("div",{staticClass:"demo-block-control",on:{click:t.toggle}},[t._v(t._s(t.isExpand?"隐藏代码":"显示代码"))])],2)}),M=[],S={name:"demo-block",data(){return{isExpand:!1}},methods:{toggle(){this.isExpand=!this.isExpand}}},$=S,T=(o("96ac"),Object(l["a"])($,H,M,!1,null,null,null));T.options.__file="demo-block.vue";var j=T.exports,B=(o("794a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"bt-button",class:[t.type?"bt-button--"+t.type:"",t.size?"bt-button--size-"+t.size:"",{"is-disabled":t.disabled,"is-plain":t.plain,"is-round":t.round}],attrs:{disabled:t.disabled,type:t.nativeType},on:{click:t.handleClick}},[""!=t.icon?o("i",{class:t.icon}):t._e(),t._t("default")],2)}),L=[],O={name:"BtButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},nativeType:{type:String,default:"button"},disabled:Boolean,plain:Boolean,round:Boolean},methods:{handleClick(t){this.$emit("click",t)}}},P=O,W=Object(l["a"])(P,B,L,!1,null,null,null);W.options.__file="button.vue";var A=W.exports;A.install=function(t){t.component(A.name,A)};var D=A,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bt-scrollbar"},[!t.native&&t.sizeHeight?o("bar",{attrs:{width:t.sizeHeight,move:t.moveY}}):t._e(),!t.native&&t.sizeWidth?o("bar",{attrs:{width:t.sizeWidth,move:t.moveX,vertical:!1}}):t._e(),o("div",{ref:"wrap",staticClass:"bt-scrollbar__wrap",class:{"nativeScroll-hide":!t.native},on:{scroll:t.handleScroll}},[o("div",{ref:"resize",staticClass:"resize"},[t._t("default"),o("div",{staticClass:"multiple-page"},[o("ul",{staticClass:"pages-list"},t._l(t.layouts,function(t,e){return o("li",{key:e,staticClass:"pages-layout"})})),o("div",{staticClass:"pages-layout",on:{click:t.Addlayouts}},[t._v("+")])])],2)])],1)},R=[],U=o("6dd8"),Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scrollBar",staticClass:"bt-scrollbar__bar",class:[t.vertical?"is-vertical":"is-horizontal",{draging:t.cursorClick}],on:{mousedown:function(e){t.clickTrackHandler(e)}}},[o("div",{ref:"thumb",staticClass:"bt-scrollbar__thumb",class:{draging:t.cursorClick},style:t.thumbStyle,on:{mousedown:function(e){t.clickThumbHandler(e)}}})])},I=[];const X={vertical:{coord:"Y",width:"height",height:"width",offset:"offsetHeight",scroll:"scrollTop",client:"clientY",direction:"top",scrollSize:"scrollHeight"},horizontal:{coord:"X",width:"width",height:"height",offset:"offsetWidth",scroll:"scrollLeft",client:"clientX",direction:"left",scrollSize:"scrollWidth"}};var q={name:"bar",props:{vertical:{type:Boolean,default:!0},width:String,move:Number},data(){return{cursorClick:!1}},computed:{bar(){return X[this.vertical?"vertical":"horizontal"]},thumbStyle(){const t={},e=this.bar,o=`translate${e.coord}(${this.move}%)`;return t[e.width]=this.width,t.transform=o,t.msTransform=o,t.webkitTransform=o,t},wrap(){return this.$parent.wrap}},methods:{clickTrackHandler(t){const e=Math.abs(t.target.getBoundingClientRect()[this.bar.direction]-t[this.bar.client]),o=this.$refs.thumb[this.bar.offset]/2,n=100*(e-o)/this.$el[this.bar.offset];this.wrap[this.bar.scroll]=n*this.wrap[this.bar.scrollSize]/100},clickThumbHandler(t){const e=t.currentTarget;this[this.bar.coord]=e[this.bar.offset]-(t[this.bar.client]-e.getBoundingClientRect()[this.bar.direction]),this.dragThumb(t)},dragThumb(t){t.stopImmediatePropagation(),this.cursorClick=!0,document.addEventListener("mousemove",this.onMouseMoveHandle,!1),document.addEventListener("mouseup",this.onMouseUpHandle,!1)},onMouseMoveHandle(t){if(!this.cursorClick)return;const e=this.bar,o=this.$refs.thumb,n=this[e.coord];if(!n)return;const i=-1*(this.$el.getBoundingClientRect()[e.direction]-t[e.client]),r=o[e.offset]-n,a=100*(i-r)/this.$el[e.offset];this.wrap[e.scroll]=a*this.wrap[e.scrollSize]/100,console.log(i,o[e.offset],n,r)},onMouseUpHandle(){console.log("mouse up"),this.cursorClick=!1,document.removeEventListener("mousemove",this.onMouseMoveHandle,!1)}},destroyed(){document.removeEventListener("mouseup",this.onMouseUpHandle,!1)}},V=q,F=Object(l["a"])(V,Y,I,!1,null,null,null);F.options.__file="bar.vue";var J=F.exports,G={name:"BtScrollbar",props:{native:{type:Boolean,default:!1},noresize:{type:Boolean,default:!1}},components:{bar:J},data(){return{moveX:0,moveY:0,sizeWidth:"0",sizeHeight:"0",layouts:[0,1,2,3,4,5,6,1,2,3,4,5,6]}},computed:{wrap(){return this.$refs.wrap}},methods:{Addlayouts(){this.layouts.push(1)},handleScroll(){const t=this.wrap;this.moveY=100*t.scrollTop/t.clientHeight,this.moveX=100*t.scrollLeft/t.clientWidth},scrollUpdate(){const t=this.wrap;if(!t)return;let e=100*t.clientHeight/t.scrollHeight,o=100*t.clientWidth/t.scrollWidth;this.sizeHeight=e<100?e+"%":"",this.sizeWidth=o<100?o+"%":"",console.log(this.sizeHeight,this.sizeWidth)},addResizeListener(t){const e=new U["a"](t=>{t.forEach(t=>{console.log(t),this.scrollUpdate()})});e.observe(t)},removeResizeListener(t){const e=new U["a"](t=>{t.forEach(t=>{console.log(t),this.scrollUpdate()})});e.unobserve(t)}},mounted(){this.native||(this.$nextTick(this.scrollUpdate),!this.noresize&&this.addResizeListener(this.$refs.resize))},destroyed(){!this.noresize&&this.removeResizeListener(this.$refs.resize)}},K=G,Q=(o("b4f2"),Object(l["a"])(K,N,R,!1,null,null,null));Q.options.__file="scrollbar.vue";var Z=Q.exports;Z.install=function(t){t.component(Z.name,Z)};var tt=Z,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.menuVisible?o("div",{staticClass:"context-menu",style:{left:this.x+"px",top:this.y+"px"},on:{mousedown:function(t){t.stopPropagation()},contextmenu:function(t){t.preventDefault()}}},[t._t("default")],2):t._e()},ot=[],nt={name:"BtContextMenu",props:{target:{default:null},transferIndex:{type:Number,default:0},menuVisible:{type:Boolean,default:!1}},computed:{targetElem(){return document.querySelectorAll(this.target)[this.transferIndex]}},data(){return{x:null,y:null}},methods:{bindEvents(){this.$nextTick(()=>{const t=document.querySelectorAll(this.target)[0];this.targetElem?this.targetElem.addEventListener("contextmenu",this.contextMenuHandler,!1):t.addEventListener("contextmenu",this.contextMenuHandler,!1)})},unbindEvents(){const t=document.querySelectorAll(this.target);t.forEach(t=>{t.removeEventListener("contextmenu",this.contextMenuHandler,!1)})},contextMenuHandler(t){t.preventDefault(),this.x=t.clientX,this.y=t.clientY-138,this.$emit("update:visible",!0)},bindHideEvents(){document.addEventListener("mousedown",this.clickDocumentHandler,!1),document.addEventListener("mousewheel",this.clickDocumentHandler,!1)},unbindHideEvents(){document.removeEventListener("mousedown",this.clickDocumentHandler,!1),document.removeEventListener("mousewheel",this.clickDocumentHandler,!1)},clickDocumentHandler(){this.$emit("update:visible",!1)}},mounted(){this.bindEvents()},beforeDestroy(){this.unbindEvents()},watch:{menuVisible(t){t?this.bindHideEvents():this.unbindHideEvents()},targetElem(){this.bindEvents()}}},it=nt,rt=(o("18cf"),Object(l["a"])(it,et,ot,!1,null,"27247451",null));rt.options.__file="context-menu.vue";var at=rt.exports;at.install=function(t){t.component(at.name,at)};var st=at;const lt="0.0.5",ct=[D,tt,st],dt=function(t){dt.installed||ct.map(e=>t.component(e.name,e))};"undefined"!==typeof window&&window.Vue&&dt(window.Vue);var bt={install:dt,version:lt};n["a"].use(bt),n["a"].component("demo-block",j),n["a"].config.productionTip=!1,new n["a"]({router:C,render:t=>t(y)}).$mount("#app")},d219:function(t,e,o){var n=o("ba47");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("7bfde52c",n,!0,{sourceMap:!1,shadowMode:!1})},d92a:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"\n#app{min-width:1140px;height:100vh;overflow-y:hidden\n}\n.page-container{margin:20px auto;width:94%;min-height:600px;-webkit-box-shadow:#dfe1e6 0 4px 30px 0;box-shadow:0 4px 30px 0 #dfe1e6;border-radius:5px\n}\n.page-container .page-body{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between\n}\n.page-container .page-body .main,.page-container .page-body .nav{height:calc(100vh - 140px);overflow-y:scroll\n}\n.page-container .page-body .nav{min-width:250px;width:18%\n}\n.page-container .page-body .main{width:82%;margin-top:32px;padding:0 48px\n}",""])},e52f:function(t,e,o){var n=o("d92a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("5512c560",n,!0,{sourceMap:!1,shadowMode:!1})},ebd5:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"\n.context-menu[data-v-27247451]{position:fixed;border:1px solid #eff1f6;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;-webkit-box-shadow:0 10px 14px 0 rgba(53,100,175,.15);box-shadow:0 10px 14px 0 rgba(53,100,175,.15);background-color:#fff;z-index:999\n}",""])},f8e0:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"\n.page-header{height:66px;width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-shadow:rgba(29,29,29,.07) 0 10px 60px 0;box-shadow:0 10px 60px 0 rgba(29,29,29,.07)\n}\n.page-header,.page-header .logo{display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.page-header .logo{-webkit-box-align:center;-ms-flex-align:center;align-items:center;float:left;margin-left:60px;cursor:pointer\n}\n.page-header .logo img{height:50px;border-radius:10px\n}\n.page-header .logo span{font-family:fantasy;font-size:21px;font-weight:700;margin-top:10px;margin-left:8px\n}\n.page-header .github{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:50px;color:#2c3e50;font-weight:500;height:66px;line-height:66px;cursor:pointer\n}\n.page-header .github span{margin-right:10px;margin-top:3px\n}\n.page-header .github span:hover{color:#808ea7\n}",""])}});
//# sourceMappingURL=index.0547b9c0.js.map