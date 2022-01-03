"use strict";(self.webpackChunkcredit_data_wiki=self.webpackChunkcredit_data_wiki||[]).push([[2619],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9198:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Abuse Score",sidebar_position:1},l=void 0,u={unversionedId:"fraud/sentilink/abuse-score",id:"fraud/sentilink/abuse-score",title:"Abuse Score",description:"The application identity is synthetic or the identity has previously been associated with fraudulent behaviors such as the purchase of authorized user tradelines. Range of score is from 0 to 1000, with higher values indicating a higher propensity for fraud. Typically, SentiLink recommends manual review for cases scoring above 750 for any of the four scores described above. This threshold typically corresponds to a cumulative precision of about 80%. However, this is dependent on a number of different factors, including the loan type, targeted audience, etc.",source:"@site/docs/fraud/sentilink/abuse-score.md",sourceDirName:"fraud/sentilink",slug:"/fraud/sentilink/abuse-score",permalink:"/credit-data-wiki/fraud/sentilink/abuse-score",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Abuse Score",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/credit-data-wiki/fraud/summary"},next:{title:"First Party Synthetic Score",permalink:"/credit-data-wiki/fraud/sentilink/first-party-synthetic-score"}},c=[{value:"Top 3 Reason Codes",id:"top-3-reason-codes",children:[],level:3},{value:"Data",id:"data",children:[],level:3}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The application identity is synthetic or the identity has previously been associated with fraudulent behaviors such as the purchase of authorized user tradelines. Range of score is from 0 to 1000, with higher values indicating a higher propensity for fraud. Typically, SentiLink recommends manual review for cases scoring above 750 for any of the four scores described above. This threshold typically corresponds to a cumulative precision of about 80%. However, this is dependent on a number of different factors, including the loan type, targeted audience, etc."),(0,i.kt)("h3",{id:"top-3-reason-codes"},"Top 3 Reason Codes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"R006")," - Whether the consumer is tied to an ITIN (individual taxpayer identification number)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"R014")," - Whether the consumer appears to have a better SSN"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"R011")," - How well the start time of the consumer's history aligns with the expected start time")),(0,i.kt)("h3",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eCBSV")," - Electronic consent-based signature verification (signature)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First Name")," - First Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Last Name")," - Last Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DOB")," - Date of Birth"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SSN")," - Social Security Number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EIN")," - Employer Identification Number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Address Line 1")," - Address Line 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Address Line 2")," - Address Line 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Country")," - Country"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"City")," - City"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State")," - State"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Zip Code")," - Zip Code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Phone")," - Phone"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Email")," - Email"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IP Address")," - IP Address associated with the application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Device ID")," - Device ID associated with application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Business Name")," - Business Name associated with application (if relevant)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Business URL")," - Business URL associated with application (if relevant)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lead Type")," - Customer acquisition channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Loan Amount")," - Loan amount requested in application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Loan Currency")," - The currency of the requested loan, default is USD"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Metadata")," - Any other data in JSON format")))}d.isMDXComponent=!0}}]);