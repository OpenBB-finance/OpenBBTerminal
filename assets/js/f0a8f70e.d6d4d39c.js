"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||c;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),a=r(35742);function c(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},29771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),c=r(88828);const l={title:"btccp",description:"btccp displays the Bitcoin (BTC) circulating supply with ranging parameters. It uses data sourced from blockchain's API while offering a customizable date range.",keywords:["Bitcoin","BTC","circulating supply","blockchain API","cryptocurrency","data visualization","btccp","data extraction","date parameters"]},i=void 0,o={unversionedId:"terminal/reference/crypto/onchain/btccp",id:"terminal/reference/crypto/onchain/btccp",title:"btccp",description:"btccp displays the Bitcoin (BTC) circulating supply with ranging parameters. It uses data sourced from blockchain's API while offering a customizable date range.",source:"@site/content/terminal/reference/crypto/onchain/btccp.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/btccp",permalink:"/terminal/reference/crypto/onchain/btccp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/btccp.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707223691,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"btccp",description:"btccp displays the Bitcoin (BTC) circulating supply with ranging parameters. It uses data sourced from blockchain's API while offering a customizable date range.",keywords:["Bitcoin","BTC","circulating supply","blockchain API","cryptocurrency","data visualization","btccp","data extraction","date parameters"]},sidebar:"tutorialSidebar",previous:{title:"btcblockdata",permalink:"/terminal/reference/crypto/onchain/btcblockdata"},next:{title:"btcct",permalink:"/terminal/reference/crypto/onchain/btcct"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{title:"crypto /onchain/btccp - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display BTC circulating supply ","[Source: https://api.blockchain.info/]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"btccp [-s SINCE] [-u UNTIL]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"since"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --since"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial date. Default: 2010-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"2010-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"until"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --until"),(0,a.kt)("td",{parentName:"tr",align:null},"Final date. Default: 2021-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"2024-02-06"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154067527-0916ab9d-4690-4077-9037-a2665f9fc593.png",alt:"btccp"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);