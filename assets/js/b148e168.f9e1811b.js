"use strict";(self.webpackChunkcredit_data_wiki=self.webpackChunkcredit_data_wiki||[]).push([[2960],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6072:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=["components"],o={title:"Business Trading",sidebar_position:2},d=void 0,c={unversionedId:"business-credit/dun-&-bradstreet/payment-insights/business-trading",id:"business-credit/dun-&-bradstreet/payment-insights/business-trading",title:"Business Trading",description:"Paydex Score",source:"@site/docs/business-credit/dun-&-bradstreet/payment-insights/business-trading.md",sourceDirName:"business-credit/dun-&-bradstreet/payment-insights",slug:"/business-credit/dun-&-bradstreet/payment-insights/business-trading",permalink:"/credit-data-wiki/business-credit/dun-&-bradstreet/payment-insights/business-trading",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Business Trading",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Industry Norms",permalink:"/credit-data-wiki/business-credit/dun-&-bradstreet/payment-insights/industry-norms"},next:{title:"Derived Trade Risk Insights",permalink:"/credit-data-wiki/business-credit/dun-&-bradstreet/derived-trade-insights/derived-trade-risk-insights"}},l=[{value:"Paydex Score",id:"paydex-score",children:[],level:2},{value:"Three Months Prior Paydex Score",id:"three-months-prior-paydex-score",children:[],level:2},{value:"Payment Days",id:"payment-days",children:[],level:2},{value:"Payment Behavior",id:"payment-behavior",children:[],level:2},{value:"Paydex Score History",id:"paydex-score-history",children:[],level:2},{value:"Worst Pay Manner Past Due",id:"worst-pay-manner-past-due",children:[],level:2},{value:"Split Pay Manner Past Due",id:"split-pay-manner-past-due",children:[],level:2},{value:"Payments By Credit Range",id:"payments-by-credit-range",children:[],level:2},{value:"Discount Terms Summary",id:"discount-terms-summary",children:[],level:2}],u={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"paydex-score"},"Paydex Score"),(0,a.kt)("p",null,"The PAYDEX\xae score is a business credit score that\u2019s generated by Dun and Bradstreet (D&B). Their model analyzes a business\u2019 payment performance (i.e., if it pays its bills on time) and gives it a numerical score from 1 to 100, with 100 signifying a perfect payment history. To determine your business\u2019s PAYDEX score, Dun & Bradstreet gathers data from the suppliers and vendors with which you do business over a rolling 12-month period. Each supplier/vendor is considered a tradeline account, and the payments you make to that supplier/vendor is considered a payment experience. According to Dun & Bradstreet, two tradelines with at least three credit experiences are needed for a PAYDEX score; however, in Nav\u2019s experience, business owners need at least three tradelines reported to create a score. PAYDEX scoring is dollar-weighted, which means that each payment experience is weighted in terms of the number of transactions and the overall dollar value of those transactions."),(0,a.kt)("h2",{id:"three-months-prior-paydex-score"},"Three Months Prior Paydex Score"),(0,a.kt)("p",null,"A calculated score indicating the payment habits of the entity based on trade experiences obtained from its suppliers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A score of 81-100 indicates the entity has paid their bills ahead of the due date."),(0,a.kt)("li",{parentName:"ul"},"A score of 80 indicates the entity has paid them on time."),(0,a.kt)("li",{parentName:"ul"},"Scores above 0 and below 80 indicate that they have paid their bills late (the lower the score, the more days late)."),(0,a.kt)("li",{parentName:"ul"},"A Score of 0 indicates the entity has paid their bills 180 days or more late.")),(0,a.kt)("h2",{id:"payment-days"},"Payment Days"),(0,a.kt)("p",null,"The number of days on average that the entity has paid its suppliers. This is the Paydex converted to days."),(0,a.kt)("h2",{id:"payment-behavior"},"Payment Behavior"),(0,a.kt)("p",null,"The details of the likelihood that the entity will pay its suppliers."),(0,a.kt)("h2",{id:"paydex-score-history"},"Paydex Score History"),(0,a.kt)("p",null,"Records subject's historical Paydex Scores. A calculated element summarizing the payment habits of a subject based on trade experiences obtained from its suppliers."),(0,a.kt)("h2",{id:"worst-pay-manner-past-due"},"Worst Pay Manner Past Due"),(0,a.kt)("p",null,"Records the most serious aging period presently identified from all of the organization's open accounts."),(0,a.kt)("h2",{id:"split-pay-manner-past-due"},"Split Pay Manner Past Due"),(0,a.kt)("p",null,"Records the trading relationships between a subject and its suppliers that are Satisfactory OR whose payment manner indicates the subject has been paying within terms, at least to some degree, and each split payment manner that includes slowness (i.e., Anticipate-Slow, Discount-Slow, Prompt-Slow) has been counted as one half and each payment manner that is exclusively within terms (i.e., Anticipate, Discount, Prompt, Anticipate-Discount, Anticipate-Prompt, Discount-Prompt) has been counted as one."),(0,a.kt)("h2",{id:"payments-by-credit-range"},"Payments By Credit Range"),(0,a.kt)("p",null,"Records summary that is broken down into contiguous ranges depicting how much was extended to the subject in the form of goods and services in expectation of payment within each of the specified ranges, e.g., Total Credit Amount = 180,000 within the 50,000 to 99,999 range, where there were 3 experiences each of which had a credit amount of 60,000 that fit within that 50,000 to 99,999 range."),(0,a.kt)("h2",{id:"discount-terms-summary"},"Discount Terms Summary"),(0,a.kt)("p",null,"Records the results of summarizing the payments made by the subject (i.e., the purchaser) by credits offering discount terms."))}p.isMDXComponent=!0}}]);