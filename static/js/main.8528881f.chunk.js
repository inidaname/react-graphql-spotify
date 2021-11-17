(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{22:function(e,t,n){e.exports={mainContainer:"Result_mainContainer__3ClPA",resultContainer:"Result_resultContainer__375Zh",artistsResult:"Result_artistsResult__FQzDS",actualResult:"Result_actualResult__3BcZ1",actualResultClicked:"Result_actualResultClicked__1q8RZ",albumContainer:"Result_albumContainer__3AAT7",albumsResult:"Result_albumsResult__3ei4o",subResult:"Result_subResult__2bNbB"}},42:function(e,t,n){e.exports={container:"App_container__1uyUS",header:"App_header__qkCOy"}},50:function(e,t,n){e.exports={header:"Header_header__1MOL-"}},51:function(e,t,n){e.exports={searchSpace:"Search_searchSpace__3Qp-T"}},52:function(e,t,n){e.exports={footer:"Footer_footer__BKhgK"}},53:function(e,t,n){e.exports={button:"Button_button__2cZ5P"}},65:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a,c=n(4),s=n.n(c),i=n(49),r=n.n(i),l=(n(65),n(9)),o=n(50),u=n.n(o),b=n(2),j=function(){return Object(b.jsx)("header",{className:u.a.header,children:Object(b.jsx)("h1",{children:"Music Search"})})},d=n(51),h=n.n(d),m=function(e){var t=e.values,n=e.handleChange,a=e.handleSubmit;return Object(b.jsxs)("form",{className:h.a.searchSpace,children:[Object(b.jsx)("label",{htmlFor:"search",children:"Search Here"}),Object(b.jsx)("input",{type:"search",onChange:function(e){return n(e.target.value)},value:t,name:"search",id:"search","aria-label":"Search by artist name",placeholder:"Search by artist name"}),Object(b.jsx)(C,{handleSubmit:a})]})},O=n(22),x=n.n(O),p=function(e){var t,n=e.data,a=Object(c.useState)({albums:[],artist:""}),s=Object(l.a)(a,2),i=s[0],r=s[1],o=Object(c.useState)(),u=Object(l.a)(o,2),j=u[0],d=u[1];return Object(b.jsxs)("section",{className:x.a.mainContainer,children:[Object(b.jsx)("h2",{children:"Search Result"}),Object(b.jsxs)("section",{className:x.a.resultContainer,children:[Object(b.jsx)("section",{className:x.a.artistsResult,children:null===(t=n.queryArtists)||void 0===t?void 0:t.map((function(e,t){return Object(b.jsxs)("div",{className:"".concat(x.a.actualResult," ").concat(j===t?x.a.actualResultClicked:""),onClick:function(){r({albums:null===e||void 0===e?void 0:e.albums,artist:null===e||void 0===e?void 0:e.name}),d(t),window.scroll({top:0,behavior:"smooth"})},children:[Object(b.jsx)("h3",{children:null===e||void 0===e?void 0:e.name}),Object(b.jsx)("img",{src:null===e||void 0===e?void 0:e.image,width:120,alt:null===e||void 0===e?void 0:e.name})]},"".concat(t,"-").concat(null===e||void 0===e?void 0:e.id))}))}),Object(b.jsxs)("div",{className:x.a.albumContainer,children:[Object(b.jsxs)("h3",{children:[i.artist&&"".concat(i.artist,"'s")," Album Lists"]}),Object(b.jsx)("section",{className:x.a.albumsResult,children:i&&i.albums.map((function(e,t){var n,a;return Object(b.jsxs)("div",{className:x.a.subResult,children:[Object(b.jsx)("img",{src:e.image,alt:e.name}),Object(b.jsx)("p",{children:(null===(n=e.name)||void 0===n?void 0:n.length)<=45?e.name:"".concat(null===(a=e.name)||void 0===a?void 0:a.slice(0,45)," ...")})]},"".concat(t,"-").concat(e.id))}))})]})]})]})},f=n(52),v=n.n(f),_=function(){return Object(b.jsx)("footer",{className:v.a.footer,children:"Built With React and Typescript"})},g=n(53),R=n.n(g),S=Object(c.createContext)({state:!1,setState:function(){}}),C=function(e){var t=e.handleSubmit,n=Object(c.useContext)(S).state;return Object(b.jsx)("button",{className:R.a.button,disabled:n,name:"search",onClick:function(e){e.preventDefault(),t()},children:"Start Search"})},y=n(33),N=n(54),k=n(84),w=(n(76),n(77)),A={},q=Object(k.a)(a||(a=Object(N.a)(["\n  query Artist($byName: String!) {\n    queryArtists(byName: $byName) {\n\t\t\tname\n\t\t\timage\n\t\t\tid\n\t\t\talbums {\n\t\t\t\tname\n\t\t\t\timage\n\t\t\t\tid\n        tracks {\n          id\n          name\n          preview_url\n          artists {\n            id\n            name\n          }\n        }\n\t\t\t}\n    }\n  }\n"])));var B=n(40),F=n(42),L=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),r=i[0],o=i[1],u=function(e){var t=Object(y.a)(Object(y.a)({},A),e);return w.a(q,t)}(),d=Object(l.a)(u,2),h=d[0],O=d[1],x=O.data,f=O.loading,v=O.error;return Object(c.useEffect)((function(){return o((function(){return f})),function(){}}),[f]),Object(b.jsx)(S.Provider,{value:{state:r,setState:o},children:Object(b.jsxs)(B.b,{children:[Object(b.jsxs)(B.a,{children:[Object(b.jsx)("title",{children:"Music Graphql Search"}),Object(b.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(b.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(b.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap",rel:"stylesheet"})]}),Object(b.jsxs)("main",{className:F.container,children:[Object(b.jsxs)("div",{className:F.header,children:[Object(b.jsx)(j,{}),Object(b.jsx)(m,{values:n,handleChange:a,handleSubmit:function(){h({variables:{byName:n}})}})]}),f&&Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"Loading Search Result"})}),v&&Object(b.jsx)("div",{children:v}),x&&Object(b.jsx)(p,{data:x})]}),Object(b.jsx)(_,{})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},T=n(83),M=n(85),Z=n(82),D=new T.a({uri:"https://spotify-graphql-server.herokuapp.com/graphql",cache:new M.a});r.a.render(Object(b.jsx)(Z.a,{client:D,children:Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(L,{})})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.8528881f.chunk.js.map