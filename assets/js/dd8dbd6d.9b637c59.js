"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"vis",description:"OpenBB Terminal Function"},l="vis",o={unversionedId:"reference/stocks/sia/vis",id:"reference/stocks/sia/vis",title:"vis",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/sia/vis.md",sourceDirName:"reference/stocks/sia",slug:"/reference/stocks/sia/vis",permalink:"/terminal/reference/stocks/sia/vis",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/sia/vis.md",tags:[],version:"current",frontMatter:{title:"vis",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"select",permalink:"/terminal/reference/stocks/sia/select"},next:{title:"ad",permalink:"/terminal/reference/stocks/ta/ad"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vis"},"vis"),(0,a.kt)("p",null,"Visualize a particular metric with the filters selected Balance Sheet Statement ce Cash & Equivalents sti Short-Term Investments cce Cash & Cash Equivalents rec Receivables inv Inventory oca Other Current Assets tca Total Current Assets ppe Property, Plant & Equipment lti Long-Term Investments gai Goodwill and Intangibles olta Other Long-Term Assets tlta Total Long-Term Assets ta Total Assets ap Accounts Payable dr Deferred Revenue cd Current Debt ocl Other Current Liabilities tcl Total Current Liabilities ltd Long-Term Debt oltl Other Long-Term Liabilities tltl Total Long-Term Liabilities tl Total Liabilities ret Retained Earnings ci Comprehensive Income se Shareholders' Equity tle Total Liabilities and Equity Income Statement re Revenue cr Cost of Revenue gp Gross Profit sga Selling, Genera & Admin rd Research & Development ooe Other Operating Expenses oi Operating Income ie Interest Expense / Income oe Other Expense / Income it Income Tax ni Net Income pd Preferred Dividends Cash Flow Statement ninc Net Income da Depreciation & Amortization sbc Share-Based Compensation ooa Other Operating Activities ocf Operating Cash Flow cex Capital Expenditures acq Acquisitions cii Change in Investments oia Other Investing Activities icf Investing Cash Flow dp Dividends Paid si Share Insurance / Repurchase di Debt Issued / Paid ofa Other Financing Activities fcf Financing Cash Flow ncf Net Cash Flow"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"vis -m {ce,sti,cce,rec,inv,oca,tca,ppe,lti,gai,olta,tlta,ta,ap,dr,cd,ocl,tcl,ltd,oltl,tltl,tl,ret,ci,se,tle,ninc,da,sbc,ooa,ocf,cex,acq,cii,oia,icf,dp,si,di,ofa,fcf,ncf,re,cr,gp,sga,rd,ooe,oi,ie,oe,it,ni,pd} [-p PERIOD] [-c CURRENCY]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metric"),(0,a.kt)("td",{parentName:"tr",align:null},"Metric to visualize"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"ce, sti, cce, rec, inv, oca, tca, ppe, lti, gai, olta, tlta, ta, ap, dr, cd, ocl, tcl, ltd, oltl, tltl, tl, ret, ci, se, tle, ninc, da, sbc, ooa, ocf, cex, acq, cii, oia, icf, dp, si, di, ofa, fcf, ncf, re, cr, gp, sga, rd, ooe, oi, ie, oe, it, ni, pd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"period"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit number of periods to display"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currency"),(0,a.kt)("td",{parentName:"tr",align:null},"Convert the currency of the chosen country to a specified currency. By default, this is set to USD (US Dollars)."),(0,a.kt)("td",{parentName:"tr",align:null},"USD"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/159114414-8533bef1-aed2-4a4c-88a6-93a04c7513d2.png",alt:"vis"})),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);