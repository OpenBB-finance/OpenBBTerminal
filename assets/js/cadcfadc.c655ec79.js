"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12737],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),p=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=p(r),d=n,b=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return r?a.createElement(b,o(o({ref:e},c),{},{components:r})):a.createElement(b,o({ref:e},c))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(67294),n=r(35742);function l(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},57854:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"attrib",description:"The page provides detailed information on how to use the 'attrib' command in order to display portfolio attribution compared to the S&P 500. It invites to choose between relative or absolute attribution values and to view raw attribution values in a table. The users can select the period for which they want to calculate the attribution.",keywords:["portfolio attribution","S&P 500 comparison","attribution calculation","relative attribution values","absolute attribution values","attrib command","raw attribution values"]},i=void 0,u={unversionedId:"terminal/reference/portfolio/attrib",id:"terminal/reference/portfolio/attrib",title:"attrib",description:"The page provides detailed information on how to use the 'attrib' command in order to display portfolio attribution compared to the S&P 500. It invites to choose between relative or absolute attribution values and to view raw attribution values in a table. The users can select the period for which they want to calculate the attribution.",source:"@site/content/terminal/reference/portfolio/attrib.md",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/attrib",permalink:"/terminal/reference/portfolio/attrib",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/attrib.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"attrib",description:"The page provides detailed information on how to use the 'attrib' command in order to display portfolio attribution compared to the S&P 500. It invites to choose between relative or absolute attribution values and to view raw attribution values in a table. The users can select the period for which they want to calculate the attribution.",keywords:["portfolio attribution","S&P 500 comparison","attribution calculation","relative attribution values","absolute attribution values","attrib command","raw attribution values"]},sidebar:"tutorialSidebar",previous:{title:"alloc",permalink:"/terminal/reference/portfolio/alloc"},next:{title:"bench",permalink:"/terminal/reference/portfolio/bench"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},m="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"portfolio /attrib - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Displays sector attribution of the portfolio compared to the S&P 500"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"attrib [-p {mtd,qtd,ytd,3m,6m,1y,3y,5y,10y,all}] [-t {relative,absolute}] [--raw [RAW]]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"-p  --period"),(0,n.kt)("td",{parentName:"tr",align:null},"Period in which to calculate attribution"),(0,n.kt)("td",{parentName:"tr",align:null},"all"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"mtd, qtd, ytd, 3m, 6m, 1y, 3y, 5y, 10y, all")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --type"),(0,n.kt)("td",{parentName:"tr",align:null},"Select between relative or absolute attribution values"),(0,n.kt)("td",{parentName:"tr",align:null},"relative"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"relative, absolute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"raw"),(0,n.kt)("td",{parentName:"tr",align:null},"--raw"),(0,n.kt)("td",{parentName:"tr",align:null},"View raw attribution values in a table"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"2022 Nov 03, 23:37 (\ud83e\udd8b) /portfolio/ $ attrib -p 3m\n")),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);