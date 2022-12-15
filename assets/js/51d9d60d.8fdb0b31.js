"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72770],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=d(n),s=a,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10421:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"mt",description:"OpenBB Terminal Function"},i="mt",o={unversionedId:"reference/crypto/dd/mt",id:"reference/crypto/dd/mt",title:"mt",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/crypto/dd/mt.md",sourceDirName:"reference/crypto/dd",slug:"/reference/crypto/dd/mt",permalink:"/terminal/reference/crypto/dd/mt",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/mt.md",tags:[],version:"current",frontMatter:{title:"mt",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"mkt",permalink:"/terminal/reference/crypto/dd/mkt"},next:{title:"news",permalink:"/terminal/reference/crypto/dd/news"}},p={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:d};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mt"},"mt"),(0,a.kt)("p",null,"Display messari timeseries ","[Source: https://messari.io]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"mt [--list] [-t TIMESERIES] [-i {5m,15m,30m,1h,1d,1w}] [-s START] [-end END] [--include-paid] [-q QUERY [QUERY ...]]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to show available timeseries"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timeseries"),(0,a.kt)("td",{parentName:"tr",align:null},"Messari timeseries id"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"txn.cnt, sply.out, txn.tsfr.val.avg, mcap.out, mcap.realized, nvt.adj.90d.ma, txn.vol, sply.total.iss.ntv, reddit.subscribers, exch.flow.out.ntv.incl, mcap.circ, min.rev.usd, twitter.followers, diff.avg, price, txn.fee.med, exch.flow.in.ntv, exch.flow.out.usd.incl, fees, nvt.adj, txn.fee.avg.ntv, cg.sply.circ, exch.sply.ntv, blk.cnt, txn.tfr.avg.ntv, txn.tfr.val.adj.ntv, blk.size.byte, sply.liquid, act.addr.cnt, txn.tfr.val.ntv, txn.fee.avg, daily.vol, exch.flow.in.usd, txn.fee.med.ntv, exch.flow.out.ntv, daily.shp, min.rev.ntv, sply.circ, reddit.active.users, blk.size.bytes.avg, txn.tsfr.cnt, txn.tfr.val.med.ntv, txn.tfr.erc721.cnt, mcap.dom, txn.tsfr.val.adj, new.iss.ntv, txn.tfr.val.med, telegram.users, real.vol, exch.flow.out.usd, hashrate, fees.ntv, sply.total.iss, exch.flow.in.usd.incl, new.iss.usd, exch.flow.in.ntv.incl, exch.sply.usd, iss.rate, txn.tfr.erc20.cnt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Frequency interval"),(0,a.kt)("td",{parentName:"tr",align:null},"1d"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"5m, 15m, 30m, 1h, 1d, 1w")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial date. Default: A year ago"),(0,a.kt)("td",{parentName:"tr",align:null},"2021-12-15"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end"),(0,a.kt)("td",{parentName:"tr",align:null},"End date. Default: Today"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-12-15"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"include_paid"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to show both paid and free sources"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"Query to search across all messari timeseries"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);