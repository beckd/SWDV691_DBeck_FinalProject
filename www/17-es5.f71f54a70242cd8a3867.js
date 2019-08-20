(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{QVHy:function(l,n,u){"use strict";u.r(n);var r=u("CcnG"),e=u("mrSG"),o=u("ZZ/e"),t=u("xdv0"),a=function(){function l(l,n,u){this.navCtrl=l,this.alertController=n,this.userService=u,this.gameName="Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!",this.chapter="This Adventure Has Come to an End.",this.title="What could lie ahead for our hero?",this.story="You started off so fully of hope, but have been left wanting ... a Sandwich. Try again!"}return l.prototype.ngOnInit=function(){this.user=this.userService.user},l.prototype.restartGame=function(){return e.b(this,void 0,void 0,function(){var l=this;return e.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Want to restart?",message:"Selecting OK will erase this game and send you back to the start of our story.",buttons:[{text:"Cancel",handler:function(){console.log("Confirm Cancel")}},{text:"Continue",role:"ok",cssClass:"secondary",handler:function(){console.log("This is the restart button confirmation"),l.userService.deleteUser(l.user.id).subscribe(function(n){console.log("Deleted user",n),l.navCtrl.navigateForward("tabs/tab1")})}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l}(),s=function(){return function(){}}(),c=u("pMnS"),i=u("oBZk"),b=r.qb({encapsulation:0,styles:[["ion-content.background[_ngcontent-%COMP%]{--background:url('john-westrock-PDfe7H5GJR0-unsplash.e619f756acb690e61079.jpg') 0 0/100% 100% no-repeat}"]],data:{}});function h(l){return r.Hb(0,[(l()(),r.sb(0,0,null,null,6,"ion-header",[],null,null,null,i.F,i.l)),r.rb(1,49152,null,0,o.z,[r.h,r.k,r.z],null,null),(l()(),r.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.N,i.t)),r.rb(3,49152,null,0,o.zb,[r.h,r.k,r.z],null,null),(l()(),r.sb(4,0,null,0,2,"ion-title",[],null,null,null,i.M,i.s)),r.rb(5,49152,null,0,o.xb,[r.h,r.k,r.z],null,null),(l()(),r.Gb(-1,0,[" Game Tab "])),(l()(),r.sb(7,0,null,null,46,"ion-content",[["class","background"]],null,null,null,i.B,i.h)),r.rb(8,49152,null,0,o.s,[r.h,r.k,r.z],null,null),(l()(),r.sb(9,0,null,0,6,"ion-card",[["class","ion-text-center"],["color","primary"]],null,null,null,i.z,i.c)),r.rb(10,49152,null,0,o.k,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.sb(11,0,null,0,4,"ion-card-header",[],null,null,null,i.x,i.e)),r.rb(12,49152,null,0,o.m,[r.h,r.k,r.z],null,null),(l()(),r.sb(13,0,null,0,2,"ion-card-title",[],null,null,null,i.y,i.f)),r.rb(14,49152,null,0,o.o,[r.h,r.k,r.z],null,null),(l()(),r.Gb(15,0,["",""])),(l()(),r.sb(16,0,null,0,31,"ion-grid",[],null,null,null,i.E,i.k)),r.rb(17,49152,null,0,o.y,[r.h,r.k,r.z],null,null),(l()(),r.sb(18,0,null,0,29,"ion-row",[],null,null,null,i.I,i.o)),r.rb(19,49152,null,0,o.gb,[r.h,r.k,r.z],null,null),(l()(),r.sb(20,0,null,0,1,"ion-col",[],null,null,null,i.A,i.g)),r.rb(21,49152,null,0,o.r,[r.h,r.k,r.z],null,null),(l()(),r.sb(22,0,null,0,23,"ion-col",[],null,null,null,i.A,i.g)),r.rb(23,49152,null,0,o.r,[r.h,r.k,r.z],null,null),(l()(),r.sb(24,0,null,0,21,"ion-card",[["border-side-color","secondary"]],null,null,null,i.z,i.c)),r.rb(25,49152,null,0,o.k,[r.h,r.k,r.z],null,null),(l()(),r.sb(26,0,null,0,4,"ion-card-header",[["color","primary"]],null,null,null,i.x,i.e)),r.rb(27,49152,null,0,o.m,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.sb(28,0,null,0,2,"ion-card-title",[["class","cardHeader"]],null,null,null,i.y,i.f)),r.rb(29,49152,null,0,o.o,[r.h,r.k,r.z],null,null),(l()(),r.Gb(30,0,["",""])),(l()(),r.sb(31,0,null,0,0,"img",[["src","../../assets/img/defeated.jpg"]],null,null,null,null,null)),(l()(),r.sb(32,0,null,0,10,"ion-card-header",[["color","primary"]],null,null,null,i.x,i.e)),r.rb(33,49152,null,0,o.m,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.sb(34,0,null,0,2,"ion-card-title",[],null,null,null,i.y,i.f)),r.rb(35,49152,null,0,o.o,[r.h,r.k,r.z],null,null),(l()(),r.Gb(36,0,["Hunger Level: "," -||- Pickle Chips: ",""])),(l()(),r.sb(37,0,null,0,2,"ion-card-content",[["class","cardTitle"]],null,null,null,i.w,i.d)),r.rb(38,49152,null,0,o.l,[r.h,r.k,r.z],null,null),(l()(),r.Gb(39,0,["",""])),(l()(),r.sb(40,0,null,0,2,"ion-card-content",[["class","cardContent"]],null,null,null,i.w,i.d)),r.rb(41,49152,null,0,o.l,[r.h,r.k,r.z],null,null),(l()(),r.Gb(42,0,[" "," "])),(l()(),r.sb(43,0,null,0,2,"ion-button",[["color","success"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var r=!0;return"click"===n&&(r=!1!==l.component.restartGame()&&r),r},i.v,i.b)),r.rb(44,49152,null,0,o.i,[r.h,r.k,r.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),r.Gb(-1,0,["Continue?"])),(l()(),r.sb(46,0,null,0,1,"ion-col",[],null,null,null,i.A,i.g)),r.rb(47,49152,null,0,o.r,[r.h,r.k,r.z],null,null),(l()(),r.sb(48,0,null,0,5,"ion-fab",[["horizontal","edge"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.D,i.i)),r.rb(49,49152,null,0,o.u,[r.h,r.k,r.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),r.sb(50,0,null,0,3,"ion-fab-button",[],null,null,null,i.C,i.j)),r.rb(51,49152,null,0,o.v,[r.h,r.k,r.z],null,null),(l()(),r.sb(52,0,null,0,1,"ion-icon",[["name","redo"]],null,[[null,"click"]],function(l,n,u){var r=!0;return"click"===n&&(r=!1!==l.component.restartGame()&&r),r},i.G,i.m)),r.rb(53,49152,null,0,o.A,[r.h,r.k,r.z],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"primary"),l(n,27,0,"primary"),l(n,33,0,"primary"),l(n,44,0,"success","block"),l(n,49,0,"edge","bottom"),l(n,53,0,"redo")},function(l,n){var u=n.component;l(n,15,0,u.gameName),l(n,30,0,u.chapter),l(n,36,0,u.user.health,u.user.currency),l(n,39,0,u.title),l(n,42,0,u.story)})}function d(l){return r.Hb(0,[(l()(),r.sb(0,0,null,null,1,"app-lose",[],null,null,null,h,b)),r.rb(1,114688,null,0,a,[o.Eb,o.a,t.a],null,null)],function(l,n){l(n,1,0)},null)}var k=r.ob("app-lose",a,d,{},{},[]),f=u("Ip0R"),p=u("gIcY"),m=u("ZYCi");u.d(n,"LosePageModuleNgFactory",function(){return g});var g=r.pb(s,[],function(l){return r.Ab([r.Bb(512,r.j,r.ab,[[8,[c.a,k]],[3,r.j],r.x]),r.Bb(4608,f.j,f.i,[r.u,[2,f.p]]),r.Bb(4608,p.c,p.c,[]),r.Bb(4608,o.b,o.b,[r.z,r.g]),r.Bb(4608,o.Db,o.Db,[o.b,r.j,r.q]),r.Bb(4608,o.Gb,o.Gb,[o.b,r.j,r.q]),r.Bb(1073742336,f.b,f.b,[]),r.Bb(1073742336,p.b,p.b,[]),r.Bb(1073742336,p.a,p.a,[]),r.Bb(1073742336,o.Bb,o.Bb,[]),r.Bb(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),r.Bb(1073742336,s,s,[]),r.Bb(1024,m.k,function(){return[[{path:"",component:a}]]},[])])})}}]);