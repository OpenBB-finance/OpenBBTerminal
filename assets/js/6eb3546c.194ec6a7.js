"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4727],{15754:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(74848),n=o(28453),i=o(94331);const a={title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",keywords:["payoff ratio","portfolio","time periods","portfolio metric","no losing trades"]},s=void 0,l={id:"sdk/reference/portfolio/metric/payoff",title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",source:"@site/content/sdk/reference/portfolio/metric/payoff.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/payoff",permalink:"/sdk/reference/portfolio/metric/payoff",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/payoff.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",keywords:["payoff ratio","portfolio","time periods","portfolio metric","no losing trades"]},sidebar:"tutorialSidebar",previous:{title:"maxdrawdown",permalink:"/sdk/reference/portfolio/metric/maxdrawdown"},next:{title:"profitfactor",permalink:"/sdk/reference/portfolio/metric/profitfactor"}},f={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"portfolio.metric.payoff - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get payoff ratio"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1590",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.metric.payoff(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.p,{children:"This function does not take any parameters."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"DataFrame of payoff ratio of the portfolio during different time periods"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.payoff(p)\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"During some time periods there were no losing trades. Thus some values could not be calculated.\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>i});o(96540);var r=o(5260),n=o(74848);function i(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var r=o(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);