(function(){"use strict";var e={3286:function(e,t,n){var o=n(9242),r=n(3396);function a(e,t,n,o,a,i){const c=(0,r.up)("HeaderComponent"),l=(0,r.up)("SidebarComponent"),s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r._)("main",null,["board"===e.$route.name?((0,r.wg)(),(0,r.j4)(l,{key:0})):(0,r.kq)("",!0),(0,r.Wm)(s)])],64)}var i=n(7139);const c={class:"blockList"},l=["data"];function s(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("aside",null,[(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.store.blocksData,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,data:e,class:"blockList-item"},(0,i.zw)(e.title),9,l)))),128))])])}var u=n(4301);const d=(0,u.Q_)("main",{state:()=>({blocksData:Object({})}),actions:{setDefaults(){const e=[{title:"Get Started",id:"default",contents:"Hello there!"}];localStorage.setItem("blocks",JSON.stringify(e)),this.getLocalStorageData()},getLocalStorageData(){this.blocksData=JSON.parse(localStorage.getItem("blocks")||"{}")},createNewBlock(){console.log("hello")}}});var f=(0,r.aZ)({name:"SidebarComponent",data(){return{store:d()}}}),g=n(89);const p=(0,g.Z)(f,[["render",s]]);var m=p;const v=(0,r._)("h1",{id:"logo"},"BLOCKS",-1),b={id:"newBlockInput"},h=(0,r.Uk)("Board"),k=(0,r.Uk)(" | "),w=(0,r.Uk)("About");function y(e,t,n,a,i,c){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[v,(0,r._)("div",b,[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Create New Block",onKeypress:t[0]||(t[0]=(0,o.D2)(((...t)=>e.createNewTask&&e.createNewTask(...t)),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=t=>e.newBlockTitle=t)},null,544),[[o.nr,e.newBlockTitle]])]),(0,r._)("nav",null,[(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[h])),_:1}),k,(0,r.Wm)(l,{to:"/about/"},{default:(0,r.w5)((()=>[w])),_:1})])])}var C=n(691),S=(0,r.aZ)({name:"HeaderComponent",data(){return{newBlockTitle:String("")}},methods:{createNewTask(){if(null!==localStorage.getItem("blocks")&&""!==this.newBlockTitle){const e=JSON.parse(localStorage.getItem("blocks")||"{}"),t={title:String(this.newBlockTitle),id:(0,C.x0)(),contents:String("Edit this, I dare you.")};e.push(t),localStorage.setItem("blocks",JSON.stringify(e)),this.newBlockTitle=""}}}});const _=(0,g.Z)(S,[["render",y]]);var B=_,D=(0,r.aZ)({components:{HeaderComponent:B,SidebarComponent:m}});const E=(0,g.Z)(D,[["render",a]]);var O=E,N=n(5431);(0,N.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var T=n(678);const j={class:"board"};function I(e,t,n,o,a,i){const c=(0,r.up)("BoardItem");return(0,r.wg)(),(0,r.iD)("div",j,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.store.blocksData,(e=>((0,r.wg)(),(0,r.j4)(c,{key:e.id,data:e},null,8,["data"])))),128))])}var A=n(8044),L=n(2700),x=n(1112);const H=e=>((0,r.dD)("data-v-270447c6"),e=e(),(0,r.Cn)(),e),Z={class:"boardItem",draggable:"false"},P={class:"itemHeader"},q={class:"headerBtns"},F=H((()=>(0,r._)("img",{src:x},null,-1))),K=["contenteditable"];function U(e,t,n,o,a,c){return(0,r.wg)(),(0,r.iD)("div",Z,[(0,r._)("div",P,[(0,r._)("span",{onClick:t[0]||(t[0]=(...t)=>e.renameBlock&&e.renameBlock(...t))},(0,i.zw)(e.data.title),1),(0,r._)("span",q,[!1===e.blockContentEditable?((0,r.wg)(),(0,r.iD)("img",{key:0,src:A,onClick:t[1]||(t[1]=t=>e.blockContentEditable=!0)})):(0,r.kq)("",!0),!0===e.blockContentEditable?((0,r.wg)(),(0,r.iD)("img",{key:1,src:L,onClick:t[2]||(t[2]=(...t)=>e.saveEditedContents&&e.saveEditedContents(...t))})):(0,r.kq)("",!0),F])]),(0,r._)("div",{class:"itemBody",contenteditable:e.blockContentEditable},(0,i.zw)(e.data.contents),9,K)])}var W=(0,r.aZ)({name:"BoardItem",props:["data"],data(){return{blockContentEditable:!1}},methods:{saveEditedContents(){this.blockContentEditable=!1},renameBlock(){console.log("placeholder")}}});const z=(0,g.Z)(W,[["render",U],["__scopeId","data-v-270447c6"]]);var J=z,M=(0,r.aZ)({name:"HomeView",components:{BoardItem:J},data(){return{store:d()}},mounted(){null===localStorage.getItem("blocks")?this.store.setDefaults():(this.store.getLocalStorageData(),this.store=d()),document.addEventListener("storage",this.store.getLocalStorageData)}});const Y=(0,g.Z)(M,[["render",I],["__scopeId","data-v-0f6a9998"]]);var V=Y;const G=[{path:"/",name:"board",component:V},{path:"/about",name:"about",component:()=>n.e(601).then(n.bind(n,9601))}],Q=(0,T.p7)({history:(0,T.PO)("/"),routes:G});var $=Q;(0,o.ri)(O).use((0,u.WB)()).use($).mount("#app")},8044:function(e,t,n){e.exports=n.p+"img/edit.49ea652e.svg"},2700:function(e,t,n){e.exports=n.p+"img/save.2c834c03.svg"},1112:function(e,t,n){e.exports=n.p+"img/x.435c4456.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var c=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".8dd0d347.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".9389a144.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="blocks:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[r];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(g);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=c,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return r();e(o,c,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={601:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),c=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],l=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var u=l(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkblocks"]=self["webpackChunkblocks"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3286)}));o=n.O(o)})();
//# sourceMappingURL=app.dbb19c92.js.map