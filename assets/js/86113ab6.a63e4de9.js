"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||a;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},87986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const l={title:"open",description:"Learn how to retrieve the Top 20 flows by premium for a stock with the Opening condition - Volume exceeding Open Interest on the trade using the 'flow open' command.",keywords:["flow open command","Top 20 flows by premium","stock flow","open interest on trade","stock ticker","volume exceeding open interest"]},i=void 0,p={unversionedId:"bot/reference/telegram/flow/flow/open",id:"bot/reference/telegram/flow/flow/open",title:"open",description:"Learn how to retrieve the Top 20 flows by premium for a stock with the Opening condition - Volume exceeding Open Interest on the trade using the 'flow open' command.",source:"@site/content/bot/reference/telegram/flow/flow/open.md",sourceDirName:"bot/reference/telegram/flow/flow",slug:"/bot/reference/telegram/flow/flow/open",permalink:"/bot/reference/telegram/flow/flow/open",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/flow/flow/open.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707223691,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"open",description:"Learn how to retrieve the Top 20 flows by premium for a stock with the Opening condition - Volume exceeding Open Interest on the trade using the 'flow open' command.",keywords:["flow open command","Top 20 flows by premium","stock flow","open interest on trade","stock ticker","volume exceeding open interest"]},sidebar:"tutorialSidebar",previous:{title:"day",permalink:"/bot/reference/telegram/flow/flow/day"},next:{title:"prem",permalink:"/bot/reference/telegram/flow/flow/prem"}},c={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:m},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"flow - flow: open - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the Top 20 flows by premium for a stock with the Opening condition - Volume exceeding Open Interest on the trade."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/flow open [ticker]\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ticker"),(0,o.kt)("td",{parentName:"tr",align:null},"Stock Ticker - Not required for subcmd: unu"),(0,o.kt)("td",{parentName:"tr",align:null},"True"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/flow open AMD\n")),(0,o.kt)("hr",null))}f.isMDXComponent=!0}}]);