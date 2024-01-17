"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58087],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=o(a),k=r,N=s["".concat(m,".").concat(k)]||s[k]||g[k]||i;return a?n.createElement(N,l(l({ref:e},d),{},{components:a})):n.createElement(N,l({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[s]="string"==typeof t?t:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(35742);function i(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},59505:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const l={title:"Fundamental Analysis",description:"The Fundamental Analysis menu is a set of tools for analyzing the overall health of a company and estimating its intrinsic value. Functions within this menu provide company profiles, financial statements, historical distributions, financial ratios, and analyst estimates.",keywords:["fundamental analysis","financials","consensus","estimates","price target","SEC filings","shareholder","ratios","fundamentals","management","ratings","eps","dcf","customers","suppliers","distributions","analyst"]},p=void 0,m={unversionedId:"terminal/menus/stocks/fa",id:"terminal/menus/stocks/fa",title:"Fundamental Analysis",description:"The Fundamental Analysis menu is a set of tools for analyzing the overall health of a company and estimating its intrinsic value. Functions within this menu provide company profiles, financial statements, historical distributions, financial ratios, and analyst estimates.",source:"@site/content/terminal/menus/stocks/fa.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/fa",permalink:"/terminal/menus/stocks/fa",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/fa.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"Fundamental Analysis",description:"The Fundamental Analysis menu is a set of tools for analyzing the overall health of a company and estimating its intrinsic value. Functions within this menu provide company profiles, financial statements, historical distributions, financial ratios, and analyst estimates.",keywords:["fundamental analysis","financials","consensus","estimates","price target","SEC filings","shareholder","ratios","fundamentals","management","ratings","eps","dcf","customers","suppliers","distributions","analyst"]},sidebar:"tutorialSidebar",previous:{title:"Discovery",permalink:"/terminal/menus/stocks/disc"},next:{title:"Government",permalink:"/terminal/menus/stocks/gov"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Overview",id:"overview",level:3},{value:"Analysis",id:"analysis",level:3},{value:"MKTCAP",id:"mktcap",level:3},{value:"Earnings",id:"earnings",level:3},{value:"EPSFC",id:"epsfc",level:3},{value:"Ratios",id:"ratios",level:3},{value:"DCF",id:"dcf",level:3}],s={toc:d},g="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Fundamental Analysis - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Fundamental Analysis menu is a set of tools for analyzing the overall health of a company and estimating its intrinsic value.  Functions within this menu provide company profiles, financial statements, historical distributions, financial ratios, and analyst estimates.  Revenue of companies with a long public history are easier to forecast, and the consensus of many analysts will indicate the level of confidence in future expectations. In addition to these features, there are tools in the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/menus/stocks/comparison"},(0,r.kt)("inlineCode",{parentName:"a"},"stocks/ca"))," menu for comparing fundamentals across groups of companies."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Enter the submenu from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/stocks/")," menu with ",(0,r.kt)("inlineCode",{parentName:"p"},"fa"),", or from the absolute path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/21a947f2-b173-493f-a1e4-b889deef32c4",alt:"Screenshot 2023-11-01 at 10 03 40\u202fAM"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All functions in this menu can add a ticker argument with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-t")," flag.  This overrides the loaded symbol.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data returned from each source will be different for the same command.  Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--source")," argument to change the data provider for a command with more than one available.")))),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"overview")," command provides general metadata and key metrics."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/overview -t aapl --source YahooFinance\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Currency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"USD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Day high"),(0,r.kt)("td",{parentName:"tr",align:"left"},"172.36000061035156")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Day low"),(0,r.kt)("td",{parentName:"tr",align:"left"},"170.1300048828125")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NMS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Fifty day average"),(0,r.kt)("td",{parentName:"tr",align:"left"},"176.71860076904298")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Last price"),(0,r.kt)("td",{parentName:"tr",align:"left"},"172.35000610351562")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Last volume"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23223500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Market cap"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2694554388210.7812")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Open"),(0,r.kt)("td",{parentName:"tr",align:"left"},"171.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Previous close"),(0,r.kt)("td",{parentName:"tr",align:"left"},"170.38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Quote type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EQUITY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Regular market previous close"),(0,r.kt)("td",{parentName:"tr",align:"left"},"170.77000427246094")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Shares"),(0,r.kt)("td",{parentName:"tr",align:"left"},"15634199552")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ten day average volume"),(0,r.kt)("td",{parentName:"tr",align:"left"},"56025390")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Three month average volume"),(0,r.kt)("td",{parentName:"tr",align:"left"},"58964427")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Timezone"),(0,r.kt)("td",{parentName:"tr",align:"left"},"America/New_York")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Two hundred day average"),(0,r.kt)("td",{parentName:"tr",align:"left"},"170.8950003814697")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Year change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.177480560641351")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Year high"),(0,r.kt)("td",{parentName:"tr",align:"left"},"198.22999572753906")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Year low"),(0,r.kt)("td",{parentName:"tr",align:"left"},"124.16999816894531")))),(0,r.kt)("p",null,"An example of the difference between sources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/overview -t aapl --source AlphaVantage\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AAPL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AssetType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Common Stock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apple Inc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world's largest technology company by revenue (totalling $274.5 billion in 2020) and, since January 2021, the world's most valuable company. As of 2021, Apple is the world's fourth-largest PC vendor by unit sales, and fourth-largest smartphone manufacturer. It is one of the Big Five American information technology companies, along with Amazon, Google, Microsoft, and Facebook.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CIK"),(0,r.kt)("td",{parentName:"tr",align:"left"},"320193")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NASDAQ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Currency"),(0,r.kt)("td",{parentName:"tr",align:"left"},"USD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Country"),(0,r.kt)("td",{parentName:"tr",align:"left"},"USA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sector"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TECHNOLOGY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Industry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ELECTRONIC COMPUTERS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ONE INFINITE LOOP, CUPERTINO, CA, US")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FiscalYearEnd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"September")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LatestQuarter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-06-30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MarketCapitalization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2669852230000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EBITDA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"123957002000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PERatio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"28.65")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PEGRatio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.75")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BookValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.852")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DividendPerShare"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DividendYield"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.0056")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EPS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RevenuePerShareTTM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"24.22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ProfitMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.247")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OperatingMarginTTM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.281")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReturnOnAssetsTTM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.209")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReturnOnEquityTTM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.601")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RevenueTTM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"383932989000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GrossProfitTTM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"170782000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DilutedEPSTTM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"QuarterlyEarningsGrowthYOY"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.05")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"QuarterlyRevenueGrowthYOY"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-0.014")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AnalystTargetPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"187.73")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TrailingPE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"28.65")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ForwardPE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"28.66")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PriceToSalesRatioTTM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.51")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PriceToBookRatio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"44.63")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EVToRevenue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.92")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EVToEBITDA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.52")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Beta"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.308")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"52WeekHigh"),(0,r.kt)("td",{parentName:"tr",align:"left"},"197.96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"52WeekLow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"123.64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"50DayMovingAverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"176.72")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200DayMovingAverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"170.9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SharesOutstanding"),(0,r.kt)("td",{parentName:"tr",align:"left"},"15634200000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DividendDate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-08-17")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ExDividendDate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-08-11")))),(0,r.kt)("h3",{id:"analysis"},"Analysis"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"analysis")," command reads SEC filings with NLP and extracts the most important statements.  Source: ",(0,r.kt)("a",{parentName:"p",href:"https://eclect.us/"},"https://eclect.us/")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/771f1f60-7879-4243-bbb5-2d2298ea4ecf",alt:"Screenshot 2023-11-01 at 10 20 44\u202fAM"})),(0,r.kt)("h3",{id:"mktcap"},"MKTCAP"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mktcap")," command will display the historical market cap of the company.  When the ",(0,r.kt)("inlineCode",{parentName:"p"},"--source")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"FinancialModelingPrep"),", the enterprise value can be chosen as the target metric."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/mktcap -t aapl --source FinancialModelingPrep ---method enterprise_value --quarter\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/41fb942b-dffc-4ab9-b6b8-62884b9faf8d",alt:"Screenshot 2023-11-01 at 10 29 30\u202fAM"})),(0,r.kt)("h3",{id:"earnings"},"Earnings"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"earnings")," command compares reported EPS to estimated for each period."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/earnings -t aapl --quarter\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/fa03681a-11ff-4a33-8832-fa47246ed44c",alt:"Screenshot 2023-11-01 at 10 59 35\u202fAM"})),(0,r.kt)("h3",{id:"epsfc"},"EPSFC"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"epsfc")," is the forward consensus of EPS estimates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/epsfc -t aapl\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"fiscalyear"),(0,r.kt)("th",{parentName:"tr",align:"right"},"consensus_mean"),(0,r.kt)("th",{parentName:"tr",align:"right"},"change %"),(0,r.kt)("th",{parentName:"tr",align:"right"},"analysts"),(0,r.kt)("th",{parentName:"tr",align:"right"},"actual"),(0,r.kt)("th",{parentName:"tr",align:"right"},"consensus_low"),(0,r.kt)("th",{parentName:"tr",align:"right"},"consensus_high"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2022"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.10809"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8.87861"),(0,r.kt)("td",{parentName:"tr",align:"right"},"41"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.11"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.96"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2023"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.07227"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.617512"),(0,r.kt)("td",{parentName:"tr",align:"right"},"43"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.82"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2024"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.53322"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.59107"),(0,r.kt)("td",{parentName:"tr",align:"right"},"43"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.6"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2025"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.11054"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8.83668"),(0,r.kt)("td",{parentName:"tr",align:"right"},"19"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.09"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.98")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2026"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8.12"),(0,r.kt)("td",{parentName:"tr",align:"right"},"14.1967"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.18"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9.06")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2027"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9.08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"11.8227"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8.03"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10.13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2028"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8.96"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.32159"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8.96"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8.96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2029"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9.96"),(0,r.kt)("td",{parentName:"tr",align:"right"},"11.1607"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9.96"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9.96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2030"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10.99"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10.3414"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10.99"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10.99")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2031"),(0,r.kt)("td",{parentName:"tr",align:"right"},"12.14"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10.4641"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"12.14"),(0,r.kt)("td",{parentName:"tr",align:"right"},"12.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2032"),(0,r.kt)("td",{parentName:"tr",align:"right"},"13.44"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10.7084"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"13.44"),(0,r.kt)("td",{parentName:"tr",align:"right"},"13.44")))),(0,r.kt)("h3",{id:"ratios"},"Ratios"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ratios")," command returns calculated financial ratios, by year or quarter.  To get quarterly data, apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"--quarter")," flag.  Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--limit")," argument to return more results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/ratios -t aapl\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/2eb8dd17-1dd3-4d85-9f70-318037015285",alt:"Screenshot 2023-11-01 at 10 54 48\u202fAM"})),(0,r.kt)("h3",{id:"dcf"},"DCF"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dcf")," function will attempt to generate a discounted cash flow statement as an Excel file.  See the optional arguments that can be applied to the command by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," to the syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/fa/dcf -h\n")),(0,r.kt)("p",null,"The available parameters are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"  -t TICKER, --ticker TICKER\n                        Ticker to analyze (default: None)\n  -a, --audit           Generates a tie-out for financial statement information pulled from online. (default: False)\n  --no-ratios           Removes ratios from DCF. (default: True)\n  --no-filter           Allow similar companies of any market cap to be shown. (default: False)\n  -p PREDICTION, --prediction PREDICTION\n                        Number of years to predict before using terminal value. (default: 10)\n  -s SIMILAR, --similar SIMILAR\n                        Number of similar companies to generate ratios for. (default: 0)\n  -b BETA, --beta BETA  The beta you'd like to use for the calculation. (default: 1)\n  -g, --growth          Whether to replace a linear regression estimate with a growth estimate. (default: False)\n  -h, --help            show this help message (default: False)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6bc9861a-9dc1-4425-8f09-5f29d5619f9d",alt:"Screenshot 2023-11-01 at 11 15 06\u202fAM"})))}k.isMDXComponent=!0}}]);