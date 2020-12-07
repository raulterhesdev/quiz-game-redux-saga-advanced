(this["webpackJsonpredux-saga-basic-concepts"]=this["webpackJsonpredux-saga-basic-concepts"]||[]).push([[0],{42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),c=n.n(a),s=n(21),u=n.n(s),o=n(11),i=(n(42),n(15)),b="AUTH_START",j="AUTH_SUCCESS",O="AUTH_FAIL",d="LOGOUT_START",l="LOGOUT_SUCCESS",p="LOGOUT_FAIL",f="START_GAME",x="RESET_GAME",v="FETCH_QUIZ_SUCCESS",h="FETCH_QUIZ_FAIL",m="FETCH_QUIZ_CANCEL",w="ANSWER_QUESTION",y="NEXT_QUESTION",g="FINISH_GAME",E="TIME_LEFT",S="ADD_SCOREBOARD",k="FETCH_SCOREBOARD_START",_="FETCH_SCOREBOARD_SUCCESS",I="ADD_REVIEW_START",C="ADD_REVIEW_SUCCESS",T="ADD_REVIEW_FAIL",A="FETCH_REVIEWS_START",L="FETCH_REVIEWS_SUCCESS",R="FETCH_REVIEWS_FAIL",F=function(e){return{type:O,payload:e}},D=function(e){return{type:x,payload:e}},U=function(e){return{type:h,payload:e}},P=function(e){return{type:g,payload:e}},H=function(e){return{type:"ADD_SCOREBOARD_FAIL",payload:e}},Q=function(e){return{type:k,payload:e}},q=function(e){return{type:"FETCH_SCOREBOARD_FAIL",payload:e}},G=function(e){return{type:T,payload:e}},W=function(e){return{type:R,payload:e}},N=function(){var e=Object(o.b)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Loading..."}),Object(r.jsx)("button",{onClick:function(){var t;e({type:m,payload:t})},children:"Cancel"})]})},V=function(e){var t=e.score,n=e.timeLeft,a=Object(o.b)(),c=Object(o.c)((function(e){return e.game.questions[e.game.currentQuestionIndex]})).question,s=Object(o.c)((function(e){return e.game.currentQuestionIndex})),u=function(e){a({type:w,payload:{answer:e}})};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Time Left: ",n]}),Object(r.jsxs)("p",{children:["Score: ",t]}),Object(r.jsxs)("p",{children:["Question : ",s+1," / 10"]}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:c}}),Object(r.jsx)("button",{onClick:function(){return u("True")},children:"True"}),Object(r.jsx)("button",{onClick:function(){return u("False")},children:"False"}),Object(r.jsx)("button",{onClick:function(){a(P())},children:"Quit Game"})]})},B=function(){var e=Object(o.c)((function(e){return e.game.name})),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],u=Object(o.b)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"review",children:"Review:"}),Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}}),Object(r.jsx)("button",{onClick:function(){u({type:I,payload:{name:e,review:c}}),s("")},children:"Submit"})]})},M=function(e){var t=e.score,n=Object(o.b)();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Game over. Your score is: ",t]}),Object(r.jsx)("button",{onClick:function(){n(D())},children:"Play Again"}),Object(r.jsx)(B,{})]})},X=function(){var e=Object(o.b)(),t=Object(a.useState)("wegweg"),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"name",children:"Enter your name:"}),Object(r.jsx)("input",{name:"name",type:"text",onChange:function(e){return s(e.target.value)},value:c}),Object(r.jsx)("button",{onClick:function(){c.length>0&&e({type:f,payload:{name:c}})},children:"Start Game"})]})},Z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reviews.reviews}));Object(a.useEffect)((function(){var t;e({type:A,payload:t})}),[e]);var n=t.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:e.name}),Object(r.jsx)("p",{children:e.date}),Object(r.jsx)("p",{children:e.review})]},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"What users think of our game:"}),Object(r.jsx)("div",{children:n})]})},z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.game.scoreboard}));Object(a.useEffect)((function(){e(Q())}),[e]);var n=t.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:e.name}),Object(r.jsx)("p",{children:e.score}),Object(r.jsx)("p",{children:e.date}),Object(r.jsx)("p",{children:e.time})]},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Scoreboard"}),n]})};var J=function(){var e,t=Object(a.useState)(60),n=Object(i.a)(t,2),c=n[0],s=n[1],u=Object(o.c)((function(e){return e.game.stage})),b=Object(o.c)((function(e){return e.game.score})),j=Object(o.b)();switch(Object(a.useEffect)((function(){var e;return 3===u&&(e=setInterval((function(){s((function(e){return e-1}))}),1e3)),4===u&&j({type:E,payload:c}),function(){clearInterval(e),s(60)}}),[u,j]),u){case 1:e=Object(r.jsx)(X,{});break;case 2:e=Object(r.jsx)(N,{});break;case 3:e=Object(r.jsx)(V,{score:b,timeLeft:c});break;case 4:e=Object(r.jsx)(M,{score:b})}return Object(r.jsxs)(r.Fragment,{children:[e,Object(r.jsx)(Z,{}),Object(r.jsx)(z,{})]})};var K=function(){var e,t,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],u=c[1],j=Object(a.useState)(""),O=Object(i.a)(j,2),d=O[0],l=O[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),x=f[0],v=f[1],h=Object(o.b)(),m=Object(o.c)((function(e){return e.auth.authError})),w=function(e){e.preventDefault(),h({type:b,payload:{email:d,password:x,isRegister:s}})};return e="Enter",t=w,Object(a.useEffect)((function(){var n=function(n){n.key!==e&&n.keyCode!==e||t(n)};return window.addEventListener("keypress",n),function(){window.removeEventListener("keypress",n)}}),[t,e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("button",{onClick:function(){return u((function(e){return!e}))},children:["Switch to ",s?"Login":"Register"]}),Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{htmlFor:"name",children:"Email"}),Object(r.jsx)("input",{name:"email",type:"text",onChange:function(e){return l(e.target.value)},value:d}),Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{name:"password",type:"password",onChange:function(e){return v(e.target.value)},value:x}),m&&Object(r.jsx)("p",{children:m}),Object(r.jsx)("button",{onClick:w,children:s?"Register":"Login"})]})]})};var Y=function(){var e=Object(o.c)((function(e){return e.auth.isLoggedIn}));return Object(r.jsx)("div",{className:"App",children:e?Object(r.jsx)(J,{}):Object(r.jsx)(K,{})})},$=n(14),ee=n(32),te=n(10),ne={isLoggedIn:!0,authError:null,user:null},re=n(20),ae={stage:1,name:"",questions:[],error:null,answers:[],score:null,currentQuestionIndex:null,scoreboard:[]},ce={reviews:[],error:null},se=Object($.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case j:return Object(te.a)(Object(te.a)({},e),{},{isLoggedIn:!0,authError:null,user:r});case O:return Object(te.a)(Object(te.a)({},e),{},{isLoggedIn:!1,authError:r,user:null});case l:return Object(te.a)(Object(te.a)({},e),{},{isLoggedIn:!1,authError:null,user:null});case p:return Object(te.a)(Object(te.a)({},e),{},{authError:r});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case f:return Object(te.a)(Object(te.a)({},e),{},{stage:2,name:r.name,questions:[],error:null,answers:[],score:null});case x:return ae;case v:return Object(te.a)(Object(te.a)({},e),{},{stage:3,questions:r,error:null,score:0,currentQuestionIndex:0});case h:return Object(te.a)(Object(te.a)({},e),{},{stage:1,name:"",questions:[],error:r,answers:[],score:null});case w:var a=e.questions[e.currentQuestionIndex],c=r.answer===a.correct_answer,s=e.score;return c&&s++,Object(te.a)(Object(te.a)({},e),{},{score:s,answers:[].concat(Object(re.a)(e.answers),[{question:a.question,answer:r.answer,correctAnswer:a.correct_answer}])});case y:return Object(te.a)(Object(te.a)({},e),{},{currentQuestionIndex:e.currentQuestionIndex+1});case g:return Object(te.a)(Object(te.a)({},e),{},{stage:4});case S:return Object(te.a)(Object(te.a)({},e),{},{scoreboard:[].concat(Object(re.a)(e.scoreboard),[r])});case _:return Object(te.a)(Object(te.a)({},e),{},{scoreboard:r});default:return e}},reviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case C:return Object(te.a)(Object(te.a)({},e),{},{reviews:[].concat(Object(re.a)(e.reviews),[r])});case T:return Object(te.a)(Object(te.a)({},e),{},{error:r});case L:return Object(te.a)(Object(te.a)({},e),{},{reviews:r});case R:return Object(te.a)(Object(te.a)({},e),{},{error:r});default:return e}}}),ue=n(8),oe=n.n(ue),ie=n(4),be=n(13);n(44),n(46);be.a.initializeApp({apiKey:"AIzaSyAtkq6eISEeD5EmvIVqGE3PTeLLPvt1hy4",authDomain:"redux-saga-learning-2f466.firebaseapp.com",databaseURL:"https://redux-saga-learning-2f466.firebaseio.com",projectId:"redux-saga-learning-2f466",storageBucket:"redux-saga-learning-2f466.appspot.com",messagingSenderId:"1004089938686",appId:"1:1004089938686:web:c668965ce71da739428baf"});be.a.database();var je=function(e){var t=e.email,n=e.password;return be.a.auth().createUserWithEmailAndPassword(t,n).then((function(e){return e})).catch((function(e){return Promise.reject(e)}))},Oe=function(e){var t=e.email,n=e.password;return be.a.auth().signInWithEmailAndPassword(t,n).then((function(e){return e})).catch((function(e){return Promise.reject(e)}))},de=function(){return be.a.auth().signOut().then((function(){})).catch((function(e){return Promise.reject(e)}))},le=function(e){var t={name:e.name,review:e.review,date:e.date},n=be.a.database().ref().child("reviews").push().key;t.id=n;var r={};return r["/reviews/"+n]=t,be.a.database().ref().update(r),t},pe=function(){return be.a.database().ref("/reviews").once("value").then((function(e){var t=[];for(var n in e.val())if(e.val().hasOwnProperty(n)){var r=e.val()[n];t.push(r)}return t})).catch((function(e){return Promise.reject(e)}))},fe=function(e){var t={name:e.name,score:e.score,date:e.date,time:e.time},n=be.a.database().ref().child("scoreboard").push().key;t.id=n;var r={};return r["/scoreboard/"+n]=t,be.a.database().ref().update(r),t},xe=function(){return be.a.database().ref("/scoreboard").once("value").then((function(e){var t=[];for(var n in e.val())if(e.val().hasOwnProperty(n)){var r=e.val()[n];t.push(r)}return t})).catch((function(e){return Promise.reject(e)}))},ve=oe.a.mark(ye),he=oe.a.mark(ge),me=oe.a.mark(Ee),we=oe.a.mark(Se);function ye(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ie.b)(de);case 3:return e.next=5,Object(ie.f)({type:l});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(ie.f)((e.t0.message,{type:p}));case 11:case"end":return e.stop()}}),ve,null,[[0,7]])}function ge(e){var t;return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!e.payload.isRegister){n.next=7;break}return n.next=4,Object(ie.b)(je,e.payload);case 4:n.t0=n.sent,n.next=10;break;case 7:return n.next=9,Object(ie.b)(Oe,e.payload);case 9:n.t0=n.sent;case 10:return t=n.t0,n.next=13,Object(ie.f)({type:j,payload:t});case 13:return n.abrupt("return",t);case 16:return n.prev=16,n.t1=n.catch(0),n.next=20,Object(ie.f)(F(n.t1.message));case 20:case"end":return n.stop()}}),he,null,[[0,16]])}function Ee(){var e;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(ie.j)(b);case 3:return e=t.sent,t.next=6,Object(ie.b)(ge,e);case 6:if(!t.sent){t.next=12;break}return t.next=10,Object(ie.j)(d);case 10:return t.next=12,Object(ie.b)(ye);case 12:t.next=0;break;case 14:case"end":return t.stop()}}),me)}function Se(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee();case 2:case"end":return e.stop()}}),we)}var ke=function(){return fetch("https://opentdb.com/api.php?amount=10&type=boolean").then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return Promise.reject(e)}))},_e=n(24),Ie=n.n(_e),Ce=oe.a.mark(Pe),Te=oe.a.mark(He),Ae=oe.a.mark(Qe),Le=oe.a.mark(qe),Re=oe.a.mark(Ge),Fe=oe.a.mark(We),De=oe.a.mark(Ne),Ue=oe.a.mark(Ve);function Pe(){var e;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ie.d)(500);case 3:return t.next=5,Object(ie.b)(ke);case 5:return e=t.sent,t.next=8,Object(ie.f)({type:v,payload:e});case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(ie.f)(U("There was an error trying to get the questions. Please try again!"));case 14:case"end":return t.stop()}}),Ce,null,[[0,10]])}function He(e){return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ie.j)(m);case 2:return t.next=4,Object(ie.c)(e);case 4:return t.next=6,Object(ie.f)(D());case 6:case"end":return t.stop()}}),Te)}function Qe(){var e;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(ie.j)(f);case 3:return t.next=5,Object(ie.e)(Pe);case 5:return e=t.sent,t.next=8,Object(ie.e)(He,e);case 8:t.next=0;break;case 10:case"end":return t.stop()}}),Ae)}function qe(){var e;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<10)){t.next=9;break}return t.next=4,Object(ie.j)(w);case 4:return t.next=6,Object(ie.f)({type:y,payload:void 0});case 6:e++,t.next=1;break;case 9:case"end":return t.stop()}}),Le)}function Ge(){var e,t,n,r,a;return oe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ie.j)(E);case 2:return e=c.sent,t=e.payload,c.next=6,Object(ie.h)((function(e){return e.game.name}));case 6:return n=c.sent,c.next=9,Object(ie.h)((function(e){return e.game.score}));case 9:return r=c.sent,c.prev=10,c.next=13,Object(ie.b)(fe,{name:n,score:r,date:Ie()().format("LLL"),time:60-t});case 13:return a=c.sent,c.next=16,Object(ie.f)({type:S,payload:a});case 16:return c.next=18,Object(ie.f)(Q());case 18:c.next=23;break;case 20:c.prev=20,c.t0=c.catch(10),H(c.t0);case 23:case"end":return c.stop()}}),Re,null,[[10,20]])}function We(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.j)(v);case 2:return e.next=4,Object(ie.g)({delay:Object(ie.d)(6e4),finish:qe()});case 4:return e.next=6,Object(ie.f)(P());case 6:return e.next=8,Object(ie.b)(Ge);case 8:case"end":return e.stop()}}),Fe)}function Ne(){var e;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(ie.j)(k);case 3:return t.prev=3,t.next=6,Object(ie.b)(xe);case 6:return e=t.sent,t.next=9,Object(ie.f)({type:_,payload:e});case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(3),t.next=15,Object(ie.f)(q(t.t0));case 15:t.next=0;break;case 17:case"end":return t.stop()}}),De,null,[[3,11]])}function Ve(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.e)(Qe);case 2:return e.next=4,Object(ie.e)(We);case 4:return e.next=6,Object(ie.i)(Ne);case 6:case"end":return e.stop()}}),Ue)}var Be=oe.a.mark(Ze),Me=oe.a.mark(ze),Xe=oe.a.mark(Je);function Ze(){var e,t,n;return oe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(ie.j)(I);case 3:return e=r.sent,t={name:e.payload.name,review:e.payload.review,date:Ie()().format("LLL")},r.prev=5,r.next=8,Object(ie.b)(le,t);case 8:return n=r.sent,r.next=11,Object(ie.f)({type:C,payload:n});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(5),r.next=17,Object(ie.f)(G(r.t0));case 17:r.next=0;break;case 19:case"end":return r.stop()}}),Be,null,[[5,13]])}function ze(){var e;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(ie.j)(A);case 3:return t.prev=3,t.next=6,Object(ie.b)(pe);case 6:return e=t.sent,t.next=9,Object(ie.f)({type:L,payload:e});case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(3),t.next=15,Object(ie.f)(W(t.t0));case 15:t.next=0;break;case 17:case"end":return t.stop()}}),Me,null,[[3,11]])}function Je(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)([Ze(),ze()]);case 2:case"end":return e.stop()}}),Xe)}var Ke=oe.a.mark(Ye);function Ye(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)([Se(),Ve(),Je()]);case 2:case"end":return e.stop()}}),Ke)}var $e=Object(ee.a)(),et=[$e],tt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,nt=Object($.e)(se,tt($.a.apply(void 0,et)));$e.run(Ye);var rt=nt;u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(o.a,{store:rt,children:Object(r.jsx)(Y,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c61fe458.chunk.js.map