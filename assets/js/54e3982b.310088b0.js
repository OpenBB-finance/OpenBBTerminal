"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89331],{58207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(74848),s=t(28453),a=t(94331);const i={title:"bpag",description:"The page provides information on how to use the 'bpag' command to conduct the Breusch-Pagan heteroscedasticity test in econometrics. It requires running OLS with dependent and independent variables and shows whether there is heteroscedasticity in the data.",keywords:["Breusch-Pagan test","heteroscedasticity test","OLS","econometrics","bpag command","data analysis"]},o=void 0,c={id:"terminal/reference/econometrics/bpag",title:"bpag",description:"The page provides information on how to use the 'bpag' command to conduct the Breusch-Pagan heteroscedasticity test in econometrics. It requires running OLS with dependent and independent variables and shows whether there is heteroscedasticity in the data.",source:"@site/content/terminal/reference/econometrics/bpag.md",sourceDirName:"terminal/reference/econometrics",slug:"/terminal/reference/econometrics/bpag",permalink:"/terminal/reference/econometrics/bpag",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/econometrics/bpag.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"bpag",description:"The page provides information on how to use the 'bpag' command to conduct the Breusch-Pagan heteroscedasticity test in econometrics. It requires running OLS with dependent and independent variables and shows whether there is heteroscedasticity in the data.",keywords:["Breusch-Pagan test","heteroscedasticity test","OLS","econometrics","bpag command","data analysis"]},sidebar:"tutorialSidebar",previous:{title:"bgod",permalink:"/terminal/reference/econometrics/bgod"},next:{title:"clean",permalink:"/terminal/reference/econometrics/clean"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"econometrics /bpag - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(n.p,{children:"Show Breusch-Pagan heteroscedasticity test results. Needs OLS to be run in advance with independent and dependent variables"}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"bpag\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"This command has no parameters"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"2022 Jun 01, 06:29 (\ud83e\udd8b) /econometrics/ $ load longley -a ll\n\n2022 Jun 01, 06:29 (\ud83e\udd8b) /econometrics/ $ ols -d ll.totemp -i ll.gnpdefl,ll.gnp,ll.unemp,ll.armed,ll.pop,ll.year\n                                 OLS Regression Results\n=======================================================================================\nDep. Variable:              ll.totemp   R-squared (uncentered):                   1.000\nModel:                            OLS   Adj. R-squared (uncentered):              1.000\nMethod:                 Least Squares   F-statistic:                          5.052e+04\nDate:                Wed, 01 Jun 2022   Prob (F-statistic):                    8.20e-22\nTime:                        12:29:44   Log-Likelihood:                         -117.56\nNo. Observations:                  16   AIC:                                      247.1\nDf Residuals:                      10   BIC:                                      251.8\nDf Model:                           6\nCovariance Type:            nonrobust\n==============================================================================\n                 coef    std err          t      P|t|      [0.025      0.975]\n------------------------------------------------------------------------------\nll.gnpdefl   -52.9936    129.545     -0.409      0.691    -341.638     235.650\nll.gnp         0.0711      0.030      2.356      0.040       0.004       0.138\nll.unemp      -0.4235      0.418     -1.014      0.335      -1.354       0.507\nll.armed      -0.5726      0.279     -2.052      0.067      -1.194       0.049\nll.pop        -0.4142      0.321     -1.289      0.226      -1.130       0.302\nll.year       48.4179     17.689      2.737      0.021       9.003      87.832\n==============================================================================\nOmnibus:                        1.443   Durbin-Watson:                   1.277\nProb(Omnibus):                  0.486   Jarque-Bera (JB):                0.605\nSkew:                           0.476   Prob(JB):                        0.739\nKurtosis:                       3.031   Cond. No.                     4.56e+05\n==============================================================================\n\nNotes:\n[1] R\xb2 is computed without centering (uncentered) since the model does not contain a constant.\n[2] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n[3] The condition number is large, 4.56e+05. This might indicate that there are\nstrong multicollinearity or other numerical problems.\n\nWarnings:\nkurtosistest only valid for n=20 ... continuing anyway, n=16\n\n2022 Jun 01, 06:30 (\ud83e\udd8b) /econometrics/ $ bpag\n\nBreusch-Pagan heteroscedasticity test\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503          \u2503 Breusch-Pagan \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 lm-stat  \u2502 7.90          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 p-value  \u2502 0.16          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 f-stat   \u2502 1.63          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 fp-value \u2502 0.24          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nThe result 0.16 indicates the existence of heteroscedasticity. Consider taking the log or a rate for the dependent variable.\n"})}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(5260),s=t(74848);function a(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);