(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=a(18),s=a(19),o=a(23),u=a(20),m=a(24),p=a(8),g=a.n(p),d=a(11),h=a(9),f=a(5),v=(a(31),function(e){var t=e.images,a=e.imgId,n=e.totals,l=e.page,c=e.perPage,i=e.onPageChange,s=l*c+1,o=(l+1)*c;o=o<t.length?o:t.length;var u=s-1;return r.a.createElement("div",null,r.a.createElement("h1",null,s,"...",o," ","of"," ",t.length),r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{className:"page__ul"},r.a.createElement("li",{className:"page-item disabled"},r.a.createElement("span",{className:"page-link"},r.a.createElement("button",{type:"button",onClick:function(){return i(l-1)},disabled:l<1},"Previous"))),r.a.createElement("li",{className:"page-item"},Array.from(Array(n)).map(function(e,t){return r.a.createElement(h.b,{className:"page-link",to:"/".concat(t+1),onClick:function(){return i(t)},activeClassName:"hello"},t+1)})),r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:"/#"},r.a.createElement("button",{type:"button",onClick:function(){return i(l+1)},disabled:l>=n-1},"Next"))))),r.a.createElement("p",null,a&&t.slice(u,o)&&t.slice(u,o).map(function(e){return r.a.createElement("img",{alt:"images",width:500,src:e.download_url})})))}),E=function(){var e=Object(d.a)(g.a.mark(function e(){var t,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://picsum.photos/v2/list?page=2&limit=42");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],page:0,perPage:5,totals:0},a.onPageChange=function(e){a.setState({page:e})},a.handleDecide=function(e){var t=e.target.value;a.setState(function(e){return{perPage:t,totals:Math.ceil(e.images.length/t)}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState(function(e){return{images:t,totals:Math.ceil(t.length/e.perPage)}});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.page,l=t.perPage,c=t.totals;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("form",{action:"/",className:"adress-delivery adress-delivery__header"},r.a.createElement("span",null,"images on pageg"),r.a.createElement("div",{className:"destination-details"},r.a.createElement("select",{name:"",onClick:this.handleDecide,className:"adress-delivery__destination-details"},r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:15},"15")))),r.a.createElement(f.a,{path:"/:imgId?",render:function(t){var i=t.match;return r.a.createElement(v,{key:a.id,images:a,imgId:i.params.imgId,page:n,onPageChange:e.onPageChange,perPage:l,totals:c})}})))}}]),t}(r.a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.30b582a6.chunk.js.map