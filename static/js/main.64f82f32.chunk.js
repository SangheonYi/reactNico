(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{37:function(e,t,s){},60:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(29),r=s.n(i),c=s(9),o=s(2),l=(s(37),s(1));var u=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},m=s(17),j=s.n(m),d=s(30),p=s(11),b=s(12),h=s(14),v=s(13),O=s(31),x=s.n(O),g=s(5),f=s.n(g);s(60);function y(e){var t=e.id,s=e.year,n=e.title,a=e.summary,i=e.poster,r=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(c.b,{to:{pathname:"movie/".concat(t),state:{year:s,title:n,summary:a,poster:i,genres:r}},children:[Object(l.jsx)("img",{src:i,alt:n,title:n}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:n}),Object(l.jsx)("h5",{className:"movie__year",children:s}),Object(l.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})}y.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var _=y,N=(s(64),function(e){Object(h.a)(s,e);var t=Object(v.a)(s);function s(e){var n;return Object(p.a)(this,s),(n=t.call(this,e)).state={isLoading:!0,movies:[]},n.getMovie=Object(d.a)(j.a.mark((function e(){var t,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,n.setState({movies:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),console.log("hello"),n}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return console.log("Home called"),Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));s(65);var w=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(c.b,{to:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/about",children:"About"})]})},k=function(e){Object(h.a)(s,e);var t=Object(v.a)(s);function s(){return Object(p.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;console.log(t.state),void 0==t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),s}(a.a.Component);var q=function(){return console.log("App called"),Object(l.jsxs)(c.a,{children:[Object(l.jsx)(w,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/movie/:id",component:k})]})};r.a.render(Object(l.jsx)(q,{}),document.getElementById("potato"))}},[[66,1,2]]]);
//# sourceMappingURL=main.64f82f32.chunk.js.map