"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,g=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},70555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"earnings",description:"Learn how to retrieve upcoming and historical earnings calendar data using the OBB.equity.calendar.earnings Python function. The function allows you to specify symbols, limit the number of data entries, and choose a data provider. The returned data includes EPS, revenue, and other important details for the specified symbols and dates.",keywords:["earnings calendar","upcoming earnings","historical earnings","Python function","earnings data retrieval","symbol","limit","provider","data entries","chart","metadata","data","EPS","revenue","estimated EPS","estimated revenue","date","time","updated from date","fiscal date ending"]},i=void 0,d={unversionedId:"excel/reference/equity/calendar/earnings",id:"excel/reference/equity/calendar/earnings",title:"earnings",description:"Learn how to retrieve upcoming and historical earnings calendar data using the OBB.equity.calendar.earnings Python function. The function allows you to specify symbols, limit the number of data entries, and choose a data provider. The returned data includes EPS, revenue, and other important details for the specified symbols and dates.",source:"@site/content/excel/reference/equity/calendar/earnings.md",sourceDirName:"excel/reference/equity/calendar",slug:"/excel/reference/equity/calendar/earnings",permalink:"/excel/reference/equity/calendar/earnings",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/calendar/earnings.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"earnings",description:"Learn how to retrieve upcoming and historical earnings calendar data using the OBB.equity.calendar.earnings Python function. The function allows you to specify symbols, limit the number of data entries, and choose a data provider. The returned data includes EPS, revenue, and other important details for the specified symbols and dates.",keywords:["earnings calendar","upcoming earnings","historical earnings","Python function","earnings data retrieval","symbol","limit","provider","data entries","chart","metadata","data","EPS","revenue","estimated EPS","estimated revenue","date","time","updated from date","fiscal date ending"]},sidebar:"tutorialSidebar",previous:{title:"dividend",permalink:"/excel/reference/equity/calendar/dividend"},next:{title:"ipo",permalink:"/excel/reference/equity/calendar/ipo"}},o={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Upcoming and Historical earnings calendar."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.CALENDAR.EARNINGS([start_date];[end_date];[provider])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.CALENDAR.EARNINGS()\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"report_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the earnings report.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eps_previous"),(0,r.kt)("td",{parentName:"tr",align:null},"The earnings-per-share from the same previously reported period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eps_consensus"),(0,r.kt)("td",{parentName:"tr",align:null},"The analyst conesus earnings-per-share estimate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eps_actual"),(0,r.kt)("td",{parentName:"tr",align:null},"The actual earnings per share announced. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"revenue_actual"),(0,r.kt)("td",{parentName:"tr",align:null},"The actual reported revenue. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"revenue_consensus"),(0,r.kt)("td",{parentName:"tr",align:null},"The revenue forecast consensus. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal period end date. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reporting_time"),(0,r.kt)("td",{parentName:"tr",align:null},"The reporting time - e.g. after market close. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updated_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date the data was updated last. (provider: fmp)")))))}m.isMDXComponent=!0}}]);