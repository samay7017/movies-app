(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{54:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var i,c,r,o,s,a,l,d,x,j,p,b,h,u,O,f,g,v=t(1),m=t(23),w=t.n(m),y=t(10),k=t.n(y),S=t(24),T=t(5),R=t(2),z=t(3),D=t(0),M=z.a.div(i||(i=Object(R.a)(["\ndisplay:flex;\nflex-direction: column;\npadding:10px;\nwidth:230px;\nborder-radius: 3px;\nmargin:30px 20px;\n\ncursor: pointer;\nbox-shadow : 3px 5px 3px 2px #5555;\n"]))),A=z.a.img(c||(c=Object(R.a)(["\nheight: 320px;\nborder-radius: 3px;\noutline: 2px solid white"]))),C=z.a.span(r||(r=Object(R.a)(["\nfont-size: 14px;\nmargin:10px 0px;\nfont-weight: bold;\nwhite-space : nowrap;\ntext-overflow: ellipsis;\noverflow : hidden;\n"]))),P=z.a.div(o||(o=Object(R.a)(["\n    display : flex;\n    margin: 10px 0px;\n    flex-direction: row;\n    justify-content : space-between;\n\n"]))),Y=function(e){var n=e.movie,t=n.Title,i=n.Year,c=n.imdbID,r=n.Type,o=n.Poster;return Object(D.jsxs)(M,{onClick:function(){e.onMovieSelect(c)},children:[Object(D.jsx)(A,{src:o}),Object(D.jsxs)(C,{children:[t," "]}),Object(D.jsxs)(P,{children:[Object(D.jsxs)("span",{children:[" Year :",i]}),Object(D.jsxs)("span",{children:["Type: ",r]})]})]})},I=t(8),B=t.n(I),E=z.a.div(s||(s=Object(R.a)(["\n    display: flex;\n    flex-direction: row;\n    margin: 20px;\n    padding: 20px 30px;\n    justify-content : center;\n    border-bottom: 1px solid lightgray;\n    box-shadow: 0px 0px 10px 7px gray;\n    border-radius : 3px;\n"]))),G=z.a.img(a||(a=Object(R.a)(["\nborder: 5px solid black;\noutline : 5px solid grey;\nwidth: 220px;\nborder-radius : 3px;\nheight: 300px;\n"]))),J=z.a.div(l||(l=Object(R.a)(["\n    display:flex;\n    margin:20px;\n    flex-direction: column;\n"]))),L=z.a.span(d||(d=Object(R.a)(["\n    font-size: 18px;\n    font weight : 500;\n    color: black;\n    margin:5px 15px;\n    text-transform : capitalize;\n    text-overflow:ellipsis;\n    overflow: hidden;\n"]))),K=z.a.span(x||(x=Object(R.a)(["\n    font-size:22px;\n    font-weight:600;\n    color: black;\n    margin: 15px;\n    white-space:nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-transform: capitalize;\n"]))),X=z.a.span(j||(j=Object(R.a)(["\nfont-size:16px;\nfont-weight:600;\ncolor:black;\nbackground:lightgrey;\nheight:fit-content;\npadding:8px;\nborder-radius:50%;\ncursor:pointer;\nopacity:0.8;\n\n"]))),q=function(e){var n=e.selectedMovie,t=Object(v.useState)(),i=Object(T.a)(t,2),c=i[0],r=i[1];return Object(v.useEffect)((function(){B.a.get("https://www.omdbapi.com/?i=".concat(n,"&apiKey=4621eb20")).then((function(e){r(e.data)}))}),[n]),Object(D.jsxs)(E,{children:[Object(D.jsx)(G,{src:null===c||void 0===c?void 0:c.Poster}),Object(D.jsxs)(J,{children:[Object(D.jsx)(K,{children:null===c||void 0===c?void 0:c.Title}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Year "})," : ",null===c||void 0===c?void 0:c.Year]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"IMDB Rating "}),": ",null===c||void 0===c?void 0:c.imdbRating]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Runtime"})," : ",null===c||void 0===c?void 0:c.Runtime]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Type "}),": ",null===c||void 0===c?void 0:c.Type]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Genre"})," : ",null===c||void 0===c?void 0:c.Genre]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Plot "}),": ",null===c||void 0===c?void 0:c.Plot]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Actors "}),": ",null===c||void 0===c?void 0:c.Actors]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Director"})," : ",null===c||void 0===c?void 0:c.Director]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Released "}),": ",null===c||void 0===c?void 0:c.Released]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Rated "}),": ",Object(D.jsx)("span",{children:null===c||void 0===c?void 0:c.Rated})]}),Object(D.jsxs)(L,{children:[Object(D.jsx)("b",{children:"Language"}),": ",Object(D.jsx)("span",{children:null===c||void 0===c?void 0:c.Language})]})]}),Object(D.jsx)(X,{children:"X"})]})},F=t.p+"static/media/final.ffe2ea29.jpg",H=z.a.div(p||(p=Object(R.a)(["\ndisplay:flex;\nflex-direction: column;\n"]))),N=z.a.div(b||(b=Object(R.a)(["\ndisplay:flex;\nflex-direction: row;\nbackground-color: black;\ncolor:white;\npadding:5px;\njustify-content:space-between;\nmargin:0;\nheight:40px"]))),Q=z.a.div(h||(h=Object(R.a)(["\ndisplay:flex;\nflex-direction: row;\nalign-items:center;\npadding:5px;\njustify-content: center"]))),U=z.a.img(u||(u=Object(R.a)(["\nmargin:0px;\nwidth:35px;\nheight:35px;\nmargin-right :10px"]))),V=z.a.form(O||(O=Object(R.a)(["\nalign-items: center;\njustify-content: center;\ndisplay: flex;\nflex-direction : row;\nmargin-right:30px;\n& img{\n    width: 35px;\n    height:35px;\n    margin-right:10px;\n}\n& input{\n    height: 20px;\n    border-radius: 3px;\n    border: 2px solid black;\n    outline: 1px solid white;\n}\n& button{\n    height: 25px;\n    margin-left: 15px;\n\n    border: 2px solid black;\n    border-radius: 2px;\n    outline : 1px solid white;\n}\n"]))),W=z.a.div(f||(f=Object(R.a)(["\ndisplay:flex;\nflex-direction: row;\n\njustify-content: center;\nalign-items:center;\n& ul{\n    display:flex;\n    flex-direction: row;\n    align-items : center;\n    justify-content : center;\n    list-style: none;\n    \n    \n\n}\n& li{\n    margin: 20px;\n    cursor: pointer;\n}"]))),Z=z.a.div(g||(g=Object(R.a)(["\n    display:flex;\n    flex-direction: row;\n    flex-wrap:wrap;\n    padding: 30px;\n    justify-content : space-evenly;\n"]))),$=function(){var e=Object(v.useState)(),n=Object(T.a)(e,2),t=n[0],i=n[1],c=Object(v.useState)(),r=Object(T.a)(c,2),o=r[0],s=r[1],a=Object(v.useState)(),l=Object(T.a)(a,2),d=l[0],x=l[1],j=Object(v.useState)([]),p=Object(T.a)(j,2),b=p[0],h=p[1],u=function(){var e=Object(S.a)(k.a.mark((function e(n){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("http://www.omdbapi.com/?s=".concat(n,"&apikey=4621eb20"));case 2:t=e.sent,h(t.data.Search);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(D.jsxs)(H,{children:[Object(D.jsxs)(N,{children:[Object(D.jsxs)(Q,{children:[Object(D.jsx)(U,{src:"./icons/header.png"}),Object(D.jsx)("h4",{children:" The Carnival App "})]}),Object(D.jsx)(W,{children:Object(D.jsxs)("ul",{children:[Object(D.jsxs)("li",{children:[" ",Object(D.jsx)("a",{href:"/",style:{textDecoration:"none",color:"white"},children:"About us "})]}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"/",style:{textDecoration:"none",color:"white"},children:"Contact "})})]})}),Object(D.jsxs)(V,{children:[Object(D.jsx)("img",{src:"./icons/searching.png"}),Object(D.jsx)("input",{type:"text",placeholder:"Search Movie",value:t,onChange:function(e){clearTimeout(o),i(e.target.value);var n=setTimeout((function(){u(e.target.value)}),500);s(n)}}),Object(D.jsx)("button",{type:"submit",children:"search"})]})]}),d&&Object(D.jsx)(q,{selectedMovie:d}),Object(D.jsx)(Z,{children:(null===b||void 0===b?void 0:b.length)?b.map((function(e,n){return Object(D.jsx)(Y,{movie:e,onMovieSelect:x},n)})):Object(D.jsx)("img",{src:F,width:"100%",height:"100%"})})]})};t(54);w.a.render(Object(D.jsx)($,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.abe47cbb.chunk.js.map