"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79662],{93044:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=i(74848),l=i(28453),s=i(94331);const r={title:"Quantitative Analysis",description:"The page provides a comprehensive guide on how to use the 'qa' module of the Terminal's Quantitative Analysis menu for SDK environment. It contains detailed information about the grouping of functions into categories, examples on their usage, and how they provide users more ways to interact with the function library.",keywords:["Quantitative Analysis","SDK Environment","Library of Functions","Code Completion","Statistics","Risk Management","API Integration","Data Relation","Nasdaq Data Link API","Risk-Adjusted Return","openbb.qa"]},d=void 0,a={id:"sdk/data-available/quantitative-analysis",title:"Quantitative Analysis",description:"The page provides a comprehensive guide on how to use the 'qa' module of the Terminal's Quantitative Analysis menu for SDK environment. It contains detailed information about the grouping of functions into categories, examples on their usage, and how they provide users more ways to interact with the function library.",source:"@site/content/sdk/data-available/quantitative-analysis.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/quantitative-analysis",permalink:"/sdk/data-available/quantitative-analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/quantitative-analysis.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"Quantitative Analysis",description:"The page provides a comprehensive guide on how to use the 'qa' module of the Terminal's Quantitative Analysis menu for SDK environment. It contains detailed information about the grouping of functions into categories, examples on their usage, and how they provide users more ways to interact with the function library.",keywords:["Quantitative Analysis","SDK Environment","Library of Functions","Code Completion","Statistics","Risk Management","API Integration","Data Relation","Nasdaq Data Link API","Risk-Adjusted Return","openbb.qa"]},sidebar:"tutorialSidebar",previous:{title:"Futures",permalink:"/sdk/data-available/futures"},next:{title:"Technical Analysis",permalink:"/sdk/data-available/ta"}},h={},c=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Get Data",id:"get-data",level:3},{value:"Summary",id:"summary",level:3},{value:"Spread",id:"spread",level:3},{value:"Rolling",id:"rolling",level:3},{value:"Unit Root Test",id:"unit-root-test",level:3}];function x(t){const e={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"Quantitative Analysis - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"qa"})," module is the Terminal's Quantitative Analysis menu for the SDK environment. It provides users with more ways to interact with the library of functions, and provides cross-disciplinary utility. To activate the code completion for the menu, enter ",(0,n.jsx)(e.code,{children:"."})," after, ",(0,n.jsx)(e.code,{children:"openbb.qa"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,n.jsxs)(e.p,{children:["The functions of the ",(0,n.jsx)(e.code,{children:"qa"})," module are grouped into categories, listed below along with a short description."]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.acf"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Plot"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Plots Auto and Partial Correlation of Returns and Change in Returns"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.bw"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Plot"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Box and Whisker Plot"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.calculate_adjusted_var"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Risk"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Calculates VaR, adjusted for skew and kurtosis (Cornish-Fisher-Expansion)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.cdf"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Plot"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Plots the Cumulative Distribution Function"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.cusum"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Plot"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Plots the Cumulative Sum Algorithm"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.decompose"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Plot"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Decomposition in Cyclic-Trend, Season & Residuals of Prices"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.es"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Statistics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Expected Shortfall per percentile"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.kurtosis"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Rolling Metrics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Kurtosis of Distribution of Prices"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.line"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Plot"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Customizable Line Plot, With Annotations"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.normality"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Statistics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Normality Statistics and Tests"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.omega"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Risk"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Omega Ratio (Risk/Return Performance Measure)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.quantile"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Rolling Metrics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Median and Quantile of Prices"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.qqplot"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Plot"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"QQ Plot for Data Against Normal Quantiles"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.rolling"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Rolling Metrics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Mean and Standard Deviation of Prices"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.sharpe"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Risk"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Sharpe Ratio (Measure of Risk-Adjusted Return)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.skew"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Rolling Metrics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Skewness of Distribution of Prices"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.sortino"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Risk"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Sortino Ratio Risk Adjustment Metric"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.spread"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Rolling Metrics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Rolling Variance and Standard Deviation of Prices"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.summary"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Statistics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"A Brief Summary of Statistics for the DataFrame"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.unitroot"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Statistics"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Normality Statistics and Tests"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.qa.var"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Risk"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"Value at Risk"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.h3,{id:"import-statements",children:"Import Statements"}),"\n",(0,n.jsx)(e.p,{children:"The examples below will assume that the following statements are included in the first block of code:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"import quandl\nimport pandas as pd\nfrom openbb_terminal.sdk import openbb\nfrom openbb_terminal import config_terminal as cfg\n\n# %matplotlib inline (uncomment if using a Jupyter environment)\n"})}),"\n",(0,n.jsx)(e.h3,{id:"get-data",children:"Get Data"}),"\n",(0,n.jsx)(e.p,{children:"This example collects data from Nasdaq Data Link, and requires registering for a free API key. Qunadl is the Python client for the Nasdaq Data Link API."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"shiller_pe_rdiff = quandl.get('MULTPL/SHILLER_PE_RATIO_MONTH', collapse = 'monthly', transform = 'rdiff', api_key = cfg.API_KEY_QUANDL)\nshiller_pe_rdiff.rename(columns={'Value':'P/E % Change'}, inplace = True)\nshiller_pe_ratio = quandl.get('MULTPL/SHILLER_PE_RATIO_MONTH', collapse = 'monthly', api_key = cfg.API_KEY_QUANDL)\nshiller_pe_ratio.rename(columns={'Value':'P/E Ratio'}, inplace = True)\n\nsp500_inf_adj = quandl.get('MULTPL/SP500_INFLADJ_MONTH', collapse = 'monthly', api_key = cfg.API_KEY_QUANDL)\nsp500_inf_adj.rename(columns = {'Value': 'S&P Inflation-Adjusted Value'}, inplace = True)\nsp500_inf_adj_rdiff = quandl.get('MULTPL/SP500_INFLADJ_MONTH', collapse = 'monthly', transform = 'rdiff', api_key = cfg.API_KEY_QUANDL)\nsp500_inf_adj_rdiff.rename(columns = {'Value':'S&P 500 % Change'}, inplace = True)\n\nshiller_pe = shiller_pe_ratio.join(shiller_pe_rdiff)\nsp500_inf_adj = sp500_inf_adj.join(sp500_inf_adj_rdiff)\n\nsp500_df = sp500_inf_adj.join(shiller_pe)\n\nsp500_df\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"S&P Inflation-Adjusted Value"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"S&P 500 % Change"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"P/E Ratio"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"P/E % Change"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-08-31 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3955"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0092504"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"29.64"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.022069"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-09-30 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3585.62"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.0933957"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"26.84"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.0944669"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-31 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3871.98"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0798635"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"28.53"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0629657"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-30 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3856.1"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.00410126"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"28.37"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.00560813"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:"This particular data series contains 150 years of monthly values. It is among the longest uninterrupted timeseries available in the public domain, and it is cited frequently in macroeconomic research."}),"\n",(0,n.jsx)(e.h3,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(e.p,{children:["Get a summary of statistics for each column with ",(0,n.jsx)(e.code,{children:"qa.summary"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.qa.summary(sp500_df)\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"}}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"S&P Inflation-Adjusted Value"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"S&P 500 % Change"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"P/E Ratio"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"P/E % Change"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"count"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1823"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1822"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1822"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1821"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"mean"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"697.396"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0028703"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"16.9914"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00137084"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"std"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"834.501"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0424378"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"7.07094"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0412196"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"min"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"80.31"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.264738"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"4.78"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.268992"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"10%"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"152.404"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.0447494"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"9.31"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.0449735"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"25%"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"203.47"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.0172803"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"11.7"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.0183028"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"50%"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"309.83"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00553122"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"15.895"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00446999"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"75%"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"778.42"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0260009"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"20.5575"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0246575"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"90%"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1907.87"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.04505"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"26.467"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0426357"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"max"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"4786.79"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.514085"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"44.19"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.511986"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"var"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"696392"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00180097"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"49.9982"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00169906"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"spread",children:"Spread"}),"\n",(0,n.jsx)(e.p,{children:"Add the variance and standard deviation, over a specified window (three-months), to the DataFrame:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"std,variance = openbb.qa.spread(data = sp500_df['S&P 500 % Change'], window = 3)\nstd.rename(columns = {'STDEV_3':'Three-Month Standard Deviation'}, inplace = True)\nvariance.rename(columns = {'VAR_3': 'Three-Month Variance'}, inplace =True)\nsp500_df = sp500_df.join([std,variance])\nsp500_df.rename_axis('date', inplace = True)\nsp500_df.tail(2)\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"S&P Inflation-Adjusted Value"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"S&P 500 % Change"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"P/E Ratio"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"P/E % Change"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Three-Month Standard Deviation"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"Three-Month Variance"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-10-31 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3871.98"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0798635"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"28.53"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0629657"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0871217"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00759019"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-30 00:00:00"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3856.1"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.00410126"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"28.37"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-0.00560813"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.0866432"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00750705"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["The rolling mean average and standard deviation is calculated with the ",(0,n.jsx)(e.code,{children:"rolling"})," command. Adding, ",(0,n.jsx)(e.code,{children:"_chart"}),", to this will return an inline chart within a Jupyter Notebook. For the example below, window, ",(0,n.jsx)(e.code,{children:"60"}),", represents a five-year period."]}),"\n",(0,n.jsx)(e.h3,{id:"rolling",children:"Rolling"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"openbb.qa.rolling_chart(sp500_df, target = 'P/E Ratio', window = 60, symbol = '')\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://user-images.githubusercontent.com/85772166/202975615-4400ae87-9cd7-4481-94f1-dfb69de784d6.png",alt:"openbb.qa.rolling_chart",title:"openbb.qa.rolling_chart"})}),"\n",(0,n.jsx)(e.h3,{id:"unit-root-test",children:"Unit Root Test"}),"\n",(0,n.jsxs)(e.p,{children:["Perform a unit root test with ",(0,n.jsx)(e.code,{children:"unitroot"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"help(openbb.qa.unitroot)\n\n        Parameters\n        ----------\n        data : pd.DataFrame\n            DataFrame of target variable\n        fuller_reg : str\n            Type of regression of ADF test. Can be \u2018c\u2019,\u2019ct\u2019,\u2019ctt\u2019,\u2019nc\u2019 'c' - Constant and t - trend order\n        kpss_reg : str\n            Type of regression for KPSS test.  Can be \u2018c\u2019,\u2019ct'\n\n        Returns\n        -------\n        pd.DataFrame\n            Dataframe with results of ADF test and KPSS test\n\nopenbb.qa.unitroot(sp500_df['P/E % Change'])\n"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"}}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"ADF"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"KPSS"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Test Statistic"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-10.7075"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.34061374135067696"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"P-Value"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3.3972e-19"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"0.1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"NLags"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"20"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Nobs"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1800"}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"ICBest"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"-6491.14"}),(0,n.jsx)(e.td,{style:{textAlign:"left"}})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(x,{...t})}):x(t)}},94331:(t,e,i)=>{i.d(e,{A:()=>s});i(96540);var n=i(5260),l=i(74848);function s(t){let{title:e}=t;return(0,l.jsx)(n.A,{children:(0,l.jsx)("title",{children:e})})}},28453:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>d});var n=i(96540);const l={},s=n.createContext(l);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);