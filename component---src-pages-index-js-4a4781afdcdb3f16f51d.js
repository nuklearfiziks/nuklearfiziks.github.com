(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{230:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(56),o=n(308),l=n.n(o),c=n(252),s=n.n(c),u=n(58),m=n(57),d=n(54);n(266),n.d(e,"pageQuery",function(){return h}),e.default=function(t){var e=t.data.site.siteMetadata.title,n=t.data.allMarkdownRemark.edges,a=t.location;return i.a.createElement(m.a,{location:a,title:e},i.a.createElement(s.a,{title:e}),i.a.createElement(u.a,null),n.map(function(t){var e=t.node,n=l()(e,"frontmatter.title")||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(r.a,{style:{boxShadow:"none"},to:e.fields.slug},n)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))};var h="3719820578"},266:function(t,e,n){},54:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s});var a=n(244),i=n.n(a),r=n(243),o=n.n(r);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#004e2b",textShadow:"none",backgroundImage:"none"}}};var l=new i.a(o.a),c=l.rhythm,s=l.scale},55:function(t,e,n){var a;t.exports=(a=n(66))&&a.default||a},56:function(t,e,n){"use strict";var a=n(1),i=n.n(a),r=n(0),o=n.n(r),l=n(53),c=n.n(l);n.d(e,"a",function(){return c.a}),n(55),i.a.createContext({}),o.a.object,o.a.string.isRequired,o.a.func,o.a.func},57:function(t,e,n){"use strict";n(46);var a=n(70),i=n.n(a),r=n(1),o=n.n(r),l=n(56),c=(n(242),n(31)),s=n.n(c),u=n(241),m=n(236),d=n(62),h=n.n(d),f=function(t){function e(e){var n;return(n=t.call(this,e)||this).ref=o.a.createRef(),n.lastKnownScrollPosition=0,n.ticking=!1,n.parentNode=e.parentNode,n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.node=document.querySelector("."+this.parentNode);var t=window,e=t.innerHeight,n=t.innerWidth,a=n<980,i=m.c(this.ref.current).attr("width",n).attr("height",e);this.svg=i;var r=a?[n/2,.75*e]:[n/3,e/3],o=r[0],l=r[1],c=m.b().clamp(!0).range([.75*n,n]).domain([n,.5*n]),s=m.b().clamp(!0).range([l,e]).domain([5*e,l]),d=i.selectAll("circle").data(Array(100).fill(null)).enter().append("circle").attr("fill",function(t,e){return e%2?"#C8AD93":"black"}).attr("cx",function(t,e){return a?o:o-c(n)/(e+1)}).attr("cy",function(t,n){return a?l+s(e)/(n+1):l}).attr("r",function(t,n){return e/(n+1)});this.circles=d,this.cy=l,this.slopeY=s,this.innerHeight=e,a?(this.scrollScale=m.b().domain(),this.scrollListener=this.node.addEventListener("scroll",this.onScroll.bind(this))):m.c("body").on("mousemove",function(){var t=m.a,e=t.pageX,n=t.pageY;d.attr("cx",function(t,n){return o-c(e)/(n+1)}).attr("cy",function(t,e){return l-n/(e+1)})}),this.resizeListener=window.addEventListener("resize",u(this.onResize.bind(this),500))},n.onScroll=function(t){var e=this;this.delta=this.lastKnownScrollPosition-t.target.scrollTop,this.lastKnownScrollPosition=t.target.scrollTop,this.ticking||(window.requestAnimationFrame(function(){e.cy-=e.delta,e.circles.attr("cy",function(t,n){return e.cy+e.slopeY(e.innerHeight)/(n+1)}),e.ticking=!1}),this.ticking=!0)},n.onResize=function(){this.svg.selectAll("circle").remove(),m.c("body").on("mousemove",null),m.c(window).on("scroll",null),this.componentDidMount()},n.render=function(){return o.a.createElement("svg",{ref:this.ref,className:h.a.spiral})},e}(r.PureComponent),p=n(54),g=n(60),k=n.n(g);e.a=function(t){var e,n=t.location,a=t.children,c=(i()(t,["location","children"]),"Miss Andi N. Fiziks");return e="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(p.b)(1.2),{marginBottom:Object(p.a)(1.5),marginTop:0,color:"#004e2b"}),className:k.a.main__header},o.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},c)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(p.a)(-1)}},o.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},c)),o.a.createElement(r.Fragment,null,o.a.createElement(f,{parentNode:k.a.outer_container}),o.a.createElement("div",{className:k.a.outer_container},e,a))}},58:function(t,e,n){"use strict";var a=n(1),i=n.n(a),r=(n(249),n(248),n(247)),o=n(246),l=n(245),c=n(65),s=n.n(c),u=n(63),m=n.n(u),d=n(54),h=[{url:"https://twitter.com/nuklearfiziks",icon:o.twitter,title:"Twitter: @nuklearfiziks",text:"@nuklearfiziks"},{url:"https://mastodon.social/@nuklearfiziks",icon:{viewBox:"0 0 216.4144 232.00976",children:[{name:"path",attribs:{fill:"#2b90d9",d:"M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"}},{name:"path",attribs:{fill:"#fff",d:"M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"}}]},title:"Mastodon: @nuklearfiziks",text:"@nuklearfiziks\n@mastodon.social"},{url:"https://instagram.com/nuklearfiziks",icon:l.instagram,title:"Instagram: @nuklearfiziks (personal photos)",text:"@nuklearfiziks"},{url:"https://instagram.com/nuklearphotos",icon:l.instagram,title:"Instagram: @nuklearphotos (pro photo work)",text:"@nuklearphotos"}];e.a=function(){return i.a.createElement("div",{className:s.a.bio},i.a.createElement("img",{className:s.a.pic,src:m.a,alt:"Andi N. Fiziks",style:{marginRight:Object(d.a)(.5),marginBottom:0,width:Object(d.a)(6),height:Object(d.a)(6)}}),i.a.createElement("ul",{className:s.a.list__container},h.map(function(t){return i.a.createElement("li",{key:t.title,className:s.a.list__item},i.a.createElement("a",{href:t.url,className:s.a.list__link},i.a.createElement(r.Icon,{icon:t.icon,title:t.title,size:48}),i.a.createElement("div",{className:s.a.item__text},t.text)))})))}},60:function(t,e,n){t.exports={outer_container:"layout-module--outer_container--aoImE",main__header:"layout-module--main__header--izA69"}},62:function(t,e,n){t.exports={spiral:"spiral-module--spiral--2XIsO"}},63:function(t,e,n){t.exports=n.p+"static/profile-pic-0f40015ea9b0800f570451548f03a294.jpg"},65:function(t,e,n){t.exports={bio:"Bio-module--bio--36v_w",pic:"Bio-module--pic--1nJwg",list__container:"Bio-module--list__container--3vmrn",list__item:"Bio-module--list__item--3w767",list__link:"Bio-module--list__link--2r9J9",item__text:"Bio-module--item__text--2pYYi"}},66:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(0),o=n.n(r),l=n(41),c=n(5),s=function(t){var e=t.location,n=c.a.getResourcesForPathname(e.pathname);return i.a.createElement(l.a,{location:e,pageResources:n})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-4a4781afdcdb3f16f51d.js.map