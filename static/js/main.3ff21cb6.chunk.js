(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{101:function(e,t,a){"use strict";var n=a(15),r=a.n(n),o=a(37),c=a(102),s=a.n(c),i=a(36),l="https://ashima-accounting-node.herokuapp.com/api/",u=a(271),p=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:l+"as2020/listofparties",headers:Object(i.a)()},a=new Promise((function(e,a){u(t,(function(t,n,r){t||200!=n.statusCode?a(t):e(JSON.parse(r))}))})),e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={url:l+"as2020/partydata",headers:Object(i.a)()},o=new Promise((function(e,t){u(n,(function(a,n,r){a||200!=n.statusCode?t(a):e(JSON.parse(r))}))})),e.next=4,o;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:l+"as2020/dailyreport",headers:Object(i.a)()},a=new Promise((function(e,a){u(t,(function(t,n,r){t||200!=n.statusCode?a(t):e(JSON.parse(r))}))})),e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:l+"as2020/beamstock",headers:Object(i.a)()},a=new Promise((function(e,a){u(t,(function(t,n,r){t||200!=n.statusCode?a(t):e(JSON.parse(r))}))})),e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:l+"as2020/worpingmeter",headers:Object(i.a)()},a=new Promise((function(e,a){u(t,(function(t,n,r){t||200!=n.statusCode?a(t):e(JSON.parse(r))}))})),e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:l+"as2020/stockreport",headers:Object(i.a)()},a=new Promise((function(e,a){u(t,(function(t,n,r){t||200!=n.statusCode?a(t):e(JSON.parse(r))}))})),e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:l+"as2020/report",headers:Object(i.a)()},a=new Promise((function(e,a){u(t,(function(t,n,r){t||200!=n.statusCode?a(t):e(JSON.parse(r))}))})),e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:l+"as2020/metadata",headers:Object(i.a)()},a=new Promise((function(e,a){u(t,(function(t,n,r){t||200!=n.statusCode?a(t):e(JSON.parse(r))}))})),e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,n,o,c,s,i,l,u,S,y,E,O,w,N,k,j,x,C;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t=e.sent,localStorage.setItem("date",JSON.stringify(t[0].backupName)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a=e.t0.response&&e.t0.response.data&&e.t0.response.data.message||e.t0.message||e.t0.toString(),localStorage.setItem("date",JSON.stringify(a));case 11:return e.prev=11,e.next=14,p();case 14:n=e.sent,localStorage.setItem("partyName",JSON.stringify(n.sort((function(e,t){var a;return null===(a=e._id.partyName)||void 0===a?void 0:a.localeCompare(t._id.partyName)})))),e.next=22;break;case 18:e.prev=18,e.t1=e.catch(11),o=e.t1.response&&e.t1.response.data&&e.t1.response.data.message||e.t1.message||e.t1.toString(),localStorage.setItem("partyName",JSON.stringify(o));case 22:return e.prev=22,e.next=25,m();case 25:c=e.sent,localStorage.setItem("parties",JSON.stringify(c)),e.next=33;break;case 29:e.prev=29,e.t2=e.catch(22),s=e.t2.response&&e.t2.response.data&&e.t2.response.data.message||e.t2.message||e.t2.toString(),localStorage.setItem("parties",JSON.stringify(s));case 33:return e.prev=33,e.next=36,f();case 36:i=e.sent,localStorage.setItem("DRdetail",JSON.stringify(i.sort((function(e,t){return e.key.localeCompare(t.key)})))),e.next=44;break;case 40:e.prev=40,e.t3=e.catch(33),l=e.t3.response&&e.t3.response.data&&e.t3.response.data.message||e.t3.message||e.t3.toString(),localStorage.setItem("DRdetail",JSON.stringify(l));case 44:return e.prev=44,e.next=47,d();case 47:return u=e.sent,S={},u.forEach((function(e,t){S[e.QualityCode]=e.beamStockData.reduce((function(e,t){return e+Number(t.Meter)}),0)})),localStorage.setItem("beam",JSON.stringify(S)),e.prev=51,e.next=54,g();case 54:y=e.sent,localStorage.setItem("WMDetail",JSON.stringify(y.sort((function(e,t){return e.quality.localeCompare(t.quality)})))),e.next=62;break;case 58:e.prev=58,e.t4=e.catch(51),E=e.t4.response&&e.t4.response.data&&e.t4.response.data.message||e.t4.message||e.t4.toString(),localStorage.setItem("WMDetail",E);case 62:e.next=68;break;case 64:e.prev=64,e.t5=e.catch(44),O=e.t5.response&&e.t5.response.data&&e.t5.response.data.message||e.t5.message||e.t5.toString(),localStorage.setItem("beam",JSON.stringify(O));case 68:return e.prev=68,e.next=71,d();case 71:w=e.sent,localStorage.setItem("BSdetail",JSON.stringify(w.sort((function(e,t){return e.QualityCode.localeCompare(t.QualityCode)})))),e.next=79;break;case 75:e.prev=75,e.t6=e.catch(68),N=e.t6.response&&e.t6.response.data&&e.t6.response.data.message||e.t6.message||e.t6.toString(),localStorage.setItem("BSdetail",JSON.stringify(N));case 79:return e.prev=79,e.next=82,h();case 82:k=e.sent,localStorage.setItem("SRDetail",JSON.stringify(k.sort((function(e,t){return e.qualityCode.localeCompare(t.qualityCode)})))),e.next=90;break;case 86:e.prev=86,e.t7=e.catch(79),j=e.t7.response&&e.t7.response.data&&e.t7.response.data.message||e.t7.message||e.t7.toString(),localStorage.setItem("SRDetail",JSON.stringify(j));case 90:return e.prev=90,e.next=93,b();case 93:x=e.sent,localStorage.setItem("MRDetail",JSON.stringify(x)),e.next=101;break;case 97:e.prev=97,e.t8=e.catch(90),C=e.t8.response&&e.t8.response.data&&e.t8.response.data.message||e.t8.message||e.t8.toString(),localStorage.setItem("MRDetail",JSON.stringify(C));case 101:return e.abrupt("return","Done !!");case 102:case"end":return e.stop()}}),e,null,[[0,7],[11,18],[22,29],[33,40],[44,64],[51,58],[68,75],[79,86],[90,97]])})));return function(){return e.apply(this,arguments)}}();t.a={getPartylist:p,getPartydata:function(e,t){return s.a.get(l+"as2020/partydata/".concat(e,"/").concat(t),{headers:Object(i.a)()})},getAllPartiesdata:m,pythonPDFSerivce:function(e){return s.a.post("https://temp-testing-app.herokuapp.com/",e,{responseType:"blob"})},getDailyReport:f,getBeamStock:d,getWorpingMeter:g,getStockReport:h,getReport:b,getDate:v,getData:S}},238:function(e,t,a){e.exports=a.p+"static/media/dots.b81dabc0.png"},239:function(e,t,a){e.exports=a.p+"static/media/path4.e37326c7.png"},247:function(e,t,a){e.exports=a(499)},252:function(e,t,a){},253:function(e,t,a){},287:function(e,t){},289:function(e,t){},299:function(e,t){},301:function(e,t){},326:function(e,t){},328:function(e,t){},329:function(e,t){},335:function(e,t){},337:function(e,t){},355:function(e,t){},357:function(e,t){},36:function(e,t,a){"use strict";function n(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token,"Content-Type":"application/json"}:{}}a.d(t,"a",(function(){return n}))},369:function(e,t){},372:function(e,t){},377:function(e,t){},379:function(e,t){},402:function(e,t){},497:function(e,t,a){},498:function(e,t,a){},499:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),c=a.n(o),s=(a(252),a(253),a(16)),i=a(36);function l(){var e=Object(i.a)();if(null===e||"undefined"===typeof e.Authorization)return!1;var t=function(e){var t=e.Authorization.substring(7).split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)}(e),a=(new Date).getTime(),n=a.toString(),r=t.exp.toString(),o=n.length-r.length;return!(t.exp*Math.pow(10,o)<a)||(console.log("TOKEN EXPIRED"),!1)}var u=a(43),p=a(95),m=a(96),f=a(99),d=a(98),g=a(12),h=a.n(g),b=a(524),v=a(525),S=a(526),y=a(527),E=a(528),O=a(529),w=a(101),N=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).toggleTabsAshima=function(e,t,n){e.preventDefault(),a.setState(Object(u.a)({},t,n)),a.props.history.push("/menulist"),window.location.reload()},a.toggleTabsSSF=function(e,t,n){e.preventDefault(),a.setState(Object(u.a)({},t,n))},a.state={pills:1},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off")),document.body.classList.toggle("profile-page")}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on")),document.body.classList.toggle("profile-page")}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"page-header"},r.a.createElement("img",{alt:"...",className:"dots",src:a(238)}),r.a.createElement("img",{alt:"...",className:"path",src:a(239)}),r.a.createElement(b.a,{className:"align-items-center"},r.a.createElement(v.a,null,r.a.createElement(S.a,{md:"6",className:"ml-auto mr-auto"},r.a.createElement(y.a,{className:"justify-content-center nav-pills-info nav-pills-icons",pills:!0},r.a.createElement(E.a,null,r.a.createElement(O.a,{className:h()({"active show":1}),onClick:function(t){return e.toggleTabsAshima(t,"pills",1)},href:"#pablo"},r.a.createElement("i",{className:"tim-icons icon-bank"}),"Ashima Fabrics")),r.a.createElement(E.a,null,r.a.createElement(O.a,{className:h()({"active show":1}),onClick:function(t){return e.toggleTabsSSF(t,"pills",2)},href:"#pablo"},r.a.createElement("i",{className:"tim-icons icon-bank"}),"Shree Sai Fashion Fab")))))))))}}]),n}(r.a.Component),k=a(15),j=a.n(k),x=a(37),C=a(530),D=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).toggleTabsDailyReport=function(e,t,n){e.preventDefault(),a.state.datafetched&&(a.setState(Object(u.a)({},t,n)),a.props.history.push("/dailyreport"),window.location.reload())},a.toggleTabsSales=function(e,t,n){e.preventDefault(),a.state.datafetched&&(a.setState(Object(u.a)({},t,n)),a.props.history.push("/partylist"),window.location.reload())},a.toggleTabsBeamStock=function(e,t,n){e.preventDefault(),a.state.datafetched&&(a.setState(Object(u.a)({},t,n)),a.props.history.push("/beamstock"),window.location.reload())},a.toggleTabsWorpingReport=function(e,t,n){e.preventDefault(),a.state.datafetched&&(a.setState(Object(u.a)({},t,n)),a.props.history.push("/warpingmeter"),window.location.reload())},a.toggleTabsStockReport=function(e,t,n){e.preventDefault(),a.state.datafetched&&(a.setState(Object(u.a)({},t,n)),a.props.history.push("/stockreport"),window.location.reload())},a.toggleTabsReport=function(e,t,n){e.preventDefault(),a.state.datafetched&&(a.setState(Object(u.a)({},t,n)),a.props.history.push("/report"),window.location.reload())},a.state={pills:1,datafetched:!1,loading:!1},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off")),document.body.classList.toggle("profile-page"),localStorage.getItem("DRdetail")&&localStorage.getItem("partyName")&&localStorage.getItem("parties")&&localStorage.getItem("beam")&&localStorage.getItem("WMDetail")&&localStorage.getItem("SRDetail")&&localStorage.getItem("MRDetail")&&this.setState({datafetched:!0})}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on")),document.body.classList.toggle("profile-page")}},{key:"render",value:function(){var e=this,t=function(t,a){e.setState({datafetched:t,loading:a})};function n(){return(n=Object(x.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!1,!0),e.next=4,w.a.getData();case 4:e.sent,t(!0,!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return console.log(this.state),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"page-header"},r.a.createElement("img",{alt:"...",className:"dots",src:a(238)}),r.a.createElement("img",{alt:"...",className:"path",src:a(239)}),r.a.createElement(b.a,{className:"align-items-center"},r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(e){return function(e){return n.apply(this,arguments)}(e)}},"Load Latest Data"),this.state.loading&&r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("br",null),"Loading..."))),r.a.createElement(v.a,{className:"pt-5"},r.a.createElement(S.a,{md:"6",className:"ml-auto mr-auto"},r.a.createElement(y.a,{className:"justify-content-center nav-pills-info nav-pills-icons",pills:!0},r.a.createElement(E.a,null,r.a.createElement(O.a,{className:h()({"active show":this.state.datafetched?1:0}),onClick:function(t){return e.toggleTabsDailyReport(t,"pills",1)},href:"#pablo"},r.a.createElement("i",{className:"tim-icons icon-notes"}),"Daily Report")),r.a.createElement(E.a,null,r.a.createElement(O.a,{className:h()({"active show":this.state.datafetched?1:0}),onClick:function(t){return e.toggleTabsSales(t,"pills",2)},href:"#pablo"},r.a.createElement("i",{className:"tim-icons icon-paper"}),"Sales Order")),r.a.createElement(E.a,null,r.a.createElement(O.a,{className:h()({"active show":this.state.datafetched?1:0}),onClick:function(t){return e.toggleTabsWorpingReport(t,"pills",1)},href:"#pablo"},r.a.createElement("i",{className:"tim-icons icon-chart-bar-32"}),"Warping Report")),r.a.createElement(E.a,null,r.a.createElement(O.a,{className:h()({"active show":this.state.datafetched?1:0}),onClick:function(t){return e.toggleTabsBeamStock(t,"pills",1)},href:"#pablo"},r.a.createElement("i",{className:"tim-icons icon-cart"}),"BEAM Stock")),r.a.createElement(E.a,null,r.a.createElement(O.a,{className:h()({"active show":this.state.datafetched?1:0}),onClick:function(t){return e.toggleTabsStockReport(t,"pills",1)},href:"#pablo"},r.a.createElement("i",{className:"tim-icons icon-coins"}),"Stock Report")),r.a.createElement(E.a,null,r.a.createElement(O.a,{className:h()({"active show":this.state.datafetched?1:0}),onClick:function(t){return e.toggleTabsReport(t,"pills",1)},href:"#pablo"},r.a.createElement("i",{className:"tim-icons icon-coins"}),"Machine Report")))))))))}}]),n}(r.a.Component),I=Object(n.lazy)((function(){return Promise.all([a.e(4),a.e(14)]).then(a.bind(null,577))})),J=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,575))})),R=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,578))})),T=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,569))})),W=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,579))})),P=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,570))})),A=Object(n.lazy)((function(){return a.e(9).then(a.bind(null,571))})),L=Object(n.lazy)((function(){return a.e(13).then(a.bind(null,572))})),z=Object(n.lazy)((function(){return a.e(12).then(a.bind(null,573))})),M=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,580))}));var B=function(){var e=Object(n.useState)(),t=l(),a=Object(s.f)().pathname;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},!t||"/"!==a&&"/login"!==a?null:r.a.createElement(s.a,{to:"/companylist"}),r.a.createElement(s.b,{exact:!0,path:"/login",component:R}),r.a.createElement(s.b,{exact:!0,path:"/register",component:T}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(s.b,{path:"/companylist",component:N}),r.a.createElement(s.b,{path:"/menulist",component:D}),r.a.createElement(s.b,{path:"/partylist",render:function(t){return r.a.createElement(I,Object.assign({},t,{partyState:e}))}}),r.a.createElement(s.b,{path:"/partydetail",render:function(t){return r.a.createElement(W,Object.assign({},t,{partyState:e}))}}),r.a.createElement(s.b,{path:"/dailyreport",component:P}),r.a.createElement(s.b,{path:"/beamstock",component:A}),r.a.createElement(s.b,{path:"/warpingmeter",component:L}),r.a.createElement(s.b,{path:"/stockreport",component:z}),r.a.createElement(s.b,{path:"/report",component:M})):r.a.createElement(s.a,{to:"/login"}))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(497),a(498);var q=a(146),Q=a(142);c.a.render(r.a.createElement(Q.a,null,r.a.createElement(q.a,null,r.a.createElement(B,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}()}},[[247,2,3]]]);
//# sourceMappingURL=main.3ff21cb6.chunk.js.map