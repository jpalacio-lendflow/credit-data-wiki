"use strict";(self.webpackChunkcredit_data_wiki=self.webpackChunkcredit_data_wiki||[]).push([[6967],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5636:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Feedback",sidebar_position:2},u=void 0,d={unversionedId:"document-verification/socure/feedback",id:"document-verification/socure/feedback",title:"Feedback",description:"The feedback endpoint enables you to send transaction data to Socure.",source:"@site/docs/document-verification/socure/feedback.md",sourceDirName:"document-verification/socure",slug:"/document-verification/socure/feedback",permalink:"/credit-data-wiki/document-verification/socure/feedback",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Feedback",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Document Verification",permalink:"/credit-data-wiki/document-verification/socure/document-verification"},next:{title:"Reason Codes",permalink:"/credit-data-wiki/document-verification/socure/reason-codes"}},c=[{value:"referenceId",id:"referenceid",children:[],level:3},{value:"Initial Decision",id:"initial-decision",children:[],level:3},{value:"Final Decision",id:"final-decision",children:[],level:3},{value:"Final Fraud Outcome",id:"final-fraud-outcome",children:[],level:3},{value:"Fraud Reported Date",id:"fraud-reported-date",children:[],level:3},{value:"Fraud Type",id:"fraud-type",children:[],level:3},{value:"Loss Amount",id:"loss-amount",children:[],level:3},{value:"Channel",id:"channel",children:[],level:3},{value:"Manual Review",id:"manual-review",children:[],level:3},{value:"Step Up Auth",id:"step-up-auth",children:[],level:3},{value:"Order Amount",id:"order-amount",children:[],level:3},{value:"Requested Loan Amount",id:"requested-loan-amount",children:[],level:3},{value:"Credit Limit",id:"credit-limit",children:[],level:3},{value:"Account Creation Date",id:"account-creation-date",children:[],level:3},{value:"Previous Order Count",id:"previous-order-count",children:[],level:3},{value:"Last Order Date",id:"last-order-date",children:[],level:3},{value:"First Payment Date",id:"first-payment-date",children:[],level:3},{value:"Last Payment Date",id:"last-payment-date",children:[],level:3},{value:"Max Payment",id:"max-payment",children:[],level:3},{value:"Cleared Payments Sum",id:"cleared-payments-sum",children:[],level:3},{value:"Returned Payments Sum",id:"returned-payments-sum",children:[],level:3},{value:"Delinquency Bucket",id:"delinquency-bucket",children:[],level:3},{value:"Oldest Tradeline",id:"oldest-tradeline",children:[],level:3},{value:"Authorized User Count",id:"authorized-user-count",children:[],level:3}],s={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The feedback endpoint enables you to send transaction data to Socure."),(0,i.kt)("h3",{id:"referenceid"},"referenceId"),(0,i.kt)("p",null,"The Reference ID is an identifier unique to this transaction."),(0,i.kt)("h3",{id:"initial-decision"},"Initial Decision"),(0,i.kt)("p",null,"The decision was made prior or simultaneously with the decision to approve an applicant applying for a product."),(0,i.kt)("h3",{id:"final-decision"},"Final Decision"),(0,i.kt)("p",null,"The decision was made after the applicant was approved for an account"),(0,i.kt)("h3",{id:"final-fraud-outcome"},"Final Fraud Outcome"),(0,i.kt)("p",null,"Identifies whether a transaction was determined to be fraudulent based on an application's current status. Socure uses this information to train our models and inform fraud rate variables"),(0,i.kt)("h3",{id:"fraud-reported-date"},"Fraud Reported Date"),(0,i.kt)("p",null,"Date when fraudulent activity was reported"),(0,i.kt)("h3",{id:"fraud-type"},"Fraud Type"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1st party - 1 - Products and Services Fraud - Credit Repair, Bust Out"),(0,i.kt)("li",{parentName:"ul"},"1st party - 2 - Relationship and Trust Fraud - Money Mules, Work from Home Scams, Romance Scams"),(0,i.kt)("li",{parentName:"ul"},"1st party - 3 - Embezzlement - Employee Fraud"),(0,i.kt)("li",{parentName:"ul"},"1st party - 4 - False Claim - True Name fraud"),(0,i.kt)("li",{parentName:"ul"},"1st party - 5 - Synthetic ID - Person Doesn't Exist - Fake Identity"),(0,i.kt)("li",{parentName:"ul"},"Account Take Over - 6 - Account Take over with compromised credentials - Victim's phone, email or other authentication sources compromised"),(0,i.kt)("li",{parentName:"ul"},"3rd party - 10 - Origination fraud with compromised credentials - Victim's phone, email or other authentication sources compromised"),(0,i.kt)("li",{parentName:"ul"},"3rd party - 11 - Impersonated Authorized Party (Note: Default 3rd party fraud type)"),(0,i.kt)("li",{parentName:"ul"},"3rd party - 12 - Physical Alteration - Selfie Spoofing, Selfie Mismatch"),(0,i.kt)("li",{parentName:"ul"},"3rd party - 13 - Digital Payment (Note: Typically not applicable)"),(0,i.kt)("li",{parentName:"ul"},"3rd party - 14 - Physical Forgery/Counterfeit - Fake Documents submitted")),(0,i.kt)("h3",{id:"loss-amount"},"Loss Amount"),(0,i.kt)("p",null,"Gross loss amount recorded as a result of fraud, not including recovered funds"),(0,i.kt)("h3",{id:"channel"},"Channel"),(0,i.kt)("p",null,"Channel in which the transaction application was submitted."),(0,i.kt)("h3",{id:"manual-review"},"Manual Review"),(0,i.kt)("p",null,"Boolean flag indicating whether an applicant or customer was sent to manual review."),(0,i.kt)("h3",{id:"step-up-auth"},"Step Up Auth"),(0,i.kt)("p",null,"An array containing the types of authentication which have been passed."),(0,i.kt)("h3",{id:"order-amount"},"Order Amount"),(0,i.kt)("p",null,"Order Amount"),(0,i.kt)("h3",{id:"requested-loan-amount"},"Requested Loan Amount"),(0,i.kt)("p",null,"Loan Amount Requested"),(0,i.kt)("h3",{id:"credit-limit"},"Credit Limit"),(0,i.kt)("p",null,"Credit Limit"),(0,i.kt)("h3",{id:"account-creation-date"},"Account Creation Date"),(0,i.kt)("p",null,"When account was created"),(0,i.kt)("h3",{id:"previous-order-count"},"Previous Order Count"),(0,i.kt)("p",null,"Previous order account, if applicable"),(0,i.kt)("h3",{id:"last-order-date"},"Last Order Date"),(0,i.kt)("p",null,"Last order date"),(0,i.kt)("h3",{id:"first-payment-date"},"First Payment Date"),(0,i.kt)("p",null,"First payment or deposit date"),(0,i.kt)("h3",{id:"last-payment-date"},"Last Payment Date"),(0,i.kt)("p",null,"Last payment or deposit date"),(0,i.kt)("h3",{id:"max-payment"},"Max Payment"),(0,i.kt)("p",null,"Largest payment or deposit amount cleared."),(0,i.kt)("h3",{id:"cleared-payments-sum"},"Cleared Payments Sum"),(0,i.kt)("p",null,"Sum of all cleared payments or deposits."),(0,i.kt)("h3",{id:"returned-payments-sum"},"Returned Payments Sum"),(0,i.kt)("p",null,"Sum of returned payments or deposits over the previous 12 months."),(0,i.kt)("h3",{id:"delinquency-bucket"},"Delinquency Bucket"),(0,i.kt)("p",null,"Past due tenure"),(0,i.kt)("h3",{id:"oldest-tradeline"},"Oldest Tradeline"),(0,i.kt)("p",null,"Oldest Tradeline"),(0,i.kt)("h3",{id:"authorized-user-count"},"Authorized User Count"),(0,i.kt)("p",null,"Authorized Users"))}p.isMDXComponent=!0}}]);