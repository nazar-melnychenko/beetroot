(this.webpackJsonples_39=this.webpackJsonples_39||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),l=a.n(r),o=(a(14),a(3)),i=a(4),c=a(5),u=a(7),h=a(6),p=a(8),m=(a(15),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleInputChange=function(e){a.setState({state:a.state.errors.email=""}),a.setState({state:a.state.errors.password=""});var t="checkbox"===e.target.type?e.target.checked:e.target.value,n=e.target.name;a.setState(Object(o.a)({},n,t))},a.handleSubmit=function(e){!a.state.email||a.state.email.indexOf("@")<0?a.setState({state:a.state.errors.email="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0443 \u043f\u043e\u0447\u0442\u0443"}):a.state.password?alert("\u0406\u043c'\u044f: ".concat(a.state.email," \u041f\u0430\u0440\u043e\u043b\u044c: ").concat(a.state.password," Keep: ").concat(a.state.isGoing)):a.setState({state:a.state.errors.password="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),e.preventDefault()},a.state={email:"",password:"",isGoing:!0,errors:{email:"",password:""}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"formWrapper"},s.a.createElement("h1",null,"SIGIN IN TO YORUR ACCOUNT"),s.a.createElement("form",{method:"POST"},s.a.createElement("input",{type:"text",name:"email",placeholder:"e-mail",value:this.state.value,onChange:this.handleInputChange}),s.a.createElement("span",null,this.state.errors.email?this.state.errors.email:null),s.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleInputChange}),s.a.createElement("span",null,this.state.errors.password?this.state.errors.password:null),s.a.createElement("label",null,s.a.createElement("input",{name:"isGoing",type:"checkbox",checked:this.state.isGoing,onChange:this.handleInputChange}),"Keep me signed in"),s.a.createElement("button",{onClick:this.handleSubmit},"SIGN IN")))}}]),t}(s.a.Component));var d=function(){return s.a.createElement(m,null)};l.a.render(s.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3781eac3.chunk.js.map