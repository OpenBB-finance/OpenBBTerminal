"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60603],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(g,o(o({ref:e},m),{},{components:n})):r.createElement(g,o({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(67294),a=n(35742);function l(t){let{title:e}=t;return r.createElement(a.Z,null,r.createElement("title",null,e))}},65330:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"topsells",description:"The page provides information on the top sells in government trading. Understand how to use different options like governing body, limit of top tickers, past transaction months and others to filter the information.",keywords:["government trading","top sells","congress","senate","house","past transactions months","limit of top tickers","print raw data","quiverquant"]},i=void 0,s={unversionedId:"terminal/reference/stocks/gov/topsells",id:"terminal/reference/stocks/gov/topsells",title:"topsells",description:"The page provides information on the top sells in government trading. Understand how to use different options like governing body, limit of top tickers, past transaction months and others to filter the information.",source:"@site/content/terminal/reference/stocks/gov/topsells.md",sourceDirName:"terminal/reference/stocks/gov",slug:"/terminal/reference/stocks/gov/topsells",permalink:"/terminal/reference/stocks/gov/topsells",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/gov/topsells.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707223691,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"topsells",description:"The page provides information on the top sells in government trading. Understand how to use different options like governing body, limit of top tickers, past transaction months and others to filter the information.",keywords:["government trading","top sells","congress","senate","house","past transactions months","limit of top tickers","print raw data","quiverquant"]},sidebar:"tutorialSidebar",previous:{title:"toplobbying",permalink:"/terminal/reference/stocks/gov/toplobbying"},next:{title:"Insiders",permalink:"/terminal/reference/stocks/ins/"}},p={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:m},u="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /gov/topsells - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Top sells for government trading. ","[Source: www.quiverquant.com]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"topsells [-g {congress,senate,house}] [-p PAST_TRANSACTIONS_MONTHS] [-l LIMIT] [--raw]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gov"),(0,a.kt)("td",{parentName:"tr",align:null},"-g  --govtype"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"congress"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"congress, senate, house")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"Past transaction months"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of top tickers to display"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"--raw"),(0,a.kt)("td",{parentName:"tr",align:null},"Print raw data."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154266942-4ee9c83a-39be-4aab-8a06-01b6850f5bd9.png",alt:"topsells"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);