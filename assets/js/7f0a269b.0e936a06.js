"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,a(a({ref:t},l),{},{components:n})):i.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"Options Pricing",keywords:["Options","stocks","derivatives","puts","calls","oi","vol","greeks","hedge","gamme","delta","theta","rho","vanna","vomma","phi","charm","iv","volatility","implied","realized","price","last","bid","ask","expiry","expiration","chains","chain","put","call","how to","example","pricing"],description:"This guide introduces the user to the Options Pricing submenu, within the Options menu."},a=void 0,s={unversionedId:"terminal/usage/intros/stocks/options/pricing",id:"terminal/usage/intros/stocks/options/pricing",title:"Options Pricing",description:"This guide introduces the user to the Options Pricing submenu, within the Options menu.",source:"@site/content/terminal/usage/intros/stocks/options/pricing.md",sourceDirName:"terminal/usage/intros/stocks/options",slug:"/terminal/usage/intros/stocks/options/pricing",permalink:"/terminal/usage/intros/stocks/options/pricing",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/intros/stocks/options/pricing.md",tags:[],version:"current",frontMatter:{title:"Options Pricing",keywords:["Options","stocks","derivatives","puts","calls","oi","vol","greeks","hedge","gamme","delta","theta","rho","vanna","vomma","phi","charm","iv","volatility","implied","realized","price","last","bid","ask","expiry","expiration","chains","chain","put","call","how to","example","pricing"],description:"This guide introduces the user to the Options Pricing submenu, within the Options menu."},sidebar:"tutorialSidebar",previous:{title:"Hedge",permalink:"/terminal/usage/intros/stocks/options/hedge"},next:{title:"Options Screener",permalink:"/terminal/usage/intros/stocks/options/screener"}},p={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This set of features is for composing hypothetical outcomes through user-defined inputs. There are two columns of inputs: the price for the underlying at the close on expiration and the statistical probability of the outcome."),(0,r.kt)("p",null,"The Pricing submenu is accessible after selecting an",(0,r.kt)("a",{href:"/terminal/reference/stocks/options/exp",target:"_blank",rel:"noreferrer noopener"},"expiration")," date for the options chain. Type, ",(0,r.kt)("inlineCode",{parentName:"p"},"pricing"),", and press enter for access."),(0,r.kt)("img",{width:"800",alt:"image",src:"https://user-images.githubusercontent.com/46355364/218987795-887c2f76-73f3-44ff-a6f5-35b392616186.png"}),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," command to build the list, and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"rmv")," command to take away any entries. ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," will print a table of the inputs. Multiple price points can be added, assuming that probability always sums at 100%."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/pricing/ $ add -p 125 -c 1\n\n\n(\ud83e\udd8b) /stocks/options/pricing/ $ show\n\nEstimated price(s) of MSFT at 2023-02-17\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Price  \u2503 Chance \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 125.00 \u2502 1.00   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Adding the optional argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"-p"),", will calculate the puts in the chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/options/pricing/ $ rnval -p -m 70 -M 150 -r 1.25\n\n            Risk Neutral Values\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Strike \u2503 Last Price \u2503 Value \u2503 Difference \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 110.00 \u2502 0.02       \u2502 0.00  \u2502 0.02       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 115.00 \u2502 0.01       \u2502 0.00  \u2502 0.01       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 120.00 \u2502 0.01       \u2502 0.00  \u2502 0.01       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 125.00 \u2502 0.02       \u2502 0.00  \u2502 0.02       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 130.00 \u2502 0.01       \u2502 4.98  \u2502 -4.97      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 135.00 \u2502 0.01       \u2502 9.96  \u2502 -9.95      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 140.00 \u2502 0.01       \u2502 14.93 \u2502 -14.92     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 145.00 \u2502 0.01       \u2502 19.91 \u2502 -19.90     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 150.00 \u2502 0.01       \u2502 24.89 \u2502 -24.88     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);