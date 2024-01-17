"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81975],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=m(a),u=n,c=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return a?r.createElement(c,p(p({ref:e},d),{},{components:a})):r.createElement(c,p({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[s]="string"==typeof t?t:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62934:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"market_snapshots",description:"Get a current, complete market snapshot with the obb.equity.market_snapshots Python method. Retrieve equity data such as stock information, financial data, market analysis, and trading volume. Explore details like stock performance, price change, moving averages, 52-week high and low, market cap, earnings per share, price to earnings ratio, and stock exchange.",keywords:["market snapshot","equity data","market data","stock information","financial data","market analysis","trading volume","stock performance","price change","moving averages","52-week high","52-week low","market cap","earnings per share","price to earnings ratio","stock exchange"]},p=void 0,i={unversionedId:"excel/reference/equity/market_snapshots",id:"excel/reference/equity/market_snapshots",title:"market_snapshots",description:"Get a current, complete market snapshot with the obb.equity.market_snapshots Python method. Retrieve equity data such as stock information, financial data, market analysis, and trading volume. Explore details like stock performance, price change, moving averages, 52-week high and low, market cap, earnings per share, price to earnings ratio, and stock exchange.",source:"@site/content/excel/reference/equity/market_snapshots.md",sourceDirName:"excel/reference/equity",slug:"/excel/reference/equity/market_snapshots",permalink:"/excel/reference/equity/market_snapshots",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/market_snapshots.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"market_snapshots",description:"Get a current, complete market snapshot with the obb.equity.market_snapshots Python method. Retrieve equity data such as stock information, financial data, market analysis, and trading volume. Explore details like stock performance, price change, moving averages, 52-week high and low, market cap, earnings per share, price to earnings ratio, and stock exchange.",keywords:["market snapshot","equity data","market data","stock information","financial data","market analysis","trading volume","stock performance","price change","moving averages","52-week high","52-week low","market cap","earnings per share","price to earnings ratio","stock exchange"]},sidebar:"tutorialSidebar",previous:{title:"peers",permalink:"/excel/reference/equity/compare/peers"},next:{title:"profile",permalink:"/excel/reference/equity/profile"}},o={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],d={toc:m},s="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get a current, complete, market snapshot."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.MARKET_SNAPSHOTS([provider];[market])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.MARKET_SNAPSHOTS()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, polygon, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"The market to fetch data for. (provider: fmp)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"open"),(0,n.kt)("td",{parentName:"tr",align:null},"The open price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"high"),(0,n.kt)("td",{parentName:"tr",align:null},"The high price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"low"),(0,n.kt)("td",{parentName:"tr",align:null},"The low price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"close"),(0,n.kt)("td",{parentName:"tr",align:null},"The close price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prev_close"),(0,n.kt)("td",{parentName:"tr",align:null},"The previous closing price of the stock.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change"),(0,n.kt)("td",{parentName:"tr",align:null},"The change in price.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"change_percent"),(0,n.kt)("td",{parentName:"tr",align:null},"The change, as a percent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"The trading volume.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price"),(0,n.kt)("td",{parentName:"tr",align:null},"The last price of the stock. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"avg_volume"),(0,n.kt)("td",{parentName:"tr",align:null},"Average volume of the stock. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ma50"),(0,n.kt)("td",{parentName:"tr",align:null},"The 50-day moving average. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ma200"),(0,n.kt)("td",{parentName:"tr",align:null},"The 200-day moving average. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_high"),(0,n.kt)("td",{parentName:"tr",align:null},"The 52-week high. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_low"),(0,n.kt)("td",{parentName:"tr",align:null},"The 52-week low. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market_cap"),(0,n.kt)("td",{parentName:"tr",align:null},"Market cap of the stock. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"shares_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of shares outstanding. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"eps"),(0,n.kt)("td",{parentName:"tr",align:null},"Earnings per share. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pe"),(0,n.kt)("td",{parentName:"tr",align:null},"Price to earnings ratio. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"The exchange of the stock. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"The timestamp of the data. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"earnings_announcement"),(0,n.kt)("td",{parentName:"tr",align:null},"The earnings announcement of the stock. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name associated with the stock symbol. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vwap"),(0,n.kt)("td",{parentName:"tr",align:null},"The volume weighted average price of the stock on the current trading day. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prev_open"),(0,n.kt)("td",{parentName:"tr",align:null},"The previous trading session opening price. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prev_high"),(0,n.kt)("td",{parentName:"tr",align:null},"The previous trading session high price. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prev_low"),(0,n.kt)("td",{parentName:"tr",align:null},"The previous trading session low price. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prev_volume"),(0,n.kt)("td",{parentName:"tr",align:null},"The previous trading session volume. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"prev_vwap"),(0,n.kt)("td",{parentName:"tr",align:null},"The previous trading session VWAP. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_updated"),(0,n.kt)("td",{parentName:"tr",align:null},"The last time the data was updated. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bid"),(0,n.kt)("td",{parentName:"tr",align:null},"The current bid price. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bid_size"),(0,n.kt)("td",{parentName:"tr",align:null},"The current bid size. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ask_size"),(0,n.kt)("td",{parentName:"tr",align:null},"The current ask size. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ask"),(0,n.kt)("td",{parentName:"tr",align:null},"The current ask price. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quote_timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"The timestamp of the last quote. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_trade_price"),(0,n.kt)("td",{parentName:"tr",align:null},"The last trade price. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_trade_size"),(0,n.kt)("td",{parentName:"tr",align:null},"The last trade size. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_trade_conditions"),(0,n.kt)("td",{parentName:"tr",align:null},"The last trade condition codes. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_trade_exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"The last trade exchange ID code. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_trade_timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"The last trade timestamp. (provider: polygon)")))))}k.isMDXComponent=!0}}]);