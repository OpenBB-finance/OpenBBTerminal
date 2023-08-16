"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58322],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,s(s({ref:e},u),{},{components:n})):a.createElement(k,s({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[c]="string"==typeof t?t:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29365:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"get_strategies",description:"OpenBB SDK Function"},s="get_strategies",o={unversionedId:"sdk/reference/stocks/options/get_strategies",id:"sdk/reference/stocks/options/get_strategies",title:"get_strategies",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/stocks/options/get_strategies.md",sourceDirName:"sdk/reference/stocks/options",slug:"/sdk/reference/stocks/options/get_strategies",permalink:"/sdk/reference/stocks/options/get_strategies",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/options/get_strategies.md",tags:[],version:"current",frontMatter:{title:"get_strategies",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"generate_data",permalink:"/sdk/reference/stocks/options/generate_data"},next:{title:"greeks",permalink:"/sdk/reference/stocks/options/greeks"}},i={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get_strategies"},"get_strategies"),(0,r.kt)("p",null,"Gets options strategies for all, or a list of, DTE(s)."),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/options_chains_model.py#L1402"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.options.get_strategies(options: openbb_terminal.stocks.options.op_helpers.Options, days: Optional[list[int]] = None, straddle_strike: Optional[float] = 0, strangle_moneyness: Optional[list[float]] = None, synthetic_longs: Optional[list[float]] = None, synthetic_shorts: Optional[list[float]] = None, vertical_calls: Optional[list[float]] = None, vertical_puts: Optional[list[float]] = None)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The Options data object. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"load_options_chains()")," to load the data."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"days"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[int]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of DTE(s) to get strategies for. Enter a single value, or multiple as a list. Defaults to all."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strike_price"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The target strike price. Defaults to the last price of the underlying stock."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strangle_moneyness"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[float]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of OTM moneyness to target, expressed as a percent value between 0 and 100.",(0,r.kt)("br",null),"Enter a single value, or multiple as a list. Defaults to 5."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"synthetic_long"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[float]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of strikes for a synthetic long position."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"synthetic_short"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[float]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of strikes for a synthetic short position."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vertical_calls"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[float]"),(0,r.kt)("td",{parentName:"tr",align:null},"Call strikes for vertical spreads, listed as ","[sold strike, bought strike]","."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vertical_puts"),(0,r.kt)("td",{parentName:"tr",align:null},"list","[float]"),(0,r.kt)("td",{parentName:"tr",align:null},"Put strikes for vertical spreads, listed as ","[sold strike, bought strike]","."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"Pandas DataFrame with the results.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Load data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.stocks.options import options_chains_model\ndata = options_chains_model.load_options_chains("SPY")\n')),(0,r.kt)("p",null,"Return just straddles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"options_chains_model.calculate_strategies(data)\n")),(0,r.kt)("p",null,"Return strangles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"options_chains_model.calculate_strategies(data, strangle_moneyness = 10)\n")),(0,r.kt)("p",null,"Return multiple values for both moneness and days:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"options_chains_model.calculate_strategies(data, days = [10,30,60,90], moneyness = [2.5,-5,10,-20])\n")),(0,r.kt)("p",null,"Return vertical spreads for all expirations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"options_chains_model.calculate_strategies(data, vertical_calls=[430,427], vertical_puts=[420,426])\n")),(0,r.kt)("p",null,"Return synthetic short and long positions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"options_chains_model.calculate_strategies(\n")),(0,r.kt)("p",null,"data, days = ","[30,60]",", synthetic_short = ","[450,445]",", synthetic_long = ","[450,455]","\n)"),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);