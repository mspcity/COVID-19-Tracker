(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{176:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),o=n.n(c),r=n(51),s=n.n(r),i=(n(59),n.p,n(60),function(){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"COVID-19"}),"United States"]})}),d=n(26),l=n.n(d),u=n(52),f=n(15),b=n(14),j=n(53),h=n.n(j),v=function(){var e=Object(c.useState)({}),t=Object(f.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)({}),s=Object(f.a)(r,2),i=s[0],d=s[1],j=Object(c.useState)({}),v=Object(f.a)(j,2),p=v[0],O=v[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.covid19api.com/total/dayone/country/US");case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(e){var t=e.reduce((function(e,t){var n=new Date(t.Date),a=n.getFullYear(),c=n.getMonth(),o=n.getDate(),r=t.Confirmed,s=t.Active,i=t.Deaths,d=t.Recovered,l=e.find((function(e){return e.year===a&&e.month===c}));return l||e.push({year:a,month:c,date:o,confirmed:r,active:s,death:i,recovered:d}),l&&l.date<o&&(l.active=s,l.death=i,l.date=o,l.year=a,l.month=c,l.recovered=d,l.confirmed=r),e}),[]);console.log(t);var n=t.map((function(e){return"".concat(e.month+1)}));o({labels:n,datasets:[{label:"Cases",backgroundColor:"salmon",fill:!0,data:t.map((function(e){return e.confirmed}))}]}),d({labels:n,datasets:[{label:"Active",borderColor:"salmon",fill:!1,data:t.map((function(e){return e.active}))}]});var a=t[t.length-1];O({labels:["Confimed","Recovered","Deaths"],datasets:[{label:"Cases, Recovered, Deaths",backgroundColor:["#ff3d67","#059bff","#ffc233"],borderColor:["#ff3d67","#059bff","#ffc233"],fill:!1,data:[a.confirmed,a.recovered,a.death]}]})};e()}),[]),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"COVID-19 Cases"}),Object(a.jsxs)("div",{className:"contents",children:[Object(a.jsx)("div",{children:Object(a.jsx)(b.Bar,{data:n,options:{legend:{display:!0,position:"bottom"}}})}),Object(a.jsx)("div",{children:Object(a.jsx)(b.Line,{data:i,options:{legend:{display:!0,position:"bottom"}}})}),Object(a.jsx)("div",{children:Object(a.jsx)(b.Doughnut,{data:p,options:("\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd (".concat((new Date).getMonth()+1,")"),{legend:{display:!0,position:"bottom"}})})})]})]})};var p=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(i,{}),Object(a.jsx)(v,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),O()},59:function(e,t,n){},60:function(e,t,n){}},[[176,1,2]]]);
//# sourceMappingURL=main.4b35f0ff.chunk.js.map