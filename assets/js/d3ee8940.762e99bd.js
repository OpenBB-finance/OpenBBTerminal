"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8103],{33392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453),i=n(94331);const a={title:"autoets",description:"The page provides information on how to use the autoets function for automatic Error, Trend, Seasonality (ETS) forecasting. It includes details on the usage of this function, its parameters, and an example to illustrate its application.",keywords:["autoets","ETS forecasting","automatic ETS","Error Trend Seasonality","forecast","parameters","prediction","seasonality"]},d=void 0,o={id:"terminal/reference/forecast/autoets",title:"autoets",description:"The page provides information on how to use the autoets function for automatic Error, Trend, Seasonality (ETS) forecasting. It includes details on the usage of this function, its parameters, and an example to illustrate its application.",source:"@site/content/terminal/reference/forecast/autoets.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/autoets",permalink:"/terminal/reference/forecast/autoets",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/autoets.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"autoets",description:"The page provides information on how to use the autoets function for automatic Error, Trend, Seasonality (ETS) forecasting. It includes details on the usage of this function, its parameters, and an example to illustrate its application.",keywords:["autoets","ETS forecasting","automatic ETS","Error Trend Seasonality","forecast","parameters","prediction","seasonality"]},sidebar:"tutorialSidebar",previous:{title:"autoces",permalink:"/terminal/reference/forecast/autoces"},next:{title:"autoselect",permalink:"/terminal/reference/forecast/autoselect"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"forecast /autoets - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsxs)(t.p,{children:["Perform Automatic ETS (Error, Trend, Seasonality) forecast: ",(0,r.jsx)(t.a,{href:"https://nixtla.github.io/statsforecast/examples/getting_started_with_auto_arima_and_ets.html",children:"https://nixtla.github.io/statsforecast/examples/getting_started_with_auto_arima_and_ets.html"})]}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"autoets [--naive] [-d {}] [-c TARGET_COLUMN] [-n N_DAYS] [-s {N,A,M}] [-p SEASONAL_PERIODS] [-w START_WINDOW] [--end S_END_DATE] [--start S_START_DATE] [--residuals] [--forecast-only] [--export-pred-raw]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"naive"}),(0,r.jsx)(t.td,{children:"Show the naive baseline for a model."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target_dataset"}),(0,r.jsx)(t.td,{children:"The name of the dataset you want to select"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target_column"}),(0,r.jsx)(t.td,{children:"The name of the specific column you want to use"}),(0,r.jsx)(t.td,{children:"close"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_days"}),(0,r.jsx)(t.td,{children:"prediction days."}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seasonal"}),(0,r.jsx)(t.td,{children:"Seasonality: N: None, A: Additive, M: Multiplicative."}),(0,r.jsx)(t.td,{children:"A"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"N, A, M"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"seasonal_periods"}),(0,r.jsx)(t.td,{children:"Seasonal periods: 4: Quarterly, 7: Daily"}),(0,r.jsx)(t.td,{children:"7"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_window"}),(0,r.jsx)(t.td,{children:"Start point for rolling training and forecast window. 0.0-1.0"}),(0,r.jsx)(t.td,{children:"0.85"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"s_end_date"}),(0,r.jsx)(t.td,{children:"The end date (format YYYY-MM-DD) to select for testing"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"s_start_date"}),(0,r.jsx)(t.td,{children:"The start date (format YYYY-MM-DD) to select for testing"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"residuals"}),(0,r.jsx)(t.td,{children:"Show the residuals for the model."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"forecast_only"}),(0,r.jsx)(t.td,{children:"Do not plot the historical data without forecasts."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"export_pred_raw"}),(0,r.jsx)(t.td,{children:"Export predictions to a csv file."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Oct 21, 18:20 (\ud83e\udd8b) /forecast/ $ load AAPL\n\n2022 Oct 21, 18:21 (\ud83e\udd8b) /forecast/ $ autoets AAPL\n\n\n\n   Actual price: 143.39\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Datetime   \u2503 Prediction \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-10-21 \u2502 143.42     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-10-24 \u2502 143.42     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-10-25 \u2502 143.42     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-10-26 \u2502 143.42     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-10-27 \u2502 143.42     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/10517170/197297075-d141d735-0b35-43cc-bf4f-e746b6b1001e.png",alt:"autoets"})}),"\n",(0,r.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);