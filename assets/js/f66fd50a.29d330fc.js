"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,T=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(T,i(i({ref:t},s),{},{components:n})):r.createElement(T,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"headlines",description:"OpenBB Terminal Function"},i="headlines",o={unversionedId:"reference/crypto/headlines",id:"reference/crypto/headlines",title:"headlines",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/crypto/headlines.md",sourceDirName:"reference/crypto",slug:"/reference/crypto/headlines",permalink:"/terminal/reference/crypto/headlines",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/headlines.md",tags:[],version:"current",frontMatter:{title:"headlines",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"find",permalink:"/terminal/reference/crypto/find"},next:{title:"load",permalink:"/terminal/reference/crypto/load"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"headlines"},"headlines"),(0,a.kt)("p",null,"Display sentiment analysis from FinBrain for chosen Cryptocurrencies"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"headlines [-c {AAVE,ADA,ADX,AE,ANT,ARDR,ARK,ATOM,BAT,BCCOIN,BCH,BCN,BLOCK,BNB,BNT,BTC,BTCD,BTG,BTM,BTS,CVC,DASH,DCN,DCR,DGB,DGD,DNT,DOGE,DOT,EDG,EOS,ETH,ETP,FAIR,FCT,FUN,GAME,GAS,GBYTE,GNO,GNT,HSR,ICX,IOC,KIN,KMD,KNC,LINK,LKK,LRC,LSK,LTC,MAID,MCAP,MCO,MGO,MKR,MLN,MONA,MTL,NAV,NEBL,NEO,NLC2,NXS,NXT,OMG,PAY,PIVX,PPT,QASH,QRL,QTUM,REP,RLC,SALT,SC,SMART,SNGLS,STEEM,STORJ,SUB,SYS,TAAS,TRX,UBQ,UNI,USDT,VEN,VERI,VTC,WAVES,WINGS,WTC,XCP,XLM,XMR,XRP,XTZ,XVG,YFI,ZEC,ZEN,ZRX}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"coin"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol of coin to load data for, ~100 symbols are available"),(0,a.kt)("td",{parentName:"tr",align:null},"BTC"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"AAVE, ADA, ADX, AE, ANT, ARDR, ARK, ATOM, BAT, BCCOIN, BCH, BCN, BLOCK, BNB, BNT, BTC, BTCD, BTG, BTM, BTS, CVC, DASH, DCN, DCR, DGB, DGD, DNT, DOGE, DOT, EDG, EOS, ETH, ETP, FAIR, FCT, FUN, GAME, GAS, GBYTE, GNO, GNT, HSR, ICX, IOC, KIN, KMD, KNC, LINK, LKK, LRC, LSK, LTC, MAID, MCAP, MCO, MGO, MKR, MLN, MONA, MTL, NAV, NEBL, NEO, NLC2, NXS, NXT, OMG, PAY, PIVX, PPT, QASH, QRL, QTUM, REP, RLC, SALT, SC, SMART, SNGLS, STEEM, STORJ, SUB, SYS, TAAS, TRX, UBQ, UNI, USDT, VEN, VERI, VTC, WAVES, WINGS, WTC, XCP, XLM, XMR, XRP, XTZ, XVG, YFI, ZEC, ZEN, ZRX")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 15, 07:52 (\ud83e\udd8b) /crypto/ $ headlines\n\ndate\n2022-02-06    0.137\n2022-02-07    0.137\n2022-02-08    0.237\n2022-02-09    0.123\n2022-02-10    0.131\n2022-02-11    0.014\n2022-02-12   -0.057\n2022-02-13     0.02\n2022-02-14    0.103\n2022-02-15    0.158\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154066006-d281a8c8-bd25-4355-9cd5-3affd4477bd6.png",alt:"headlines"})),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);