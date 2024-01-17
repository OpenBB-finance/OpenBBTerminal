"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||c;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const c={title:"search",description:"The documentation page provides information on how to perform a cryptocurrency search, including the search query and provider parameters, as well as the resulting crypto search data such as symbol, name, currency, and exchange information.",keywords:["cryptocurrency search","available cryptocurrency pairs","python obb crypto search","search query parameter","provider parameter","crypto search results","crypto search provider","crypto search warnings","crypto search chart","crypto search metadata","crypto data","symbol","crypto name","crypto currency","crypto exchange","crypto exchange name"]},o=void 0,l={unversionedId:"excel/reference/crypto/search",id:"excel/reference/crypto/search",title:"search",description:"The documentation page provides information on how to perform a cryptocurrency search, including the search query and provider parameters, as well as the resulting crypto search data such as symbol, name, currency, and exchange information.",source:"@site/content/excel/reference/crypto/search.md",sourceDirName:"excel/reference/crypto",slug:"/excel/reference/crypto/search",permalink:"/excel/reference/crypto/search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/crypto/search.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"search",description:"The documentation page provides information on how to perform a cryptocurrency search, including the search query and provider parameters, as well as the resulting crypto search data such as symbol, name, currency, and exchange information.",keywords:["cryptocurrency search","available cryptocurrency pairs","python obb crypto search","search query parameter","provider parameter","crypto search results","crypto search provider","crypto search warnings","crypto search chart","crypto search metadata","crypto data","symbol","crypto name","crypto currency","crypto exchange","crypto exchange name"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/excel/reference/crypto/price/historical"},next:{title:"derivatives",permalink:"/excel/reference/derivatives/"}},p={},i=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],s={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cryptocurrency Search. Search available cryptocurrency pairs."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.CRYPTO.SEARCH([query];[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.CRYPTO.SEARCH()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Search query."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (Crypto)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the crypto.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency the crypto trades for. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"The exchange code the crypto trades on. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange_name"),(0,n.kt)("td",{parentName:"tr",align:null},"The short name of the exchange the crypto trades on. (provider: fmp)")))))}d.isMDXComponent=!0}}]);