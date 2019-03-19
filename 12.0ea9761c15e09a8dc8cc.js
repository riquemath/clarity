(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+hFT":function(l,n){l.exports='<form clrForm>\n  <clr-textarea-container>\n    <label>Description</label>\n    <textarea clrTextarea [(ngModel)]="description" name="description" required></textarea>\n  </clr-textarea-container>\n</form>'},"9KFU":function(l,n){l.exports='<form clrForm>\n  <textarea clrTextarea [(ngModel)]="description" name="description" required></textarea>\n</form>'},GwaA:function(l,n){l.exports='<form class="clr-form">\n  <div class="clr-control-container">\n    <textarea placeholder="Describe something" class="clr-textarea"></textarea>\n  </div>\n</form>'},Th1k:function(l,n){l.exports='<form class="clr-form">\n  <div class="clr-form-control">\n    <label for="textarea-basic-error" class="clr-control-label">Basic textarea, error</label>\n    <div class="clr-control-container clr-error">\n      <div class="clr-textarea-wrapper">\n        <textarea id="textarea-basic-error" placeholder="Enter value here" class="clr-textarea"></textarea>\n        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>\n      </div>\n      <span class="clr-subtext">Error message</span>\n    </div>\n  </div>\n</form>'},mQlp:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),r=function(){return function(){}}(),t=u("zl1X"),a=u("pMnS"),o=u("+Xo0"),i=u("0G9f"),c=u("ZYCi"),b=u("Ip0R"),s=u("xLE1"),d=u("gIcY"),p=u("QkwE"),g=u("vAyd"),m=u("mrSG"),h=u("N+3j"),f=u("GwaA"),y=u("ypQ+"),A=u("Th1k"),v=u("9KFU"),x=u("+hFT"),q=u("r/57"),C=function(l){function n(){var n=l.call(this,"textarea")||this;return n.exampleOne="",n.exampleTwo="",n.exampleThree="",n.uiBasic=f,n.uiFull=y,n.uiError=A,n.ngBasic=v,n.ngLabel=x,n.ngHelpers=q,n}return Object(m.c)(n,l),n}(h.a),I=e.ob({encapsulation:2,styles:[],data:{}});function F(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,236,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,o.b,o.a)),e.pb(1,49152,null,0,i.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.qb(2,0,null,0,234,"article",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,5,"h5",[["class","component-summary"],["id","summary"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Textareas are a popular form control for long form text input, and Clarity supports both a CSS only and Angular component. You may wish to review the general "])),(l()(),e.qb(5,0,null,null,2,"a",[["routerLink","../../../forms"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var r=!0;return"click"===n&&(r=!1!==e.Ab(l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&r),r},null,null)),e.pb(6,671744,null,0,c.o,[c.m,c.a,b.l],{routerLink:[0,"routerLink"]},null),(l()(),e.Ib(-1,null,["forms"])),(l()(),e.Ib(-1,null,[" documentation about form controls. "])),(l()(),e.qb(9,0,null,null,1,"h2",[["id","forms-code-samples"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Angular Textarea Component"])),(l()(),e.qb(11,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["If you are using Angular, the recommended approach is to always use the "])),(l()(),e.qb(13,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ClrTextarea"])),(l()(),e.Ib(-1,null,[" directive on your textareas to help manage the form control. By using "])),(l()(),e.qb(16,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ClrTextarea"])),(l()(),e.Ib(-1,null,[", you'll automatically be able to leverage built in validation, helper text, and layout features in forms."])),(l()(),e.qb(19,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Basic textarea"])),(l()(),e.qb(21,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["This is the most basic way to create a textarea inside of a form. This is only if you don't have a need for a label or validation. You need to add "])),(l()(),e.qb(23,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["clrTextarea"])),(l()(),e.Ib(-1,null,[" to your textarea to wire up the directive. Notice, it is not necessary to add "])),(l()(),e.qb(26,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['type="text"'])),(l()(),e.Ib(-1,null,[" as it is handled automatically. It will only work if you have the control wired up with either a template driven form or reactive form."])),(l()(),e.qb(29,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(30,0,null,null,15,"form",[["clrForm",""],["novalidate",""]],[[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var r=!0;return"submit"===n&&(r=!1!==e.Ab(l,35).onSubmit(u)&&r),"reset"===n&&(r=!1!==e.Ab(l,35).onReset()&&r),r},null,null)),e.Fb(512,null,s.Ee,s.Ee,[]),e.Fb(512,null,s.He,s.He,[]),e.pb(33,16384,null,0,s.bb,[s.Ee,s.He],null,null),e.pb(34,16384,null,0,d.B,[],null,null),e.pb(35,4210688,null,0,d.r,[[8,null],[8,null]],null,null),e.Fb(2048,null,d.d,null,[d.r]),e.pb(37,16384,null,0,d.q,[[4,d.d]],null,null),e.Fb(256,null,s.Ie,!0,[]),(l()(),e.qb(39,16777216,null,null,6,"textarea",[["clrTextarea",""],["name","description"]],[[2,"clr-textarea",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0,t=l.component;return"input"===n&&(r=!1!==e.Ab(l,40)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e.Ab(l,40).onTouched()&&r),"compositionstart"===n&&(r=!1!==e.Ab(l,40)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e.Ab(l,40)._compositionEnd(u.target.value)&&r),"blur"===n&&(r=!1!==e.Ab(l,44).triggerValidation()&&r),"ngModelChange"===n&&(r=!1!==(t.exampleOne=u)&&r),r},null,null)),e.pb(40,16384,null,0,d.e,[e.F,e.k,[2,d.a]],null,null),e.Fb(1024,null,d.n,function(l){return[l]},[d.e]),e.pb(42,671744,null,0,d.s,[[2,d.d],[8,null],[8,null],[6,d.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.o,null,[d.s]),e.pb(44,212992,null,0,s.gc,[e.Q,e.q,[6,d.o],e.F,e.k],null,null),e.pb(45,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e.qb(46,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(47,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),e.pb(48,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),e.qb(49,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Labels"])),(l()(),e.qb(51,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["For anything beyond a standalone textarea field, you'll need to wrap it with the "])),(l()(),e.qb(53,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ClrTextareaContainer"])),(l()(),e.Ib(-1,null,[" component. This is required to contain all of the logic and validation details for the individual textarea control."])),(l()(),e.qb(56,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Then you can add a "])),(l()(),e.qb(58,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["label"])),(l()(),e.Ib(-1,null,[" element and it will automatically get laid out correctly in the form."])),(l()(),e.qb(61,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(62,0,null,null,25,"form",[["clrForm",""],["novalidate",""]],[[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var r=!0;return"submit"===n&&(r=!1!==e.Ab(l,67).onSubmit(u)&&r),"reset"===n&&(r=!1!==e.Ab(l,67).onReset()&&r),r},null,null)),e.Fb(512,null,s.Ee,s.Ee,[]),e.Fb(512,null,s.He,s.He,[]),e.pb(65,16384,null,0,s.bb,[s.Ee,s.He],null,null),e.pb(66,16384,null,0,d.B,[],null,null),e.pb(67,4210688,null,0,d.r,[[8,null],[8,null]],null,null),e.Fb(2048,null,d.d,null,[d.r]),e.pb(69,16384,null,0,d.q,[[4,d.d]],null,null),e.Fb(256,null,s.Ie,!0,[]),(l()(),e.qb(71,0,null,null,16,"clr-textarea-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,t.ac,t.W)),e.Fb(512,null,s.Fe,s.Fe,[]),e.Fb(131584,null,s.Ge,s.Ge,[s.Fe]),e.Fb(512,null,s.Sc,s.Sc,[]),e.pb(75,180224,null,1,s.hc,[s.Ge,[2,s.Ee],s.Sc,s.Fe],null,null),e.Gb(335544320,1,{label:0}),e.Fb(512,null,s.De,s.De,[]),(l()(),e.qb(78,0,null,0,2,"label",[],[[1,"for",0]],null,null,null,null)),e.pb(79,212992,[[1,4]],0,s.ob,[[2,s.De],[2,s.Ee],[2,s.Fe],e.F,e.k],null,null),(l()(),e.Ib(-1,null,["Description"])),(l()(),e.qb(81,16777216,null,1,6,"textarea",[["clrTextarea",""],["name","description"]],[[2,"clr-textarea",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0,t=l.component;return"input"===n&&(r=!1!==e.Ab(l,82)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e.Ab(l,82).onTouched()&&r),"compositionstart"===n&&(r=!1!==e.Ab(l,82)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e.Ab(l,82)._compositionEnd(u.target.value)&&r),"blur"===n&&(r=!1!==e.Ab(l,86).triggerValidation()&&r),"ngModelChange"===n&&(r=!1!==(t.exampleTwo=u)&&r),r},null,null)),e.pb(82,16384,null,0,d.e,[e.F,e.k,[2,d.a]],null,null),e.Fb(1024,null,d.n,function(l){return[l]},[d.e]),e.pb(84,671744,null,0,d.s,[[2,d.d],[8,null],[8,null],[6,d.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.o,null,[d.s]),e.pb(86,212992,null,0,s.gc,[e.Q,e.q,[6,d.o],e.F,e.k],null,null),e.pb(87,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e.qb(88,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(89,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),e.pb(90,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),e.qb(91,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Helper and error messages"])),(l()(),e.qb(93,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The textarea form control wires up with the validations placed on it, such as "])),(l()(),e.qb(95,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["required"])),(l()(),e.Ib(-1,null,[" or even custom built validators in Angular. Under the hood, it looks at the "])),(l()(),e.qb(98,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["NgControl"])),(l()(),e.Ib(-1,null,[" values to determine the control validitity, and display the helper text or error message accordingly."])),(l()(),e.qb(101,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Note: the validation only displays an error after the user has left focus on a control. This is for better UX where the user doesn't see an error while they are still typing."])),(l()(),e.qb(103,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(104,0,null,null,33,"form",[["clrForm",""],["novalidate",""]],[[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var r=!0;return"submit"===n&&(r=!1!==e.Ab(l,109).onSubmit(u)&&r),"reset"===n&&(r=!1!==e.Ab(l,109).onReset()&&r),r},null,null)),e.Fb(512,null,s.Ee,s.Ee,[]),e.Fb(512,null,s.He,s.He,[]),e.pb(107,16384,null,0,s.bb,[s.Ee,s.He],null,null),e.pb(108,16384,null,0,d.B,[],null,null),e.pb(109,4210688,null,0,d.r,[[8,null],[8,null]],null,null),e.Fb(2048,null,d.d,null,[d.r]),e.pb(111,16384,null,0,d.q,[[4,d.d]],null,null),e.Fb(256,null,s.Ie,!0,[]),(l()(),e.qb(113,0,null,null,24,"clr-textarea-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,t.ac,t.W)),e.Fb(512,null,s.Fe,s.Fe,[]),e.Fb(131584,null,s.Ge,s.Ge,[s.Fe]),e.Fb(512,null,s.Sc,s.Sc,[]),e.pb(117,180224,null,1,s.hc,[s.Ge,[2,s.Ee],s.Sc,s.Fe],null,null),e.Gb(335544320,2,{label:0}),e.Fb(512,null,s.De,s.De,[]),(l()(),e.qb(120,0,null,0,2,"label",[],[[1,"for",0]],null,null,null,null)),e.pb(121,212992,[[2,4]],0,s.ob,[[2,s.De],[2,s.Ee],[2,s.Fe],e.F,e.k],null,null),(l()(),e.Ib(-1,null,["Label"])),(l()(),e.qb(123,16777216,null,1,8,"textarea",[["clrTextarea",""],["name","description"],["required",""]],[[1,"required",0],[2,"clr-textarea",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var r=!0,t=l.component;return"input"===n&&(r=!1!==e.Ab(l,126)._handleInput(u.target.value)&&r),"blur"===n&&(r=!1!==e.Ab(l,126).onTouched()&&r),"compositionstart"===n&&(r=!1!==e.Ab(l,126)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e.Ab(l,126)._compositionEnd(u.target.value)&&r),"blur"===n&&(r=!1!==e.Ab(l,130).triggerValidation()&&r),"ngModelChange"===n&&(r=!1!==(t.exampleThree=u)&&r),r},null,null)),e.pb(124,16384,null,0,d.w,[],{required:[0,"required"]},null),e.Fb(1024,null,d.m,function(l){return[l]},[d.w]),e.pb(126,16384,null,0,d.e,[e.F,e.k,[2,d.a]],null,null),e.Fb(1024,null,d.n,function(l){return[l]},[d.e]),e.pb(128,671744,null,0,d.s,[[2,d.d],[6,d.m],[8,null],[6,d.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.o,null,[d.s]),e.pb(130,212992,null,0,s.gc,[e.Q,e.q,[6,d.o],e.F,e.k],null,null),e.pb(131,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e.qb(132,0,null,2,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,t.vb,t.r)),e.pb(133,49152,null,0,s.u,[],null,null),(l()(),e.Ib(-1,0,["Helper text"])),(l()(),e.qb(135,0,null,3,2,"clr-control-error",[],[[2,"clr-subtext",null]],null,null,t.ub,t.q)),e.pb(136,49152,null,0,s.t,[],null,null),(l()(),e.Ib(-1,0,["You must provide a description!"])),(l()(),e.qb(138,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(139,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),e.pb(140,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),e.qb(141,0,null,null,1,"h2",[["id","css-component"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["CSS Input Component"])),(l()(),e.qb(143,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Inputs can be used without Angular, but without some of the automatic interactivity. If you intend to create your own components, here are the basic features you'll need to build out."])),(l()(),e.qb(145,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Basic input"])),(l()(),e.qb(147,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["It is possible to display the input by simply having the input as a standalone element not inside of a form. This may be useful in simple cases where you don't need a full form and just an inline input."])),(l()(),e.qb(149,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(150,0,null,null,6,"form",[["class","clr-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var r=!0;return"submit"===n&&(r=!1!==e.Ab(l,152).onSubmit(u)&&r),"reset"===n&&(r=!1!==e.Ab(l,152).onReset()&&r),r},null,null)),e.pb(151,16384,null,0,d.B,[],null,null),e.pb(152,4210688,null,0,d.r,[[8,null],[8,null]],null,null),e.Fb(2048,null,d.d,null,[d.r]),e.pb(154,16384,null,0,d.q,[[4,d.d]],null,null),(l()(),e.qb(155,0,null,null,1,"div",[["class","clr-control-container"]],null,null,null,null,null)),(l()(),e.qb(156,0,null,null,0,"textarea",[["class","clr-textarea"],["placeholder","Describe something"]],null,null,null,null,null)),(l()(),e.qb(157,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(158,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),e.pb(159,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),e.qb(160,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Full input display"])),(l()(),e.qb(162,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Each form control has a "])),(l()(),e.qb(164,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".clr-form-control"])),(l()(),e.Ib(-1,null,[" wrapper, as well as a specific DOM structure necessary to layout the form control as desired. This works with all layout options as well without needing to change the DOM structure in any way."])),(l()(),e.qb(167,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(168,0,null,null,15,"form",[["class","clr-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var r=!0;return"submit"===n&&(r=!1!==e.Ab(l,170).onSubmit(u)&&r),"reset"===n&&(r=!1!==e.Ab(l,170).onReset()&&r),r},null,null)),e.pb(169,16384,null,0,d.B,[],null,null),e.pb(170,4210688,null,0,d.r,[[8,null],[8,null]],null,null),e.Fb(2048,null,d.d,null,[d.r]),e.pb(172,16384,null,0,d.q,[[4,d.d]],null,null),(l()(),e.qb(173,0,null,null,10,"div",[["class","clr-form-control"]],null,null,null,null,null)),(l()(),e.qb(174,0,null,null,2,"label",[["class","clr-control-label"],["for","textarea-basic"]],[[1,"for",0]],null,null,null,null)),e.pb(175,212992,null,0,s.ob,[[2,s.De],[2,s.Ee],[2,s.Fe],e.F,e.k],{forAttr:[0,"forAttr"]},null),(l()(),e.Ib(-1,null,["Basic textarea"])),(l()(),e.qb(177,0,null,null,6,"div",[["class","clr-control-container"]],null,null,null,null,null)),(l()(),e.qb(178,0,null,null,3,"div",[["class","clr-textarea-wrapper"]],null,null,null,null,null)),(l()(),e.qb(179,0,null,null,0,"textarea",[["class","clr-textarea"],["id","textarea-basic"],["placeholder","Enter value here"]],null,null,null,null,null)),(l()(),e.qb(180,0,null,null,1,"clr-icon",[["class","clr-validate-icon"],["shape","exclamation-circle"]],null,null,null,null,null)),e.pb(181,16384,null,0,s.fb,[],null,null),(l()(),e.qb(182,0,null,null,1,"span",[["class","clr-subtext"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Helper Text"])),(l()(),e.qb(184,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(185,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),e.pb(186,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),e.qb(187,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Error state"])),(l()(),e.qb(189,0,null,null,16,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["To signify an error state, you need to add the "])),(l()(),e.qb(191,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".clr-error"])),(l()(),e.Ib(-1,null,[" class to the "])),(l()(),e.qb(194,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".clr-control-container"])),(l()(),e.Ib(-1,null,[" element. This will show the "])),(l()(),e.qb(197,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".clr-validate-icon"])),(l()(),e.Ib(-1,null,[" and turn the "])),(l()(),e.qb(200,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".clr-subtext"])),(l()(),e.Ib(-1,null,[" message to red. If you have helper text that needs to change to error content, you'll have to handle the hiding and showing of that content inside of the "])),(l()(),e.qb(203,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[".clr-subtext"])),(l()(),e.Ib(-1,null,[" element."])),(l()(),e.qb(206,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(207,0,null,null,15,"form",[["class","clr-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var r=!0;return"submit"===n&&(r=!1!==e.Ab(l,209).onSubmit(u)&&r),"reset"===n&&(r=!1!==e.Ab(l,209).onReset()&&r),r},null,null)),e.pb(208,16384,null,0,d.B,[],null,null),e.pb(209,4210688,null,0,d.r,[[8,null],[8,null]],null,null),e.Fb(2048,null,d.d,null,[d.r]),e.pb(211,16384,null,0,d.q,[[4,d.d]],null,null),(l()(),e.qb(212,0,null,null,10,"div",[["class","clr-form-control"]],null,null,null,null,null)),(l()(),e.qb(213,0,null,null,2,"label",[["class","clr-control-label"],["for","textarea-basic-error"]],[[1,"for",0]],null,null,null,null)),e.pb(214,212992,null,0,s.ob,[[2,s.De],[2,s.Ee],[2,s.Fe],e.F,e.k],{forAttr:[0,"forAttr"]},null),(l()(),e.Ib(-1,null,["Basic textarea, error"])),(l()(),e.qb(216,0,null,null,6,"div",[["class","clr-control-container clr-error"]],null,null,null,null,null)),(l()(),e.qb(217,0,null,null,3,"div",[["class","clr-textarea-wrapper"]],null,null,null,null,null)),(l()(),e.qb(218,0,null,null,0,"textarea",[["class","clr-textarea"],["id","textarea-basic-error"],["placeholder","Enter value here"]],null,null,null,null,null)),(l()(),e.qb(219,0,null,null,1,"clr-icon",[["class","clr-validate-icon"],["shape","exclamation-circle"]],null,null,null,null,null)),e.pb(220,16384,null,0,s.fb,[],null,null),(l()(),e.qb(221,0,null,null,1,"span",[["class","clr-subtext"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Helper Text"])),(l()(),e.qb(223,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.qb(224,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),e.pb(225,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),e.qb(226,0,null,null,10,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.qb(227,0,null,null,1,"h3",[["id","guidelines"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Design Guidelines"])),(l()(),e.qb(229,0,null,null,7,"div",[["class","alert alert-info"]],null,null,null,null,null)),(l()(),e.qb(230,0,null,null,6,"div",[["class","alert-items"]],null,null,null,null,null)),(l()(),e.qb(231,0,null,null,5,"div",[["class","alert-item static"]],null,null,null,null,null)),(l()(),e.qb(232,0,null,null,2,"div",[["class","alert-icon-wrapper"]],null,null,null,null,null)),(l()(),e.qb(233,0,null,null,1,"clr-icon",[["class","alert-icon"],["shape","info-circle"]],null,null,null,null,null)),e.pb(234,16384,null,0,s.fb,[],null,null),(l()(),e.qb(235,0,null,null,1,"span",[["class","alert-text"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" The UX design guidelines documentation is currently a work in progress, and will be updated when they are ready. "]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,6,0,"../../../forms"),l(n,42,0,"description",u.exampleOne),l(n,44,0),l(n,48,0,u.ngBasic),l(n,79,0),l(n,84,0,"description",u.exampleTwo),l(n,86,0),l(n,90,0,u.ngLabel),l(n,121,0),l(n,124,0,""),l(n,128,0,"description",u.exampleThree),l(n,130,0),l(n,140,0,u.ngHelpers),l(n,159,0,u.uiBasic),l(n,175,0,"textarea-basic"),l(n,186,0,u.uiFull),l(n,214,0,"textarea-basic-error"),l(n,225,0,u.uiError)},function(l,n){l(n,0,0,!0),l(n,5,0,e.Ab(n,6).target,e.Ab(n,6).href),l(n,30,0,!0,e.Ab(n,33).layoutService.isHorizontal(),e.Ab(n,33).layoutService.isCompact(),e.Ab(n,37).ngClassUntouched,e.Ab(n,37).ngClassTouched,e.Ab(n,37).ngClassPristine,e.Ab(n,37).ngClassDirty,e.Ab(n,37).ngClassValid,e.Ab(n,37).ngClassInvalid,e.Ab(n,37).ngClassPending),l(n,39,0,!0,e.Ab(n,44).id,e.Ab(n,45).ngClassUntouched,e.Ab(n,45).ngClassTouched,e.Ab(n,45).ngClassPristine,e.Ab(n,45).ngClassDirty,e.Ab(n,45).ngClassValid,e.Ab(n,45).ngClassInvalid,e.Ab(n,45).ngClassPending),l(n,62,0,!0,e.Ab(n,65).layoutService.isHorizontal(),e.Ab(n,65).layoutService.isCompact(),e.Ab(n,69).ngClassUntouched,e.Ab(n,69).ngClassTouched,e.Ab(n,69).ngClassPristine,e.Ab(n,69).ngClassDirty,e.Ab(n,69).ngClassValid,e.Ab(n,69).ngClassInvalid,e.Ab(n,69).ngClassPending),l(n,71,0,!0,null==e.Ab(n,75).control?null:e.Ab(n,75).control.disabled,e.Ab(n,75).addGrid()),l(n,78,0,e.Ab(n,79).forAttr),l(n,81,0,!0,e.Ab(n,86).id,e.Ab(n,87).ngClassUntouched,e.Ab(n,87).ngClassTouched,e.Ab(n,87).ngClassPristine,e.Ab(n,87).ngClassDirty,e.Ab(n,87).ngClassValid,e.Ab(n,87).ngClassInvalid,e.Ab(n,87).ngClassPending),l(n,104,0,!0,e.Ab(n,107).layoutService.isHorizontal(),e.Ab(n,107).layoutService.isCompact(),e.Ab(n,111).ngClassUntouched,e.Ab(n,111).ngClassTouched,e.Ab(n,111).ngClassPristine,e.Ab(n,111).ngClassDirty,e.Ab(n,111).ngClassValid,e.Ab(n,111).ngClassInvalid,e.Ab(n,111).ngClassPending),l(n,113,0,!0,null==e.Ab(n,117).control?null:e.Ab(n,117).control.disabled,e.Ab(n,117).addGrid()),l(n,120,0,e.Ab(n,121).forAttr),l(n,123,0,e.Ab(n,124).required?"":null,!0,e.Ab(n,130).id,e.Ab(n,131).ngClassUntouched,e.Ab(n,131).ngClassTouched,e.Ab(n,131).ngClassPristine,e.Ab(n,131).ngClassDirty,e.Ab(n,131).ngClassValid,e.Ab(n,131).ngClassInvalid,e.Ab(n,131).ngClassPending),l(n,132,0,!0),l(n,135,0,!0),l(n,150,0,e.Ab(n,154).ngClassUntouched,e.Ab(n,154).ngClassTouched,e.Ab(n,154).ngClassPristine,e.Ab(n,154).ngClassDirty,e.Ab(n,154).ngClassValid,e.Ab(n,154).ngClassInvalid,e.Ab(n,154).ngClassPending),l(n,168,0,e.Ab(n,172).ngClassUntouched,e.Ab(n,172).ngClassTouched,e.Ab(n,172).ngClassPristine,e.Ab(n,172).ngClassDirty,e.Ab(n,172).ngClassValid,e.Ab(n,172).ngClassInvalid,e.Ab(n,172).ngClassPending),l(n,174,0,e.Ab(n,175).forAttr),l(n,207,0,e.Ab(n,211).ngClassUntouched,e.Ab(n,211).ngClassTouched,e.Ab(n,211).ngClassPristine,e.Ab(n,211).ngClassDirty,e.Ab(n,211).ngClassValid,e.Ab(n,211).ngClassInvalid,e.Ab(n,211).ngClassPending),l(n,213,0,e.Ab(n,214).forAttr)})}function w(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"clr-textarea-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,F,I)),e.pb(1,49152,null,0,C,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var T=e.mb("clr-textarea-demo",C,w,{},{},[]),E=u("XPsC"),S=u("JsA7");u.d(n,"TextareaDemoModuleNgFactory",function(){return k});var k=e.nb(r,[],function(l){return e.xb([e.yb(512,e.j,e.db,[[8,[t.uc,t.a,t.b,t.d,t.e,t.f,t.g,t.h,t.c,t.qc,t.rc,t.sc,t.tc,a.a,T]],[3,e.j],e.x]),e.yb(4608,b.q,b.p,[e.u,[2,b.I]]),e.yb(4608,d.C,d.C,[]),e.yb(1073742336,b.c,b.c,[]),e.yb(1073742336,s.gb,s.gb,[]),e.yb(1073742336,s.Rc,s.Rc,[]),e.yb(1073742336,s.xe,s.xe,[]),e.yb(1073742336,s.Y,s.Y,[]),e.yb(1073742336,s.d,s.d,[]),e.yb(1073742336,s.ab,s.ab,[]),e.yb(1073742336,s.r,s.r,[]),e.yb(1073742336,s.Je,s.Je,[]),e.yb(1073742336,s.p,s.p,[]),e.yb(1073742336,s.Tc,s.Tc,[]),e.yb(1073742336,s.O,s.O,[]),e.yb(1073742336,d.z,d.z,[]),e.yb(1073742336,d.k,d.k,[]),e.yb(1073742336,s.nb,s.nb,[]),e.yb(1073742336,s.Eb,s.Eb,[]),e.yb(1073742336,s.Ib,s.Ib,[]),e.yb(1073742336,s.Nb,s.Nb,[]),e.yb(1073742336,s.ic,s.ic,[]),e.yb(1073742336,s.db,s.db,[]),e.yb(1073742336,s.tb,s.tb,[]),e.yb(1073742336,s.dd,s.dd,[]),e.yb(1073742336,s.S,s.S,[]),e.yb(1073742336,s.Xd,s.Xd,[]),e.yb(1073742336,s.G,s.G,[]),e.yb(1073742336,s.Zb,s.Zb,[]),e.yb(1073742336,s.pc,s.pc,[]),e.yb(1073742336,s.v,s.v,[]),e.yb(1073742336,s.yb,s.yb,[]),e.yb(1073742336,s.sb,s.sb,[]),e.yb(1073742336,s.i,s.i,[]),e.yb(1073742336,s.j,s.j,[]),e.yb(1073742336,s.wb,s.wb,[]),e.yb(1073742336,s.Bb,s.Bb,[]),e.yb(1073742336,s.ee,s.ee,[]),e.yb(1073742336,s.fc,s.fc,[]),e.yb(1073742336,s.vc,s.vc,[]),e.yb(1073742336,s.pb,s.pb,[]),e.yb(1073742336,s.Rb,s.Rb,[]),e.yb(1073742336,s.lc,s.lc,[]),e.yb(1073742336,s.Fb,s.Fb,[]),e.yb(1073742336,s.Ac,s.Ac,[]),e.yb(1073742336,s.a,s.a,[]),e.yb(1073742336,c.p,c.p,[[2,c.v],[2,c.m]]),e.yb(1073742336,E.a,E.a,[]),e.yb(1073742336,S.a,S.a,[]),e.yb(1073742336,r,r,[]),e.yb(1024,c.k,function(){return[[{path:"",component:C}]]},[])])})},"r/57":function(l,n){l.exports='<form clrForm>\n  <clr-textarea-container>\n    <label>Label</label>\n    <textarea clrTextarea [(ngModel)]="description" name="description" required></textarea>\n    <clr-control-helper>Helper text</clr-control-helper>\n    <clr-control-error>You must provide a description!</clr-control-error>\n  </clr-textarea-container>\n</form>'},"ypQ+":function(l,n){l.exports='<form class="clr-form">\n  <div class="clr-form-control">\n    <label for="vertical-textarea-basic" class="clr-control-label">Basic textarea</label>\n    <div class="clr-control-container">\n      <div class="clr-textarea-wrapper">\n        <textarea id="vertical-textarea-basic" placeholder="Enter value here" class="clr-textarea"></textarea>\n        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>\n      </div>\n      <span class="clr-subtext">Helper Text</span>\n    </div>\n  </div>\n</form>'}}]);