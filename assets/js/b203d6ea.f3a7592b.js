"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5844],{27278:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=t(74848),i=t(28453),s=t(94331);const o={title:"riskparity",description:"This docusaurus page provides detailed information on how to build a risk parity portfolio using the risk budgeting approach. The user can make use of many available parameters and conditions to customize the portfolio and its conditions as per their requirements.",keywords:["risk parity portfolio","risk budgeting approach","portfolio optimization","portfolio parameters","risk measures","docusaurus documentation","financial data analysis","yfinance data"]},a=void 0,d={id:"terminal/reference/portfolio/po/riskparity",title:"riskparity",description:"This docusaurus page provides detailed information on how to build a risk parity portfolio using the risk budgeting approach. The user can make use of many available parameters and conditions to customize the portfolio and its conditions as per their requirements.",source:"@site/content/terminal/reference/portfolio/po/riskparity.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/riskparity",permalink:"/terminal/reference/portfolio/po/riskparity",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/riskparity.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"riskparity",description:"This docusaurus page provides detailed information on how to build a risk parity portfolio using the risk budgeting approach. The user can make use of many available parameters and conditions to customize the portfolio and its conditions as per their requirements.",keywords:["risk parity portfolio","risk budgeting approach","portfolio optimization","portfolio parameters","risk measures","docusaurus documentation","financial data analysis","yfinance data"]},sidebar:"tutorialSidebar",previous:{title:"relriskparity",permalink:"/terminal/reference/portfolio/po/relriskparity"},next:{title:"rpf",permalink:"/terminal/reference/portfolio/po/rpf"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"portfolio/po/riskparity - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(r.p,{children:"Build a risk parity portfolio based on risk budgeting approach"}),"\n",(0,n.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"riskparity [-rm RISK-MEASURE] [-rc RISK_CONTRIBUTION] [-tr TARGET_RETURN] [-de SMOOTHING_FACTOR_EWMA] [-mt METHOD] [-ct CATEGORIES] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"}),(0,n.jsx)(r.th,{children:"Choices"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"risk_measure"}),(0,n.jsx)(r.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns"}),(0,n.jsx)(r.td,{children:"MV"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, CDaR, EDaR, UCI"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"risk_contribution"}),(0,n.jsx)(r.td,{children:"vector of risk contribution constraint"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"target_return"}),(0,n.jsx)(r.td,{children:"Constraint on minimum level of portfolio's return"}),(0,n.jsx)(r.td,{children:"-1"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"smoothing_factor_ewma"}),(0,n.jsx)(r.td,{children:"Smoothing factor for ewma estimators"}),(0,n.jsx)(r.td,{children:"0.94"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"nan_fill_method"}),(0,n.jsx)(r.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,n.jsx)(r.td,{children:"time"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"categories"}),(0,n.jsx)(r.td,{children:"Show selected categories"}),(0,n.jsx)(r.td,{children:"ASSET_CLASS, COUNTRY, SECTOR, INDUSTRY"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"historic_period"}),(0,n.jsx)(r.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,n.jsx)(r.td,{children:"3y"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_period"}),(0,n.jsx)(r.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_period"}),(0,n.jsx)(r.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"log_returns"}),(0,n.jsx)(r.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"return_frequency"}),(0,n.jsx)(r.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,n.jsx)(r.td,{children:"d"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"d, w, m"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max_nan"}),(0,n.jsx)(r.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,n.jsx)(r.td,{children:"0.05"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"threshold_value"}),(0,n.jsx)(r.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,n.jsx)(r.td,{children:"0.3"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"risk_free"}),(0,n.jsx)(r.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,n.jsx)(r.td,{children:"0.02924"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"significance_level"}),(0,n.jsx)(r.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,n.jsx)(r.td,{children:"0.05"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"long_allocation"}),(0,n.jsx)(r.td,{children:"Amount to allocate to portfolio"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"Save portfolio with personalized or default name"}),(0,n.jsx)(r.td,{children:"RP_0"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"2022 Apr 05, 14:45 (\ud83e\udd8b) /portfolio/po/ $ riskparity\n\n [3 Years] Risk parity portfolio based on risk budgeting approach\nusing volatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 13.42 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 16.51 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502 10.18 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502 12.83 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502 14.36 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 24.00 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502  8.68 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 28.99%\nAnnual (by \u221a252) volatility: 26.60%\nSharpe ratio: 1.0829\n"})}),"\n",(0,n.jsx)(r.hr,{})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),i=t(74848);function s(e){let{title:r}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(96540);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);