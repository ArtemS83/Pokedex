(this.webpackJsonpPokedex=this.webpackJsonpPokedex||[]).push([[3],{109:function(e,t,n){e.exports={div:"PokemonDetailsPage_div__1Uc5z"}},110:function(e,t,n){e.exports={Item:"PokemonDetailsItem_Item__cG8eu",Flex:"PokemonDetailsItem_Flex__1V53N",Image:"PokemonDetailsItem_Image__1DToR",Info:"PokemonDetailsItem_Info__1fc4T"}},111:function(e,t,n){e.exports={page404:"NotFound_page404__CmmAH"}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var c=n(54),a=n(0),o=n(109),s=n.n(o),r=n(153),i=n(110),u=n.n(i),p=n(3),l=function(e){var t=e.pokemon,n=t.name,c=t.sprites,a=t.id,o=t.types,s=t.moves,r=t.height,i=t.weight;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:u.a.Item,children:[Object(p.jsxs)("h2",{children:[" ",n.toUpperCase()," "]}),Object(p.jsxs)("div",{className:u.a.Flex,children:[Object(p.jsx)("img",{className:u.a.Image,width:140,height:150,src:c.front_default,alt:"Pokemon ".concat(n," poster")}),Object(p.jsxs)("div",{className:u.a.Info,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Number"}),": ",a]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Height"}),": ",r]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Weight"}),": ",i]}),Object(p.jsxs)("p",{className:"type",children:[Object(p.jsx)("span",{children:"Type"}),": ",o.map((function(e){return e.type.name})).join("/")]})]})]}),Object(p.jsxs)("p",{className:"moves",children:[Object(p.jsx)("span",{children:"Moves"}),": ",s.map((function(e){return e.move.name})).join(",")]})]})})},j=n(111),d=n.n(j),m=function(){return Object(p.jsx)("div",{className:d.a.page404,children:Object(p.jsx)("h1",{children:"404 Pokemon Not Found"})})},h=n(45),f=n.p+"static/media/pokemon-bgi.1746260d.jpg",b=function(e){var t=Object(a.useState)(e.match.params.namePokemon),n=Object(c.a)(t,2),o=n[0],i=(n[1],Object(a.useState)(null)),u=Object(c.a)(i,2),j=u[0],d=u[1],b=Object(a.useState)(!1),x=Object(c.a)(b,2),O=x[0],v=x[1];Object(a.useEffect)((function(){return document.body.style.backgroundImage="url(".concat(f,")"),document.body.style.backgroundSize="cover",function(){document.body.style=""}}),[]),Object(a.useEffect)((function(){h.a.fetchPokemon(o).then((function(e){var t=e.data;d(t),v(!0)})).catch((function(e){v(!1),console.log("ERROR: ",e)}))}),[o]);return Object(p.jsxs)("div",{className:s.a.div,children:[Object(p.jsx)(r.a,{variant:"contained",color:"secondary",onClick:function(){var t,n=e.location;e.history.push((null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)||"/")},children:"Go Back"}),O?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l,{pokemon:j})}):Object(p.jsx)(m,{})]})}},45:function(e,t,n){"use strict";var c=n(59),a=n.n(c),o=n(60),s=n(61),r=n.n(s);function i(){return i=Object(o.a)(a.a.mark((function e(){var t,n,c,o,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:0,n=s.length>1&&void 0!==s[1]?s[1]:20,e.next=4,r.a.get("?offset=".concat(t,"&limit=").concat(n));case 4:return c=e.sent,o=c.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(){return(u=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()})).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.defaults.baseURL="https://pokeapi.co/api/v2/pokemon",t.a={fetchPokemons:function(){return i.apply(this,arguments)},fetchPokemon:function(e){return u.apply(this,arguments)},fetchPok:function(e){return p.apply(this,arguments)}}}}]);
//# sourceMappingURL=pokemonDetails-page.64a1bca7.chunk.js.map