(this["webpackJsonpplants-react"]=this["webpackJsonpplants-react"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(45),c=a.n(i),o=(a(53),a(1)),l=a(4),s=a.n(l),u=a(11),m=a.n(u),p=a(47),g=function(e){var t=e.data,a=Object(n.useState)([]),i=Object(o.a)(a,2),c=i[0],l=i[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),g=m[0],d=m[1],f=["https://upload.wikimedia.org/wikipedia/commons/7/74/Red_Pencil_Icon.png","https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg","https://upload.wikimedia.org/wikipedia/commons/d/df/Wikispecies-logo.svg","https://upload.wikimedia.org/wikipedia/en/9/99/Question_book-new.svg"];return Object(n.useEffect)((function(){l([]),d(!1)}),[t]),r.a.createElement("div",null,c.length>0&&c.map((function(e,t){return r.a.createElement("img",{className:"image-fill-parent",key:t,src:e})})),!g&&r.a.createElement("button",{onClick:function(){return d(!0),void s.a.get("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=images&titles=".concat(t.scientificName)).then((function(e){var t=Object.values(e.data.query.pages)[0].images;t&&t.forEach((function(e){s.a.get("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&titles=".concat(e.title,"&prop=imageinfo&iiprop=url")).then((function(e){var t=Object.values(e.data.query.pages)[0].imageinfo;if(t){var a=t[0].url;a&&!f.includes(a)&&l((function(e){return[].concat(Object(p.a)(e),[t[0].url])}))}}))}))})).catch((function(e){console.error(e)}))}},"Load Images"))},d=function(e){var t=e.data,a=Object(n.useState)(void 0),i=Object(o.a)(a,2),c=i[0],l=i[1],u=Object(n.useState)(!1),p=Object(o.a)(u,2),d=p[0],f=p[1],h=Object(n.useState)(void 0),v=Object(o.a)(h,2),E=v[0],b=v[1];return Object(n.useEffect)((function(){l(void 0),f(!0),t.scientificName&&s.a.get("https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=".concat(t.scientificName,"&prop=extracts&format=json&exintro=1")).then((function(e){var t=Object.values(e.data.query.pages)[0].extract;l(t||'<p class="center">No description found</p>'),f(!1)})).catch((function(e){console.error(e),f(!1)}))}),[t]),Object(n.useEffect)((function(){b(void 0),t.scientificName&&s.a.get("https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=".concat(t.scientificName,"&prop=pageimages&format=json&pithumbsize=250")).then((function(e){var t=Object.values(e.data.query.pages)[0].thumbnail;t&&b(t.source)})).catch((function(e){console.error(e)}))}),[t]),r.a.createElement("div",{className:"panel"},E&&r.a.createElement("img",{className:"pull-right",src:E}),r.a.createElement("h2",null,r.a.createElement("i",null,t.scientificName)),r.a.createElement("h4",null,"Common name: ",t.primaryCommonName),r.a.createElement("h4",null,"Family: ",t.speciesGlobal.family),r.a.createElement("div",null,"Informal taxonomy: ",t.speciesGlobal.informalTaxonomy),r.a.createElement("div",null,"Comments: ",m()(t.speciesGlobal.taxonomicComments)),r.a.createElement("div",null,r.a.createElement("div",null,"Wikipedia:"),d?r.a.createElement("p",null,"Loading additional information..."):m()(c)),r.a.createElement(g,{data:t}))},f=function(e){var t=e.resultsSummary,a=e.setPage;e.setRecordsPerPage;return r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"pag-button",onClick:function(){return a(0)}},"<<"),r.a.createElement("button",{className:"pag-button",onClick:function(){return a(t.page-1)}},"<"),"Page ",r.a.createElement("input",{className:"pag-input",type:"number",defaultValue:t.page+1,onBlur:function(e){return e.currentTarget.value&&function(e){var n=Math.floor(e.value)-1;n!==t.page&&n>=0&&n<t.totalPages?a(n):e.value=t.page+1}(e.currentTarget)}})," of ",t.totalPages,r.a.createElement("button",{className:"pag-button",onClick:function(){return a(t.page+1)}},">"),r.a.createElement("button",{className:"pag-button",onClick:function(){return a(t.totalPages-1)}},">>"))},h=function(){var e=Object(n.useState)("AL"),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(void 0),l=Object(o.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(0),g=Object(o.a)(p,2),h=g[0],v=g[1],E=Object(n.useState)(20),b=Object(o.a)(E,2),N=b[0],O=b[1];return Object(n.useEffect)((function(){s.a.post("https://explorer.natureserve.org/api/data/speciesSearch",{criteriaType:"species",pagingOptions:{page:h,recordsPerPage:N},locationCriteria:[{paramType:"subnation",subnation:a,nation:"US"}],speciesTaxonomyCriteria:[{paramType:"scientificTaxonomy",level:"KINGDOM",scientificTaxonomy:"Plantae"}]}).then((function(e){m(e.data)})).catch((function(e){console.error(e)}))}),[a,h,N]),r.a.createElement("div",null,r.a.createElement("h1",null,"State Search"),"API Provided by https://explorer.natureserve.org/",r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"six columns"},"Select a state:",r.a.createElement("select",{onChange:function(e){return i(e.currentTarget.value)}},["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MH","MA","MI","FM","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VA","VI","WA","WV","WI","WY"].map((function(e,t){return r.a.createElement("option",{key:e,value:e},e)}))),u&&r.a.createElement("p",null,"Total species found for ",a,": ",u.resultsSummary.speciesResults.total)),r.a.createElement("div",{className:"six columns pagination"},u&&u.resultsSummary&&r.a.createElement(f,{resultsSummary:u.resultsSummary,setPage:v,setRecordsPerPage:O}))),r.a.createElement("div",null,u&&u.results.map((function(e,t){return r.a.createElement(d,{key:t,data:e})}))))},v=function(){return r.a.createElement("div",null,"This project is for messing around with plant web APIs")},E=a(19),b=a(2),N=function(){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"menu navbar pure-menu pure-menu-horizontal header-margin-bottom"},r.a.createElement("a",{href:"#",className:"menu-link pure-menu-heading pure-menu-link "},r.a.createElement("img",{className:"logo",src:"https://freesvg.org/img/eco_spadassin_green_leaf_2_icon.png"})),r.a.createElement(E.b,{className:"menu-link pure-menu-heading pure-menu-link",to:"/state"},"State Search")),r.a.createElement("ul",{className:"header header-style"}),r.a.createElement("div",{className:"content container"},r.a.createElement(b.a,{exact:!0,path:"/",component:v}),r.a.createElement(b.a,{exact:!0,path:"/state",component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){e.exports=a(117)},53:function(e,t,a){},95:function(e,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.65170219.chunk.js.map