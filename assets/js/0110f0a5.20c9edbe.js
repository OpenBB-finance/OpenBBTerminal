"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3478],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,o(o({ref:e},p),{},{components:a})):n.createElement(k,o({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d[m]="string"==typeof t?t:r,o[1]=d;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},74646:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const o={title:"load",description:"Learn how to use the load function within OpenBBTerminal's stocks module to retrieve and analyze data. Provide a symbol (ticker), define start and end dates, interval, choose whether to include pre/post-hours data and the data source. Options to retrieve weekly and monthly data are available. The gathered data is returned as a pandas DataFrame.",keywords:["symbol analysis","start_date","interval","end_date","prepost","source","YahooFinance","weekly data","monthly data","verbose","data extraction","dataframe"]},d=void 0,i={unversionedId:"sdk/reference/stocks/load",id:"sdk/reference/stocks/load",title:"load",description:"Learn how to use the load function within OpenBBTerminal's stocks module to retrieve and analyze data. Provide a symbol (ticker), define start and end dates, interval, choose whether to include pre/post-hours data and the data source. Options to retrieve weekly and monthly data are available. The gathered data is returned as a pandas DataFrame.",source:"@site/content/sdk/reference/stocks/load.md",sourceDirName:"sdk/reference/stocks",slug:"/sdk/reference/stocks/load",permalink:"/sdk/reference/stocks/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/load.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1707223691,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"load",description:"Learn how to use the load function within OpenBBTerminal's stocks module to retrieve and analyze data. Provide a symbol (ticker), define start and end dates, interval, choose whether to include pre/post-hours data and the data source. Options to retrieve weekly and monthly data are available. The gathered data is returned as a pandas DataFrame.",keywords:["symbol analysis","start_date","interval","end_date","prepost","source","YahooFinance","weekly data","monthly data","verbose","data extraction","dataframe"]},sidebar:"tutorialSidebar",previous:{title:"candle",permalink:"/sdk/reference/stocks/candle"},next:{title:"news",permalink:"/sdk/reference/stocks/news"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],m={toc:p},u="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"stocks.load - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Load a symbol to perform analysis using the string above as a template."),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/stocks_helper.py#L294"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.stocks.load(symbol: str, start_date: Union[datetime.datetime, str, NoneType] = None, interval: int = 1440, end_date: Union[datetime.datetime, str, NoneType] = None, prepost: bool = False, source: str = "YahooFinance", weekly: bool = False, monthly: bool = False, verbose: bool = True)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Ticker to get data"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str or datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date to get data from with. - datetime or string format (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval (in minutes) to get data 1, 5, 15, 30, 60 or 1440"),(0,r.kt)("td",{parentName:"tr",align:null},"1440"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str or datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"End date to get data from with. - datetime or string format (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prepost"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre and After hours data"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Source of data extracted"),(0,r.kt)("td",{parentName:"tr",align:null},"YahooFinance"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weekly"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to get weekly data"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monthly"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to get monthly data"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"verbose"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Display verbose information on what was the symbol that was loaded"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataframe of data")))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);