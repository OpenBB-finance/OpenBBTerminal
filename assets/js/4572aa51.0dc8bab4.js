"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29149],{68880:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(74848),o=n(28453),a=n(94331);const i={title:"summary",description:"OpenBB finance page detailing the functionality to gather portfolio and benchmark return summaries. Documentation includes function parameters, return types and examples. The core function openbb.portfolio.summary can perform complex calculations and return a data frame of portfolio and benchmark returns summary.",keywords:["OpenBB finance","portfolio summary","benchmark returns","portfolio transactions","portfolio calculations","cumulative returns","risk free rate","data frame","openbb.portfolio","portfolio engine"]},s=void 0,l={id:"sdk/reference/portfolio/summary",title:"summary",description:"OpenBB finance page detailing the functionality to gather portfolio and benchmark return summaries. Documentation includes function parameters, return types and examples. The core function openbb.portfolio.summary can perform complex calculations and return a data frame of portfolio and benchmark returns summary.",source:"@site/content/sdk/reference/portfolio/summary.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/summary",permalink:"/sdk/reference/portfolio/summary",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/summary.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"summary",description:"OpenBB finance page detailing the functionality to gather portfolio and benchmark return summaries. Documentation includes function parameters, return types and examples. The core function openbb.portfolio.summary can perform complex calculations and return a data frame of portfolio and benchmark returns summary.",keywords:["OpenBB finance","portfolio summary","benchmark returns","portfolio transactions","portfolio calculations","cumulative returns","risk free rate","data frame","openbb.portfolio","portfolio engine"]},sidebar:"tutorialSidebar",previous:{title:"show",permalink:"/sdk/reference/portfolio/show"},next:{title:"var",permalink:"/sdk/reference/portfolio/var"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.A,{title:"portfolio.summary - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(r.p,{children:"Get portfolio and benchmark returns summary"}),"\n",(0,t.jsxs)(r.p,{children:["Source Code: [",(0,t.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L692",children:"link"}),"]"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'openbb.portfolio.summary(portfolio_engine: portfolio_engine.PortfolioEngine, window: str = "all", risk_free_rate: float = 0)\n'})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Optional"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"portfolio_engine"}),(0,t.jsx)(r.td,{children:"PortfolioEngine"}),(0,t.jsxs)(r.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,t.jsx)("br",{}),"Use ",(0,t.jsx)(r.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,t.jsx)(r.td,{children:"None"}),(0,t.jsx)(r.td,{children:"False"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"window"}),(0,t.jsx)(r.td,{children:"str"}),(0,t.jsx)(r.td,{children:"interval to compare cumulative returns and benchmark"}),(0,t.jsx)(r.td,{children:"all"}),(0,t.jsx)(r.td,{children:"True"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"risk_free_rate"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"Risk free rate for calculations"}),(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pd.DataFrame"}),(0,t.jsx)(r.td,{children:"DataFrame with portfolio and benchmark returns summary"})]})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.summary(p)\n'})}),"\n",(0,t.jsx)(r.hr,{})]})}function m(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},94331:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var t=n(5260),o=n(74848);function a(e){let{title:r}=e;return(0,o.jsx)(t.A,{children:(0,o.jsx)("title",{children:r})})}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var t=n(96540);const o={},a=t.createContext(o);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);