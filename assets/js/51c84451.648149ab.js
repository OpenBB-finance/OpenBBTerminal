"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"exp",description:"OpenBB Terminal Function"},o="exp",i={unversionedId:"reference/stocks/options/exp",id:"reference/stocks/options/exp",title:"exp",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/options/exp.md",sourceDirName:"reference/stocks/options",slug:"/reference/stocks/options/exp",permalink:"/terminal/reference/stocks/options/exp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/exp.md",tags:[],version:"current",frontMatter:{title:"exp",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"chains",permalink:"/terminal/reference/stocks/options/chains"},next:{title:"greeks",permalink:"/terminal/reference/stocks/options/greeks"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exp"},"exp"),(0,a.kt)("p",null,"See and set expiration date"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"exp [-i {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17}] [-d {2022-12-16,2022-12-23,2022-12-30,2023-01-06,2023-01-13,2023-01-20,2023-01-27,2023-02-17,2023-03-17,2023-04-21,2023-05-19,2023-06-16,2023-07-21,2023-09-15,2024-01-19,2024-03-15,2024-06-21,2025-01-17,}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"index"),(0,a.kt)("td",{parentName:"tr",align:null},"Select index for expiry date."),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(0, 18)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"Select date (YYYY-MM-DD)"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-12-16, 2022-12-23, 2022-12-30, 2023-01-06, 2023-01-13, 2023-01-20, 2023-01-27, 2023-02-17, 2023-03-17, 2023-04-21, 2023-05-19, 2023-06-16, 2023-07-21, 2023-09-15, 2024-01-19, 2024-03-15, 2024-06-21, 2025-01-17,")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 08:50 (\ud83e\udd8b) /stocks/options/ $ exp\n\nAvailable expiry dates:\n    0.  2022-02-18\n    1.  2022-02-25\n    2.  2022-03-04\n    3.  2022-03-11\n    4.  2022-03-18\n    5.  2022-03-25\n    6.  2022-04-01\n    7.  2022-04-14\n    8.  2022-05-20\n    9.  2022-06-17\n   10.  2022-07-15\n   11.  2022-08-19\n   12.  2022-09-16\n   13.  2022-10-21\n   14.  2022-11-18\n   15.  2022-12-16\n   16.  2023-01-20\n   17.  2023-03-17\n   18.  2023-06-16\n   19.  2023-09-15\n   20.  2024-01-19\n\n2022 Feb 16, 08:50 (\ud83e\udd8b) /stocks/options/ $ exp 7\nExpiration set to 2022-04-14\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);