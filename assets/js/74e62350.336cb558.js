"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93842],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=m(a),u=n,k=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return a?r.createElement(k,l(l({ref:e},c),{},{components:a})):r.createElement(k,l({ref:e},c))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[p]="string"==typeof t?t:n,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(67294),n=a(35742);function o(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},79093:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const l={title:"Trading Hours",description:"This introduces the Trading Hours sub-menu, within the Stocks menu of the OpenBB Terminal.  Use these commands to check the operating status of markets globally.",keywords:["trading hours","trading","market hours","open","close","bursa","pandasmarketcalendars","status","holidays"]},s=void 0,i={unversionedId:"terminal/menus/stocks/tradinghours",id:"terminal/menus/stocks/tradinghours",title:"Trading Hours",description:"This introduces the Trading Hours sub-menu, within the Stocks menu of the OpenBB Terminal.  Use these commands to check the operating status of markets globally.",source:"@site/content/terminal/menus/stocks/tradinghours.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/tradinghours",permalink:"/terminal/menus/stocks/tradinghours",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/tradinghours.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"Trading Hours",description:"This introduces the Trading Hours sub-menu, within the Stocks menu of the OpenBB Terminal.  Use these commands to check the operating status of markets globally.",keywords:["trading hours","trading","market hours","open","close","bursa","pandasmarketcalendars","status","holidays"]},sidebar:"tutorialSidebar",previous:{title:"Stock Screener",permalink:"/terminal/menus/stocks/screener"},next:{title:"Introduction",permalink:"/terminal/menus/crypto/"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Exchange",id:"exchange",level:3}],p={toc:c},d="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"Trading Hours - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This set of features is for checking the operating status of markets globally."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Enter, ",(0,n.kt)("inlineCode",{parentName:"p"},"th"),", from the ",(0,n.kt)("a",{parentName:"p",href:"/terminal/menus/stocks"},(0,n.kt)("inlineCode",{parentName:"a"},"/stocks/"))," menu. Or, with the absolute path:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/th\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/66fe02c2-22d1-4ce3-a410-7df6f7f4defa",alt:"Screenshot 2023-11-01 at 2 21 56\u202fPM"})),(0,n.kt)("h3",{id:"exchange"},"Exchange"),(0,n.kt)("p",null,"Get the regular market hours and status of a particular exchange."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/th/exchange -n ASX\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"ASX"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Australian Securities Exchange")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"short_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"website"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www2.asx.com.au/markets/market-resources/trading-hours-calendar/cash-market-trading-hours"},"https://www2.asx.com.au/markets/market-resources/trading-hours-calendar/cash-market-trading-hours"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"market_open"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"market_close"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lunchbreak_start"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"lunchbreak_end"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"opening_auction_start"),(0,n.kt)("td",{parentName:"tr",align:"left"},"07:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"opening_auction_end"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"closing_auction_start"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16:10:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"closing_auction_end"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16:12:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"timezone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Australia/Sydney")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"flag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udde6\ud83c\uddfa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"open"),(0,n.kt)("td",{parentName:"tr",align:"left"},"False")))))}u.isMDXComponent=!0}}]);