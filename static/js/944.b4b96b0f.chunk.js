"use strict";(self.webpackChunkgoit_react_hw_05_movies_kf=self.webpackChunkgoit_react_hw_05_movies_kf||[]).push([[944,673],{944:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),c=e(791),i=e(422),u=e(240),a=e(673),o=e(184);function s(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,c.useEffect)((function(){(0,i.wr)().then((function(n){return s(n.results)}))}),[]),(0,o.jsx)(u.Z,{title:"Trending today",children:(0,o.jsx)(a.default,{moviesArray:e})})}},909:function(n,t,e){e.d(t,{Z:function(){return i}});e(791);var r="Container_container__VVOCq",c=e(184);function i(n){var t=n.children;return(0,c.jsx)("div",{className:r,children:t})}},673:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(501),c=e(871),i="MovieList_movieList__uFrOZ",u="MovieList_movieItem__qe2ZM",a=e(184);function o(n){var t=n.moviesArray,e=(0,c.TH)();return(0,a.jsx)("ul",{className:i,children:null===t||void 0===t?void 0:t.map((function(n){return(0,a.jsx)("li",{className:u,children:(0,a.jsx)(r.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title||n.name})},n.id)}))})}},240:function(n,t,e){e.d(t,{Z:function(){return o}});e(791);var r=e(909),c="Section_section__Z2PLw",i="Section_title__SLHvV",u="Section_hidden__x1r60",a=e(184);function o(n){var t=n.title,e=n.children;return(0,a.jsx)("section",{className:c,children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("h1",{className:t?i:u,children:t}),e]})})}},422:function(n,t,e){e.d(t,{Bt:function(){return v},Mc:function(){return l},Xd:function(){return f},wr:function(){return o},y:function(){return d}});var r=e(861),c=e(757),i=e.n(c),u="5e1fcd47f20766d1df18c73f06c8901a",a="https://api.themoviedb.org/3/";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"trending/all/day?api_key=").concat(u)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"search/movie?api_key=").concat(u,"&query=").concat(t,"&include_adult=false")).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"?api_key=").concat(u)).then((function(n){return n.ok?n.json():(alert("No detailed information"),null)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(u)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(u)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=944.b4b96b0f.chunk.js.map