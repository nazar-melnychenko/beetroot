(this.webpackJsonples_39=this.webpackJsonples_39||[]).push([[0],{10:function(t,e,a){t.exports=a(18)},15:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(4),c=a.n(r),i=(a(15),a(1)),o=a.n(i),u=a(2),l=a(5),h=a(6),p=a(8),d=a(7),m=a(9),f=(a(17),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(d.a)(e).call(this,t))).more=function(t){a.setState({state:a.state.opened=!0}),a.setState({state:a.state.info=a.state.data[t]})},a.close=function(){a.setState({state:a.state.opened=!1})},a.state={data:[],count:2,opened:!1,info:[],load:!0},a}return Object(m.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,a,n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.co/api/people/");case 2:return e=t.sent,t.next=5,e.json();case 5:for(s in a=t.sent,n=[],a.results)n.push(a.results[s]);this.setState({state:this.state.data=this.state.data.concat(n)}),this.setState({state:this.state.load=!1});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"load",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,a,n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({state:this.state.load=!0}),t.next=3,fetch("https://swapi.co/api/people/?page=".concat(this.state.count));case 3:return e=t.sent,t.next=6,e.json();case 6:for(s in a=t.sent,n=[],a.results)n.push(a.results[s]);this.setState({state:this.state.count=this.state.count+1}),this.setState({state:this.state.data=this.state.data.concat(n)}),this.setState({state:this.state.load=!1});case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return s.a.createElement(s.a.Fragment,null,this.state.data.map((function(e,a){return s.a.createElement("div",{className:"mor",key:a},e.name,s.a.createElement("span",{className:"moree",onClick:function(){return t.more(a)}},">>"))})),s.a.createElement("button",{onClick:this.load.bind(this)},this.state.load?"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435..."),s.a.createElement("div",{className:this.state.opened?"modalWindow active":"modalWindow"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("span",{onClick:this.close.bind(this)},"X"),s.a.createElement("div",{className:"text"},Object.keys(this.state.info).map((function(e){return s.a.createElement("div",{className:"info",key:e},e," : ",t.state.info[e])}))))))}}]),e}(s.a.Component));var v=function(){return s.a.createElement(f,null)};c.a.render(s.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b253e6dd.chunk.js.map