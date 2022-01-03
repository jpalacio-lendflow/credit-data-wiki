"use strict";(self.webpackChunkcredit_data_wiki=self.webpackChunkcredit_data_wiki||[]).push([[1937],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4467:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"Social",sidebar_position:7},c=void 0,u={unversionedId:"fraud/socure/social",id:"fraud/socure/social",title:"Social",description:"The social module returns information about relevant external web sites discovered when evaluating user-submitted identity information. If a user has a presence at one of more than 300 sites monitored by Social Media, links to those profiles will be returned in the response along with reason codes that summarize the analysis.",source:"@site/docs/fraud/socure/social.md",sourceDirName:"fraud/socure",slug:"/fraud/socure/social",permalink:"/credit-data-wiki/fraud/socure/social",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Social",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Alert List",permalink:"/credit-data-wiki/fraud/socure/alert-list"},next:{title:"Feedback",permalink:"/credit-data-wiki/fraud/socure/feedback"}},l=[],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The social module returns information about relevant external web sites discovered when evaluating user-submitted identity information. If a user has a presence at one of more than 300 sites monitored by Social Media, links to those profiles will be returned in the response along with reason codes that summarize the analysis."),(0,i.kt)("p",null,"The social module differs from other modules in two key areas: it does not return a score, and the profilesFound object is presented before the reasonCodes object. For reference, in other responses, reason codes are presented first, followed by scores and any additional modules"))}f.isMDXComponent=!0}}]);