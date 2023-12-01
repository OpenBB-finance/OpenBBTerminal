"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30859],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},5311:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"price",description:"This documentation page contains information on how to display the price and confidence interval of various crypto coins in real-time using Pyth. It features a table of ~100 available symbols for different coins. Use the provided command options to load data.",keywords:["Price display","Real-time data","Confidence interval","Pyth","Usage","Parameters","Symbols","Crypto coins"]},l=void 0,c={unversionedId:"terminal/reference/crypto/price",id:"terminal/reference/crypto/price",title:"price",description:"This documentation page contains information on how to display the price and confidence interval of various crypto coins in real-time using Pyth. It features a table of ~100 available symbols for different coins. Use the provided command options to load data.",source:"@site/content/terminal/reference/crypto/price.md",sourceDirName:"terminal/reference/crypto",slug:"/terminal/reference/crypto/price",permalink:"/terminal/reference/crypto/price",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/price.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701392965,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"price",description:"This documentation page contains information on how to display the price and confidence interval of various crypto coins in real-time using Pyth. It features a table of ~100 available symbols for different coins. Use the provided command options to load data.",keywords:["Price display","Real-time data","Confidence interval","Pyth","Usage","Parameters","Symbols","Crypto coins"]},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/reference/crypto/load"},next:{title:"prt",permalink:"/terminal/reference/crypto/prt"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"crypto /price - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display price and interval of confidence in real-time. ","[Source: Pyth]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"price [-s SYMBOL]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol of coin to load data for, ~100 symbols are available"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"AAVE-USD, ADA-USD, ALGO-USD, ANC-USD, APE-USD, ATLAS-USD, ATOM-USD, AVAX-USD, BCH-USD, BETH-USD, BNB-USD, BRZ-USD, BTC-USD, BUSD-USD, C98-USD, COPE-USD, CUSD-USD, DOGE-USD, DOT-USD, ETH-USD, FIDA-USD, FTM-USD, FTT-USD, GMT-USD, GOFX-USD, HXRO-USD, INJ-USD, JET-USD, LTC-USD, LUNA-USD, LUNC-USD, MATIC-USD, MER-USD, MIR-USD, MNGO-USD, MSOL-USD, NEAR-USD, ONE-USD, ORCA-USD, PAI-USD, PORT-USD, RAY-USD, SBR-USD, SCNSOL-USD, SLND-USD, SNY-USD, SOL-USD, SRM-USD, STEP-USD, STSOL-USD, TUSD-USD, USDC-USD, USDT-USD, USTC-USD, VAI-USD, XVS-USD, ZBC-USD")))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);