"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31013],{69013:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=o(74848),r=o(28453),i=o(94331);const s={title:"kurtosis",description:"This documentation page provides information on how to get the kurtosis for portfolio and benchmark selected using the OpenBB finance portfolio engine. The page contains source code, parameters, return types and examples.",keywords:["OpenBB finance portfolio engine","portfolio metrics","kurtosis","portfolio and benchmark","data analysis","PortfolioEngine class instance","portfolio load"]},l=void 0,a={id:"sdk/reference/portfolio/metric/kurtosis",title:"kurtosis",description:"This documentation page provides information on how to get the kurtosis for portfolio and benchmark selected using the OpenBB finance portfolio engine. The page contains source code, parameters, return types and examples.",source:"@site/content/sdk/reference/portfolio/metric/kurtosis.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/kurtosis",permalink:"/sdk/reference/portfolio/metric/kurtosis",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/kurtosis.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"kurtosis",description:"This documentation page provides information on how to get the kurtosis for portfolio and benchmark selected using the OpenBB finance portfolio engine. The page contains source code, parameters, return types and examples.",keywords:["OpenBB finance portfolio engine","portfolio metrics","kurtosis","portfolio and benchmark","data analysis","PortfolioEngine class instance","portfolio load"]},sidebar:"tutorialSidebar",previous:{title:"kelly",permalink:"/sdk/reference/portfolio/metric/kelly"},next:{title:"maxdrawdown",permalink:"/sdk/reference/portfolio/metric/maxdrawdown"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"portfolio.metric.kurtosis - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get kurtosis for portfolio and benchmark selected"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1032",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.metric.kurtosis(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PortfolioEngine"}),(0,n.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"DataFrame with kurtosis for portfolio and benchmark for different periods"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.kurtosis(p)\n'})}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>i});o(96540);var n=o(5260),r=o(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>l});var n=o(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);