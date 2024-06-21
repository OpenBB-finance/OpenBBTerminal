"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26356],{53736:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(74848),n=t(28453),i=t(94331);const s={title:"rsquare",description:"Detailed information about using the 'rsquare' function in the 'openbb' portfolio metric, which calculates the R2 Score between a portfolio and a selected benchmark. The page includes examples of usage.",keywords:["portfolio","benchmark","R2 Score","PortfolioEngine","openbb.portfolio.metric.rsquare","openbb.portfolio.load"]},l=void 0,a={id:"sdk/reference/portfolio/metric/rsquare",title:"rsquare",description:"Detailed information about using the 'rsquare' function in the 'openbb' portfolio metric, which calculates the R2 Score between a portfolio and a selected benchmark. The page includes examples of usage.",source:"@site/content/sdk/reference/portfolio/metric/rsquare.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/rsquare",permalink:"/sdk/reference/portfolio/metric/rsquare",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/rsquare.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"rsquare",description:"Detailed information about using the 'rsquare' function in the 'openbb' portfolio metric, which calculates the R2 Score between a portfolio and a selected benchmark. The page includes examples of usage.",keywords:["portfolio","benchmark","R2 Score","PortfolioEngine","openbb.portfolio.metric.rsquare","openbb.portfolio.load"]},sidebar:"tutorialSidebar",previous:{title:"profitfactor",permalink:"/sdk/reference/portfolio/metric/profitfactor"},next:{title:"sharpe",permalink:"/sdk/reference/portfolio/metric/sharpe"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"portfolio.metric.rsquare - Reference | OpenBB SDK Docs"}),"\n",(0,o.jsx)(r.p,{children:"Get R2 Score for portfolio and benchmark selected"}),"\n",(0,o.jsxs)(r.p,{children:["Source Code: [",(0,o.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L947",children:"link"}),"]"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"openbb.portfolio.metric.rsquare(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Name"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"}),(0,o.jsx)(r.th,{children:"Default"}),(0,o.jsx)(r.th,{children:"Optional"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"portfolio_engine"}),(0,o.jsx)(r.td,{children:"PortfolioEngine"}),(0,o.jsxs)(r.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,o.jsx)("br",{}),"Use ",(0,o.jsx)(r.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"False"})]})})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"pd.DataFrame"}),(0,o.jsx)(r.td,{children:"DataFrame with R2 Score between portfolio and benchmark for different periods"})]})})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.rsquare(p)\n'})}),"\n",(0,o.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var o=t(5260),n=t(74848);function i(e){let{title:r}=e;return(0,n.jsx)(o.A,{children:(0,n.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var o=t(96540);const n={},i=o.createContext(n);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);