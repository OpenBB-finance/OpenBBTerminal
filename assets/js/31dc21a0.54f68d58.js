"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24899],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=o(a),f=r,g=s["".concat(m,".").concat(f)]||s[f]||k[f]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},37603:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"Comparison Analysis",description:"This page provides an introduction to the Comparison Analysis (CA) sub-menu, within the Stocks menu, of the OpenBB Terminal.",keywords:["comparison","analysis","peers","similar stocks","compare","correlation","historical","screen","pairs","performance","valuation"]},p=void 0,m={unversionedId:"terminal/menus/stocks/comparison",id:"terminal/menus/stocks/comparison",title:"Comparison Analysis",description:"This page provides an introduction to the Comparison Analysis (CA) sub-menu, within the Stocks menu, of the OpenBB Terminal.",source:"@site/content/terminal/menus/stocks/comparison.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/comparison",permalink:"/terminal/menus/stocks/comparison",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/comparison.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"Comparison Analysis",description:"This page provides an introduction to the Comparison Analysis (CA) sub-menu, within the Stocks menu, of the OpenBB Terminal.",keywords:["comparison","analysis","peers","similar stocks","compare","correlation","historical","screen","pairs","performance","valuation"]},sidebar:"tutorialSidebar",previous:{title:"Behavioural Analysis",permalink:"/terminal/menus/stocks/ba"},next:{title:"Dark Pools & Short Data",permalink:"/terminal/menus/stocks/dark-pool-shorts"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Get",id:"get",level:3},{value:"RMV",id:"rmv",level:3},{value:"Add",id:"add",level:3},{value:"Technical",id:"technical",level:3},{value:"Cashflow",id:"cashflow",level:3}],s={toc:d},k="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Comparison Analysis - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Comparison Analysis menu features different methods for comparing price, volume, and fundamentals across multiple stocks."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Enter the menu from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/stocks")," menu.  If a ticker is not already loaded, enter one now by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ticker")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ca/ticker AMD\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/75ae98f4-e928-4319-8675-a09d4fe0ca87",alt:"Screenshot 2023-10-31 at 9 32 13\u202fPM"})),(0,r.kt)("h3",{id:"get"},"Get"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," command will attempt to find the company peers of the base ticker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"get --source Polygon\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"[Polygon] Similar Companies: AMD, INTC, MCHP, NVDA, TXN, HPQ, XLK \n")),(0,r.kt)("p",null,"Refreshing the screen, ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," with no command, will update the list of similar companies."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/418ca6fc-63d6-4ec6-99d5-ac1f1375b358",alt:"Screenshot 2023-10-31 at 9 38 17\u202fPM"})),(0,r.kt)("h3",{id:"rmv"},"RMV"),(0,r.kt)("p",null,"Use the syntax below to remove a ticker from the list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"rmv xlk\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"[Polygon] Similar Companies: AMD, INTC, MCHP, NVDA, TXN, HPQ\n")),(0,r.kt)("h3",{id:"add"},"Add"),(0,r.kt)("p",null,"Similarly, add another one by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"add mu\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"[Custom] Similar Companies: HPQ, MCHP, TXN, INTC, MU, AMD, NVDA \n")),(0,r.kt)("h3",{id:"technical"},"Technical"),(0,r.kt)("p",null,"With a list of similar companies populated, the ",(0,r.kt)("inlineCode",{parentName:"p"},"techincal")," command will compare recent price performance metrics."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"technical\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/9eb4ea36-97a2-44ec-ad8a-8d7ec6145097",alt:"Screenshot 2023-11-01 at 8 16 39\u202fAM"})),(0,r.kt)("h3",{id:"cashflow"},"Cashflow"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cashflow")," command will compare recent annual and quarterly statements for a given period."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cashflow --quarter\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Other available quarterly timeframes are: 31-Jul-2022, 31-Oct-2022, 31-Jan-2023, 30-Apr-2023, 31-Jul-2023\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"HPQ (31-Jul-2023)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"MCHP (30-Jun-2023)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"TXN (30-Jun-2023)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"INTC (30-Jun-2023)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"MU (31-Aug-2023)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"AMD (30-Jun-2023)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"NVDA (31-Jul-2023)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net Income before Extraordinaries"),(0,r.kt)("td",{parentName:"tr",align:"left"},"736M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"666.4M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.72B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.47B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(1.43B)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"27M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.19B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net Income Growth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-30.96%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10.33%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.82%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"153.22%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"24.58%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"119.42%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"202.94%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Depreciation, Depletion & Amortization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"217M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"222.9M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"300M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.28B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.94B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"873M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"365M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Depreciation and Depletion"),(0,r.kt)("td",{parentName:"tr",align:"left"},"126M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"50.5M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"285M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.83B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.92B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"180M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"219M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Amortization of Intangible Assets"),(0,r.kt)("td",{parentName:"tr",align:"left"},"91M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"172.4M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"15M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"444M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"693M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"146M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Deferred Taxes & Investment Tax Credit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"43M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.9M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(52M)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"(274M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(746M)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Deferred Taxes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"43M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.9M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(52M)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"(274M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(746M)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Investment Tax Credit"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Other Funds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"69M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"57.9M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"110M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.14B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"260M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"335M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"714M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Funds from Operations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.07B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"971.1M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.08B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.89B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"767M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"961M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.52B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Extraordinaries"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Changes in Working Capital"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(89M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"22.1M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(681M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(2.08B)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(518M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(582M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(174M)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Receivables"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(246M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(159.7M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(79M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"851M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"35M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(272M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(2.99B)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Accounts Payable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"781M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"34.9M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"74M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(331M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(340M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"236M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"778M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Other Assets/Liabilities"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(659M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"50.5M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(157M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(303M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(64M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(87M)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(246M)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net Operating Cash Flow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"976M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"993.2M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.4B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.81B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"249M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"379M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.35B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net Operating Cash Flow Growth"),(0,r.kt)("td",{parentName:"tr",align:"left"},"53.46%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"39.99%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20.60%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"257.31%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"937.50%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-22.02%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"118.07%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net Operating Cash Flow / Sales"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7.38%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"43.40%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30.88%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"21.69%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.21%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7.07%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"47.00%")))))}f.isMDXComponent=!0}}]);