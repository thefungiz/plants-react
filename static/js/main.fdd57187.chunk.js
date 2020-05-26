(this["webpackJsonpplants-react"]=this["webpackJsonpplants-react"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(45),c=a.n(o),i=(a(53),a(5)),l=a(6),s=a.n(l),u=a(16),m=a.n(u),p=a(47),g=function(e){var t=e.data,a=Object(n.useState)([]),o=Object(i.a)(a,2),c=o[0],l=o[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),g=m[0],d=m[1],f=["https://upload.wikimedia.org/wikipedia/commons/7/74/Red_Pencil_Icon.png","https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg","https://upload.wikimedia.org/wikipedia/commons/d/df/Wikispecies-logo.svg","https://upload.wikimedia.org/wikipedia/en/9/99/Question_book-new.svg"];return Object(n.useEffect)((function(){l([]),d(!1)}),[t]),r.a.createElement("div",null,c.length>0&&c.map((function(e,t){return r.a.createElement("img",{alt:e,className:"image-fill-parent",key:t,src:e})})),!g&&r.a.createElement("button",{onClick:function(){return d(!0),void s.a.get("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=images&titles=".concat(t.scientificName)).then((function(e){var t=Object.values(e.data.query.pages)[0].images;t&&t.forEach((function(e){s.a.get("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&titles=".concat(e.title,"&prop=imageinfo&iiprop=url")).then((function(e){var t=Object.values(e.data.query.pages)[0].imageinfo;if(t){var a=t[0].url;a&&!f.includes(a)&&l((function(e){return[].concat(Object(p.a)(e),[t[0].url])}))}}))}))})).catch((function(e){console.error(e)}))}},"Load Additional Images"))},d=function(e){var t=e.data,a=Object(n.useState)(void 0),o=Object(i.a)(a,2),c=o[0],l=o[1],u=Object(n.useState)(void 0),p=Object(i.a)(u,2),d=p[0],f=p[1];return Object(n.useEffect)((function(){l(void 0),t.scientificName&&s.a.get("https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=".concat(t.scientificName,"&prop=extracts|info|pageimages&format=json&exintro=1&inprop=url&pithumbsize=250")).then((function(e){var t=Object.values(e.data.query.pages)[0];t.extract&&l(t.extract+'<p>Source: <a href="'.concat(t.fullurl,'">').concat(t.title,"</a> on Wikipedia</p?")),t.thumbnail&&f(t.thumbnail.source)})).catch((function(e){console.error(e)}))}),[t]),r.a.createElement("div",{className:"panel"},d&&r.a.createElement("img",{alt:t.scientificName,className:"pull-right",src:d}),r.a.createElement("h2",null,r.a.createElement("i",null,t.scientificName)),r.a.createElement("h4",null,"Common name: ",t.primaryCommonName),r.a.createElement("h4",null,"Family: ",t.speciesGlobal.family),t.speciesGlobal.otherCommonNames&&r.a.createElement("div",null,r.a.createElement("b",null,"Other common names:"),r.a.createElement("ul",null,t.speciesGlobal.otherCommonNames.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),t.speciesGlobal.informalTaxonomy&&r.a.createElement("div",null,r.a.createElement("b",null,"Informal taxonomy:")," ",t.speciesGlobal.informalTaxonomy),t.speciesGlobal.taxonomicComments&&r.a.createElement("div",null,r.a.createElement("b",null,"Comments:")," ",m()(t.speciesGlobal.taxonomicComments)),c&&r.a.createElement("div",null,m()(c),r.a.createElement(g,{data:t})))},f=function(e){var t=e.resultsSummary,a=e.setPage;e.setRecordsPerPage;return r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"pag-button",onClick:function(){return a(0)}},"<<"),r.a.createElement("button",{className:"pag-button",onClick:function(){return a(t.page-1)}},"<"),"Page ",r.a.createElement("input",{className:"pag-input",type:"number",defaultValue:t.page+1,onBlur:function(e){return e.currentTarget.value&&function(e){var n=Math.floor(e.value)-1;n!==t.page&&n>=0&&n<t.totalPages?a(n):e.value=t.page+1}(e.currentTarget)}})," of ",t.totalPages,r.a.createElement("button",{className:"pag-button",onClick:function(){return a(t.page+1)}},">"),r.a.createElement("button",{className:"pag-button",onClick:function(){return a(t.totalPages-1)}},">>"))},h=function(){var e=Object(n.useState)("AL"),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(void 0),l=Object(i.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(0),g=Object(i.a)(p,2),h=g[0],b=g[1],E=Object(n.useState)(20),v=Object(i.a)(E,2),N=v[0],y=v[1];return Object(n.useEffect)((function(){s.a.post("https://explorer.natureserve.org/api/data/speciesSearch",{criteriaType:"species",pagingOptions:{page:h,recordsPerPage:N},locationCriteria:[{paramType:"subnation",subnation:a,nation:"US"}],speciesTaxonomyCriteria:[{paramType:"scientificTaxonomy",level:"KINGDOM",scientificTaxonomy:"Plantae"}]}).then((function(e){m(e.data)})).catch((function(e){console.error(e)}))}),[a,h,N]),r.a.createElement("div",null,r.a.createElement("h1",null,"State Search"),"API Provided by https://explorer.natureserve.org/",r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"six columns"},"Select a state:",r.a.createElement("select",{onChange:function(e){return o(e.currentTarget.value)}},["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MH","MA","MI","FM","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VA","VI","WA","WV","WI","WY"].map((function(e,t){return r.a.createElement("option",{key:e,value:e},e)}))),u&&r.a.createElement("p",null,"Total species found for ",a,": ",u.resultsSummary.speciesResults.total)),r.a.createElement("div",{className:"six columns pagination"},u&&u.resultsSummary&&r.a.createElement(f,{resultsSummary:u.resultsSummary,setPage:b,setRecordsPerPage:y}))),r.a.createElement("div",null,u&&u.results.map((function(e,t){return r.a.createElement(d,{key:t,data:e})}))))},b=function(){return r.a.createElement("div",null,"This project is for messing around with plant web APIs")},E=a(13),v=a(1),N=function(){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"menu navbar pure-menu pure-menu-horizontal header-margin-bottom"},r.a.createElement(E.b,{className:"menu-link pure-menu-heading pure-menu-link",to:"/"},r.a.createElement("img",{alt:"logo",className:"logo",src:"https://freesvg.org/img/eco_spadassin_green_leaf_2_icon.png"})),r.a.createElement(E.b,{className:"menu-link pure-menu-heading pure-menu-link",to:"/state"},"State Search")),r.a.createElement("ul",{className:"header header-style"}),r.a.createElement("div",{className:"content container"},r.a.createElement(v.a,{exact:!0,path:"/",component:b}),r.a.createElement(v.a,{exact:!0,path:"/state",component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){e.exports=a(117)},53:function(e,t,a){},95:function(e,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.fdd57187.chunk.js.map