(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{vasL:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),r=u("mrSG"),o=u("ZZ/e"),t=u("xdv0"),a=function(){function l(l,n,u){this.navCtrl=l,this.alertController=n,this.userService=u,this.gameName="Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!",this.chapter="This Adventure Has Come to an End.",this.location="Location: Sandwich Cave",this.title="You didn't have enough Pickle Chips to make a successful switch. The boulders were released and crushed you.",this.story="You started off so fully of hope, but have been left wanting ... a Sandwich. Try again!"}return l.prototype.ngOnInit=function(){this.user=this.userService.user},l.prototype.restartGame=function(){return r.b(this,void 0,void 0,function(){var l=this;return r.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Want to restart?",message:"Selecting OK will erase this game and send you back to the start of our story.",buttons:[{text:"Cancel",handler:function(){console.log("Confirm Cancel")}},{text:"Continue",role:"ok",cssClass:"secondary",handler:function(){console.log("This is the restart button confirmation"),l.userService.deleteUser(l.user.id).subscribe(function(n){console.log("Deleted user",n),l.navCtrl.navigateForward("tabs/tab1")})}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l}(),s=function(){return function(){}}(),c=u("pMnS"),i=u("oBZk"),b=e.qb({encapsulation:0,styles:[["ion-content.background[_ngcontent-%COMP%]{--background:url('john-westrock-PDfe7H5GJR0-unsplash.e619f756acb690e61079.jpg') 0 0/100% 100% no-repeat}"]],data:{}});function h(l){return e.Hb(0,[(l()(),e.sb(0,0,null,null,6,"ion-header",[],null,null,null,i.F,i.l)),e.rb(1,49152,null,0,o.z,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.N,i.t)),e.rb(3,49152,null,0,o.zb,[e.h,e.k,e.z],null,null),(l()(),e.sb(4,0,null,0,2,"ion-title",[],null,null,null,i.M,i.s)),e.rb(5,49152,null,0,o.xb,[e.h,e.k,e.z],null,null),(l()(),e.Gb(-1,0,[" Game Tab "])),(l()(),e.sb(7,0,null,null,49,"ion-content",[["class","background"]],null,null,null,i.B,i.h)),e.rb(8,49152,null,0,o.s,[e.h,e.k,e.z],null,null),(l()(),e.sb(9,0,null,0,6,"ion-card",[["class","ion-text-center"],["color","primary"]],null,null,null,i.z,i.c)),e.rb(10,49152,null,0,o.k,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.sb(11,0,null,0,4,"ion-card-header",[],null,null,null,i.x,i.e)),e.rb(12,49152,null,0,o.m,[e.h,e.k,e.z],null,null),(l()(),e.sb(13,0,null,0,2,"ion-card-title",[],null,null,null,i.y,i.f)),e.rb(14,49152,null,0,o.o,[e.h,e.k,e.z],null,null),(l()(),e.Gb(15,0,["",""])),(l()(),e.sb(16,0,null,0,34,"ion-grid",[],null,null,null,i.E,i.k)),e.rb(17,49152,null,0,o.y,[e.h,e.k,e.z],null,null),(l()(),e.sb(18,0,null,0,32,"ion-row",[],null,null,null,i.I,i.o)),e.rb(19,49152,null,0,o.gb,[e.h,e.k,e.z],null,null),(l()(),e.sb(20,0,null,0,1,"ion-col",[],null,null,null,i.A,i.g)),e.rb(21,49152,null,0,o.r,[e.h,e.k,e.z],null,null),(l()(),e.sb(22,0,null,0,26,"ion-col",[],null,null,null,i.A,i.g)),e.rb(23,49152,null,0,o.r,[e.h,e.k,e.z],null,null),(l()(),e.sb(24,0,null,0,24,"ion-card",[["border-side-color","secondary"]],null,null,null,i.z,i.c)),e.rb(25,49152,null,0,o.k,[e.h,e.k,e.z],null,null),(l()(),e.sb(26,0,null,0,4,"ion-card-header",[["color","primary"]],null,null,null,i.x,i.e)),e.rb(27,49152,null,0,o.m,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.sb(28,0,null,0,2,"ion-card-title",[["class","cardHeader"]],null,null,null,i.y,i.f)),e.rb(29,49152,null,0,o.o,[e.h,e.k,e.z],null,null),(l()(),e.Gb(30,0,["",""])),(l()(),e.sb(31,0,null,0,0,"img",[["src","../../assets/img/defeated.jpg"]],null,null,null,null,null)),(l()(),e.sb(32,0,null,0,13,"ion-card-header",[["color","primary"]],null,null,null,i.x,i.e)),e.rb(33,49152,null,0,o.m,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.sb(34,0,null,0,2,"ion-card-title",[["class","cardLocation"]],null,null,null,i.y,i.f)),e.rb(35,49152,null,0,o.o,[e.h,e.k,e.z],null,null),(l()(),e.Gb(36,0,["",""])),(l()(),e.sb(37,0,null,0,2,"ion-card-title",[],null,null,null,i.y,i.f)),e.rb(38,49152,null,0,o.o,[e.h,e.k,e.z],null,null),(l()(),e.Gb(39,0,["Hunger Level: "," -||- Pickle Chips: ",""])),(l()(),e.sb(40,0,null,0,2,"ion-card-content",[["class","cardTitle"]],null,null,null,i.w,i.d)),e.rb(41,49152,null,0,o.l,[e.h,e.k,e.z],null,null),(l()(),e.Gb(42,0,["",""])),(l()(),e.sb(43,0,null,0,2,"ion-card-content",[["class","cardContent"]],null,null,null,i.w,i.d)),e.rb(44,49152,null,0,o.l,[e.h,e.k,e.z],null,null),(l()(),e.Gb(45,0,[" "," "])),(l()(),e.sb(46,0,null,0,2,"ion-button",[["color","success"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.restartGame()&&e),e},i.v,i.b)),e.rb(47,49152,null,0,o.i,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Gb(-1,0,["Continue?"])),(l()(),e.sb(49,0,null,0,1,"ion-col",[],null,null,null,i.A,i.g)),e.rb(50,49152,null,0,o.r,[e.h,e.k,e.z],null,null),(l()(),e.sb(51,0,null,0,5,"ion-fab",[["horizontal","edge"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.D,i.i)),e.rb(52,49152,null,0,o.u,[e.h,e.k,e.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.sb(53,0,null,0,3,"ion-fab-button",[],null,null,null,i.C,i.j)),e.rb(54,49152,null,0,o.v,[e.h,e.k,e.z],null,null),(l()(),e.sb(55,0,null,0,1,"ion-icon",[["name","redo"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.restartGame()&&e),e},i.G,i.m)),e.rb(56,49152,null,0,o.A,[e.h,e.k,e.z],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"primary"),l(n,27,0,"primary"),l(n,33,0,"primary"),l(n,47,0,"success","block"),l(n,52,0,"edge","bottom"),l(n,56,0,"redo")},function(l,n){var u=n.component;l(n,15,0,u.gameName),l(n,30,0,u.chapter),l(n,36,0,u.location),l(n,39,0,u.user.health,u.user.currency),l(n,42,0,u.title),l(n,45,0,u.story)})}function d(l){return e.Hb(0,[(l()(),e.sb(0,0,null,null,1,"app-lose-final-stage",[],null,null,null,h,b)),e.rb(1,114688,null,0,a,[o.Eb,o.a,t.a],null,null)],function(l,n){l(n,1,0)},null)}var k=e.ob("app-lose-final-stage",a,d,{},{},[]),f=u("Ip0R"),p=u("gIcY"),g=u("ZYCi");u.d(n,"LoseFinalStagePageModuleNgFactory",function(){return m});var m=e.pb(s,[],function(l){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[c.a,k]],[3,e.j],e.x]),e.Bb(4608,f.j,f.i,[e.u,[2,f.p]]),e.Bb(4608,p.c,p.c,[]),e.Bb(4608,o.b,o.b,[e.z,e.g]),e.Bb(4608,o.Db,o.Db,[o.b,e.j,e.q]),e.Bb(4608,o.Gb,o.Gb,[o.b,e.j,e.q]),e.Bb(1073742336,f.b,f.b,[]),e.Bb(1073742336,p.b,p.b,[]),e.Bb(1073742336,p.a,p.a,[]),e.Bb(1073742336,o.Bb,o.Bb,[]),e.Bb(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),e.Bb(1073742336,s,s,[]),e.Bb(1024,g.k,function(){return[[{path:"",component:a}]]},[])])})}}]);