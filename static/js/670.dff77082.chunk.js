"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[670],{854:function(e,t,r){var n=r(402),a=r(184);t.Z=function(){return(0,a.jsx)(n.VL,{visible:!0,height:"280",width:"280",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})}},670:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(439),a=r(791),c=r(854),i=r(243),o=function(e){var t=new URLSearchParams({api_key:"2bcb7fdd81c3309c5e646690433e3287"});try{return i.Z.get("".concat("https://api.themoviedb.org/3/movie","/").concat(e,"/reviews?").concat(t))}catch(r){throw new Error(r.message)}},s=(r(724),r(184)),u=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],i=t[1],u=(0,a.useState)(!1),l=(0,n.Z)(u,2),h=l[0],d=l[1],f=(0,a.useState)(""),p=(0,n.Z)(f,2),v=p[0],w=p[1],m=(0,a.useState)(""),g=(0,n.Z)(m,2),x=g[0],S=g[1];return(0,a.useEffect)((function(){!function(){var e=JSON.parse(window.localStorage.getItem("movieIdKey"));e&&S(e)}(),d(!0),x&&o(x).then((function(e){var t=e.data;i(t.results)})).catch((function(e){return w(e)})).finally((function(){d(!1)}))}),[x]),(0,s.jsxs)("div",{children:[h&&(0,s.jsx)(c.Z,{}),v&&(0,s.jsx)("div",{children:"Something went wrong. Try again later"}),(0,s.jsx)("ul",{children:x&&r.map((function(e){var t=e.author,r=e.content;return(0,s.jsxs)("div",{className:"FilmGallery",children:[(0,s.jsxs)("h3",{children:["Author: ",t]}),(0,s.jsxs)("p",{children:["Review: ",r]})]},t)}))})]})}},724:function(){}}]);
//# sourceMappingURL=670.dff77082.chunk.js.map