"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||c;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const c={title:"btcct",description:"OpenBB Terminal Function"},l="btcct",i={unversionedId:"reference/crypto/onchain/btcct",id:"reference/crypto/onchain/btcct",title:"btcct",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/crypto/onchain/btcct.md",sourceDirName:"reference/crypto/onchain",slug:"/reference/crypto/onchain/btcct",permalink:"/terminal/reference/crypto/onchain/btcct",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/btcct.md",tags:[],version:"current",frontMatter:{title:"btcct",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"btccp",permalink:"/terminal/reference/crypto/onchain/btccp"},next:{title:"ds",permalink:"/terminal/reference/crypto/onchain/ds"}},o={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"btcct"},"btcct"),(0,a.kt)("p",null,"Display BTC confirmed transactions ","[Source: https://api.blockchain.info/]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"btcct [-s SINCE] [-u UNTIL]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"since"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial date. Default: 2010-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"2010-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"until"),(0,a.kt)("td",{parentName:"tr",align:null},"Final date. Default: 2022-12-15"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-12-15"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154067586-d80059e8-cf7b-475a-990b-cf2aec7bc646.png",alt:"btcct"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);