(this["webpackJsonpspotify-clone1"]=this["webpackJsonpspotify-clone1"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),i=c.n(n),a=c(17),r=c.n(a),o=(c(53),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))}),l=c(10),j=(c(54),c(55),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("ca668946af884cd2861e2ec0d380bad3","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var d=function(){return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(s.jsx)("a",{href:j,children:"LOGIN WITH SPOTIFY"})]})},u=c(27),b=c.n(u);c(56),c(57),c(58);var O=function(e){var t=e.title,c=e.Icon;return Object(s.jsxs)("div",{className:"sidebarOption",children:[c&&Object(s.jsx)(c,{className:"sidebarOption__icon"}),c?Object(s.jsx)("h4",{children:t}):Object(s.jsx)("p",{children:t})]})},h=c(28),x=c.n(h),f=c(20),p=c.n(f),m=c(33),y=c.n(m),v=Object(n.createContext)(),_=function(e){var t=e.initialState,c=e.reducer,i=e.children;return Object(s.jsx)(v.Provider,{value:Object(n.useReducer)(c,t),children:i})},g=function(){return Object(n.useContext)(v)};var N=function(){var e,t=g(),c=Object(l.a)(t,2),n=c[0].playlist;return c[1],Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(s.jsx)(O,{Icon:x.a,title:"Home"}),Object(s.jsx)(O,{Icon:p.a,title:"Search"}),Object(s.jsx)(O,{Icon:y.a,title:"Your Library"}),Object(s.jsx)("br",{}),Object(s.jsx)("strong",{className:"sidebar__title",children:"PLAYLIST"}),Object(s.jsx)("hr",{}),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(s.jsx)(O,{title:e.name})}))]})},S=(c(64),c(65),c(82));var T=function(){var e,t=g(),c=Object(l.a)(t,2),n=c[0].user;return c[1],Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"heder__left",children:[Object(s.jsx)(p.a,{}),Object(s.jsx)("input",{placeholder:"Search For Artists, Songs, or Podcast",type:"text"})]}),Object(s.jsxs)("div",{className:"header__right",children:[Object(s.jsx)(S.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name}),Object(s.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})};c(66);var k=function(e){var t=e.track,c=e.playSong;return console.log(t),Object(s.jsxs)("div",{className:"songRow",onClick:function(){return c(t.id)},children:[Object(s.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(s.jsxs)("div",{className:"songRow__info",children:[Object(s.jsx)("h1",{children:t.name}),Object(s.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})},E=c(34),I=c.n(E),w=c(35),L=c.n(w),P=c(36),C=c.n(P);var Y=function(e){var t=e.spotify,c=g(),n=Object(l.a)(c,2),i=n[0].discover_weekly,a=n[1],r=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){a({type:"SET_ITEM",item:e.item}),a({type:"SET_PLAYING",playing:!0})}))}))};return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)(T,{spotify:t}),Object(s.jsxs)("div",{className:"body__info",children:[Object(s.jsx)("img",{src:null===i||void 0===i?void 0:i.images[0].url,alt:""}),Object(s.jsxs)("div",{className:"body__infoText",children:[Object(s.jsx)("strong",{children:"PLAYLIST"}),Object(s.jsx)("h2",{children:"Discover Weekly"}),Object(s.jsx)("p",{children:null===i||void 0===i?void 0:i.description})]})]}),Object(s.jsxs)("div",{className:"body__songs",children:[Object(s.jsxs)("div",{className:"body__icons",children:[Object(s.jsx)(I.a,{className:"body__shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcJZyENOWUFo7"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){a({type:"SET_ITEM",item:e.item}),a({type:"SET_PLAYING",playing:!0})}))}))}}),Object(s.jsx)(L.a,{fontSize:"large"}),Object(s.jsx)(C.a,{})]}),null===i||void 0===i?void 0:i.tracks.items.map((function(e){return Object(s.jsx)(k,{playSong:r,track:e.track})}))]})]})},A=(c(67),c(39)),F=c.n(A),R=c(38),M=c.n(R),U=c(40),z=c.n(U),G=c(37),J=c.n(G),W=c(41),B=c.n(W),D=c(80),H=c(81),K=c(42),Z=c.n(K),Q=c(43),V=c.n(Q);var X=function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer__left",children:[Object(s.jsx)("img",{className:"footer__logo",src:"",alt:""}),Object(s.jsxs)("div",{className:"footer__songInfo",children:[Object(s.jsx)("h4",{children:"Yeah!"}),Object(s.jsx)("p",{children:"Usher"})]})]}),Object(s.jsxs)("div",{className:"footer__center",children:[Object(s.jsx)(J.a,{className:"footer__green"}),Object(s.jsx)(M.a,{className:"footer__icon"}),Object(s.jsx)(F.a,{fontSize:"large",className:"footer__icon"}),Object(s.jsx)(z.a,{className:"footer__icon"}),Object(s.jsx)(B.a,{className:"footer__green"})]}),Object(s.jsx)("div",{className:"footer__right",children:Object(s.jsxs)(D.a,{container:!0,spacing:2,children:[Object(s.jsx)(D.a,{item:!0,children:Object(s.jsx)(Z.a,{})}),Object(s.jsx)(D.a,{item:!0,children:Object(s.jsx)(V.a,{})}),Object(s.jsx)(D.a,{items:!0,xs:!0,children:Object(s.jsx)(H.a,{"aria-labelleby":"continuous-slider"})})]})})]})};var q=function(e){var t=e.spotify;return Object(s.jsxs)("div",{className:"player",children:[Object(s.jsxs)("div",{className:"player__body",children:[Object(s.jsx)(N,{}),Object(s.jsx)(Y,{spotify:t})]}),Object(s.jsx)(X,{})]})},$=new b.a;var ee=function(){var e=g(),t=Object(l.a)(e,2),c=t[0],i=c.user,a=c.token,r=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(r({type:"SET_TOKEN",token:t}),$.setAccessToken(t),$.getMe().then((function(e){r({type:"SET_USER",user:e})})),$.getUserPlaylists().then((function(e){r({type:"SET_PLAYLISTS",playlists:e})})))}),[]),console.log("hello world",i),console.log("hello world",a),Object(s.jsx)("div",{className:"app",children:a?Object(s.jsx)(q,{spotify:$}):Object(s.jsx)(d,{})})},te=c(12),ce=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:t.playlists});default:return e}};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(_,{initialState:{user:null,playlists:[],playing:!1,item:null},reducer:ce,children:Object(s.jsx)(ee,{})})}),document.getElementById("root")),o()}},[[68,1,2]]]);
//# sourceMappingURL=main.f563fab7.chunk.js.map