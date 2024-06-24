"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53175],{885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=r(74848),i=r(28453),a=r(94331);const s={title:"maxret",description:"The 'maxret' function is designed to maximize the return of a portfolio. It allows users to set multiple parameters and constraints like target return and risk, portfolio allocation, risk measure, and more. It supports various calculation methods and can handle various types of data.",keywords:["portfolio optimization","return maximization","risk management","financial data analysis","historical data","return calculation","covariance estimation","shrinkage method","risk-free rate","significance level","CVaR","EVaR","CDaR","MDD","Sharp ratio"]},o=void 0,d={id:"terminal/reference/portfolio/po/maxret",title:"maxret",description:"The 'maxret' function is designed to maximize the return of a portfolio. It allows users to set multiple parameters and constraints like target return and risk, portfolio allocation, risk measure, and more. It supports various calculation methods and can handle various types of data.",source:"@site/content/terminal/reference/portfolio/po/maxret.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/maxret",permalink:"/terminal/reference/portfolio/po/maxret",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/maxret.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"maxret",description:"The 'maxret' function is designed to maximize the return of a portfolio. It allows users to set multiple parameters and constraints like target return and risk, portfolio allocation, risk measure, and more. It supports various calculation methods and can handle various types of data.",keywords:["portfolio optimization","return maximization","risk management","financial data analysis","historical data","return calculation","covariance estimation","shrinkage method","risk-free rate","significance level","CVaR","EVaR","CDaR","MDD","Sharp ratio"]},sidebar:"tutorialSidebar",previous:{title:"maxdiv",permalink:"/terminal/reference/portfolio/po/maxdiv"},next:{title:"maxsharpe",permalink:"/terminal/reference/portfolio/po/maxsharpe"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"portfolio/po/maxret - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"Maximizes the portfolio's return"}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"maxret [-tr TARGET_RETURN] [-tk TARGET_RISK] [-m {hist,ewma1,ewma2}] [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}] [-de SMOOTHING_FACTOR_EWMA] [-vs SHORT_ALLOCATION] [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}] [-mt METHOD] [-ct CATEGORIES] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_return"}),(0,n.jsx)(t.td,{children:"Constraint on minimum level of portfolio's return"}),(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_risk"}),(0,n.jsx)(t.td,{children:"Constraint on maximum level of portfolio's risk"}),(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expected_return"}),(0,n.jsx)(t.td,{children:"Method used to estimate the expected return vector"}),(0,n.jsx)(t.td,{children:"hist"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"hist, ewma1, ewma2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"covariance"}),(0,n.jsx)(t.td,{children:"Method used to estimate covariance matrix. Possible values are 'hist': historical method 'ewma1': exponential weighted moving average with adjust=True 'ewma2': exponential weighted moving average with adjust=False 'ledoit': Ledoit and Wolf shrinkage method 'oas': oracle shrinkage method 'shrunk': scikit-learn shrunk method 'gl': graphical lasso method 'jlogo': j-logo covariance 'fixed': takes average of eigenvalues above max Marchenko Pastour limit 'spectral': makes zero eigenvalues above max Marchenko Pastour limit 'shrink': Lopez de Prado's book shrinkage method"}),(0,n.jsx)(t.td,{children:"hist"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"hist, ewma1, ewma2, ledoit, oas, shrunk, gl, jlogo, fixed, spectral, shrink"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"smoothing_factor_ewma"}),(0,n.jsx)(t.td,{children:"Smoothing factor for ewma estimators"}),(0,n.jsx)(t.td,{children:"0.94"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"short_allocation"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio in short positions"}),(0,n.jsx)(t.td,{children:"0.0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_measure"}),(0,n.jsx)(t.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns"}),(0,n.jsx)(t.td,{children:"MV"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, WR, ADD, UCI, CDaR, EDaR, MDD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"nan_fill_method"}),(0,n.jsx)(t.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,n.jsx)(t.td,{children:"time"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"categories"}),(0,n.jsx)(t.td,{children:"Show selected categories"}),(0,n.jsx)(t.td,{children:"ASSET_CLASS, COUNTRY, SECTOR, INDUSTRY"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"historic_period"}),(0,n.jsx)(t.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,n.jsx)(t.td,{children:"3y"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_period"}),(0,n.jsx)(t.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_period"}),(0,n.jsx)(t.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_returns"}),(0,n.jsx)(t.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_frequency"}),(0,n.jsx)(t.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,n.jsx)(t.td,{children:"d"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"d, w, m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_nan"}),(0,n.jsx)(t.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,n.jsx)(t.td,{children:"0.05"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"threshold_value"}),(0,n.jsx)(t.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,n.jsx)(t.td,{children:"0.3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_free"}),(0,n.jsx)(t.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,n.jsx)(t.td,{children:"0.02924"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"significance_level"}),(0,n.jsx)(t.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,n.jsx)(t.td,{children:"0.05"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_allocation"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"Save portfolio with personalized or default name"}),(0,n.jsx)(t.td,{children:"MAXRET_0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"[3 Years] Maximal return portfolio using\nvolatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502 100.0 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 124.85%\nAnnual (by \u221a252) volatility: 68.44%\nSharpe ratio: 1.8215\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),i=r(74848);function a(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);