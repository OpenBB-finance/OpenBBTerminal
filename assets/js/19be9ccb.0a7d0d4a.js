"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62913],{1787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),i=n(28453),a=n(94331);const s={title:"normality",description:"The page provides comprehensive instructions on how to use the 'normality' function in stock market data analysis. It offers examples of how the function can be used to calculate different statistics, including Kurtosis, Skewness, Jarque-Bera, Shapiro-Wilk, and Kolmogorov-Smirnov, thereby assisting in deciding whether the data has a Gaussian distribution.",keywords:["normality tests","stock market","statistics","Kurtosis","Skewness","Jarque-Bera","Shapiro-Wilk","Kolmogorov-Smirnov","data analysis"]},o=void 0,c={id:"terminal/reference/crypto/qa/normality",title:"normality",description:"The page provides comprehensive instructions on how to use the 'normality' function in stock market data analysis. It offers examples of how the function can be used to calculate different statistics, including Kurtosis, Skewness, Jarque-Bera, Shapiro-Wilk, and Kolmogorov-Smirnov, thereby assisting in deciding whether the data has a Gaussian distribution.",source:"@site/content/terminal/reference/crypto/qa/normality.md",sourceDirName:"terminal/reference/crypto/qa",slug:"/terminal/reference/crypto/qa/normality",permalink:"/terminal/reference/crypto/qa/normality",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/qa/normality.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"normality",description:"The page provides comprehensive instructions on how to use the 'normality' function in stock market data analysis. It offers examples of how the function can be used to calculate different statistics, including Kurtosis, Skewness, Jarque-Bera, Shapiro-Wilk, and Kolmogorov-Smirnov, thereby assisting in deciding whether the data has a Gaussian distribution.",keywords:["normality tests","stock market","statistics","Kurtosis","Skewness","Jarque-Bera","Shapiro-Wilk","Kolmogorov-Smirnov","data analysis"]},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/reference/crypto/qa/load"},next:{title:"pick",permalink:"/terminal/reference/crypto/qa/pick"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function m(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"crypto/qa/normality - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Normality tests"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"normality\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.p,{children:"This command has no parameters"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:11 (\ud83e\udd8b) /stocks/qa/ $ normality\n            Normality Statistics\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503                    \u2503 Statistic \u2503 p-value \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 Kurtosis           \u2502 10.2422   \u2502 0.0000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Skewness           \u2502 -0.2238   \u2502 0.8229  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Jarque-Bera        \u2502 1155.1958 \u2502 0.0000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Shapiro-Wilk       \u2502 0.9265    \u2502 0.0000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Kolmogorov-Smirnov \u2502 0.4680    \u2502 0.0000  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(5260),i=n(74848);function a(e){let{title:t}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);