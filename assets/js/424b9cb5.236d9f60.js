"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38528],{7274:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(74848),i=r(28453),a=r(94331);const o={title:"equal",description:"The page provides information about an equally weighted portfolio optimization command 'equal'. It lists and explains the parameters for usage like risk measure, nan fill method, return frequency, and more. The page is useful for individuals looking for information about portfolio optimization and the usage of specific financial indicators.",keywords:["docusaurus","equally weighted portfolio","portfolio optimization","risk measure","nan fill method","historic period","log returns","return frequency","risk-free rate","significance level","allocation","financial data analysis"]},s=void 0,l={id:"terminal/reference/portfolio/po/equal",title:"equal",description:"The page provides information about an equally weighted portfolio optimization command 'equal'. It lists and explains the parameters for usage like risk measure, nan fill method, return frequency, and more. The page is useful for individuals looking for information about portfolio optimization and the usage of specific financial indicators.",source:"@site/content/terminal/reference/portfolio/po/equal.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/equal",permalink:"/terminal/reference/portfolio/po/equal",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/equal.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"equal",description:"The page provides information about an equally weighted portfolio optimization command 'equal'. It lists and explains the parameters for usage like risk measure, nan fill method, return frequency, and more. The page is useful for individuals looking for information about portfolio optimization and the usage of specific financial indicators.",keywords:["docusaurus","equally weighted portfolio","portfolio optimization","risk measure","nan fill method","historic period","log returns","return frequency","risk-free rate","significance level","allocation","financial data analysis"]},sidebar:"tutorialSidebar",previous:{title:"ef",permalink:"/terminal/reference/portfolio/po/ef"},next:{title:"file",permalink:"/terminal/reference/portfolio/po/file"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.A,{title:"portfolio/po/equal - Reference | OpenBB Terminal Docs"}),"\n",(0,t.jsx)(n.p,{children:"Returns an equally weighted portfolio"}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"equal [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}] [-mt METHOD] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Optional"}),(0,t.jsx)(n.th,{children:"Choices"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"risk_measure"}),(0,t.jsx)(n.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns"}),(0,t.jsx)(n.td,{children:"MV"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, WR, ADD, UCI, CDaR, EDaR, MDD"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nan_fill_method"}),(0,t.jsx)(n.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"historic_period"}),(0,t.jsx)(n.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,t.jsx)(n.td,{children:"3y"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"start_period"}),(0,t.jsx)(n.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"end_period"}),(0,t.jsx)(n.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"log_returns"}),(0,t.jsx)(n.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"return_frequency"}),(0,t.jsx)(n.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,t.jsx)(n.td,{children:"d"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"d, w, m"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"max_nan"}),(0,t.jsx)(n.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,t.jsx)(n.td,{children:"0.05"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"threshold_value"}),(0,t.jsx)(n.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,t.jsx)(n.td,{children:"0.3"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"risk_free"}),(0,t.jsx)(n.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,t.jsx)(n.td,{children:"0.02924"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"significance_level"}),(0,t.jsx)(n.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,t.jsx)(n.td,{children:"0.05"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"long_allocation"}),(0,t.jsx)(n.td,{children:"Amount to allocate to portfolio"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Save portfolio with personalized or default name"}),(0,t.jsx)(n.td,{children:"NAME_0"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"2022 Apr 05, 14:52 (\ud83e\udd8b) /portfolio/po/ $ equal\n\n [3 Years] Equally Weighted Portfolio\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 14.28 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 14.28 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502 14.28 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502 14.28 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502 14.28 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 14.28 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502 14.28 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 35.70%\nAnnual (by \u221a252) volatility: 29.50%\nSharpe ratio: 1.2041\n"})}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},94331:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(5260),i=r(74848);function a(e){let{title:n}=e;return(0,i.jsx)(t.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(96540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);