(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{zcT7:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=u("mrSG"),r=u("ZZ/e"),t=u("xdv0"),i=u("jXRf"),c=u("gZBb"),s=function(){function l(l,n,u,e,o){this.villainService=l,this.navCtrl=n,this.alertController=u,this.userService=e,this.storyService=o,this.gameName="Bread Knight: Journey for the Sandwich of Destiny - A Text Based Adventure!",this.chapter="Ch. 2-3: It's a Trap!",this.location="Location: Dining Roomopolis",this.title="At long last you've reach the outer limits of Dining Roomopolis. The skyline of Kitchensburgh is just peeking out of the clouds in the distance.",this.story="Everything is peaceful, everything is serene, you feel in control of your destiny. When suddenly... "}return l.prototype.ngOnInit=function(){this.user=this.userService.user},l.prototype.villain2=function(l){this.villainService.villain_2_Story1(l)},l.prototype.restartGame=function(){return o.b(this,void 0,void 0,function(){var l=this;return o.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Want to restart?",message:"Selecting OK will erase this game and send you back to the start of our story.",buttons:[{text:"Cancel",handler:function(l){console.log("Confirm Cancel")}},{text:"Continue",role:"ok",cssClass:"secondary",handler:function(n){console.log("This is the restart button confirmation"),l.userService.deleteUser(l.user.id).subscribe(function(n){console.log("Deleted user",n),l.navCtrl.navigateForward("tabs/tab1")})}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l}(),a=function(){return function(){}}(),b=u("pMnS"),h=u("oBZk"),d=u("Ip0R"),p=e.qb({encapsulation:0,styles:[["ion-content.background[_ngcontent-%COMP%]{--background:url('john-westrock-PDfe7H5GJR0-unsplash.e619f756acb690e61079.jpg') 0 0/100% 100% no-repeat}"]],data:{}});function f(l){return e.Hb(0,[(l()(),e.sb(0,0,null,null,2,"ion-card-title",[],null,null,null,h.y,h.f)),e.rb(1,49152,null,0,r.o,[e.h,e.k,e.z],null,null),(l()(),e.Gb(2,0,["Hunger Level: "," -||- Pickle Chips: ",""]))],null,function(l,n){var u=n.component;l(n,2,0,u.user.health,u.user.currency)})}function k(l){return e.Hb(0,[(l()(),e.sb(0,0,null,null,6,"ion-header",[],null,null,null,h.F,h.l)),e.rb(1,49152,null,0,r.z,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,h.N,h.t)),e.rb(3,49152,null,0,r.zb,[e.h,e.k,e.z],null,null),(l()(),e.sb(4,0,null,0,2,"ion-title",[],null,null,null,h.M,h.s)),e.rb(5,49152,null,0,r.xb,[e.h,e.k,e.z],null,null),(l()(),e.Gb(-1,0,[" Game Tab "])),(l()(),e.sb(7,0,null,null,48,"ion-content",[["class","background"]],null,null,null,h.B,h.h)),e.rb(8,49152,null,0,r.s,[e.h,e.k,e.z],null,null),(l()(),e.sb(9,0,null,0,6,"ion-card",[["class","ion-text-center"],["color","primary"]],null,null,null,h.z,h.c)),e.rb(10,49152,null,0,r.k,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.sb(11,0,null,0,4,"ion-card-header",[],null,null,null,h.x,h.e)),e.rb(12,49152,null,0,r.m,[e.h,e.k,e.z],null,null),(l()(),e.sb(13,0,null,0,2,"ion-card-title",[],null,null,null,h.y,h.f)),e.rb(14,49152,null,0,r.o,[e.h,e.k,e.z],null,null),(l()(),e.Gb(15,0,["",""])),(l()(),e.sb(16,0,null,0,33,"ion-grid",[],null,null,null,h.E,h.k)),e.rb(17,49152,null,0,r.y,[e.h,e.k,e.z],null,null),(l()(),e.sb(18,0,null,0,31,"ion-row",[],null,null,null,h.I,h.o)),e.rb(19,49152,null,0,r.gb,[e.h,e.k,e.z],null,null),(l()(),e.sb(20,0,null,0,1,"ion-col",[],null,null,null,h.A,h.g)),e.rb(21,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(l()(),e.sb(22,0,null,0,25,"ion-col",[],null,null,null,h.A,h.g)),e.rb(23,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(l()(),e.sb(24,0,null,0,23,"ion-card",[["border-side-color","secondary"]],null,null,null,h.z,h.c)),e.rb(25,49152,null,0,r.k,[e.h,e.k,e.z],null,null),(l()(),e.sb(26,0,null,0,4,"ion-card-header",[["color","primary"]],null,null,null,h.x,h.e)),e.rb(27,49152,null,0,r.m,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.sb(28,0,null,0,2,"ion-card-title",[["class","cardHeader"]],null,null,null,h.y,h.f)),e.rb(29,49152,null,0,r.o,[e.h,e.k,e.z],null,null),(l()(),e.Gb(30,0,["",""])),(l()(),e.sb(31,0,null,0,0,"img",[["src","../../assets/img/imp-in-woods.jpg"]],null,null,null,null,null)),(l()(),e.sb(32,0,null,0,12,"ion-card-header",[["color","primary"]],null,null,null,h.x,h.e)),e.rb(33,49152,null,0,r.m,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.sb(34,0,null,0,2,"ion-card-title",[["class","cardLocation"]],null,null,null,h.y,h.f)),e.rb(35,49152,null,0,r.o,[e.h,e.k,e.z],null,null),(l()(),e.Gb(36,0,["",""])),(l()(),e.hb(16777216,null,0,1,null,f)),e.rb(38,16384,null,0,d.h,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(39,0,null,0,2,"ion-card-content",[["class","cardTitle"]],null,null,null,h.w,h.d)),e.rb(40,49152,null,0,r.l,[e.h,e.k,e.z],null,null),(l()(),e.Gb(41,0,["",""])),(l()(),e.sb(42,0,null,0,2,"ion-card-content",[["class","cardContent"]],null,null,null,h.w,h.d)),e.rb(43,49152,null,0,r.l,[e.h,e.k,e.z],null,null),(l()(),e.Gb(44,0,[" "," "])),(l()(),e.sb(45,0,null,0,2,"ion-button",[["color","success"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.villain2(o.user)&&e),e},h.v,h.b)),e.rb(46,49152,null,0,r.i,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Gb(-1,0,["Continue? "])),(l()(),e.sb(48,0,null,0,1,"ion-col",[],null,null,null,h.A,h.g)),e.rb(49,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(l()(),e.sb(50,0,null,0,5,"ion-fab",[["horizontal","edge"],["slot","fixed"],["vertical","bottom"]],null,null,null,h.D,h.i)),e.rb(51,49152,null,0,r.u,[e.h,e.k,e.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.sb(52,0,null,0,3,"ion-fab-button",[],null,null,null,h.C,h.j)),e.rb(53,49152,null,0,r.v,[e.h,e.k,e.z],null,null),(l()(),e.sb(54,0,null,0,1,"ion-icon",[["name","redo"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.restartGame()&&e),e},h.G,h.m)),e.rb(55,49152,null,0,r.A,[e.h,e.k,e.z],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,10,0,"primary"),l(n,27,0,"primary"),l(n,33,0,"primary"),l(n,38,0,u.user),l(n,46,0,"success","block"),l(n,51,0,"edge","bottom"),l(n,55,0,"redo")},function(l,n){var u=n.component;l(n,15,0,u.gameName),l(n,30,0,u.chapter),l(n,36,0,u.location),l(n,41,0,u.title),l(n,44,0,u.story)})}function g(l){return e.Hb(0,[(l()(),e.sb(0,0,null,null,1,"app-page7",[],null,null,null,k,p)),e.rb(1,114688,null,0,s,[c.a,r.Eb,r.a,t.a,i.a],null,null)],function(l,n){l(n,1,0)},null)}var m=e.ob("app-page7",s,g,{},{},[]),v=u("gIcY"),y=u("ZYCi");u.d(n,"Page7PageModuleNgFactory",function(){return z});var z=e.pb(a,[],function(l){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[b.a,m]],[3,e.j],e.x]),e.Bb(4608,d.j,d.i,[e.u,[2,d.p]]),e.Bb(4608,v.c,v.c,[]),e.Bb(4608,r.b,r.b,[e.z,e.g]),e.Bb(4608,r.Db,r.Db,[r.b,e.j,e.q]),e.Bb(4608,r.Gb,r.Gb,[r.b,e.j,e.q]),e.Bb(1073742336,d.b,d.b,[]),e.Bb(1073742336,v.b,v.b,[]),e.Bb(1073742336,v.a,v.a,[]),e.Bb(1073742336,r.Bb,r.Bb,[]),e.Bb(1073742336,y.n,y.n,[[2,y.s],[2,y.m]]),e.Bb(1073742336,a,a,[]),e.Bb(1024,y.k,function(){return[[{path:"",component:s}]]},[])])})}}]);