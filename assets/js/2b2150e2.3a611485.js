"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},86398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const i={title:"anchor",description:"This documentation covers the usage of anchor which displays earnings data of a specific terra address. It also provides the option to view the history of past transactions. The page provides code examples for better understanding.",keywords:["anchor","terra","cryptocurrency","crypto","Blockchain","earnings data","transactions history"]},l=void 0,s={unversionedId:"terminal/reference/crypto/defi/anchor",id:"terminal/reference/crypto/defi/anchor",title:"anchor",description:"This documentation covers the usage of anchor which displays earnings data of a specific terra address. It also provides the option to view the history of past transactions. The page provides code examples for better understanding.",source:"@site/content/terminal/reference/crypto/defi/anchor.md",sourceDirName:"terminal/reference/crypto/defi",slug:"/terminal/reference/crypto/defi/anchor",permalink:"/terminal/reference/crypto/defi/anchor",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/defi/anchor.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701392965,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"anchor",description:"This documentation covers the usage of anchor which displays earnings data of a specific terra address. It also provides the option to view the history of past transactions. The page provides code examples for better understanding.",keywords:["anchor","terra","cryptocurrency","crypto","Blockchain","earnings data","transactions history"]},sidebar:"tutorialSidebar",previous:{title:"DeFi",permalink:"/terminal/reference/crypto/defi/"},next:{title:"dtvl",permalink:"/terminal/reference/crypto/defi/dtvl"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"crypto /defi/anchor - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Displays anchor protocol earnings data of a certain terra address --transactions flag can be passed to show history of previous transactions ","[Source: https://cryptosaurio.com/]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"anchor --address ADDRESS [--transactions]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"--address"),(0,n.kt)("td",{parentName:"tr",align:null},"Terra address. Valid terra addresses start with 'terra'"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transactions"),(0,n.kt)("td",{parentName:"tr",align:null},"--transactions"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show transactions history in anchor earn"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"2022 Mar 18, 14:29 (\ud83e\udd8b) /crypto/defi/ $ anchor terra13kc0x8kr3sq8226myf4nmanmn2mrk9s5s9wsnz --transactions\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43375532/159065235-e8fb189d-f670-4391-a7fc-064640b9607d.png",alt:"anchor"})),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);