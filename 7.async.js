(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"/wHq":function(e,t,a){"use strict";var n=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var c,l=n(a("kLXV")),u=n(a("jehZ")),o=n(a("2Taf")),i=n(a("vZ4D")),s=n(a("l4Ni")),f=n(a("ujKo")),d=n(a("MhPg")),p=r(a("q1tI")),m=n(a("bT3a")),v=(0,m.default)(c=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return p.default.createElement(l.default,(0,u.default)({maskClosable:!1},this.props))}}]),t}(p.Component))||c,h=v;t.default=h},Cxnf:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var c=r(a("CtXQ")),l=r(a("2Taf")),u=r(a("vZ4D")),o=r(a("l4Ni")),i=r(a("ujKo")),s=r(a("MhPg")),f=n(a("q1tI")),d=(r(a("17x9")),a("g0MP")),p=(0,d.createBrowserHistory)(),m=function(e){function t(){var e,a;(0,l.default)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=(0,o.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(r))),a.goBack=function(){p.goBack()},a}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.titleText;return f.default.createElement("div",{className:"bg-fff lh-40"},f.default.createElement("a",{href:"javascript:;",onClick:this.goBack,className:"bd-rg cur-pointer",style:{padding:"0 10px"}},f.default.createElement(c.default,{type:"double-left"}),"\u8fd4\u56de"),f.default.createElement("span",{style:{padding:"0 10px"},dangerouslySetInnerHTML:{__html:e}}))}}]),t}(f.Component);t.default=m,m.defaultProps={titleText:"\u6dfb\u52a0\u4fe1\u53f7\u6e90\u53c2\u6570"}},bT3a:function(e,t,a){"use strict";var n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(a("q1tI"));function r(e){var t=e.prototype.componentWillUnmount;e.prototype.componentWillUnmount=function(){t&&(console.log("componentWillUnmount",e.name),t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))),this.unmount=!0};var a=e.prototype.setState;e.prototype.setState=function(){this.unmount?console.log("cancel setState",e.name):a.call.apply(a,[this].concat(Array.prototype.slice.call(arguments)))}}var c=r;t.default=c},marD:function(e,t,a){"use strict";var n=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var c=n(a("wCAj"));a("14J3");var l=n(a("BMrR"));a("jCWc");var u=n(a("kPKH"));a("+L6B");var o,i,s,f=n(a("2/Rp")),d=n(a("p0pE")),p=n(a("d6i3")),m=n(a("1l/V")),v=n(a("2Taf")),h=n(a("vZ4D")),y=n(a("l4Ni")),g=n(a("ujKo")),b=n(a("MhPg")),w=r(a("q1tI")),E=(n(a("QqXm")),n(a("uJMD"))),_=n(a("utae")),k=n(a("/wHq")),j=a("dCQc"),x=n(a("bT3a")),T=(o=(0,_.default)({titleText:"\u7528\u6237\u8be6\u60c5"}),(0,x.default)(i=o((s=function(e){function t(){var e;return(0,v.default)(this,t),e=(0,y.default)(this,(0,g.default)(t).call(this)),e.put_user_stopFollowOpen=function(){var t=(0,m.default)(p.default.mark(function t(a){var n;return p.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={id:a},t.next=4,(0,j.put_user_stopFollowOpen)({query:n});case 4:t.sent,e.handlerCancel(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),window.$errorHandler(t.t0)();case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),e.put_user_stopFollowAll=function(){var t=(0,m.default)(p.default.mark(function t(a){var n;return p.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={id:a},t.next=4,(0,j.put_user_stopFollowAll)({query:n});case 4:t.sent,e.handlerCancel(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),window.$errorHandler(t.t0)();case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),e.showStopModal=function(){var t=(0,m.default)(p.default.mark(function t(a){return p.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.setState({visible:!0,activeData:a});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.getAccountById=(0,m.default)(p.default.mark(function t(){var a,n,r,c;return p.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={id:e.state.userId},t.next=4,(0,j.get_user_id)({params:a});case 4:if(n=t.sent,n){t.next=7;break}return t.abrupt("return");case 7:r=n.mt4_account,n.time=E.default.formatTime(n.created_at,"ymd"),c=[],r.forEach(function(e){var t=(0,d.default)({key:e.id,MT4:e.nickname||e.account,time:E.default.formatTime(e.created_at,"ymd"),statusTxt:1===e.check_status?"\u5ba1\u6838\u901a\u8fc7":"\u5ba1\u6838\u672a\u901a\u8fc7",server:e.trader_server.name,business:e.trader_server.trader.name},e);e.follow.length?e.follow.forEach(function(a){c.push(Object.assign({},t,{followInfo:a,source:a.signal.name,key:"".concat(e.id,"_").concat(a.id)}))}):c.push(Object.assign({},t,{followInfo:null,source:"-"}))}),e.setState({list:c,detail:n}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),window.$errorHandler(t.t0)();case 17:case"end":return t.stop()}},t,null,[[0,14]])})),e.handlerCancel=function(){e.setState({visible:!1})},e.state={visible:!1,userId:void 0,list:void 0,detailInfo:void 0,activeData:void 0},e}return(0,b.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){var e=(0,m.default)(p.default.mark(function e(){var t;return p.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.props.location.query.id,e.next=3,this.setState({userId:t});case 3:this.getAccountById();case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"render",value:function(){var e=this,t=this.state,a=t.visible,n=t.list,r=t.detail,o=t.activeData,i=[{title:"MT4",dataIndex:"MT4",align:"center"},{title:"\u5ba1\u6838\u72b6\u6001",align:"center",dataIndex:"statusTxt",render:function(e,t){return 1===t.check_status?w.default.createElement("span",{className:"color-success"},e):w.default.createElement("span",{className:"color-error"},e)}},{title:"\u6ce8\u518c\u65f6\u95f4",align:"center",dataIndex:"time"},{title:"\u4ea4\u6613\u5546",align:"center",dataIndex:"business"},{title:"\u670d\u52a1\u5668",align:"center",dataIndex:"server"},{title:"\u8ddf\u968f\u4fe1\u53f7\u6e90",align:"center",dataIndex:"source"},{title:"\u64cd\u4f5c",align:"center",key:"action",render:function(t){return t.followInfo&&1===t.followInfo.status?w.default.createElement("a",{onClick:function(){return e.showStopModal(t)},href:"javascript:;",className:"cur-pointer"},w.default.createElement("span",null,"\u505c\u6b62\u8ddf\u5355")):w.default.createElement("span",null,"\u5df2\u505c\u6b62")}}],s=function(){return w.default.createElement(k.default,{width:500,title:"\u9009\u62e9\u505c\u6b62\u65b9\u5f0f",visible:a,onCancel:e.handlerCancel,footer:null},w.default.createElement("div",{className:"w-60 mar-0-auto "},w.default.createElement("div",{className:"lh-40"},"MT4\u8d26\u53f7\uff1a",w.default.createElement("span",{className:"color-gold"},o&&o.MT4),"  ",w.default.createElement("span",{style:{paddingLeft:"50px"}},"\u4fe1\u53f7\u6e90\uff1a",w.default.createElement("span",{className:"color-gold"},o&&o.source))),w.default.createElement("div",{className:"flex-box just-c-bt"},w.default.createElement(f.default,{onClick:function(){return e.put_user_stopFollowOpen(o.followInfo.id)},type:"primary"},"\u505c\u6b62\u5f00\u4ed3"),w.default.createElement(f.default,{onClick:function(){return e.put_user_stopFollowAll(o.followInfo.id)},type:"primary"},"\u5b8c\u5168\u505c\u6b62")),w.default.createElement("div",{style:{padding:"20px 0 10px 0"}},w.default.createElement("p",null,w.default.createElement("span",{className:"font-bold"},"\u505c\u6b62\u5f00\u4ed3\uff1a"),w.default.createElement("span",null,"\u8be5MT4\u4e0d\u4f1a\u8ddf\u968f\u4fe1\u53f7\u6e90\u4e0b\u5355\uff0c\u4f46\u4f9d\u65e7\u53ef\u4ee5\u8ddf\u968f\u5e73\u4ed3"))),w.default.createElement("div",null,w.default.createElement("p",null,w.default.createElement("span",{className:"font-bold"},"\u5b8c\u5168\u505c\u6b62\uff1a"),w.default.createElement("span",null,"\u8be5MT4\u4e0d\u4f1a\u8ddf\u968f\u4fe1\u53f7\u6e90\u4e0b\u5355\uff0c\u4e5f\u4e0d\u4f1a\u8ddf\u968f\u5e73\u4ed3")))))};return w.default.createElement("div",null,s(),w.default.createElement("div",{className:"bg-fff mar-top-20"},w.default.createElement(l.default,{className:"lh-40"},w.default.createElement(u.default,{span:6,offset:2},"\u624b\u673a\u53f7\uff1a",r&&r.tel),w.default.createElement(u.default,{span:6,offset:2},"\u6ce8\u518c\u65f6\u95f4\uff1a",r&&r.time),w.default.createElement(u.default,{span:6,offset:2},"\u8d26\u53f7\u72b6\u6001\uff1a",r&&1===r.status?w.default.createElement("span",{className:"color-success"},"\u6b63\u5e38"):w.default.createElement("span",{className:"color-error"},"\u505c\u6b62"))),w.default.createElement(l.default,{className:"lh-40"},w.default.createElement(u.default,{span:6,offset:2},"MT4\u6570\u91cf\uff1a",r&&r.mt4_account&&r.mt4_account.length),w.default.createElement(u.default,{span:6,offset:2}))),w.default.createElement(c.default,{columns:i,className:"bg-fff mar-top-20",dataSource:n,pagination:!1}))}}]),t}(w.Component),i=s))||i)||i);t.default=T},uJMD:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("2Taf")),c=n(a("vZ4D")),l=function(){function e(){var t=this;(0,r.default)(this,e),this.formatTime=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ymdhms",a=function(e){return e<10?"0"+e:""+e};e.toString().includes("-")&&(e=e.replace(/-/g,"/"));var n=new Date(e),r=n.getFullYear(),c=n.getMonth()+1;c=a(c);var l=n.getDate();l=a(l);var u=n.getHours();u=a(u);var o=n.getMinutes();o=a(o);var i=n.getSeconds();i=a(i);var s=n.getDay(),f={timeStamp:n.getTime(),ymdhms:"".concat(r,"-").concat(c,"-").concat(l," ").concat(u,":").concat(o,":").concat(i),ymdhm:"".concat(r,"-").concat(c,"-").concat(l," ").concat(u,":").concat(o),ymdh:"".concat(r,"-").concat(c,"-").concat(l," ").concat(u),ymd:"".concat(r,"-").concat(c,"-").concat(l),_mdhm:"".concat(c,":").concat(l,":").concat(u,":").concat(o),hmin:"".concat(u,":").concat(o),ymd_zn:"".concat(r,"\u5e74").concat(c,"\u6708").concat(l,"\u65e5"),ym_zn:"".concat(r,"\u5e74").concat(c,"\u6708"),ymdhms_ios:"".concat(r,"/").concat(c,"/").concat(l," ").concat(u,":").concat(o,":").concat(i),ymdhm_ios:"".concat(r,"/").concat(c,"/").concat(l," ").concat(u,":").concat(o),ymdh_ios:"".concat(r,"/").concat(c,"/").concat(l," ").concat(u),ymd_ios:"".concat(r,"/").concat(c,"/").concat(l),timeObj:{timeStamp:n,year:r,month:c,date:l,hour:u,min:o,day:s}};try{return f[t]}catch(e){throw new Error("\u65f6\u95f4\u683c\u5f0f\u5316\u7c7b\u578b\u4e0d\u5bf9")}},this.checkUserAgent=function(){var e;return e=/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":/(Android)/i.test(navigator.userAgent)?"android":"pc",e},this.guid=function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},this.getOneWeekData=function(e){var a=new Date(e).getTime(),n=function(e){var n=a+3600*e*24*1e3;return t.formatTime(n,"timeObj")},r=[-3,-2,-1,0,1,2,3],c=r.map(function(e){var a=n(e),r=t.formatTime(new Date,"timeObj");return a.year===r.year&&a.month===r.month&&a.date===r.date?Object.assign(a,{day_zn:"\u4eca\u5929"}):Object.assign(a,t.invNumber2ZN(a))});return c},this.getFrontHour=function(e,a){var n=e+3600*a*1e3;return t.formatTime(n,"timeObj")},this.invNumber2ZN=function(e){var t={0:"\u5468\u65e5",1:"\u5468\u4e00",2:"\u5468\u4e8c",3:"\u5468\u4e09",4:"\u5468\u56db",5:"\u5468\u4e94",6:"\u5468\u516d"};return{day_zn:t[e.day]}},this.throttle=function(e,t){var a,n;return function(r){var c=this,l=+new Date;a&&Math.abs(+new Date-l)<t?(clearTimeout(n),n=setTimeout(function(){a=+new Date,e.apply(c,r)},t)):(a=+new Date,e.apply(this,r))}},this.checkIfEual=function(e,a){var n=function(e){return Object.prototype.toString.call(e).slice(8,-1)};if(n(e)!==n(a))return!1;if("object"!==typeof e)return e===a;if("Object"===n(e)){var r=Object.values(e),c=Object.values(a);return r.length===c.length&&Object.keys(e).every(function(n){if("object"!==typeof e[n])return e[n]===a[n];t.checkIfEual(e[n],a[n])})}if("Array"===n(e)){var l=e.length,u=a.length;if(l!==u)return!1;for(var o=0;o<l;o++){if("object"===typeof e[o])return t.checkIfEual(e[o],a[o]);if(e[o]!==a[o])return!1}return!0}},this.deepCopy=function(e){var a=function(e){return"object"===typeof e===!0},n=function(e){return Object.prototype.toString.call(e).slice(8,-1)},r=void 0;if(a){if("Array"===n(e)){r=[];for(var c=0;c<e.length;c++)a(e[c])?r[c]=t.deepCopy(e[c]):r[c]=e[c]}if("Object"===n(e))for(var l in r={},e)a(e[l])?r[l]=t.deepCopy(e[l]):r[l]=e[l]}else r=e;return r}}return(0,c.default)(e,[{key:"sortHourAndMin",value:function(e,t){var a=e.replace(/:/g,""),n=t.replace(/:/g,""),r=a-n;return r}}]),e}(),u=function(){var e;return function(){return e||(e=new l),e}}()(),o=u;t.default=o},utae:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a("2Taf")),l=r(a("vZ4D")),u=r(a("l4Ni")),o=r(a("ujKo")),i=r(a("MhPg")),s=n(a("q1tI")),f=r(a("Cxnf")),d=function(e){return e.displayName||e.name||"component"},p=function(e){return function(t){var a,n;return n=a=function(a){function n(){return(0,c.default)(this,n),(0,u.default)(this,(0,o.default)(n).apply(this,arguments))}return(0,i.default)(n,a),(0,l.default)(n,[{key:"render",value:function(){return s.default.createElement("section",null,s.default.createElement(f.default,e),s.default.createElement(t,this.props))}}]),n}(s.Component),a.displayName="WithHeaderHOC(".concat(d(t),")"),n}};t.default=p}}]);