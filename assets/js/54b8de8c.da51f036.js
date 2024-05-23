"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59024],{7196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=r(74848),a=r(28453),s=r(94331);const i={title:"mktcap",description:"The mktcap page provides comprehensive usage, parameters and examples for creating a market cap weighted portfolio. The page is very useful for investors and financial analysts looking for systematic ways to allocate their investments based on market cap measurements.",keywords:["mktcap","portfolio","market cap","weighted portfolio","asset allocation","risk measures","investment strategy"]},o=void 0,d={id:"terminal/reference/portfolio/po/mktcap",title:"mktcap",description:"The mktcap page provides comprehensive usage, parameters and examples for creating a market cap weighted portfolio. The page is very useful for investors and financial analysts looking for systematic ways to allocate their investments based on market cap measurements.",source:"@site/content/terminal/reference/portfolio/po/mktcap.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/mktcap",permalink:"/terminal/reference/portfolio/po/mktcap",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/mktcap.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"mktcap",description:"The mktcap page provides comprehensive usage, parameters and examples for creating a market cap weighted portfolio. The page is very useful for investors and financial analysts looking for systematic ways to allocate their investments based on market cap measurements.",keywords:["mktcap","portfolio","market cap","weighted portfolio","asset allocation","risk measures","investment strategy"]},sidebar:"tutorialSidebar",previous:{title:"minrisk",permalink:"/terminal/reference/portfolio/po/minrisk"},next:{title:"nco",permalink:"/terminal/reference/portfolio/po/nco"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"portfolio/po/mktcap - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"Returns a portfolio that is weighted based on Market Cap."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"mktcap [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}] [-mt METHOD] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_measure"}),(0,n.jsx)(t.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns"}),(0,n.jsx)(t.td,{children:"MV"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, WR, ADD, UCI, CDaR, EDaR, MDD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"nan_fill_method"}),(0,n.jsx)(t.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,n.jsx)(t.td,{children:"time"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"historic_period"}),(0,n.jsx)(t.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,n.jsx)(t.td,{children:"3y"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_period"}),(0,n.jsx)(t.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_period"}),(0,n.jsx)(t.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_returns"}),(0,n.jsx)(t.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_frequency"}),(0,n.jsx)(t.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,n.jsx)(t.td,{children:"d"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"d, w, m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_nan"}),(0,n.jsx)(t.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,n.jsx)(t.td,{children:"0.05"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"threshold_value"}),(0,n.jsx)(t.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,n.jsx)(t.td,{children:"0.3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_free"}),(0,n.jsx)(t.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,n.jsx)(t.td,{children:"0.02924"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"significance_level"}),(0,n.jsx)(t.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,n.jsx)(t.td,{children:"0.05"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_allocation"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"Save portfolio with personalized or default name"}),(0,n.jsx)(t.td,{children:"MKTCAP_0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"2022 Apr 05, 14:53 (\ud83e\udd8b) /portfolio/po/ $ mktcap\n\n [3 Years] Weighted Portfolio based on marketCap\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 32.03 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 18.73 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  1.21 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502  7.10 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502 26.20 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502  1.92 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502 12.79 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 47.78%\nAnnual (by \u221a252) volatility: 30.44%\nSharpe ratio: 1.5636\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);