webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,s){function a(t){s(240)}var i=s(2)(s(210),s(287),a,"data-v-c439d3a4",null);t.exports=i.exports},,,,,,,function(t,e,s){function a(t){s(242)}var i=s(2)(s(200),s(289),a,"data-v-d9f8d6a4",null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){function a(t){s(243)}var i=s(2)(s(202),s(290),a,"data-v-fafd3604",null);t.exports=i.exports},function(t,e,s){function a(t){s(223)}var i=s(2)(s(203),s(270),a,"data-v-14fc7a17",null);t.exports=i.exports},function(t,e,s){function a(t){s(228)}var i=s(2)(s(204),s(275),a,"data-v-4553a31a",null);t.exports=i.exports},function(t,e,s){function a(t){s(226)}var i=s(2)(s(207),s(273),a,null,null);t.exports=i.exports},function(t,e,s){"use strict";var a=s(34),i=s(292),n=s(268),o=s.n(n),r=s(262),c=s.n(r),l=s(260),u=s.n(l),d=s(267),p=s.n(d),f=s(266),m=s.n(f),v=s(265),_=s.n(v),h=s(264),g=s.n(h),C=s(261),x=s.n(C),b=s(259),y=s.n(b),k=s(263),w=s.n(k);a.a.use(i.a),e.a=new i.a({routes:[{path:"/home",name:"home",component:c.a},{path:"/detail/:id",name:"detail",component:u.a},{path:"/camera",name:"camera",component:y.a},{path:"/",name:"welcome",component:o.a},{path:"/cadastro",name:"cadastro",component:p.a},{path:"/cadastro/guru",name:"cadastro-guru",component:m.a},{path:"/cadastro/aprendiz",name:"cadastro-aprendiz",component:_.a},{path:"/profile",name:"profile",component:g.a},{path:"/profession",name:"profession",component:w.a},{path:"/feedback",name:"feedback",component:x.a}]})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){function a(t){s(238)}var i=s(2)(s(205),s(285),a,null,null);t.exports=i.exports},function(t,e,s){function a(t){s(229)}var i=s(2)(s(208),s(276),a,null,null);t.exports=i.exports},,function(t,e,s){"use strict";s.d(e,"a",function(){return o});var a=s(248),i=s.n(a),n={apiKey:"AIzaSyAPlkcu0A-U4ZxdVnoxplZF42rfVA16OJo",authDomain:"vue-pwa-profil.firebaseapp.com",databaseURL:"https://vue-pwa-profil.firebaseio.com",projectId:"vue-pwa-profil",storageBucket:"vue-pwa-profil.appspot.com",messagingSenderId:"342672699459"};i.a.initializeApp(n);var o=i.a.database();i.a.storage()},function(t,e,s){"use strict";var a=s(34),i=s(296),n=s(33),o=s.n(n),r=s(51),c=s(198);a.a.use(i.a),e.a=new i.a.Store({state:{idToken:null,userId:null,user:null},mutations:{authUser:function(t,e){t.idToken=e.token,t.userId=e.userId},storeUser:function(t,e){t.user=e},clearAuthData:function(t){t.idToken=null,t.userId=null}},actions:{setLogoutTimer:function(t,e){var s=t.commit;setTimeout(function(){s("clearAuthData")},1e3*e)},signup:function(t,e){var s=t.commit,a=t.dispatch;c.a.post("/signupNewUser?key=AIzaSyBDBst9Z8Nqn2G-iYqzAjIpymj7uIjw-yc",{email:e.email,password:e.password,returnSecureToken:!0}).then(function(t){console.log(t),s("authUser",{token:t.data.idToken,userId:t.data.localId});var i=new Date,n=new Date(1e3*(i.getTime()+t.data.expiresIn));localStorage.setItem("token",t.data.idToken),localStorage.setItem("userId",t.data.localId),localStorage.setItem("expirationDate",n),a("storeUser",e),a("setLogoutTimer",t.data.expiresIn)}).catch(function(t){return console.log(t)})},login:function(t,e){var s=t.commit,a=t.dispatch;c.a.post("/verifyPassword?key=AIzaSyBDBst9Z8Nqn2G-iYqzAjIpymj7uIjw-yc",{email:e.email,password:e.password,returnSecureToken:!0}).then(function(t){console.log(t);var e=new Date,i=new Date(1e3*(e.getTime()+t.data.expiresIn));localStorage.setItem("token",t.data.idToken),localStorage.setItem("userId",t.data.localId),localStorage.setItem("expirationDate",i),s("authUser",{token:t.data.idToken,userId:t.data.localId}),a("setLogoutTimer",t.data.expiresIn)}).catch(function(t){console.log(t)})},tryAutoLogin:function(t){var e=t.commit,s=localStorage.getItem("token");if(s){var a=localStorage.getItem("expirationDate");if(!(new Date>=a)){e("authUser",{token:s,userId:localStorage.getItem("userId")})}}},logout:function(t){(0,t.commit)("clearAuthData"),localStorage.removeItem("expirationDate"),localStorage.removeItem("token"),localStorage.removeItem("userId"),r.a.replace("/signin")},storeUser:function(t,e){var s=(t.commit,t.state);s.idToken&&o.a.post("/users.json?auth="+s.idToken,e).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})},fetchUser:function(t){var e=t.commit,s=t.state;s.idToken&&o.a.get("/users.json?auth="+s.idToken).then(function(t){console.log(t);var s=t.data,a=[];for(var i in s){var n=s[i];n.id=i,a.push(n)}console.log(a),e("storeUser",a[0])}).catch(function(t){return console.log(t)})}},getters:{user:function(t){return t.user},isAuthenticated:function(t){return null!==t.idToken}}})},function(t,e,s){function a(t){s(232)}var i=s(2)(s(199),s(279),a,null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(34),i=s(103),n=s.n(i),o=s(102),r=s(104),c=s.n(r),l=s(33),u=s.n(l),d=s(100),p=s(99),f=s(101),m=s.n(f),v=s(51);u.a.defaults.baseURL="https://vue-course-a2688.firebaseio.com/",u.a.defaults.headers.get.Accepts="application/json",a.a.config.productionTip=!1,a.a.use(n.a),a.a.use(o.a),a.a.use(c.a),a.a.config.productionTip=!1,new a.a({el:"#app",firebase:{card:p.a.ref("card").orderByChild("created_at")},router:v.a,store:d.a,template:"<App/>",components:{App:m.a}})},function(t,e,s){"use strict";var a={methods:{postContent:function(t,e){this.$root.$firebaseRefs.card.push({url:t,comment:e,info:"Posted by Nay on Tuesday",created_at:-1*(new Date).getTime()}).then(this.$router.push("/Home"))}}};e.a=a},function(t,e,s){"use strict";var a=s(33),i=s.n(a),n=i.a.create({baseURL:"https://www.googleapis.com/identitytoolkit/v3/relyingparty"});e.a=n},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",methods:{showMenu:function(){document.querySelector(".nav").classList.add("-show")},hideMenu:function(){document.querySelector(".nav").classList.remove("-show")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["textInner","eventclick","linkto","buttonType"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{showMenu:function(){document.querySelector(".nav").classList.add("-show")},hideMenu:function(){document.querySelector(".nav").classList.remove("-show")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{required:!0,type:String},value:{type:String},name:{type:String},id:{type:String},placeholder:{required:!0,type:String},design:{type:String}},computed:{inputStyle:function(){return"main"!==this.design&&this.design?"login"===this.design?"input--login":"invalid"===this.design?"input--invalid":void 0:"input--main"}},methods:{updateValue:function(t){this.$emit("input",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{titleText:{required:!0,type:String},subtitleText:{type:String},design:{type:String}},computed:{titlesStyle:function(){return"left"!==this.design&&this.design?"center"===this.design?"titles--center":void 0:"titles--left"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(50),i=s.n(a),n=s(96),o=s.n(n),r=s(256),c=s.n(r);e.default={data:function(){return{autor:"Nayara Hilton",preloading:!0,hashtags:[{hash:"#Desigin"},{hash:"#Motion"},{hash:"#UX"},{hash:"#Front"}]}},mounted:function(){this.saveCardsToCache()},props:["resume"],components:{"profile-resume":i.a,"post-reactions":o.a,"pre-loading":c.a},methods:{displayDetails:function(t){this.$router.push({name:"detail",params:{id:t}})},goToProfile:function(t){this.$router.push({name:"profile",params:{id:t}})},getCards:function(){return navigator.onLine?(this.saveCardsToCache(),this.$root.card):JSON.parse(localStorage.getItem("cards"))},saveCardsToCache:function(){var t=this;this.$root.$firebaseRefs.card.orderByChild("created_at").once("value",function(e){var s=[];e.forEach(function(t){var e=t.val();e[".key"]=t.key,s.push(e)}),t.preloading=!1})},mounted:function(){this.saveCatsToCache()}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["text-inner"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["image","nickname","username","profession"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:[{text:"@nayarahilton"},{text:"@prisantos"},{text:"@lucasilva"},{text:"@lilisantos"},{text:"@vinicuisbueno"},{text:"@gabriellopes"},{text:"@rachelaquino"},{text:"Outro"},{text:"Outro"}]}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{textInner:{type:String},design:{type:String}},computed:{socialbtnStyle:function(){return"main"!==this.design&&this.design?"login"===this.design?"social-btn--login":void 0:"social-btn--main"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{link:{type:String},title:{required:!0,type:String}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{design:{type:String}},data:function(){return{options:[{id:1,src:"",link:"/cadastro/guru",title:"Guru",text:"Ainda não sei o que fazer. Vim aqui para  descobrir coisas novas e ver a rotina de trabalho dos Gurus."},{id:2,src:"",link:"/cadastro/aprendiz",title:"Aprendiz",text:"Sou especialista! Vou dividir conhecimento sobre a minha área e ajudar os aprendizes a descobrir o melhor caminho."}]}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(197),i=s(14),n=s.n(i),o=s(21),r=s.n(o);e.default={mixins:[a.a],data:function(){return{title:"",imageData:""}},components:{"main-button":r.a,"status-bar":n.a},methods:{previewImage:function(t){var e=this,s=t.target;if(s.files&&s.files[0]){var a=new FileReader;a.onload=function(t){e.imageData=t.target.result},a.readAsDataURL(s.files[0])}},post:function(){var t=document.querySelector(".image-preview__img");""!==this.imageData?this.postContent(t.src,this.title||""):alert("Adicione uma imagem")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(95),i=(s.n(a),s(14)),n=s.n(i);e.default={data:function(){return{card:null}},components:{"status-bar":n.a},mounted:function(){var t=this;this.card=s.i(a.find)(this.$root.card,function(e){return e[".key"]===t.$route.params.id})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(21),i=s.n(a);e.default={data:function(){return{title:"Perfil criado com sucesso!",text:"Vamos começar espalhando seu conheciemento?"}},components:{"main-button":i.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(255),i=s.n(a),n=s(97),o=s.n(n),r=s(49),c=s.n(r);e.default={components:{"main-header":i.a,"slider-items":o.a,"post-card":c.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(50),i=s.n(a),n=s(96),o=s.n(n),r=s(97),c=s.n(r),l=s(49),u=s.n(l),d=s(21),p=s.n(d),f=s(14),m=s.n(f);e.default={data:function(){return{card:null,items:[{text:"Ajudo pessoas"},{text:"Salvo vidas"},{text:"Ajudo animais"},{text:"Viajo muito"},{text:"Trabalho de casa"}]}},components:{"profile-resume":i.a,"post-reactions":o.a,"slider-items":c.a,"post-card":u.a,"main-button":p.a,"status-bar":m.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(95),i=(s.n(a),s(14)),n=s.n(i),o=s(49),r=s.n(o),c=s(50),l=s.n(c);e.default={data:function(){return{card:null}},components:{"status-bar":n.a,"post-card":r.a,"profile-resume":l.a},mounted:function(){var t=this;this.card=s.i(a.find)(this.$root.card,function(e){return e[".key"]===t.$route.params.id})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(14),i=s.n(a),n=s(48),o=s.n(n),r=s(47),c=s.n(r),l=s(21),u=s.n(l);e.default={data:function(){return{type:2,username:"",name:"",email:"",password:""}},components:{"status-bar":i.a,"main-titles":o.a,"main-input":c.a,"main-button":u.a},methods:{onSubmit:function(){var t={type:this.type,username:this.username,name:this.name,email:this.email,password:this.password};console.log(t),this.$store.dispatch("signup",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(14),i=s.n(a),n=s(48),o=s.n(n),r=s(47),c=s.n(r);e.default={components:{"status-bar":i.a,"main-titles":o.a,"main-input":c.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(14),i=s.n(a),n=s(48),o=s.n(n),r=s(258),c=s.n(r);e.default={components:{"status-bar":i.a,"main-titles":o.a,"visual-selector":c.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(257),i=s.n(a),n=s(21),o=s.n(n),r=s(47),c=s.n(r);e.default={name:"welcome",data:function(){return{msg:"Explore diverasas profissões com quem trabalha na área",email:"",password:""}},components:{"social-button":i.a,"main-button":o.a,"main-input":c.a},methods:{onSubmit:function(){var t={email:this.email,password:this.password};console.log(t),this.$store.dispatch("login",{email:t.email,password:t.password})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/logo.476e970.svg"},function(t,e,s){function a(t){s(224)}var i=s(2)(s(201),s(271),a,"data-v-18f9aaee",null);t.exports=i.exports},function(t,e,s){function a(t){s(235)}var i=s(2)(s(206),s(282),a,"data-v-80a92708",null);t.exports=i.exports},function(t,e,s){function a(t){s(230)}var i=s(2)(s(209),s(277),a,"data-v-63a4eea2",null);t.exports=i.exports},function(t,e,s){function a(t){s(233)}var i=s(2)(s(211),s(280),a,"data-v-76e1d222",null);t.exports=i.exports},function(t,e,s){function a(t){s(241)}var i=s(2)(s(212),s(288),a,"data-v-c4c55ade",null);t.exports=i.exports},function(t,e,s){function a(t){s(227)}var i=s(2)(s(213),s(274),a,"data-v-37a88886",null);t.exports=i.exports},function(t,e,s){function a(t){s(225)}var i=s(2)(s(214),s(272),a,"data-v-326df331",null);t.exports=i.exports},function(t,e,s){function a(t){s(239)}var i=s(2)(s(215),s(286),a,"data-v-af7f7bea",null);t.exports=i.exports},function(t,e,s){function a(t){s(234)}var i=s(2)(s(216),s(281),a,"data-v-781d49e8",null);t.exports=i.exports},function(t,e,s){function a(t){s(244)}var i=s(2)(s(217),s(291),a,"data-v-fe5a2852",null);t.exports=i.exports},function(t,e,s){function a(t){s(231)}var i=s(2)(s(218),s(278),a,"data-v-67d30078",null);t.exports=i.exports},function(t,e,s){function a(t){s(237)}var i=s(2)(s(219),s(284),a,"data-v-93ec4bc0",null);t.exports=i.exports},function(t,e,s){function a(t){s(236)}var i=s(2)(s(220),s(283),a,"data-v-90738f62",null);t.exports=i.exports},function(t,e,s){function a(t){s(222)}var i=s(2)(s(221),s(269),a,"data-v-0c973490",null);t.exports=i.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"welcome"},[a("div",{staticClass:"presentation-holder"},[a("img",{staticClass:"logo-symbol",attrs:{src:s(254),alt:"Profil Logo"}}),t._v(" "),a("h1",{staticClass:"title"},[t._v(t._s(t.msg))])]),t._v(" "),a("div",{staticClass:"btn-holder"},[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("social-button",{attrs:{textInner:"Entrar com o Linkedin",design:"login"}}),t._v(" "),a("main-input",{attrs:{type:"email",placeholder:"Email",design:"login"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("main-input",{attrs:{type:"password",placeholder:"Senha",design:"login"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("div",{staticClass:"login-holder"},[a("router-link",{staticClass:"link",attrs:{to:"/cadastro"}},[t._v("\n\t\t\t\t\tCriar cadastro\n\t\t\t\t")]),t._v(" "),a("button",{staticClass:"submit-button",on:{click:t.onSubmit}},[t._v("\n\t\t\t\t\tEntrar\n\t\t\t\t")])],1)],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"titles",class:t.titlesStyle},[s("h2",{staticClass:"titles__title"},[t._v("\n\t\t"+t._s(t.titleText)+"\n\t")]),t._v(" "),s("h3",{staticClass:"titles__subtitle"},[t._v("\n\t\t"+t._s(t.subtitleText)+"\n\t")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"header"},[s("button",{staticClass:"nav-button",on:{click:t.showMenu}},[s("span",{staticClass:"nav-icon"},[t._v("☰")])]),t._v(" "),s("span",{staticClass:"logo"},[t._v("Profil")])]),t._v(" "),s("nav",{staticClass:"nav"},[s("ul",{staticClass:"nav-list"},[s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:"/Home"},nativeOn:{click:function(e){t.hideMenu(e)}}},[t._v("Home")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:"/camera"},nativeOn:{click:function(e){t.hideMenu(e)}}},[t._v("Post a picture")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:"/"},nativeOn:{click:function(e){t.hideMenu(e)}}},[t._v("Login")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:"/register"},nativeOn:{click:function(e){t.hideMenu(e)}}},[t._v("Cadastro")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"nav-link",attrs:{to:"/profession"},nativeOn:{click:function(e){t.hideMenu(e)}}},[t._v("Profession")])],1)]),t._v(" "),s("div",{staticClass:"ofuscator",on:{click:t.hideMenu}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feedback-view"},[t._m(0),t._v(" "),s("div",{staticClass:"feedback-info"},[s("h2",{staticClass:"feedback-title"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),t._v(" "),s("p",{staticClass:"feedback-text"},[t._v("\n\t\t\t"+t._s(t.text)+"\n\t\t")])]),t._v(" "),s("main-button",{attrs:{buttonType:"router","text-inner":"Primeiro post",linkto:"/post"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feedback-img"},[s("img",{attrs:{src:"/"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-resume"},[s("div",{staticClass:"img-holder"},[s("img",{attrs:{src:t.image}})]),t._v(" "),s("div",{staticClass:"info-holder"},[s("p",{staticClass:"profession"},[t._v(t._s(t.profession))]),t._v(" "),s("p",{staticClass:"nickname"},[t._v(t._s(t.nickname))]),t._v(" "),s("p",{staticClass:"username"},[t._v(t._s(t.username))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-view"},[s("status-bar",{attrs:{link:"/home",title:"Home"}}),t._v(" "),s("div",{staticClass:"picture"},[s("img",{attrs:{src:t.card.url}})]),t._v(" "),s("div",{staticClass:"info"},[s("span",[t._v(t._s(t.card.info))])]),t._v(" "),s("div",{staticClass:"comment"},[s("span",[t._v(t._s(t.card.comment))])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.preloading?s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("pre-loading")],1):s("div",t._l(this.getCards(),function(e){return s("div",{staticClass:"card"},[s("ul",{staticClass:"hashtags-list"},t._l(t.hashtags,function(e){return s("li",{staticClass:"hash"},[t._v(t._s(e.hash))])})),t._v(" "),s("div",{staticClass:"card-picture",on:{click:function(s){t.displayDetails(e[".key"])}}},[s("img",{attrs:{src:e.url}})]),t._v(" "),s("div",{staticClass:"card-comment"},[s("span",[t._v(t._s(e.comment))])]),t._v(" "),s("div",{staticClass:"card-info"},["true"===t.resume?s("profile-resume",{attrs:{image:e.url,nickname:"Nayara Hilton",username:"@nayarahilton",profession:"#Profissão"},nativeOn:{click:function(s){t.goToProfile(e[".key"])}}}):t._e(),t._v(" "),s("post-reactions")],1),t._v(" "),t._m(0,!0)])}))},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-reading-time"},[s("span",[t._v("leitura: 13 minutos")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider"},[s("ul",{staticClass:"slider_list"},t._l(t.items,function(e){return s("li",{staticClass:"slider_list-item"},[t._m(0,!0),t._v(" "),s("p",{staticClass:"slider_text"},[t._v(t._s(e.text))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider_img-holder"},[s("img",{staticClass:"slider_img",attrs:{src:"http://nosrc.fbiz.com.br/640x480/ddd/777"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"social-btn",class:t.socialbtnStyle,attrs:{href:"#"}},[s("span",[t._v(t._s(t.textInner))]),t._v(" "),s("div",{staticClass:"icon"},[s("svg")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-aprendiz"},[s("status-bar",{attrs:{link:"/cadastro",title:"Cadastro"}}),t._v(" "),s("main",{staticClass:"register-main"},[s("main-titles",{attrs:{"title-text":"Seus dados","subtitle-text":"Todos os campos são obrigatórios"}}),t._v(" "),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("main-input",{attrs:{type:"text",name:"username",id:"username",placeholder:"Nome de usuário"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("main-input",{attrs:{type:"text",name:"name",id:"name",placeholder:"Nome"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),s("main-input",{attrs:{type:"email",name:"email",id:"email",placeholder:"E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("main-input",{attrs:{type:"password",name:"password",id:"password",placeholder:"Senha"},on:{blur:function(e){t.$v.password.$touch()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("main-button",{attrs:{"button-type":"router",linkto:"/cadastro/aprendiz/sucesso","text-inner":"Próximo"}}),t._v(" "),s("button",{staticClass:"submit-button",on:{click:t.onSubmit}},[t._v("\n\t\t\t\tEntrar\n\t\t\t")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[s("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"visual-selectors"},t._l(t.options,function(e){return s("router-link",{key:e.id,staticClass:"visual-selector",attrs:{to:e.link}},[t._v("\n\t\t"+t._s(e.title)+"\n\t\t"),s("img",{attrs:{src:e.src}}),t._v(" "),s("span",[t._v("\n\t\t\t"+t._s(e.text)+"\n\t\t")])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profession"},[s("status-bar",{attrs:{link:"/home",title:"Home"}}),t._v(" "),s("slider-items"),t._v(" "),s("div",{staticClass:"profession_resume"},[t._m(0),t._v(" "),s("h1",{staticClass:"profession_name"},[t._v("Design Digital")]),t._v(" "),s("div",{staticClass:"profession_follow-holder"},[t._m(1),t._v(" "),s("main-button",{attrs:{"text-inner":"seguir"}})],1)]),t._v(" "),s("div",{staticClass:"profession_features"},[s("ul",{staticClass:"profession_features-list"},t._l(t.items,function(e){return s("li",{staticClass:"profession_features-item"},[t._m(2,!0),t._v(" "),s("p",{staticClass:"profession_features_text"},[t._v(t._s(e.text))])])}))]),t._v(" "),s("div",{staticClass:"profession_info-slider"},[s("h2",{staticClass:"profession_info-slider_title"},[t._v("O que é Design Digital?")]),t._v(" "),s("ul",{staticClass:"profession_info-slider_list"},[s("li",{staticClass:"profession_info-slider_item -text"},[s("profile-resume",{attrs:{image:"http://nosrc.fbiz.com.br/640x480/ddd/777",nickname:"Nayara Hilton",username:"@nayarahilton"},nativeOn:{click:function(e){t.goToProfile(t.picture[".key"])}}}),t._v(" "),s("strong",{staticClass:"profession_info-slider_text"},[t._v("Uma mistura de muita coisa")]),t._v(" "),s("p",{staticClass:"profession_info-slider_text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni ea odit consectetur voluptatibus illum cumque voluptate cupiditate quod nisi, ab, quasi quos praesentium aliquam fugit rerum dolor beatae vero.")]),t._v(" "),s("post-reactions")],1),t._v(" "),s("li",{staticClass:"profession_info-slider_item -text"},[s("profile-resume",{attrs:{image:"http://nosrc.fbiz.com.br/640x480/ddd/777",nickname:"Nayara Hilton",username:"@nayarahilton",profession:"#Profissão"},nativeOn:{click:function(e){t.goToProfile(t.picture[".key"])}}}),t._v(" "),s("strong",{staticClass:"profession_info-slider_text"},[t._v("Uma mistura de muita coisa")]),t._v(" "),s("p",{staticClass:"profession_info-slider_text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni ea odit consectetur voluptatibus illum cumque voluptate cupiditate quod nisi, ab, quasi quos praesentium aliquam fugit rerum dolor beatae vero.")]),t._v(" "),s("post-reactions")],1)])]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"profession_faq"},[s("h2",{staticClass:"profession_faq_title"},[t._v("Principais Dúvidas")]),t._v(" "),s("ul",{staticClass:"profession_info-slider_list"},[s("li",{staticClass:"profession_info-slider_item -text"},[t._m(4),t._v(" "),s("div",{staticClass:"profession_faq_answer"},[s("profile-resume",{attrs:{image:"http://nosrc.fbiz.com.br/640x480/ddd/777",nickname:"Nayara Hilton",username:"@nayarahilton"},nativeOn:{click:function(e){t.goToProfile(t.picture[".key"])}}}),t._v(" "),s("strong",{staticClass:"profession_info-slider_text"},[t._v("Uma mistura de muita coisa")]),t._v(" "),s("p",{staticClass:"profession_info-slider_text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni ea odit consectetur voluptatibus illum cumque voluptate cupiditate quod nisi, ab, quasi quos praesentium aliquam fugit rerum dolor beatae vero.")]),t._v(" "),s("post-reactions")],1)]),t._v(" "),s("li",{staticClass:"profession_info-slider_item -text"},[t._m(5),t._v(" "),s("div",{staticClass:"profession_faq_answer"},[s("profile-resume",{attrs:{image:"http://nosrc.fbiz.com.br/640x480/ddd/777",nickname:"Nayara Hilton",username:"@nayarahilton"},nativeOn:{click:function(e){t.goToProfile(t.picture[".key"])}}}),t._v(" "),s("strong",{staticClass:"profession_info-slider_text"},[t._v("Uma mistura de muita coisa")]),t._v(" "),s("p",{staticClass:"profession_info-slider_text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni ea odit consectetur voluptatibus illum cumque voluptate cupiditate quod nisi, ab, quasi quos praesentium aliquam fugit rerum dolor beatae vero.")]),t._v(" "),s("post-reactions")],1)])])]),t._v(" "),s("post-card",{attrs:{resume:"true"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profession_img-holder"},[s("img",{staticClass:"profession_img",attrs:{src:"http://nosrc.fbiz.com.br/640x480/ddd/777",alt:""}}),t._v(" "),s("p",{staticClass:"profession_img-strip"},[t._v("#funcionáriodomês")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profession_followers"},[s("strong",[t._v("1234")]),t._v(" seguidores")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profession_features_img-holder"},[s("img",{staticClass:"profession_features_img",attrs:{src:"http://nosrc.fbiz.com.br/640x480/ddd/777"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profession_info-slider"},[s("h2",{staticClass:"profession_info-slider_title"},[t._v("Média Salarial por tempo de profissão")]),t._v(" "),s("ul",{staticClass:"profession_info-slider_list"},[s("li",{staticClass:"profession_info-slider_item"},[s("strong",{staticClass:"profession_info-slider_text"},[t._v("Até 2 anos")]),t._v(" "),s("p",{staticClass:"profession_info-slider_salary"},[t._v("R$ 2.000,00")])]),t._v(" "),s("li",{staticClass:"profession_info-slider_item"},[s("strong",{staticClass:"profession_info-slider_text"},[t._v("Até 5 anos")]),t._v(" "),s("p",{staticClass:"profession_info-slider_salary"},[t._v("R$ 5.000,00")])]),t._v(" "),s("li",{staticClass:"profession_info-slider_item"},[s("strong",{staticClass:"profession_info-slider_text"},[t._v("Até 8 anos")]),t._v(" "),s("p",{staticClass:"profession_info-slider_salary"},[t._v("R$ 8.000,00")])]),t._v(" "),s("li",{staticClass:"profession_info-slider_item"},[s("strong",{staticClass:"profession_info-slider_text"},[t._v("Mais de 10 anos")]),t._v(" "),s("p",{staticClass:"profession_info-slider_salary"},[t._v("R$ 15.000,00")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profession_faq_question"},[s("p",[t._v("Lorem ipsum dolor sit amet aliqua?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profession_faq_question"},[s("p",[t._v("Lorem ipsum dolor sit amet aliqua?")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading-holder"},[s("div",{staticClass:"loading"},[s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"square"}),t._v(" "),s("div",{staticClass:"simple-loading"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("status-bar",{attrs:{link:"/",title:"Cadastro"}}),t._v(" "),s("main",{staticClass:"register-main"},[s("main-titles",{attrs:{"title-text":"Como você se identifica?","subtitle-text":"Escolha abaixo o tipo de perfil que você se encaixa."}}),t._v(" "),s("visual-selector")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-guru"},[s("status-bar",{attrs:{link:"/cadastro",title:"Cadastro"}}),t._v(" "),s("main",{staticClass:"register-main"},[s("main-titles",{attrs:{"title-text":"Seus dados","subtitle-text":"Todos os campos são obrigatórios"}}),t._v(" "),s("main-input",{attrs:{type:"text",name:"user",id:"user",placeholder:"Nome de usuário",required:!0}}),t._v(" "),s("main-input",{attrs:{type:"text",name:"name",id:"name",placeholder:"Nome",required:!0}}),t._v(" "),s("main-input",{attrs:{type:"email",name:"email",id:"email",placeholder:"E-mail",required:!0}}),t._v(" "),s("main-input",{attrs:{type:"password",name:"password",id:"password",placeholder:"Senha",required:!0}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reactions"},[s("button",{staticClass:"save-button"}),t._v(" "),s("button",{staticClass:"like-button"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("main-header"),t._v(" "),s("slider-items"),t._v(" "),s("post-card",{attrs:{resume:"true"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"status-bar",attrs:{to:t.link}},[s("h1",{staticClass:"status-bar__title"},[t._v("\n\t\t<  "+t._s(t.title)+"\n\t")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post"},[s("status-bar",{attrs:{link:"/home",title:"Home"}}),t._v(" "),s("section",{staticClass:"post-section"},[s("div",{staticClass:"file-upload-form"},[s("input",{staticClass:"photo-upload-btn",attrs:{type:"file",id:"photo-upload",accept:"image/*"},on:{change:t.previewImage}}),t._v(" "),s("label",{attrs:{for:"photo-upload"}})]),t._v(" "),s("div",{staticClass:"image-preview"},[t.imageData.length>0?s("img",{staticClass:"image-preview__img",attrs:{src:t.imageData}}):t._e()]),t._v(" "),s("div",{staticClass:"content"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"textarea",attrs:{laceholder:"Escreva uma legenda"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("main-button",{attrs:{"text-inner":"Postar conteúdo"},nativeOn:{click:function(e){e.preventDefault(),t.post(e)}}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return"router"===t.buttonType?s("router-link",{staticClass:"main-btn",attrs:{to:t.linkto}},[t._v(t._s(t.textInner))]):s("a",{staticClass:"main-btn"},[t._v(t._s(t.textInner))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"input",class:t.inputStyle,attrs:{type:t.type,name:t.name,id:t.id,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.updateValue(e.target.value)}}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("status-bar",{attrs:{link:"/home",title:"Home"}}),t._v(" "),s("div",{staticClass:"profile-info"},[s("profile-resume",{attrs:{image:t.card.url,nickname:"Nayara Hilton",username:"@nayarahilton",profession:"#Profissão",linkto:"/profile"}}),t._v(" "),t._m(0),t._v(" "),t._m(1)],1),t._v(" "),s("post-card")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"status"},[s("span",{staticClass:"point"},[t._v(" 1000 moedas ")]),t._v(" "),s("span",{staticClass:"level"},[t._v(" Nível 2 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"follows"},[s("span",{staticClass:"followers"},[t._v("100 seguidores")]),t._v(" "),s("span",{staticClass:"following"},[t._v("53 seguindo")])])}]}},,,,,,,function(t,e){}],[196]);
//# sourceMappingURL=app.c02d4d9671832311da87.js.map