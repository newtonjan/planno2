(this.webpackJsonpplanno2=this.webpackJsonpplanno2||[]).push([[0],{40:function(e,a,t){e.exports=t(55)},45:function(e,a,t){},46:function(e,a,t){e.exports=t.p+"static/media/pencil.9af315a4.svg"},50:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),o=(t(45),t(61)),i=t(62),m=(t(46),function(){return l.a.createElement(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},l.a.createElement(o.a.Brand,{href:"/",style:{fontSize:"50px"}},l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-pencil",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})),"Planno"),l.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(i.a,{className:"mr-auto"},l.a.createElement(i.a.Link,{href:"/addtodo"},"Add Task | "),l.a.createElement(i.a.Link,{href:"/cal"},"Calendar | "),l.a.createElement(i.a.Link,{href:"/notes"},"Notes")),l.a.createElement(i.a,null,l.a.createElement(i.a.Link,{href:"/about"},"About Planno"))))}),d=t(38),u=t(6),s=t(63),E=function(e){var a=e.task,t=(a.id,a.text),n=a.deadline;a.importance,a.length,a.completion;return l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement(s.a,{variant:"info",style:{width:"100%",color:"#000",padding:"0px 10px"}},l.a.createElement(s.a.Text,null,t," ",l.a.createElement("span",{style:{float:"right"}}," ... within ",n," days "))))},p=t(60),h=t(57),f=t(37),v=t(58),k=function(e){e.tasks;return l.a.createElement("div",null,l.a.createElement("h1",null,"Add to your list:"),l.a.createElement(p.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Task"),l.a.createElement(p.a.Control,{placeholder:"Type a task"})),l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Deadline"),l.a.createElement(p.a.Control,{placeholder:"How many days?"}))),l.a.createElement(f.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Importance"),l.a.createElement(p.a.Control,{placeholder:"From 1-100"})))),l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Time Estimate"),l.a.createElement(p.a.Control,{placeholder:"How many hours?"}))),l.a.createElement(f.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Completion"),l.a.createElement(p.a.Control,{placeholder:"How much is done?"})))),l.a.createElement(v.a,{type:"submit"},"Add to list")))},b=function(){return l.a.createElement("div",null,"Calendar")},g=function(){return l.a.createElement("div",null,"Notes")},x=function(){return l.a.createElement("div",null)},y=function(e){var a=e.tasks,t=a.reduce((function(e,a){return 1/e.deadline*e.importance>1/a.deadline*a.importance?e:a}));return l.a.createElement("div",null,l.a.createElement("h1",null,"What should I do next?"),l.a.createElement(E,{key:t.id,task:t}),l.a.createElement("h1",null,"What else?"),a.filter((function(e){return e.id!==t.id})).map((function(e){return l.a.createElement(E,{key:e.id,task:e})})))},w=(t(50),t(59));t(51);var C=function(){var e={tasks:[{id:1,text:"Finish hackathon project and fix long task names",deadline:2,importance:.5},{id:2,text:"CSC236 assignment",deadline:4,importance:.4},{id:3,text:"Apply for internship",deadline:40,importance:.9},{id:4,text:"Do laundry",deadline:5,importance:.2}]};return l.a.createElement(w.a,{style:{width:"100%"}},l.a.createElement("div",{width:"100%"},l.a.createElement("header",{className:"App-header",width:"100%"},l.a.createElement(m,null),l.a.createElement(d.a,null,l.a.createElement(u.a,{path:"/",render:function(a){return l.a.createElement(y,Object.assign({},a,{tasks:e.tasks}))}}),l.a.createElement(u.a,{path:"/addtodo",render:function(a){return l.a.createElement(k,Object.assign({},a,{tasks:e.tasks}))}}),l.a.createElement(u.a,{path:"/cal",component:b}),l.a.createElement(u.a,{path:"/notes",component:g}),l.a.createElement(u.a,{path:"/about",component:x})))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5ffbdffe.chunk.js.map