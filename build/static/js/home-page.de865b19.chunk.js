(this.webpackJsonpPokedex=this.webpackJsonpPokedex||[]).push([[1],{116:function(t,e,n){t.exports={item:"PokemonGalleryItem_item__1Pj-6",Image:"PokemonGalleryItem_Image__2CnqZ",div:"PokemonGalleryItem_div__jH32Q"}},136:function(t,e,n){t.exports={list:"PokemonsGallery_list__kmltU"}},140:function(t,e,n){t.exports={buttonScrollTop:"ButtonScrollTop_buttonScrollTop__C9hCk"}},188:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return L}));var o=n(151),c=n(53),a=n(0),r=n(48),i=n(180),s=n(12),l=n(1),u=n(116),f=n.n(u),m=n(3),d=Object(l.g)((function(t){var e=t.name,n=(t.url,t.location),o=Object(a.useState)(null),i=Object(c.a)(o,2),l=i[0],u=i[1],d=n.pathname;return Object(a.useEffect)((function(){r.a.fetchPokemon(e).then((function(t){var e=t.data;u(e)})).catch((function(t){return console.log("ERROR: ",t)}))}),[e]),Object(m.jsx)("li",{className:f.a.item,children:Object(m.jsxs)(s.b,{to:{pathname:"pokemons/".concat(e),state:{from:d}},children:[Object(m.jsxs)("p",{children:["#",null===l||void 0===l?void 0:l.id]}),Object(m.jsxs)("div",{className:f.a.div,children:[Object(m.jsx)("img",{className:f.a.Image,width:140,height:150,src:null===l||void 0===l?void 0:l.sprites.front_default,loading:"lazy",alt:"Pokemon ".concat(e," poster")}),Object(m.jsxs)("h2",{children:[" ",e," "]})]})]})})})),j=n(117),p=n.n(j),b=n(190),h=n(136),O=n.n(h),x=function(t){var e=t.pokemons,n=t.onLoadMore,o=t.isLoading;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:O.a.list,children:e.map((function(t){var e=t.name,n=t.url;return Object(m.jsx)(d,{name:e,url:n},e)}))}),Object(m.jsxs)(i.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginBottom:"16px"},children:[Object(m.jsx)(p.a,{type:"Puff",color:"#f50057",height:60,width:60,visible:o}),!o&&Object(m.jsx)(b.a,{variant:"contained",color:"secondary",onClick:n,children:"Load more"})]})]})},v=n(141),g=n.n(v),k=n(140),w=n.n(k),y=function(){var t=Object(a.useState)(!1),e=Object(c.a)(t,2),n=e[0],o=e[1];Object(a.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[]);var r=function(){window.pageYOffset>document.documentElement.clientHeight?o(!0):o(!1)};return Object(m.jsx)(m.Fragment,{children:n&&Object(m.jsx)("div",{className:w.a.buttonScrollTop,children:Object(m.jsx)(b.a,{variant:"contained",color:"secondary",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),o(!1)},"aria-label":"to top",children:Object(m.jsx)(g.a,{})})})})},_=n(187),P=n(150),E=n(186),S=n.p+"static/media/pokedex.ef8b0336.png",C=Object(P.a)({palette:{primary:{main:"#ffffff"}}}),L=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],s=e[1],l=Object(a.useState)(""),u=Object(c.a)(l,2),f=u[0],d=u[1],j=Object(a.useState)(0),p=Object(c.a)(j,2),b=p[0],h=p[1],O=Object(a.useState)(!1),v=Object(c.a)(O,2),g=v[0],k=v[1];Object(a.useEffect)((function(){k(!0),r.a.fetchPokemons(b,30).then((function(t){var e=t.results;if(s((function(t){return[].concat(Object(o.a)(t),Object(o.a)(e))})),!(b<30)){var n=document.documentElement.clientHeight+document.documentElement.scrollTop-66;window.scrollTo({top:n,behavior:"smooth"})}})).finally((function(){return k(!1)}))}),[b]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(i.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginBottom:"16px",marginTop:"16px"},children:[Object(m.jsx)("img",{width:300,height:150,src:S,alt:"Pokedex"}),Object(m.jsx)(E.a,{theme:C,children:Object(m.jsx)(_.a,{type:"text",value:f,onChange:function(t){d(t.target.value)},label:"Search Pokemon",variant:"outlined",style:{marginTop:"14px",minWidth:"280px"}})})]}),Object(m.jsx)(x,{pokemons:function(){var t=f.toLowerCase().trim();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onLoadMore:function(){h((function(t){return t+30}))},isLoading:g}),Object(m.jsx)(y,{})]})}},48:function(t,e,n){"use strict";var o=n(71),c=n.n(o),a=n(72),r=n(73),i=n.n(r);function s(){return s=Object(a.a)(c.a.mark((function t(){var e,n,o,a,r=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:0,n=r.length>1&&void 0!==r[1]?r[1]:100,t.next=4,i.a.get("?offset=".concat(e,"&limit=").concat(n)).catch((function(t){return console.log("ERROR: ",t)}));case 4:return o=t.sent,a=o.data,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(){return(l=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/".concat(e)).catch((function(t){return console.log("ERROR: ",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.a.defaults.baseURL="https://pokeapi.co/api/v2/pokemon",e.a={fetchPokemons:function(){return s.apply(this,arguments)},fetchPokemon:function(t){return l.apply(this,arguments)}}}}]);
//# sourceMappingURL=home-page.de865b19.chunk.js.map