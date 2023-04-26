"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47985],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),f=r,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},60749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const s={title:"Data and Sources",sidebar_position:4,description:"Information about data sources and providers offered through the OpenBB SDK.",keywords:["installation","installer","install","guide","mac","windows","linux","python","github","macos","how to","explanation","openbb sdk","data","data provider","india","binance"]},i=void 0,l={unversionedId:"sdk/faqs/data_sources",id:"sdk/faqs/data_sources",title:"Data and Sources",description:"Information about data sources and providers offered through the OpenBB SDK.",source:"@site/content/sdk/faqs/data_sources.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/data_sources",permalink:"/sdk/faqs/data_sources",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/data_sources.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Data and Sources",sidebar_position:4,description:"Information about data sources and providers offered through the OpenBB SDK.",keywords:["installation","installer","install","guide","mac","windows","linux","python","github","macos","how to","explanation","openbb sdk","data","data provider","india","binance"]},sidebar:"tutorialSidebar",previous:{title:"General Operation",permalink:"/sdk/faqs/general_operation"},next:{title:"Bugs, Support, and Feedback",permalink:"/sdk/faqs/bugs_support_feedback"}},d={},u=[{value:"Data and Sources",id:"data-and-sources",level:2}],c={toc:u},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Data Sources - SDK | OpenBB Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"data-and-sources"},"Data and Sources"),(0,r.kt)("p",null,"Please note that OpenBB does not provide any data, it is an aggregator which provides users access to data from a variety of sources. OpenBB does not maintain or have any control over the raw data supplied. If there is a specific problem with the output from a data provider, please consider contacting them first."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is there a list of all data providers?"),(0,r.kt)("p",null,"The complete list is found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/guides/api-keys"},"here"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I load a ticker symbol from India?"),(0,r.kt)("p",null,"Ticker symbols listed on exchanges outside of the US will have a suffix attached, for example, Rico Auto Industries Limited:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'df = openbb.stocks.load("ricoauto.ns")\n')),(0,r.kt)("p",null,"The precise naming convention will differ by source, reference each source's own documentation for specific details.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Data from today is missing."),(0,r.kt)("p",null,"By default, the load function requests end-of-day daily data and is not included until the EOD summary has been published. The current day's data is considered intraday and is loaded when the ",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," argument is present."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"df = openbb.stocks.load(SPY, interval = 60)\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I stream live prices and news feeds?"),(0,r.kt)("p",null,"It is not currently possible to stream live feeds with the OpenBB SDK.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,'"Pair BTC/USDT not found in binance"'),(0,r.kt)("p",null,"US-based users are currently unable to access the Binance API. Please try loading the pair from a different source, for example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"load btc --source CCXT --exchange kraken"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How can I request adding endpoints from a specific data source?"),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/request-a-feature"},"request a feature")," by submitting a new request.")))}f.isMDXComponent=!0}}]);