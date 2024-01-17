"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,f=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"info",description:"Get an overview of ETF information using the `obb.etf.info` function. Learn about the available parameters, returns, and data fields like name, inception date, asset class, assets under management, average trading volume, CUSIP, description, domicile, expense ratio, ISIN, net asset value, website link, and holdings count.",keywords:["ETF Information Overview","obb.etf.info","parameters","symbol","provider","returns","data","name","inception date","asset class","assets under management","average trading volume","CUSIP","description","domicile","expense ratio","ISIN","net asset value","website link","holdings count"]},i=void 0,o={unversionedId:"excel/reference/etf/info",id:"excel/reference/etf/info",title:"info",description:"Get an overview of ETF information using the `obb.etf.info` function. Learn about the available parameters, returns, and data fields like name, inception date, asset class, assets under management, average trading volume, CUSIP, description, domicile, expense ratio, ISIN, net asset value, website link, and holdings count.",source:"@site/content/excel/reference/etf/info.md",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/info",permalink:"/excel/reference/etf/info",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/etf/info.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"info",description:"Get an overview of ETF information using the `obb.etf.info` function. Learn about the available parameters, returns, and data fields like name, inception date, asset class, assets under management, average trading volume, CUSIP, description, domicile, expense ratio, ISIN, net asset value, website link, and holdings count.",keywords:["ETF Information Overview","obb.etf.info","parameters","symbol","provider","returns","data","name","inception date","asset class","assets under management","average trading volume","CUSIP","description","domicile","expense ratio","ISIN","net asset value","website link","holdings count"]},sidebar:"tutorialSidebar",previous:{title:"holdings_performance",permalink:"/excel/reference/etf/holdings_performance"},next:{title:"price_performance",permalink:"/excel/reference/etf/price_performance"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ETF Information Overview."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.ETF.INFO(symbol;[provider])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.ETF.INFO("SPY")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Symbol to get data for. (ETF)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"True"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (ETF)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the ETF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inception_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Inception date of the ETF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset_class"),(0,r.kt)("td",{parentName:"tr",align:null},"Asset class of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aum"),(0,r.kt)("td",{parentName:"tr",align:null},"Assets under management. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avg_volume"),(0,r.kt)("td",{parentName:"tr",align:null},"Average trading volume of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cusip"),(0,r.kt)("td",{parentName:"tr",align:null},"CUSIP of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domicile"),(0,r.kt)("td",{parentName:"tr",align:null},"Domicile of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"etf_company"),(0,r.kt)("td",{parentName:"tr",align:null},"Company of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expense_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"Expense ratio of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isin"),(0,r.kt)("td",{parentName:"tr",align:null},"ISIN of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nav"),(0,r.kt)("td",{parentName:"tr",align:null},"Net asset value of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nav_currency"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the ETF's net asset value. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"website"),(0,r.kt)("td",{parentName:"tr",align:null},"Website link of the ETF. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"holdings_count"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of holdings in the ETF. (provider: fmp)")))))}u.isMDXComponent=!0}}]);