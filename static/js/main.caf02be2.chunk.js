(this.webpackJsonpargu_maker=this.webpackJsonpargu_maker||[]).push([[0],{21:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),i=t(12),l=t.n(i),r=(t(21),t(22),t(4)),c=t(15),s=t(3),d=t(13),p=t.n(d),f=t.p+"static/media/long_logo.d86fad22.svg",u=t(2),b=t(0),h=[{field:"fileName",label:Object(b.jsx)(u.d,{}),itemType:["text","input"],placeholder:"\u672a\u547d\u540d\u6587\u4ef6",class_label:"file"},{field:"authName",label:Object(b.jsx)(u.f,{}),itemType:["text","input"],placeholder:"\u4f5c\u8005\u540d",class_label:"file"},{field:"timestamp",label:Object(b.jsx)(u.c,{}),itemType:["text","text"],class_label:"file",hr:"border-2"},{field:"topic",label:"\u8faf\u984c",itemType:["text","textarea"],placeholder:"\u8acb\u8f38\u5165\u8faf\u984c",class_label:"label-level-1"},{field:"side",label:"\u7acb\u5834",itemType:["text","textarea"],options:[{value:"",placeholder:"\u6301\u65b9"},{value:"yes",label:"\u6b63\u65b9"},{value:"no",label:"\u53cd\u65b9"}],placeholder:"\u8acb\u8f38\u7acb\u5834",class_label:"label-level-1",hr:"border-2"}],m={sectionBtn:{label:"\u6bb5\u843d",itemType:["text","buttons"],class_label:"label-level-2",isAddBtn:!0,isDelBtn:!0,isSortBtn:!1},pointBtn:{field:"pointBtn",itemType:["select","buttons"],options:[{value:"point_1",label:"\u91cd\u9ede"},{value:"point_2",label:"\u6210\u7acb"},{value:"point_3",label:"\u76ee\u7684"},{value:"point_4",label:"\u6548\u679c"},{value:"point_5",label:"\u53cd\u61c9"}],class_label:"label-level-3",isAddBtn:!0,isDelBtn:!0,isSortBtn:!1,isFaTrashAlt:!0},point_1:{field:"point_1",itemType:["text","textarea"],label:"\u91cd\u9ede",placeholder:"\u8acb\u6293\u51fa\u6bb5\u843d\u91cd\u9ede\u3001\u4e3b\u5f35",class_label:"bg-danger text-white",isFaTrashAlt:!0,isInputBorder:!0},point_2:{field:"point_2",itemType:["text","textarea"],label:"\u6210\u7acb",placeholder:"\u8a72\u4e3b\u5f35\u76f4\u89c0\u4e0a\u662f\u5426\u8aaa\u5f97\u901a\uff1f",class_label:"bg-warning text-white",isFaTrashAlt:!0,isInputBorder:!0},point_3:{field:"point_3",itemType:["text","textarea"],label:"\u76ee\u7684",placeholder:"\u8a72\u6bb5\u843d\u6709\u4ec0\u9ebc\u6230\u7565\u6027\u76ee\u7684\uff1f",class_label:"bg-success text-white",isFaTrashAlt:!0,isInputBorder:!0},point_4:{field:"point_4",itemType:["text","textarea"],label:"\u6548\u679c",placeholder:"\u6548\u679c\u5f37\u5f31\uff1f\u662f\u5426\u9054\u6210\u76ee\u7684\uff1f",class_label:"bg-primary text-white",isFaTrashAlt:!0,isInputBorder:!0},point_5:{field:"point_5",itemType:["text","textarea"],label:"\u53cd\u61c9",placeholder:"\u627f\u8a8d\u3001\u653b\u64ca\u6216\u64f1\u7f6e\uff1f",class_label:"bg-info text-white",isFaTrashAlt:!0,isInputBorder:!0}},x=t(7),j=t(8),g=t(5),v=t(11),O=t.p+"static/media/click.75a762bf.mp3";t.p;function w(){new v.Howl({src:[O]}).play()}var y,S=t.p+"static/media/select_icon.c52f9c86.svg";var _,k=g.a.div(y||(y=Object(r.a)(["\n  .file {\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .am-content {\n    color: #111;\n  }\n  input,\n  textarea {\n    border: ",";\n    font-size: initial;\n  }\n  textarea {\n    resize: none;\n    overflow: hidden;\n  }\n\n  select {\n    text-align-last: center;\n    font-size: initial;\n\n    border: none;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n\n    background-image: url(",");\n    background-position: 90%;\n    background-repeat: no-repeat;\n    background-size: 7px;\n  }\n  select::-ms-expand {\n    display: none;\n  }\n\n  .label-level-1 {\n    background-color: #444;\n    color: #eee;\n  }\n  .label-level-2 {\n    background-color: #888;\n    color: #fff;\n  }\n  .label-level-3 {\n    background-color: #bbb;\n  }\n  .label-level-4 {\n    background-color: #eee;\n  }\n  .bg-cus-purple {\n    background-color: #7c58bb;\n  }\n\n  .btn-wrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n    width: 32px;\n    height: 32px;\n    margin-left: 25px;\n    transition: 0.2s;\n    position: relative;\n    cursor: pointer;\n    & > svg {\n      z-index: 1;\n    }\n    &:after {\n      content: '';\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      width: 32px;\n      height: 32px;\n      background-color: #ddd;\n      border-radius: 999px;\n      z-index: 0;\n      transition: 0.2s;\n      transform-origin: center;\n    }\n    &:active {\n      transition: 0.2s;\n      transform: translateY(5px);\n    }\n  }\n  .hr-dark {\n    border-bottom: 2px solid #ccc;\n    margin: 16px 0 16px 0;\n  }\n"])),(function(e){return e.isInputBorder?1:0}),S),N=function(e){var n=Object(o.useState)(""),t=Object(s.a)(n,2),a=t[0],i=t[1],l=e.typeInfo,r=e.fileInfo,c=e.setFileInfo,d=e.handleCreate,p=e.handleDeleteShow,f=e.showDel,h=e.setParentSelect,m=e.stateTextarea,g=e.handleSetTextarea,v=l.field,O=l.itemType,y=l.label,_=l.options,N=l.content,I=l.placeholder,T=l.class_label,B=l.hr,D=l.isAddBtn,F=l.isDelBtn,A=l.isSortBtn,C=l.isFaTrashAlt,z=l.isInputBorder,J=Object(o.useRef)(null);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(k,{className:"form-group row ml-0 font-weight-bold",isInputBorder:z,select_icon:S,children:["text"===O[0]&&Object(b.jsx)("label",{className:"col-2 col-form-label rounded col-form-label-sm text-center ".concat(T),htmlFor:v,children:y}),"select"===O[0]&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("select",{className:"col-2 col-form-label col-form-label-sm form-control form-control-sm ".concat(T),value:a,onChange:function(e){i(e.target.value),h&&h(e.target.value)},children:_.map((function(e,n){var t=e.value,o=e.label,a=e.placeholder;return Object(b.jsx)("option",{hidden:!t,value:t,children:t?o:a},n)}))})}),Object(b.jsxs)("div",{className:"col-10  d-flex align-items-center",children:["input"===O[1]&&Object(b.jsx)("input",{type:"input",className:"form-control form-control-sm am-content",id:v,placeholder:I,value:r[v],onChange:function(e){c((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(x.a)({},[v],e.target.value))}))}}),"text"===O[1]&&Object(b.jsx)("div",{className:"form-control form-control-sm border-0 am-content",children:r&&r[v]?r[v]:N}),"textarea"===O[1]&&Object(b.jsx)("textarea",{ref:J,className:"form-control form-control-sm am-content",id:v,rows:"1",placeholder:I,value:m||r&&r[v],onChange:function(e){r&&c((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(x.a)({},[v],e.target.value))})),g&&g(e.target.value),J.current.style.height="auto",J.current.style.height=J.current.scrollHeight+"px"}}),"buttons"===O[1]&&Object(b.jsxs)(b.Fragment,{children:[D&&Object(b.jsx)("div",{className:"btn-wrap icon-plus",onClick:function(){w(),d()},children:Object(b.jsx)(u.b,{})}),A&&Object(b.jsx)("div",{className:"btn-wrap",onClick:function(){return w()},children:Object(b.jsx)(u.a,{})}),F&&Object(b.jsx)("div",{className:"btn-wrap ".concat(f&&"text-danger"),onClick:function(){w(),p()},children:C?Object(b.jsx)(u.g,{}):Object(b.jsx)(u.e,{})})]})]})]}),"border-1"===B&&Object(b.jsx)("hr",{}),"border-2"===B&&Object(b.jsx)("div",{className:"hr-dark"})]})},I=m.pointBtn;var T,B=g.a.div(_||(_=Object(r.a)(["\n  margin: 0 -5px 1rem -5px;\n  padding: 1rem 10px 0 10px;\n  .am-section-title {\n    display: flex;\n    align-items: center;\n    svg {\n      margin-left: 10px;\n      margin-top: -3px;\n      color: #dc3545;\n    }\n  }\n  .am-section-content {\n    color: #111;\n    margin-bottom: 1rem;\n    font-size: initial;\n    resize: none;\n    overflow: hidden;\n  }\n  .point-wrap {\n    display: flex;\n    .del-btn {\n      width: ",";\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 18px;\n      overflow: hidden;\n      transition: 0.2s;\n      margin-bottom: 1rem;\n      position: relative;\n      color: #dc3545;\n    }\n\n    .point-item {\n      width: 100%;\n    }\n  }\n"])),(function(e){return e.showDelPoint?"10%":"0%"})),D=function(e){var n=Object(o.useState)(!1),t=Object(s.a)(n,2),a=t[0],i=t[1],l=Object(o.useState)("point_1"),r=Object(s.a)(l,2),c=r[0],d=r[1],p=e.index,f=e.sectionID,h=e.showDelSec,x=e.handleDelSection,j=e.handleAddPoint,g=e.handleDelPoint,v=e.article,O=e.setArticle;Object(o.useEffect)((function(){v[p].points.length||i(!1)}),[v]);var y=Object(o.useRef)(null);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(B,{className:"card bg-light",showDelPoint:a,children:[Object(b.jsxs)("div",{className:"h6 am-section-title",children:["\u6bb5\u843d ",p+1," ",h&&Object(b.jsx)("div",{className:"d-inline-block",onClick:function(){w(),x()},children:Object(b.jsx)(u.e,{})})]}),Object(b.jsx)("textarea",{ref:y,className:"form-control form-control-sm am-section-content",rows:"1",placeholder:"\u8acb\u586b\u5165\u7a3f\u4ef6\u6bb5\u843d...",value:v[p].content,onChange:function(e){var n=JSON.parse(JSON.stringify(v));n[p].content=e.target.value,O(n),y.current.style.height="auto",y.current.style.height=y.current.scrollHeight+"px"}}),v[p].points.map((function(e,n){var t=e.id,o=e.typeInfoKey;return Object(b.jsxs)("div",{className:"point-wrap",children:[Object(b.jsx)("div",{className:"del-btn",onClick:function(){w(),g(f,t)},children:Object(b.jsx)(u.g,{})}),Object(b.jsx)("div",{className:"point-item",children:Object(b.jsx)(N,{typeInfo:m[o],handleSetTextarea:function(e){return function(e,n){var t=JSON.parse(JSON.stringify(v));t[p].points.forEach((function(t){t.id===e&&(t.content=n)})),O(t)}(t,e)},stateTextarea:v[p].points[n].content})})]},n)})),Object(b.jsx)(N,{typeInfo:I,showDel:a,handleCreate:function(){return j(c)},handleDeleteShow:v[p].points.length?function(){i(!a)}:function(){},setParentSelect:d})]})})};var F=g.a.div(T||(T=Object(r.a)(["\n  padding-bottom: 76px;\n  .long-logo-wrap {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    height: 70px;\n    ","\n    img {\n      width: 210px;\n      object-fit: contain;\n    }\n  }\n\n  .hr-dark {\n    border-bottom: 2px solid #ccc;\n    margin: 16px 0 16px 0;\n  }\n"])),""),A=function(){var e=Object(o.useState)({fileName:"",authName:"",timestamp:p()().format("YYYY-MM-DD HH:mm"),topic:"",side:""}),n=Object(s.a)(e,2),t=n[0],a=n[1],i=Object(o.useState)([{id:1,content:"",points:[{id:1,content:"",typeInfoKey:"point_1"}]}]),l=Object(s.a)(i,2),r=l[0],d=l[1],u=Object(o.useState)(!1),x=Object(s.a)(u,2),j=x[0],g=x[1],v=m.sectionBtn;function O(e,n){var t=JSON.parse(JSON.stringify(r));t.forEach((function(t){t.id===e&&(t.points=t.points.filter((function(e){return e.id!==n})))})),d(t)}return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("AM_data"));e&&(a(e.fileInfo),d(e.article))}),[]),Object(o.useEffect)((function(){localStorage.setItem("AM_data",JSON.stringify({fileInfo:t,article:r}))}),[t,r]),Object(o.useEffect)((function(){r.length||g(!1)}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(F,{className:"container",children:[Object(b.jsx)("div",{className:"long-logo-wrap",children:Object(b.jsx)("img",{src:f,alt:""})}),h.map((function(e,n){return Object(b.jsx)(N,{typeInfo:e,fileInfo:t,setFileInfo:a},n)})),r.map((function(e,n){return Object(b.jsx)(D,{index:n,sectionID:e.id,article:r,setArticle:d,showDelSec:j,handleDelSection:function(){return function(e){var n=r.filter((function(n){return n.id!==e}));d(n)}(e.id)},handleAddPoint:function(n){return function(e,n){var t=JSON.parse(JSON.stringify(r)),o={id:+new Date,content:"",typeInfoKey:n};t.forEach((function(n){n.id===e&&n.points.push(o)})),d(t)}(e.id,n)},handleDelPoint:O},n)})),Object(b.jsx)(N,{typeInfo:v,fileInfo:t,setFileInfo:a,showDel:j,setShowDelSec:g,handleCreate:function(){var e={id:+new Date,content:"",points:[]};d((function(n){return[].concat(Object(c.a)(n),[e])}))},handleDeleteShow:r.length?function(){g(!j)}:function(){}})]})})},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,i=n.getLCP,l=n.getTTFB;t(e),o(e),a(e),i(e),l(e)}))};t(29);l.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/argu_maker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/argu_maker","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):z(n,e)}))}}(),J()}},[[30,1,2]]]);
//# sourceMappingURL=main.caf02be2.chunk.js.map