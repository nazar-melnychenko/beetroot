(this.webpackJsonples_39=this.webpackJsonples_39||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(2),l=a.n(s),c=(a(14),a(6)),i=a(3),r=a(4),u=a(7),d=a(5),m=a(8),p=(a(15),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).onChangeValue=function(t){a.setState({value:t.target.value})},a.onAddItem=function(){a.setState((function(t){return{todo:[{value:a.state.value,done:!1}].concat(Object(c.a)(t.todo)),value:""}}))},a.onDeleteItem=function(t){a.state.todo.splice(t,1),a.setState({state:a.state.todo}),a.setState({state:a.state.btnVis=!0})},a.onDoneItem=function(t){if(a.state.todo[t].done){var e=a.state.todo.splice(t,1);a.state.todo.unshift(e[0]),e[0].done=!1}else{var n=a.state.todo.splice(t,1);a.state.todo.push(n[0]),n[0].done=!0}console.log(a.state.todo),a.setState({state:a.state.todo}),a.setState({state:a.state.btnVis=!0})},a.onEditItem=function(t){a.setState({state:a.state.btnVis=!1});var e=document.querySelectorAll(".todoWrapper__items--item > p")[t],n=a.state.todo[t].value;e.innerHTML='<input class="edits" type="text" value="'.concat(n+" ",'" autofocus /><button class="don">Done</button>');var o=document.querySelectorAll(".don"),s=document.querySelectorAll(".edits");o.forEach((function(e,n){e.onclick=function(){a.setState({state:a.state.todo[t].value=s[n].value}),a.setState({state:a.state.btnVis=!0})}}))},a.state={value:"",todo:[{value:"Buy bread, eggs",done:!1},{value:"Make breakfast :)",done:!1}],btnVis:!0},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"todoWrapper"},o.a.createElement("h1",null,"To do List:"),o.a.createElement("div",{className:"todoWrapper__items"},this.state.todo.map((function(e,a){return o.a.createElement("div",{key:a,className:"todoWrapper__items--item"},o.a.createElement("p",{className:t.state.todo[a].done?"done":"undone"},t.state.todo[a].value),o.a.createElement("div",{className:"button"},o.a.createElement("span",{className:t.state.btnVis?"edit":"hid edit",onClick:function(){return t.onEditItem(a)}},o.a.createElement("img",{src:"img/edit.png",alt:""})),o.a.createElement("span",{className:"done",onClick:function(){return t.onDoneItem(a)}},o.a.createElement("img",{src:"img/done.png",alt:""})),o.a.createElement("span",{className:"delete",onClick:function(){return t.onDeleteItem(a)}},o.a.createElement("img",{src:"img/delete.png",alt:""}))))}))),o.a.createElement("div",{className:"todoWrapper__input"},o.a.createElement("label",null,"Task"),o.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onChangeValue}),o.a.createElement("button",{type:"button",onClick:this.onAddItem,disabled:!this.state.value},"Save Item")))}}]),e}(o.a.Component));var v=function(){return o.a.createElement(p,null)};l.a.render(o.a.createElement(v,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b4772c08.chunk.js.map