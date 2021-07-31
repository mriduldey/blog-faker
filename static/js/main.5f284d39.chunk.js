(this["webpackJsonpredux-tutorial"]=this["webpackJsonpredux-tutorial"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(20),c=a(17),n=a(14),o=a(26),i=a(27),d=a(16),p=a(4),l=a(41),j=a(42),u=a(43),b=a(11),h=a.n(b),m=a(13),O="GET_USERS",x="GET_USERS_SUCCESS",f="GET_USERS_FAILURE",g=function(e){return{type:x,payload:e}};var v=a(44),y=a.p+"static/media/profile1.282b1adb.jpg",E=a.p+"static/media/profile2.0cc52bbd.jpeg",w=a.p+"static/media/profile3.5faee1aa.jpeg",S=a.p+"static/media/profile4.4fe4fb19.jpeg",T=a.p+"static/media/profile5.453c4718.jpeg",N=a.p+"static/media/profile6.f630c76e.jpeg",_=[y,E,w,S,T,N,N,a.p+"static/media/profile7.fbc3e530.jpeg",a.p+"static/media/profile8.4f9e4a3e.jpeg",a.p+"static/media/profile9.a7eb2d89.jpeg",a.p+"static/media/profile10.7add4d9d.jpeg",a.p+"static/media/profile11.9e06ddf0.jpeg"],C=_,U=_.length,k=a(1),L=function(e){var t=e.user,a=e.index,r=C[a%U];return Object(k.jsxs)(v.a,{className:"user-card rounded-3 shadow p-2",children:[Object(k.jsx)("div",{className:"d-flex justify-content-center align-items-center position-relative mb-5",children:Object(k.jsx)("div",{className:"profile-image-wrapper p-2 rounded-circle position-absolute top-100 start-50 translate-middle shadow-lg bg-white d-flex justify-content-center align-items-center",children:Object(k.jsx)(v.a.Img,{variant:"top",src:r,className:"rounded-circle profile-image shadow-lg"})})}),Object(k.jsxs)(v.a.Body,{className:"text-white text-center",children:[Object(k.jsxs)(v.a.Title,{className:"",children:[t.name," | ",t.username]}),Object(k.jsxs)(v.a.Text,{children:["Website: ",t.website]}),Object(k.jsxs)(v.a.Text,{children:["Email: ",t.email]}),Object(k.jsxs)(v.a.Text,{children:["City: ",t.address.city]})]})]})},P=Object(n.b)((function(e){var t=e.users;return{loading:t.loading,hasError:t.hasError,users:t.users}}))((function(e){var t=e.dispatch,a=e.users,s=e.loading,c=e.hasErrors;Object(r.useEffect)((function(){t(function(){var e=Object(m.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:O}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t(g(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:f});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);return Object(k.jsx)(j.a,{children:Object(k.jsx)(u.a,{className:"mb-2",children:s?Object(k.jsx)("p",{children:"Loading users..."}):c?Object(k.jsx)("p",{children:"Unable to display users."}):a.map((function(e,t){return Object(k.jsx)(l.a,{xs:12,sm:6,lg:4,xl:3,className:"mb-2",children:Object(k.jsx)(d.b,{to:"/users/".concat(e.id,"/posts"),className:"button",children:Object(k.jsx)(L,{user:e,index:t})})},e.id)}))})})})),G="GET_POSTS",I="GET_POSTS_SUCCESS",M="GET_POSTS_FAILURE";var R=a.p+"static/media/cover1.ff3c9b79.webp",A=a.p+"static/media/cover2.21658be9.png",B=a.p+"static/media/cover3.f61ec2eb.jpg",F=a.p+"static/media/cover4.eb777506.jpg",D=a.p+"static/media/writer2.834bad45.png",W=[R,A,B,F,a.p+"static/media/cover5.55ec56d9.jpg",D],J=W,H=W.length,q=function(e){var t=e.post,a=e.fullPage,r=e.varient,s=e.index,c=J[s%H];return Object(k.jsx)("article",{className:a?"post-container":"post-excerpt",children:Object(k.jsxs)(v.a,{bg:r.toLowerCase(),text:"light"===r.toLowerCase()?"dark":"white",className:"mb-3",children:[Object(k.jsx)(v.a.Img,{variant:"top",src:c,className:"shadow-lg m-2"}),Object(k.jsxs)(v.a.Body,{children:[Object(k.jsx)(v.a.Title,{children:t.title.toUpperCase()}),Object(k.jsx)(v.a.Text,{children:a?t.body:t.body.substring(0,100).concat("...")})]})]})})},z=["Primary","Secondary","Success","Danger","Warning","Info","Light","Dark"];var K=Object(n.b)((function(e){var t=e.posts;return{loading:t.loading,hasError:t.hasError,posts:t.posts}}))((function(e){var t=e.match,a=e.dispatch,s=e.posts,c=e.loading,n=e.hasErrors;Object(r.useEffect)((function(){var e,r=t.params.id;a((e=r,function(){var t=Object(m.a)(h.a.mark((function t(a){var r,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:G}),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/posts?userId="+e);case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,a({type:I,payload:s}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:M});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()))}),[a,t.params]);return Object(k.jsxs)(j.a,{fluid:"md",className:"text-white",children:[Object(k.jsx)("h1",{children:"Posts"}),Object(k.jsx)(u.a,{md:6,children:c?Object(k.jsx)("p",{children:"Loading posts..."}):n?Object(k.jsx)("p",{children:"Unable to display posts."}):s.map((function(e,t){var a,r=z[(a=z.length,Math.floor(Math.random()*a))];return Object(k.jsx)(l.a,{xs:12,sm:6,lg:4,xl:3,children:Object(k.jsx)(d.b,{to:"/posts/".concat(e.id),children:Object(k.jsx)(q,{post:e,fullPage:!1,varient:r,index:t})})},e.id)}))})]})})),Q=function(e){var t=e.comment;return Object(k.jsx)("aside",{className:"comment-wrapper p-2 ms-5 mb-2 bg-secondary rounded-3",children:Object(k.jsxs)(v.a,{bg:"dark".toLowerCase(),text:"light"==="dark".toLowerCase()?"dark":"white",children:[Object(k.jsx)(v.a.Header,{children:Object(k.jsx)("h2",{children:t.name.toUpperCase()})}),Object(k.jsxs)(v.a.Body,{children:[Object(k.jsx)(v.a.Title,{children:t.email}),Object(k.jsx)(v.a.Text,{children:t.body})]})]})})},V="GET_POST",X="GET_POST_SUCCESS",Y="GET_POST_FAILURE",Z=function(e){return{type:X,payload:e}};var $="GET_COMMENTS",ee="GET_COMMENTS_SUCCESS",te="GET_COMMENTS_FAILURE",ae=function(e){return{type:ee,payload:e}};var re=Object(n.b)((function(e){var t=e.post,a=e.comments;return{loading:{post:t.loading,comments:a.loading},hasError:{post:t.hasError,comments:a.hasErrors},post:t.post,comments:a.comments}}))((function(e){var t=e.dispatch,a=e.match,s=e.post,c=e.comments,n=e.loading,o=void 0===n?{}:n,i=e.hasErrors,d=void 0===i?{}:i;Object(r.useEffect)((function(){var e,r=a.params.id;t((e=r,function(){var t=Object(m.a)(h.a.mark((function t(a){var r,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:V}),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/posts/"+e);case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,a(Z(s)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:Y});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}())),t(function(e){return function(){var t=Object(m.a)(h.a.mark((function t(a){var r,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:$}),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/comments?postId="+e);case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,a(ae(s)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:te});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(r))}),[t,a]);return Object(k.jsxs)(j.a,{className:"text-white",children:[Object(k.jsx)("h1",{children:"Post"}),function(){if(s)return o.post?Object(k.jsx)("p",{children:"Loading posts..."}):d.post?Object(k.jsx)("p",{children:"Unable to display posts."}):s&&Object(k.jsx)(q,{fullPage:!0,post:s,varient:"Light"},s.id)}(),Object(k.jsxs)(j.a,{className:"mt-5",children:[Object(k.jsx)(u.a,{children:Object(k.jsx)(l.a,{children:Object(k.jsx)("h2",{className:"ps-3",children:"Comments"})})}),Object(k.jsx)(u.a,{children:Object(k.jsx)(l.a,{children:function(){if(c.length)return o.comments?Object(k.jsx)("p",{children:"Loading posts..."}):d.comments?Object(k.jsx)("p",{children:"Unable to display posts."}):c.map((function(e){return Object(k.jsx)(Q,{fullPage:!0,comment:e},e.id)}))}()})})]})]})})),se=function(){return Object(k.jsx)(d.a,{children:Object(k.jsxs)(p.d,{children:[Object(k.jsx)(p.b,{exact:!0,path:"/users",component:P}),Object(k.jsx)(p.b,{exact:!0,path:"/users/:id/posts/",component:K}),Object(k.jsx)(p.b,{exact:!0,path:"/posts/:id",component:re}),Object(k.jsx)(p.a,{to:"/users"})]})})},ce=a(2),ne={posts:[],loading:!1,hasErrors:!1};var oe={post:void 0,loading:!1,hasErrors:!1};var ie={comments:[],loading:!1,hasErrors:!1};var de={users:[],loading:!1,hasErrors:!1};var pe=Object(c.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!0});case I:return Object(ce.a)(Object(ce.a)({},e),{},{posts:t.payload,loading:!1});case M:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!0});case X:return Object(ce.a)(Object(ce.a)({},e),{},{post:t.payload,loading:!1});case Y:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!0});case ee:return Object(ce.a)(Object(ce.a)({},e),{},{comments:t.payload,loading:!1});case te:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!0});case x:return Object(ce.a)(Object(ce.a)({},e),{},{users:t.payload,loading:!1});case f:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}}}),le=(a(39),Object(c.createStore)(pe,Object(i.composeWithDevTools)(Object(c.applyMiddleware)(o.a))));Object(s.render)(Object(k.jsx)(n.a,{store:le,children:Object(k.jsx)(se,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5f284d39.chunk.js.map