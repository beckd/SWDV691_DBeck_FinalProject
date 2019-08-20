(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{JLuJ:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var r=u("pMnS"),t=u("oBZk"),a=u("ZZ/e"),c=u("mrSG"),i=u("xdv0");class b{constructor(l,n,u){this.navCtrl=l,this.alertController=n,this.userService=u,this.gameName="Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!",this.chapter="Welcome Hungry Adventurer!",this.location="You find yourself in grave peril!",this.title="Beset by hunger you vow to claim the sandwich of destiny.",this.story="You begin your journey from Couchlandia, your home. You will journey through Dining Roomopolis and on to Kitchensburgh where the fated sandwich awaits!"}presentAlert(){return c.b(this,void 0,void 0,function*(){const l=yield this.alertController.create({header:"What's in a name?",subHeader:"Your Hunger Level (health) will start at 100, and you have 10 Pickle Chips (currency).",message:"Give us your name before embarking on your journey!",inputs:[{name:"name",type:"text",placeholder:"Hungry Adventurer",value:null},{name:"health",type:"number",disabled:!0,placeholder:"100 - Hunger Level",value:100},{name:"currency",type:"number",disabled:!0,placeholder:"10",value:10}],buttons:[{text:"Let's Go!",role:"ok",cssClass:"secondary",handler:l=>{this.userService.addUser(l).subscribe(l=>{console.log("new userrrr",l),this.userService.getUser(l._id).subscribe(l=>{console.log("Confirm ok",l),this.userService.user=l,this.navCtrl.navigateForward("page2")})})}}]});yield l.present()})}}var s=e.ob({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}ion-content.background[_ngcontent-%COMP%]{--background:url('john-westrock-PDfe7H5GJR0-unsplash.e619f756acb690e61079.jpg') 0 0/100% 100% no-repeat}"]],data:{}});function h(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,6,"ion-header",[],null,null,null,t.F,t.l)),e.pb(1,49152,null,0,a.z,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,4,"ion-toolbar",[],null,null,null,t.N,t.t)),e.pb(3,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,2,"ion-title",[],null,null,null,t.M,t.s)),e.pb(5,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(l()(),e.Eb(-1,0,[" Game Tab "])),(l()(),e.qb(7,0,null,null,40,"ion-content",[["class","background"]],null,null,null,t.B,t.h)),e.pb(8,49152,null,0,a.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(9,0,null,0,6,"ion-card",[["class","ion-text-center"],["color","primary"]],null,null,null,t.z,t.c)),e.pb(10,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(11,0,null,0,4,"ion-card-header",[],null,null,null,t.x,t.e)),e.pb(12,49152,null,0,a.m,[e.h,e.k,e.x],null,null),(l()(),e.qb(13,0,null,0,2,"ion-card-title",[],null,null,null,t.y,t.f)),e.pb(14,49152,null,0,a.o,[e.h,e.k,e.x],null,null),(l()(),e.Eb(15,0,["",""])),(l()(),e.qb(16,0,null,0,31,"ion-grid",[],null,null,null,t.E,t.k)),e.pb(17,49152,null,0,a.y,[e.h,e.k,e.x],null,null),(l()(),e.qb(18,0,null,0,29,"ion-row",[],null,null,null,t.I,t.o)),e.pb(19,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.qb(20,0,null,0,1,"ion-col",[],null,null,null,t.A,t.g)),e.pb(21,49152,null,0,a.r,[e.h,e.k,e.x],null,null),(l()(),e.qb(22,0,null,0,23,"ion-col",[],null,null,null,t.A,t.g)),e.pb(23,49152,null,0,a.r,[e.h,e.k,e.x],null,null),(l()(),e.qb(24,0,null,0,21,"ion-card",[["border-side-color","secondary"]],null,null,null,t.z,t.c)),e.pb(25,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.qb(26,0,null,0,4,"ion-card-header",[["color","primary"]],null,null,null,t.x,t.e)),e.pb(27,49152,null,0,a.m,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(28,0,null,0,2,"ion-card-title",[["class","cardHeader"]],null,null,null,t.y,t.f)),e.pb(29,49152,null,0,a.o,[e.h,e.k,e.x],null,null),(l()(),e.Eb(30,0,["",""])),(l()(),e.qb(31,0,null,0,0,"img",[["src","../../assets/img/sandwich-pic.jpg"]],null,null,null,null,null)),(l()(),e.qb(32,0,null,0,10,"ion-card-header",[["color","primary"]],null,null,null,t.x,t.e)),e.pb(33,49152,null,0,a.m,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(34,0,null,0,2,"ion-card-title",[["class","cardLocation"]],null,null,null,t.y,t.f)),e.pb(35,49152,null,0,a.o,[e.h,e.k,e.x],null,null),(l()(),e.Eb(36,0,["",""])),(l()(),e.qb(37,0,null,0,2,"ion-card-content",[["class","cardTitle"]],null,null,null,t.w,t.d)),e.pb(38,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.Eb(39,0,["",""])),(l()(),e.qb(40,0,null,0,2,"ion-card-content",[["class","cardContent"]],null,null,null,t.w,t.d)),e.pb(41,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.Eb(42,0,[" "," "])),(l()(),e.qb(43,0,null,0,2,"ion-button",[["color","success"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.presentAlert()&&e),e},t.v,t.b)),e.pb(44,49152,null,0,a.i,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Eb(-1,0,["Ready to Begin?"])),(l()(),e.qb(46,0,null,0,1,"ion-col",[],null,null,null,t.A,t.g)),e.pb(47,49152,null,0,a.r,[e.h,e.k,e.x],null,null)],function(l,n){l(n,10,0,"primary"),l(n,27,0,"primary"),l(n,33,0,"primary"),l(n,44,0,"success","block")},function(l,n){var u=n.component;l(n,15,0,u.gameName),l(n,30,0,u.chapter),l(n,36,0,u.location),l(n,39,0,u.title),l(n,42,0,u.story)})}function d(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-tab1",[],null,null,null,h,s)),e.pb(1,49152,null,0,b,[a.Eb,a.a,i.a],null,null)],null,null)}var p=e.mb("app-tab1",b,d,{},{},[]),g=u("SVse"),m=u("s7LF"),y=u("iInd");u.d(n,"Tab1PageModuleNgFactory",function(){return k});var k=e.nb(o,[],function(l){return e.yb([e.zb(512,e.j,e.Y,[[8,[r.a,p]],[3,e.j],e.v]),e.zb(4608,g.j,g.i,[e.s,[2,g.p]]),e.zb(4608,a.b,a.b,[e.x,e.g]),e.zb(4608,a.Db,a.Db,[a.b,e.j,e.p]),e.zb(4608,a.Gb,a.Gb,[a.b,e.j,e.p]),e.zb(4608,m.c,m.c,[]),e.zb(1073742336,g.b,g.b,[]),e.zb(1073742336,a.Bb,a.Bb,[]),e.zb(1073742336,m.b,m.b,[]),e.zb(1073742336,m.a,m.a,[]),e.zb(1073742336,y.n,y.n,[[2,y.s],[2,y.m]]),e.zb(1073742336,o,o,[]),e.zb(1024,y.k,function(){return[[{path:"",component:b}]]},[])])})}}]);