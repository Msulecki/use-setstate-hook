(this["webpackJsonpuse-set-state"]=this["webpackJsonpuse-set-state"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=(a(10),a(1)),u=a(2);a(11);var s=function(){var e={id:0,firstName:"John",secondName:"Doe"},t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(o.a)(t,2),c=a[0],r=a[1],l=function(e,t){r((function(t){return Object(u.a)(Object(u.a)({},t),e)})),t()};return[c,l]}(e),i=Object(o.a)(s,2),m=i[0],p=i[1],v=Object(n.useState)(""),d=Object(o.a)(v,2),b=d[0],f=d[1],E=Object.keys(m),O=c.a.createElement("ul",null,E.map((function(e){return c.a.createElement("li",{key:e},"".concat(e,": ").concat(m[e]))})));return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app_box"},c.a.createElement("div",{className:"app__hook"},c.a.createElement("h1",null,"Hook value:"),c.a.createElement("div",{className:"app__hook-val"},O),c.a.createElement("span",null,c.a.createElement("strong",null,"Input example: "),JSON.stringify(e))),c.a.createElement("input",{onChange:function(e){return l(e.target.value)},type:"text",placeholder:"enter new value (stringified JSON)",value:r}),c.a.createElement("button",{onClick:function(){try{var e=JSON.parse(r);p(e,(function(){return e="some value",console.log("handleCallback value:",e),e;var e})),l(""),b&&f("")}catch(b){console.error(b),f(b.name)}}},"Update"),b&&c.a.createElement("div",{className:"app__error"},b)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.80cc17e3.chunk.js.map