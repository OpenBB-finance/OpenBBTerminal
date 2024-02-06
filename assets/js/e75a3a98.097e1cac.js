"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,g=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},30957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"fun",description:"This page provides a comprehensive guide on how to use the python script 'fun' to display various fundamental metrics from the Token Terminal. The metrics include market cap, timeline, category, etc. It also comes with specific command-line examples and parameter descriptions for better understanding.",keywords:["fundamental metrics","Token Terminal","usage","parameters","python script","examples","market_cap","Blockchain","category","metric","timeline","reverse","limit"]},o=void 0,p={unversionedId:"terminal/reference/crypto/ov/fun",id:"terminal/reference/crypto/ov/fun",title:"fun",description:"This page provides a comprehensive guide on how to use the python script 'fun' to display various fundamental metrics from the Token Terminal. The metrics include market cap, timeline, category, etc. It also comes with specific command-line examples and parameter descriptions for better understanding.",source:"@site/content/terminal/reference/crypto/ov/fun.md",sourceDirName:"terminal/reference/crypto/ov",slug:"/terminal/reference/crypto/ov/fun",permalink:"/terminal/reference/crypto/ov/fun",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ov/fun.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707223691,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"fun",description:"This page provides a comprehensive guide on how to use the python script 'fun' to display various fundamental metrics from the Token Terminal. The metrics include market cap, timeline, category, etc. It also comes with specific command-line examples and parameter descriptions for better understanding.",keywords:["fundamental metrics","Token Terminal","usage","parameters","python script","examples","market_cap","Blockchain","category","metric","timeline","reverse","limit"]},sidebar:"tutorialSidebar",previous:{title:"exrates",permalink:"/terminal/reference/crypto/ov/exrates"},next:{title:"global",permalink:"/terminal/reference/crypto/ov/global"}},c={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"crypto /ov/fun - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display fundamental metrics overview ","[Source: Token Terminal]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"fun -m {twitter_followers,gmv_annualized,market_cap,take_rate,revenue,revenue_protocol,tvl,pe,pe_circulating,ps,ps_circulating} [-c {Asset Management,Blockchain,DeFi,Exchange,Gaming,Insurance,Interoperability,Lending,NFT,Other,Prediction Market,Stablecoin}] [-t {24h,7d,30d,90d,180d,365d}] [-r] [-l LIMIT]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metric"),(0,a.kt)("td",{parentName:"tr",align:null},"-m  --metric"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose metric of interest"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"twitter_followers, gmv_annualized, market_cap, take_rate, revenue, revenue_protocol, tvl, pe, pe_circulating, ps, ps_circulating")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"category"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --category"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose category of interest"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"Asset Management, Blockchain, DeFi, Exchange, Gaming, Insurance, Interoperability, Lending, NFT, Other, Prediction Market, Stablecoin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timeline"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --timeline"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose timeline of interest"),(0,a.kt)("td",{parentName:"tr",align:null},"24h"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"24h, 7d, 30d, 90d, 180d, 365d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Display N items"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Aug 28, 20:02 (\ud83e\udd8b) /crypto/ov/ $ fun -m market_cap -c Blockchain\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);