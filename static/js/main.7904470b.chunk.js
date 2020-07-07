(this["webpackJsonpselene-quiz"]=this["webpackJsonpselene-quiz"]||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},20:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=(n(20),n(2)),s=n(3),l=n(5),u=n(4),d=(n(21),n(22),n(1)),p="QuizLoad",m="QuizAnswer",f="QuizSubmit",h="PagerUpdate",v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).isAnswered=function(e){return e.options.some((function(e){return e.selected}))?"Answered":"Not Answered"},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center font-weight-normal"},"Review Quiz: ",this.props.quiz.name),r.a.createElement("hr",null),r.a.createElement("div",{className:"row text-center"},this.props.quiz.questions.map((function(t,n){return r.a.createElement("div",{key:t.id,className:"col-4 cursor-pointer"},r.a.createElement("div",{id:n,onClick:e.props.move,className:"p-3 mb-2 ".concat("Answered"===e.isAnswered(t)?"bg-info":"bg-warning")},n+1,". ",e.isAnswered(t)))}))))}}]),n}(a.Component),b=n(7),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"onAnswer",value:function(e,t){var n=JSON.parse(JSON.stringify(this.props.quiz)),a=n.questions.find((function(t){return t.id===e.id}));a.options.forEach((function(e){e.selected=!1})),a.options.find((function(e){return e.id===t.id})).selected=!0,this.props.onAnswer(n)}},{key:"render",value:function(){var e=this,t=this.props.quiz.questions?this.props.quiz.questions.slice(this.props.pager.index,this.props.pager.index+this.props.pager.size):[];return r.a.createElement("div",{id:"quiz"},r.a.createElement("h2",{className:"text-center font-weight-normal"},this.props.quiz.name),r.a.createElement("hr",null),t.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("div",{className:"badge badge-info"},"Question ",e.props.pager.index+1," of ",e.props.pager.count,"."),r.a.createElement("h3",{className:"font-weight-normal"},e.props.pager.index+1,". ",r.a.createElement("span",null,t.name)),r.a.createElement("div",{className:"row text-left options"},t.options.map((function(n){return r.a.createElement("div",{key:n.id,className:"col-sm-6 col-12"},r.a.createElement("div",{className:"option"},r.a.createElement("label",{className:"font-weight-normal",htmlFor:n.id},r.a.createElement("input",{id:n.id,checked:n.selected,type:"checkbox",onChange:function(){return e.onAnswer(t,n)}}),n.name)))}))))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-center"},this.props.quiz.config.allowBack&&r.a.createElement("button",{id:"first",className:"btn btn-default",onClick:this.props.move},"First"),this.props.quiz.config.allowBack&&r.a.createElement("button",{id:"prev",className:"btn btn-default",onClick:this.props.move},"Prev"),r.a.createElement("button",{id:"next",className:"btn btn-primary",onClick:this.props.move},"Next"),r.a.createElement("button",{id:"last",className:"btn btn-default",onClick:this.props.move},"Last")))}}]),n}(a.Component),E=Object(b.b)((function(e){return Object(d.a)(Object(d.a)(Object(d.a)({},e.quiz),e.mode),e.pager)}),(function(e){return{onAnswer:function(t){return e({type:m,payload:t})}}}))(g);var w=function(e){var t=e.questions;return t.forEach((function(e){e.isCorrect=e.options.every((function(e){return e.selected===e.isAnswer}))})),r.a.createElement("div",{className:"result"},r.a.createElement("h2",{className:"text-center font-weight-normal"},"Quiz Result"),t.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"mb-2 ".concat(e.isCorrect?"bg-success":"bg-danger")},r.a.createElement("div",{className:"result-question"},r.a.createElement("h5",null,t+1,". ",e.name),r.a.createElement("div",{className:"row"},e.options.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-6"},r.a.createElement("input",{id:e.id,type:"checkbox",disabled:"disabled",checked:e.selected})," ",e.name)}))),r.a.createElement("div",{className:"m-1 p-1 text-bold ".concat(e.isCorrect?"text-success":"text-danger")},"Your answer is ",e.isCorrect?"Correct":"Wrong",".")))})),r.a.createElement("h4",{className:"alert alert-info text-center"},"You may close this window now."))},z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).move=function(t){var n=t.target.id,a=0;if((a="first"===n?0:"prev"===n?e.props.pager.index-1:"next"===n?e.props.pager.index+1:"last"===n?e.props.pager.count-1:parseInt(t.target.id,10))>=0&&a<e.props.pager.count){var r={index:a,size:1,count:e.props.pager.count};e.props.onPagerUpdate(r)}},e.setMode=function(t){return e.props.onSubmit(t.target.id)},e}return Object(s.a)(n,[{key:"renderMode",value:function(){return"quiz"===this.props.mode?r.a.createElement(E,{move:this.move}):"review"===this.props.mode?r.a.createElement(v,{quiz:this.props.quiz,move:this.move}):r.a.createElement(w,{questions:this.props.quiz.questions||[]})}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderMode(),"submit"!==this.props.mode&&r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("button",{id:"quiz",className:"btn btn-info",onClick:this.setMode},"Quiz"),r.a.createElement("button",{id:"review",className:"btn btn-info",onClick:this.setMode},"Review"),r.a.createElement("button",{id:"submit",className:"btn btn-primary",onClick:this.setMode},"Submit Quiz")))}}]),n}(a.Component),j=Object(b.b)((function(e){return Object(d.a)(Object(d.a)(Object(d.a)({},e.quiz),e.mode),e.pager)}),(function(e){return{onSubmit:function(t){return e({type:f,payload:t})},onPagerUpdate:function(t){return e({type:h,payload:t})}}}))(z),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={quizes:[{id:"data/inegi.json",name:"INEGI"},{id:"data/designPatterns.json",name:"Design Patterns"}],quizId:"data/inegi.json"},e.pager={index:0,size:1,count:1},e.onChange=function(t){e.setState({quizId:t.target.value}),e.load(t.target.value)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.load(this.state.quizId)}},{key:"load",value:function(e){var t=this,n=e||this.props.quizId;fetch("".concat("/selene-quiz","/").concat(n)).then((function(e){return e.json()})).then((function(e){var n=e;n.questions.forEach((function(e){e.options.forEach((function(e){return e.selected=!1}))})),n.config=Object.assign(t.props.quiz.config||{},n.config),t.pager.count=n.questions.length/t.pager.size,t.props.onQuizLoad(n),t.props.onPagerUpdate(t.pager)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"p-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h3",{className:"font-weight-bold"},"Selene Quiz")),r.a.createElement("div",{className:"col-sm-6 col-12 text-right"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Select Quiz:")),r.a.createElement("select",{className:"form-control",id:"selectQuiz",onChange:this.onChange},this.state.quizes.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))))))}}]),n}(a.Component),q=Object(b.b)((function(e){return Object(d.a)({},e.quiz)}),(function(e){return{onQuizLoad:function(t){return e({type:p,payload:t})},onPagerUpdate:function(t){return e({type:h,payload:t})}}}))(y),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",{className:"text-right"},r.a.createElement("span",{className:"text-muted"},"All rights reserved 2020 @macako"))}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(q,null),r.a.createElement(j,{quiz:this.state.quiz,quizId:this.state.quizId,mode:this.state.mode}),r.a.createElement(O,null))}}]),n}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=n(6),A=n(14),S=function(e){return function(e){return function(t){e(t)}}},Q={quiz:{config:{allowBack:!0,allowReview:!0,autoMove:!1,duration:0,pageSize:1,requiredAll:!1,richText:!1,shuffleQuestions:!1,shuffleOptions:!1,showClock:!1,showPager:!0,theme:"none"},questions:[]},mode:"quiz",pager:{index:0,size:1,count:1}},P=Object(C.combineReducers)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(d.a)({},Q),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{pager:t.payload,mode:"quiz"});case p:return Object(d.a)(Object(d.a)({},e),{},{quiz:t.payload});case f:return console.log("quiz.js Submitted."),Object(d.a)(Object(d.a)({},e),{},{mode:t.payload});case m:return console.log("quiz.js reducer Quiz Answer called."),Object(d.a)(Object(d.a)({},e),{},{quiz:t.payload});default:return e}}}),I=Object(C.createStore)(P,Object(A.composeWithDevTools)(Object(C.applyMiddleware)(S)));i.a.render(r.a.createElement(b.a,{store:I},r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/selene-quiz",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/selene-quiz","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.7904470b.chunk.js.map